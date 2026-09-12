---
title: 'LingoAgent'
roleLabel: 'Personal project'
period: '2026'
status: 'Live'
summary: 'Full-stack AI agent pipeline: 7 deterministic tools, E2B cloud sandbox, Babel AST extraction, and real-time SSE — turns a Next.js App Router repo multilingual in one automated run.'
repo: 'https://github.com/Kashif-Rezwi/lingo-agent'
demo: 'https://lingo-agent.vercel.app'
tech: ['TypeScript', 'Next.js', 'NestJS', 'Vercel AI SDK', 'Groq', 'E2B Sandboxes', 'Babel AST', 'Lingo.dev', 'PostgreSQL', 'Prisma', 'RxJS', 'NextAuth.js', 'GitHub API', 'Vercel']
order: 6
draft: false
cover: 'lingo-agent.png'
---

## Overview

LingoAgent is a full-stack AI agent built for **Next.js 14+ App Router** repositories. Point it at a GitHub repository URL, select target languages, and it returns a ready-to-merge pull request with a live Vercel preview — without writing any code yourself.

The system is built as a monorepo split across two applications: a Next.js 14 App Router dashboard with GitHub OAuth (NextAuth.js) deployed on Vercel, and a NestJS 11 orchestration API deployed on Render, backed by Neon PostgreSQL via Prisma. Repository modifications execute inside throwaway E2B cloud micro-VM sandboxes, translation runs through the Lingo.dev SDK with MCP integration, Git operations run via Octokit, and planning is driven by Llama 3.3 70B on Groq via the Vercel AI SDK.

Adding i18n support to an existing web app is not a translation problem — it is an orchestration problem. Reading library documentation, setting up locale routing, discovering and extracting hardcoded JSX strings, writing dictionary JSON files, injecting context providers, and configuring language switchers add up to 3–5 hours of repetitive setup. LingoAgent automates that entire sequence into a deterministic, single-run agent pipeline.

## What I built

A full-stack AI agent pipeline that takes a repository from monolithic English to verified multilingual in one autonomous run:

- **Sequential 7-step execution pipeline.** The agent executes seven typed tools in strict order: cloning the target repo (`clone_repo`), verifying Next.js App Router structure (`detect_framework`), scanning JSX and existing i18n configs (`analyze_repo`), generating and injecting the runtime provider (`setup_lingo`), extracting strings and translating dictionaries (`install_and_translate`), committing and opening a GitHub PR (`commit_and_push`), and polling a live Vercel preview deployment (`trigger_preview`). The LLM is constrained to one typed tool schema per step, preventing hallucination or out-of-order execution.
- **Isolated cloud sandbox execution with E2B.** All repository operations — git clone, npm install, code transformations, and file generation — run inside an ephemeral E2B micro-VM. The NestJS server never touches the host filesystem or executes untrusted third-party code. Sandboxes are immediately destroyed on job completion, failure, or cancellation.
- **Dynamic Babel AST extraction with regex fallback.** Rather than shipping a fixed parser dependency on the server, the extraction script dynamically imports `@babel/parser` and `@babel/traverse` from the target project's own sandbox `node_modules`. This guarantees the parser version matches the target project's Next.js release and syntax features. If dynamic AST import fails, the pipeline automatically falls back to a regex-based text scanner so translations are never silently dropped.
- **Zero-dependency runtime injection.** The agent injects a lightweight, self-contained i18n runtime (`LanguageProvider`, `TextTranslator`, and `LanguageSwitcher`) into the target's root layout. SDK setup instructions are fetched dynamically at runtime from Lingo.dev's MCP server rather than hardcoded into the agent, ensuring the injected configuration matches the latest SDK standards.
- **Real-time SSE event log with replay.** Every phase transition, shell command, and translation batch emits structured events over Server-Sent Events. An in-memory RxJS `ReplaySubject` on the NestJS backend caches the event history per job, so users can refresh the dashboard or reconnect mid-run without losing logs or progress.
- **Automated Git and preview lifecycle.** Changes are committed atomically to a dedicated branch (`lingo/i18n-setup`), pushed to GitHub, and submitted as an open PR via Octokit. The agent then triggers a Vercel preview deployment and monitors build status until ready, returning both the PR and preview URLs on the job completion card.

## Challenges

- **Preventing hallucination and misordering in autonomous pipelines.** In an autonomous pipeline with seven sequential phases, presenting the LLM with all tool schemas at once risks out-of-order execution, skipped checks, or hallucinated arguments. I constrained the planner by presenting only a single typed tool schema corresponding to the current step. The LLM decides the tool arguments and evaluates progression, while the NestJS backend strictly controls execution sequence. Trade-off: the agent cannot dynamically alter its step ordering or invent ad-hoc recovery sequences, but execution order is guaranteed to be 100% deterministic.
- **Executing untrusted repository code safely.** Cloning arbitrary public repositories and running `npm install` exposes the orchestrator to malicious postinstall hooks, filesystem corruption, or resource exhaustion. I isolated all repository operations inside disposable E2B micro-VM sandboxes that are immediately terminated upon completion or failure. Trade-off: spinning up and tearing down isolated cloud VMs adds latency (10–20 seconds per run) and an external infrastructure dependency, but the core API process is completely immune to hostile repo contents.
- **Babel AST parser version mismatches across Next.js releases.** Bundling a fixed `@babel/parser` version in the backend caused syntax parsing errors when target repositories used newer or custom JSX/TSX syntax features. The extraction script dynamically imports Babel directly from the target project's own sandbox `node_modules`, matching the repository's exact compiler environment. A regex scanner serves as a defensive fallback if dynamic imports fail. Trade-off: dynamic imports depend on the target repository having Babel installed, and the regex fallback is less semantically precise for complex expressions, but parsing rarely fails outright.
- **Connection drops during long-running agent execution.** Transforming an entire repository takes several minutes. Standard SSE streams lose in-flight logs if the browser reconnects or encounters network turbulence. I backed each job's event stream with an in-memory RxJS `ReplaySubject` on the server. When the dashboard reconnects, it immediately replays the full historical event buffer from step 1. Trade-off: server memory holds event buffers for active jobs, meaning server restarts lose active stream replay unless persistent event logs (like Redis Streams) are used.
- **Keeping SDK configuration in sync without code churn.** Hardcoding setup code templates inside the agent risked breakage as Lingo.dev evolved its SDK APIs. Rather than static templates, the agent connects to the Lingo.dev MCP server to fetch up-to-date configuration instructions dynamically before injecting providers and translation hooks. Trade-off: runtime setup depends on the availability of the external MCP server, but the codebase requires zero maintenance when SDK conventions update.

## Engineering practices

- **LLM as planner, not executor.** The model selects parameters and confirms step completion; all actual filesystem modifications, AST manipulations, and git operations run through typed, deterministic NestJS services.
- **Defensive fallback chains.** If AST parsing via dynamic Babel imports fails or hits unrecognized syntax, execution drops cleanly to regex pattern extraction rather than aborting the job.
- **Strict environment isolation.** Ephemeral cloud sandboxes ensure zero state leakage between successive job runs, with hard timeouts preventing runaway sandbox compute.
- **Structured observability.** Every pipeline transition produces a typed SSE event payload, giving the user visibility into exact terminal commands and file mutations without exposing raw server internals.
- **Explicit scope boundaries.** The system restricts itself to Next.js App Router repositories and JSX text extraction, declining unsupported frameworks upfront rather than producing corrupted layouts.

## Outcomes

The platform is live: Next.js frontend at `lingo-agent.vercel.app` and NestJS API at `lingo-agent.onrender.com` with Swagger OpenAPI documentation at `/docs`. It was written up on dev.to: ["I built an AI agent that makes any Next.js app multilingual in 3 minutes"](https://dev.to/kashifrezwi/i-built-an-ai-agent-that-makes-any-nextjs-app-multilingual-in-3-minutes-4bdm).

The system operates within deliberate scope limits: Next.js App Router only (Pages Router, Vite, and Remix are excluded), JSX text extraction only (backend strings, dynamic variables, and API responses are omitted), and personal-scale execution without multi-tenant billing or SLAs. There are no production user counts or benchmarked performance metrics — the author's README estimate of ~3 minutes automated vs. 3–5 hours manual is a design benchmark from project documentation, not an independently measured result.

> Sources: `Kashif-Rezwi/lingo-agent` README, repository inspection (`client/` and `server/` workspaces), and author write-up (2026-09-13). Features and decisions only; never framed as commercial or production-scale.