# Home, About and Experience — Copy Review

- **Purpose:** Implementation plan, editorial review and verification record for the bounded Home/About/Experience update.
- **Authority:** Owner implementation request on 2026-11-08; follows `AGENTS.md` and the R5 Operating Loop. The request authorizes source edits without a further wording gate; commits, pushes, publication, deployment and resume edits remain outside scope.
- **Last updated:** 2026-11-08
- **Related:** [Project status](../project-status.md) · [Decision log](../decision-log.md#dl-108--home-about-and-experience-evidence-backed-copy-update) · [Claim map](../strategy/home-copy-claim-map.md) · [Engineering workflow](../engineering/engineering-workflow.md)

## Objective and boundaries

Present a frontend-focused Full Stack Engineer through concrete, attributable delivery. Home establishes the profile, About adds contribution style and collaboration, and Experience supplies mechanisms and supported benefits. Preserve the existing visual system and employer chronology. Education and the other home sections remain outside scope. Update home metadata only to match the revised positioning.

Done when all revised claims are supported; both Swipe products are clearly grouped; personal projects and team contributions are explicit; Nexus keeps its current public title; desktop/mobile layouts and relevant navigation work; build and existing contrast checks pass; focused accessibility, Lighthouse and link checks are recorded. No resume assets or private source documents enter this public repository.

## Orientation and evidence

- **VERIFIED — Git truth:** Initial working tree clean on `develop` at `0e0650b`; local and remote `develop` match. `git ls-remote` confirmed `main` at `113e3ef` and `gh-pages` at `b04e6e0`. The working branch contains the later R5/Signal Field implementation. Older prose describing `evolve-design` as the current branch is historical, not the implementation baseline.
- **VERIFIED — Live reference:** The live site displays the same old Home/About/Experience copy as this checkout, including the rotating role strip and mixed product bullets. Remote branch names alone do not establish which artifact is currently served.
- **VERIFIED — Authorities:** Owner confirmations in this request were checked against accessible canonical career facts, contribution evidence, proof points, relevant feature records and the manifest-selected Frontend/MERN/Full Stack master PDFs, all dated 2026-11-08 v3. Private evidence remains outside tracked files. Resume wording supplies presentation choices, not new facts.
- **VERIFIED — Boundaries:** Swipe One is team-built; analytics scope spans Recharts, Node.js and ClickHouse without undocumented ingestion/aggregation claims. Swipe Genie refers to the original Swipe Pages orchestration. Pagination spans both products. Nexus is canonically an internship while its owner-authorized public display title remains “Frontend Developer”; this supersedes DL-107's employment-type implication.

## Alternatives and decisions

1. **Minimal sentence replacement:** Lowest markup churn, but retains mixed product attribution and weak scanning. Rejected because concrete features remain hard to assess.
2. **Product groups within the existing timeline (selected):** Small semantic markup/style adjustment; preserves all ten supported Brand contributions as short labeled entries, ordered by product and delivery relevance. More vertical reading than the old five mixed paragraphs, but clear labels and a bounded reading width make scanning easier. No new disclosure interaction.

Keep the ASCII identity as a static Full Stack Engineer strip. Keeping the four rotating titles would conflict with the requested consistent positioning; replacing ASCII with a new visual treatment would expand design scope. Shorten the supporting line and introduction, remove duplicated tenure/title from About's narrative, replace broad async/architecture language with specific APIs/data/integration work, and identify AI applications/tooling as personal work. Use the owner's exact selected analytics sentence. Keep 4,000+ strictly as first-campaign context in a separate sentence. Limit employer tags to technologies that help readers assess these contributions.

## Implementation plan

1. `src/sections/Hero.astro`, `src/components/HeroRoleCycler.astro`, `src/lib/ascii-roles.ts`: consistent role, shorter frontend-led supporting copy, concise UI-to-backend introduction; retain ASCII rendering and responsive dimensions, remove obsolete cycling behavior.
2. `src/sections/About.astro`: three short background paragraphs, three evidence-backed capability cards/tags, revised specialization, removal of internal provenance footer. Use sibling level-three card headings.
3. `src/sections/Experience.astro`: Swipe One then Swipe Pages product headings and labeled contributions; Nexus calendar/timezone → React/live UI → API integration; preserve dates/title and Education markup. Small scoped spacing changes only.
4. `src/pages/index.astro`: align search/OG/Twitter description, including personal-project distinction. Update the existing claim map, status and append-only decision log; log only new unresolved questions.
5. Run build and contrast scripts; inspect final rendered artifact at 320, 390, 768, 1024 and 1440 CSS pixels, both themes; check overflow, hierarchy, keyboard/navigation, no-JS/reduced-motion content, scoped axe and Lighthouse; verify Drive accessibility without replacing the target.

Risk is expanded Experience height, addressed with short feature labels, product grouping and constrained line length. Rollback is the focused source diff against the initial clean checkout; no branch movement or production operation is needed.

## Verification and handoff

- **VERIFIED — Build/checks:** `npm run build` passed (9 pages); after the final scoped color correction, `npx astro build` passed again. `npm run check:contrast` passed 19/19 and `npm run check:glass-contrast` passed 30/30. `git diff --check` is clean. The build's unrelated GitHub-contribution refresh was restored to its initial bytes before the final artifact was built.
- **VERIFIED — Responsive:** 320, 390, 768, 1024 and 1440 CSS pixels × dark/light: zero page overflow and zero clipped inspected paragraphs/headings/tags/actions. Screenshots reviewed for hero wrapping, About narrative/cards/facts, product groups, timeline spacing and Nexus. All ten Brand entries remain readable without a new interaction. At 390px, About is about 1,731px high and the complete Experience/Education section about 2,893px; individual labels and product headings support scanning.
- **VERIFIED — Accessibility:** Final scoped axe checks report zero violations in all ten viewport/theme cells. About headings descend H2→H3; Experience descends H2→H3→H4. Axe leaves some gradient/transparency contrast checks incomplete, so token/composited contrast checks and visual review supplement the result. The discovered light-theme badge contrast issue was corrected with `--color-accent-text`; About hover headings use the same accessible token.
- **VERIFIED — Lighthouse:** Serial final mobile/dark and desktop/light runs both score **100 performance / 98 accessibility / 100 best practices / 100 SEO**, TBT 0ms and CLS 0. An earlier diagnostic mobile run overlapped the responsive automation and scored 86 performance; the final runs were isolated from that workload. The remaining accessibility finding points only to the unchanged `Now.astro` Current Focus H2→H4 hierarchy. This is recorded as OQ-19 and reported as an unrelated concern, not silently fixed or presented as an all-page accessibility pass.
- **VERIFIED — Content/scope:** Server-rendered HTML contains the revised copy and role equivalent, so text does not depend on client JavaScript. Reduced-motion layout was inspected in the responsive matrix. Employer names/dates/title displays are preserved, all technologies remain attributable to the right work, the later Genie rewrite is excluded and personal work is labeled. Education markup is byte-identical to the initial source. The other home sections and their content sources are unchanged.
- **VERIFIED — Navigation and keyboard:** At 390px, Enter opened the mobile menu; selecting About closed it and navigated to `#about`. Keyboard activation of “View Experience Timeline” navigated to `#experience`, placing the section at about 65px from the viewport top below the fixed header. Keyboard activation of the About resume CTA opened the expected Drive viewer in a new browser tab. Export accessibility and final asset identity were independently verified. All local section fragment targets and resume URLs in rendered Home and `/resume` HTML are valid. The local browser reported no page errors.
- **VERIFIED — Resume:** Drive viewer HTTP 200; export 303→200 attachment. Downloaded PDF is SHA-256 identical to the active attached MERN 2026-11-08 v3 PDF. The shared viewer/export URLs, five home resume anchors (including responsive navigation), and resume hub actions were checked; target unchanged. Private PDFs, extracted text, raw audit results and screenshots remain only in gitignored `temp/`.
- **OPEN QUESTION — Follow-up facts:** OQ-17 tracks specific analytics metrics/ingestion/aggregation details; current wording needs none of them. OQ-18 records BCA Jul 2025 in resumes versus the owner-confirmed Apr 2025 portfolio date. No Education or resume edits are part of this task.

Changed implementation files: `src/sections/Hero.astro`, `src/sections/About.astro`, `src/sections/Experience.astro`, `src/components/HeroRoleCycler.astro`, `src/lib/ascii-roles.ts`, `src/pages/index.astro`. Documentation: this review, `docs/strategy/home-copy-claim-map.md`, `docs/open-questions.md`, `docs/project-status.md`, `docs/decision-log.md`.

Material departures from the proposal: shorten the supporting line to “Frontend-focused engineering for SaaS and workflow automation”; omit repeated title/tenure from the About introduction; shorten capability titles to fit the three-column cards; keep all ten Brand contributions but label and group them; make campaign context a separate sentence; explicitly say original Swipe Genie and name both products in shared pagination; remove broad technology inventories instead of implying undocumented work. No new performance/scale claims were introduced.

Suggested commit message: `feat(content): clarify frontend-focused delivery across home, about and experience`.

No commit, push, merge, deployment, publication or resume edit performed. Owner review of the local diff is the next action.

## Complete copy comparison

The baseline is the initial clean checkout, matching the live copy reviewed on 2026-11-08. Experience entries in After are grouped under Swipe One (first five) and Swipe Pages (next five).

### Before

**Home**

Role: Full Stack Engineer → MERN Stack Engineer → Product Engineer → Frontend Engineer (rotating); accessible text: Frontend-focused Full Stack Engineer.

Building toward AI product engineering / and developer tools

2+ years building customer-facing SaaS products in startup teams: landing-page builders, CRM, and campaign & workflow automation. Currently building AI products and developer tools.

**About — background**

I'm a frontend-focused full stack engineer with 2+ years of experience building customer-facing SaaS products in startup teams, focusing on landing-page builders, CRM platforms, and campaign & workflow automation.

My engineering approach connects visual craft with solid full-stack architecture. At Brand Exponents, I contributed across Swipe Pages and Swipe One, building visual workflow builders, multi-channel marketing campaigns, shared integration layers across several providers, and platform stability systems through major launch periods.

Currently, I'm building toward AI product engineering and developer tools in public by shipping streamed multi-agent PR analysis systems, cited web-search engines, and AST-driven localization tools while publishing technical walkthroughs on dev.to.

**About — capability cards**

- **Product & Workflow UI:** Crafting responsive builder canvases, template discovery libraries, and guided automation flows for non-technical users. Tags: Swipe Pages, Swipe One CRM, React / Next.js.
- **Full-Stack & Async Systems:** Developing REST APIs, message queues (BullMQ/RabbitMQ), webhooks, and reusable multi-provider integration engines. Tags: Node.js / Express, MongoDB / Redis, Several Providers.
- **AI Interfaces & DevTools:** Engineering multi-agent code analysis, streamed AI interfaces, cited answer retrieval, and autonomous AST code transforms. Tags: Code Review Agent, Perplexity Engine, Vercel AI SDK.

Facts revised: 2+ Years in SaaS; Builders, CRM & Automation.

Footer: Verified single source of truth for professional background & credentials.

**Experience — Brand Exponents**

- **Integrations:** Contributed to the Workflow Builder's integration layer on Swipe Pages: shared configuration, property selection, field-mapping, and auto-matching patterns reused across several providers, including SendFox, ActiveCampaign, AWeber, Moosend, Salesflare, and EngageBay.
- **CRM:** Helped build Swipe One's CRM features, including contacts, leads, contact properties, and email & WhatsApp campaigns, and contributed to redesigning the workflow builder from blank-canvas drag-and-drop into a guided, template-led flow.
- **AI-assisted features:** Contributed to AI-assisted features including natural-language workflow generation, an AI assistant that auto-configures workflow nodes and auto-drafts email nodes from the user's profile context, and the original Swipe Genie guided page-generation experience.
- **Workflow builder & analytics:** Contributed to workflow-related dashboards and reusable workflow templates on Swipe Pages, and helped build the Swipe One workflow-templates dashboard and workflow analytics so users could discover templates and monitor automation performance. Also contributed to shared page-builder systems including global responsive typography, named solid and gradient colour systems, and a responsive video module across landing pages and funnels.
- **Platform, launches & reliability:** Worked with background jobs, queues, and webhooks; contributed to the shared Template Library; built a reusable infinite-pagination system used across four product surfaces; and helped keep production stable through launches and debugging. Participated in two AppSumo launch periods, resolving customer queries, fixing live issues, shipping hotfixes, and iterating on product feedback across Discord, Facebook, and AppSumo.

**Experience — Nexus**

- **Event-management product:** Contributed responsive React UI (hooks + Redux) across 2–3 client-facing applications, primarily UBMe, an event-management platform. WebSocket real-time features included in-product chat.
- **Features & integration:** Integrated APIs (Axios/Fetch) and common CRUD interactions across booking and scheduling flows. Worked with designers and senior engineers on reusable components, UI libraries, and consistent interface patterns.
- **Timezone-aware scheduling:** Implemented timezone-aware scheduling with Day.js and Moment.js. Built a reusable custom calendar component, removing duplicated styling and configuration.
- **Code quality:** Refactored existing frontend code for readability, maintainability, and performance.

Employer names, role display titles, dates and Education remain unchanged.

### After

**Home**

Role: FULL STACK ENGINEER (static ASCII); accessible text: Full Stack Engineer.

Frontend-focused engineering for SaaS and workflow automation

I build customer-facing features with React, Next.js, TypeScript, and Node.js. My 2+ years of professional work span CRM, email and whatsapp campaigns, workflow builder, landing page builder and workflow analytics—from product UI through APIs and production support.

**About — background**

My strongest work connects React and TypeScript interfaces with APIs, backend processing, and data models for CRM, campaign, and workflow automation features.

At Brand Exponents, I helped build Swipe One from scratch as part of a product team and delivered features across Swipe One and Swipe Pages. I worked with product, design, and engineering from requirements and Figma implementation through release and production support.

My personal AI applications and developer tools extend that work into streaming interfaces, asynchronous processing, and reusable tooling: streamed code-review feedback, cited answers, and a published TypeScript library for backend cold-start status.

**About — capability cards**

- **Product UI & Workflows:** React and TypeScript interfaces for CRM, campaigns, template discovery, and guided workflow creation, connecting reusable components with APIs and application state. Tags: React, TypeScript, TanStack Query.
- **APIs, Data & Integrations:** Node.js APIs and database models for workflow analytics and MongoDB workflow templates, plus shared configuration and field mapping across third-party integrations. Tags: Node.js, REST APIs, MongoDB.
- **AI Applications & DevTools:** Personal applications for streamed code-review feedback and cited answers, plus a published TypeScript library and React adapter that report backend cold starts. Tags: Code Review Agent, Perplexity Clone, server-active-indicator.

Facts revised: 2+ Years Professional Experience; Product UI, Workflows & Full-Stack Delivery.

Internal credibility footer removed; both navigation actions retained.

**Experience — Brand Exponents**

- **Guided workflow creation:** Built guided workflow creation with use-case templates, sequential click-to-add nodes, and a MongoDB workflow-template schema, replacing blank-canvas setup with a structured starting point.
- **Workflow analytics:** Built workflow analytics with Recharts visualizations, a Node.js backend, and a ClickHouse database layer, displaying metrics to the interface for monitoring workflow activity and performance.
- **AI workflow configuration:** Integrated AI workflow configuration by mapping natural-language requests to valid nodes and using profile context to draft email-node content, supporting refinement through follow-up input.
- **CRM & campaign interfaces:** Implemented React and TypeScript interfaces for contacts, leads, contact properties, and email/WhatsApp campaign dashboards.
- **Launch & production support:** Diagnosed customer issues, shipped hotfixes, and supported deployments for the initial release and two AppSumo campaigns. The first campaign onboarded 4,000+ users.
- **Shared Template Library:** Delivered the shared Landing Page/Funnel Template Library across frontend, backend, and REST APIs, with screenshot browsing and iframe device previews. Loaded HTML and builder data from S3-compatible storage on demand to initialize selected templates.
- **Reusable integrations:** Refactored Workflow Builder integrations around shared configuration, property selection, field mapping, and field-name matching while isolating provider-specific behavior. Reused these patterns across SendFox, ActiveCampaign, AWeber, and other connectors, reducing repeated mapping logic.
- **Cross-product infinite pagination:** Built template/media infinite pagination across Swipe Pages and Swipe One with IntersectionObserver and TanStack Query request guards, appending pages without overlapping requests and preserving loaded results during loading and errors.
- **Responsive builder controls:** Contributed typography and named-color controls to the shared Landing Page/Funnel builder, binding breakpoint-specific settings to an isolated iframe canvas so users could adjust styles across device views.
- **Swipe Genie:** Built the original Swipe Genie orchestration that routed business-specific answers to asynchronous builder functions, preserving conversation context and limiting failed executions to three attempts to support guided page generation.

**Experience — Nexus**

- **Calendar & timezone handling:** Built a reusable calendar wrapper that centralized styling and configuration. Implemented timezone-aware event and booking displays with Day.js and Moment.js, including UTC/local conversion and date changes across regions.
- **React interfaces & real-time features:** Built responsive React interfaces with hooks and Redux for client-facing applications, including UBMe, an event-management platform. Collaborated on WebSocket-based chat that displayed live messages without manual refresh.
- **API integration:** Integrated REST APIs with Axios/Fetch and implemented CRUD interactions for booking and scheduling flows, collaborating with designers and engineers on reusable components and consistent interface behavior.

Employer names, role display titles, dates and Education remain unchanged.

## Employer technology tags — owner follow-up (2026-11-08)

- **Authority / VERIFIED:** Owner explicitly requested the fuller Brand Exponents list, including GitHub Actions, CI/CD, Vercel AI SDK and LLM/tool-call integration. This supplies company-era attribution missing from earlier evidence, without establishing infrastructure ownership or model-training experience.
- **Plan:** Restore the requested technologies in `Experience.astro`, order frontend → backend/API → data/storage → AI integration → delivery/monitoring, and retain the existing wrapping tag component. Add only documented omissions: background jobs, webhooks and Sentry. Verify the build, tag order and mobile/desktop wrapping; preserve the already-staged changes without staging this follow-up.
- **Alternatives:** Keep the shortened nine-tag list (compact but omits owner-requested breadth), or restore a fuller ordered list (selected). Separate category panels would add unnecessary layout complexity; the existing tags can wrap naturally.
- **Wording:** Normalize “github actions” to “GitHub Actions”, “CICD” to “CI/CD”, “llm inference” to “LLM Integration”, and “tool-call etc” to “Tool Calling”. These describe application integration; no LLM training, inference-infrastructure ownership or unspecified “etc.” claims. Docker remains a technology-exposure tag. Testing tools are not added without clearer employer-specific attribution.

- **Verification:** `npx astro build` passed (9 pages); `git diff --check` clean. Browser and screenshot checks at 320px and 1440px confirm all 27 tags, natural wrapping, zero page overflow and zero clipped tags. Existing staged changes preserved; follow-up edits remain unstaged. No commit, push or deployment.

## Nexus MUI tag and Query naming review — 2026-11-08

- **Authority / VERIFIED:** Owner confirms MUI belongs to Nexus. Add it immediately after React in the existing tag row; contribution prose and all prior staged changes stay intact.
- **Plan / alternatives:** Use the concise owner-requested “MUI” tag (selected) rather than a longer “MUI (Material UI)” tag; verify the build and mobile wrapping. Separately assess Query naming without changing it, since the owner requested a recommendation for that broader update.
- **VERIFIED — Naming reference:** Official [TanStack React Query documentation](https://tanstack.com/query/latest/docs/framework/react) and [installation documentation](https://tanstack.com/query/latest/docs/framework/react/installation) use React Query for the React library and `@tanstack/react-query` for its package. Both names are valid; this is a presentation choice, not a library migration.
- **Recommendation:** Introduce “TanStack Query (React Query)” in visible skill/technology labels so both names are recognizable. Keep prose concise after the name is established. A later authorized copy pass would cover `src/pages/index.astro`, `src/sections/About.astro`, `src/sections/Experience.astro`, `src/content/work/better-dev.md`, and `src/content/work/perplexity.md`. Keep internal `reactquery` icon IDs, package names and historical decision records unchanged. No Query names changed in this follow-up.

- **Verification:** Nine-page Astro build and `git diff --check` pass. At 320px the eight Nexus tags include MUI after React, with zero overflow or clipped tags; screenshot inspected. No Query labels changed, no staging/commit/push/deployment.

## React Query naming — owner direction (2026-11-08)

- **Authority:** Owner explicitly chose “React Query” across the portfolio, superseding the dual-label suggestion above.
- **Alternatives:** Keep “TanStack Query” (recognizable official umbrella name), use both names (more explanatory but longer), or use “React Query” consistently (selected by owner and also used by the official React documentation).
- **Plan:** Update visible Skills, About, Experience and both project technology lists; preserve icon IDs and package names. Update the Contact source comment and current claim map. Build and check the rendered home and both project pages. Preserve staged changes; no commit, push or deployment.

- **Verification:** Nine-page Astro build, both contrast checks and `git diff --check` pass. Rendered Home, Better DEV and Perplexity contain “React Query” and no old label; source audit found no remaining “TanStack Query”. At 320px the visible tags have no clipping and the page has no horizontal overflow. No staging, commit, push or deployment.

## Hero introduction — owner wording review (2026-11-08)

The owner requested explicit CRM, email and WhatsApp campaigns, workflow and landing-page builders, and workflow analytics. The final sentence groups the two builders for parallel structure and states the supported UI-to-production scope: “With 2+ years of professional experience, I’ve worked on CRM, email and WhatsApp campaigns, workflow and landing-page builders, and workflow analytics—from product UI and APIs to production support.” This supersedes the earlier hero introduction in the comparison above.

- **Verification:** Nine-page Astro build passed; final hero text checked in rendered HTML; `git diff --check` passed. No staging, commit, push or deployment.

## Hero hierarchy refinement — owner-approved suggestion (2026-11-08)

- **Objective:** Make the hero’s name and ASCII role the focal point, improve headline wrapping, give the introduction a comfortable measure and distinguish the actions. Preserve the existing identity and all prior staged work.
- **Alternatives:** Keep the long supporting headline and force a line break, or use the owner-approved shorter wording with natural balanced wrapping. The shorter wording is selected because it adapts to desktop and mobile without a hard-coded break.
- **Plan:** Update `Hero.astro` with the approved headline/introduction, modest role-to-headline and CTA spacing, a narrower and brighter paragraph, and a slightly wider desktop social-rail gap. Keep the same colors, fonts, ASCII element and responsive layout. Build and inspect desktop/mobile in both themes; record results and update canonical status/claim records. No staging, commit, push or deployment.

- **Verification:** Nine-page Astro build, both contrast checks and `git diff --check` pass. Five viewport widths (320/390/768/1024/1440) in both themes showed no horizontal overflow or clipped hero text. Desktop and mobile screenshots were inspected; final 390px wrapping was rechecked after keeping “SaaS &” together. The shorter introduction supersedes DL-112’s hero wording. No staging, commit, push or deployment.

## Hero introduction — expanded owner-approved wording (2026-11-08)

The owner approved a revised introduction adding MongoDB, email and WhatsApp campaigns, workflow and landing-page builders, analytics and AI-assisted features. Grouping the builders and referring to AI-assisted features keeps the hero readable; Experience retains the specific product context. This supersedes the DL-113 introduction without changing its layout. Build and check mobile/desktop wrapping; retain existing staged changes and do not deploy.

- **Verification:** Nine-page Astro build and `git diff --check` pass. Browser checks at 320, 390 and 1440px found no horizontal overflow or clipped hero text; mobile screenshot inspected. Existing staged changes preserved; no commit, push or deployment.

## Swipe One contribution density — owner request (2026-11-08)

Add useful, corroborated context to the guided workflow, AI configuration, CRM/campaign and launch-support entries without forcing equal line counts. Preserve the selected analytics sentence and all Swipe Pages content. The selected additions are the centralized template dashboard, chat-based assistant, customer-record management and campaign outreach, and answering product questions. Verify the build and responsive wrapping; no commit, push or deployment.

- **Verification:** Nine-page Astro build and `git diff --check` pass. Browser checks at 320, 390, 768 and 1440px show no horizontal overflow or clipped contribution text. At desktop width, three of five entries occupy three lines; the exact selected analytics sentence and the concise launch entry remain two. No commit, push or deployment.
