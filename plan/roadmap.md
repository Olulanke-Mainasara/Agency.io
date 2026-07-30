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
- **Status: done.** Started from Euromonitor's 2025 international-arrivals
  top 10, then adjusted for fit and continent coverage (the raw list was
  6 Asia / 4 Europe, zero Africa/Americas/Oceania, and included Mecca —
  almost entirely Hajj/Umrah pilgrimage traffic, a poor fit for this
  app's leisure-travel content model).
- **Final 10:**
  1. Bangkok, Thailand — Asia
  2. Hong Kong, China — Asia
  3. Dubai, UAE — Asia
  4. London, United Kingdom — Europe
  5. Istanbul, Turkey — Europe
  6. Paris, France — Europe
  7. Marrakech, Morocco — Africa
  8. New York City, USA — North America
  9. Sydney, Australia — Australia
  10. Rio de Janeiro, Brazil — South America
- Dropped from the raw top 10 to make room: Macao (redundant with Hong
  Kong), Antalya (redundant with Istanbul, both Turkey), Kuala Lumpur
  (redundant Southeast Asia coverage with Bangkok), and Madrid (dropped in
  favor of Rio — Europe had the most redundancy at 4 entries, and Madrid
  was itself already a stand-in for Mecca rather than an original pick).
- Now covers all 6 of the site's continent nav categories: Africa, Asia,
  Australia, Europe, North America, South America.
- Source data for these 10 next (step 8), then seed (step 9).

## 8. Source real data for those destinations
- **Status: tooling done, not yet executed.** `scripts/seed/source.ts` (+
  `scripts/seed/lib/{wikipedia,overpass,unsplash}.ts`) fetches city/country
  descriptions and images from Wikipedia's REST API, real
  hotels/restaurants/attractions per city from OpenStreetMap's Overpass
  API, and optional establishment photos from Unsplash
  (`UNSPLASH_ACCESS_KEY`, gracefully skipped if unset). Writes one JSON
  file per destination to `sanity/seed/data/`.
- **Could not run or verify it from this session** — this sandbox's
  network policy blocks Wikipedia, Overpass, and Unsplash entirely
  (confirmed 403 via both `curl` and `WebFetch`). Needs to be run locally:
  `npm run seed:source`. Since it's unverified against the real APIs,
  do a first run and spot-check the output JSON before trusting it at
  full scale — Overpass in particular can be slow/rate-limited.
- Optional, costs money and has caching restrictions to respect: Google
  Places API for richer establishment data.

## 9. Write and run a seed script
- **Status: tooling done, not yet run.** `scripts/seed/build-ndjson.ts`
  reads every `sanity/seed/data/*.json` from step 8's sourcing script and
  transforms it into `country`/`place`/`establishment` documents in
  `sanity/seed/output.ndjson` (gitignored, regenerate with
  `npm run seed:build`). Images use Sanity's `_sanityAsset: "image@<url>"`
  convention so the CLI downloads/uploads them directly. Deterministic
  `_id`s (`country-<slug>`, etc.) make re-imports idempotent with
  `--replace`.
- Transform logic verified end-to-end with a throwaway fixture (geopoint
  mapping, optional-field omission, dedup) — the sourcing script itself
  couldn't be run from this sandbox, so this is untested against real data.
- Editorial fields (`essentials`, `whyWeLove`, `popularSpots`, `faqs`) are
  intentionally left unset — that's manual curation in Studio, not
  something to auto-generate from scraped data. `review` also stays empty,
  for real users (and lives in Postgres now anyway, per step 6).
- Remaining steps, in order: run `npm run seed:source` (step 8) → run
  `npm run seed:build` → run
  `npx sanity dataset import sanity/seed/output.ndjson <dataset-name> --replace`.
  Not done: seeding `experience`/`service` documents — those weren't part
  of the sourced data (OSM/Wikipedia don't map cleanly to "experiences" as
  this schema models them); revisit separately if wanted.

## 10. Add a price/cost field to the `establishment` schema
- **Status: done.** Added `priceLevel` (1–4, `$`–`$$$$`, currency-agnostic
  so it works across establishment categories and countries) to
  `sanity/schemas/establishment.ts`, `types/EstablishmentInfo.ts`, and the
  GROQ projections in `sanity/lib/getEstablishment(s).ts`.
- Found and fixed while there: `getEstablishment(s).ts` was filtering on
  `type == "location"` instead of `_type == "establishment"` (every
  sibling query file does this correctly), plus two unquoted interpolated
  string values — both queries always returned an empty array. Now fixed.
- Not done: no establishment documents exist yet to actually have a price
  set on them (step 9), and no UI reads `priceLevel` yet — that comes with
  the trip-generation route (step 11).

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

## Sanity/frontend alignment audit (done)
Prompted by checking the Sanity project directly — it turned out **not**
to be empty as originally assumed: 69 documents (1 `country`: Nigeria,
1 `place`: Lagos, 12 `experience`, 7 `service`, 5 `blog`), leftover test
content from 2023. Auditing it against the frontend surfaced real,
currently-live bugs, all fixed:

- **Systemic field mismatch**: schema field `establishments` was
  correctly fetched by every GROQ query (`establishments[]{...}`), but
  every TypeScript type (`Essential`, `Reason`, `Section`) and every
  component reading them expected `.locations` — a field that never
  existed in the query result. Every establishment carousel under
  "Essentials," "Why we love," and experience/service sections has been
  silently showing "Error loading spots" regardless of underlying data.
  Fixed by aliasing in the query (`"locations": establishments[]{...}`)
  in `getCity(ies).ts`, `getCountry(ies).ts`, `getExperience(s).ts`,
  `getService(s).ts` — matches the codebase's existing GROQ aliasing
  convention.
- `getCity(ies).ts` never fetched `popularSpots` or `posts` at all, even
  though the city page destructures and renders both. Added.
- Country page did `pictures.map(...)` with no guard (city page's
  sibling code already uses `pictures?.map`) — would throw for any
  country doc without pictures. Fixed.
- **Live data fix**: the one existing `place` document (Lagos) stored its
  geopoint under the field name `location`, but the current schema (and
  every query) expects `coordinates` — stale field name from before a
  schema rename, orphaned data invisible in both Studio and the
  frontend. Patched and published directly in Sanity.
- Sampled `experience`, `service`, and `blog` documents — clean, no
  further issues found.
- Confirmed only 1 real Sanity project member (you, Administrator) —
  the earlier "2 members" figure from the MCP `list_projects` count
  doesn't match the dashboard's member list; not a security concern.

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
