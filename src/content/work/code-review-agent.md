---
title: 'Code Review Agent'
roleLabel: 'Personal project'
period: '2026'
status: 'Live demo'
summary: 'AI code review with streamed structured feedback, multi-agent PR analysis, ESLint tooling, and RAG over team coding standards.'
repo: 'https://github.com/Kashif-Rezwi/code-review-agent'
demo: 'https://code-review-agent-client.vercel.app'
tech: ['Next.js', 'NestJS', 'TypeScript', 'Vercel AI SDK', 'PostgreSQL', 'pgvector', 'Prisma', 'BullMQ', 'Redis', 'SSE', 'GitHub OAuth']
order: 1
draft: false
cover: 'code-review-agent.png'
---

## Overview

For developers who want fast, structured code review: paste a snippet or point
at a public GitHub PR and get bugs and correctness issues with file/line
locations, security findings with severity, performance and style observations,
plus a 1–10 quality score. Reviews persist and support follow-up chat.

## What I built

A full-stack application — Next.js client and NestJS API — that treats code
review as a structured, streamed pipeline:

- **SSE streaming with replay**, so a late-connecting client still receives the
  full review stream.
- **Multi-agent clustered review**: large PRs are split into domain clusters
  (Auth, DB, API…) that parallel agents review and a synthesizer folds into one
  report.
- **ESLint exposed as a server-side tool** the AI can invoke during review.
- **RAG over uploaded team coding standards** (PDF/text/Markdown), vectorized
  into the review context.
- **BullMQ + Redis** buffer long AI runs off the HTTP request path.
- **GitHub OAuth** as the auth credential; **Postgres** persistence of reviews,
  trace logs, and scores.

## Challenges

The README documents the queue + SSE-replay design and the clustered-review
synthesis as the hard parts. Beyond the README, no deeper narrative is
recorded.

## Outcomes

Live demo reachable; listed on the approved master resume; pinned on GitHub.
No user, scale, or accuracy claims are made for the tool.

> Narrative sources: `docs/research/featured-project-research.md` §1 + evidence
> ledger CL-14. Capabilities only — never framed as SaaS/commercial.