/**
 * Base-path helpers.
 *
 * Production builds serve from `/`; preview builds (companion repo
 * Kashif-Rezwi/portfolio-preview) serve from `/portfolio-preview` —
 * see docs/engineering/branching-and-deploys.md. Astro's BASE_URL trailing
 * slash has varied across versions, so we normalize it here once.
 */
const rawBase = import.meta.env.BASE_URL;

/** Base with a guaranteed trailing slash, e.g. "/" or "/portfolio-preview/". */
export const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

/** Resolve a site-relative path against the current base. */
export function withBase(path: string): string {
  return `${base}${path.replace(/^\/+/, '')}`;
}