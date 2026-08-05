# Project Status

- **Purpose:** Live snapshot of where the portfolio rebuild stands. Updated at the end of every bounded task.
- **Authority:** Maintained per `AGENTS.md` (loop-based operating model); reflects verified state only.
- **Last updated:** 2026-08-05
- **Related:** [AGENTS.md](../AGENTS.md) · [source-register.md](./source-register.md) · [open-questions.md](./open-questions.md) · [decision-log.md](./decision-log.md)

## Current phase

**Phase 1.2 — Featured case studies: COMPLETE, gate approved (DL-011)** (2026-08-05). Three case-study pages live at `/work/{code-review-agent,perplexity,lingo-agent}` — header + body (Overview / What I built / Challenges / Outcomes) + tech tags; narratives from `featured-project-research.md` + ledger (claim-safe, capability-only, personal/hackathon labels visible). Home cards link to them. Visuals: owner chose "use each project's own README screenshots"; honest inventory found **only code-review-agent has a real README screenshot** (`docs/assets/preview.png`) — wired in as a 22 KB AVIF cover. perplexity's README embeds no screenshots; lingo-agent's Screenshots section is a `TODO: Replace placeholder images` with no image files in the repo tree — so those two pages are honestly **text-only** (no fabricated visuals). Better DEV `[Your Frontend URL]` fix remains an owner action on the external repo (F-07).

**Phase 1.1 — Core home page: COMPLETE, gate approved** (2026-08-05, DL-010). All home sections built with claim-mapped copy (hero, selected work cards + compact row, experience, AI journey/now, contact incl. owner-approved phone per DL-009, footer); `/resume` route serves the PDF as the single source of truth (C-08); portrait re-encoded via Astro (AVIF 16 KB); home meta/OG including og:image. Every public sentence mapped to a CL-ID in `docs/strategy/home-copy-claim-map.md`.

**Phase 1.0 — Foundation: COMPLETE, gate approved** (2026-08-05). Foundation decisions adopted as DL-008: branch model (`develop` carries Phase 1; `main`/`gh-pages` frozen until 1.4), preview mechanism (companion repo `Kashif-Rezwi/portfolio-preview`, on-demand project-site deploys, zero secrets), repo shape (Astro at root of `develop`; CRA preserved on `main`/`gh-pages` until the 1.4 merge), system font stacks, contrast-verified token palette. Operating rules in `docs/engineering/branching-and-deploys.md` (audit F-04 deliverable).

**Built & verified (2026-08-05):** Astro 7 + Tailwind v4 scaffold at repo root (zero client JS — verified 0 `<script>` tags in output); design tokens in CSS-first `@theme` with `npm run check:contrast` enforcement (all text pairs ≥ 4.5:1; cornflowerblue decoration-only by design); base layout + nav (Home/Work/Experience/Contact + Resume) + footer; `work` content-collection schema + case-study template; `ci.yml` build check on develop (passing); `deploy.yml` production workflow armed but inert; **preview live at https://kashif-rezwi.github.io/portfolio-preview/** (noindex; verified 200 + raw-HTML content); **production untouched** (verified: still serving the CRA bundle; Pages source still `branch: gh-pages`).

**Phase 0 — CLOSED, owner-ratified** (2026-08-05). All open questions resolved (OQ-01…OQ-13 closed); positioning approved with the DL-004 condition applied; Phase 1 plan approved (DL-005).

Independent engineering audit completed 2026-08-05 (verdict: proceed after minor corrections; no blocking findings). All audit corrections applied the same day with owner approval (DL-006): README/AGENTS.md refresh, decision-log append, source-register SRC-04b amendment, and roadmap clarifications (branch model deliverable, Better DEV placeholder ownership).

## Completed (Phase 0C)

- `docs/strategy/positioning.md` — finalized positioning (DL-004 statement adopted unchanged; every clause claim-mapped), headline decision resolving conflict C-09, career direction with binding exclusions, Phase 1 usage rules.
- `docs/strategy/product-and-design-brief.md` — one design direction, "Calm Engineering Ledger", evolving the audited identity (single accent, single noise-texture motif, explicit anti-patterns); one IA (narrative home + 3 case studies + `/resume`; skills page, GitHub-stats page, and duplicated routes removed); content plan mapping every section to ledger claims; owner asset list.
- `docs/engineering/architecture-and-quality.md` — one technical direction: Astro + Markdown content + Tailwind, zero-JS default, GitHub Pages via GitHub Actions; alternatives rejected with reasons; optional items default-NO; acceptance criteria (Lighthouse ≥ 95 all categories, WCAG 2.2 AA, ≤ 100 KB initial JS, ≤ 150 KB hero image, content in raw HTML).
- `docs/engineering/implementation-roadmap.md` — five bounded phases (1.0 Foundation → 1.1 Core home → 1.2 Case studies → 1.3 Polish/QA → 1.4 Launch), each with scope, dependencies, expected outcome, and an owner-held approval gate; no phase authorizes the next.
- `docs/engineering/handoff-guide.md` — minimum reading order and hard rules for the Phase 1 agent.
- Traceability: the featured shortlist (DL-002) and the portfolio audit feed 0C decisions directly — IA/content cite triage verdicts; every design choice cites an audit row.
- No portfolio code written, no dependencies installed, nothing deployed — per Phase 0C scope.

## Blocked

- Nothing. All Phase 0 open questions are closed (owner decisions, 2026-08-05).

## Phase 0 gate outcome (2026-08-05)

- OQ-01…OQ-13 closed with owner answers (see `docs/open-questions.md`). Key decisions: canonical LinkedIn URL `in/kashif-rezwi-149372216` (QA click-through in 1.3); LinkedIn link-only/never quoted; X excluded; resume served at `/resume` as the single source of truth (Google Drive fork dropped — resolves C-08); experience section = resume-equivalent text + approved feature names, no screenshots; bootcamp projects and the application-challenge repo off the site; no ML-research framing confirmed.
- DL-004 approved **with condition** — "autonomous i18n agent" clause removed from the positioning statement (must never ship as verified work experience); DL-005 approved.
- Owner directive: `temp/career-ops-workspace` is the **temporary knowledge base for Phase 0 only** — its extracted markdown (profile, strategy, evidence, resume content) is the input Phase 1 consumes; it is not a live authority going forward (DL-007).

## Next approved action

- **Phase 1.3 — Polish & QA** per the roadmap: accessibility audit (axe + keyboard pass) and fixes; Lighthouse runs vs the acceptance criteria; SEO/meta/OG/sitemap/robots; full link check (demos, repos, socials — incl. manual LinkedIn `in/kashif-rezwi-149372216` click-through); responsive pass at 360/768/1024/1440; reduced-motion verification; 404 page; favicon/manifest. Ends with a QA report → owner go/no-go for launch (1.4).
- Optional 1.3 niceties owner may approve: dedicate OG card image (currently uses the portrait); screenshots for perplexity/lingo-agent if the owner captures them later (the two pages are honestly text-only today).
- Owner action (external repo, audit F-07): fix the `[Your Frontend URL]` placeholder in `better-dev-ui`'s README before that repo is deepened.
- To refresh the preview after new work lands on `develop`: Actions tab of `Kashif-Rezwi/portfolio-preview` → "Run workflow" (or the agent runs `gh workflow run preview.yml --repo Kashif-Rezwi/portfolio-preview`).
- After the gate: the production URL remains untouched until Phase 1.4 approval.