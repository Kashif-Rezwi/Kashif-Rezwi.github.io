/**
 * ASCII role frames for the Hero role cycler (typographic ASCII, "Approach A").
 *
 * Shared by the component frontmatter (server-rendered initial frame) and the
 * client-side morph engine, so SSR output and the first JS frame are
 * byte-identical by construction. Every frame has identical dimensions
 * (ASCII_COLS x ASCII_ROWS) so the diagonal wavefront morph can diff cells
 * without any layout shift.
 *
 * The miniFont table intentionally mirrors the Contact ASCII renderer's
 * alphabet (kept in sync by convention); the hero variant renders pure type —
 * no icon rasterizer, no brand colors.
 */

export const ASCII_COLS = 76;
export const ASCII_ROWS = 3;

/** 2-row Unicode block-glyph mini font (same alphabet as Contact.astro). */
const miniFont: Record<string, [string, string]> = {
  A: ['█▀█', '█▀█'],
  B: ['█▄▄', '█▄█'],
  C: ['█▀▀', '█▄▄'],
  D: ['█▀▄', '█▄▀'],
  E: ['█▀▀', '██▄'],
  F: ['█▀▀', '█▀ '],
  G: ['█▀▀', '█▄█'],
  H: ['█ █', '█▀█'],
  I: ['█', '█'],
  J: ['  █', '█▄█'],
  K: ['█▄▀', '█ █'],
  L: ['█  ', '█▄▄'],
  M: ['█▀▄▀█', '█ ▀ █'],
  N: ['█▄ █', '█ ▀█'],
  O: ['█▀█', '█▄█'],
  P: ['█▀█', '█▀▀'],
  Q: ['█▀█', '▀▀█'],
  R: ['█▀█', '█▀▄'],
  S: ['█▀▀', '▄▄█'],
  T: ['▀█▀', ' █ '],
  U: ['█ █', '█▄█'],
  V: ['█ █', ' ▀ '],
  W: ['█ █ █', '▀▄▀▄▀'],
  X: ['▀▄▀', '█ █'],
  Y: ['█▄█', ' █ '],
  Z: ['▀▀█', '█▄▄'],
  '0': ['█▀█', '█▄█'],
  '1': ['▄█', ' █'],
  '2': ['▀▀█', '█▄▄'],
  '3': ['▀▀█', '▄▄█'],
  '4': ['█ █', '▀▀█'],
  '5': ['█▀▀', '▄▄█'],
  '6': ['█▀▀', '█▄█'],
  '7': ['▀▀█', '  █'],
  '8': ['█▀█', '█▄█'],
  '9': ['█▀█', '▀▀█'],
  '.': [' ', '▄'],
  '-': [' ', '▀'],
  '/': [' ▄', '█ '],
  ' ': ['  ', '  '],
};

/** Render one word to two glyph rows (glyphs joined with single spaces). */
function renderWord(word: string): [string, string] {
  const line1: string[] = [];
  const line2: string[] = [];
  for (const ch of word.toUpperCase()) {
    const glyph = miniFont[ch] ?? [' ', ' '];
    line1.push(glyph[0]);
    line2.push(glyph[1]);
  }
  return [line1.join(' '), line2.join(' ')];
}

/**
 * Compose a fixed-size frame: blank optical top row, then the full role title
 * on a single visual line (2 glyph rows), right-padded to ASCII_COLS. Width
 * is validated at build time so an oversized future role can never silently
 * truncate inside the morph grid.
 */
function buildFrame(title: string): string {
  const rows = ['', ...renderWord(title)];
  for (const row of rows) {
    if (row.length > ASCII_COLS) {
      throw new Error(
        `ASCII role frame too wide (${row.length}ch > ${ASCII_COLS}ch): "${title}"`
      );
    }
  }
  return rows.map((row) => row.padEnd(ASCII_COLS, ' ')).join('\n');
}

/** Owner-approved rotating role titles (2026-08-19); canonical headline stays in meta. */
export const ROLE_TITLES = [
  'FULL STACK ENGINEER',
  'MERN STACK ENGINEER',
  'PRODUCT ENGINEER',
  'FRONTEND ENGINEER',
] as const;

export const ROLE_FRAMES: string[] = ROLE_TITLES.map(buildFrame);
