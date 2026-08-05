import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Case-study collection ("Selected work" depth pages, /work/<slug>).
 *
 * Schema adopted in Phase 1.0 (roadmap scope). Copy for entries is written in
 * Phase 1.2 strictly from docs/research/featured-project-research.md +
 * docs/research/evidence-ledger.md (claim safety — AGENTS.md §3).
 *
 * One-to-one with the case-study template in
 * docs/strategy/product-and-design-brief.md (Part 2).
 */
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    /** Project display name, e.g. "Code Review Agent" */
    title: z.string(),
    /** Always-visible role label (brief: header row). Never framed as employment. */
    roleLabel: z.enum(['Personal project', 'Hackathon project']),
    /** e.g. "2026 · Active development" — source-backed only */
    period: z.string(),
    /** Short status for cards, e.g. "Live demo" */
    status: z.string(),
    /** One-line problem statement for cards (claim-safe wording from the ledger) */
    summary: z.string(),
    repo: z.string().url(),
    demo: z.string().url().optional(),
    /** Text tags, not logos (brief: no logo walls) */
    tech: z.array(z.string()).min(1),
    /** Sort order on the home page */
    order: z.number().int(),
    /** Keep an entry out of listings while its copy is unfinished */
    draft: z.boolean().default(false),
  }),
});

export const collections = { work };