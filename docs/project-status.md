# Project Status

- **Purpose:** Live snapshot of where the portfolio rebuild stands. Updated at the end of every bounded task.
- **Authority:** Maintained per `AGENTS.md` (loop-based operating model); reflects verified state only.
- **Last updated:** 2026-08-05 (rebuild-02 complete)
- **Related:** [AGENTS.md](../AGENTS.md) · [source-register.md](./source-register.md) · [open-questions.md](./open-questions.md) · [decision-log.md](./decision-log.md)

## Current phase

**Rebuild-02 — Design Overhaul: COMPLETE** (2026-08-05, DL-016/DL-017). All 5 phases committed to `rebuild-02` branch. Awaiting owner review + deploy to `gh-pages`.

| Phase | Scope | Status |
|---|---|---|
| R2-A — Design System | dark tokens, fonts, Header, Footer | ✅ Committed `8d754e9` |
| R2-B — Homepage | hero, work grid, tech stack, experience, contact | ✅ Committed `628fca3` |
| R2-C — Case Studies | [slug].astro redesign, cover images for all 3 projects | ✅ Committed `e680003` |
| R2-D — Polish | 404, resume, CSS cleanup, enriched tech tags | ✅ Committed `4f06aab` |
| R2-E — Docs | decision log, project-status, task tracker | ✅ This commit |

**Phase 1.4 — Production launch: COMPLETE** (2026-08-05, DL-014–015). Production now serves the new Astro portfolio.

**Phase 1.1 — Core home page: COMPLETE, gate approved** (2026-08-05, DL-010). All home sections built with claim-mapped copy (hero, selected work cards + compact row, experience, AI journey/now, contact incl. owner-approved phone per DL-009, footer); `/resume` route serves the PDF as the single source of truth (C-08); portrait re-encoded via Astro (AVIF 16 KB); home meta/OG including og:image. Every public sentence mapped to a CL-ID in `docs/strategy/home-copy-claim-map.md`.

**Phase 1.0 — Foundation: COMPLETE, gate approved** (2026-08-05). Foundation decisions adopted as DL-008: branch model (`develop` carries Phase 1; `main`/`gh-pages` frozen until 1.4), preview mechanism (companion repo `Kashif-Rezwi/portfolio-preview`, on-demand project-site deploys, zero secrets), repo shape (Astro at root of `develop`; CRA preserved on `main`/`gh-pages` until the 1.4 merge), system font stacks, contrast-verified token palette. Operating rules in `docs/engineering/branching-and-deploys.md` (audit F-04 deliverable).


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

- **Phase 1 — COMPLETE.** Production (`https://kashif-rezwi.github.io/`) now serves the Astro build; all Phase 1 gates approved (DL-005 → DL-015). Repository `Kashif-Rezwi/Kashif-Rezwi.github.io` is in maintenance mode: deploy future changes by pushing to `develop` then building + deploying the `dist/` output to `gh-pages` (or switch Pages to GitHub Actions via web UI to activate `deploy.yml`). Preview repo archived.