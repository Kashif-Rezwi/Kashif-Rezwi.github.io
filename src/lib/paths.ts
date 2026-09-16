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

/**
 * Single source of truth for the resume (owner decision DL-103, superseding
 * the OQ-05 local-PDF decision): one Google Drive file, referenced by ID.
 * The owner updates the resume by uploading a NEW VERSION to this same file
 * in Drive — the ID never changes, so these URLs never change.
 *
 * - `resumeViewUrl` — Drive preview viewer (opened in a new tab).
 * - `resumeDownloadUrl` — Drive export endpoint; the server responds with
 *   `Content-Disposition: attachment; filename="Kashif-Rezwi-Resume.pdf"`,
 *   so the browser downloads without navigating. This is what makes the
 *   cross-origin "open + download at the same time" behavior possible
 *   (the HTML `download` attribute is ignored cross-origin — see the
 *   click interceptor in src/layouts/Base.astro).
 *
 * Used by the hero CTA, the navbar + About + footer Resume entries, and
 * `/resume/`.
 */
const RESUME_FILE_ID = '13lXkje4gkeewEEel2amsvXtRmjPLmUEG';
export const resumeViewUrl = `https://drive.google.com/file/d/${RESUME_FILE_ID}/view`;
export const resumeDownloadUrl = `https://drive.google.com/uc?export=download&id=${RESUME_FILE_ID}`;