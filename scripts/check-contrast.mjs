/**
 * WCAG 2.x contrast verification for the rebuild-03 design tokens
 * (src/styles/global.css). Enforces the current dark + light palettes so CI
 * blocks AA regressions on canvas and surface for all three ink tiers.
 *
 * Keep this script in sync with src/styles/global.css (@theme block).
 * Run: npm run check:contrast
 */

const DARK = { canvas: '#0f0f0f', surface: '#161616' };
const LIGHT = { canvas: '#f8f8f8', surface: '#ffffff' };

/** [label, foreground, background, minimum ratio, hard requirement?] */
const checks = [
  // --- Dark theme (text >= 4.5:1) ---
  ['ink on canvas (dark)', '#f0f0f0', DARK.canvas, 4.5, true],
  ['ink on surface (dark)', '#f0f0f0', DARK.surface, 4.5, true],
  ['ink-muted on canvas (dark)', '#888888', DARK.canvas, 4.5, true],
  ['ink-muted on surface (dark)', '#888888', DARK.surface, 4.5, true],
  ['ink-dim on canvas (dark)', '#808080', DARK.canvas, 4.5, true],
  ['ink-dim on surface (dark)', '#808080', DARK.surface, 4.5, true],
  ['accent-text on canvas (dark)', '#a9c8ff', DARK.canvas, 4.5, true],
  // --- Light theme (text >= 4.5:1) ---
  ['ink on canvas (light)', '#111111', LIGHT.canvas, 4.5, true],
  ['ink on surface (light)', '#111111', LIGHT.surface, 4.5, true],
  ['ink-muted on canvas (light)', '#555555', LIGHT.canvas, 4.5, true],
  ['ink-muted on surface (light)', '#555555', LIGHT.surface, 4.5, true],
  ['ink-dim on canvas (light)', '#707070', LIGHT.canvas, 4.5, true],
  ['ink-dim on surface (light)', '#707070', LIGHT.surface, 4.5, true],
  ['accent-text on canvas (light)', '#2f57ad', LIGHT.canvas, 4.5, true],
  // --- Non-text UI (>= 3:1, WCAG 1.4.11) ---
  ['accent non-text on canvas (dark)', '#6495ed', DARK.canvas, 3.0, true],
  ['accent-text non-text on canvas (light)', '#2f57ad', LIGHT.canvas, 3.0, true],
  // --- Role badge (solid fill, white text — OQ-R5-9; both themes share the fill) ---
  ['white on accent-badge (both)', '#ffffff', '#3f63c9', 4.5, true],
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