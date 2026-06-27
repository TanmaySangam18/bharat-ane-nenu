# Bharat Ane Nenu · భారత్ అనే నేను

A bilingual (English / Telugu) public accountability ledger for **Andhra Pradesh**.

> Every promise has a clock. Every outcome is done or not done.
> ప్రతి హామీకి ఒక గడియారం. ప్రతి ఫలితం పూర్తైంది లేదా కాలేదు.

It tracks election-manifesto promises from both the **current government (NDA, 2024–29)**
and the **previous government (YSRCP, 2019–24)**, with a live countdown on the current
term, a city filter, status badges, and — most importantly — **a source link on every
single promise**. No source document, no entry. That is the whole trust model.

## The one rule

A promise cannot exist in this app without a `source`. This is enforced by the data
type itself (`lib/types.ts` — `Source` is a required field on `Promise`). Something a
politician merely *said* but that was never written in a manifesto or official document
does **not** appear here.

## Architecture (deliberately simple)

- **Next.js 15 (App Router) + TypeScript**, plain CSS variables — no database, no Tailwind.
- All content lives in local files, so it deploys anywhere and is trivial to edit:
  - `lib/promises.ts` — the seed dataset (real AP schemes, each with a source URL)
  - `lib/reference.ts` — terms, cities, categories, and all bilingual UI strings
  - `lib/types.ts` — the data model (where the "must have a source" rule lives)
- Bilingual via a tiny client context (`lib/lang.tsx`); the EN/తెలుగు toggle persists.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deploy to Vercel

The fastest path:

```bash
npm i -g vercel
vercel            # first run links/creates the project (preview URL)
vercel --prod     # promotes to your production domain
```

Or push this folder to a GitHub repo and "Import Project" at vercel.com — zero config
needed (it auto-detects Next.js).

## Updating the data (how it stays "live")

Manifesto promises are a **one-time extraction** per election — they don't change.
What changes is *status* (`not_started` → `in_progress` → `completed`). To update:

1. Find the official proof — a Government Order at [goir.ap.gov.in](https://goir.ap.gov.in),
   a budget allocation, or a scheme dashboard on [data.gov.in](https://data.gov.in).
2. Edit the relevant entry's `status` (and `cityStatus` / `completionPct`) in
   `lib/promises.ts`.
3. Commit and redeploy. That's the whole loop.

## Roadmap (not in this MVP)

- Live claims tab (speech → matched against this promise database)
- Local issues tab with auto-derived deadlines + office-level accountability
- Supabase backend so updates don't require a code change
- City heatmap

## Data integrity notes

Each promise now carries two separate proofs:

- `source` — proof it was **promised** (the 2019 YSRCP promises link straight to the
  official manifesto PDF; the 2024 NDA promises link to detailed manifesto reporting,
  as no official NDA PDF is public).
- `evidence` + `statusVerified` — proof of the current **status** (Government Order,
  PIB, or a credible report). A promise shows a green ✓ **Verified** only when a
  credible source backs its status; otherwise it shows ○ **Reported · not yet
  confirmed**. That distinction is visible on every card and on the dashboard
  ("Verified: N/16").

All URLs in `lib/promises.ts` were checked to return HTTP 200. Statuses reflect the
public record as of mid-2026 — the few still marked "Reported" (e.g. Annadata
Sukhibhava, tap-water coverage) await a stable authoritative citation, ideally a
Government Order number from goir.ap.gov.in.
