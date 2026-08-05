# Implementation Roadmap

- **Purpose:** Bounded, approval-gated phases from Phase 0 outputs to the live rebuilt portfolio. No phase authorizes the next; every gate is owner-held.
- **Authority:** Phase 0C (2026-08-05). A phase's scope is fixed once its gate opens; in-flight scope changes require owner approval (AGENTS.md §1).
- **Last updated:** 2026-08-05
- **Related:** [architecture-and-quality.md](./architecture-and-quality.md) · [product-and-design-brief.md](../strategy/product-and-design-brief.md) · [project-status.md](../project-status.md)

## Gate rules

1. Each phase starts only with explicit owner approval.
2. Each phase ends with a review artifact and explicit owner approval before the next phase starts.
3. Claim safety applies to every line of copy in every phase (ledger CL mapping).
4. Commits are allowed within an approved phase for work inside that phase's scope; deploying to the production URL happens only in 1.4 with explicit approval.
5. Private data (`temp/` workspace content) never enters code, assets, copy, or commit messages.

## Phase 1.0 — Foundation

- **Scope:** Astro + Tailwind scaffold per the architecture doc; design tokens (color/type/spacing/motion from the brief); base layout, nav, footer; content-collection schema for case studies; CI preview deployment (GitHub Actions → preview URL); **decide and document the branch model + preview-deployment mechanism** (audit F-04: which branch carries Phase 1 work, and what triggers preview vs production deploys).
- **Dependencies:** owner approval to begin Phase 1.
- **Expected outcome:** empty shell site at the preview URL showing tokens/layout.
- **Done when:** preview URL renders the skeleton; tokens match the brief; production URL untouched.
- **Gate:** owner skeleton review → approval to start 1.1.

## Phase 1.1 — Core home page

- **Scope:** all home sections per the brief with claim-mapped copy (hero, selected work cards, experience, AI journey/now, contact, footer); `/resume` route serving the PDF as the single source of truth (conflict C-08); optimized portrait; home meta/OG.
- **Dependencies:** 1.0 approved. OQ-06 and OQ-08 resolved by the owner 2026-08-05: canonical LinkedIn URL `in/kashif-rezwi-149372216` (manual click-through in 1.3 QA); experience copy = resume-equivalent text + approved feature names (Swipe Genie, Workflow Builder, Template Library, CRM/campaigns, workflow UX redesign, AI workflow generation), no screenshots.
- **Expected outcome:** complete home page at the preview URL; copy-to-claim mapping table delivered for review.
- **Done when:** owner content review passes.
- **Gate:** owner content approval → approval to start 1.2.

## Phase 1.2 — Featured case studies

- **Scope:** three case-study pages from the template + `featured-project-research.md` (code-review-agent, perplexity, lingo-agent); compact secondary entries (Better DEV — the `[Your Frontend URL]` README placeholder fix is an owner action on the external repo, audit F-07; LoopLens — hackathon label); screenshots (owner-provided, or repo README assets with approval); personal/hackathon labels visible.
- **Dependencies:** 1.1 approved. Owner decisions apply: the slooze challenge is not shown (OQ-10); bootcamp projects are excluded entirely (OQ-09).
- **Expected outcome:** all five shortlisted projects represented at their approved depth.
- **Done when:** owner approves each case-study page (copy + visuals).
- **Gate:** per-page approvals → approval to start 1.3.

## Phase 1.3 — Polish & QA

- **Scope:** accessibility audit (axe + keyboard pass) and fixes; Lighthouse runs against the acceptance criteria; SEO/meta/OG/sitemap/robots; full link check (demos, repos, socials — includes a manual click-through of the canonical LinkedIn URL `in/kashif-rezwi-149372216`); responsive pass at 360/768/1024/1440; reduced-motion verification; 404 page; favicon/manifest.
- **Dependencies:** 1.2 approved.
- **Expected outcome:** QA report — metrics, screenshots, residual risks.
- **Done when:** all acceptance criteria met, or exceptions explicitly owner-accepted.
- **Gate:** QA report → owner go/no-go for launch.

## Phase 1.4 — Launch

- **Scope:** deploy to production (kashif-rezwi.github.io via the Pages flow); live smoke tests (home, case studies, resume download, all links); retain the old build for rollback until the owner confirms.
- **Dependencies:** 1.3 go decision.
- **Expected outcome:** rebuilt portfolio live; old site replaced.
- **Done when:** owner confirms the live site.
- **Gate:** **explicit owner approval required — irreversible step.**

## Post-launch (outside Phase 1 scope; each needs fresh approval)

Optional writing section (dev.to linkage), analytics decision, dark mode — none authorized by this roadmap.