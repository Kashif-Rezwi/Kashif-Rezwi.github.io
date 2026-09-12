# Decision Log

- **Purpose:** Append-only record of project decisions. New entries are appended; existing entries are never silently rewritten (a status may be updated with a dated note).
- **Authority:** Entries record owner-approved decisions; each states rationale and approval status.
- **Last updated:** 2026-09-13 (DL-093)
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

## DL-063 — R5-8a pre-deploy polish & interaction enhancements (plan)

- **Date:** 2026-08-08
- **Decision:** Land a **pre-R5-8** enhancement cycle on `evolve-design` (before the R5-8 deploy go/no-go), per owner brainstorm. Five themes, implemented **one at a time**, each owner-gated: **T1** remove the hero glass card (flat content over the matrix + subtle legibility treatment); **T2** portrait favicon (`apple-touch-icon` + refreshed `favicon.ico`) + aligned `<title>`/manifest branding; **T3** testimonial premium redesign (editorial serif quote, refined glyph, hairline+inner-glow card, quiet highlights — presentation-only); **T4** replace static `--color-glow` bands with a **cursor-centered background spotlight** behind cards + neon-primary cursor glow (no-JS/reduced-motion/AA/perf gated); **T5** a contained **decoration-only canvas marquee** using `@chenglou/pretext` (expo-pretext measurement engine). Plan: `docs/rebuild-02/24-r5-8a-polish-interaction-plan.md`.
- **Rationale:** Owner wants a more premium/cohesive feel and interaction richness before shipping R5, while keeping the R5 QA bar and claim safety.
- **Constraint override (owner-approved):** **T5 overrides S-12** (zero new runtime deps) as the **first runtime JS dependency** — one contained, `aria-hidden`, decoration-only exception with a CSS-marquee fallback; it must never render body copy/claims and stays within S-2 (≤ 35 KB).
- **Scope:** T1–T5 only, presentation/interaction; **no claim/copy changes**; no R5-8 deploy in this cycle.
- **Verification:** per-theme evidence docs; shared done-when: build 6 pages clean; `check:contrast` 19/19 + on-glass **30/30** (updated as surfaces change); Lighthouse **100/100/100/100** (mob+desk × light/dark); axe **0** (settled); overflow **0**; reduced-motion + reduced-transparency; no-JS; JS budget re-measured; zero claim changes.
- **Approval status:** Plan recorded; implementation starts with **T1** (next after this record). Commits remain owner-gated.

## DL-064 — T2 (R5-8a) portrait favicon + portfolio `<title>` complete
- **Decision:** Replace generic favicon with circular portrait favicon (16px thick accent border, no cropping). Align home `<title>` to `Kashif Rezwi · Portfolio` to match manifest `name`.
- **Rationale:** Owner wanted "exact replica of the profile of mine from hero section with its shape, border." The Hero's `.portrait-wrapper::after` is a solid `--color-accent` (`#6495ed`) parallelogram at `inset: -8px` behind the clipped portrait. Favicon is a circle with 16px solid #6495ed border, portrait centered inside — rendered using `sharp` (vendored, build-time only, zero new runtime deps — S-12 compliant).
- **Fixes included:** T1 `.hero-textshadow` text-shadow was leaking onto `.btn` (dark-theme contrast ~1:1). Added scoped reset `.hero-textshadow .btn, .hero-textshadow .hero-social { text-shadow: none; -webkit-text-stroke: 0; }`.
- **Done-when evidence:** `docs/rebuild-02/26-r5-8a-t2-favicon-evidence.md`.
- **Status:** Complete (uncommitted on `evolve-design`). Stop for owner approval → T3.

## DL-065 — Section background transitions: replace transparent pseudo-element fades with solid-colour gradients

- **Date:** 2026-08-08
- **Decision:** Replace all `.section-fade-top` / `.section-fade-bottom` pseudo-element overlays with scoped solid-colour `background: linear-gradient(...)` directly on each section container. Each gradient uses only absolute resolved colours — `var(--color-canvas)` and `color-mix(in srgb, var(--color-surface) 40%, var(--color-canvas))` (the "alt-blend") — with **no `transparent` stops**. Sections are now chained so adjacent edges always share the exact same computed colour:
  - **Hero** → canvas (unchanged)
  - **Work** → `canvas 0 … canvas (100% − 160px) … alt-blend 100%`
  - **Skills** → solid alt-blend
  - **Experience** → `alt-blend 0 … canvas 160px … canvas (100% − 160px) … alt-blend 100%`
  - **Testimonials** → solid alt-blend
  - **Now** → `alt-blend 0 … alt-blend (100% − 160px) … canvas 100%`
  - **Contact** → canvas (unchanged; `section-fade-top` removed as Now already ends at canvas)
- **Rationale:** `transparent` in `color-mix()` and `linear-gradient()` composes in premultiplied alpha space; when an adjacent section has a non-zero `background-color`, the alpha boundary is rendered as a hard 1-pixel step (the "divider line" the owner reported). Using solid colours throughout eliminates the alpha compositing path entirely — the GPU sees two adjacent rectangles of the same colour at every boundary, so the seam is invisible.
- **Files changed:** `src/sections/Work.astro`, `src/sections/Skills.astro`, `src/sections/Experience.astro`, `src/sections/Testimonials.astro`, `src/sections/Now.astro`, `src/sections/Contact.astro`.
- **Verification:** Build clean (6 pages); dark + light visual audit at all four key boundaries (Work→Skills, Skills→Experience, Experience→Testimonials, Now→Contact) — no visible divider line in either theme.
- **Status:** Complete (uncommitted on `evolve-design`). Stop for owner approval before commit.

## DL-066 — T4 (R5-8a) cursor-driven background lighting removed per owner directive

- **Date:** 2026-08-08
- **Decision:** Remove the cursor spotlight component, script, and CSS entirely per owner directive ("just remove the cursor spotlight"), while keeping all section background layouts intact.
  - Removed `src/components/CursorSpotlight.astro` and its layout integration in `Base.astro`.
  - Removed `#cursor-spotlight` CSS rules from `global.css`.
- **Files changed:** `src/layouts/Base.astro`, `src/styles/global.css`, `src/components/CursorSpotlight.astro` (deleted).
- **Verification:** Build clean (6 pages); contrast checks 19/19 + 30/30 on-glass AA passed in both themes.
- **Status:** Complete (Cursor Spotlight removed).

## DL-067 — Section background continuity refinement: unified middle content band

- **Date:** 2026-08-08
- **Decision:** Resolved the remaining abrupt background color boundaries between **Skills → Experience** and **Experience → Testimonials** shown in user audit captures:
  - Removed the internal `160px` black-canvas gradient stops inside `Experience.astro` (`.exp-bg`) and updated it to solid `color-mix(in srgb, var(--color-surface) 40%, var(--color-canvas))`.
  - Updated `Work.astro` (`.work-bg`) to a smooth `0% -> 100%` vertical linear gradient fading from `var(--color-canvas)` (Hero) into the solid content tint.
  - Updated `Now.astro` (`.now-bg`) to a smooth `0% -> 100%` vertical linear gradient fading from the solid content tint into `var(--color-canvas)` (Contact).
  - The middle content sections (**Skills**, **Experience**, and **Testimonials**) now share a single, 100% continuous background surface with zero color breaks or mid-section dark stripes.
- **Files changed:** `src/sections/Work.astro`, `src/sections/Experience.astro`, `src/sections/Now.astro`.
- **Verification:** Build clean (6 pages); contrast checks 19/19 + 30/30 on-glass AA passed in both themes; Puppeteer browser audit confirmed 100% seamless visual flow across Skills → Experience and Experience → Testimonials.
- **Status:** Complete (uncommitted on `evolve-design`). Stop for owner approval.

## DL-068 — Hero ambient console-field backdrop glow removed

- **Date:** 2026-08-08
- **Decision:** Removed the ambient console-field glow backdrop (`.hero-ambience` div and `field-breathe` shimmer animation class) and the `section-fade-bottom` class from `src/sections/Hero.astro` per owner directive ("also remove the backdrop effect from the hero section too").
  - The hero identity text (name, bio, CTAs) now renders completely flat over the interactive dot matrix canvas with no background glow block.
- **Files changed:** `src/sections/Hero.astro`.
- **Verification:** Build clean (6 pages); contrast checks 19/19 + 30/30 on-glass AA passed in both themes; verified dot matrix remains visible and readable.
- **Status:** Complete (uncommitted on `evolve-design`). Stop for owner approval.

## DL-069 — AI Journey (Now section) redesigned into a single GlassPanel card

- **Date:** 2026-08-08
- **Decision:** Redesigned the **AI journey / Now section** (`src/sections/Now.astro`):
  - Replaced the plain text list with individual row border dividers by wrapping the items into a single `<GlassPanel variant="card">` matching the design pattern of the "More Projects" card in `Work.astro`.
  - Removed all `border-bottom` row dividers and replaced them with clean vertical flex gaps (`1.5rem`).
  - Added an uppercase monospace card label `RECENT UPDATES` (`.now-card-label`).
- **Files changed:** `src/sections/Now.astro`.
- **Verification:** Build clean (6 pages); contrast checks 19/19 + 30/30 on-glass AA passed in both themes.
## DL-070 — Case study page mobile card alignment & global backdrop removal

- **Date:** 2026-08-08
- **Decision:** Made two portfolio-wide refinements:
  1. **Removed all backdrop glows (`.section-band`) portfolio-wide**: Disabled `.section-band` glow layers in `src/styles/global.css` and removed `band-host` / `section-band` markup from case study pages ([src/pages/work/[slug].astro](file:///Users/kashifrezwi/Developer/Kashif-Rezwi.github.io/src/pages/work/[slug].astro)).
  2. **Aligned Case Study cards & mobile gutters**: Unified card container widths and responsive padding (`padding: 1.25rem`) across all case study blocks (`.case-hero-inner`, `.case-cover`, `.case-sidebar-card`), ensuring cards fit within `.container-site` margins on mobile screens without touching edge boundaries.
- **Files changed:** `src/pages/work/[slug].astro`, `src/styles/global.css`.
- **Verification:** Build clean (6 pages); contrast checks 19/19 + 30/30 on-glass AA passed in both themes.
## DL-071 — Light theme card contrast, dynamic tech stack hover system, and footer layout anchoring

- **Date:** 2026-08-08
- **Decision:** Solved key UX & visual design issues in light & dark themes:
  1. **Light theme card visibility & borders**: Changed light theme `--glass-border` from invisible 55% white to crisp 12% ink (`color-mix(in srgb, var(--color-ink) 12%, transparent)`).
  2. **Dynamic per-theme tech stack hover system**: Implemented theme-aware CSS custom properties (`--active-brand`, `--hover-text`, `--hover-bg-mix`, `--hover-border-mix`).
     - **Dark theme**: `--active-brand` uses bright `--brand-on-dark`, text glows in bright brand tint.
     - **Light theme**: `--active-brand` uses official `--brand` at 22% background mix with `var(--color-ink)` text contrast, producing rich brand background colors and glowing icons on hover in both themes with 100% WCAG AA text readability.
  3. **Footer anchoring & excess space**: Added sticky flex column layout (`min-height: 100vh`, `main { flex: 1 }`) in `global.css`, removed redundant duplicate `footer-cta` block and 192px dead space, and anchored `footer` seamlessly to the page bottom with a top border.
- **Files changed:** `src/styles/global.css`, `src/sections/Skills.astro`, `src/components/Footer.astro`.
- **Verification:** Build clean (6 pages); contrast checks 19/19 + 30/30 on-glass AA passed in both themes.
## DL-072 — T3 (R5-8a) Testimonials premium editorial redesign

- **Date:** 2026-08-08
- **Decision:** Implemented **T3 (Testimonials premium redesign)** per plan §2 (DL-063):
  - **Editorial Quotation Glyph**: Replaced faint quote mark with a 6rem low-opacity display-serif quotation glyph (`opacity: 0.15`, Georgia/Playfair font stack) as an elegant top-right background motif.
  - **Quiet Highlight Underlines**: Refined inline `<mark class="testimonial-highlight">` with soft accent fill + subtle accent underline (`border-bottom: 1.5px solid color-mix(in srgb, var(--color-accent) 40%, transparent)`).
  - **Typography & Alignment**: Set quote body text to `1.03125rem`, `line-height: 1.75`, `text-align: left` (avoiding inter-word justification gaps).
  - **Photo Ring & Hover Sheen**: Added dual accent ring (`box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-accent) 15%, transparent)`) with subtle hover scale (`transform: scale(1.05)`).
- **Files changed:** `src/components/TestimonialCard.astro`.
- **Verification:** Build clean (6 pages); contrast checks 19/19 + 30/30 on-glass AA passed in both themes; claims and verbatim recommendation quotes byte-identical.
- **Status:** Complete (uncommitted on `evolve-design`). Stop for owner approval.

## DL-073 — R5-8a Final pre-deploy audit (dead & duplicate code)

- **Date:** 2026-08-08
- **Decision:** Ran the final pre-deploy audit on `evolve-design` (owner-requested, "check and run the audit"). All three gates pass: `check:contrast` (19/19), `check:glass-contrast` (30/30), `npm run build` (6 pages, clean). Findings — **10 dead CSS blocks** in `src/styles/global.css` (`.label-overline`, `.field-backdrop`, `.section-divider`, `.section-band`/`.band-host`, `.section-alt`, `.section-fade-top/bottom`, `@keyframes field-breathe`, `.field-breathe`, `@keyframes blink`, `.card`) and **1 dead scoped rule** in `src/sections/Hero.astro` (`.hero-ambience`) — all verified zero-usage against every `.astro`/`.ts`/`.mjs` file. **No duplicate code found** (R5-6 SectionHeader/GlassPanel dedup holds; `.btn`/`.btn-outline` exist once in global.css).
- **Rationale:** Dead styles ship in prod CSS; removing them cuts ~110 lines with zero visual delta, consistent with R5-6 precedent (DL-111) and R5 spec dead-code row.
- **Approval status:** Approved (owner, 2026-08-08). Deletions applied: 129 lines removed (`src/styles/global.css` −120, `src/sections/Hero.astro` −10, 1 insertion); re-gated `check:contrast` 19/19, `check:glass-contrast` 30/30, `npm run build` 6 pages clean. Evidence: `docs/rebuild-02/26-r5-8a-audit-evidence.md`.

## DL-074 — Mandatory-changes review: nav/page order alignment, band duty-swap, 2×2 work grid, unified resume-link semantics

- **Date:** 2026-08-18
- **Context:** Owner branch `mandatory-changes` (`4611d8d`, on `develop`) added the About section, a 6-item nav (Home · About · Skills · Projects · Contact · Resume), promoted Better DEV to a 4th featured card via a new content entry (`/work/better-dev/`), and pointed nav/hero at the resume PDF directly. A full review (structural, stylistic, consistency, UX) found: nav order contradicting page order (non-monotonic scrolling), a 3+1 orphan card row at desktop widths, Better DEV as the only cover-less card, three divergent resume-link behaviors (new-tab+JS-download vs new-tab vs hub-page interstitial), and a double-artifact open-tab-and-download UX.
- **Decision (owner ratified):**
  1. **Nav order is mandated** → home sections reordered to match: Hero → About → **Skills** → **Work(Projects)** → Experience → Testimonials → Now → Contact (page renders `about, skills, work, …` — verified in built HTML).
  2. **Band duty-swap** to preserve the R5-8a seamless content band under the new adjacency: `.skills-bg` now carries the fade-in ramp (canvas → band) Work used to own; `.work-bg` is flat band. Solid colours only (DL-065/067 anti-seam rule upheld).
  3. **2×2 work grid ≥1024px** (`repeat(2, 1fr)`): auto-fill yielded a 3+1 orphan (4 tracks need ~1420px vs ~1104px container). Narrower widths keep auto-fill (2-up tablet, 1-up mobile).
  4. **Resume links unified to one semantic per intent:** nav (desktop + drawer) and About "grab my resume" use the native `download` attribute (no new tab, no JS — the `data-resume-download` shim was deleted); hero "View Resume" keeps view-in-new-tab; footer gains a `Resume` entry (relative href → in-tab download) so `/resume/` stays reachable; `resume.astro` `rel` completed to `noopener noreferrer`.
  5. **Deferred:** Better DEV cover screenshot → OQ-14 (owner action).
- **Files changed:** `src/pages/index.astro`, `src/sections/Skills.astro`, `src/sections/Work.astro`, `src/sections/About.astro`, `src/components/Header.astro`, `src/components/Footer.astro`, `src/pages/resume.astro`, `src/lib/paths.ts` (comment), `docs/open-questions.md`, `docs/project-status.md`, `docs/rebuild-02/27-mandatory-changes-review-evidence.md`.
- **Verification:** `npm run build` — **7 pages clean** (incl. new `/work/better-dev/`); `check:contrast` **19/19** PASS; `check:glass-contrast` **30/30** PASS; internal-link sweep of `dist/` — **0 broken**; sitemap includes all 7 routes; `astro preview` smoke — all routes 200 (404 correct, PDF 200/6,984 B); `betterdev.in` live (307 → www 200); built CSS confirms ramp/flat swap and the `width>=1024px` 2-column rule; `data-resume-download` fully absent from output. **Pending owner gates:** Lighthouse/axe/overflow sweep/visual captures (external tooling) and merge toward `develop`.
- **Status:** Complete on `mandatory-changes` (uncommitted). Stop for owner approval.

## DL-075 — Owner-directed follow-ups: Skills row layout, About redesign, one-section-per-viewport

- **Date:** 2026-08-18
- **Decision (owner-directed in conversation; no commit/push per explicit instruction):**
  1. **Skills layout reworked** (layout only; chip styling byte-identical): one category per full row (`Languages`, `Frontend`, `Backend`, `Databases & Infra`, `AI & Tools`, `Soft skills`), label inline with chips, `flex-wrap` rows; even rows start from the right (`:nth-child(2n) { justify-content: flex-end }`) at ≥640px — below 640px all rows left-align (right-aligned wrapped chips scan poorly on narrow screens). Fixes latent no-op: the 6th group's `delay-600` stagger utility now exists in `global.css`.
  2. **About section redesigned** (copy verbatim; layout/typography only): full-width card matching the Now-card family (was `max-width: 48rem`, floated small), two-column "who I am / where I'm heading" split ≥900px, lead paragraph at full `--color-ink` + `1.0625rem` (focal hierarchy), resume line promoted to card footer (`border-top: 1px solid var(--glass-border)`).
  3. **One section per viewport** — fixes "clicking a nav item shows other sections' content": `.section-block` gains `min-height: calc(100svh - 65px)` + flex-column centering (short sections center; tall ones grow), and `scroll-padding-top` corrected `1.25rem → 65px` to match the fixed header (anchors land exactly under the bar). Scope verified: `.section-block` is used by the 7 home sections only; Contact's dot matrix is `position: absolute` → unaffected by centering. Scroll-snap considered and rejected (trap-scroll UX, a11y risk). Hero keeps its R5 `clamp(600px, 100svh−65px, 860px)` cap (deliberate design; not a nav target).
- **Files changed:** `src/styles/global.css`, `src/sections/Skills.astro`, `src/sections/About.astro`, `docs/rebuild-02/27-mandatory-changes-review-evidence.md` (§5), `docs/project-status.md`.
- **Verification:** `npm run build` — 7 pages clean; `check:contrast` **19/19** PASS; `check:glass-contrast` **30/30** PASS (About lead is `--color-ink` on glass — strictly higher contrast than the passing ink-muted pair); built CSS confirms every rule (scoped `tech-grid` flex-column, `tech-group:nth-child(2n)` flex-end in `@media (width>=640px)`, `section-block` min-height, `scroll-padding-top: 65px`, `about-columns` 2-col at `width>=900px`, `delay-600`); built HTML contains the `about-columns` / `about-lead` markup.
- **Status:** Complete on `mandatory-changes` (uncommitted; **no commit/push per owner instruction**). Stop for owner approval.

## DL-076 — Brand Exponents professional experience tech stack correction

- **Date:** 2026-08-19
- **Decision (owner-directed):** Corrected and sequenced the technologies listed for **Brand Exponents Creatives Pvt Ltd** (Swipe Pages / Swipe One) in `src/sections/Experience.astro` and `src/sections/About.astro`:
  - Removed `PostgreSQL` (which was erroneously associated with Brand Exponents; PostgreSQL belongs to Kashif's personal AI projects: Code Review Agent, Perplexity, Better DEV).
  - Added `RabbitMQ` and sequenced the tech chips logically from **Frontend → Backend → Databases/Queues/Storage → Tools/DevOps/Testing**:
    - **Frontend & UI**: `React`, `Next.js`, `TypeScript`, `Tailwind CSS`, `Redux`, `TanStack Query`, `React Flow`, `Ant Design`, `Radix UI`
    - **Backend & APIs**: `Node.js`, `Express`, `REST APIs`
    - **Data, Storage & Queues**: `MongoDB`, `ClickHouse`, `Redis`, `RabbitMQ`, `DigitalOcean S3`
    - **Infra, Testing & Observability**: `Docker`, `Jest`, `Cypress`, `Sentry`
- **Files changed:** `src/sections/Experience.astro`, `src/sections/About.astro`.
- **Verification:** `npm run build` — 7 pages built cleanly.

## DL-077 — Signal Field visual-system implementation approved

- **Date:** 2026-08-19
- **Decision:** The owner approved implementation of the final UI/UX audit recommendations. The selected direction is **Signal Field**: preserve the cornflower Responsive Engineering Field, geometric portrait, Hero/Contact social rails, selective glass, Hero/Contact dot matrix, and Contact ASCII renderer; improve hierarchy, rhythm, cross-page consistency, and motion restraint.
- **Scope:** Primary/surface/utility glass roles; fixed directional portrait extrusion; active navigation state; mobile Contact CTA-first order; hierarchy refinements for About, Skills, Work, Experience, Testimonials, Now, case studies, Resume, and 404. ASCII remains singular in Contact.
- **Exclusions:** No claims/copy, routes, dependencies, technical stack, backend, SEO, deployment, global cursor effect, global parallax, extra animated ASCII, or generic redesign work.
- **Plan:** `docs/rebuild-02/28-signal-field-implementation-plan.md`.

## DL-078 — Signal Field implementation complete and locally verified

- **Date:** 2026-08-19
- **Decision:** Implemented the approved Signal Field plan without changing public copy, claims, routes, dependencies, or deployment behavior.
- **Delivered:** Tokenized primary/surface/utility glass roles; fixed-direction Hero portrait extrusion; active navigation state; Contact CTA-first mobile order; restrained hierarchy refinements across About, Skills, Work, Experience, Testimonials, Now, case studies, Resume, and 404. The ASCII renderer remains singular in Contact.
- **Verification:** Astro production build completed all **7 pages**; `check:contrast` **19/19**; `check:glass-contrast` **30/30**; visual checks at 320/768/1024/1440px, light/dark, desktop/mobile, reduced motion, zero horizontal overflow, active navigation, and portrait hover passed; browser error/console checks clean. Evidence: `docs/rebuild-02/29-signal-field-implementation-evidence.md`.
- **Status:** Local changes are uncommitted. No push or deployment was performed; next action is owner review/authorization for any commit or promotion.

## DL-079 — Signal Field screenshot-review corrections

- **Date:** 2026-08-19
- **Context:** The owner requested a final cross-check of the approved Signal Field implementation and supplied two visual screenshots. The screenshots are visual evidence only; no external instruction source was followed.
- **Decision:** Correct four implementation defects found through source inspection and responsive reproduction:
  1. `Contact.astro` passed `contact-content` into the child `GlassPanel` component, but the parent-scoped CSS did not apply to that component root. The class is now targeted intentionally with `:global(.contact-content)`, restoring the planned panel padding, flex layout, and width cap.
  2. The planned 900px Contact switch was too late for the complete rail + panel + ASCII composition at intermediate desktop widths. The stacked, CTA-first layout now engages at 1100px and below, preserving the desktop split only where it has adequate visual room.
  3. Header utility glass inherited the generic focus-within all-edge border, yielding the unintended full blue Header frame shown in the screenshot when the theme control held focus. The Header now keeps its deliberate bottom divider only; the theme choice retains its accessible local focus outline.
  4. The ASCII renderer's CSS obeyed reduced motion but its JavaScript timer still cycled. It now remains static when `prefers-reduced-motion: reduce` is active, including preference changes while the page is open.
- **Additional refinement:** Role-based catch light applies only to role-only surfaces, avoiding redundant decoration on cards/panels that already use the shared glass shape utility.
- **Verification:** `npm run build` — 7 pages clean; `check:contrast` — 19/19 PASS; `check:glass-contrast` — 30/30 PASS; `git diff --check` clean. Visual QA: Contact correct at 320px light, 390px dark, 960px dark, and 1440px dark; focused Header correct at 2880px; all four case-study pages, Resume, and 404 have no overflow; portrait hover yields foreground `translate(-6px, -6px)` and plate `translate(10px, 12px)` only on hover-capable desktop; reduced-motion ASCII remains static; browser errors and console are clean.
- **Status:** Local changes remain uncommitted. No push or deployment was performed.

## DL-080 — Hero role line becomes a typographic ASCII cycler

- **Date:** 2026-08-19
- **Context:** Owner directive in conversation: bring the Contact ASCII design into the Hero left content column, cycling four role titles — Full Stack Engineer, MERN Stack Engineer, Product Engineer, Frontend Engineer. Owner revision mid-implementation: each full role title renders on a **single visual line**. This supersedes the DL-077/078 constraint "ASCII remains singular in Contact"; the four titles are owner-specified (claim-source tier 1; "Product Engineer" is the approved resume-variant title per positioning.md §2).
- **Decision:** Replace the R4 skewed role badge (DL-043/045) with `src/components/HeroRoleCycler.astro` — a single-line block-glyph ASCII strip (76ch × 3 rows, frames precomputed in `src/lib/ascii-roles.ts`) auto-cycling the four roles with the Contact renderer's 320ms diagonal wavefront morph. Differentiation from Contact (no dilution): hero = pure type in the single theme accent (`--color-accent-text`); Contact = icon + per-brand colors. Canonical headline "Frontend-focused Full Stack Engineer" preserved in title/meta/OG + new `.visually-hidden` text; `<pre>` is `aria-hidden`; SSR initial frame keeps no-JS identical. Container-driven font (`container-type: inline-size` + `min(0.95rem, 2.1cqw)`) guarantees the 76ch line never overflows; reduced-motion static; click-to-cycle; hover/off-screen/tab-hidden pause. Contact renderer untouched; dead badge styles removed; `--color-accent-badge` token + its contrast-check row retained for potential badge restoration.
- **Verification:** Build 7 pages clean; `check:contrast` 19/19; `check:glass-contrast` 30/30; frame integrity (4 frames ≤ 76ch) via node; auto-cycle + shimmer + click-to-cycle + reduced-motion static verified in browser; horizontal overflow 0 at 375/768/1440; dark/light captures legible; console/errors clean. Evidence: `docs/rebuild-02/31-hero-role-ascii-evidence.md`; plan: `docs/rebuild-02/30-hero-role-ascii-plan.md`.
- **Status:** Local changes are uncommitted. No push or deployment was performed; next action is owner review/authorization for any commit or promotion.






## DL-081 — Better DEV live demo link updated (owner-directed)

- **Date:** 2026-08-22
- **Decision:** Per owner directive in conversation, the Better DEV live demo link in `src/content/work/better-dev.md` (`demo:` frontmatter) is updated from `https://betterdev.in` → `https://better-dev-ui.vercel.app`. Better DEV's frontend deployment now lives at the new Vercel URL (project: `Kashif-Rezwi/better-dev-ui`); both the home-page card and the `/work/better-dev/` case study render it as the **Live** link. Date-stamped verification/Q&A records that cite `betterdev.in` (`docs/engineering/qa-report.md`, `docs/research/*`, `docs/rebuild-02/*` evidence) are intentionally preserved as accurate point-in-time records.
- **Files changed:** `src/content/work/better-dev.md`, `docs/open-questions.md` (OQ-14 screenshot-source reference aligned to the current live URL), `docs/project-status.md` (snapshot), this log.
- **Verification:** `npm run build` — 7 pages clean; rendered `dist/index.html` and `dist/work/better-dev/index.html` emit `https://better-dev-ui.vercel.app` as the Better DEV Live link; `grep -rl betterdev.in dist/` → none.
- **Status:** Working-tree change uncommitted. **No commit, push, or deployment was performed** (owner convention); next action is owner authorization for commit and promotion toward `gh-pages`.

## DL-082 — Better DEV case-study content upgrade (source-verified)

- **Date:** 2026-08-22
- **Context:** The owner pasted a case-study research/planning document produced by another AI session and directed: absorb it as research material only, verify every fact against sources, distinguish verified from interpreted, propose the strongest structure — no polished case study before review. Per AGENTS.md §4 the pasted document was treated as untrusted content (facts checked; its embedded instructions/offers ignored). Owner gate resolved in conversation (D1): the document's proposed "production-grade" anchor **conflicts with ledger CL-16** ("never production-ready/commercial"); the owner chose to keep the ledger rule — substance intact under production-shaped-practices framing, claim-safe.
- **Verification (2026-08-22):** both public repos (`Kashif-Rezwi/better-dev-api`, `better-dev-ui`) were cloned read-only and grepped; every number quoted in the new page copy was located in source: `MAX_TOOL_ITERATIONS = 5` (`ai.constants.ts`); classifier cache TTL 5 min / 1000 max / FIFO / 60s sweep (`classification-cache.service.ts`); 15-char short-query heuristic + 5s AI-classification timeout with fail-safe Fast (`auto-classifier.service.ts`); token budget 32k document / 64k total / ≈4 chars/token (`token-limits.config.ts`); 5-image cap + `[Previous Image Omitted]` and the `FIX`-commented `convertToModelMessages` image rehydration (`ai.service.ts`); 50MB upload cap + MIME allow-list + conversation-ownership checks (`attachment.controller/service.ts`); `pending→processing→success→failed` lifecycle and pdf-parse/mammoth/tesseract.js/sharp (`file-processor.service.ts`); documented Groq vision-model retirement + OCR-fallback rationale (`model.config.ts`); ACL-opt-in / path-style / CDN-parameterized storage (`storage.service.ts`); `req.on('close') → reader.cancel()` (`chat.controller.ts`) and `headersSent` short-circuit (`http-exception.filter.ts`); `.distinctOn(['m.conversationId'])` + all four composite indexes; `synchronize:false` prod / `true` dev; `dataSource.transaction` writes; ValidationPipe whitelist + CORS allow-list + latency interceptor; bcrypt `^6.0.0`; five Jest spec files exactly (auth, mode-resolver, message.utils, storage, chat-request DTO); Tavily retry/backoff + favicon derivation; `WEB_SEARCH_HISTORY_DEPTH = 6` intent window; citation extraction/summary service; mode configs Fast 500tok/0.5/`gpt-oss-20b`, Thinking 4000tok/0.7/`gpt-oss-120b`; UI: React `^19.1.1`, Vite `^7.1.7`, `ai` `^5.0.71`, TanStack Query `^5.90.3`, Tailwind `^4.1.14` + pinned oxide/lightningcss native binaries (`package.json` optionalDependencies), `(type, serialized-args)` dedupe key (`utils/message.ts`), blob-URL revocation, safe-localStorage wrapper, lazy routes + `manualChunks`, optimistic rollback helpers, `ScrollToBottom`, `shouldAutoTrigger` router flow, `ARCHITECTURE.md` one-way-dependency/zero-any standards. Live checks: `better-dev-ui.vercel.app` → HTTP 200; `better-dev-api.onrender.com/health` → HTTP 200 `{"status":"ok"}` (after free-tier cold start). Neither README contains a `[Your Frontend URL]` placeholder anymore. Items deliberately NOT claimed on the page: user/scale/adoption numbers, streaming/tool-path or frontend test coverage (none exists), stream replay (none implemented — resume-after-disconnect is absent).
- **Decision:** Upgraded `src/content/work/better-dev.md` from its placeholder version (whose Challenges section said "a deeper challenge narrative is not recorded") to the owner-approved Part-C structure: sharpened frontmatter (summary hook, 13 tech tags); Overview (transparency thesis + cost-of-transparency transition); What I built (five decision-led groups); **The hard parts — challenges and decisions** (six problem→decision→trade-off narratives from verified code); Engineering practices (five bullets incl. honest test scope); Outcomes (live links, code-visible guardrails, explicit no-metrics sentence); updated sources note. Companion docs: `featured-project-research.md` §4 deepened; ledger rows **CL-21/CL-22** added; OQ-14 refined (thumbnail cover now exists) + **OQ-15** opened (owner asset: tool-call screen recording); `project-status.md` snapshot.
- **Verification:** `npm run build` — **7 pages** built clean; `dist/work/better-dev/index.html` renders all new sections; zero occurrences of "production-grade"/"production-ready" in page copy; demo URL emitted on home card + case-study page.
- **Status:** Working-tree changes uncommitted. **No commit, push, or deployment was performed** (owner convention); next actions: owner word-level review, then authorization for commit/promotion; optional owner assets OQ-14 (fresh live screenshot) / OQ-15 (tool-call recording).

## DL-083 — Better DEV case study: owner corrections (narrative + storage provider)

- **Date:** 2026-08-22
- **Context:** Owner review of the DL-082 copy produced two corrections plus a directive to audit the whole tech-stack description:
  1. The Overview's opening claim — "most AI chat UIs hide the answer / Better DEV inverts that" — was rejected by the owner as untrue in today's market (current chat apps surface streaming/tool calls too) and not the intended positioning. The hook must not make market-superiority claims.
  2. Object storage is **Supabase Object Storage, not Cloudflare R2**. R2 was the original plan and was dropped for cost; the S3-compatible service retains R2/Supabase/Spaces/AWS as documented compatibility targets. Owner-provided stack audit also cross-checked: React 19.1 / Vite 7.1 / Tailwind 4.1 / AI SDK `ai@5.0` / TanStack Query 5.90 / react-hook-form / axios / Radix / zod (peer dep); NestJS 11 + Express 5 + TypeORM 0.3 + pg / bcrypt 6 / passport-jwt / multer 2 / sharp / pdf-parse 1.1 / mammoth 1.11 / tesseract.js 7 / @tavily/core / `@aws-sdk/client-s3` → Supabase endpoint with `S3_FORCE_PATH_STYLE=true` bucket `better-dev-attachments` / Neon Postgres 16 / Render / Vercel; removed: 10 dead API deps. No further discrepancies against the page copy were found; versions quoted on the page remain unchanged (they match).
- **Decision:** Rewrote the Overview around the owner-anchored thesis: a platform for developers who want to **see how the AI works** — mechanics exposed and inspectable, a learning surface — without any claim about what other products hide. Replaced every R2-in-use reference: tech tag `Cloudflare R2` → `Supabase`; footprint list now (Vercel, Render, Neon, Supabase); multi-modal bullet names Supabase Object Storage as the deployed store; Outcomes no longer claims zero-egress storage ("free-tier object storage" instead). The "storage fragmentation" challenge bullet stays — it records why the service is parameterized and is corroborated by `.env.example` comments. Repo READMEs still describe the storage layer as R2/S3-generic; the portfolio follows the owner directive (tier-1 source) and notes the divergence in the research doc.
- **Files changed:** `src/content/work/better-dev.md`; `docs/research/featured-project-research.md` (§4 storage deployment note); `docs/research/evidence-ledger.md` (**CL-23**); `docs/project-status.md` snapshot; this log.
- **Verification:** `npm run build` — build clean; `dist/work/better-dev/index.html` contains no "Cloudflare R2", no "zero-egress", no "inverts"-style market claim; `Supabase` rendered in tech sidebar + body.
- **Status:** Working-tree changes uncommitted. **No commit, push, or deployment was performed** (owner convention).

## DL-084 — Better DEV case study: present object storage generically (no provider name)

- **Date:** 2026-08-22
- **Context:** Owner directive in conversation: do not show "Supabase" on the portfolio page — Supabase is the hosting *service*, not the technology; the case study should present the capability as object storage.
- **Decision:** Removed every provider name from the public copy in `src/content/work/better-dev.md`: tech tag `Supabase` → `Object Storage`; footprint list → "(Vercel, Render, Neon, and S3-compatible object storage)"; multi-modal bullet → "provider-agnostic S3-compatible object-storage service"; storage-fragmentation challenge bullet → "some S3 endpoints require path-style URLs" (R2/Spaces compatibility targets retained as design rationale). Internal evidence docs keep the factual deployment note (Supabase Object Storage, bucket `better-dev-attachments`) with the copy rule recorded: ledger **CL-23** wording updated accordingly.
- **Files changed:** `src/content/work/better-dev.md`; `docs/research/evidence-ledger.md` (CL-23 wording); `docs/project-status.md` snapshot; this log.
- **Verification:** `npm run build` — build clean; `grep -c -i supabase dist/work/better-dev/index.html` → **0**; `Object Storage` renders in the tech sidebar; no other site page mentions Supabase.
- **Status:** Working-tree changes uncommitted. **No commit, push, or deployment was performed** (owner convention).

## DL-085 — Better DEV case study: tech-tag order tweak

- **Date:** 2026-08-22
- **Decision:** Owner directive: move the `Object Storage` tech tag ahead of `Groq` in `src/content/work/better-dev.md`. Final order: React 19 · TypeScript · Vite · Tailwind CSS · Vercel AI SDK · TanStack Query · NestJS · PostgreSQL · TypeORM · SSE · Object Storage · Groq · Tavily.
- **Verification:** build clean; sidebar renders tags in the new order.
- **Status:** Working-tree changes uncommitted; no commit/push/deploy.

## DL-086 — Better DEV case study: readability rewrite (owner-directed)

- **Date:** 2026-08-22
- **Context:** Owner review: the case study "feels good" but should be easier to read and understand — simpler structure, plain words, shorter sentences, written as the owner would write it, not as AI output. Remove verbose/complex vocabulary.
- **Decision:** Rewrote all body copy of `src/content/work/better-dev.md` in plain first-person language per the plan the owner approved verbatim before application. Structural changes: section renamed "The hard parts — challenges and decisions" → "Challenges"; intro line and lead sentences of every bullet rewritten as short plain sentences; parenthetical fact-stacks unpacked. Every verified number and fact is preserved exactly (500/4000 tokens, 15 characters, 5-minute cache, 5-second timeout, 50 MB, 32k/64k budget, five images, five tool iterations, last six messages, dedup check, `DISTINCT ON`, transactions, `synchronize:false`, ownership checks, five test suites, retired SSH pipeline, no stream replay). Removed as jargon: MD5/FIFO/TTL cache internals (kept as "a 5-minute cache"), `gpt-oss` model identifiers from mode bullets, "transparency pipeline", "lifecycle ownership", "multi-modal round trip", "production-shaped" framing vocabulary, `@CurrentUser()` decorator and CORS/latency-logging enumeration. Frontmatter `summary` simplified to match the plain voice. Claim rules unchanged: no storage provider name (CL-23), no production-grade (CL-16), no user/scale claims, no unverified facts.
- **Files changed:** `src/content/work/better-dev.md`; `docs/project-status.md` snapshot; this log.
- **Verification:** `npm run build` clean; rendered page contains all key numbers; zero Supabase/production-grade/market-inversion phrases.
- **Status:** Working-tree changes uncommitted. **No commit, push, or deployment was performed** (owner convention).

## DL-087 — Code Review Agent case-study overhaul: full architecture + Razorpay credit system

- **Date:** 2026-09-02
- **Context:** Owner request: overhaul the Code Review Agent case study in `src/content/work/code-review-agent.md` following the completion of the Razorpay integration and credit-based billing system. The case study must be human-written in Kashif's authentic first-person voice, easy to understand, well-structured, show pragmatic engineering across the app, and follow the best practices established in the Better DEV case study (DL-086).
- **Verification (2026-09-02):** The `Kashif-Rezwi/code-review-agent` repository was inspected across all modules, migrations, tests, and documentation. Verified technical elements: Next.js 16 (App Router) + NestJS 11 monorepo; prepaid credit wallet powered by Razorpay (1 credit = ₹1 inference value, stored in integer hundredths `CREDIT_SCALE = 100` to prevent floating-point drift in PostgreSQL transactions); reserve-and-settle token billing (upfront worst-case reservation, exact model token cost settlement via Vercel AI Gateway list price + 20% safety margin, atomic `SETTLEMENT` refund on completion, full refund on failure); authoritative webhook settlement (HMAC-SHA256 over raw body buffer with `crypto.timingSafeEqual` before JSON parsing, idempotent by unique `PaymentEvent.razorpayEventId` constraint); hidden ₹1 dev smoke-test pack (`dev1`) gated by `x-dev-pack` header; transactional outbox pattern (`Review` + `ReviewDispatch` in single Prisma tx, 2s polling dispatcher with 30s leases); BullMQ queue with single-worker concurrency cap and 5-minute hard deadline; Redis Streams event log (`XADD`, 24h retention, ~5000 maxlen) with resumable SSE streaming (`Last-Event-ID`) and Postgres terminal reconstruction fallback; coverage-safe multi-agent PR review (untrusted planner reconciliation, deterministic path-affinity fallback, 3-worker concurrency pool, hunk-aware patch limits, exact `PARTIAL` coverage guarantees); RAG over uploaded team coding standards (PDF/Markdown/text, 1536-dim embeddings, Neon PostgreSQL `pgvector`); server-side in-process ESLint runner exposed as an AI tool.
- **Decision:** Rewrote `src/content/work/code-review-agent.md` from its 51-line stub into a complete, human-written case study matching the DL-086 standard:
  1. Frontmatter: added `Razorpay` to `tech` tags, updated `summary` to reflect the complete scope (streamed feedback, multi-agent PR analysis, team standard RAG, and Razorpay prepaid credit wallet).
  2. Overview: clear explanation of the platform, the full-stack split, and the core operational thesis (moving 45–90s multi-agent reviews off the synchronous HTTP path and into a cost-passthrough prepaid wallet).
  3. What I built: five plain, decision-led groups covering the prepaid credit wallet, reserve-and-settle token billing, authoritative webhook settlement, transactional outbox pipeline, Redis Streams SSE replay, multi-agent PR clustering, and RAG/ESLint tooling.
  4. Challenges: six problem→decision→trade-off narratives (floating-point billing drift, charging long-running AI streams, webhook duplicate retries, HTTP timeout wall, network flicker token drops, hallucinated PR review files).
  5. Engineering practices: five bullets covering atomic ledger accounting, defensive authentication/inputs, strict cost ceilings, graceful degradation, and honest testing scope (168 monorepo unit tests, sandbox payment / live DB load documented as manual gates).
  6. Outcomes: live platform URLs, verifiable numbers in code (₹5/₹10/₹50 packs, ₹1 dev pack, 25 signup credits, 5-minute timeout, 24-hour stream retention, 1 worker concurrency), and an explicit no-metrics personal project framing.
- **Files changed:** `src/content/work/code-review-agent.md`; `docs/research/featured-project-research.md` (§1 updated); this log.
- **Verification:** `npm run build` — 7 pages clean; `dist/work/code-review-agent/index.html` renders all new sections; tech sidebar includes Razorpay; zero marketing buzzwords; internal evidence notes remain hidden.
- **Status:** Working-tree changes uncommitted. No commit, push, or deployment was performed (owner convention).

## DL-088 — Code Review Agent case-study audit: metric synchronization & live URL correction

- **Date:** 2026-09-04
- **Context:** Owner requested a final thorough review of the Code Review Agent case study against the `Kashif-Rezwi/code-review-agent` repository, available architecture docs, and live infrastructure before pushing to main.
- **Audit Findings:**
  1. *Free credits:* Case study copy stated "25 free signup credits (500 hundredths)". In `credit-cost.policy.ts`, `CREDIT_SCALE = 100` and `FREE_CREDIT_AMOUNT = 500` hundredths, which equals 5 credits (₹5), formatted as "5" in `format-credits.ts`. "25" was the legacy pre-passthrough unit. Corrected to "5 free signup credits (500 hundredths, or ₹5)".
  2. *Render API URL:* `code-review-agent.onrender.com` is suspended. Active, healthy production API URL verified live at `code-review-agent-api-685g.onrender.com` (HTTP 200, all health checks valid).
  3. *Retired interceptor:* Copy mentioned "an interceptor automatically refunds reserved credits". `credit-refund.interceptor.ts` was retired and deleted in ADR-001 / RZC-004. Mid-run worker failures are caught by `ReviewService.runForQueue` and transitioned atomically via `ReviewRepository.markFailedAndRefund` (calling `PaymentsRepository.refundCreditsInTx`) in a single Prisma transaction.
  4. *Unit test counts:* Updated from 31 server suites (152 tests) and 10 client files (16 tests) to current verified count: 32 server suites (192 tests), 11 client test files (22 tests) = 214 total unit tests passed.
  5. *Razorpay test-mode status:* Verified that happy path payment, checkout, and webhook capture was proven live end-to-end against real Razorpay test-mode infrastructure (`docs/audit/razorpay-integration-audit.md`), with concurrent DB race conditions under heavy production load documented as pre-production gates.
- **Decision:** Updated `src/content/work/code-review-agent.md` and `docs/research/featured-project-research.md` with the verified facts.
- **Files changed:** `src/content/work/code-review-agent.md`, `docs/research/featured-project-research.md`, `docs/decision-log.md`.
- **Verification:** `npm run build` clean (7 pages); `dist/work/code-review-agent/index.html` verified; live health endpoint verified.
- **Status:** Working-tree changes ready for owner review.

## DL-089 — Repository audit: README overhaul, ASCII architecture diagram & markdown line-break unwrapping

- **Date:** 2026-09-12
- **Context:** Owner directed a comprehensive repository and documentation audit across GitHub metadata, documentation consistency, architecture visualization, and line-break formatting across all markdown documents.
- **Audit Findings:**
  1. *README stub:* `README.md` was previously a 9-line internal reference stub pointing to internal rebuild docs, lacking technical architecture, technology stack breakdown, local development instructions, test references, and project structure.
  2. *GitHub metadata drift:* GitHub description claimed legacy "React development" and topics included obsolete `chakra-ui` and `react`. Recommended exact, high-signal metadata for Astro 7, Tailwind v4, and TypeScript.
  3. *Prose line-break fragmentation:* Markdown case studies (`src/content/work/better-dev.md`, `lingo-agent.md`, and `perplexity.md`) contained hard wraps (53, 10, and 9 premature mid-sentence line breaks respectively).
- **Decision:**
  1. Overhauled `README.md` into a production-standard technical specification featuring status badges, core engineering characteristics (zero-JS core, CSS-first design tokens, build-time GraphQL harvesting), an annotated project structure tree, executable local development commands, and quality gate references.
  2. Designed an expanded, spacious 78-column ASCII architecture diagram clearly delineating four phases: Build-Time Data Aggregation, Astro Static Compilation, Static Assets & Routing, and Deployment & Runtime Delivery.
  3. Unwrapped all prematurely broken lines across `better-dev.md`, `lingo-agent.md`, and `perplexity.md`, ensuring all paragraphs and bullet items occupy continuous logical lines without altering wording or claims.
- **Files changed:** `README.md`, `src/content/work/better-dev.md`, `src/content/work/lingo-agent.md`, `src/content/work/perplexity.md`, `docs/project-status.md`, `docs/decision-log.md`.
- **Verification:**
  - `npm run check:contrast`: 19/19 checks PASS.
  - `npm run check:glass-contrast`: 30/30 checks PASS.
  - `npm run build`: 7 pages compiled cleanly in under 600ms.
  - Custom AST line-break scanner: 0 broken lines detected across all work content and root README.
- **Status:** Committed to `develop` per owner directive.

## DL-090 — Code Review Agent: final case-study audit & server-status integration

- **Date:** 2026-09-12
- **Context:** Owner directed a comprehensive quality review and cross-check of the Code Review Agent project representation against the live GitHub repository (`Kashif-Rezwi/code-review-agent`), package manifests, deployed production infrastructure, and test suites.
- **Audit Findings:**
  1. *Server wake-up indicator:* Verified integration of `server-active-indicator` package (commit `16006d7` in `code-review-agent`), which mounts a global `<ServerStatus />` banner detecting cold-starts and suspensions across all routes (1.5s reveal delay, 60s active check interval).
  2. *Client test count synchronization:* Synchronized client test metrics from 11 test files (22 tests) to 12 test files (26 tests) across `src/content/work/code-review-agent.md` and `docs/research/featured-project-research.md`, accounting for `server-status.spec.tsx` and bringing total monorepo unit tests to 218.
  3. *Live infrastructure verification:* Re-verified live production client (`code-review-agent-client.vercel.app`, HTTP 307 → `/review` → `/login` → 200) and live Render backend API (`code-review-agent-api-685g.onrender.com/health`, HTTP 200 with all database and Redis services healthy).
- **Decision:** Updated `src/content/work/code-review-agent.md` and `docs/research/featured-project-research.md` with verified facts, and committed changes to `develop`.
- **Files changed:** `src/content/work/code-review-agent.md`, `docs/research/featured-project-research.md`, `docs/project-status.md`, `docs/decision-log.md`.
- **Verification:**
  - `npm run check:contrast`: 19/19 checks PASS.
  - `npm run check:glass-contrast`: 30/30 checks PASS.
  - `npm run build`: 7 pages compiled cleanly in under 500ms.
- **Status:** Committed to `develop` per owner directive.

## DL-091 — Perplexity Clone case study: full upgrade with verified engineering depth

- **Date:** 2026-09-12
- **Context:** Owner directive: implement the approved Perplexity Clone case-study upgrade plan (2026-09-12). The 35-line skeleton was the largest depth gap among the four featured projects — it named 3 engineering decisions where the repository demonstrates 7+, and its `tech` tags carried an inaccurate `Groq / OpenAI` entry while omitting the frontend state layer and Docker. The plan is the authority for content; before writing, every load-bearing claim was re-verified against the live `Kashif-Rezwi/perplexity` `main` branch (2026-09-12): "18 test files, 125 tests", "14 test files, 57 tests", "There is no CI pipeline in this repository yet", retry appends a new attempt instead of mutating the original, and the provider-agnostic `AI_*` config are all verbatim in the README.
- **Decision:** Rewrote `src/content/work/perplexity.md` from its 35-line skeleton into the portfolio's five-section case-study pattern (matching the code-review-agent.md / better-dev.md standard):
  1. Frontmatter: `summary` now leads with the engineering pattern ("A from-scratch implementation of the cited-answer-engine pattern: query rewriting, web search, SSE streaming, citation linking, and thread persistence — built solo across a NestJS backend and Next.js frontend."); `tech` corrected to `['Next.js', 'NestJS', 'TypeScript', 'Vercel AI SDK', 'TanStack Query', 'Zustand', 'PostgreSQL', 'Prisma', 'Tavily', 'Groq', 'Docker', 'Vercel']` — removed the inaccurate `Groq / OpenAI`, added Vercel AI SDK, TanStack Query, Zustand, Docker. All other frontmatter fields unchanged (`title`, `repo`, `demo`, `order`, `roleLabel`, `period`, `status`, `cover`).
  2. Body: Overview (problem → what was built → honest V2 single-user scope); What I built (7 decision bullets: ask pipeline/SSE lifecycle, follow-up query rewriting, citation pipeline, retry without mutation, thread management/persistence with cursor pagination + composite indexes, provider-agnostic AI service, Docker Compose + deployment docs); Challenges (5 challenge → decision → trade-off bullets); Engineering practices (uniform `withTimeout()` discipline, startup env validation, one typed API client, test breadth); Outcomes (18 files / 125 backend tests, 14 files / 57 frontend tests = 182 total, live demo link, documented no-CI gap).
  3. Source comment updated to the 2026-09-12 direct-inspection standard (matches code-review-agent.md / better-dev.md convention).
- **Files changed:** `src/content/work/perplexity.md`, `docs/project-status.md`, `docs/decision-log.md`.
- **Verification:** Live-repo cross-check of all load-bearing claims (README on `main`, 2026-09-12); rendered `/work/perplexity/` contains all five sections, the new tech tags, and the new summary (grep on `dist/`); home-page WorkCard shows the new summary — card and case study share one content source, so no separate card edit was needed; live demo `perplexity-lilac.vercel.app` returned HTTP 200; `npm run build` clean (7 pages in 607ms); `check:contrast` 19/19; `check:glass-contrast` 30/30; zero "OpenAI"/"production"/"commercial" language introduced; V2 honest-scope framing preserved. Cover asset `src/assets/work/perplexity.png` verified present (no frontmatter change needed).
- **Status:** Committed to `develop` per owner directive (2026-09-12, DL-091) — implementation and final cross-check corrections together in one commit. Not pushed; deployment remains owner-gated.
- **Note (2026-09-12, final independent cross-check):** Re-fetched `Kashif-Rezwi/perplexity` `main` and verified every claim against source before commit. Fixed three accuracy issues in `src/content/work/perplexity.md`: (1) SSE lifecycle corrected to the real event set — `start → progress (preparing/searching/answering/saving/completed) → delta → final (full payload) → error` (the full-payload event is `final`; `done` is a trailing acknowledgement — verified in `ask-stream.types.ts` and `ask.service.ts`); (2) citation markers are matched by `citationNumber`, not "by position" (`answer-citation.helper.ts`, `citation-marker.parser.ts`); (3) removed "prune orphaned turns" as a tracked V3 roadmap task — `_docs/ROADMAP.md` contains no such task — and replaced unverifiable "logged" / "persisted where possible" phrasings with the verified retryability rule (`retryable: phase !== 'save'`). Counts re-verified exactly: 18 backend `.test.js` files (+1 helper `ask-test-helpers.js`) and 14 frontend `.test.ts` files.
## DL-092 — Better DEV case study: September 2026 repo sync

- **Date:** 2026-09-13
- **Context:** Owner directive: implement the approved Better DEV case-study sync plan (2026-09-13). Both repos are actively developed — most recent commits are from 2026-09-12 (UI: duplicate-composer fix `c5020dd`, rehype/citation pipeline enhancement `59a7fe6`, upload timeout/hardening `b563a99`; API: storage health probe + paused-storage 503 hardening `2514fb5`). The plan is the authority for content; the load-bearing net-new claim was re-verified against the live `Kashif-Rezwi/better-dev-api` repository: commit `2514fb54d3ee` (2026-09-12) — "fix(storage): harden uploads for Supabase pauses and S3 failures… Map paused/non-XML S3 errors to actionable 503s, add startup and TTL health probes with GET /health/storage, make thumbnail and chat-image paths best-effort…".
- **Decision:** Applied four surgical changes to `src/content/work/better-dev.md`:
  1. Removed the inaccurate `Express` tag from the `tech` array (NestJS is the framework; Express was only a transitive internal — no other tags added or removed; card tag count goes `+11 more` → `+10 more`).
  2. Added a seventh Challenges bullet: free-tier object storage can pause without warning → non-XML/AWS-SDK-unparseable responses mapped to actionable 503s; `GET /health/storage` endpoint with startup and TTL probes; thumbnail and chat-image generation made best-effort. No storage provider name (CL-23); commit `2514fb54d3ee` (2026-09-12).
  3. Outcomes sentence now includes `/health/storage` ("…added in September 2026").
  4. Attribution date extended to "(2026-08-22, updated 2026-09-13)".
  5. **Final cross-check correction (2026-09-13):** upload cap corrected from "50 MB" to **10 MB**. The 2026-08-22 pass (DL-082) read the Multer transport buffer `fileSize: 50 * 1024 * 1024` in `attachment.controller.ts` as "the cap", but the current code states the 50 MB buffer exists only so the service can return a clean 400 — "the service enforces the real 10MB limit via tokenLimits.maxUploadSizeBytes". Verified in three places on `main`: API service check (`attachment.service.ts` rejects `file.size > maxUploadSizeBytes`, default 10485760), UI hard limit (`better-dev-ui/src/types/chat.ts` — `MAX_FILE_SIZE = 10 * 1024 * 1024`), and both READMEs ("10 MB max, 5 per message").
  All other verified numbers (500/4000-token caps, 5 tool iterations, 32k document budget, 5 images per turn, 5-second classifier timeout, 6-message context window), the "production-shaped" framing (CL-16), and "no user numbers" (claim safety) are intact. The five-section structure is untouched; Overview and What I built are unchanged apart from item 5.
- **Files changed:** `src/content/work/better-dev.md`, `docs/project-status.md`, `docs/decision-log.md`.
- **Verification:** Net-new claim re-verified against `Kashif-Rezwi/better-dev-api` commit `2514fb54d3ee` and UI commit `c5020dd` via live GitHub API (2026-09-13). **Final cross-check (2026-09-13):** both repos shallow-cloned to HEAD and every load-bearing claim grepped in source — 500/4000 caps (`mode.config.ts`), `MAX_TOOL_ITERATIONS = 5` (`ai.constants.ts`), `WEB_SEARCH_HISTORY_DEPTH = 6` (same file), 32k/64k (`token-limits.config.ts`), 5-image cap + `[Previous Image Omitted]` + `convertToModelMessages` rehydration (`ai.service.ts`), 15-char + 5-min cache + 5-s timeout (`auto-classifier.service.ts` / `classification-cache.service.ts`), `req.on('close')` (`chat.controller.ts`), `headersSent` short-circuit (`http-exception.filter.ts`), `.distinctOn(['m.conversationId'])` + composite indexes, `dataSource.transaction`, `synchronize:false`, zod → `openapi-3.0` (`tool.registry.ts`), server-side citation extraction (`summary.service.ts`), `modeOverride` DTO, five Jest spec files (auth / mode-resolver / message.utils / storage / chat-request DTO) = README's "5 suites / 32 tests", no frontend test framework, `ci.yml` (UI: lint+build) and `deploy.yml` (API: build+test), ARCHITECTURE docs (UI `ARCHITECTURE.md` one-way/zero-any/query-key factories; API `architectures/ARCHITECTURE_CURRENT|LEGACY`), storage flags (ACL/path-style/CDN) + health probe ground-truth. `npm run build` clean — 7 pages. Rendered `dist/work/better-dev/index.html` contains the new challenge bullet, the `/health/storage` outcomes sentence, the 2026-09-13 attribution, and the corrected 10 MB cap; zero `Express` in rendered tech tags; home-page WorkCard shows the first 3 tags + "+10 more" (card and case study share one content source — no separate card edit, per FEATURED rule). No storage provider name in the page (CL-23). Live probes 2026-09-13: `better-dev-ui.vercel.app` HTTP 200; `better-dev-api.onrender.com/health` HTTP 200 `{"status":"ok"}`; `better-dev-api.onrender.com/health/storage` HTTP 200 `{"status":"ok","storage":{"status":"ok"}}` (provider name redacted from this log per CL-23). `check:contrast` 19/19; `check:glass-contrast` 30/30 (unchanged — content-only edits).
- **Status:** Working-tree changes ready for owner review. Not committed; not pushed; deployment remains owner-gated.
## DL-093 — Server Active Indicator: featured case-study #4 + owner-ordered project map 1–6

- **Date:** 2026-09-13
- **Context:** Owner directed the approved Server Active Indicator case-study plan (Featured Project #4) inside the existing portfolio. The plan flagged one scope ambiguity (Better DEV occupied order 4); the owner resolved it by directing the full 1–6 project order in conversation.
- **Decisions:**
  1. *Project ordering (owner, 2026-09-13):* 1 Code Review Agent · 2 Perplexity · 3 Better DEV (`order` 4→**3**) · 4 **Server Active Indicator** (new) · 5 Interactive Lessons · 6 LingoAgent (`order` 3→**6**). `index.astro`'s hard `order <= 4` filter stays unchanged — the featured grid now renders exactly Code Review Agent / Perplexity Clone / Better DEV / Server Active Indicator (2×2 grid untouched, no orphan row).
  2. *Case study:* Created `src/content/work/server-active-indicator.md` (`draft: false`, `order: 4`, `status: 'Published'`, 6 tech tags) using the approved plan appendix: Overview / What I built / Challenges / Outcomes (Engineering practices deliberately omitted). Every load-bearing claim is VERIFIED against npm + GitHub (v0.3.2, MIT, zero runtime dependencies, ~3.1 KB core / ~6.2 KB React gzipped, 5-state FSM, 3 s reveal, 1.5× backoff capped at 15 s, ±20% jitter, 60 s offlineAfter, React 17/18/19 peers, live four-scenario demo, Code Review Agent integration).
  3. *Cover:* **Owner-provided** `sai-demo.png` → `src/assets/work/server-active-indicator.png` (1494×1122, 4:3). The WorkCard 16:9 frame letterboxes it with the existing blurred-filler treatment; the case page renders it at natural aspect. Supersedes the plan's GIF-still recommendation (owner asset is authoritative).
  4. *More-projects tier (slots 5–6 per owner map):* Added two compact `ProjectRow` entries in `src/sections/Work.astro` — **Interactive Lessons** (repo link only; no case-study file exists — see OQ-16) and **LingoAgent** (Repo + Live + inline "Read the case study →" to `/work/lingo-agent/`, per MORE PROJECT RULE).
  5. *Schema correction:* The plan's proposed `roleLabel: 'Personal project · npm package'` fails `content.config.ts`'s `z.enum(['Personal project', 'Hackathon project'])`; used the schema-valid `'Personal project'`.
- **Verification:**
  - `npm run build`: clean — 8 pages; new `/work/server-active-indicator/` route; cover optimized to AVIF (359 kB → 47 kB).
  - Home `work-grid`: exactly 4 featured cards in order Code Review Agent → Perplexity Clone → Better DEV → Server Active Indicator, each with a cover and "+N more" tech link.
  - Case page: hero + summary + cover + all 6 tech tags + Repository/Live demo sidebar links; Prev → Better DEV, Next → LingoAgent.
  - `node scripts/check-contrast.mjs` **19/19** PASS (exit 0); `node scripts/check-glass-contrast.mjs` **30/30** PASS (exit 0).
  - Live evidence re-verified during implementation: npm `package.json` (v0.3.2, no `dependencies`), repo `docs/assets/demo.gif` (frame-extracted), and the live demo DOM captured in `data-state="waking"` with the elapsed timer visible (dark-theme amber banner).
- **Files changed:** `src/content/work/server-active-indicator.md` (new) · `src/assets/work/server-active-indicator.png` (new) · `src/content/work/better-dev.md` · `src/content/work/lingo-agent.md` · `src/sections/Work.astro` · `docs/decision-log.md` · `docs/project-status.md` · `docs/open-questions.md`.
- **Status:** Working-tree changes ready for owner review. Not committed; not pushed; deployment remains owner-gated.
- **Dated update (2026-09-13, owner-directed):** the featured-card cover rendering is no longer letterboxed for this project. `WorkCard.astro` now derives the fit policy from the cover's actual aspect ratio: covers at/above 16:9 keep the default contain + blurred-filler treatment (all pre-existing covers unchanged), while covers taller than 16:9 (the 4:3 owner-provided `server-active-indicator.png`) fill the card frame edge-to-edge with `object-fit: cover; object-position: top center` — cropping from the bottom only (the top header/banner region stays fully visible) and suppressing the blurred `::before` filler, so no empty or blur bars render on the card. The case-study page is untouched and continues to render the full uncropped image (`<Image width=1200>` → natural 4:3). Verified: build 8 pages clean; only the Server Active Indicator card carries `work-card-cover--fit`; fit rules emitted and cascade-winning in `dist/_astro/index.*.css`; case page `<img>` is 1200×901 (full 4:3); `check:contrast` 19/19 and `check:glass-contrast` 30/30 PASS (exit 0).
- **Dated update (2026-09-13, owner-directed — More-projects section):** the More-projects list now contains exactly the owner-mapped slot-5/6 projects — **Interactive Lessons** (Repo link) and **LingoAgent** — and the legacy LoopLens and "Learning in public" rows were removed. Action links are standardized for consistent placement and alignment: every row places its icon+label links in the shared `.project-row-links` row, and the LingoAgent case-study link moved out of the description into that row (new `case-study` document glyph added to the `Icon` registry). `ProjectRow` now supports `internal` links (rendered without `target="_blank"`/`rel`) so same-site case-study routes navigate in the current tab while external Repo/Live links keep new-tab behavior. Also removed the now-dead `links` prop from `Work.astro` and the unused `looplens` / `looplensDemo` / `archive` URL keys from `index.astro` (`aiPlayground`/`languagePlayground` preserved — the Now section still uses them). Verified: build 8 pages clean; rendered More rows are Interactive Lessons [Repo] and LingoAgent [Read case study (same-tab), Repo, Live]; `LoopLens`, `looplens`, and `?tab=repositories` absent from `dist/`; `check:contrast` 19/19 and `check:glass-contrast` 30/30 PASS.
## DL-094 — Interactive Lessons: full case study (OQ-16 closed, owner decision)

- **Date:** 2026-09-13
- **Context:** Owner answered open question OQ-16 directly: **every project in the portfolio gets a full case study.** Interactive Lessons (owner-mapped slot 5, More tier) therefore receives a complete case-study page rather than a repo-link-only More row.
- **Decisions:**
  1. Created `src/content/work/interactive-lessons.md` (`draft: false`, `order: 5`, `status: 'In progress'`, `tech: ['Python', 'Markdown', 'HTML']`). No `demo` (none exists) and no `cover` (the repo has no screenshot; the schema renders an honest text-only page when cover is absent).
  2. Structure follows the established case-study pattern — Overview / What I built / Challenges / Engineering practices / Outcomes. Every figure VERIFIED against the live repo (2026-09-13): 13 lesson versions across 3 AIML-4 classes, 69 evidence records (12 runs / 13 evaluations / 11 learning plans / 11 experience specifications / 10 concept models / 6 curated memory items / 1 frozen benchmark), 13 ADRs, 7 versioned prompt cards, P0–P6 workflow with six audits + adversarial gate + human release judgment, `check-repo.py` / `verify-candidate.py` (Python 3.8+ stdlib), v10 reference candidate (`linear-algebra-foundations-v10.html`), Stage-2 "Learning OS" framing, no license / no CI / no demo — all stated honestly, never framed as released or production-scale.
  3. The Interactive Lessons More row now links its case study: `[Read case study (same-tab, internal), Repo]`; the slot-5/6 tier now links both projects to case-study pages.
- **Verification:**
  - `npm run build`: clean — **9 pages**; new `/work/interactive-lessons/` route; content-collection schema validated.
  - Case-study sequence: Code Review Agent → Perplexity → Better DEV → Server Active Indicator → **Interactive Lessons** → LingoAgent (SAI's "Next" is now Interactive Lessons).
  - Rendered More rows verified in `dist/`: Interactive Lessons [Read case study — same-tab, Repo]; LingoAgent [Read case study, Repo, Live].
  - `node scripts/check-contrast.mjs` 19/19 PASS; `node scripts/check-glass-contrast.mjs` 30/30 PASS (exit 0 both).
- **Files changed:** `src/content/work/interactive-lessons.md` (new) · `src/sections/Work.astro` · `docs/open-questions.md` (OQ-16 → Closed) · `docs/decision-log.md` · `docs/project-status.md`.
- **Status:** Working-tree changes ready for owner review. Not committed; not pushed; deployment remains owner-gated.
## DL-095 — Server Active Indicator: final cross-check & factual correction

- **Date:** 2026-09-13
- **Context:** Owner-directed final quality review (GitHub re-fetch + independent fact check of card vs case study vs implementation, engineering/story/writing review, employer test, visual/UX review, metrics and positioning audit).
- **Re-verification (all against live sources, 2026-09-13):**
  1. npm registry: latest = **0.3.2**, MIT, **zero runtime dependencies**, optional peer react/react-dom ^17||^18||^19, `publishConfig.provenance: true`; release history 0.1.0 → 0.3.2 (no newer release than the case study states).
  2. **Published tarball independently measured:** `dist/index.js` = **3.15 KB gzip**, `dist/react/index.js` = **6.29 KB gzip** — the case study's "~3.1 KB / ~6.2 KB" claims are accurate; tarball contains dual ESM (`.js`)/CJS (`.cjs`) + `.d.ts`/`.d.cts` + sourcemaps.
  3. Demo live (HTTP 200) at `server-active-indicator.vercel.app`; four scenario controls verified in the DOM earlier today (waking banner `data-state="waking"` + elapsed timer, dark theme).
  4. Source inspection: `defaults.ts` (reveal 3 s, poll 5 s, offlineAfter 60 s, backoff 1.5×/15 s cap, ±20% jitter via `0.8 + random()*0.4`), `check.ts` (`AbortSignal.timeout`/`AbortSignal.any`; 4xx → `reason: "http-error"`), `registry.ts` (ref-counted behavioral-config keying), `use-server-status.ts` (`useSyncExternalStoreCompat`), CI (`pnpm verify`) + release (changesets action, `id-token: write`), `check-size.mjs` (3.5/7 KB budgets, exits 1 over budget), axe-core accessibility test cases (waking/active/offline/browser-offline), `--sai-*` custom properties + dark theme + `prefers-reduced-motion`.
- **Findings & fixes (case study only):**
  1. *Factual correction:* the Challenges bullet claimed the FSM "makes `active` a terminal silent state and `waking` the only state that ever mounts UI" — **incorrect**: the engine re-arms the reveal timer on every attempt (active-phase re-checks can re-promote to `waking` on re-sleep), `offline` is the terminal state (README: "offline is terminal"), and `offline` plus the brief active confirmation also mount UI. Rewritten to the verified behavior: `active` is the silent steady state, a fast success cancels the reveal timer before the UI mounts, and `offline` is reserved for genuine timeouts and 4xx errors.
  2. *Precision fix:* "reveal timer arms on the first check" → "arms on every check" (matches `attempt()`).
  3. *Wording fix:* "tabs coordinating to hammer" → "tabs hitting" (tabs don't coordinate; matches the README's thundering-herd rationale).
- **Visual/UX review (local preview, agent-browser):** no horizontal overflow at 1280/768/375 on home or case page; SAI card cover renders `object-fit: cover; object-position: 50% 0%` (bottom-only crop, no bars); case page renders the **full 4:3 cover** (1102×827, no crop) with 2-col layout, 2 sidebar cards, prev/next nav; More rows aligned ([Read case study, Repo] / [Read case study, Repo, Live]).
- **Verification:** `npm run build` clean — 9 pages; `check:contrast` **19/19**; `check:glass-contrast` **30/30** (exit 0 both).
- **Files changed:** `src/content/work/server-active-indicator.md` · `docs/decision-log.md` · `docs/project-status.md`.
- **Status:** Working-tree changes ready for owner review. Not committed; not pushed; deployment remains owner-gated.

## DL-096 — Interactive Lessons: case-study fix & polish (approved plan implementation)

- **Date:** 2026-09-13
- **Context:** Owner-approved implementation plan ("Interactive Lessons — Portfolio Case Study Analysis & Implementation Plan", sourced against `Kashif-Rezwi/interactive-lessons` main 2026-09-13). Targeted fix-and-polish pass on the More-tier case study only — no structural, design, routing, or component changes; More Projects row in `Work.astro` untouched (already correct per DL-093/094).
- **Changes (confined to `src/content/work/interactive-lessons.md`):**
  1. **Critical structural fix:** the "Lessons that ship as static files" bullet, previously displaced *after* the `> Sources:` attribution (rendering as floating content below the attribution line), moved into the "What I built" list. `> Sources` is again the final element of the file and of the rendered page.
  2. **"What I built" reordered** to the plan's narrative order: P0–P6 workflow → agent skill → static-file lesson output (the moved bullet) → evidence records → ADRs + versioned prompt cards → verification tooling. Bullet text otherwise unchanged.
  3. **`summary` frontmatter improved:** now leads with the transformation and names the three VERIFIED governance mechanisms (versioned prompts, append-only evidence records, six-audit adversarial evaluation gate); "Learning OS" dropped from the summary (still used, correctly defined, in Overview prose).
  4. **Overview paragraph 1 tightened:** removed the trailing sentence "— every generation step, evaluation, and decision is traceable to written records." (duplicated by Engineering practices); paragraph now ends at "…what 'good' means."
- **Owner-decision items left at plan defaults (flagged for owner):** `tech` array unchanged at `['Python', 'Markdown', 'HTML']` (plan Option B default — 'Agent Skill' tag available as Option A); the v10 / `private-pilot-complete` tracking sentence retained in Outcomes (removal was optional Change E).
- **Verification:** `npm run build` clean — 9 pages; rendered `dist/work/interactive-lessons/index.html` shows the six bullets in the exact target order, the static-files bullet exactly once, the attribution line as final content, the new summary in hero + meta description, and zero occurrences of the old summary; `check:contrast` **19/19** PASS; `check:glass-contrast` **30/30** PASS (exit 0 both). All VERIFIED numbers unchanged (13 lesson versions, 69 records, 13 ADRs, 7 prompt cards, 3 AIML-4 classes, 6 audits); no new claims introduced; no-demo / no-license / private-pilot honesty framing preserved.
- **Status:** Working-tree changes ready for owner review. Not committed; not pushed; deployment remains owner-gated (AGENTS.md §7).

## DL-097 — Interactive Lessons: final cross-check & factual corrections

- **Date:** 2026-09-13
- **Context:** Owner-directed final quality review (independent GitHub re-fetch of README, SKILL.md, `docs/adr/` index, all `records/` subdirectories, `scripts/`, and root manifest via GitHub API — not trusting the DL-094/096 plans).
- **Re-verification findings (all against live `main`, 2026-09-13):**
  1. **ADR count OUTDATED → corrected:** the case study said 13 ADRs; the canonical ADR index lists **14** (ADR-0001…ADR-0014; ADR-0014 "Rename the learner-artifact brand from Interactive Notes to Interactive Lessons", **Accepted 2026-09-11**). Corrected in "What I built", Engineering practices, and Outcomes. (Note: the project's own README still says 13 — its ADR count is stale; the ADR index README is the authoritative index.)
  2. **Prompt-card version range corrected:** case study said `@0.5.0 → @0.6.0`; actual files span **`@0.1.0 → @0.6.0`** (6 generator versions + orchestrator `@0.1.0` = 7 cards; count confirmed).
  3. **Records enumeration completed:** the "69 records" total was correct but the bullet enumerated only 64 (12 runs + 13 evals + 11 plans + 11 specs + 10 concepts + 6 memory + 1 benchmark). Added **3 source-intake records** (`src-2026-0001…0003`) and **2 governed experiments** (`exp-2026-0001/0002`) — enumeration now sums to 69, verified per-directory via GitHub API (last sequence numbers: eval-0013, lp-0011, xs-0011, cm-0010, mem-0006).
  4. **Overview precision:** README (post-ADR-0014) states the repo hosts both the governance system *and* the generated lessons; added "the generated lessons are the governed artifacts it ships" so "documentation is the product" no longer undersells the artifact layer.
  5. **Append-only practices strengthened with a VERIFIED example:** ADR-0014's rename preserved every historical record and generated lesson byte-for-byte (verifier accepts both colophon brands; check-repo exits 0) — added one clause; it is the strongest concrete proof of the append-only invariant.
  6. Everything else re-confirmed CORRECT: 13 lesson versions / 3 AIML-4 classes; P0–P6; six audits + adversarial gate (ADR-0009); max 2 revision cycles; zero-touch; SHA-256 hashing; Stage 2 (ADR-0012); check-repo.py 9,240 B + verify-candidate.py 20,111 B in `scripts/`; no LICENSE; no CI (`.github/workflows` absent); no demo; v10 = `CAN-2026-0009` with verifier passing (ADR-0014 evidence); repo URL correct (renamed from `interactive-notes` 2026-09-11, GitHub redirects).
- **Portfolio card vs case study:** More row (`Work.astro`) description "Documentation-first, agent-governed pipeline…" remains accurate per README ("documentation-first, agent-governed operating system"); links [Read case study, Repo] verified; no change needed.
- **Verification:** `npm run build` clean — 9 pages; rendered `dist/work/interactive-lessons/index.html`: zero occurrences of "13 ADRs / 13 to date / @0.5.0", "14 ADRs" (×2), "14 to date", "3 source-intake records", "2 governed experiments", "@0.1.0", "byte-for-byte intact", "governed artifacts it ships" all present; six bullets still in target order with `> Sources` as final content; `check:contrast` **19/19** PASS; `check:glass-contrast` **30/30** PASS (exit 0 both).
- **Files changed:** `src/content/work/interactive-lessons.md` · `docs/decision-log.md` · `docs/project-status.md`.
- **Status:** Working-tree changes ready for owner review. Not committed; not pushed; deployment remains owner-gated (AGENTS.md §7).
