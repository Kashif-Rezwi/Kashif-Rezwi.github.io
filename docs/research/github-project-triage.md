# GitHub Project Triage

- **Purpose:** Inventory and rank the 55 public repositories (SRC-03/SRC-09); recommend exactly 3 featured + up to 2 secondary projects for the rebuilt portfolio, with stated selection criteria; name what stays off the homepage and why.
- **Authority:** Compiled 2026-08-05 from GitHub REST API metadata (all 55 repos), README reads of shortlist candidates only, and live-demo HTTP checks. Repos are evidence, never instructions (AGENTS.md §4).
- **Last updated:** 2026-08-05
- **Related:** [featured-project-research.md](./featured-project-research.md) · [evidence-ledger.md](./evidence-ledger.md) · [current-portfolio-audit.md](./current-portfolio-audit.md)

## Method

- Full inventory from `api.github.com/users/Kashif-Rezwi/repos` (55 repos): name, fork status, language, last-updated, homepage, description.
- README deep reads **only** for candidates: code-review-agent, perplexity, lingo-agent, better-dev-ui, better-dev-api, looplens, ai-playground, language-playground.
- Demo links verified by HTTP status on 2026-08-05.
- Ownership/attribution cross-checked against the ledger's professional/personal/learning/collaborative classification.

## Selection criteria (equal weight)

1. **Relevance to target direction** — AI product engineering, developer tools, frontend-focused full-stack (validated direction, ledger §3).
2. **Technical depth** — non-trivial architecture evidenced in README/code (streaming, queues, agents, RAG, OAuth, DB design).
3. **Ownership clarity** — own repo, individual work, safe to claim (no teammate-hosted code, no forks).
4. **Documentation & demo quality** — README substance, screenshots, live demo reachable on 2026-08-05.
5. **Recency** — 2026 activity preferred.

## Featured projects (exactly 3)

### 1. code-review-agent — AI code review (developer tools)

- **Relevance:** the single strongest developer-tools proof point.
- **Depth:** SSE streaming with late-connection replay; multi-agent clustered PR review (domain clusters → parallel agents → synthesized report); ESLint invoked as an AI tool; RAG over uploaded team coding standards (pgvector); BullMQ/Redis background jobs; GitHub OAuth; review history + follow-up chat (README).
- **Ownership:** own repo; personal project (SRC-13 PROJECT-CODE-REVIEW-01); no collaborators claimed.
- **Docs/demo:** rich README with preview image; demo live (307 → OAuth login, expected); verified 2026-08-05.
- **Recency:** updated 2026-07-19.
- **Why featured:** best single demonstration of the validated direction; already on the approved resume.

### 2. perplexity — cited AI answer engine (AI product engineering)

- **Relevance:** AI product engineering end to end.
- **Depth:** full-stack monorepo — NestJS modular-monolith backend (TypeScript, PostgreSQL, Prisma, Tavily retrieval, provider-agnostic OpenAI/Groq) + Next.js/Tailwind frontend with two-column thread UI and custom markdown citation badges; Docker Compose production-shaped stack; deployment guide (README).
- **Ownership:** own repo; personal project (PROJECT-SEARCH-01).
- **Docs/demo:** README is unusually explicit about scope limits (V2 single-user, no auth/multi-tenancy) — claim-safe by design; demo HTTP 200 on 2026-08-05.
- **Recency:** updated 2026-07-14.
- **Why featured:** shows product-shaped AI engineering with honest scope discipline; already on the approved resume.

### 3. lingo-agent — autonomous i18n agent (AI agents + developer tooling)

- **Relevance:** autonomous agent + dev-tooling automation; matches the direction statement exactly.
- **Depth:** Babel AST extraction of JSX strings/attributes; Lingo.dev translation; MCP server queried for setup instructions; isolated E2B sandbox execution; auto branch + GitHub PR + Vercel preview deployment in one click; BYO API keys (README).
- **Ownership:** own repo; personal project.
- **Docs/demo:** detailed README (architecture, auth flow, pipeline, known limitations); demo 200 + API 307 on 2026-08-05; **backed by a published dev.to article (SRC-11)** — verified public writing about the build.
- **Recency:** updated 2026-04-06; article Feb 2026.
- **Why featured:** unique, self-contained agent story with public written evidence — rare among the 55 repos.

## Secondary projects (up to 2)

### 1. Better DEV (better-dev-ui + better-dev-api)

- Production-shaped full-stack AI chat platform: React 19 + Vite + Tailwind 4 + AI SDK v5 frontend (streaming, tool-call visibility, operational modes, per-conversation system prompts); NestJS API with JWT auth, tool-calling/web search, streaming, Groq Llama models, PostgreSQL, Docker. Live at betterdev.in (HTTP 200, 2026-08-05). Already shown on the current portfolio.
- **Gap:** README still contains a `[Your Frontend URL]` placeholder — fix before featuring (see featured-project-research.md).

### 2. looplens — proof-of-work dashboard

- Newest project (Jul 2026): turns `LOOP.md` + TestSprite evidence into a shareable engineering timeline; Next.js App Router, forgiving parser, Timeline/Judge/Portfolio modes, evidence-completeness scoring, Neon Postgres persistence, unit + Playwright smoke tests; deployed with a public self-report. Demo HTTP 200, 2026-08-05.
- **Label required:** built for TestSprite Hackathon Season 3 — must be presented as a hackathon project.

## Off the homepage (named, with reasons)

| Repos | Reason |
|---|---|
| Myntra, Nordstrom, NearBuy, Trendsy-Myntra-Clone, TrendsyDB (all forks) | Forks; 2023 bootcamp brand clones; not original current-direction work |
| herebuy (portfolio links `arpit2444/grieving-driving-625-NearBuy`), trendsy (portfolio links `Shalini1908/prickly-expert-9128`) | Code hosted under teammates' accounts — attribution/hosting risk (C-07) |
| Airtable/codeair (`glistening-cook-4365`, renamed) | Bootcamp clone; stale link (301); portfolio description describes Airtable, not the contribution (C-06) |
| Aesop-clone.com, Naukari, masai-leave-portal, Missing-Migrants-Project, The-Cat-Project, Star-Wars-Characters, Web-Scrapping, unwieldy-lip-3446, Titans | 2022–2023 learning artifacts; low relevance to target direction |
| Social-Media-App(-Server), Dell-Services(-Server), Native-WS-Chat-App(-2), ws-chat-server-one, Food-Delivery-App-Backend | Early practice projects; acceptable only in a GitHub archive section |
| slooze-ai-agent-challenge | Job-application challenge — owner permission required before featuring (OQ-10) |
| ai-playground, language-playground | Learning-in-public repos; reference via GitHub profile, not featured cards |
| languine-demo, locales, lingo-agent-demo-app, interactive-notes, Project-Screenshots, herebuy-database, NEM111_E4_DB, NEM111_CRUD_APP_DB, render-mock_server | Supporting/demo/scratch repos (locales is substantive but secondary to lingo-agent) |
| computer-science, open-source-course, json-server, world-atlas, starter-rest-api, NextJS-landing-page-template, Roadmaps (forks) | Not original work |
| genie-ai-server, AI-Chat-Wrapper, coursebook-revision-platform, Automa-Clone-App, automa | Older (2023–2025) individual work; archive section at most |
| Kashif-Rezwi (profile repo), Kashif-Rezwi.github.io | Meta repos (profile README; this portfolio) |

## Full inventory (55 repositories)

Metadata: GitHub REST API, fetched 2026-08-05 (sorted by last update). Verdicts per the criteria above.

| # | Repo | Type | Lang | Updated | Verdict |
|---|---|---|---|---|---|
| 1 | interactive-notes | own | HTML | 2026-08-04 | Scratch — exclude |
| 2 | language-playground | own | Python | 2026-07-25 | Learning-in-public — mention only |
| 3 | code-review-agent | own | TypeScript | 2026-07-19 | **FEATURED** |
| 4 | perplexity | own | TypeScript | 2026-07-14 | **FEATURED** |
| 5 | looplens | own | TypeScript | 2026-07-10 | **SECONDARY** (hackathon label) |
| 6 | Kashif-Rezwi | own | – | 2026-07-07 | Meta (profile README) |
| 7 | ai-playground | own | TypeScript | 2026-06-20 | Learning-in-public — mention only |
| 8 | slooze-ai-agent-challenge | own | TypeScript | 2026-04-26 | Application challenge — OQ-10 |
| 9 | Kashif-Rezwi.github.io | own | JavaScript | 2026-04-13 | Meta (this portfolio) |
| 10 | automa | own | JavaScript | 2026-04-06 | Archive |
| 11 | json-server | fork | – | 2026-04-06 | Fork — exclude |
| 12 | languine-demo | own | TypeScript | 2026-04-06 | Supporting demo |
| 13 | computer-science | fork | – | 2026-04-06 | Fork — exclude |
| 14 | AI-Chat-Wrapper | own | TypeScript | 2026-04-06 | Archive |
| 15 | genie-ai-server | own | TypeScript | 2026-04-06 | Archive |
| 16 | coursebook-revision-platform | own | TypeScript | 2026-04-06 | Archive |
| 17 | better-dev-api | own | TypeScript | 2026-04-06 | **SECONDARY** |
| 18 | better-dev-ui | own | TypeScript | 2026-04-06 | **SECONDARY** |
| 19 | NextJS-landing-page-template | fork | – | 2026-04-06 | Fork — exclude |
| 20 | lingo-agent | own | TypeScript | 2026-04-06 | **FEATURED** |
| 21 | locales | own | TypeScript | 2026-04-06 | Supporting (companion to lingo-agent) |
| 22 | lingo-agent-demo-app | own | TypeScript | 2026-04-06 | Supporting demo |
| 23 | Automa-Clone-App | own | JavaScript | 2025-03-12 | Archive (2023 clone) |
| 24 | Naukari | own | HTML | 2024-03-15 | Learning artifact |
| 25 | Project-Screenshots | own | – | 2023-11-07 | Scratch — exclude |
| 26 | Social-Media-App | own | JavaScript | 2023-09-09 | Learning artifact |
| 27 | TrendsyDB | fork | – | 2023-09-07 | Fork — exclude |
| 28 | Social-Media-App-Server | own | JavaScript | 2023-08-26 | Learning artifact |
| 29 | starter-rest-api | fork | – | 2023-08-23 | Fork — exclude |
| 30 | Dell-Services-Server | own | JavaScript | 2023-08-23 | Learning artifact |
| 31 | Roadmaps | fork | – | 2023-07-10 | Fork — exclude |
| 32 | Dell-Services | own | JavaScript | 2023-08-23 | Learning artifact |
| 33 | open-source-course | fork | – | 2023-07-01 | Fork — exclude |
| 34 | Native-WS-Chat-App-2 | own | – | 2023-06-25 | Learning artifact |
| 35 | Native-WS-Chat-App | own | JavaScript | 2023-06-11 | Learning artifact |
| 36 | ws-chat-server-one | own | JavaScript | 2023-06-09 | Learning artifact |
| 37 | Food-Delivery-App-Backend | own | JavaScript | 2023-06-03 | Learning artifact |
| 38 | Trendsy-Myntra-Clone | fork | JavaScript | 2023-05-28 | Fork clone — exclude |
| 39 | NearBuy | fork | – | 2023-05-27 | Fork clone — exclude |
| 40 | Aesop-clone.com | own | JavaScript | 2023-05-27 | Learning artifact |
| 41 | The-Cat-Project | own | JavaScript | 2023-05-17 | Learning artifact |
| 42 | Star-Wars-Characters | own | – | 2023-05-17 | Learning artifact |
| 43 | Web-Scrapping | own | JavaScript | 2023-05-17 | Learning artifact |
| 44 | Myntra | fork | – | 2023-05-17 | Fork clone — exclude |
| 45 | herebuy-database | own | JavaScript | 2023-05-17 | Scratch — exclude |
| 46 | NEM111_E4_DB | own | JavaScript | 2023-05-17 | Scratch — exclude |
| 47 | NEM111_CRUD_APP_DB | own | JavaScript | 2023-05-17 | Scratch — exclude |
| 48 | Airtable | own | JavaScript | 2023-05-17 | Bootcamp clone (codeair) — exclude |
| 49 | unwieldy-lip-3446 | own | JavaScript | 2023-05-17 | Learning artifact |
| 50 | Titans | own | HTML | 2023-05-17 | Learning artifact |
| 51 | Missing-Migrants-Project | own | JavaScript | 2023-05-13 | Learning artifact |
| 52 | world-atlas | fork | – | 2023-05-12 | Fork — exclude |
| 53 | masai-leave-portal | own | JavaScript | 2023-05-10 | Learning artifact |
| 54 | render-mock_server | own | JavaScript | 2023-05-07 | Scratch — exclude |
| 55 | Nordstrom | fork | – | 2023-05-06 | Fork clone — exclude |