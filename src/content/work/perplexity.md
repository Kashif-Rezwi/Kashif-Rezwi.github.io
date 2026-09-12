---
title: 'Perplexity Clone'
roleLabel: 'Personal project'
period: '2026'
status: 'Live'
summary: 'A from-scratch implementation of the cited-answer-engine pattern: query rewriting, web search, SSE streaming, citation linking, and thread persistence — built solo across a NestJS backend and Next.js frontend.'
repo: 'https://github.com/Kashif-Rezwi/perplexity'
demo: 'https://perplexity-lilac.vercel.app'
tech: ['Next.js', 'NestJS', 'TypeScript', 'Vercel AI SDK', 'TanStack Query', 'Zustand', 'PostgreSQL', 'Prisma', 'Tavily', 'Groq', 'Docker', 'Vercel']
order: 2
draft: false
cover: 'perplexity.png'
---

## Overview

A cited answer engine built from scratch: ask a question, get a web-grounded response with inline `[n]` citations that map to real sources, ask follow-up questions in the same thread, and return to any past research session later. I built the full stack — a NestJS pipeline that orchestrates search and generation, a Next.js frontend that streams the answer token by token and renders citation badges with tooltips, and PostgreSQL persistence for threads, turns, sources, and citations.

V2 is deliberately single-user and runs without authentication, rate limits, or billing guardrails. Those concerns are tracked as V3–V6 roadmap items; the portfolio copy does not claim otherwise.

## What I built

A full-stack monorepo built solo — a NestJS modular monolith, a Next.js frontend, and PostgreSQL persistence — with the engineering decisions that carry the cited-answer-engine idea:

- **The ask pipeline and streaming lifecycle.** Three connected operations run in sequence: for a follow-up, the backend first rewrites the question into a standalone search query using the last three prior turns (truncating context to 300 characters, normalized). Then Tavily fetches up to 5 web results with a configurable timeout. Then the LLM streams the answer back. The SSE event lifecycle is typed: `start → progress (preparing/searching/answering/saving/completed) → delta → final (full payload) → error`. A synchronous JSON fallback exists for clients that can't consume streams.
- **Follow-up query rewriting.** Follow-up questions ("what about performance?") are ambiguous out of context. Before searching, the backend passes the question to the LLM with the last three turns as context and a separate `AI_QUERY_REWRITE_TIMEOUT_MS` budget, producing a standalone query the search engine can resolve independently. This keeps Tavily results accurate for conversational follow-ups.
- **Citation pipeline.** The LLM generates answers with `[n]` markers. The backend parses these markers from the completed Markdown, matches each to a retrieved source by citation number, and only persists the citations that actually appear in the answer text. `citationCount` always equals `citations.length` — there are no orphaned citations. The frontend fetches the full source list via a separate `GET /perplexity/sources?turnId=` endpoint, enabling the Sources tab to lazy-load without blocking the answer render.
- **Turn retry without mutation.** If a turn fails (search timeout, provider error), the user retries it. Instead of overwriting the failed turn, the backend appends a new attempt as a new Turn record. The original failed state is preserved in the conversation timeline. This keeps the full history honest and avoids any partial-update inconsistency.
- **Thread management and persistence.** Threads have full lifecycle: pin/unpin, rename, delete, bulk delete, and cursor-based pagination on the history page. The sidebar has a server-backed history with search, type filter, and sort. When the server is unreachable, a local Zustand store acts as an optimistic/offline fallback. Two PostgreSQL indexes — `(updatedAt, id)` for time-ordered lists and `(isPinned, pinnedAt, id)` for the pinned view — back these queries.
- **Provider-agnostic AI service.** The AI service exposes only generic `AI_*` config keys (model name, timeouts). The Groq SDK client is constructed once in the constructor; all three AI operations (`generateAnswer`, `generateStandaloneSearchQuery`, `generateSuggestedFollowUpQuestions`) call through the same internal interface. A comment in the source notes this boundary explicitly: swapping providers means replacing the SDK client and keeping the public service API unchanged.
- **Docker Compose + deployment documentation.** `compose.yaml` runs the full stack locally with health checks, non-root containers, and automatic database migrations. `_docs/DEPLOYMENT.md` covers independent service deployment, secret management, proxy/SSE buffering configuration, and end-to-end verification steps. The frontend's `/api/*` proxy keeps API keys out of the browser in all deployment configurations.

## Challenges

- **Follow-up questions need context the search engine doesn't have.** A question like "what about the caching layer?" makes no sense to a search API without the prior conversation. Passing the entire conversation history to the rewriter would be expensive and often redundant. I pass the last three turns only, truncating each answer to 300 characters (normalized whitespace). Trade-off: in a very long thread, older context is dropped, which can cause the rewriter to produce an overly general query. The context window is explicit and documented rather than silently unbounded.
- **Citation markers in the answer don't automatically correspond to sources.** The LLM generates `[1]`, `[2]`, etc. inline, but there is no guarantee every marker maps to a retrieved source, or that every retrieved source gets cited. The backend parses the completed `answerMarkdown` for numeric markers, matches them to the source list by citation number, and persists only the matching pairs. Citations without a marker in the text are dropped; markers without a matching source are excluded from the citation list. Trade-off: if the LLM generates a marker for a source outside the retrieved set, the marker stays in the answer text as a dangling `[n]` with no citation behind it.
- **Streaming introduces two places where errors can occur: before and after headers are sent.** Before the stream starts, errors surface as normal HTTP error responses. Once SSE headers are flushed, a crash can't return a JSON error — the stream is already open. The backend closes the stream with a typed `error` event (followed by a `done` acknowledgement), which the frontend treats as a terminal failure. If the error happens during the save phase (after generation), the failure is marked non-retryable; search and answer failures can be retried. Trade-off: the client must parse SSE `error` events separately from HTTP errors, requiring two distinct error-handling paths.
- **All three AI operations can time out independently.** Answer generation, query rewriting, and follow-up suggestion generation each have separate timeout budgets (`AI_ANSWER_TIMEOUT_MS`, `AI_QUERY_REWRITE_TIMEOUT_MS`, `AI_SUGGESTION_TIMEOUT_MS`). Each is wrapped in the same `withTimeout()` utility. If follow-up suggestion generation times out, the API returns an empty array for `suggestedFollowUpQuestions` — the turn itself is not failed. Trade-off: configuring three separate timeouts adds env-var surface area; the defaults are conservative enough that most deployments won't need to tune them.
- **Retry preserves history but increases storage.** Rather than overwriting a failed turn, retry appends a new Turn record. For a thread with many failures, this means multiple Turn rows for what the user experiences as "one exchange." The current schema has no cleanup strategy for failed turns. Trade-off: history integrity is guaranteed, but storage grows with failure count.

## Engineering practices

- **Uniform timeout discipline.** Every external call — Tavily and each AI operation — goes through the same `withTimeout()` utility. If it can fail externally, it has a timeout.
- **Startup environment validation.** The backend validates its environment before accepting traffic and names every missing or malformed variable.
- **One typed API client.** All server interactions on the frontend go through a single typed module — no ad-hoc `fetch` calls scattered through components.
- **Test breadth across the monorepo.** The backend's 18 test files cover the ask orchestrator (happy path, failure, follow-up, stream error, retry), threads repository, sources service, citations helper, AI SDK utilities, route smoke tests, environment validation, and the timeout utility. The frontend's 14 Vitest files cover hooks, the SSE parser, citation badge rendering, history/sidebar utilities, thread export, and Zustand store behavior.

## Outcomes

Live demo at `perplexity-lilac.vercel.app`. The backend runs 18 test files (125 tests); the frontend runs 14 Vitest files (57 tests) — 182 tests total. No CI pipeline yet, which is documented in the README as a known gap. No user or adoption claims — this is a personal project about implementing a pattern correctly, not operating it at scale.

> Sources: `docs/research/featured-project-research.md` §2 + direct code inspection of `Kashif-Rezwi/perplexity` (2026-09-12: README, ARCHITECTURE.md, API.md, ask.service.ts, ai.service.ts, tavily-search.service.ts, prisma/schema.prisma, test directory). All constants, test counts, and architectural decisions verified against current `main` branch. Honest V2-scope framing kept per claim rules.