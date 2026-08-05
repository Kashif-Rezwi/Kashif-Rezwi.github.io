# Evidence Ledger

- **Purpose:** The single canonical record of Phase 0B evidence-backed findings. Every proposed public claim records supporting source IDs, confidence, a claim-safety label, and safe public wording.
- **Authority:** Compiled 2026-08-05 from sources listed in [source-register.md](../source-register.md), under the claim-safety and source-hierarchy rules of [AGENTS.md](../../AGENTS.md). Owner statements in conversation outrank this document. Workspace proof IDs (`EXP-*`, `PROJECT-*`) come from `temp/career-ops-workspace/profile/proof-points.md` and are referenced as evidence pointers only.
- **Last updated:** 2026-08-05
- **Related:** [AGENTS.md](../../AGENTS.md) · [current-portfolio-audit.md](./current-portfolio-audit.md) · [github-project-triage.md](./github-project-triage.md) · [featured-project-research.md](./featured-project-research.md) · [open-questions.md](../open-questions.md)

## Labels

- `VERIFIED` — directly confirmed by an authoritative source
- `INFERRED` — reasonable reading; flagged and owner-confirmation required before public use
- `OPEN QUESTION` — unresolved; see [open-questions.md](../open-questions.md)
- `DO NOT USE PUBLICLY` — known, but must never appear in public output

Rules: no invented metrics, scale, outcomes, or seniority. Professional / personal / learning / collaborative work is always distinguished. Team work always uses collaborative wording ("contributed", "helped build").

## 1. Verified career timeline

| Period | Role / phase | Classification | Sources | Label |
|---|---|---|---|---|
| Feb 2022 – Nov 2022 | Full-stack web development bootcamp, Masai School (Bangalore) | Learning | SRC-05, SRC-13 PROFILE.md, SRC-14 | VERIFIED |
| Jun 2023 – Aug 2023 | Frontend Developer Intern, Nexus Software Solutions — UBMe event-management product; React, Redux, WebSockets, responsive UI | Professional | SRC-05, SRC-10 (EXP-NEXUS-01..04), SRC-06 | VERIFIED |
| Oct 2023 – Aug 2025 | Full Stack Developer, Brand Exponents Creatives Pvt Ltd — Swipe Pages (no-code landing-page + workflow-automation SaaS) and Swipe One (AI-powered CRM). Collaborative team contributions | Professional | SRC-05, SRC-13, SRC-10 (EXP-BRAND-01..09), SRC-06 | VERIFIED |
| Jul 2025 – present | Bachelor of Computer Applications, Amity University, Noida (online/distance) | Education | SRC-05, SRC-13 | VERIFIED |
| Aug 2025 – present | Job search; personal AI / developer-tools projects (perplexity, code-review-agent, better-dev, lingo-agent, looplens) | Personal projects — not production-scale/commercial | SRC-05, SRC-09, SRC-13 projects.md | VERIFIED |

**Boundary note:** "2+ years of experience" is the approved resume wording (it includes the internship; the full-time full-stack role alone is ~22 months). Keep the approved wording; do not amplify it.

## 2. Verified strengths & differentiators

From SRC-07 (positioning), SRC-08 (proof-points), SRC-10 (experience-evidence), SRC-13 (skills-inventory):

1. **Frontend depth + practical full-stack delivery** — product UI, dashboards, workflow/builder experiences; backend contributions across APIs, queues, integrations. `VERIFIED`
2. **Product-minded workflow engineering for non-technical users** — workflow-builder redesign, template-led flows, guided page generation. `VERIFIED`
3. **SaaS domain breadth** — landing-page builder, CRM & campaign dashboards, workflow automation, AI-assisted features. `VERIFIED`
4. **Startup production delivery** — launches (two AppSumo periods), production debugging, hotfixes, deployments, monitoring, feedback-driven iteration. `VERIFIED` (campaign results themselves unverified)
5. **Practical AI product work** — professional AI features (original Swipe Genie guided page generation, ~80% backend / 20% frontend split; natural-language→workflow generation) plus personal AI systems (cited search, code-review agent, i18n agent). `VERIFIED`
6. **Reusable-architecture habit** — shared configuration/field-mapping/auto-matching patterns reused across 6+ integration providers (SendFox, ActiveCampaign, AWeber, Moosend, Salesflare, EngageBay); shared infinite-pagination system reused across four product surfaces. `VERIFIED` qualitatively (the self-estimated 60–70% duplicate-code reduction is NOT verified — never publish it as a metric)

## 3. Positioning validation

**Candidate under test:** "Frontend-focused Full Stack Engineer with product-engineering experience, building toward AI product engineering and developer tools."

| Component | Verdict | Evidence |
|---|---|---|
| "Frontend-focused Full Stack Engineer" | `VERIFIED` | SRC-05 resume-evidence-source summary uses this exact framing; SRC-13 PROFILE.md; SRC-03 GitHub bio; SRC-11 dev.to bio |
| "2+ years" (implied) | `VERIFIED` as approved wording | SRC-05, SRC-13; see boundary note in §1 |
| "product-engineering experience" | `VERIFIED` | SRC-10/SRC-08 product delivery evidence; current master resume is titled "Product Engineer" (SRC-05 masters, 2026-08) |
| "building toward AI product engineering" | `VERIFIED` as direction | SRC-07 Direction ("Build toward AI product engineering, developer tools, AI interfaces, and practical AI systems"); professional AI-feature work (SRC-10); personal AI projects (SRC-09) |
| "developer tools" | `VERIFIED` as direction | code-review-agent, lingo-agent, locales (SRC-09); dev.to article (SRC-11) |

**Boundaries enforced:** no ML-researcher/AI-scientist implication (SRC-07 claim boundaries; SRC-13 skills-inventory deprioritization). Personal projects described as personal/learning — never production-scale or commercial. Swipe Pages/Swipe One described as collaborative team contributions. The GitHub-profile "AI labs / model training" aspiration wording is overridden — see conflict C-02.

**Draft claim-safe positioning statement (proposed — owner approval pending, DL-004):**

> Frontend-focused Full Stack Engineer with 2+ years building customer-facing SaaS products in startup teams — landing-page builders, CRM, and campaign & workflow automation. Currently building AI products and developer tools: an AI code-review agent with multi-agent analysis and RAG-based coding standards, a cited AI answer engine, and an autonomous i18n agent.

Every clause maps to the claim table below (CL-01…CL-20).

**Update (2026-08-05):** the owner approved this statement with one change — the closing "and an autonomous i18n agent" clause (CL-15) was removed per the DL-004 condition. The final authoritative wording lives in `docs/strategy/positioning.md` §1.

## 4. Claim table (proposed public claims)

| ID | Proposed public claim | Sources | Confidence | Label | Safe public wording |
|---|---|---|---|---|---|
| CL-01 | Identity headline | SRC-05 source; SRC-13 PROFILE.md; SRC-03; SRC-11 | High | VERIFIED | "Frontend-focused Full Stack Engineer" |
| CL-02 | 2+ years building customer-facing SaaS in startup environments | SRC-05; SRC-13 | High | VERIFIED (approved wording; §1 boundary) | Keep the approved resume wording; do not amplify |
| CL-03 | Swipe Pages: refactored/extended Workflow Builder integration layer — shared configuration, property selection, field-mapping, auto-matching — across SendFox, ActiveCampaign, AWeber, Moosend, Salesflare, EngageBay | SRC-08 EXP-BRAND-02/09; SRC-10; SRC-05 | High | VERIFIED | Collaborative wording; qualitative impact only (no metrics) |
| CL-04 | Swipe One: Contacts, Leads, Contact Properties; email + WhatsApp campaign features | SRC-08 EXP-BRAND-03; SRC-10 | High | VERIFIED | "helped build" |
| CL-05 | Workflow-builder redesign: blank-canvas drag-and-drop → guided sequential click-to-add-node flow + use-case templates | SRC-08 EXP-BRAND-04; SRC-10; SRC-06 | High | VERIFIED | Qualitative result only; no adoption/usability metrics |
| CL-06 | AI-assisted workflow generation: natural language → valid workflow structure/config; iterative refinement; auto-configured email nodes | SRC-08 EXP-BRAND-05; SRC-10 | High | VERIFIED | "contributed to" |
| CL-07 | Original Swipe Genie guided page generation (~80% backend / 20% frontend split) | SRC-10 | High | VERIFIED | "contributed as a team member"; the later agent rewrite was a colleague's work — never attribute it |
| CL-08 | Async systems: background jobs, message queues/consumers, webhooks, notifications, third-party integrations | SRC-08 EXP-BRAND-06; SRC-10 | High | VERIFIED | "worked with" |
| CL-09 | Production delivery: iteration, debugging, deployments, monitoring, hotfixes, customer-facing issues; first stable release + two AppSumo campaign periods | SRC-08 EXP-BRAND-07/08; SRC-10 | High | VERIFIED | No campaign-result claims (unverified) |
| CL-10 | Shared Template Library end to end: frontend, completed backend, REST integration, builder handoff, S3-compatible storage | SRC-10; SRC-05 | High | VERIFIED | "contributed end to end"; one of first full-stack features |
| CL-11 | Reusable infinite-pagination system across four product surfaces (observer lifecycle, TanStack Query guards) | SRC-10 | High | VERIFIED | As stated |
| CL-12 | Nexus internship: responsive React UI (hooks + Redux), WebSocket real-time features, UBMe product, refactoring | SRC-08 EXP-NEXUS-01..04; SRC-10 | High | VERIFIED | Internship framing; no quantified performance claims |
| CL-13 | Perplexity Clone — personal full-stack AI answer engine: web-context retrieval, cited answers, threaded follow-ups; V2 single-user scope | SRC-13 PROJECT-SEARCH-01; SRC-09 README | High | VERIFIED | projects.md safe claim verbatim; no production/commercial claims |
| CL-14 | Code Review Agent — personal full-stack AI code review: streamed structured feedback, multi-agent PR analysis, ESLint tooling, RAG coding standards | SRC-13 PROJECT-CODE-REVIEW-01; SRC-09 README | High | VERIFIED | projects.md safe claim verbatim; no production/commercial claims |
| CL-15 | LingoAgent — autonomous i18n agent: Babel AST extraction, E2B sandbox execution, auto PR + Vercel preview; published dev.to article | SRC-09 README; SRC-11 | High | VERIFIED | Personal project; keep documented limitations honest. **Owner directive (2026-08-05, DL-004 condition): excluded from the positioning statement; must never ship as verified work experience** |
| CL-16 | Better DEV — personal AI chat platform: streaming UI with tool visibility; NestJS API with JWT auth, tool-calling, Groq models | SRC-09 READMEs | High | VERIFIED | Describe features only; never "production-ready/commercial" |
| CL-17 | LoopLens — proof-of-work dashboard for AI coding loops (TestSprite Hackathon Season 3) | SRC-09 README | High | VERIFIED | Hackathon label mandatory; no placement claims |
| CL-18 | Direction: "building toward AI product engineering and developer tools" | SRC-07 | High | VERIFIED as direction | Directional language only; no ML-research implication |
| CL-19 | Current hero copy: "focused on AI agents, scalable architectures, system design" | SRC-02 portfolio copy only (tier 7) | Low | INFERRED | Needs owner confirmation; soften to evidenced wording before reuse |
| CL-20 | GitHub profile README: direction toward "AI labs, model training, research workflows" | SRC-03 profile README (tier 6) | Low | DO NOT USE PUBLICLY | Conflicts with approved claim boundaries — see C-02 |

## 5. Conflicts log

All conflicts between sources are recorded here — none are silently resolved.

| ID | Conflict | Sources | Handling / resolution |
|---|---|---|---|
| C-01 | LinkedIn URL: `in/kashif-rezwi` (portfolio + GitHub profile) vs `in/kashif-rezwi-149372216` (resume + PROFILE.md) | SRC-02/03 vs SRC-05/13 | Neither URL verifiable without login | Resolved (owner, 2026-08-05, OQ-06): canonical = `in/kashif-rezwi-149372216`; manual click-through in Phase 1.3 QA |
| C-02 | GitHub profile README: "long-term direction toward AI labs, model training, research workflows" vs approved claim boundaries (no ML-research implication) | SRC-03 (tier 6) vs SRC-07 (tier 3) | Source hierarchy: approved evidence wins; ML-research direction stays out of the portfolio | Resolved by hierarchy; OQ-07 confirms intent |
| C-03 | Portfolio hero: "scalable architectures, system design" focus vs skills evidence (product UI / full-stack delivery; avoid specialist positioning) | SRC-02 vs SRC-13 | Treat as `INFERRED` (CL-19); needs claim-safe rewrite | OPEN — owner review |
| C-04 | About page: "AI-powered products" (professional) vs evidence wording "AI-assisted features/experiences"; Swipe One itself is described as "AI-powered CRM platform" in PROFILE.md | SRC-02 vs SRC-10/13 | Partially supported; use "AI-assisted features" for professional feature work | OPEN — wording review in 0C |
| C-05 | Homepage features 2023 bootcamp clones; verified current direction is 2026 AI/dev-tools work | SRC-02 vs SRC-09 | Rebuild around the triage shortlist | Resolved by triage (shortlist pending owner confirmation) |
| C-06 | codeair card: stale repo link (`glistening-cook-4365` → 301 → `Airtable`) + description describes the Airtable product, not his contribution | SRC-02 vs SRC-09 (verified 2026-08-05) | Replace or remove the card | OPEN until rebuild |
| C-07 | herebuy/trendsy cards link to teammates' repos (`arpit2444/…`, `Shalini1908/…`) | SRC-02 | Attribution/hosting risk; remove or explicitly relabel as group learning work | OPEN until rebuild |
| C-08 | Resume button: `download` of local PDF + `window.open` of Google Drive link — conflicting behavior | SRC-02 (Navbar.jsx, HomeContent.jsx) | One resume source of truth — owner decision (OQ-05, 2026-08-05): serve the resume at `/resume`, drop the Google Drive fork | Implement in Phase 1.1 |
| C-09 | Title variance: "Full Stack Engineer" (site, GitHub) vs "Product Engineer" (2026-08 master resume) | SRC-02/03 vs SRC-05 | Both verified in their sources; owner's title choice belongs to 0C | OPEN — owner decision |
| C-10 | "2+ years" counting boundary (~22 months full-time-only) | SRC-05 | Keep the approved wording; never amplify | Resolved — boundary documented (§1) |
| C-11 | Register row SRC-04b labeled "LinkedIn local substitute", but `data/sources.csv` is job-source tracking, not LinkedIn content | docs/source-register.md vs file inspection | Register correction needed — outside Phase 0B's allowed edit list | OPEN → OQ-11 |
| C-12 | Contact.jsx contains commented-out alternative phone/location values | SRC-02 | Remove during rebuild; values never reproduced in any doc | Recorded (audit) |
| C-13 | GitHub profile README "Now building → perplexity and code-review-agent" vs newer activity (looplens, lingo-agent, interactive-notes) | SRC-03 vs SRC-09 | Minor staleness in a tier-6 source; portfolio must not mirror profile text | Recorded |

## 6. Open items

All open questions were answered and closed by owner decision on 2026-08-05 — see [open-questions.md](../open-questions.md). Key outcomes: LinkedIn link-only/never quoted with canonical URL `in/kashif-rezwi-149372216` (QA click-through at 1.3); X excluded; resume served at `/resume` as the single source of truth (Google Drive fork removed); experience copy = resume-equivalent text + approved feature names, no screenshots; bootcamp projects and the application challenge excluded; no ML-research framing confirmed.

## 7. DO NOT USE PUBLICLY

Categories only — details deliberately absent from this document:

- Personal, family, legal, health, and financial details contained in the journey exports (SRC-14, SRC-06) — boundaries defined in SRC-13 career-journey.md
- Compensation history, salary preferences, and placement-package figures
- Job application records, contacts, opportunities, and company source tracking (workspace `data/`)
- Commented-out alternative contact values found in SRC-02 Contact.jsx
- LinkedIn profile content (unverified — never quote without owner-provided copy)
- Self-reported bootcamp class-ranking and compensation outcomes in SRC-14 (also flagged verify-before-use by SRC-13)

## 8. Deliberately unread sources (privacy minimization)

- `compensation-history.md`, `salary-location-preferences.md`, `interview-stories.md` — not needed for 0B deliverables; left unread to minimize private-data exposure.
- `data/sources.csv` read only in its header region — it is application-tracking data, not profile evidence (see C-11).