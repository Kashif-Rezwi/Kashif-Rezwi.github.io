# Featured Project Research

- **Purpose:** Deep-dive evidence for the shortlisted projects from [github-project-triage.md](./github-project-triage.md): problem & user, Kashif's contribution, key engineering decisions, real challenges (source-backed only), verified outcomes, visuals/demo/code links, and content gaps or approvals needed before public display.
- **Authority:** Compiled 2026-08-05 from repository READMEs (fetched raw from the GitHub API), the ledger's project records (SRC-13 projects.md), and live-demo HTTP checks. All five are **personal projects** — never presented as professional employment or production-scale commercial systems.
- **Last updated:** 2026-09-02 (Code Review Agent §1 deepened via verified code inspection)
- **Related:** [github-project-triage.md](./github-project-triage.md) · [evidence-ledger.md](./evidence-ledger.md) · [open-questions.md](../open-questions.md)

## 1. Code Review Agent (featured)

- **Repo:** github.com/Kashif-Rezwi/code-review-agent · **Demo:** code-review-agent-client.vercel.app (307 → OAuth login, verified 2026-08-05) · **Classification:** personal project · **Proof ID:** PROJECT-CODE-REVIEW-01
- **Problem & user:** developers wanting fast, structured code review — paste a snippet or point at a public GitHub PR; get bugs/correctness issues with file/line locations, security findings with severity, performance/style observations, genuine positives, and a 1–10 quality score; reviews persist and support follow-up chat.
- **Contribution:** sole builder (own repo, personal project per SRC-13). Full-stack across Next.js client and NestJS API.
- **Key engineering decisions (README + verified code inspection 2026-09-02):** Next.js 16 (App Router) + NestJS 11 monorepo; prepaid credit wallet powered by Razorpay (1 credit = ₹1 inference value, scaled in hundredths integer "credit-paise" `CREDIT_SCALE=100` to prevent floating-point drift); reserve-and-settle token billing lifecycle (worst-case upfront reservation with conditional `gte` check, exact model token cost settlement via Vercel AI Gateway list price + 20% safety margin, atomic `SETTLEMENT` refund on completion, full refund on failure); authoritative webhook settlement (HMAC-SHA256 over raw body buffer with `crypto.timingSafeEqual` before JSON parsing, idempotent by unique `PaymentEvent.razorpayEventId` constraint); hidden ₹1 dev smoke-test pack (`dev1`) gated by `x-dev-pack` header; transactional outbox pattern (`Review` + `ReviewDispatch` in single Prisma tx, 2s polling dispatcher with 30s leases); BullMQ queue with single-worker concurrency cap and 5-minute hard deadline; Redis Streams event log (`XADD`, 24h retention, ~5000 maxlen) with resumable SSE streaming (`Last-Event-ID`) and Postgres terminal reconstruction fallback; coverage-safe multi-agent PR review (untrusted planner reconciliation, deterministic path-affinity fallback, 3-worker concurrency pool, hunk-aware patch limits, exact `PARTIAL` coverage guarantees); RAG over uploaded team coding standards (PDF/Markdown/text, 1536-dim embeddings, Neon PostgreSQL `pgvector`); server-side in-process ESLint runner exposed as an AI tool.
- **Real challenges (source-backed, code-grounded — resolved 2026-09-02):** (1) Floating-point billing drift in DB transactions → scaled all credits to integer hundredths; (2) Charging long-running AI streams before knowing token usage → reserve-and-settle lifecycle; (3) Webhook retries causing duplicate credit grants → constant-time HMAC on raw body buffer + unique database constraint on `razorpayEventId`; (4) HTTP timeout wall on long AI reviews → transactional outbox + BullMQ + Redis Streams; (5) Dropped tokens on network flicker → Redis Streams + SSE `Last-Event-ID` resume + Postgres terminal fallback; (6) Hallucinated files in multi-agent PR reviews → untrusted planner reconciliation + deterministic path-affinity fallback algorithm. Full narrative: `src/content/work/code-review-agent.md`.
- **Verified outcomes:** live platform reachable (Vercel client + Render API `code-review-agent-api-685g.onrender.com` + `/health` endpoint checking Postgres & Redis Streams); listed on the approved master resume; pinned on GitHub. Monorepo verification loop green (build, type-check, 32 server suites / 192 tests, 12 client test files / 26 tests — 218 total unit tests, lint). No user/scale/accuracy claims permitted.
- **Visuals:** preview image in `docs/assets/preview.png`; screenshots could be captured from the demo (needs owner action).
- **Gaps/approvals:** none blocking. Keep wording free of "SaaS/commercial" implications (README calls it a "SaaS tool" — the portfolio describes capabilities and architectural decisions, not commercial status).

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

- **Repos:** `github.com/Kashif-Rezwi/better-dev-ui` · `better-dev-api` · **Demo:** `better-dev-ui.vercel.app` (2026-08-22, DL-081: frontend moved from `betterdev.in`; API + `/health` at `better-dev-api.onrender.com`) · **Classification:** personal project (two repos, one platform)
- **Problem & user:** a modern AI chat interface that shows how the AI works — streaming tokens, visible tool calls (web search), conversation management. Design goal (owner-framed, case-study session 2026-08-22): trust through visibility — treat the assistant's reasoning process as a first-class UI element.
- **Contribution:** sole builder across frontend and backend.
- **Key engineering decisions (READMEs + verified code inspection 2026-08-22 — ledger CL-16/CL-21/CL-22/CL-23):** React 19 + Vite 7 + Tailwind 4 + AI SDK v5 UI with smart scrolling, operational modes (Fast `gpt-oss-20b` 500 tokens / Thinking `gpt-oss-120b` 4000 tokens / Auto), optimistic CRUD, documented one-way architecture (`ARCHITECTURE.md`); NestJS 11 API with stateless JWT auth (bcrypt), model-per-role routing on Groq, layered Auto classifier, Tavily web search with server-side citation extraction, SSE streaming with client-disconnect cancellation, multi-modal pipeline (PDF/DOCX/image → pdf-parse, mammoth, tesseract.js OCR + sharp thumbnails → token-budgeted context), provider-parameterized S3-compatible storage with local fallback — **deployed on Supabase Object Storage** (owner 2026-08-22: Cloudflare R2 was the original plan, dropped for cost; R2/s3/Spaces remain documented compatibility targets), composite indexes + `DISTINCT ON` sidebar query, five Jest unit spec files, GitHub Actions CI build verification.
- **Real challenges (source-backed, code-grounded — resolved 2026-08-22, previously "not recorded"):** (1) AI SDK v5 `convertToModelMessages()` strips image content → deliberate post-conversion rehydration step (`FIX` comment in `ai.service.ts`); (2) Groq free tier retired the Llama vision models → server-side OCR text injection fallback + lineup refreshed to `gpt-oss-120b/20b` (rationale recorded in `model.config.ts`); (3) SSE-vs-JSON error conflict → global filter short-circuits on `headersSent`; (4) wasted tokens on disconnected clients → `req.on('close')` cancels the reader; (5) classification cost/latency → heuristic → MD5 cache → timed AI ladder with fail-safe Fast; (6) storage fragmentation (R2 rejects ACLs, Supabase path-style, Spaces CDN) → one parameterized storage service; (7) sidebar N+1 → `DISTINCT ON` batched query; (8) context-window overflow → 32k document-token budget + five-image cap with `[Previous Image Omitted]`. Full narrative: `src/content/work/better-dev.md` ("The hard parts").
- **Verified outcomes:** live platform reachable (UI + API `/health`). No user/scale/adoption claims.
- **Gaps/approvals:** README `[Your Frontend URL]` placeholder is fixed (verified 2026-08-22 — no placeholder remains in either README). READMEs still say "production-ready"/"production-grade" — portfolio copy must not mirror that (CL-16; owner gate 2026-08-22: "production-shaped practices" wording instead, DL-082). Fresh live screenshot / short screen recording of the tool-call flow remains an optional owner asset (OQ-14, OQ-15).

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