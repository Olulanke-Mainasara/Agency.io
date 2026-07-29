# Agency.io — Roadmap

Sequenced from soonest/smallest to biggest, based on the architecture review
of the Sanity + Firebase + Next.js stack and the planned AI trip planner
feature.

## 1. Rotate and stop leaking the Sanity write token
- `NEXT_PUBLIC_SANITY_READ_AND_WRITE_TOKEN` was in the client bundle —
  anyone could pull it from devtools and mutate/delete the dataset.
- Rotate it in the Sanity dashboard (treat the old one as compromised).
- Re-add it as a non-`NEXT_PUBLIC_` server-only env var.
- **Status: code done — waiting on the token rotation in the Sanity dashboard.**

## 2. Move Sanity writes behind a server route
- `sanity/lib/deleteDocument.ts` called Sanity's mutate API straight from
  client-reachable code — that's what forced the token to be public.
- Wrap it in an `app/api/...` route so the token never leaves the server.
  This is also the first real API route, which the trip planner will need.
- **Status: done.**

## 3. Clean up the stale branches
- Delete the 5 already-merged branches on GitHub (`All-Pages`,
  `Backend-Functionalities`, `Functionalities-and-Interactions`,
  `Routing-and-Dynamic-Page-Rendering`,
  `vercel/react-server-components-cve-vu-sfv01b`) — verified nothing unique
  is in them.

## 4. Add `.env.example`
- Document every required `NEXT_PUBLIC_*`/Sanity/Firebase var so a new dev
  can boot the app without guessing.
- **Status: done.**

## 5. Decide and stand up a real app database
- Nothing exists today beyond Firebase Auth — no Firestore, no Postgres,
  nowhere to put user-generated data.
- **Decision: Postgres, hosted on Neon (serverless, edge-compatible, no
  proprietary lock-in — plain `DATABASE_URL`), accessed via Drizzle ORM
  (no cold-start query engine, unlike Prisma, and this app already opts
  some routes into the edge runtime).**
- **Status: scaffolding done** — `drizzle.config.ts`, `lib/db/index.ts`
  (Neon HTTP client), `lib/db/schema.ts` (`reviews`, `itineraries` tables),
  and the first migration (`drizzle/0000_init.sql`) are all committed.
  `npm run db:generate|migrate|push|studio` scripts are wired up.
- Still needed: a real `DATABASE_URL` in `.env.local`/Vercel env, then
  `npm run db:push` (or `db:migrate`) to apply the schema to Neon. Not run
  yet — no live connection string was available in this session. Blocks
  steps 6 and 13+.

## 6. Rebuild the review feature on the new database, not Sanity
- **Status: done.** `app/api/reviews` (POST, Zod-validated, requires sign-in,
  `isApproved` defaults false), `lib/db/reviews.ts` query helpers, and
  `AddReviewModal.tsx` now submit for real. `app/company/reviews/page.tsx`
  reads approved reviews straight from Postgres, replacing the old
  `staticReview` hardcoded array (removed).
- Turned out reviews only ever rendered on the site-wide `/company/reviews`
  page — the Sanity `establishment.reviews` field was unused dead wiring —
  so `establishment_id` was made optional rather than required.
- Not done yet: rating aggregation (no per-establishment reviews exist to
  aggregate yet — revisit once establishments have real review volume),
  and real Firebase ID token verification server-side (route currently
  trusts the client-supplied uid; low risk today since reviews sit
  unapproved until moderated, but worth hardening later).
- Still needs the actual migration applied to Neon (`npm run db:push`)
  before this works end-to-end.

## 7. Scope the content: pick 5–10 flagship destinations
- Product decision, not code — decide which cities/countries get real,
  fully-built-out content first instead of covering the whole world thinly.

## 8. Source real data for those destinations
- OpenStreetMap (Overpass API) for establishments, Wikipedia/Wikivoyage for
  place descriptions, Unsplash/Pexels for photos — free and ToS-safe.
- Optional, costs money and has caching restrictions to respect: Google
  Places API for richer establishment data.

## 9. Write and run a seed script
- `@sanity/client` script or `sanity dataset import` with NDJSON (which can
  pull images straight from URLs), populating `country` → `place` →
  `establishment` → `experience`/`service` in that order, respecting the
  schema's reference graph. Leave `review` empty for real users.

## 10. Add a price/cost field to the `establishment` schema
- Needed before the AI trip planner can do anything budget-aware — no cost
  data exists to filter on today.

## 11. Build the trip-generation API route
- Server-side endpoint: resolve destination (user-picked, or server-side
  random pick for "Surprise me" — only from destinations populated in step
  9), pull candidate establishments/experiences from Sanity, call the LLM
  with structured/tool-call output, validate the response with Zod before
  returning it.

## 12. Wire `AIGeneratedTripForm.tsx` to the real endpoint
- Replace the `console.log` submit handler, add streaming so the
  day-by-day itinerary appears progressively, build the itinerary-display
  UI (day cards, activity cards linking to real establishment pages).

## 13. Persist generated itineraries
- Save against the signed-in user in the DB from step 5 so trips aren't
  regenerated (and re-billed) on every visit, and so they're
  shareable/editable.

## 14. Add abuse/cost controls on generation
- Gate behind auth, rate-limit per user, cache identical
  destination+budget+date requests — an unmetered public LLM button is a
  direct cost/abuse target.

## 15. Backfill a test suite
- None exists today. Not urgent, but auth flows, itinerary schema
  validation, and Sanity queries all benefit from it once the app
  stabilizes.

## 16. Expand destination coverage over time
- Once the pipeline from steps 7–9 is proven on the flagship cities,
  repeat it to grow coverage — ongoing, not a one-time task.

---

## Pending decisions

### Auth: stay on Firebase, or move to Neon Auth?
Raised because the DB is now on Neon and it felt natural to consolidate.
Not acted on yet — no code changed.

- **The real problem, if there is one**: Postgres tables reference users by
  a bare `firebaseUid` text column with no actual foreign key (Firebase's
  users don't live in Postgres), so reviews/itineraries can't be joined to
  a real user row, and `app/api/reviews` currently trusts the
  client-supplied uid instead of verifying it server-side (no
  `firebase-admin` in this project).
- **Neon Auth** (built on Stack Auth) would fix this directly — it syncs a
  real `users` table into the same Neon database, giving real FKs/joins and
  server-verifiable sessions without a separate admin SDK.
- **Against it**: Firebase Auth is already fully built and working (email/
  password, Google, Apple UI, `middleware.ts` cookie gating,
  `Providers.tsx` context) — switching means rewriting all of that. Neon
  Auth is also considerably newer/less battle-tested than Firebase Auth.
  It would also reintroduce the single-vendor coupling (DB + auth on one
  provider) that Neon was specifically chosen over Supabase to avoid.
- **Smaller alternative, not yet built**: keep Firebase Auth, add
  `firebase-admin` to verify ID tokens server-side, and maintain a
  lightweight `users` table in the existing schema populated on first
  sign-in. Solves the FK/verification gap without a full auth migration.
- **Decision: deferred.** Revisit if the FK/verification gap becomes an
  actual blocker, not just a theoretical one.
