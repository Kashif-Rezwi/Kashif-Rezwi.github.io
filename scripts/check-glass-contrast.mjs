/**
 * R5-2 — On-glass WCAG AA verification.
 *
 * Models how the R5 glass material actually renders over the live backdrop by
 * compositing the token-defined `--glass-bg` (a color-mix over canvas + accent
 * tint) onto the base palette, then AA-checks every text color that will sit
 * ON glass this phase (hero identity plate + navbar) in both themes.
 *
 * Source of truth: src/styles/global.css @theme / theme overrides + spec §5.1.
 * Run: node scripts/check-glass-contrast.mjs
 */

const DARK = {
  canvas: '#0f0f0f',
  accent: '#6495ed',
  glass: {
    base: '#0f0f0f',
    mix: 0.62, // color-mix(in srgb, canvas 62%, accent 8%)
    tint: 0.08,
  },
  text: {
    'name/nav-logo (ink)': '#f0f0f0',
    'secondary/bio/nav-link (ink-muted)': '#888888',
    'section-label/gradient (accent-text)': '#a9c8ff',
  },
};

const LIGHT = {
  canvas: '#f8f8f8',
  accent: '#6495ed',
  glass: {
    base: '#ffffff',
    mix: 0.66, // color-mix(in srgb, white 66%, accent 6%)
    tint: 0.06,
  },
  text: {
    '#name/nav-logo (ink)': '#111111',
    '#bio/nav-link (ink-muted)': '#555555',
    '#section-label (accent-text)': '#2f57ad',
  },
};

function hexToRgb(hex) {
  const c = hex.replace('#', '');
  return [
    parseInt(c.slice(0, 2), 16),
    parseInt(c.slice(2, 4), 16),
    parseInt(c.slice(4, 6), 16),
  ];
}

/**
 * Premultiplied color-mix (CCSS Color 4 in srgb) of `base` (opaque) with a
 * translucent accent tint, then alpha-composited over the opaque base:
 *   B = plasma = mix(base, tint)  →  premultiplied rgb & alpha
 *   out = B.rgb*B.a + base.rgb*(1-B.a)
 */
function glassOverBackdrop(baseHex, accentHex, mix, tint) {
  const base = hexToRgb(baseHex);
  const accent = hexToRgb(accentHex);
  // tint layer premultiplied: rgb = accent*tint, a = tint
  const tintRgb = accent.map((ch) => ch * tint);
  // premultiplied mix of base (a=1) with tint (a=tint)
  const aOut = 1 * mix + tint * (1 - mix);
  const outRgb = base.map((ch, i) => ch * mix + tintRgb[i] * (1 - mix));
  // unpremultiply then alpha-compósite over opaque base
  const glass = outRgb.map((ch) => (aOut > 0 ? ch / aOut : 0));
  return glass.map((ch, i) => Math.round(ch * aOut + base[i] * (1 - aOut)));
}

function channel(v) {
  return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
}
function luminance(rgb) {
  return (
    0.2126 * channel(rgb[0] / 255) +
    0.7152 * channel(rgb[1] / 255) +
    0.0722 * channel(rgb[2] / 255)
  );
}
function ratio(fg, bg) {
  const [l1, l2] = [luminance(fg), luminance(bg)].sort((a, b) => b - a);
  return (l1 + 0.05) / (l2 + 0.05);
}

let failed = false;
for (const [name, theme] of [
  ['DARK', DARK],
  ['LIGHT', LIGHT],
]) {
  const bg = glassOverBackdrop(theme.glass.base, theme.accent, theme.glass.mix, theme.glass.tint);
  console.log(`\n${name} theme — glass over ${theme.canvas} → rgb(${bg.join(', ')})`);
  for (const [label, fgHex] of Object.entries(theme.text)) {
    const fg = hexToRgb(fgHex);
    const r = ratio(fg, bg);
    const ok = r >= 4.5;
    if (!ok) failed = true;
    console.log(`${ok ? 'PASS' : 'FAIL'} ${label.padEnd(34)} ${r.toFixed(2)}:1 (min 4.5:1)`);
  }
}

process.exit(failed ? 1 : 0);