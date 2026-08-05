# Project Status

- **Purpose:** Live snapshot of where the portfolio rebuild stands. Updated at the end of every bounded task.
- **Authority:** Maintained per `AGENTS.md` (loop-based operating model); reflects verified state only.
- **Last updated:** 2026-08-06 (R3-D + R3-E complete; R3-E gate approved; **R3-F Production QA complete**; launch awaits owner go/no-go)
- **Related:** [AGENTS.md](../AGENTS.md) · [source-register.md](./source-register.md) · [open-questions.md](./open-questions.md) · [decision-log.md](./decision-log.md)

## Current phase

**Rebuild-03 improvement cycle — R3-F PRODUCTION QA COMPLETE** (2026-08-06, DL-018–DL-029). R3-C is complete locally: `WorkCard` v2 (16/9 media, neutral status, two-line summary slot, first-4 tech + `+N more`, one primary action, icon+text secondary links), the `ProjectRow` secondary grammar, and the neutralized case-study status badge (evidence: `docs/rebuild-02/06-r3-c-card-evidence.md`; R3-C owner gate pending). R3-D delivered the GitHub contribution calendar via **Option B** (DL-026): a build-time GraphQL snapshot rendered as cornflower local SVG, token via repo secret, failure-honest, "Last refreshed" shown, 1,683 contributions / 53 weeks verified (evidence: `docs/rebuild-02/07-r3-d-skills-evidence.md`; DL-025/26 records; R3-D owner gate pending). **R3-E** refined Experience/Now/Contact and confirmed case-study standardization; evidence `docs/rebuild-02/08-r3-e-content-evidence.md` — **gate approved (DL-028)**. **R3-F Production QA is now COMPLETE (DL-029)** against the full matrix (widths 320/390/768/1024/1440 × light/dark/system × normal/reduced motion × keyboard/mouse/coarse × normal/blocked-JS/slow-network/canvas-unavailable × home/case-studies/resume/404/sitemap/robots/manifest/OG): Lighthouse **100/100/100/100** (home mobile+desktop both themes, lingo-agent mobile), axe **zero violations** on every route/theme (case-study sidebar `aside`→`role="region"` fix), contrast **16/16 pass**, CLS **0**, no console errors, all links verified, no-JS content intact. Results recorded in `docs/engineering/qa-report.md` §R3-F. **R3-G (launch) remains blocked on the owner's explicit go/no-go.** All work remains undeployed.

| Phase | Scope | Status |
|---|---|---|
| Review | Compare archived CRA, first Astro rebuild, and `rebuild-02` | ✅ `docs/rebuild-02/01-three-version-comparative-review.md` |
| Plan | Claims, system, hero, projects, capability/GitHub, content, QA, launch | ✅ `docs/rebuild-02/02-improvement-implementation-plan.md` |
| R3-B prototype | Dual-theme pointer-responsive hero dot matrix; body grid removed | ✅ Implemented and committed as `29b5218`; locally verified; undeployed |
| R3-0 | Claim/resilience corrections and baseline | ✅ Committed as `a008e94`; evidence in `docs/rebuild-02/03-r3-0-correctness-baseline.md`; owner gate approved in DL-020 |
| R3-A | Visual-system simplification, local icons, theme control, local typography | ✅ Approved by owner in DL-021; final elevation/hover corrections included in the R3-B transition |
| R3-B | Hero matrix fallback, tuning, responsive/motion validation, performance evidence | ✅ Approved by owner in DL-024; evidence in `docs/rebuild-02/05-r3-b-matrix-evidence.md` |
| R3-C | Flagship project-card system (WorkCard v2, ProjectRow, status semantics) | ✅ Complete locally; evidence in `docs/rebuild-02/06-r3-c-card-evidence.md`; owner gate pending |
| R3-D | GitHub contribution calendar (Option B: build-time GraphQL snapshot → local cornflower SVG); proficiency tiers dropped | ✅ Complete locally as `9ea171b`; evidence in `docs/rebuild-02/07-r3-d-skills-evidence.md`; owner gate pending |
| R3-E | Experience/Now/Contact refinement + case-study standardization; writing surfaced as evidence (dev.to date API-verified) | ✅ Gate approved (DL-028); committed as `04fe8bd`; evidence in `docs/rebuild-02/08-r3-e-content-evidence.md` |
| R3-F | Production QA — full test matrix + quality targets; `docs/engineering/qa-report.md` | ✅ Complete (DL-029); results recorded; recommend GO |
| R3-G | Launch and rollback | ⏸ Planned; requires explicit owner launch authorization |

**Rebuild-02 — Design Overhaul: COMPLETE** (2026-08-05, DL-016/DL-017). All five original R2 phases remain committed on `rebuild-02`; this completed state is now the base for the proposed improvement cycle.

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

- R3-C and R3-D remain blocked until their owner gates pass (implementation complete, gate review pending). GitHub proof implementation stayed in R3-D despite the owner-approved direction: a dated public contribution view plus project links.
- **R3-G (launch) remains blocked on explicit owner launch authorization.** R3-F (QA) is complete (DL-029); the QA report recommends GO but the gate is owner-held.
- General availability wording remains blocked/omitted because the owner marked it undecided. Freelance invitation and Kolkata display are owner-approved (DL-020).
- All Phase 0 open questions remain closed.

## Phase 0 gate outcome (2026-08-05)

- OQ-01…OQ-13 closed with owner answers (see `docs/open-questions.md`). Key decisions: canonical LinkedIn URL `in/kashif-rezwi-149372216` (QA click-through in 1.3); LinkedIn link-only/never quoted; X excluded; resume served at `/resume` as the single source of truth (Google Drive fork dropped — resolves C-08); experience section = resume-equivalent text + approved feature names, no screenshots; bootcamp projects and the application-challenge repo off the site; no ML-research framing confirmed.
- DL-004 approved **with condition** — "autonomous i18n agent" clause removed from the positioning statement (must never ship as verified work experience); DL-005 approved.
- Owner directive: `temp/career-ops-workspace` is the **temporary knowledge base for Phase 0 only** — its extracted markdown (profile, strategy, evidence, resume content) is the input Phase 1 consumes; it is not a live authority going forward (DL-007).

## Next approved action

- **Owner go/no-go for launch** on the completed R3-F Production QA report (`docs/engineering/qa-report.md` §R3-F). A **GO** authorizes R3-G (separate and always owner-gated); a **NO-GO** reopens specific QA items. Owner spot-checks remaining: LinkedIn click-through (OQ-06), pixel captures at 320/1440, and resume-PDF review.