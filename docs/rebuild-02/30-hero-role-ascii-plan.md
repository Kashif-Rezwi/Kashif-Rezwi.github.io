# Hero Role ASCII Cycler — Implementation Plan

- **Purpose:** Plan for adding an ASCII role cycler to the Hero left content column, morphing through the owner's role titles (owner directive, 2026-08-19).
- **Authority:** Owner request in conversation outranks all documents; this plan follows the R5 Operating Loop (`docs/engineering/engineering-workflow.md`).
- **Date:** 2026-08-19
- **Related:** [29-signal-field-implementation-evidence.md](./29-signal-field-implementation-evidence.md) · `src/sections/Contact.astro` (reference renderer) · `src/components/HeroRoleCycler.astro` (deliverable)

## Objective

Bring the Contact section's ASCII design language into the Hero's left content column: the role line (previously the R4 skewed cornflower badge "Frontend-focused Full Stack Engineer") becomes a block-glyph ASCII strip that auto-cycles through four owner-specified roles:

1. Full Stack Engineer · 2. MERN Stack Engineer · 3. Product Engineer · 4. Frontend Engineer

**Owner revision during implementation:** the full role name renders on a **single visual line** (not stacked over an ENGINEER base row).

## Done-when

- Single-line block-glyph ASCII strip replaces the hero role badge; cycles the 4 roles with the diagonal wavefront morph.
- Fixed frame dimensions → zero CLS; container-driven font sizing → zero horizontal overflow at any viewport.
- Canonical headline preserved: visually-hidden text + title/meta/OG unchanged; SSR initial frame makes no-JS identical.
- Reduced-motion static, click-to-cycle, hover-pause, off-screen/tab-hidden pause.
- `npm run build` 7 pages; `check:contrast` 19/19; `check:glass-contrast` 30/30; console/errors clean.

## Constraints and reasoning

- **Claim safety (AGENTS.md §3):** all four titles owner-specified (tier-1). "Full Stack Engineer" is VERIFIED (CL-01); "Product Engineer" is an approved resume variant; "Frontend Engineer" matches positioning; "MERN Stack Engineer" is stack-descriptive. The canonical site headline "Frontend-focused Full Stack Engineer" (positioning.md §2) stays in title/meta/OG and as visually-hidden text beside the decorative, `aria-hidden` `<pre>`.
- **Signal Field override:** DL-077/078 kept "ASCII singular in Contact". The owner's request supersedes this. Dilution is avoided by making the hero variant a **different species**: pure type in the single theme accent (`--color-accent-text`, AA-safe both themes) vs Contact's icon + per-brand colors.
- **No Contact refactor:** Contact's inline engine is untouched (zero regression surface). The hero needs no SVG rasterizer — the shared frame builder lives in `src/lib/ascii-roles.ts` (miniFont + fixed-dimension frames), imported by both the component frontmatter (SSR initial frame) and the bundled module `<script>` (morph engine), so SSR and the first JS frame are byte-identical.

## Design

- **Frames:** `['', line1, line2]` — blank optical top row + 2 glyph rows; left-aligned, right-padded to **ASCII_COLS = 76** (`MERN STACK ENGINEER` is the widest), **ASCII_ROWS = 3**. Width validated at build time (throws on oversize future roles).
- **Sizing:** wrapper is `container-type: inline-size`; pre is `width: 76ch` with `font-size: min(0.95rem, 2.1cqw)` (76ch ≈ 45.6em ⇒ 2.1cqw always fits the container, ~4% metric safety margin) over a `clamp()` fallback for pre-container-query engines. Height `calc(3 * 1.05em)` → no CLS.
- **Motion:** Contact's 320ms diagonal wavefront morph (precomputed threshold matrix + particle shimmer runes, zero per-frame allocation); recursive-timeout scheduler (3.2s) so manual clicks reset the clock; first switch delayed past the entrance animation.
- **A11y/SEO:** `<pre aria-hidden="true">` + `.visually-hidden` canonical headline (new global utility); non-focusable decorative interaction; auto-updates pause on hover/off-screen/hidden tab; reduced-motion renders a static frame.
