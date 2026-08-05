# R3-E — Experience, now, contact, and case-study refinement

**Phase:** R3-E of the rebuild-02 improvement plan (`docs/rebuild-02/02-improvement-implementation-plan.md`).
**Status:** Implemented and verified locally; **owner gate pending.**
**Last updated:** 2026-08-06
**Related:** [07-r3-d-skills-evidence.md](./07-r3-d-skills-evidence.md) · [../../docs/decision-log.md](../../decision-log.md) (DL-027) · [../../docs/project-status.md](../../docs/project-status.md)

---

## 1. Objective

Remove the résumé-paste feel from Experience / Now / Contact while preserving evidence depth, per R3-E scope in the implementation plan. No unsupported outcome, metric, ownership, or seniority implication was introduced.

## 2. What was built (all in `src/pages/index.astro`)

### Experience — Brand Exponents regrouped by product/problem

The previous single four-bullet block is now grouped under small mono sub-headings. Text remains the originally supported bullets, word for word — nothing added, nothing removed.

| Group | Content (unchanged evidence) |
|---|---|
| **Integrations** | Swipe Pages Workflow Builder integration layer: shared configuration, field-mapping, auto-matching across six providers (SendFox, ActiveCampaign, AWeber, Moosend, Salesflare, EngageBay) |
| **CRM** | Swipe One CRM (contacts, leads, properties, email & WhatsApp campaigns) + workflow-builder redesign to guided template-led flow |
| **AI-assisted features** | Natural-language workflow generation + original Swipe Genie guided page generation |
| **Platform & reliability** | Background jobs, queues, webhooks; shared Template Library; reusable infinite-pagination across four surfaces; launch-time production stability |

The accent dot bullet markers were removed in favor of the mono group label for scannability; collaborative verbs ("Contributed to", "Helped build") and approved product names are retained. Nexus and Education entries are unchanged.

### Now (AI journey) — cards replaced with editorial compact rows

The three bordered `now-card` boxes were replaced by a single hairline-separated list of compact rows using the shared icon registry (`sparkles` / `writing` / `learning`) and the same `1px solid var(--color-border)` row separator used across the portfolio (ProjectRow pattern; last row no border). No card box was left decoration-only.

- **Building** — unchanged sentence (AI product engineering + developer tools; the three personal projects remain implied by the work section).
- **Writing** — now shown as concrete evidence: exact article title linked to dev.to, plus source and date.
- **Learning in public** — unchanged (ai-playground / language-playground links).

### Writing — surfaced as evidence

- **Title:** "I Built an AI Agent That Makes Any Landing Page (Next.js App) Multilingual in Minutes"
- **Source:** dev.to (`https://dev.to/kashifrezwi/i-built-an-ai-agent-that-makes-any-nextjs-app-multilingual-in-3-minutes-4bdm`)
- **Date:** Feb 2026 (publishing `2026-02-23T18:11:18Z` — VERIFIED via dev.to API `GET /api/articles/kashifrezwi`)

Displayed in the **Writing** row as: link → title · "LingoAgent build walkthrough on dev.to" · Feb 2026.

### Contact

No change was required. The approved freelance-invitation copy (DL-020) and the single primary email `.btn` CTA with the copy-able secondary plain email text already satisfy the R3-E refinement.

### Case studies — standardization & image audit

All three case studies share the single `src/pages/work/[slug].astro` template, so they already conform to one info order: role/breadcrumb → title → period/status → summary → links → cover → narrative + sidebar → prev/next nav. Audit confirmed every cover renders through the shared template with `alt="${title} project screenshot"` (all three now have cover images: `code-review-agent.png`, `lingo-agent.png`, `perplexity.png`). No per-project divergence or misleading caption was found. Standardization task confirmed complete; no template edit needed.

## 3. Verification

- `npx astro build` succeeds clean (6 pages).
- Rendered DOM checks: `now-row` × 3 (first two have `1px` separator border, last `0`); `now-grid` / `now-card` gone; group labels read *Integrations / CRM / AI-assisted features / Platform & reliability*; writing link + meta render the verified title and "Feb 2026".
- No new live link introduced; the provided dev.to URL was verified canonical via the API.

## 4. Owner gate

Per the plan, the R3-E gate is **owner approval of all changed copy and representative home/case-study captures**. This record captures disposition for review. Commit/production deployment are **not** authorized by this record.

## 5. Acceptance criteria

- [x] No unsupported outcome, metric, ownership, or seniority implication introduced
- [x] Experience scannable (grouped) while readable in depth
- [x] Case studies share one information order (shared template already standard)
- [x] No decorative card added without structural purpose (cards removed)
- [ ] Owner approval of changed copy + captures