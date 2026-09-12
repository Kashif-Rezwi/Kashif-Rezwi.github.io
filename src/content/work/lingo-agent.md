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

The frontend is a **Next.js 14 App Router** dashboard with GitHub OAuth (NextAuth.js). Behind it sits a **NestJS 11 API** that orchestrates the entire pipeline. All repository operations execute inside a **throwaway E2B cloud sandbox** — the server never touches the filesystem directly. Translation runs through the **Lingo.dev SDK** (with MCP for dynamic setup instructions). Git operations use **Octokit**. The LLM planner is **Llama 3.3 70B via Groq** (Vercel AI SDK). Job state lives in **Neon PostgreSQL** via Prisma.

Live: frontend at [lingo-agent.vercel.app](https://lingo-agent.vercel.app) · API docs at [lingo-agent.onrender.com/docs](https://lingo-agent.onrender.com/docs)

## The Problem

Adding i18n support to an existing Next.js app is not a translation problem — it is an orchestration problem. The individual steps are simple; the sequence is the bottleneck:

- Reading i18n library documentation and configuring locale routing
- Finding and extracting every hardcoded string across dozens of JSX components
- Writing and maintaining per-locale dictionary files
- Modifying the root layout to inject context providers and a language switcher
- Creating a branch, pushing changes, opening a PR, and verifying the preview

Each step is minutes of routine work; together they add up to 3–5 hours of repetitive setup before any real translation work begins (estimate from project documentation).

LingoAgent automates that entire sequence as a single agent pipeline.

## Architecture

The system is a monorepo with two applications — `client/` (Next.js 14) and `server/` (NestJS 11):

```text
┌─────────────────────────────────────────────────────────────────┐
│                          Browser (User)                         │
│                                                                 │
│   Next.js 14 App Router Client (:3000 / Vercel)                 │
│   ├── /login           (GitHub OAuth via NextAuth.js)           │
│   ├── /dashboard       (Job submission, history, API keys)      │
│   └── /jobs/[jobId]    (Real-time log stream & result card)     │
└────────────────────────────────┬────────────────────────────────┘
                                 │
                                 │ HTTP REST (JSON) + SSE (text/event-stream)
                                 ▼
┌─────────────────────────────────────────────────────────────────┐
│                    NestJS API Server (:3001 / Render)           │
│                                                                 │
│   ├── Global Prefix: /api                                       │
│   ├── Swagger OpenAPI: /docs                                    │
│   ├── AuthGuard: Bearer token validation (GitHub OAuth token)   │
│   ├── AgentController & AgentService                            │
│   ├── JobsService (Prisma ORM 7)                                │
│   └── Per-Job SSE Broker (RxJS ReplaySubject)                   │
└───────┬────────────────┬────────────────┬────────────────┬──────┘
        │                │                │                │
        ▼                ▼                ▼                ▼
┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│  Neon Cloud  │ │  E2B Cloud   │ │  Groq Cloud  │ │  External    │
│  PostgreSQL  │ │  Sandbox     │ │  LLM Engine  │ │  Services    │
│              │ │              │ │              │ │              │
│  - Job state │ │  - git clone │ │  - Llama 3.3 │ │  - Lingo.dev │
│  - Log cache │ │  - Babel AST │ │    70B tool  │ │    SDK & MCP │
│  - Run URLs  │ │  - i18n run  │ │    planner   │ │  - GitHub API│
│              │ │  - Isolated  │ │              │ │  - Vercel API│
└──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘
```

## How It Works: The 7-Step Pipeline

The agent executes 7 tools in strict sequential order. Groq selects which tool to call and with what parameters; the NestJS backend controls all actual execution. To prevent hallucination and tool misordering, the LLM is presented with only **one tool schema at a time** — it cannot issue arbitrary commands, only invoke the single typed tool offered for the current step.

| Step | Tool | What happens |
|------|------|--------------|
| 1 | `clone_repo` | Clone the target repository into a fresh E2B micro-VM sandbox |
| 2 | `detect_framework` | Inspect `package.json`, directory structure, and App Router paths; stop if the project is not Next.js App Router |
| 3 | `analyze_repo` | Inventory JSX files and check for existing i18n configuration; stop if a conflicting i18n library is found |
| 4 | `setup_lingo` | Query the Lingo.dev MCP server for setup instructions, write the zero-dependency i18n runtime (LanguageProvider + TextTranslator + LanguageSwitcher), and inject it into the root layout |
| 5 | `install_and_translate` | Run `npm install`, extract JSX strings via Babel AST, translate via the Lingo.dev SDK, and write `public/locales/*.json` |
| 6 | `commit_and_push` | Commit all changes atomically to a new branch, push, and open a ready-to-merge GitHub PR via Octokit |
| 7 | `trigger_preview` | Trigger a Vercel preview deployment and poll until it is ready |

Every step emits structured log events over SSE. The frontend receives them in real time via a `ReplaySubject<SseEvent>` — late connections or page refreshes replay the full event history.

## Engineering Decisions

**LLM as planner, not executor.** The LLM's job is to select parameters and decide tool sequence — not to write files or run commands. All actual execution is controlled by typed NestJS tools with deterministic inputs and outputs. This means the system behaves predictably: the LLM cannot hallucinate a shell command and have it run.

**E2B sandbox for process isolation.** Every job clones and processes the target repository inside a throwaway E2B cloud micro-VM. The NestJS server never writes to the filesystem. When a job completes, fails, or is cancelled, the server immediately terminates the sandbox VM. A malformed `package.json` postinstall or an unexpectedly large `node_modules` cannot affect the server process.

**Babel loaded from the target repo's node_modules.** The Babel AST extraction script does not ship `@babel/parser` as a server dependency. Instead, it installs the target repo's own dependencies inside the sandbox and dynamically imports `@babel/parser` and `@babel/traverse` from that `node_modules/`. This means the parser version always matches the repo's actual environment — avoiding version mismatch errors across different Next.js versions.

**Regex fallback when Babel fails.** If the dynamic Babel import fails (because the target repo doesn't include Babel, or the import resolution fails), the pipeline falls back to a regex-based text scanner. No translation work is silently dropped.

**RxJS ReplaySubject per job.** Each job gets a dedicated `ReplaySubject<SseEvent>` stored server-side. Subscribers that connect late receive all previously emitted events immediately. A page refresh or network hiccup does not lose pipeline progress — the frontend reconnects and receives the full history without re-running any work.

**MCP for dynamic setup instructions.** Rather than hardcoding Lingo.dev SDK setup steps, the agent queries the Lingo.dev MCP server at runtime to retrieve current configuration instructions. This keeps the pipeline correct against SDK updates without requiring code changes.

## Known Limitations

These are documented, deliberate scope decisions — not bugs:

- **Next.js App Router only.** Pages Router, Vite, and Remix are not supported. The analysis and injection logic is specific to App Router conventions.
- **JSX strings only.** Strings inside JavaScript logic, variables, error messages, and API response payloads are not extracted. The pipeline targets UI-visible text.
- **No CI/CD configuration** in this repository.
- **Personal project.** No production usage, no multi-tenant billing, no SLA claims.

## Outcomes

The system is live at personal scale:

- **Frontend:** [lingo-agent.vercel.app](https://lingo-agent.vercel.app)
- **API (Swagger docs):** [lingo-agent.onrender.com/docs](https://lingo-agent.onrender.com/docs)
- **Written up on dev.to:** ["I built an AI agent that makes any Next.js app multilingual in 3 minutes"](https://dev.to/kashifrezwi/i-built-an-ai-agent-that-makes-any-nextjs-app-multilingual-in-3-minutes-4bdm)

No production-scale metrics, no user counts, no benchmarked performance numbers. The README estimates a ~3-minute automated run vs. 3–5 hours manual — that is the author's stated estimate in project documentation, not an independently measured result.