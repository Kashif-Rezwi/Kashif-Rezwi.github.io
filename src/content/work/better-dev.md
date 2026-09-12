---
title: 'Better DEV'
roleLabel: 'Personal project'
period: '2026'
status: 'Live'
summary: 'An AI chat app that shows its work — live tool calls with cited sources, smart model routing, and file uploads that reach the model.'
repo: 'https://github.com/Kashif-Rezwi/better-dev-ui'
demo: 'https://better-dev-ui.vercel.app'
tech: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Vercel AI SDK', 'TanStack Query', 'NestJS', 'SSE', 'PostgreSQL', 'TypeORM', 'Object Storage', 'Tavily', 'Groq']
order: 4
draft: false
cover: 'better-dev.png'
---

## Overview

Better DEV is an AI chat app that shows its work. Answers stream in token by token. When the AI decides to search the web, you see it happen: a status card goes from "searching the web…" to "found N sources", and you can open each source with its favicon and relevance score. The summary comes back with clickable `[1] [2]` citations that link straight to those sources. The idea is simple — trust comes from seeing, and it's a good way to learn how an AI assistant actually works.

It's one platform split across two repos: a React client (`better-dev-ui`) and a NestJS API (`better-dev-api`). I built and run both alone, entirely on free-tier services (Vercel, Render, Neon, and S3-compatible object storage). Showing every step costs tokens and adds latency, so most of the engineering here is about keeping that visibility cheap, fast, and hard to break.

## What I built

A full-stack AI chat app, built alone across the frontend and backend:

- **Streaming chat with visible tool calls.** Before answering, the AI checks whether the question needs a fresh web search — it looks at the last six messages so it doesn't search the same thing twice. Search runs through Tavily with retry and backoff, results come back as source cards, and the summary's `[n]` citations are checked on the server before they reach the UI. A deduplication check on message parts keeps a duplicate tool call from ever rendering twice.
- **Operational Modes.** Each conversation runs in Fast (small model, 500-token cap), Thinking (bigger model, 4000 tokens), or Auto. Auto routes each question through a few cheap steps first: very short questions (under 15 characters) go straight to Fast; a 5-minute cache remembers earlier classifications; only then does an AI classifier run, with a 5-second timeout that falls back to Fast. The routing lives on the server — the client just sends a `modeOverride`.
- **File uploads that actually reach the model.** PDF, DOCX, and image uploads (10 MB cap, strict type check) are tied to your conversation, stored in S3-compatible object storage, and processed in the background — `pending → processing → success/failed` — with pdf-parse, mammoth, and tesseract.js OCR. Long documents are trimmed to a token budget (32k of a 64k context window) so they can't blow up the prompt, and only the last five images are kept — older ones become `[Previous Image Omitted]`.
- **Streaming that cleans up after itself.** Responses stream over SSE. Close the tab and the server cancels generation instead of paying for tokens nobody reads. A limit of five tool iterations per request stops runaway tool loops.
- **The platform underneath.** JWT auth with bcrypt; Postgres via TypeORM with composite indexes; one batched `DISTINCT ON` query for the sidebar instead of a query per conversation; transactions for multi-table writes; one JSON error shape for every failure; and a frontend that follows a written `ARCHITECTURE.md` — one-way dependencies, no `any`, query-key factories, optimistic updates with rollback.

## Challenges

- **The AI SDK silently dropped images.** AI SDK v5's message converter strips image parts, which broke vision entirely. I added a step that re-attaches image data after conversion. Trade-off: it depends on SDK internals, so I re-check it on every SDK upgrade.
- **Groq retired its free vision models.** Instead of paying for vision, I route images through server-side OCR and feed the text to the model. Trade-off: image answers are less sharp than real vision, but the cost stays at zero.
- **You can't send an error mid-stream.** Once SSE headers are out, a normal JSON error would corrupt the stream. The global error filter detects this and backs off; late failures are logged and shown through the stream instead.
- **Closed tabs kept burning tokens.** Generation used to keep running after a user left. Now `req.on('close')` cancels it. Trade-off: there's no resume — an interrupted answer is discarded, not replayed.
- **Classifying every prompt is expensive.** The cheap-checks-first, cache-second, AI-last order above means the expensive path only runs when it can pay for itself. Trade-off: a short but dense question sometimes lands on the small model — it still gets a useful, shorter answer.
- **Every storage provider is a little different.** R2 rejects ACLs, some S3 endpoints need path-style URLs, others want a CDN in front. One storage service with flags (ACL on/off, path-style, CDN URL) replaced per-provider code. Trade-off: provider quirks live in config, not code.
- **Free-tier object storage can pause without warning.** When the service throttles, it returns a non-XML response that the AWS SDK cannot parse — surfacing as a cryptic SDK exception rather than a clear failure. I mapped those responses to actionable 503 errors, added a `GET /health/storage` endpoint with startup and TTL probes so the platform can surface its own storage health, and made thumbnail and chat-image generation best-effort so a storage blip doesn't abort the whole chat response. Trade-off: health checks add a small cold-start cost, and best-effort thumbnails mean some images won't have previews when storage is degraded.

## Engineering practices

- **Adding a tool means adding one class.** Every tool brings its name, description, zod schema, and executor. At startup each one is checked (schema becomes an OpenAPI JSON schema, names follow rules, no duplicates) and wrapped in logging.
- **Everything can fail safely.** A missing search key, failed OCR, a classifier timeout — each falls back to a sensible default instead of an error page.
- **Data stays consistent.** Transactions on multi-table writes, `synchronize:false` in production, and ownership checks before any file or conversation access.
- **Standards are written down.** `ARCHITECTURE.md` on the frontend; `ARCHITECTURE_CURRENT` / `ARCHITECTURE_LEGACY` on the backend; CI that verifies builds (the old SSH deploy pipeline is retired).
- **Honest test scope.** Unit tests cover auth, mode resolution, message utilities, storage, and chat DTOs. The streaming and tool paths, and the frontend, aren't tested yet.

## Outcomes

The platform is live: UI at `better-dev-ui.vercel.app`, API at `better-dev-api.onrender.com` with a `/health` endpoint and a `/health/storage` endpoint added in September 2026. It runs entirely on free tiers — cheap-first routing, cancelled streams, batched queries — so the running cost is zero. The limits are all in code where you can check them: 500 and 4000-token response caps, five tool iterations per request, a 32k document budget, five images per turn, a 5-second classification timeout. There are no user numbers here — this project is about how it's built, not how many people use it.

> Sources: `docs/research/featured-project-research.md` §4 (updated 2026-08-22) + verified code inspection of `Kashif-Rezwi/better-dev-ui` and `Kashif-Rezwi/better-dev-api` (2026-08-22, updated 2026-09-13). Features and decisions only; never framed as commercial or production-scale.
