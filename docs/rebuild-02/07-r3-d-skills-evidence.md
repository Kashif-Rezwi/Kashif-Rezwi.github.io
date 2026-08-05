# R3-D — GitHub contribution calendar (Option B)

**Phase:** R3-D of the rebuild-02 improvement plan (`docs/rebuild-02/02-improvement-implementation-plan.md`).
**Status:** Implemented and verified locally; **owner gate pending.**
**Last updated:** 2026-08-06
**Related:** [06-r3-c-card-evidence.md](./06-r3-c-card-evidence.md) · [../../docs/decision-log.md](../../decision-log.md) (DL-026)

---

## 1. What was built

A **real GitHub contribution calendar** (the green-graph equivalent), rendered as **local SVG** from a **build-time GraphQL snapshot** — the plan's *preferred* R3-D implementation, chosen by the owner as "Option B" over the third-party `react-github-calendar` client widget.

| Piece | File | Role |
|---|---|---|
| Build-time fetch script | `scripts/fetch-github-contributions.mjs` | Calls GitHub GraphQL `contributionsCollection`, writes snapshot |
| Data snapshot | `src/data/github-contributions.json` | 53 weeks of days; committed, refreshed each build |
| Renderer component | `src/components/GitHubContributions.astro` | Local SVG, cornflower-themed, failure-honest |
| Home wiring | `src/pages/index.astro` | Strip sits at the end of Selected work |
| Build hook | `package.json` (`build` runs the fetch first) | Snapshot refreshed on every build |
| CI secrets | `.github/workflows/{ci,deploy}.yml` | `GH_CONTRIBUTIONS_TOKEN` env → build step |

## 2. Why Option B (and what was rejected)

The old portfolio's `Github.jsx` used `react-github-calendar` + two third-party image services (`github-readme-stats.vercel.app`, `github-readme-streak-stats.herokuapp.com`). The 0B audit flagged the image services as fragile external dependencies and streak/stats as noisy metrics. `react-github-calendar` itself depends on a third-party API (`github-contributions-api.jogruber.de`) — the same fragility class.

**Option B removes all third-party runtime dependencies:** data comes from GitHub's own GraphQL API at build time, the visitor's browser only ever sees static local SVG. The contribution calendar is the one element kept; the stats/streak image cards were **not** carried over (noisy, fragile, and not requested).

## 3. Token / security

- Read-only fine-grained PAT, stored as repo secret **`GH_CONTRIBUTIONS_TOKEN`** (owner-created) and passed to the build step in CI.
- Locally the token lives in **`.env` (gitignored, verified untracked)**; the fetch script auto-loads it so `npm run build` works without a manual export.
- The token is **never** shipped to the browser — only static SVG is.

## 4. Failure-honest behavior

- No token / fetch error **with** a prior valid snapshot → keeps the old snapshot (stale but real).
- No token / fetch error **without** any snapshot → component renders a single honest link ("Contribution data isn't available right now. View the activity graph on GitHub →"), never fake squares.
- Verified: no-token path writes `{ok:false}` placeholder and the fallback renders in built HTML.

## 5. Verification

- Real fetch: **1,683 contributions, 53 weeks**, fetched 2026-08-06 — baked into `dist` ("1,683 contributions in the last year · Last refreshed Aug 6, 2026", 369 SVG rects rendered).
- Captures: `/tmp/r3d-real-dark-1440.png`, `/tmp/r3d-real-dark-390.png` (real data); `/tmp/r3d-graph-{dark,light}-1440.png` (styling check w/ synthetic data); `/tmp/r3d-fallback-390.png` (fallback).
- Mobile 390px: no horizontal overflow (`scrollWidth == innerWidth`); calendar scrolls horizontally within its container.
- Both themes verified; squares use `color-mix` opacity steps on `--color-accent` so they track the active theme.

## 6. Decisions deferred to owner (recorded in DL-026)

1. **Proficiency tiers (Core / Working / Exploring) — dropped.** The plan listed "Label skill proficiency," but self-assigned proficiency tiers conflict with claim-safety (AGENTS.md §3, no invented seniority). The honest five topic groups (Languages / Frontend / Backend / Databases & Infra / AI & Tools) are kept unchanged. Owner to confirm.
2. **Skill "Used in" evidence links — not added** in this round (component-level SkillItem/SkillGroup were reverted along with the first mis-read of R3-D; can be reintroduced in a follow-up if wanted).
3. **Stats / streak cards — intentionally omitted** (noisy metrics, fragile third-party images).

## 7. Acceptance criteria

- [x] Contribution calendar from first-party GraphQL, build-time, no client API call
- [x] Local SVG, no third-party image service or iframe
- [x] Token via repo secret; never exposed client-side; `.env` gitignored
- [x] "Last refreshed" date shown
- [x] Failure-honest (stale snapshot or plain link; never fake data)
- [x] Not framed as a productivity score or employment outcome
- [x] Both themes + mobile verified; build clean
