# Featured Project Research

- **Purpose:** Deep-dive evidence for the shortlisted projects from [github-project-triage.md](./github-project-triage.md): problem & user, Kashif's contribution, key engineering decisions, real challenges (source-backed only), verified outcomes, visuals/demo/code links, and content gaps or approvals needed before public display.
- **Authority:** Compiled 2026-08-05 from repository READMEs (fetched raw from the GitHub API), the ledger's project records (SRC-13 projects.md), and live-demo HTTP checks. All five are **personal projects** — never presented as professional employment or production-scale commercial systems.
- **Last updated:** 2026-08-05
- **Related:** [github-project-triage.md](./github-project-triage.md) · [evidence-ledger.md](./evidence-ledger.md) · [open-questions.md](../open-questions.md)

## 1. Code Review Agent (featured)

- **Repo:** github.com/Kashif-Rezwi/code-review-agent · **Demo:** code-review-agent-client.vercel.app (307 → OAuth login, verified 2026-08-05) · **Classification:** personal project · **Proof ID:** PROJECT-CODE-REVIEW-01
- **Problem & user:** developers wanting fast, structured code review — paste a snippet or point at a public GitHub PR; get bugs/correctness issues with file/line locations, security findings with severity, performance/style observations, genuine positives, and a 1–10 quality score; reviews persist and support follow-up chat.
- **Contribution:** sole builder (own repo, personal project per SRC-13). Full-stack across Next.js client and NestJS API.
- **Key engineering decisions (README):** SSE streaming with replay for late connections; multi-agent clustered PR review — large PRs split into domain clusters (Auth/DB/API…), reviewed by parallel agents, synthesized into one report; ESLint exposed as a server-side tool the AI can invoke; RAG over uploaded team coding standards (PDF/text/Markdown, vectorized into review prompts); BullMQ + Redis job queue decoupling long AI runs from HTTP; GitHub OAuth as the auth credential; Postgres persistence of reviews, trace logs, scores.
- **Real challenges (source-backed):** README documents the queue/SSE replay design and clustered-review synthesis as the hard parts; no quantified outcomes are claimed. Beyond the README, challenges are not recorded — `OPEN QUESTION` if deeper narrative is wanted (owner can supply).
- **Verified outcomes:** live demo reachable; listed on the approved master resume; pinned on GitHub. No user/scale/accuracy claims permitted.
- **Visuals:** preview image in `docs/assets/preview.png`; screenshots could be captured from the demo (needs owner action).
- **Gaps/approvals:** none blocking. Keep wording free of "SaaS/commercial" implications (README calls it a "SaaS tool" — the portfolio should describe capabilities, not commercial status).

## 2. Perplexity Clone (featured)

- **Repo:** github.com/Kashif-Rezwi/perplexity · **Demo:** perplexity-lilac.vercel.app (HTTP 200, verified 2026-08-05) · **Classification:** personal project · **Proof ID:** PROJECT-SEARCH-01
- **Problem & user:** a Perplexity-inspired answer engine — ask a question, get web-grounded answers with citations and threaded follow-ups.
- **Contribution:** sole builder; full-stack monorepo.
- **Key engineering decisions (README):** NestJS modular monolith (TypeScript, PostgreSQL, Prisma) handling API, persistence, Tavily web-search integration, and provider-agnostic answer generation (OpenAI or Groq); Next.js + Tailwind frontend with responsive two-column thread UI and custom markdown parsing for citation badges; Docker Compose production-shaped local stack; separate deployment guide covering migrations, secrets, networking, verification.
- **Real challenges (source-backed):** README states V2 is deliberately single-user/local — no auth, user-scoped data, rate limits, or multi-tenant guardrails; those are tracked as later productization work. This explicit scoping is itself evidence of engineering judgment.
- **Verified outcomes:** live demo reachable; listed on the approved master resume. No production/commercial claims.
- **Visuals:** live demo available for screenshot capture (owner action).
- **Gaps/approvals:** none blocking; keep the honest V2-scope framing in portfolio copy.

## 3. LingoAgent (featured)

- **Repo:** github.com/Kashif-Rezwi/lingo-agent · **Demo:** lingo-agent.vercel.app (200) · **API:** lingo-agent.onrender.com (307) — verified 2026-08-05 · **Classification:** personal project
- **Problem & user:** developers who want a Next.js App Router landing page to become multilingual without hand-wiring i18n — point the agent at a repo, pick languages, get a ready-to-merge PR.
- **Contribution:** sole builder; full-stack agent pipeline plus companion demo app (lingo-agent-demo-app) used to test injection.
- **Key engineering decisions (README):** Babel AST extraction targeting JSX text nodes and common string attributes (`placeholder`, `title`, `alt`, `aria-label`); translation via Lingo.dev; agent queries the Lingo.dev MCP server for exact setup instructions; all execution inside an isolated E2B sandbox; commits to a new branch, opens a GitHub PR, triggers a Vercel preview deployment; BYO API keys to bypass free-tier limits.
- **Real challenges (source-backed):** README "Known Limitations" — App Router only (Pages Router/Vite/Remix unsupported); strings inside JS logic (variables, error messages, API responses) are not extracted. Documented as deliberate scope constraints.
- **Verified outcomes:** demo + API reachable (2026-08-05); dev.to article published about this exact build (SRC-11) — public writing as evidence.
- **Visuals:** README screenshots + video walkthrough section.
- **Gaps/approvals:** none blocking.

## 4. Better DEV — better-dev-ui + better-dev-api (secondary)

- **Repos:** github.com/Kashif-Rezwi/better-dev-ui · better-dev-api · **Demo:** betterdev.in (HTTP 200, verified 2026-08-05) · **Classification:** personal project (two repos, one platform)
- **Problem & user:** a modern AI chat interface that shows how the AI works — streaming tokens, visible tool calls (web search), conversation management.
- **Contribution:** sole builder across frontend and backend.
- **Key engineering decisions (READMEs):** React 19 + Vite 7 + Tailwind 4 + AI SDK v5 UI with dark theme, smart scrolling, operational modes (Fast/Thinking/Auto), per-conversation system prompts, persistent history; NestJS API with JWT auth, an extensible tool-calling system (web search), streaming responses, multi-model support via Groq (Llama), PostgreSQL, Docker, documented high-level architecture.
- **Real challenges (source-backed):** none documented beyond README scope; tool-call visibility + streaming UX is the stated focus. Deeper challenge narrative not recorded — `OPEN QUESTION` if wanted.
- **Verified outcomes:** live platform reachable. No user/scale claims.
- **Gaps/approvals:** README contains a leftover `[Your Frontend URL]` placeholder — fix before featuring. READMEs say "production-ready"; portfolio copy must not repeat that (no commercial use evidenced).

## 5. LoopLens (secondary)

- **Repo:** github.com/Kashif-Rezwi/looplens · **Demo:** looplens-rho.vercel.app (200) + published public self-report — verified 2026-08-05 · **Classification:** **hackathon project (TestSprite Hackathon Season 3) — must be labeled as such**
- **Problem & user:** AI-assisted coding projects need shareable proof-of-work: turn `LOOP.md`, TestSprite runs, repo/live links, and dev notes into a public engineering timeline for reviewers/judges.
- **Contribution:** sole builder.
- **Key engineering decisions (README):** Next.js App Router workspace; forgiving `LOOP.md` paste/import parser; editable timeline cards; Timeline / Judge Mode / Portfolio Mode + Markdown export; evidence-completeness scoring; public report routes with Postgres JSON persistence (Neon) and a dev file-store fallback; unit tests + Playwright smoke tests.
- **Real challenges (source-backed):** README records fixing the verification harness as part of the dogfooded self-report. No further challenges recorded.
- **Verified outcomes:** deployed and submitted for the hackathon; live report works. Hackathon placement is NOT verified — no placement claims allowed.
- **Visuals:** three screenshots in README (report hero, workspace timeline, judge mode).
- **Gaps/approvals:** hackathon label mandatory; confirm the owner still wants it shown.

## Shared content gaps & approvals (all shortlisted projects)

1. No user/scale/adoption metrics exist for any personal project — none may be invented (claim safety).
2. Fresh screenshots recommended for code-review-agent (login-gated flows), perplexity, and better-dev (owner action).
3. Professional work (Swipe Pages / Swipe One) is deliberately NOT a "featured project" here — it belongs to experience content. Owner decision OQ-08 (2026-08-05): resume-equivalent text + approved feature names are allowed; **no screenshots**.
4. `slooze-ai-agent-challenge` remains excluded pending OQ-10.
5. Demos run on Vercel/Render free tiers and can sleep or break — re-verify all links at launch (Phase 1+).