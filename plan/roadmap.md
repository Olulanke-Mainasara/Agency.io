# Agency.io — Roadmap

Sequenced from soonest/smallest to biggest, based on the architecture review
of the Sanity + Firebase + Next.js stack and the planned AI trip planner
feature.

## 1. Rotate and stop leaking the Sanity write token
- `NEXT_PUBLIC_SANITY_READ_AND_WRITE_TOKEN` was in the client bundle —
  anyone could pull it from devtools and mutate/delete the dataset.
- Rotate it in the Sanity dashboard (treat the old one as compromised).
- Re-add it as a non-`NEXT_PUBLIC_` server-only env var.
- **Status: in progress.**

## 2. Move Sanity writes behind a server route
- `sanity/lib/deleteDocument.ts` called Sanity's mutate API straight from
  client-reachable code — that's what forced the token to be public.
- Wrap it in an `app/api/...` route so the token never leaves the server.
  This is also the first real API route, which the trip planner will need.
- **Status: in progress.**

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
- Pick Firestore (fastest, same ecosystem as existing Auth) or
  Postgres/Supabase (better long-term fit for relational trip/itinerary
  data). Blocks steps 6 and 13+.

## 6. Rebuild the review feature on the new database, not Sanity
- `AddReviewModal.tsx` currently just fakes a success toast — no real
  submission exists.
- Build real submission + moderation flag + rating aggregation against the
  new DB from step 5, not Sanity (Sanity stays editorial-only).

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
