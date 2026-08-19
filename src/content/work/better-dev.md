---
title: 'Better DEV'
roleLabel: 'Personal project'
period: '2026'
status: 'Live'
summary: 'AI chat platform with streaming UI, visible tool calls, NestJS API with JWT auth and web search integration.'
repo: 'https://github.com/Kashif-Rezwi/better-dev-ui'
demo: 'https://betterdev.in'
tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Vercel AI SDK', 'NestJS', 'PostgreSQL', 'Groq']
order: 4
draft: false
cover: 'better-dev.png'
---

## Overview

For developers who want an AI chat interface that shows how the AI works:
streaming tokens, visible tool calls (web search), and conversation
management. Better DEV is one platform built across two repositories — a
React client (`better-dev-ui`) and a NestJS API (`better-dev-api`).

## What I built

A full-stack AI chat platform, sole-built across frontend and backend:

- **Streaming chat UI** — React 19, TypeScript, Vite, Tailwind CSS, and the
  Vercel AI SDK, with smart auto-scroll, persistent conversation history,
  and per-conversation operational modes (Fast / Thinking / Auto).
- **Visible tool calls** — web-search steps the model takes are surfaced
  inline instead of hidden behind the answer.
- **NestJS API** — JWT authentication, an extensible tool-calling system
  with web search (Tavily), streaming responses, and multi-model support
  through Groq (Llama).
- **PostgreSQL** persistence via TypeORM, with a Docker-based setup.

## Challenges

The project's stated focus is tool-call visibility plus a smooth streaming
experience. Beyond the READMEs, a deeper challenge narrative is not
recorded.

## Outcomes

Live platform reachable. No user, scale, or adoption claims are made.

> Narrative sources: `docs/research/featured-project-research.md` §4 + the
> better-dev-ui / better-dev-api READMEs. Capabilities only; never framed as
> commercial or production-scale.
