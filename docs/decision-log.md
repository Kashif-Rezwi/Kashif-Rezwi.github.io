# Decision Log

- **Purpose:** Append-only record of project decisions. New entries are appended; existing entries are never silently rewritten (a status may be updated with a dated note).
- **Authority:** Entries record owner-approved decisions; each states rationale and approval status.
- **Last updated:** 2026-08-05
- **Related:** [AGENTS.md](../AGENTS.md) · [project-status.md](./project-status.md)

## DL-001 — Run the project as three gated Phase-0 sub-phases before any implementation

- **Date:** 2026-08-05
- **Decision:** The portfolio rebuild proceeds through three approval-gated sub-phases — 0A (Source Intake & Foundation), 0B (Evidence & Portfolio Research), 0C (Strategy, Design Direction, Roadmap) — before any implementation phase. Each sub-phase starts only with the owner's explicit approval.
- **Rationale:** Guarantees an evidence-first process: sources are verified before they are read, findings are verified before they are interpreted, and strategy is settled before any code is written. Makes the project provider-independent — any AI agent, regardless of tool or provider, can pick it up correctly from the repo's canonical documents alone. Prevents premature design/positioning conclusions and irreversible actions.
- **Approval status:** Approved (owner directive, 2026-08-05)

## DL-002 — Featured-project selection criteria and shortlist proposal

- **Date:** 2026-08-05
- **Decision:** Adopt five equally weighted criteria (relevance to validated direction, technical depth, ownership clarity, documentation/demo quality, recency) and propose exactly 3 featured projects — code-review-agent, perplexity, lingo-agent — plus 2 secondary — Better DEV (better-dev-ui + better-dev-api), looplens. All other repositories stay off the homepage for the named reasons in `docs/research/github-project-triage.md`.
- **Rationale:** Keeps project selection evidence-driven and reproducible; prevents stale bootcamp clones and teammate-hosted repos from dominating a portfolio targeting AI product engineering and developer tools.
- **Approval status:** Criteria approved (owner-approved 0B plan, 2026-08-05); the shortlist itself is proposed — owner confirmation requested.

## DL-003 — Conflicts resolved by source hierarchy; all others recorded

- **Date:** 2026-08-05
- **Decision:** Where sources conflict, apply AGENTS.md §2 — verified resume/approved evidence outranks GitHub profile text, which outranks existing portfolio copy. Applied to C-02 (ML-research aspiration excluded), C-05 (bootcamp-clone featuring superseded), C-10 (approved "2+ years" wording kept). All 13 conflicts recorded in the evidence ledger; none silently resolved.
- **Rationale:** Definition of done for 0B — every conflict between sources is recorded, not silently resolved.
- **Approval status:** Applied per contract (AGENTS.md); owner review welcome.

## DL-004 — Draft claim-safe positioning statement proposed

- **Date:** 2026-08-05
- **Decision:** Propose the draft statement recorded in `docs/research/evidence-ledger.md` §3 ("Frontend-focused Full Stack Engineer with 2+ years building customer-facing SaaS products in startup teams…"). Every clause maps to ledger claims CL-01…CL-18.
- **Rationale:** 0B definition of done — the positioning statement must be evidence-checked, not assumed.
- **Approval status:** Approved with condition (owner, 2026-08-05): the "autonomous i18n agent" clause is removed — the owner ruled it unsupported by the knowledge base; it must never ship as verified work experience. Final approved wording lives in `docs/strategy/positioning.md` §1.
- **Note (2026-08-05, independent audit):** carried into the Phase 0 gate approval request; the owner ruling is recorded above.

## DL-005 — Phase 0C strategy decisions adopted

- **Date:** 2026-08-05
- **Decision:** Adopt the Phase 0C synthesis as the single plan for Phase 1: (a) site headline "Frontend-focused Full Stack Engineer" — resolves conflict C-09; (b) design direction "Calm Engineering Ledger" (evolves the audited identity; one accent, one motif); (c) information architecture — narrative home + 3 case studies + `/resume`, skills/stats pages removed; (d) stack — Astro + Markdown content + Tailwind, zero-JS default, GitHub Pages via GitHub Actions; (e) five-phase roadmap (1.0–1.4) with owner-held gates.
- **Rationale:** Phase 0C definition of done — one design direction, one IA, one technical direction, all traceable to Phase 0B research.
- **Approval status:** Adopted in Phase 0C; final ratification requested at the Phase 0 gate.

## DL-006 — Audit corrections bundle applied

- **Date:** 2026-08-05
- **Decision:** Apply the independent audit's minor corrections immediately: refresh README.md (phase + document links), update AGENTS.md phase markers and canonical document map, amend source-register SRC-04b (resolves OQ-11), append 0C decisions to this log, and clarify the roadmap (branch model + preview mechanism as an explicit Phase 1.0 deliverable; Better DEV README placeholder is an owner action on the external repo).
- **Rationale:** Audit findings F-01…F-07; keeps the canonical documents consistent before Phase 1 handoff.
- **Approval status:** Approved (owner directive in conversation, 2026-08-05)

## DL-007 — Phase 0 gate closed: owner answers recorded; Phase 1 authorized (not started)

- **Date:** 2026-08-05
- **Decision:** Record the owner's Phase 0 gate answers: all 13 open questions closed (OQ-01…OQ-13) with the decisions captured in `docs/open-questions.md`. Notably: OQ-06 canonical LinkedIn URL = `in/kashif-rezwi-149372216` (manual click-through in Phase 1.3 QA); OQ-08 experience disclosure = resume-equivalent text + approved feature names, no screenshots; OQ-05 resume served at `/resume` with the Google Drive fork dropped (resolves C-08); OQ-09/OQ-10 bootcamp projects and the application-challenge repo stay off the site; OQ-13 commit rule ratified (commits within approved Phase 1 sub-phases; no production deploys until 1.4). Owner directive: `temp/career-ops-workspace` is the **temporary knowledge base for Phase 0 only** — the markdown extracted from it (profile, strategy, evidence, resume content) is the input Phase 1 consumes; it is not a live authority going forward.
- **Rationale:** Completes the Phase 0 definition of done — every claim is evidence-mapped or owner-resolved; nothing silently assumed.
- **Approval status:** Approved (owner directive, 2026-08-05). Phase 1.0 Foundation awaits the owner's explicit go; no Phase 1 work has started.

## DL-008 — Phase 1.0 foundation decisions adopted (branch model, preview mechanism, repo shape, typography)

- **Date:** 2026-08-05
- **Decision:** Adopt the Phase 1.0 foundation plan presented to and approved by the owner in conversation (2026-08-05), resolving audit F-04:
  - (a) **Branch model:** `develop` is the Phase 1 integration branch. `main` and `gh-pages` stay frozen as the old site and its rollback path until Phase 1.4; production deploys are manual-only; the merge to `main` at 1.4 is the owner-approved removal of the old CRA app from the trunk (satisfies the architecture doc's "old CRA app removed only at launch").
  - (b) **Preview mechanism (owner selected the recommended option):** companion repo `Kashif-Rezwi/portfolio-preview` — its own GitHub Actions workflow checks out this repo's `develop` branch (public repo; no token required), builds Astro with `base: '/portfolio-preview'`, and deploys on demand to the project site `https://kashif-rezwi.github.io/portfolio-preview/` with a `noindex` meta. Zero secrets, zero new platforms. Preview repo archived after launch.
  - (c) **Production CI:** `.github/workflows/deploy.yml` is manual-only (`workflow_dispatch`) and stays inert until the owner switches the Pages source from branch `gh-pages` to GitHub Actions at Phase 1.4.
  - (d) **Repo shape:** Astro at the repo root of `develop`; CRA app removed from `develop` only (fully preserved on `main`/`gh-pages`). Carried-over assets: noise texture, favicon, `ME.jpg` (bytes only; resize/wiring in 1.1), resume PDF (bytes only; `/resume` route in 1.1). Bootcamp-era `templates/*` screenshots stay on `main` (case-study visuals are a 1.2 owner decision).
  - (e) **Stack:** latest stable Astro (static output, zero islands) + Tailwind v4 via `@tailwindcss/vite`, npm + lockfile, Node 22; content collections v2 with Zod schema for case studies.
  - (f) **Typography:** system sans + system mono stacks (zero font downloads; a self-hosted variable font may replace them later with owner approval — brief defers the font decision to 1.0, resolved as system stacks).
  - (g) **Tokens:** contrast-verified per the brief — cornflowerblue preserved as the single accent for decoration/focus only (fails text contrast); a darkened `accent-ink` variant is used for link text (≥ 4.5:1 on paper).
  - (h) **Skeleton copy:** claim-safe by construction — name + "Frontend-focused Full Stack Engineer" (CL-01) and neutral section labels only.
- **Rationale:** GitHub-native Pages preview deployments are alpha/not publicly available (verified 2026-08-05 in `actions/deploy-pages` action.yml and current GitHub Pages docs), and this repository is a user site with a single production URL — so gate rule 4 ("production URL untouched until 1.4") requires previews to live on a separate project site. Full rationale and operating rules are documented in `docs/engineering/branching-and-deploys.md`.
- **Approval status:** Approved (owner, 2026-08-05 — plan approved in conversation; preview mechanism explicitly selected from the presented options; execution began in act mode).