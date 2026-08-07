# Decision Log

- **Purpose:** Append-only record of project decisions. New entries are appended; existing entries are never silently rewritten (a status may be updated with a dated note).
- **Authority:** Entries record owner-approved decisions; each states rationale and approval status.
- **Last updated:** 2026-08-07 (DL-059)
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

## DL-009 — Phase 1.0 gate approved; Phase 1.1 started (contact includes phone number)

- **Date:** 2026-08-05
- **Decision:** The owner reviewed the Phase 1.0 skeleton at the preview URL and **approved the gate** (tokens, layout, nav/footer vs the "Calm Engineering Ledger" brief). Phase 1.1 (core home page) began the same day per roadmap gate rule 1. Owner amendment to the approved 1.1 plan: the contact section **includes the phone number** (the active value already published on the live site; the commented-out alternative values recorded in conflict C-12 remain prohibited from use).
- **Rationale:** Phase 1.0 done-when criteria were verified: preview URL renders the skeleton (HTTP 200, content in raw HTML, zero client JS, `noindex`); tokens contrast-verified and matched to the brief; production untouched (still serving the CRA bundle; Pages source still `branch: gh-pages`).
- **Approval status:** Approved (owner, 2026-08-05).

## DL-010 — Phase 1.1 gate approved; Phase 1.2 started (featured case studies)

- **Date:** 2026-08-05
- **Decision:** The owner approved the Phase 1.1 home-page copy (hero, selected work, experience, AI journey/now, contact incl. phone) against `docs/strategy/home-copy-claim-map.md`. Phase 1.2 (featured case studies) began the same day per roadmap gate rule 1. Scope: three case-study pages (code-review-agent, perplexity, lingo-agent) built to the brief template strictly from `docs/research/featured-project-research.md` + the evidence ledger; home cards link to their case-study pages; personal/hackathon labels stay visible. Better DEV's `[Your Frontend URL]` README placeholder remains an **owner action on the external repo** (audit F-07) and does not block its compact home entry.
- **Rationale:** 1.1 done-when met: owner content review passed; home page live on the preview; production untouched.
- **Approval status:** Approved (owner, 2026-08-05). Phase 1.2 page visuals (screenshots) are still owner-decided at the 1.2 gate per the brief.

## DL-011 — Phase 1.2 gate approved; README-screenshot visuals adopted

- **Date:** 2026-08-05
- **Decision:** The owner approved the three case-study pages' copy and chose to use **each project's own README screenshots** as their page visuals (the brief's "repo README assets with approval" option) for code-review-agent, perplexity, and lingo-agent. Phase 1.2 copy gate closed; visuals are wired into the pages immediately after this decision; Phase 1.3 (Polish & QA) may begin once the visuals are in place per the roadmap. LoopLens and Better DEV remain compact home-row entries (links only, per triage) — README screenshots apply to the three featured pages.
- **Rationale:** Phase 1.2 done-when met (owner approves each case-study page copy + visuals). Reusing each project's own already-public README assets requires no new capture work and keeps images honest to the build.
- **Approval status:** Approved (owner, 2026-08-05).

## DL-012 — Phase 1.2 gate closed; Phase 1.3 started; dedicated OG card approved

- **Date:** 2026-08-05
- **Decision:** Phase 1.2 gate closed (DL-011 covered copy + README-screenshot visuals; only code-review-agent had a real README screenshot — wired in as a 22 KB AVIF cover; perplexity/lingo-agent honestly text-only). Phase 1.3 (Polish & QA) started the same day per roadmap gate rule 1. Owner additionally approved creating a **dedicated OG card image** now, replacing the interim portrait-as-og:image.
- **Rationale:** Phase 1.2 done-when met; Phase 1.3 is the final pre-launch QA gate before the irreversible Phase 1.4 launch.
- **Approval status:** Approved (owner, 2026-08-05).

## DL-013 — Phase 1.3 gate approved; Phase 1.4 launch authorized

- **Date:** 2026-08-05
- **Decision:** Phase 1.3 gate approved. All acceptance criteria met or exceeded (Lighthouse 100/100/100/100 on home and case-study pages; zero client JS; LCP 1.4 s home / 1.3 s case-study; CLS 0; TBT 0 ms; zero JS bundle; WCAG 2.2 AA — 0 axe failures; `prefers-reduced-motion` active; unique titles/descriptions/meta per page; sitemap + robots; dedicated OG card live; 404 page; manifest; favicon). Production untouched (still serves CRA bundle; Pages source still `branch: gh-pages`). Phase 1.4 (irreversible production launch) authorized per roadmap gate rule 1.
- **Rationale:** Phase 1.3 definition of done met — QA report (`docs/engineering/qa-report.md`) completed with all criteria passing; residual risks documented and accepted; preview verified live and `noindex`.
- **Approval status:** Approved (owner, 2026-08-05).

## DL-014 — Phase 1.4 launch executed: production Astro site live; CRA retired

- **Date:** 2026-08-05
- **Decision:** Phase 1.4 executed per the launch sequence. The `develop` branch (Astro) was pushed to `main` (Step 1.4.1 — replaces CRA source on trunk; CRA output preserved on `gh-pages` for rollback). GitHub Pages source remained `legacy: gh-pages` (API block on source-type switch — see DL-015). The production Astro build output was deployed to `gh-pages` via a fresh orphan commit, replacing the old CRA build output (Step 1.4.2). Preview repo `Kashif-Rezwi/portfolio-preview` archived (Step 1.4.5). Production verified: `/work/code-review-agent/`, `/work/perplexity/`, `/work/lingo-agent/`, `/resume/`, `/404.html`, `/sitemap-index.xml`, `/robots.txt`, `/manifest.webmanifest`, `/og.png` all HTTP 200; zero `<script>` tags on all pages; no `noindex`; OG image = dedicated `og.png`; title = claim-safe "Kashif Rezwi — Frontend-focused Full Stack Engineer". Production URL (`https://kashif-rezwi.github.io/`) now serves the Astro build (14.7 KB HTML, zero JS).
- **Rationale:** All acceptance criteria verified post-launch; production smoke test passed; rollback asset preserved on `gh-pages` branch history; preview archived as documented in DL-008.
- **Approval status:** Approved (owner, 2026-08-05 — "go ahead" directive for Phase 1.4 launch).

## DL-015 — Post-launch note: Pages source remains legacy (API limitation)

- **Date:** 2026-08-05
- **Decision:** GitHub's Pages API returned 422 ("Deactivating GitHub pages for this repository is not allowed") when attempting to delete the site, and 409 ("GitHub Pages is already enabled") when attempting to recreate as `build_type=workflow`. The Pages source therefore remains `legacy: branch=gh-pages` — production is served by pushing build output to `gh-pages`, not via `deploy.yml`. The `deploy.yml` workflow remains in-repo (filed, ready for a future owner to switch Pages source manually via the web UI if desired). This does not affect correctness or performance — production is live and verified.
- **Approval status:** Documented as a known platform limitation (owner, 2026-08-05).

## DL-016 — Rebuild-02: design direction override approved

- **Date:** 2026-08-05
- **Decision:** The Phase 1 "Calm Engineering Ledger" design brief (product-and-design-brief.md) is superseded on the `rebuild-02` branch. The new direction is "Dark Precision" — dark-first theme, Inter + JetBrains Mono custom fonts, cornflowerblue accent with glow effects, microanimations, tech stack section, and cover images for all three featured projects. Explicitly overrides the Phase 1 anti-patterns list (dark mode, custom fonts, animations, tech-tag sections were all forbidden in Phase 1).
- **Rationale:** Owner-approved (2026-08-05): the Phase 1 result was identified as "too generic and plain — reads like a plain-text resume." The rebuild-02 goal is to impress visitors on first glance while preserving all claim-safe content, Astro architecture, SEO, accessibility, and performance standards.
- **Approval status:** Approved (owner, implementation plan approved 2026-08-05).

## DL-017 — Rebuild-02: commit strategy (phase-per-commit)

- **Date:** 2026-08-05
- **Decision:** Each rebuild-02 phase (R2-A through R2-E) is committed separately with a conventional commit message. Branch `rebuild-02` diverges from `main` and will be merged to `main`/deployed to `gh-pages` after full QA.
- **Rationale:** Owner directive (2026-08-05): "make sure on completing each Phase update the task and commit it properly so every commit will be meaningful and separate."
- **Approval status:** Approved (owner directive, 2026-08-05).

## DL-018 — Use rebuild-02 as the improvement base; restore evidence richness and add one interactive hero signature

- **Date:** 2026-08-05
- **Decision:** Use `rebuild-02` as the base for the next improvement cycle. Preserve the claim-safe professional narrative and case-study depth of the first Astro rebuild; recover the old CRA portfolio's scanability, project-card richness, recognizable technology signals, and GitHub proof concept without restoring excluded/stale projects or fragile third-party widgets. Reduce borders, normalize card anatomy, establish one accessible local icon language, and make an original dual-theme pointer-responsive hero dot matrix—publicly inspired by Google Antigravity's interaction principle—the single signature motif.
- **Rationale:** Owner review in conversation: `rebuild-02` is preferred, but is not yet modern/creative/stylish or sufficiently organized; icons, card consistency, GitHub stats, border restraint, and a light/dark Antigravity-like hero background need improvement. Comparative source/render review confirms `rebuild-02` has the best base but currently combines a familiar dark-developer aesthetic with claim/resilience regressions. Full findings and bounded phases are in `docs/rebuild-02/01-three-version-comparative-review.md` and `02-improvement-implementation-plan.md`.
- **Approval status:** Direction and documentation approved by owner directive (2026-08-05). Hero matrix prototype authorized and implemented in the working tree for review; no commit, merge, or production deployment authorized.

## DL-019 — R3-0 correctness and resilience correction executed

- **Date:** 2026-08-05
- **Decision:** Execute R3-0 following the owner’s “let’s go with R3-0” authorization. Restore the approved “Frontend-focused Full Stack Engineer” headline and associated metadata/hero summary; remove unsupported availability, freelance, location, and “AI-powered applications” wording rather than infer approval; restore approved CL-18 directional wording; make reveal motion progressive enhancement so all content is visible without JavaScript; record the baseline and claim disposition in `docs/rebuild-02/03-r3-0-correctness-baseline.md`.
- **Rationale:** The comparative review found verifiable copy drift and a severe resilience regression where `.reveal` content was hidden prior to JavaScript. R3-0 is corrective only: it does not authorize the planned icon system, theme toggle, card redesign, GitHub module, broader visual redesign, merge, or deployment.
- **Approval status:** Executed under owner authorization (2026-08-05). R3-0 gate review is pending owner approval before R3-A begins.

## DL-020 — R3-0 approved; R3-A authorized with freelance, location, and GitHub-proof direction

- **Date:** 2026-08-05
- **Decision:** The owner authorized the R3-A visual-system phase and gave the following previously unresolved content/product directions: (a) leave a general availability statement omitted because it remains undecided; (b) invite freelance-project conversations; (c) display `Kolkata, India`; and (d) in the later R3-D proof phase, add a dated public GitHub contribution view and project links. R3-A is limited to visual-system simplification, a local accessible SVG icon registry, persisted System/Light/Dark theme preference with a pre-paint initializer, and local system typography; project-card redesign and GitHub activity implementation remain later phases.
- **Rationale:** This closes the R3-0 owner gate, converts only the owner-confirmed facts into public contact copy, and maintains the approved phased order. A freelance invitation does not assert a generalized availability status.
- **Approval status:** Approved (owner directive in conversation, 2026-08-05). R3-A implementation began under this authorization; merge and production deployment remain unauthorized.

## DL-021 — R3-A approved; remove remaining perceived elevation and begin R3-B

- **Date:** 2026-08-05
- **Decision:** The owner approved progression from R3-A to R3-B and requested two final visual corrections: remove the perceived navbar and portrait-photo shadow/elevation, and replace hover border-color changes with subtle color/surface feedback. R3-B is authorized only for hero dot-matrix fallback, tuning, responsive/motion validation, and performance/resilience evidence.
- **Rationale:** The flat cornflower visual system should not retain any element that reads as a color shadow or a hover-state outline. This correction preserves the “hero matrix as sole signature” direction while keeping all later card and GitHub work phased.
- **Approval status:** Approved (owner directive in conversation, 2026-08-05). R3-C and later, merge, and production deployment remain unauthorized.

## DL-022 — R3-B scope confirmations and validation fixes

- **Date:** 2026-08-05
- **Decision:** (a) The owner confirmed in conversation that the ThemeControl segmented System/Light/Dark radio control and the footer social-link wrapping present in the R3-B working tree were owner-requested and belong to this phase. (b) During R3-B validation, two matrix defects were found and fixed under the authorized tuning scope: matrix/fallback opacity now follows the explicit `data-theme` preference as well as the system color scheme, and the render loop now settles while a pointer is parked over the hero (previously it redrew indefinitely). R3-B implementation is complete locally; evidence in `docs/rebuild-02/05-r3-b-matrix-evidence.md`.
- **Rationale:** Keeps the decision record accurate about phase scope, and records the validation-driven corrections so later phases can trust the matrix behavior contract (settles when idle, pauses off-screen, static under reduced motion, correct opacity in every theme combination).
- **Approval status:** Scope confirmation by owner directive (2026-08-05). R3-B owner gate review pending; R3-C and later, merge, and production deployment remain unauthorized.

## DL-023 — Cross-page elevation consistency correction

- **Date:** 2026-08-05
- **Decision:** The owner reported residual perceived elevation on non-home pages (“shadow” behind the navbar on project pages) and directed that the main page’s flat style be consistent across the portfolio. The `.case-hero::before` radial accent glow on case-study pages (`src/pages/work/[slug].astro`) — the last decorative glow outside the hero matrix — was removed along with its now-unneeded positioning wrappers, and a repository-wide scan confirmed zero `box-shadow`, `drop-shadow`, `text-shadow`, or decorative radial-gradient declarations remain under `src/`. Verified visually on case-study and 404 pages (dark/light, desktop/mobile) and folded into the R3-B gate evidence.
- **Rationale:** The flat cornflower system must read identically on every route; a top-of-page glow on case studies read as navbar elevation and broke the single-signature-hero direction.
- **Approval status:** Approved (owner directive in conversation, 2026-08-05). Included in the pending R3-B owner gate; R3-C and later, merge, and production deployment remain unauthorized.
## DL-024 — R3-B owner gate approval; R3-C authorization and card grammar

- **Date:** 2026-08-05
- **Decision:** The owner reviewed the R3-B evidence (matrix/fallback/theme/performance captures, DL-021–DL-023 corrections) and approved the gate with "great, now let's move to R3-C accordingly", authorizing R3-C. Within R3-C the card grammar is normalized: (1) fixed 16/9 media frame without the cover divider hairline; (2) status demoted to neutral dim mono text everywhere — the green success-colored pill is removed from cards and case-study heroes, since status is not a success claim; (3) summaries capped to a two-line slot so card heights align exactly; (4) tech capped to the first four entries plus a `+N more` link into the case study, which retains full lists; (5) one obvious primary action — "Read case study →" in the existing `.btn-outline` grammar — with icon+text Repo / Live demo links; (6) secondary projects move to a single `ProjectRow` component (name · claim label · description · icon+text links) with zero copy changes; (7) the card hairline border is deliberately kept for dark-mode visibility and flagged for owner review at the gate.
- **Rationale:** Scanability with credibility — every featured card answers role, status, problem, stack, and next action in the same order; one primary action beats three co-equal links; success-colored status pills implied outcomes the evidence does not support.
- **Approval status:** Approved by owner directive (2026-08-05). R3-C owner gate review pending; R3-D and later, merge, and production deployment remain unauthorized.
## DL-026 — R3-D GitHub contribution calendar (Option B); proficiency tiers dropped

- **Date:** 2026-08-06
- **Decision:** For R3-D's GitHub evidence the owner chose **Option B** — a build-time GitHub GraphQL fetch rendered as local SVG — over re-using the old third-party `react-github-calendar` client widget. Implemented: `scripts/fetch-github-contributions.mjs` queries `contributionsCollection.contributionCalendar` (last ~52 weeks) with a read-only fine-grained PAT and writes `src/data/github-contributions.json`; `src/components/GitHubContributions.astro` renders that snapshot as cornflower-themed local SVG (no client-side API call, no third-party service, no token in the browser); `npm run build` refreshes the snapshot first. The PAT is stored as repo secret `GH_CONTRIBUTIONS_TOKEN` (wired into `ci.yml` and `deploy.yml`) and locally in gitignored `.env` (auto-loaded by the script). Failure-honest: stale snapshot is kept on error, or a plain GitHub link when no snapshot exists — never fake data. Real data verified: 1,683 contributions / 53 weeks, "Last refreshed" shown. **Proficiency tiers (Core / Working / Exploring) were deliberately dropped**: self-assigned proficiency labels conflict with claim-safety (AGENTS.md §3), so the five honest topic groups remain unchanged. The old portfolio's third-party stats/streak image cards were intentionally not carried over (fragile + noisy).
- **Rationale:** The contribution calendar is the one durable, meaningful GitHub artifact worth surfacing; sourcing it from GitHub's own API at build time removes every third-party runtime dependency the 0B audit flagged, while the cornflower SVG keeps the graph on-theme. Skill proficiency tiers would be invented self-ratings the evidence does not support.
- **Approval status:** Approved by owner directive ("Yes lets move with Option B", 2026-08-06). Proficiency-tier drop recorded for explicit owner confirmation at the R3-D gate. R3-E and later, merge, and production deployment remain unauthorized.

## DL-027 — R3-E content/case-study refinement executed; copy dispositions recorded

- **Date:** 2026-08-06
- **Decision:** Execute R3-E refinement under the owner's "proceed with the implementation plan accordingly" authorization: (1) Brand Exponents Experience bullets regrouped under mono sub-headings — Integrations / CRM / AI-assisted features / Platform & reliability — with the originally supported bullet text preserved word-for-word (no claims changed); (2) Now section's three bordered emoji cards replaced by hairline-separated compact rows using the shared icon registry and the portfolio's existing `1px solid var(--color-border)` row separator (last row borderless); (3) writing surfaced as evidence with the exact, API-verified article title — "I Built an AI Agent That Makes Any Landing Page (Next.js App) Multilingual in Minutes" — linked to dev.to with source and date (published 2026-02-23, verified via `GET /api/articles/kashifrezwi`); (4) Contact left unchanged because the DL-020-approved freelance invitation and single primary email CTA already satisfy the plan; (5) case-study standardization confirmed already complete via the shared `[slug].astro` template (one info order, hardcoded alt text, prev/next nav) — audit found no divergence, so no template edit. Evidence in `docs/rebuild-02/08-r3-e-content-evidence.md`.
- **Rationale:** Removes résumé-paste feel by grouping and by surfacing evidence-as-rows rather than decorative cards, without changing any supported meaning; the writing date is now VERIFIED rather than owner-recalled, closing the plan's one open question.
- **Approval status:** Implementation authorized by owner directive (2026-08-06). R3-E copy/captures owner gate review pending; R3-F and later, merge, and production deployment remain unauthorized.

## DL-028 — R3-E owner gate approved; R3-F Production QA authorized

- **Date:** 2026-08-06
- **Decision:** The owner reviewed R3-E and approved the gate ("looks good, let's move to R3-F"). Authorize the R3-F Production QA phase only: run the plan's test matrix (widths 320/390/768/1024/1440; themes light/dark/system; motion normal/reduced; input keyboard/mouse/coarse; execution normal/blocked-JS/slow-network/canvas-unavailable; routes home, case studies, resume, 404, sitemap, robots, manifest, OG image) and quality targets (Lighthouse ≥ 95 all categories on home + one case study; axe zero critical/serious; WCAG 2.2 AA contrast + focus; client JS ≤ 35 KB compressed; no render-blocking third-party font; CLS ≤ 0.05; all links checked; content in raw HTML, visible without JS; no console errors), then update `docs/engineering/qa-report.md` with commands, measurements, captures, exceptions, and residual risks.
- **Rationale:** R3-F is prove-ready-to-launch only. It does not authorize merge, promotion, or production deployment; those remain gated by R3-G under explicit launch authorization.
- **Approval status:** Approved by owner directive (2026-08-06). R3-F evidence pending; R3-G (launch) and later, merge, and production deployment remain unauthorized.

## DL-029 — R3-F Production QA complete; launch recommended but not authorized

- **Date:** 2026-08-06
- **Decision:** Conclude the R3-F Production QA pass against the plan's full matrix and quality targets, with results in `docs/engineering/qa-report.md` §R3-F every target passes: Lighthouse 100/100/100/100 on home (mobile+desktop, light+dark) and lingo-agent (mobile, dark); axe reports **zero violations** on every route in both themes after fixing the case-study sidebar (nested `<aside class="case-sidebar">` → `<div role="region" aria-label="Project details">` in `src/pages/work/[slug].astro`) which had tripped `landmark-complementary-is-top-level`; contrast **16/16 pass** (`:focus-visible` re-pointed to accent, ink-dim re-paletted, light-theme `.btn` accent override); CLS **0**; client JS ~4.2 KB inline (≤ 35 KB target met); no external/render-blocking fonts; **0 horizontal overflow** at widths 320/390/768/1024/1440; no console errors on any route; light/dark/system themes verified (dark/system = CSS auto, `?theme=` hooks the rest); no-JS content and canvas-unavailable hero fallback verified (both gated on runtime-added classes only); internal links 11/11 resolve; external links reachable (LinkedIn 401/999 authwall per OQ-06). The QA report recommends **GO**, subject to owner spot-checks (LinkedIn click-through, 320/1440 captures, resume-PDF review). This decision does **not** authorize merge, promotion, or production deployment.
- **Rationale:** The QA gate's only job is proving launch-readiness. Evidence is recorded; the formal go/no-go belongs to the owner as R3-G, which is always separate and owner-gated.
- **Approval status:** Recorded (DL-029); QA recommendation: **GO**. R3-G (launch) and merge and production deployment remain unauthorized pending the owner's explicit go/no-go.

## DL-030 — R3-G launch authorized by owner; deploy via the live `gh-pages` branch

- **Date:** 2026-08-06
- **Decision:** The owner gave the explicit launch go ("go") for R3-G. Deploy the approved R3 build to production. The live mechanism was re-verified on 2026-08-06 before acting: Pages `build_type: legacy`, source branch `gh-pages` (API), so the deploy path is **commit the Astro `dist/` to the `gh-pages` branch and push**; `deploy.yml` remains inert (Pages source is not Actions) and CI stays unchanged. Promotion order per AGENTS.md §1 maintenance loop: promote the R3 commits from `rebuild-02` onto `develop` first (develop is an ancestor — clean merge), then build from the promoted tree, then update `gh-pages`. The previous `gh-pages` tip (`6991386`, Phase 1.4.2) is retained in history as the rollback commit.
- **Rationale:** The QA gate proved launch-readiness; the owner's "go" is the explicit R3-G authorization the plan and AGENTS.md require. Pages facts (legacy `gh-pages` source) were re-confirmed via API because the deploy.yml header still describes the Phase 1.4 branch-source switch, which was never performed.
- **Approval status:** Authorized by owner directive (2026-08-06). R3-G execution in progress; smoke tests and completion recorded at the end of the phase.

## DL-031 — R3-G deployed to production; R3 launch complete

- **Date:** 2026-08-06
- **Decision:** Build and deploy the R3 launch to `https://kashif-rezwi.github.io/`. Promotion: `rebuild-02` merged onto `develop` (fast-forward, develop was an ancestor) and pushed; `npx astro build` created `dist/` (calendar + hero matrix + `role="region"` case-study sidebar + R3 title verified present); `dist/` committed to the **live `gh-pages` branch** (new tip `b04e6e0`; previous tip `6991386` retained in history as the rollback commit) and pushed. `deploy.yml` remains inert (Pages source is still legacy `gh-pages`).
- **Smoke test (all on `https://kashif-rezwi.github.io/`):** `/` 200 (R3 title, hero matrix, ThemeControl, GitHub contribution calendar + "Last refreshed", dev.to writing evidence); `/work/{code-review-agent,perplexity,lingo-agent}/` 200 (`role="region"` sidebar + one h1); `/resume/`, `/sitemap-index.xml`, `/robots.txt`, `/manifest.webmanifest`, `/og.png` all 200; unknown route → 404; no `noindex` in production; internal links 11/11 resolve; **live Lighthouse 100/100/100/100** (LCP 0.5s, CLS 0, TBT 0ms).
- **Rationale:** The owner's "go" was the explicit R3-G authorization. Deploy was routed through the repository's actual live Pages source (`gh-pages` branch, confirmed via API on 2026-08-06) rather than the never-activated `deploy.yml`/Actions path.
- **Approval status:** Owner launch authorization recorded (DL-030); smoke tests pass — **R3 launch COMPLETE**. Rollback available by reverting `gh-pages` to `6991386`. Owner spot-checks remain: LinkedIn click-through (OQ-06), 320/1440 visual captures, resume-PDF review.

## DL-032 — R4 improvement plan drafted (plan only; no code, no deploy)

- **Date:** 2026-08-06
- **Decision:** Record the owner's R4 improvement requests as the canonical plan `docs/rebuild-02/09-r4-improvement-plan.md`. Scope is content + interaction + styling polish on the live portfolio only: (1) single-line hero name with a consistent professional role line — resolved to **"Frontend-focused Full Stack Engineer"** by cross-checking PROFILE.md, target-roles.md, the GitHub profile, and the master resumes; (2) extend the dot motif across the portfolio (preferred: subtle static site-wide grid, hero keeps the interactive canvas); (3) cross-check and correct the tech-stack groups against the evidence tiers (Core / Working / AI-building), flagging project-derived items (Vercel AI SDK, LangChain, BullMQ, Prisma, pgvector) as needing an owner label decision; (4) deepen the Experience section with verified bullet candidates from the master resumes + experience evidence (Template Library, launch/AppSumo support, infinite-pagination reuse, drag-and-drop builder); (5) make the navbar reliably pinned at the top while scrolling. Open decisions are logged for owner pick.
- **Rationale:** AGENTS.md loop model — capture the requested improvements as a clear, evidence-mapped plan before any implementation; each R4 step remains individually gated.
- **Approval status:** Plan DRAFT — awaiting owner review and OQ-R4 decisions before R4-0 implementation begins. No code changed, nothing committed to a branch, no deploy.

## DL-033 — R4-1 implemented: hero single-line name + consistent role line

- **Date:** 2026-08-06
- **Decision:** Implement R4-1 (hero identity) in `src/pages/index.astro`. The name `Kashif Rezwi` is now a single `<h1>` line (removed the `Kashif<br />Rezwi` split). The old gradient direction line ("Building toward AI product engineering and developer tools") was replaced with the canonical, consistent role line **"Frontend-focused Full Stack Engineer"** — the exact string already used in the page `<title>`, meta description, and approved positioning. The bio's direction ("Currently building AI products and developer tools") is retained in the bio copy, so no direction signal was lost. `npx astro build` passes; the rendered `dist/index.html` confirms both `Kashif Rezwi` and the role string present and the old split line absent.
- **Rationale:** Resolves the "two-line name feels odd" + "no consistent role line" feedback; satisfies the AGENTS.md §2/§3 requirement that the public role be one consistent, claim-safe string across every surface.
- **Approval status:** Implemented locally per the approved R4 cycle, R4-1 step. Not deployed; no branch merge. Next: R4-2 (dot matrix). [Marked by owner to proceed one step at a time.]

## DL-034 — R4-2/3/4 backfilled: dot-matrix multi-instance, tech-stack correction, first Experience additions

- **Date:** 2026-08-06
- **Decision:** Backfill the `v2-improvement` commits that implemented R4-2, R4-3, and part of R4-4: **R4-2** — `HeroDotMatrix.astro` refactored (`888a8ef`) to drive every `.hero-dot-matrix` canvas on the page, so the interactive motif repeats across hero and contact. **R4-3** — `TechIcon.astro`/`Icon.astro` add an SVG icon registry (`db07f82`); `REST APIs` reordered (`19a7157`); membership corrected with flat groups kept, LangChain dropped, ClickHouse/RabbitMQ added. **R4-4 (partial)** — Brand Exponents bullets deepened (Template Library "contributed to", reusable infinite-pagination "four product surfaces", production-stability wording).
- **Rationale:** Brings the log in line with the actual `v2-improvement` tip; stays within the R4 content/interaction/styling scope and AGENTS.md §3 claim safety (collaborative wording, no metrics).
- **Approval status:** Recorded post-hoc; consistent with the owner-approved R4 direction. Not deployed; no branch merge.

## DL-035 — R4-5 implemented: navbar pinned (fixed); dot enlargement + fade dropped per owner

- **Date:** 2026-08-06
- **Decision:** Complete R4-5 in `src/components/Header.astro`: `position: fixed; top/left/right: 0` so the navbar stays pinned at the top at all times; kept the frosted-glass translucent + blur background; removed the bottom-fade `::after` approach. Added `body { padding-top: 65px; }` + `scroll-padding-top: 5rem` in `src/styles/global.css` to prevent the fixed header covering content and anchors (matches the hero's existing `100svh - 65px`). Separately, per owner commentary, **dot enlargement was dropped** (R4-2 keeps the current ~1.05–1.7px dots and only extends the motif) and the **navbar bottom fade was removed from the plan**.
- **Rationale:** Reliable, absolute pinning with the theme's frosted glass intact and no hard-click/sticky-issue; the offset keeps content clear of the fixed bar. `npx astro build` passes.
- **Approval status:** Implemented locally. Not deployed; no branch merge. A previous R4-5 fade attempt had been reverted; the owner's now-confirmed scope is pinning only.

## DL-036 — R4-4 completed: Experience fill-out (Brand Exponents + Nexus), "several providers" correction, resume swap

- **Date:** 2026-08-06
- **Decision:**
  1. **Brand Exponents** (`index.astro`): added/aware of a **Workflow builder & analytics** group (workflow dashboards + reusable templates on Swipe Pages; Swipe One workflow-templates dashboard and analytics from an early stage; shared page-builder systems — global responsive typography, named solid/gradient colour systems, responsive video module); expanded **AI-assisted** to include the workflow AI assistant that auto-configures workflow nodes and auto-drafts email nodes from the user's profile context; expanded **Platform, launches & reliability** to two AppSumo launch periods (resolving customer queries, fixing live issues, shipping hotfixes, iterating across Discord/Facebook/AppSumo). Changed **"six providers" → "several providers"** per the owner (they worked on several, not six).
  2. **Nexus** — single summary line split into three bullets: event-management product (original content), features & integration (API via Axios/Fetch, CRUD, reusable components/UI libraries with designers/senior engineers), code quality (refactored frontend code).
  3. **Resume** — the site's `/resume` PDF was replaced with the rendered **Full-stack master** (`kashif-rezwi-master-full-stack-developer-2026-07.pdf`) so the served resume matches the site identity ("Frontend-focused Full Stack Engineer") and the expanded experience section.
- **Rationale:** Adds verified depth from the experience-evidence + master resumes; preserves all existing points; collaborative wording; no measured metrics, no "revenue" or "instant-messaging chat" unverified claims introduced. Resume selection aligned with the site's canonical role string.
- **Approval status:** Implemented locally (owner directed the additions and the resume swap). R4-6 QA and R4-7 deploy remain owner-gated. No branch merge, no deploy.

## DL-037 — Case-study prev/next nav: side-by-side on mobile (responsive fix)

- **Date:** 2026-08-06
- **Decision:** Fix the case-study bottom navigation (`src/pages/work/[slug].astro`) at `max-width: 600px`. The previous mobile rule stacked `.case-nav` into a column and left-aligned both items, which put Previous and Next on two lines at the left — a reported mobile defect. The rule now keeps `flex-direction: row` on all breakpoints, gives each `.case-nav-item` `flex: 1; min-width: 0`, makes `.case-nav-link` `width: 100%; min-width: 0`, and ellipsizes the `.case-nav-dir`/`.case-nav-name` text so long case titles truncate instead of wrapping. Result: Previous sits left, Next sits right, on a single row, at every width from 320px up. Verified programmatically at 320/375/390/414/768/1024/1280/1440 (prev 24–152, next 168–296 at 320px; `scrollWidth === clientWidth`; zero page overflow).
- **Rationale:** The reported mobile breakage came from the column/left-align override in the `@media (max-width: 600px)` block; keeping the row with shrink + ellipsis preserves the desktop left/right pattern and guarantees the bottom card edge still has meaningful hit targets on narrow screens.
- **Approval status:** Implemented locally on `v2-improvement` (working branch, not deployed). `npm run build` passes (6 pages). Part of the R4-6 QA pass; promotion/deploy remain owner-gated.

## DL-038 — Theme toggle relocated to hamburger drawer on mobile/tablet

- **Date:** 2026-08-06
- **Decision:** On non-desktop screens (≤640px) the theme control no longer renders in the navbar; it is moved into the mobile hamburger drawer (`src/components/Header.astro`). `ThemeControl.astro` was refactored to accept an `idPrefix` prop so each instance gets unique radio ids (`theme-*` vs `menu-theme-*`); its script now selects `input[data-theme-control]` and its thumbnail CSS uses value-based `:has(input[value='light'|'dark']:checked)` selectors instead of id-based ones, which is instance-agnostic. The header instance is hidden via `@media (max-width:640px) .nav-tools :global(.theme-control){display:none}` (scoped-CSS requires the `:global()` to reach the child component's element). The drawer hosts a second `<ThemeControl idPrefix="menu-" />` in a bordered `.mobile-nav-theme` row.
- **Rationale:** Declutters the mobile header (was logo + theme + hamburger); one setting UI now lives inside the menu. theme state stays shared via one localStorage key; both instances sync to the same `html[data-theme]`. No duplicate ids (`theme-system/light/dark`, `menu-theme-system/light/dark`). Verified: header hidden + drawer control present at 375/320; header shows on desktop; dark-mode click in drawer sets `data-theme`, persists, and moves both thumbs; build passes (6 pages).
- **Approval status:** Implemented locally on `v2-improvement` (not deployed). Part of R4-6 QA; promotion/deploy owner-gated.

## DL-039 — Experience section text justified

- **Date:** 2026-08-06
- **Decision:** In `src/pages/index.astro`, apply `text-align: justify; text-justify: inter-word;` with `text-align-last: left` to the experience body text (`.exp-group-text` and `.exp-summary`) so multi-line paragraphs read evenly on both edges. Scoped to body paragraphs only — labels (`.exp-group-label`), company/period lines, and single-line elements keep left alignment.
- **Rationale:** Owner requested justify for better readability/consistency in the Experience section. `text-align-last: left` keeps the final line of each paragraph ragged so justification doesn't stretch the last line into awkward gaps; `inter-word` limits spacing distortion to word gaps.
- **Approval status:** Implemented locally on `v2-improvement` (not deployed). Build passes (6 pages); computed style confirmed `justify`/`inter-word`/`left`. Part of R4-6 QA; promotion/deploy owner-gated.

## DL-040 — Work-card screenshots fit fully (contain); zoom only on hover

- **Date:** 2026-08-06
- **Decision:** In `src/components/WorkCard.astro`, change the cover image `object-fit: cover` → `contain` (and drop the fixed `object-position: top`). Each project screenshot now renders whole at rest instead of being center/top-cropped, while the `.work-card:hover img` `scale(1.03)` zoom remains the only magnification. The cover container keeps its `aspect-ratio: 16 / 9` so grid cards stay uniform in height; the two near-16:9 OG captures (perplexity 2940×1600, lingo-agent 2938×1598) show thin side letterboxing, the 1920×1080 one fills edge-to-edge.
- **Rationale:** Owner reported the covers looked pre-zoomed/cropped from every direction when idle; they asked for the full screenshot to fit and zoom only on hover. `contain` satisfies that; `reduce-motion` transform override already disables the hover zoom.
- **Approval status:** Implemented locally on `v2-improvement` (not deployed). Build passes (6 pages); computed `object-fit: contain` verified on all three cards. Part of R4-6 QA; promotion/deploy owner-gated.

## DL-041 — Work-card covers: blurred same-image filler behind letterboxed screenshot

- **Date:** 2026-08-06
- **Decision:** In `src/components/WorkCard.astro`, the cover div now carries its processed screenshot as an inline `background-image`. A `::before` layer (which inherits that same image via `background-image: inherit`) is `blur(14px) saturate(1.2)` and `scale(1.15)` to hide its edges, filling the top/bottom empty space left by `object-fit: contain` on the near-16:9 OG captures. The foreground `img` stays `position: relative; object-fit: contain` on top. Hover `scale(1.03)` zoom and the `prefers-reduced-motion` disable remain unchanged; `background-color: var(--color-surface-2)` is the fail-safe.
- **Rationale:** Owner wanted the fully-fit screenshot (DL-040) but the empty letterbox bars looked unfinished; using the same image blurred as filler is the standard, self-consistent treatment and needs no new asset.
- **Approval status:** Implemented locally on `v2-improvement` (not deployed). Build passes (6 pages); computed style confirms blur layer on all three cards; no mobile overflow. Part of R4-6 QA; promotion/deploy owner-gated.

## DL-042 — Work section dividers de-duplicated (More projects list)

- **Date:** 2026-08-06
- **Decision:** Remove the per-row `border-bottom` in `src/components/ProjectRow.astro` (the `.project-row` rules and the `:last-child` override). The "More projects" compact list now keeps only the single `.more-projects` container `border-top`, which separates the list from the work-card grid above; rows are separated purely by padding.
- **Rationale:** The compact three-row block had four stacked horizontal rules (container top + a border after each row), which was visually noisy. One separators line is cleaner and keeps the vertical rhythm.
- **Approval status:** Implemented locally on `v2-improvement` (not deployed). Build passes (6 pages); computed style confirms container `border-top: 1px` and row borders `0px`. Part of R4-6 QA; promotion/deploy owner-gated.

## DL-043 — Hero role as skewed cornflower badge + direction accent restored

- **Date:** 2026-08-06
- **Decision:** In the hero (`src/pages/index.astro`), the role line `Frontend-focused Full Stack Engineer` is now a **solid cornflower badge**: `.hero-role-badge` gets `background: var(--color-accent)` (cornflower), `skewX(-8deg)` (parallelogram leaning top-left → top-right), a soft accent shadow, and rounded corner; the inner `.hero-role-text-inner` is counter-skewed `skewX(8deg)` so the title reads upright, with **white** text over the cornflower fill. Separately, the direction line below the role restored its accent highlight: `hero-direction` again wraps its text in `.gradient-text` (accent tint `--color-accent-text`), matching the pre-DL-033 look.
- **Rationale:** Owner asked for a solid highlight on the role ("cornflower variant bg, leaning top-left to top-right, white text") and to revert the description's altered style. Confirmed two design choices: skewed parallelogram + restore accent on the direction line. White on cornflower `#6495ed` meets AA against the badge fill.
- **Approval status:** Implemented locally on `v2-improvement` (not deployed). Build passes (6 pages); computed styles confirm cornflower bg (rgb(100,149,237)), skew matrix, white text, counter-skew, accent direction; no overflow at 1440 or 375. Part of R4-6 QA; promotion/deploy owner-gated.

## DL-044 — Direction line restored to the exact old deployed accent style

- **Date:** 2026-08-06
- **Decision:** Correct DL-043's incomplete restore. The description line `Building toward AI product engineering and developer tools` now renders exactly as it did in the deployed R3 build (`gh-pages` tip `b04e6e0`): the phrase **"Building toward AI product engineering"** is wrapped in `.gradient-text` (accent tint `--color-accent-text`, verified `rgb(169,200,255)`), followed by `<br />` and plain **"and developer tools"** in `--color-ink-muted`. `.hero-direction` reverted to the old role sizing `clamp(1.25rem,3vw,1.75rem)` / weight 500 / line-height 1.3 to match the pre-R4 visual. The `Frontend-focused Full Stack Engineer` role badge (DL-043) is retained above it.
- **Rationale:** The owner compared the direction line to the live site and it still looked unstyled — because the whole string had been gradient-wrapped and the size/dim styling had drifted. This restores the precise old markup (partial accent + line break + plain tail) at the old size.
- **Approval status:** Implemented locally on `v2-improvement` (not deployed). Build passes (6 pages); computed style verified (badge bg `rgb(100,149,237)`, direction 28px, gradient `rgb(169,200,255)`, plain tail). Part of R4-6 QA; promotion/deploy owner-gated.

## DL-045 — Role badge finalized: original skewed cornflower, sharp corners

- **Date:** 2026-08-06
- **Decision:** Lock the hero role badge back to the owner's original design (per DL-043) with one change: **remove the corner radius** (`border-radius: 0`). Solid cornflower (`--color-accent`) parallelogram via `skewX(-8deg)`, inner text counter-skewed `skewX(8deg)`, white text, soft accent shadow. The two alternatives trialed (soft-tint pill chip; ink text + underline) were reviewed and the owner kept the original skewed design.
- **Rationale:** Owner preference — the original highlight reads better in their design language; the sharp corner removes the pill/"badge" look and keeps it a crisp ledger-highlight block.
- **Approval status:** Implemented locally on `v2-improvement` (not deployed). Build passes (6 pages); computed styles confirm cornflower bg, radius 0, skew matrix, white text, no overflow at 1440. Part of R4-6 QA; promotion/deploy owner-gated.

## DL-046 — Anchored section landing fixed (remove double scroll offset)

- **Date:** 2026-08-06
- **Decision:** Change `html { scroll-padding-top }` in `src/styles/global.css` from `5rem` (80px) to `1.25rem` (20px). The nav anchors (`#work`, `#skills`, `#experience`, `#contact`) previously landed each section 80px from the viewport top — the fixed header is 66px — *and* every section already carries its own `padding-block: 5rem` (80px) top padding. The result was a **95px dead zone** between the header bottom and the section heading (heading sat at 160px), which read as "previous section still visible." With `1.25rem`, the section lands at 20px, the heading at ~100px — right below the 66px bar with a ~35px breathing gap, and no part of the previous section on screen.
- **Rationale:** The offset was being double-counted (scroll padding + the section's own top padding). Because sections carry their own top padding, the scroll offset only needs to clear the bar, not add a second gap. Verified programmatically at 1280×800: before — section top 80px / heading 160px / dead zone 95px; after — section top 20px / heading 100px / dead zone 35px. Deployed R3 (gh-pages tip `b04e6e0`) had no `scroll-padding-top` at all, which caused the opposite defect (section heading tucked under the sticky header). 
- **Approval status:** Implemented locally on `v2-improvement` (not deployed). Build passes (6 pages). Part of R4-6 QA; promotion/deploy owner-gated.

## DL-047 — Portrait refinements: solid ring at rest, hover shrink + lean, larger on desktop

- **Date:** 2026-08-06
- **Decision:** Final portrait treatment in `src/pages/index.astro`:
  - `.portrait-wrapper::after` is now a **solid cornflower ring visible on all sides** at rest (`inset: -8px; background: var(--color-accent)`), replacing the earlier "shadow on one corner" attempt.
  - On `.hero-portrait:hover` the ring **shrinks to the photo's own size** (`inset: 0`) and **moves** `translate(10px, 12px)`; the `.portrait-img` simultaneously shifts the opposite direction `translate(-6px, -6px)`. Both transition at `0.35s ease`.
  - Desktop `@media (min-width: 1024px)` enlarges the portrait from 220px → **260px** (tablet keeps 220px; mobile ≤768px keeps 160px).
  - The temporary comparison page `src/pages/portrait-preview.astro` (four variants) was deleted after the owner rejected all of them; `src/layouts/Base.astro` gained an optional `noindex` prop (used for such throwaway pages) so stray preview pages never enter search indexes.
- **Rationale:** Owner directed the sequence: solid ring first ("shadow on all sides" instead of offset), then hover should *shrink* the ring to profile size and move it, with the photo leaning slightly opposite for a tactile effect; then enlarged portrait on desktop. Removing the preview page keeps the repo's "one canonical doc/file per subject" discipline and prevents accidental indexing.
- **Approval status:** Implemented locally on `v2-improvement` (not deployed). Build passes (6 pages, down from 7). Verified at 1440/1024/375: no page x-overflow; ring at rest `inset -8px`, hover `inset 0` + `translate(10px,12px)`, img `translate(-6px,-6px)`. Part of R4-6 QA; promotion/deploy owner-gated.

## DL-048 — Contact anchor landing fixed (footer bottom scroll room)

- **Date:** 2026-08-06
- **Decision:** Add `margin-bottom: 5rem` to `footer` in `src/components/Footer.astro` (alongside its existing `margin-top: 4rem`). The contact section is the last block on the home page, so the page max-scrolled (4980px) 66px short of the anchor position (needed 5046px); the section topped out at 86px, and with its own 80px top padding the heading landed ~166px — about 100px below the header, versus ~34px for every other section. The footer margin adds 80px of scroll room so `#contact` now reaches the `scroll-padding-top: 1.25rem` anchor like the rest.
- **Rationale:** DL-046 fixed the double-offset for all sections reachable at full scroll; the contact section was unreachable because no scrollable content existed below it. Adding scroll room below the footer (rather than more padding inside the already-80px-padded section) makes the anchor reachable and keeps section spacing consistent.
- **Approval status:** Implemented locally on `v2-improvement` (not deployed). Build passes (6 pages). Verified at 1280×800: `#work`, `#experience`, `#contact` all land with section top 20px, heading 100px, gap 35px below the fixed header (was ~100px for contact). Part of R4-6 QA; promotion/deploy owner-gated.

## DL-049 — System-theme icon is device-aware (monitor/tablet/phone by viewport)

- **Date:** 2026-08-06
- **Decision:** In `src/components/Icon.astro`, the `system` glyph is now a device-aware triple: `g.sys-desktop` (monitor), `g.sys-tablet` (tablet), and `g.sys-phone` (phone) are all rendered inside the same `<svg>`, and CSS in the component shows exactly one by viewport width — desktop `>1024px` (default), tablet `641–1024px`, phone `≤640px` (the same breakpoint that moves the theme control into the hamburger). The `theme-choice.choice-system` scope keeps the switch local to the system option.
- **Rationale:** The "system" theme option previously used a generic desktop-monitor icon on every screen, which misrepresented the device the theme is following. Showing the actual device type reinforces what "system" means.
- **Approval status:** Implemented locally on `v2-improvement` (not deployed). Build passes (6 pages). Verified with agent-browser device emulation: iPhone 12 (390px) → phone glyph, iPad Pro (1024px) → tablet glyph, desktop (1280px) → monitor glyph. Part of R4-6 QA; promotion/deploy owner-gated.

## DL-050 — Resume removed from desktop navbar (kept in hamburger drawer)

- **Date:** 2026-08-06
- **Decision:** Remove the `.nav-resume` `<a class="btn-outline">` from the desktop `.nav-tools` row in `src/components/Header.astro`, along with its `.nav-resume` style and the `@media (max-width:640px)` `.nav-resume` hide rule. The Resume link stays as the last `.mobile-nav-link accent` item inside the `#mobile-nav` drawer, so it remains reachable on small screens and in the hamburger on desktop.
- **Rationale:** Owner asked to declutter the desktop navbar; Resume remains one tap away in the drawer.
- **Approval status:** Implemented locally on `v2-improvement` (not deployed). Build passes (6 pages); verified desktop `.nav-tools` has no resume link and the drawer still lists Work/Experience/Contact/Resume. Part of R4-6 QA; promotion/deploy owner-gated.

## DL-051 — CI build check extended from `develop` to `main`; deploy stays manual-only

- **Date:** 2026-08-06
- **Decision:** Extend `ci.yml` to run the build/contrast check on pushes and PRs to **`main`** as well as `develop` (`push.branches` and `pull_request.branches` now `[develop, main]`). Production deploy (`.github/workflows/deploy.yml`) is intentionally **left manual-only** (`workflow_dispatch`), so a push/merge to `main` triggers CI automatically but never auto-deploys — production deploys stay owner-gated. No inline branch pin was added to `deploy.yml`; manual runs deploy from the branch selected in the Actions UI (default `main`).
- **Rationale:** Give `main` the same self-healing build signal `develop` has, while keeping production deploys approval-gated (AGENTS.md §1 gate loop). Matches the owner's ask to replicate the `develop` CI/CD loop on `main` with a manual deploy trigger.
- **Approval status:** Approved (owner directive in conversation, 2026-08-06). Verified via a manual CI run on `main`.

## DL-052 — Production deploy auto-triggers on push/merge to `main`

- **Date:** 2026-08-06
- **Decision:** Add a `push` trigger to `.github/workflows/deploy.yml` so it runs **automatically on every push/merge to `main`** (in addition to the existing `workflow_dispatch`). Supersedes the earlier "manual-only on main" approach (DL-051) at the owner's request. A push/merge to `main` now builds and deploys production without a manual dispatch.
- **Rationale:** Owner requested auto-deploy on `main` ("Option C") so changes are visible live on push, matching the push-to-deploy expectation. Production surface is the `main` branch only, so the trigger is scoped to `main`.
- **Note — still gated by Pages source:** `actions/deploy-pages` only publishes once the repo's Pages source is switched from branch `gh-pages` to **GitHub Actions** (repo Settings → Pages, owner action). Until that switch, `deploy.yml` runs but does not change the live site.
- **Approval status:** Approved (owner directive in conversation, 2026-08-06).

## DL-053 — LinkedIn testimonials section added as a content collection

- **Date:** 2026-08-07
- **Decision:** Add a **Testimonials** home section sourced from two LinkedIn recommendations (Thanga Balaji S, Adithya Santhosh — seniors at Brand Exponents Creatives Pvt Ltd). Implemented as an Astro content collection (`testimonials`) with a `TestimonialCard` component, rendering quote + highlighted pull-quotes + author attribution linking to each recommender's LinkedIn profile, with photos committed under `public/testimonials/`. Quotes were chosen to be inserted **verbatim** (claim-safe — AGENTS.md §3).
- **Rationale:** Owner evaluated automatic LinkedIn syncing (Official Recommendation API is partner-gated; scraping/Voyager/cookie-based and third-party scrapers violate LinkedIn's ToS and the operating contract's source safety §4) and chose the managed-content approach this repo already uses for case studies. Owner supplied the quotes, relationship labels, dates, profile URLs, and photos directly.
- **Approval status:** Approved (owner directive in conversation, 2026-08-07). Implementation complete; deployed to production only on a separate owner "go".

## DL-054 — Adopt the "R5 Operating Loop" as the canonical engineering workflow

- **Date:** 2026-08-07
- **Decision:** Replace the generic six-step loop in AGENTS.md §7 with the **R5 Operating Loop**, fully specified in the new canonical document `docs/engineering/engineering-workflow.md`. The loop merges the owner's seven-step process (reason → brainstorm → research → evaluate → plan → implement → review) with the repo's existing model and adds two steps that guard against drift: **step 1 git-truth verification** (docs claims checked against actual branch/merge/origin state) and **explicit recording per phase**. The loop: Orient (read context + verify git) → Decide (objective, reason, brainstorm ≥2, research-label, evaluate → owner gate if scope/claims/identity change) → Plan (plan doc) → Build (smallest steps) → Prove (acceptance self-review + docs-vs-code-vs-git audit + repo checks + evidence doc) → Record (decision log, open questions, project status) → stop for owner approval.
- **Rationale:** The audit (2026-08-07) found the exact failure this workflow prevents: `09-r4-improvement-plan.md`, `project-status.md`, and the R5 design doc described R4 work as living on `v2-improvement`, "not deployed" — while git showed it was already merged into `develop` and pushed. The previous loop never forced a git-truth check, and the seven-step process had no record step, so stale prose silently became authority. A single, documented loop with per-step artifacts makes every phase resumable by a fresh agent and keeps the repo the single source of truth.
- **Approval status:** Owner approved in conversation (2026-08-07) via the correction workflow; applied with DL-055.

## DL-055 — R4 merged to `develop`; R5 working branch is `evolve-design`; repo docs corrected to git truth

- **Date:** 2026-08-07
- **Decision:** (1) Record git truth: `v2-improvement` was already merged into `develop` (`895d89c`); testimonials + DL-053 landed on `develop` (pushed `655c6f7`); `v2-improvement` is fully contained in `develop` and must **not** be used as a base for new work. (2) The **R5 working branch is `evolve-design`** (= `develop` + the R5 design spec, committed `de90c67`) — matches the cycle name and is the base for all R5-1…R5-8 gates; promotion to `develop` → `gh-pages` (or `main` once Pages source = Actions) only on a separate owner "go". (3) Corrected stale docs to match: `README.md` (R3 now live), `docs/project-status.md` (R4 merged; next action = R4-6 QA + deploy gate, then R5-0), `docs/rebuild-02/09-r4-improvement-plan.md` (status + R4-7 path), `docs/rebuild-02/11-r5-glassmorphism-design.md` (§10 working branch + R5-8 path), and `docs/engineering/handoff-guide.md` (Phase-1-era → post-launch cycle era).
- **Rationale:** Documentation must be the single source of truth and must match the repository's actual state (AGENTS.md §1 "Last updated", §5 documentation quality). The audit (DL-054) surfaced doc-vs-code-vs-git drift; this decision closes it so a fresh agent orienting per the R5 Operating Loop step 1 finds prose aliased to reality.
- **Approval status:** Owner selected "fix all stale claims" and "evolve-design" in conversation (2026-08-07).

## DL-057 — R5-2 header + hero glass implemented (first rendered glass)

- **Date:** 2026-08-07
- **Decision:** Implement **R5-2** per the R5 spec (§7 rows Header/Hero, §9 R5-2): (1) **Navbar** — replace the historical hand-rolled frost (`color-mix(canvas 85%)` + `blur(12px)`) with the token glass recipe (`--glass-bg`, `backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturate))`, `1px solid var(--glass-border)` bottom edge, `transition: background var(--duration-base) ease`), plus `@supports not (backdrop-filter)` and `prefers-reduced-transparency: reduce` fallbacks to `--glass-bg-solid`. (2) **Hero identity plate** — `.hero-content` becomes a single `.glass-panel` (`glass-panel hero-panel`) floating over the live matrix (whole identity block: label → bio → CTA row), with a new static `.hero-ambience` radial `--color-glow` layer (masked, `aria-hidden`, `pointer-events:none`) behind it so the glass reads as a lit console field. Portrait ring and parallelogram badge untouched (owner-locked). New `npm run check:glass-contrast` script (`scripts/check-glass-contrast.mjs`) models the composited glass-over-backdrop and AA-checks every hero/nav text token in both themes.
- **Rationale:** R5-2 is the first phase that renders glass — its contract is "make the navbar + hero articulate the material, keep everything else flat" (spec §9). Decisions from the plan doc: navbar = token glass (A1), hero = single identity plate + ambient glow (B1) — both per the §7 score (Header II, Hero III) and ≤3 surfaces/§12. On-glass contrast is enforced as actually rendered over the token backdrop (S-5/§5.3), not over a flat swatch.
- **Approval status:** Owner "go" for R5-2 in conversation (2026-08-07, before this DL). Implementation complete; evidence in `docs/rebuild-02/15-r5-2-header-hero-glass-evidence.md`. Verification: build clean (6 pages), `check:contrast` 16/16, on-glass contrast 6/6 AA dark+light, Lighthouse perf/bp/seo 100 (mobile+desktop), axe 0, zero overflow 320–1440. Lighthouse a11y = 96 due to the **pre-existing R4 role badge** (white-on-cornflower, 2.97:1, `8a076ec`) — not introduced here; see the dated note below (OQ-R5-9 resolved). No claims changed. No deploy.
- **Note (2026-08-07, badge-fix follow-up, OQ-R5-9):** At the owner's direction ("apply the OQ-R5-9 badge fix now") the role-badge fill moved from `--color-accent` (#6495ed, 2.97:1) to a new token `--color-accent-badge: #3f63c9` (white text **5.47:1**, WCAG-compliant in both themes). Parallelogram shape, skew, shadow, and white text all untouched (DL-043/045 locks intact). Row added to `scripts/check-contrast.mjs` so the pair is CI-enforced (now 17/17). Re-verified: build clean, Lighthouse a11y **100/100** (mobile), axe **0** dark + light. R5-2 remains uncommitted on `evolve-design`; gate: R5-3.

## DL-056 — R5-1 glass foundation implemented (tokens + utilities, zero visual diff)

- **Date:** 2026-08-07
- **Decision:** Implement **R5-1 glass foundation** per the R5 spec (§9): added the R5 glass material tokens (`--glass-bg/--glass-border/--glass-blur/--glass-saturate/--glass-highlight/--glass-bg-solid/--color-glow`) and motion/elevation seeds (`--duration-fast/base/slow/xslow`, `--elevation-sm/md`) in `global.css` across all three theme scopes; added `.glass`, `.glass-panel`, `.glass-card`, and `.field-backdrop` utilities with `@supports not (backdrop-filter)` and `prefers-reduced-transparency` fallbacks to solid `--glass-bg-solid`; created `.label-overline`, `.meta`, `.mono` text utilities (defect E extraction, wired in R5-5/R5-6); removed dead tokens `--color-success`/`--color-warning` (defect A). **No markup was changed** — glass classes run nowhere yet (zero visual diff by design). Elevation seeds use fixed `rgba(0,0,0,…)` so they behave identically in both themes.
- **Rationale:** R5-1's contract is "build the vocabulary, change nothing visible" (spec §9 even-when + R5 Operating Loop step 4 "smallest change, prove no regressions"). Keeping utilities unwired means the whole phase is trivially reversible and provable; wiring happens exactly in the phase that owns each surface (R5-2 header/hero, R5-3 cards, R5-5 inner pages). Contrast floor for the fallback path is the existing AA-safe surface. AA-on-glass is checked in R5-2 where actual glass + content first render (§5.3).
- **Approval status:** Owner "go" for R5-1 in conversation (2026-08-07, before this DL). Implementation complete + evidence in `docs/rebuild-02/13-r5-1-glass-foundation-evidence.md`; **next gate R5-2 (header + hero glass) awaiting owner approval.**

## DL-058 — R5-3 card + surfaces pass implemented

- **Date:** 2026-08-07
- **Decision:** Implement **R5-3** per the R5 spec (§7 score rows, §9): (1) **WorkCard** — `card` → `glass-card`, hover = transform-only lift; (2) **TestimonialCard** — `card` → `glass-card` (quotes re-AA'd on glass per OQ-R5-7); (3) **GitHub card** → glass tokens + local top-edge catch light; (4) **tech chips** → glass chips with tonal brand hover (brand tint 14% + glow 20%); (5) **more-projects** → glass strip (I); (6) **ambient bands** — masked static `--color-glow` layer behind work/skills/testimonials/now sections (`.band-host` + `.section-band`, `aria-hidden`); (7) **new token `--color-ink-dim-glass`** (#848484 dark / #6c6c6c light) — plain ink-dim dips to 4.33–4.38:1 over the band composite, so glass/band meta uses the AA-safe tier. Backdrop-filter kept OFF on card surfaces (they float over a smooth band — nothing to blur, §12); hero panel remains the only real blur over the live matrix.
- **Rationale:** Matches the "one-premium card system" (glassy §7) without stacking blurred layers (§12) and without regressing the AA bar (glass tint now extends to content surfaces exactly as it did to hero in R5-2). The global `ink-dim` stays at its AA-on-canvas value for flat surfaces; a dedicated token covers the on-glass/band case instead of weakening the band or the global token.
- **Approval status:** Owner "go" for R5-3 in conversation (2026-08-07, before implementation). Implementation complete; evidence in `docs/rebuild-02/17-r5-3-card-surfaces-evidence.md`. Verification: build clean (6 pages), `check:contrast` **19/19**, on-glass contrast **24/24** AA (dark+light × canvas/band), Lighthouse **100/100/100/100** (mobile+desktop), axe **0** (dark+light), zero horizontal overflow 320–1440, fallback rules compiled. No claims changed; no deploy. **Gate open: R5-4 (motion & micro-interactions) awaiting owner approval.**

## DL-059 — R5-4 motion & micro-interactions implemented

- **Date:** 2026-08-07
- **Decision:** Implement **R5-4** per the R5 spec §6 motion plan + §9: (1) **glass settle-in** — `@keyframes glass-settle` (fade to crisp, 8px rise, `--duration-xslow` ease-out) replaces the hero plate's generic `animate-fade-up`, per §6 "glass panels vary the translate direction slightly"; (2) **reveal refinement** — `.reveal` transition unified from raw 0.55s to the `--duration-slow` seed (motion sync, §5.2); (3) **field breathe** — 8s ease-in-out opacity 1↔0.85 on `.hero-ambience` only (the dot backdrop), resolving **OQ-R5-3** (field felt via shimmer, dots unchanged); (4) **focus echo** — `.glass/-panel/-card:focus-within` accent-tinted edge (`--color-accent-text`, `--duration-fast`), complementing the global `:focus-visible` ring (WCAG 2.4.11); (5) **hover catch** — `.work-card::after` one-pass diagonal shine sweep with `var(--glass-highlight)` (opacity + `translateX(-120%→280%)`, `--duration-xslow`, `pointer-events: none`).
- **Rationale:** Least-motion set that makes glass feel alive: one steady-state infinite opacity shimmer (the hero field), one premium hover cue (work cards, §7 flagship), entrance/settle emphasis (hero), and keyboard feedback on glass. All CSS-only — zero new JS/deps; `backdrop-filter` never animated (§6 rules); every new rule gated by `prefers-reduced-motion` (except the non-motion focus echo). Field-breathe range stays ≤ the verified full-band alpha → on-glass AA can only improve. Section bands deliberately **not** shimmered (calm behind text-dense cards). Work/testimonial base transitions extended with `border-color` because the unlayered component rules otherwise override the layered global echo transition.
- **Verification:** build clean (6 pages); `check:contrast` 19/19; on-glass 24/24; Lighthouse **100/100/100/100** (mobile+desktop) with TBT 0 ms, CLS 0; axe 0 (dark+light); **reduced-motion static proven** — emulated reduce produced byte-identical screenshots 1.2 s apart, zero settle/breathe/shine rules applied; no horizontal overflow 320–1440; no-JS/reduced-transparency unchanged; no claims changed; no deploy. Evidence: `docs/rebuild-02/19-r5-4-motion-microinteractions-evidence.md`.
- **Approval status:** Owner "go" for R5-4 in conversation (2026-08-07, "move to next phase"). Implementation complete; uncommitted on `evolve-design` (owner gate: approve R5-4 → commit + R5-5). **Next: R5-5 (case-study + inner pages) awaiting owner approval.**

## DL-060 — R5-5 case-study + inner pages glass implemented

- **Date:** 2026-08-08
- **Decision:** Implement **R5-5** per spec §7/§9 (inner pages = calm glass over flat surfaces): (1) **case-page hero** — `.case-hero` becomes a `band-host` (masked `.section-band` using the `--color-glow` recipe, `aria-hidden`, `pointer-events: none`) + `.case-hero-inner.glass-band` (glass-bg + `--glass-border` + `--radius-card`, no blur per §12 — nothing to blur behind a smooth masked field); hero-meta on `glass-settle`, children keep fade/stagger; (2) **`.case-centric` sidebar cards** — soft glass (tint + border + radius, no blur) with `glass-card` catch-light; (3) **case-cover glass frame** — tint + edge + radius, image unchanged; (4) **mobile nav drawer** — exactly the navbar glass recipe (glass-bg + blur + saturate + glass-border) so open drawer + fixed header read as one panel, with the header's existing `@supports` (no backdrop-filter → solid) and `prefers-reduced-transparency` fallbacks; drawer toggling untouched. Case-study body prose stays flat (§10).
- **Rationale:** Mirrors R5-3's proven glass recipe on the remaining "inner page" surfaces, one phase later. Blur is intentionally omitted on hero/sidebar/cover (flat glow-field behind — no depth cue to blur), retained only on navbar/drawer/hero-panel where content passes behind (§12). Contrast plan pre-agreed as **D4**: the hero band sits near the glow *peak*, not the card-zone half — so the glass-contrast script gained a **centre scenario** (dark 0.14 / light 0.10 full peak alpha) on the 3 core ink tokens → 30 checks (24 → 30).
- **Contrast outcome (D4 ruler):** the centre scenario exposed 3 sub-4.5 cases — dark `ink-muted` 4.34:1, dark `ink-dim-glass` 4.11:1, light `ink-dim-glass` 4.43:1 (the glow peak is the live worst case for the case-hero band). Same play as R5-3 (`--color-ink-dim-glass`): raised the tokens by the minimal delta preserving hierarchy — dark `ink-muted` `#888888→#8d8d8d` (4.63:1 centre), dark `ink-dim-glass` `#848484→#8b8b8b` (4.51:1 centre), light `ink-dim-glass` `#6c6c6c→#6a6a6a` (4.56:1 centre). No accent/ink change; all other checks only improved.
- **Verification:** build clean (6 pages); `check:contrast` 19/19; on-glass **30/30** (canvas + band + centre × both themes); Lighthouse **100/100/100/100** on a case-study page (mobile + desktop), TBT 0 ms, LCP 1.0 s, CLS 0; axe **0** violations on a slug page (dark + light); no horizontal overflow 320/390/768/1024/1440; reduced-motion untouched (glass-settle stays gated; drawer toggle unchanged); no claims changed; no deploy. Case-page computed-material audit (hero band, sidebar cards, cover frame, drawer) confirms the glass tokens land as specified with `backdrop-filter: none` exactly where the spec says. Evidence: `docs/rebuild-02/21-r5-5-inner-pages-evidence.md`.
- **Approval status:** Implemented + fully verified, uncommitted on `evolve-design` (owner gate: approve R5-5 → commit + R5-6 gate). **Next: R5-6.**

## DL-061 — R5-6 architecture cleanup

- **Date:** 2026-08-08
- **Decision:** Implement **R5-6 (architecture cleanup)** per spec §8/§9. Scope: (1) create `SectionHeader.astro` (label/title/subtitle) to kill the 5 duplicated `.section-header.reveal` blocks in `index.astro`; (2) create `GlassPanel.astro` (pure-presentation wrapper, `class`-merged so any glass surface composes the recipe) — `.glass-*` utilities stay the single recipe in `global.css`; (3) split `index.astro`'s 7 sections into `src/sections/*` (Hero, Work, Skills, Experience, Testimonials, Now, Contact), moving each section's scoped styles verbatim and passing data via props; (4) promote shared scaffolding (`.section-block`, `.section-alt`, `.band-host`, `.section-band`, `.band-host > .container-site`) to `global.css`, deleting the duplicated scoped copy in `index.astro` and `[slug].astro` (slug keeps its `case-hero`-scoped band + `45%` mask override); (5) delete dead code: `--elevation-sm/-md`, `--gradient-accent`, `--gradient-accent-text`, `--color-paper`, `--color-hairline`, `--color-border-focus`, `--color-accent-ink`, `.glow-pulse`, `.delay-600`, `.animate-fade-in` (all verified zero-usage); (6) unify duration-literals equal to seeds: `0.15s→--duration-fast`, `0.25s→--duration-base`, `0.4s→--duration-slow` (others left literal; changing would alter feel); (7) fix `check-contrast.mjs` drift (`#888888→#8d8d8d`, `#848484→#8b8b8b`, `#6c6c6c→#6a6a6a` — the script still carried pre-R5-5 hexes).
- **Rationale:** R5 layers have landed on almost every surface; evolution needs reusable primitives + one token source of truth (spec §8) before R5-7 full QA. Refactor-only by design: class-based scoped styles relocate 1:1 with their markup (`data-astro-cid` hashes change, computed styles don't), so zero visual diff is achievable and provable.
- **Refactor-only guardrails:** CSS is moved verbatim (only legit diffs = deletions + 3 duration swaps + contrast-script hex fix); no copy/claims/JS/deps/themes/motion policy changes.
- **Verification:** build clean (6 pages); `check:contrast` 19/19 (now enforcing the live R5-5 hexes after the drift fix); `check:glass-contrast` 30/30; Lighthouse 100/100/100/100 on home + a case page (mobile + desktop), TBT 0; axe 0 (dark + light, settled render); no horizontal overflow 320/390/768/1024/1440 (20/20); **rendered-output diff vs `HEAD` proves zero visual change** (only HTML-comment/whitespace/entity-encoding diffs on home, the deliberate `0.15s→var(--duration-fast)` swap on resume; 404 + all 3 case pages byte-identical); plan §2 items 1–7 all traceable; one advisory (pre-existing): standalone `@axe-core/cli` on the pre-settle load flags `.exp` gray `#707070` at 4.63:1 transiently — not an R5-6 regression, logged as OQ. Evidence: `docs/rebuild-02/22-r5-6-architecture-evidence.md`.
- **Approval status:** Implemented + fully verified, uncommitted on `evolve-design` (owner gate: approve R5-6 → commit + R5-7 gate). **Next: R5-7 (full QA matrix).**
- **Commit:** Approved by owner 2026-08-08 and committed to `evolve-design` as **`1f4a1a4`** (24 files, +1420/−1162; includes plan + evidence docs). **Next: R5-7 gate (full QA matrix).**

## DL-062 — R5-7 full QA (glass) phase

- **Date:** 2026-08-08
- **Decision:** Run **R5-7 (full QA report)** per spec §9 row R5-7: re-run the R3-F matrix with the R5 glass layer live, extended with the glass-specific scenarios (back-of-glass, reduced transparency, reduced motion, no-JS, contrast incl. on-glass 30/30). **QA-only** — no code changes; any discovered defect stops the phase and becomes a separate owner-gated fix. Plan: `docs/rebuild-02/23-r5-7-qa-plan.md`.
- **Rationale:** R5 (R5-1…R5-6) is the first self-contained glass release; the R3-F matrix predates glass, so the release needs one all-targets pass before the owner's R5-8 deploy go/no-go.
- **Scope (matrix M1–M11):** build; contrast 19+30; Lighthouse (home + 3 case + resume + 404, mob+desk × themes); axe 0 (settled); overflow 0 (320–1440 × themes); reduced-motion static equivalence; reduced-transparency solid fallback; no-JS content; links (internal + external); console errors 0; metadata/SEO retained.
- **Verification:** **R5-7 QA complete — all M1–M12 targets green** on the local release artifact (`dist/` via `astro preview`, `?theme=` hook; Chrome-headless/puppeteer-core/lighthouse/axe-core, tooling kept in `/tmp/qatools` — no repo `package.json`/`node_modules` change, S-12 intact). Build 6 pages clean; `check:contrast` **19/19**; `check:glass-contrast` **30/30** AA; **Lighthouse 100/100/100/100 on 24/24** cells (6 routes × mob/desk × light/dark), TBT 0, CLS 0, LCP ~0.5 s; axe **0** (settled) all routes × both themes; overflow **0 (20/20)**; reduced-motion proven static (`0.01ms` clamp, 0 real-motion elements, both themes); reduced-transparency → solid no-blur (`--glass-bg-solid`, `backdrop-filter:none` both themes, via CDP-emulated `prefers-reduced-transparency`); back-of-glass confirmed (2 `.hero-dot-matrix` canvases + `.hero-dot-fallback` behind semi-transparent `blur(12px)` glass panel); no-JS content visible (home 7297 chars, h1, hero fallback); internal + external links 200 (LinkedIn 999 authwall = benign, OQ-06); console 0 errors; metadata/SEO all unique + retained. Residuals logged: LinkedIn click-through (OQ-06), OQ-R5-11 pre-settle axe-CLI noise excluded by design (settled = 0, Lighthouse a11y 100). Rollback preserved: `gh-pages` tip `6991386`. Evidence: `docs/rebuild-02/12-r5-qa-evidence.md`.
- **Approval status:** **Complete (QA-only), records uncommitted on `evolve-design`** (plan + evidence + QA section prepared; owner gate: review → approve → commit + R5-8 deploy go/no-go). **Next / owner gate: R5-8 deploy go/no-go** — promote `evolve-design` R5 work to `develop` → `gh-pages` (owner-authorized action). Commits remain owner-gated.
