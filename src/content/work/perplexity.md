---
title: 'Perplexity Clone'
roleLabel: 'Personal project'
period: '2026'
status: 'Live demo'
summary: 'Cited AI answer engine — web-grounded answers with citations and threaded follow-ups, with an honest single-user V2 scope.'
repo: 'https://github.com/Kashif-Rezwi/perplexity'
demo: 'https://perplexity-lilac.vercel.app'
tech: ['Next.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tavily', 'Groq / OpenAI', 'Vercel']
order: 2
draft: false
cover: 'perplexity.png'
---

## Overview

A Perplexity-inspired answer engine: ask a question and get web-grounded
answers with citations and threaded follow-ups.

## What I built

A full-stack monorepo:

- **Backend** — a NestJS modular monolith (TypeScript, PostgreSQL, Prisma) that
  owns the API, persistence, Tavily web-search integration, and
  provider-agnostic answer generation (OpenAI or Groq).
- **Frontend** — a Next.js + Tailwind responsive two-column thread UI with
  custom markdown parsing that renders citation badges.
- **Docker Compose** shapes a production-like local environment, and a separate
  deployment guide covers migrations, secrets, networking, and verification.

## Challenges

V2 is deliberately single-user and local — no auth, no user-scoped data, no
rate limits, and no multi-tenant guardrails; those are tracked as later
productization work. That explicit scoping is itself an engineering decision.

## Outcomes

Live demo reachable; listed on the approved master resume. No
production/commercial claims are made.

> Narrative sources: `docs/research/featured-project-research.md` §2 + evidence
> ledger CL-13. Honest V2-scope framing kept.