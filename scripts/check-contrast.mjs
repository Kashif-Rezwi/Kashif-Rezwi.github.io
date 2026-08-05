/**
 * WCAG 2.x contrast verification for the Phase 1.0 design tokens
 * (docs/strategy/product-and-design-brief.md + architecture acceptance criteria).
 *
 * Keep this script in sync with src/styles/global.css (@theme block).
 * Run: npm run check:contrast
 */

const PAPER = '#f5f5f5';
const SURFACE = '#ffffff';

/** [label, foreground, background, minimum ratio, hard requirement?] */
const checks = [
  // Body text — must be >= 4.5:1 (acceptance criterion)
  ['ink on paper', '#1f1f1f', PAPER, 4.5, true],
  ['ink on surface', '#1f1f1f', SURFACE, 4.5, true],
  ['ink-muted on paper', '#4f4f4f', PAPER, 4.5, true],
  ['ink-muted on surface', '#4f4f4f', SURFACE, 4.5, true],
  // Link text (accent-ink) — >= 4.5:1
  ['accent-ink on paper', '#3862c0', PAPER, 4.5, true],
  ['accent-ink on surface', '#3862c0', SURFACE, 4.5, true],
  ['accent-ink on accent-soft (tags)', '#3862c0', '#e8eefa', 4.5, true],
  // Reversed text (skip link, selection, buttons)
  ['white on accent-ink', '#ffffff', '#3862c0', 4.5, true],
  ['paper on ink', PAPER, '#1f1f1f', 4.5, true],
  // Non-text (focus ring / UI) — >= 3:1 (WCAG 1.4.11); focus rings use accent-ink
  ['accent-ink non-text on paper', '#3862c0', PAPER, 3.0, true],
  // Informational — decorative, not asserted
  ['accent on paper (decorative)', '#6495ed', PAPER, 3.0, false],
  ['hairline on paper (decorative)', '#d9d9d9', PAPER, 1.0, false],
];

function channel(v) {
  return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
}

function luminance(hex) {
  const c = hex.replace('#', '');
  const r = parseInt(c.slice(0, 2), 16) / 255;
  const g = parseInt(c.slice(2, 4), 16) / 255;
  const b = parseInt(c.slice(4, 6), 16) / 255;
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

function ratio(fg, bg) {
  const [l1, l2] = [luminance(fg), luminance(bg)].sort((a, b) => b - a);
  return (l1 + 0.05) / (l2 + 0.05);
}

let failed = false;
for (const [label, fg, bg, min, hard] of checks) {
  const r = ratio(fg, bg);
  const ok = r >= min;
  const tag = ok ? 'PASS' : hard ? 'FAIL' : 'INFO';
  if (!ok && hard) failed = true;
  console.log(
    `${tag.padEnd(4)} ${label.padEnd(32)} ${r.toFixed(2)}:1 (min ${min.toFixed(1)}:1)`,
  );
}

process.exit(failed ? 1 : 0);