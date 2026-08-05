---
title: 'LingoAgent'
roleLabel: 'Personal project'
period: '2026'
status: 'Live demo'
summary: 'Autonomous i18n agent that turns Next.js App Router apps multilingual — AST extraction, sandboxed execution, auto PR with preview deploy.'
repo: 'https://github.com/Kashif-Rezwi/lingo-agent'
demo: 'https://lingo-agent.vercel.app'
tech: ['TypeScript', 'Babel', 'E2B']
order: 3
draft: false
cover: 'lingo-agent.png'
---

## Overview

For developers who want a Next.js App Router landing page to become
multilingual without hand-wiring i18n: point the agent at a repo, pick
languages, and receive a ready-to-merge pull request.

## What I built

A full-stack agent pipeline (plus a companion demo app used to test injection):

- **Babel AST extraction** targets JSX text nodes and common string attributes
  such as `placeholder`, `title`, `alt`, and `aria-label`.
- **Translation** runs through Lingo.dev, and the agent queries the Lingo.dev
  MCP server for the exact setup instructions.
- Execution happens in an **isolated E2B sandbox**.
- It then **commits to a new branch, opens a GitHub PR, and triggers a Vercel
  preview deployment** in one run.
- Users bring their own API keys to bypass free-tier limits.

## Challenges

Known and documented limitations: App Router only (Pages Router/Vite/Remix
unsupported) and strings inside JS logic (variables, error messages, API
responses) are not extracted — deliberate scope constraints.

## Outcomes

Demo and API reachable; a dev.to article about this exact build is published
(public writing as evidence). No production/commercial claims are made.

> Narrative sources: `docs/research/featured-project-research.md` §3 + evidence
> ledger CL-15. DL-004 condition: personal project only — never framed as
> verified work experience.