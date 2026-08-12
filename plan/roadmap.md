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
- **Status: done.** Deleted the 4 local branches (5th was already gone) and
  pruned the stale `origin/*` tracking refs, including
  `claude/repo-branch-count-u8qdhr`. Only `main` remains, locally and on
  GitHub.

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

## Vercel deployment failures (fixed) + site-wide link/button audit
Every deployment since the reviews feature landed (12 in a row, including
pure-doc commits) failed at Vercel's "Collecting page data" build step with
`No database connection string was provided to neon()`. Root cause:
`lib/db/index.ts` constructed the Neon client eagerly at module load time,
so importing it anywhere (even in a route never hit) crashed the whole
build, and `DATABASE_URL` isn't set in Vercel's env yet. **Fixed**: the
client is now lazily constructed behind a Proxy — a missing/misconfigured
DB now only fails that one route at request time, not the entire site's
build. Reproduced the original crash locally and confirmed the fix.
**Still needed**: add `DATABASE_URL` to the Vercel project's environment
variables (Settings → Environment Variables) so the reviews feature
actually works at runtime, not just stops crashing the build.

Full button/link audit (homepage first, then site-wide via a sweep agent).
**Fixed:**
- `/profile` didn't exist at all despite being the default post-login
  redirect target in `middleware.ts` and referenced by both nav
  account-menu variants — built a real page.
- Nav account-menu dropdown items (Profile/Wallet/Booking/Saved) had no
  `href` or `onClick` — clicked and did nothing. Mobile drawer linked to
  `/wallet`, `/booking-and-trips`, `/saved`, `/cart` — none exist. Wired
  Profile to the real page; removed the rest (unbuilt features, no
  destination to send them to).
- Footer "Plan Your Trip" links pointed at service slugs that don't exist
  and were missing their leading slash — now sourced from the same
  `static-data/services.js` used elsewhere. `/blog`, `/about-us`, `/faq`
  corrected to `/company/*`. Privacy/Terms links removed (no such pages,
  didn't want to fake them).
- `not-found.tsx` and `BadRequest.tsx` (shown on every Sanity fetch
  failure) linked "Contact us" to `/contact-us` instead of
  `/company/contact-us`; `BadRequest`'s Home button was also missing
  `asChild`, producing invalid `<button><a>` nesting.
- Career "Apply Now" pointed at a nonexistent per-job page — now anchors
  to the real enquiry form instead.
- `NotificationCard`: "Mark all as read" had no handler; "View all"
  linked to a nonexistent `/notifications` page — wired mark-as-read to
  real state, removed the dead link.
- `middleware.ts` / `AddReviewModal.tsx`: the `previous` redirect query
  param was set without a leading slash, which `router.push()` can't
  resolve as an absolute path.
- `app/company/blog/page.tsx`: dead `!blog` empty-state check (blog is
  always an array) — fixed to `blog.length === 0`.

**Resolved in a follow-up pass:**
- **Establishment detail page built** — `app/establishments/[slug]`, using
  the existing `getEstablishment()` query (which itself had two more real
  bugs fixed along the way: never selected `_id`/`slug`, and its
  `faqs[]{_id, ...}` sub-query was wrong — nested array objects use `_key`,
  not `_id`). Renders rating, price level, contact, an OpenStreetMap link,
  FAQs, and reviews pulled from Postgres via the establishment's Sanity
  `_id`. `FullPageEstablishmentCarousel`'s typo'd `/citys/...` link and
  `SharedPageEstablishmentCarousel`'s entirely non-clickable cards both
  now point here.
- **Contact form, career enquiry form** — real `messages` table + `POST
  /api/messages`, both forms wired up.
- **Password recovery** — real `sendPasswordResetEmail`, replacing a fake
  `setTimeout`.
- **BuildTripForm** — persists real trips to an extended `itineraries`
  table (`source`, `tripName`, `dateFrom`/`dateTo`, `adults`/`children`/
  `rooms`), gated on sign-in like `AddReviewModal`. Along the way, fixed a
  real type bug: it declared its date-range state as `DateRange |
  undefined` but actually received a formatted string from
  `DatePickerWithRange` (its sibling `AIGeneratedTripForm` had this typed
  correctly) — silent because `DatePickerWithRange`'s prop type is loosely
  `Function`.
- **ExploreTheWorldForm** — no real search backend exists; now navigates
  to `/places` instead of `console.log`-ing.
- **AIGeneratedTripForm** — left un-wired on purpose (still needs an LLM
  API key and real establishment data to ground recommendations in,
  neither of which exist yet — that's roadmap steps 11-14, not a quick
  fix). Submitting now shows an honest "coming soon" toast instead of a
  silent `console.log`.
- **Apple sign-in** — commented out (not deleted) in both login and
  signup, since it always failed after a fake delay.
- **Social links** — Instagram/YouTube `href="#"` placeholders commented
  out; Twitter and GitHub (both real) untouched.
- **Privacy Policy / Terms of Service** — real pages with real content
  describing what the app actually does (not boilerplate), footer links
  restored.
- **Homepage destination showcase 404s** — resolved by extending the seed
  script (`scripts/seed/destinations.ts`) with all 22 non-flagship
  destination slugs the homepage's static cards link to, so every one of
  them will resolve once you run the seed pipeline. Chose this over
  swapping the cards to flagship-only slugs so the original content
  choices didn't need second-guessing.

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
