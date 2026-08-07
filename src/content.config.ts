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
    /** Optional cover image filename inside src/assets/work/<slug> (README-screenshot
        visuals, owner-approved DL-011). Absent => no cover (honest text-only page). */
    cover: z.string().optional(),
    /** Keep an entry out of case-study listing while its copy is unfinished */
    draft: z.boolean().default(false),
  }),
});

/**
 * LinkedIn testimonials from former teammates/seniors at a previous employer.
 *
 * Source: owner-provided (AGENTS.md §3, VERIFIED via direct owner confirmation +
 * matching LinkedIn URL). Quotes are reproduced verbatim. Photos are the public
 * files committed under public/testimonials/.
 */
const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    /** Recommender's full name as on LinkedIn */
    author: z.string(),
    /** Profession header shown on the testimonial card, e.g. "Lead Full-Stack Engineer" */
    role: z.string(),
    /** Employer context from the owner's prior company */
    company: z.string(),
    /** Relationship note LinkedIn labels, e.g. "Managed Kashif directly" */
    relationship: z.string(),
    /** Publication date as shown on LinkedIn (yyyy-mm-dd) */
    date: z.string(),
    /** Recommender's public LinkedIn profile URL */
    linkedinUrl: z.string().url(),
    /** Avatar served from public/testimonials/, e.g. "/testimonials/thanga_balaji_s.png" */
    avatar: z.string(),
    /** Full verbatim recommendation text */
    quote: z.string(),
    /** Exact phrases (substrings of quote) to highlight inline within the quote */
    highlights: z.array(z.string()).min(1),
    /** Sort order on the home page */
    order: z.number().int(),
  }),
});

export const collections = { work, testimonials };