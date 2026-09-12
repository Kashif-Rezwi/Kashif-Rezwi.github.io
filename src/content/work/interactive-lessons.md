---
title: 'Interactive Lessons'
roleLabel: 'Personal project'
period: '2026'
status: 'In progress'
summary: 'A documentation-first, agent-governed pipeline called Learning OS that turns technical course material into rigorously evaluated, interactive HTML lessons — every run recorded, every decision in an ADR.'
repo: 'https://github.com/Kashif-Rezwi/interactive-lessons'
tech: ['Python', 'Markdown', 'HTML']
order: 5
draft: false
---

## Overview

Interactive Lessons is a system for turning raw technical course material into interactive, rigorously evaluated HTML lessons. It is not a web app: it lives as a documentation-first repository called **Learning OS**, where the documentation is the product. The pipeline's contracts, workflows, and quality gates are written down before implementation exists, so humans and AI agents share one durable source of truth for how a lesson gets built and what "good" means — every generation step, evaluation, and decision is traceable to written records.

The repository is at **Stage 2 — reproducible workflow automation** on its capability roadmap. The workflow already produces real artifacts: a governed P0–P6 lesson-generation pipeline has generated 13 interactive lesson versions across three classes of an AIML-4 module, each with full lineage from source capture to evaluation. The current reference candidate is a self-contained, dependency-free interactive HTML lesson, versioned against a frozen benchmark.

## What I built

- **A governed P0–P6 lesson-generation workflow.** Each class runs its own pipeline: source package → concept model → learning plan → experience specification → generation → evaluation. Gate P5 runs six audits plus an adversarial gate (coverage, math, dependency order, interaction, accessibility, rendered output); P6 produces the evaluation record, then human release judgment, then curated memory. A stage may not consume an unapproved upstream artifact, and generation cannot self-certify release.

- **Append-only evidence records.** `records/` holds 69 cross-linked records: 12 generation runs, 13 evaluations, 11 learning plans, 11 experience specifications, 10 concept models, 6 curated memory items, and 1 frozen benchmark. Every claim about a lesson traces back to a generation-run ledger and an evaluation record.

- **Architecture decision records and versioned prompt cards.** 13 ADRs capture durable choices — including the benchmark/artifact-change protocol and the canvas engineering standard that fixed a responsiveness-and-design drift regression class — plus an executable QA rubric and a lesson-pattern catalog. Seven versioned prompt cards (`@0.5.0` → `@0.6.0`) make the generator's contract evolve deliberately rather than silently.

- **An autonomous agent skill.** The workflow is encoded as an agent skill at `.agents/skills/generate-lesson/SKILL.md` that executes generation end to end. AI agents are first-class participants, but high-impact decisions remain human-reviewable.

- **Dependency-free verification tooling.** Two Python 3.8+ standard-library tools (no installs): `check-repo.py` enforces repository hygiene — links, provenance hashes, rubric weights, status vocabularies, naming, ADR index — and must exit 0 before any commit to governed surfaces; `verify-candidate.py` mechanically verifies a generated lesson candidate.

## Challenges

- **Documentation precedes implementation.** A proposed code change needs a linked decision, contract, and acceptance criteria before it may land — the repository deliberately contains no learner-facing application until the roadmap authorizes it. This makes the repo slower to "ship" but keeps every capability grounded in a written intent that agents and humans share.

- **Verification must not trust itself.** Generation inside an AI loop cannot self-certify its own output. Every candidate must pass six audits plus an adversarial gate, an evaluation record, and then human release judgment before anything is considered releasable. The latest reference candidate closed `private-pilot-complete` under a non-independent review — it is explicitly not a public release, benchmark result, or efficacy claim.

- **Quality enforced locally, not by CI.** There is no CI pipeline yet — documented in the README as a known gap. Quality is instead enforced by the repository checker (`check-repo.py` blocks commits to governed surfaces), the mechanical candidate verifier, and a live-browser rendered-output audit. It works, but it depends on contributor discipline.

- **Honest boundaries.** No license has been selected yet (default copyright applies until one is added), and there is no public demo or hosted deployment. The project's credibility comes from its evidence trail, not from user-facing exports.

## Engineering practices

- **Evidence traceability.** Claims, scores, outputs, and decisions must be traceable to their evidence. A candidate's lineage runs from source-capture record → concept model → learning plan → experience specification → generation-run ledger → evaluation, all cross-linked.
- **Append-only records.** Records are append-only; durable architectural choices become ADRs (13 to date, covering the content-package convention, benchmark definition and artifact-change protocol, and the canvas engineering standard).
- **Versioned prompts as contracts.** Prompt cards carry versions, and changes to them are themselves ADR-tracked — so a generation behavior change is a deliberate, reviewable event rather than a silent drift.
- **Reproducible automation.** The agent skill executes the workflow end to end; the v10 reference run was executed as a full-verification reproduction under an unchanged prompt card, repairing a known defect class while reproducing the validated design.

## Outcomes

The pipeline is real and measurable inside its own guardrails: 13 lesson versions across three AIML-4 classes, 69 cross-linked evidence records, 13 ADRs, 7 versioned prompt cards, and two dependency-free verification tools. The current reference candidate v10 completed its full-verification reproduction run and closed `private-pilot-complete` under non-independent review.

There are deliberately no public credentials yet: no license selected, no live demo, no release or efficacy claims. The project is engineering a trustworthy generation pipeline first, with product implementation and platform governance as explicit roadmap stages that only proceed when the foundation documents authorize them.

> Sources: `Kashif-Rezwi/interactive-lessons` README, module README, and repo inspection (2026-09-13). Features and decisions only; never framed as commercial, released, or production-scale.
- **Lessons that ship as static files.** Generated lessons are self-contained HTML with no build step and no external dependencies — they open directly in a browser. The current reference candidate, `linear-algebra-foundations-v10.html`, is a full-verification reproduction run that completed live rendered-output verification and repaired four inherited defect classes (title identity, per-element slider encapsulation, body-font floor, 320px overflow).