# Home Copy → Claim Map

- **Purpose:** The Phase 1.1 content-review deliverable (roadmap 1.1 expected outcome). Every public sentence on the home page and `/resume` route maps to exactly one ledger claim or an explicit no-claim rationale. Worded per claim safety (AGENTS.md §3) and positioning usage rules (§4 of `positioning.md`).
- **Authority:** Phase 1.1 build, 2026-08-05. Copy is claim-mapped against `docs/research/evidence-ledger.md` §4; nothing beyond a claim (or owner-approved fact) is stated. The 2026-11-08 owner request authorizes the current bounded implementation; DL-108 records its sources and boundaries.
- **Last updated:** 2026-11-08 (DL-108: Home, About and Experience implementation)
- **Related:** [positioning.md](./positioning.md) · [product-and-design-brief.md](./product-and-design-brief.md) · [evidence-ledger.md](../research/evidence-ledger.md) · [open-questions.md](../open-questions.md) · [R3-0 baseline](../rebuild-02/03-r3-0-correctness-baseline.md)

## Conventions

- **Claim** IDs refer to the ledger's claim table (CL-01…CL-18).
- **No claim** = identity, navigation, provenance, or factual link values that carry no career/outcome assertion.
- `[owner]` = owner-approved fact/decision recorded in the decision log or open questions.

## R3-0 restoration note (2026-08-05)

`rebuild-02` temporarily changed the home title/metadata to “Full Stack Engineer,” added availability, freelance, and location statements, and used “AI-powered applications” wording. R3-0 restores the exact approved headline and hero summary below, returns the directional language to CL-18, and removes the unsupported availability/freelance/location statements rather than treating a design change as new evidence. The complete R2/R3 disposition and baseline are recorded in [`docs/rebuild-02/03-r3-0-correctness-baseline.md`](../rebuild-02/03-r3-0-correctness-baseline.md).

## R3-A owner-approved contact update (2026-08-05)

The owner subsequently approved a freelance-project invitation and public location display (DL-020; updated to `Bengaluru, India` in DL-106). General availability remains intentionally omitted because the owner marked it undecided. The GitHub contribution view and project-link proof are approved direction for R3-D only and are not yet public.

## Hero

All current findings below are **VERIFIED**, using the owner's 2026-11-08 confirmations and accessible canonical contribution evidence. Master resumes guide presentation only. [DL-108](../decision-log.md#dl-108--home-about-and-experience-evidence-backed-copy-update) supersedes the historical Hero/Experience wording above and below where revised.

- **Full Stack Engineer / frontend-focused SaaS and workflow engineering:** CL-01/02 and the owner's explicit positioning. One static ASCII role replaces four rotating titles; its accessible text reads “Full Stack Engineer.”
- **React, Next.js, TypeScript, Node.js, MongoDB; 2+ years of professional experience; CRM, email and WhatsApp campaigns, workflow and landing-page builders, analytics and AI-assisted features; product interfaces and APIs through production support:** owner-confirmed background, EXP-BRAND-01/03/04/07/14. No seniority or sole-product ownership claim.
- **Home description / OG / Twitter:** same positioning; AI applications and developer tools explicitly identified as personal projects (PROJECT-CODE-REVIEW-01, PROJECT-SEARCH-01, PROJECT-SERVER-INDICATOR-01).
- **Resume CTA:** factual navigation; shared Drive viewer/download constants remain unchanged (DL-103). Current download matches the active MERN v3 master byte for byte.

## About

- **Background:** React/TypeScript interfaces connected with APIs, backend processing and data models for CRM, campaigns and workflows — EXP-BRAND-01/03/04/10/14; owner-confirmed professional scope.
- **Collaboration:** helped build Swipe One from scratch as part of a product team; contributions across Swipe One/Swipe Pages; requirements, Figma implementation, release and production support — EXP-BRAND-01/07/12/13. No architecture-leadership claim.
- **Personal direction:** streaming interfaces, asynchronous processing, code-review feedback, cited answers and published TypeScript cold-start tooling — PROJECT-CODE-REVIEW-01 / PROJECT-SEARCH-01 / PROJECT-SERVER-INDICATOR-01. “Personal” is explicit in both narrative and capability card.
- **Product UI & Workflows card:** CRM/campaign interfaces, template discovery, guided workflows, reusable UI, APIs and application state; React, TypeScript, React Query — EXP-BRAND-02/03/04 and confirmed shared pagination record.
- **APIs, Data & Integrations card:** Node.js analytics, MongoDB workflow-template model and shared integration configuration/field mapping — EXP-BRAND-09/10/14. No personal-project queues or tools transferred into employer claims.
- **AI Applications & DevTools card:** personal streamed reviews/cited answers and the published TypeScript library/React adapter — project proofs above. Tags identify the three personal projects.
- **Facts:** professional tenure and specialization derive from the same evidence. Location/status and Education facts are outside this update. Internal provenance footer removed; resume and Experience navigation retained.

## Selected work

| Sentence | Claim | Notes |
|---|---|---|
| Featured personal projects in AI products and developer tools. | CL-18 | Directional; "personal" labels the tier |
| Code Review Agent — summary | CL-14 | Ledger safe wording; Personal project label |
| Perplexity Clone — summary (incl. single-user V2 scope) | CL-13 | "honest single-user V2 scope" mirrors the README's explicit scoping (triage/research §2) |
| LingoAgent — summary | CL-15 | Personal project **only**; DL-004 condition (never verified work experience) honored |
| Better DEV — one-line + feature wording | CL-16 | Personal project; features only, no "production-ready/commercial" |
| LoopLens — title + "proof-of-work dashboard…" | CL-17 | **Hackathon label required** — present as (TestSprite Hackathon Season 3); no placement claims |
| Learning in public: ai-playground · language-playground | No claim | Triage verdict "learning-in-public — mention only"; factual repo pointers |
| Full archive on GitHub | No claim | Factual link |

## Experience

All current contribution findings are **VERIFIED** by owner confirmations on 2026-11-08, corroborated by the private canonical contribution and feature records. Only approved public career claims are reproduced here; no private documents are copied into the repository.

- **Brand Exponents / Full Stack Developer / Oct 2023–Aug 2025:** unchanged owner-confirmed employer facts. Swipe One precedes Swipe Pages; team-built product context appears once in About.
- **Swipe One — guided creation:** use-case templates, sequential click-to-add nodes and MongoDB workflow-template schema; structured starting point instead of blank setup — EXP-BRAND-04/10.
- **Swipe One — analytics:** owner's exact selected sentence, naming Recharts, Node.js backend and ClickHouse database layer for workflow monitoring — EXP-BRAND-14 and 2026-11-08 correction. No named metrics, ingestion architecture or aggregation algorithm.
- **Swipe One — AI configuration:** natural-language requests mapped to valid nodes, profile-context email drafts and follow-up refinement — EXP-BRAND-05.
- **Swipe One — CRM/campaign UI:** React/TypeScript contacts, leads, properties, email/WhatsApp campaign dashboards — EXP-BRAND-03. No inferred filtering, validation or conversion benefit.
- **Swipe One — production support:** customer diagnosis, hotfixes, initial-release and two-campaign deployments — EXP-BRAND-07/08. First campaign's 4,000+ users are a separate product-context sentence, not personal acquisition impact.
- **Swipe Pages — shared Template Library:** frontend/backend/REST, screenshot browsing, iframe device previews, on-demand HTML and builder data from S3-compatible storage — EXP-BRAND-02 and feature scope. No discussion of another contributor's implementation history.
- **Swipe Pages — integrations:** shared configuration, property selection, mapping and field-name matching with provider-specific isolation; SendFox, ActiveCampaign, AWeber plus other connectors — EXP-BRAND-09. Qualitative reduction in repeated mapping logic only.
- **Cross-product pagination:** Swipe Pages and Swipe One explicitly named; IntersectionObserver, React Query guards, non-overlapping requests and retained loaded results — confirmed cross-product feature record. Placement under Swipe Pages does not limit its attribution to that product.
- **Swipe Pages — builder controls:** typography and named-color contributions, breakpoint settings connected to isolated iframe canvas — confirmed shared-builder record. Complete builder remains team-developed.
- **Swipe Pages — original Swipe Genie:** business-specific answer routing to async builder functions, retained conversation context, maximum three attempts — EXP-BRAND-02 and original-Genie feature boundary. Later Swipe One agent rewrite excluded.
- **Brand tags (DL-109 follow-up):** Full owner-requested employer list, ordered frontend → backend/API → data/storage → AI integration → delivery/monitoring. The 2026-11-08 follow-up directly confirms Brand use of GitHub Actions, CI/CD, Vercel AI SDK and LLM/tool-call integration. Background jobs, webhooks and Sentry are documented omissions restored here. Tags do not imply release-pipeline ownership, model training or inference-infrastructure ownership; no company-era tooling is inferred from personal projects.
- **Nexus / Frontend Developer / Jun–Aug 2023:** existing public display preserved by explicit owner instruction; canonical employment type is internship. This supersedes DL-107's full-time implication and the old claim-map attribution of the display title as an official correction.
- **Nexus — calendar/timezones:** reusable wrapper, centralized styling/configuration, Day.js/Moment.js UTC/local conversion and regional date changes — EXP-NEXUS-05/06.
- **Nexus — React/live UI:** hooks and Redux across client-facing apps; UBMe described as event-management platform with collaborative WebSocket chat — EXP-NEXUS-01/02/03.
- **Nexus — MUI tag:** VERIFIED by direct owner confirmation on 2026-11-08 (DL-110); no additional component ownership or outcomes implied.
- **Nexus — API integration:** REST APIs via Axios/Fetch and CRUD booking/scheduling flows; designer/engineer collaboration — owner confirmation, EXP-NEXUS-01/02. Generic Code quality bullet removed in favor of concrete reuse evidence.
- **Education:** existing markup, wording and dates unchanged.

## AI journey / now

| Sentence | Claim | Notes |
|---|---|---|
| I'm building toward AI product engineering and developer tools. | CL-18 | Directional only; no ML-research framing (C-02/OQ-07) |
| Recent personal projects include an AI code-review agent, a cited AI answer engine, and an autonomous i18n agent. | CL-14 · CL-13 · CL-15 | Personal tier; LingoAgent as personal project only (DL-004) |
| LingoAgent article on dev.to "walks through that build" | SRC-11 | Article URL verified 200 (2026-08-05); describes the article, no outcome claims |
| ai-playground · language-playground (learning in public) | No claim | Factual repo pointers |

## Contact

| Sentence | Claim | Notes |
|---|---|---|
| For freelance projects and conversations, reach me by email or phone, or find me on GitHub, LinkedIn, and dev.to. | `[owner, DL-020]` | Owner-approved invitation; it does **not** state generalized availability |
| Email `kashifrezwi850@gmail.com` | No claim | `[owner]`-confirmed active value (also on live site + dev.to profile) |
| Phone `9883909187` | No claim | `[owner, DL-009]` — owner requested inclusion; commented-out alternatives (C-12) never used |
| GitHub / LinkedIn / dev.to | No claim | LinkedIn canonical `[OQ-06]` |
| Bengaluru, India | `[owner, DL-106]` | Owner-approved public location display (updated from `Kolkata, India` via DL-106) |

## Footer / Resume page

| Sentence | Claim | Notes |
|---|---|---|
| © … · Built with Astro · Hosted on GitHub Pages · Last updated | No claim | Provenance |
| Source on GitHub | No claim | Factual link |
| Resume page: "This PDF is the single source of truth…" | No claim | `[owner, OQ-05]`; resolves C-08 |

## Boundaries honored (not stated anywhere)

- No invented metrics, scale, or outcomes (AGENTS.md §3) — verified absent.
- No ML-researcher/AI-scientist implication (C-02, OQ-07).
- Personal projects never framed as production/commercial (ledger §3 boundaries).
- Swipe Pages / Swipe One product context is collaborative. Direct personal action verbs describe only supported individual features; builder controls and UBMe chat retain contribution/collaboration wording.
- No screenshots in the experience section (OQ-08).