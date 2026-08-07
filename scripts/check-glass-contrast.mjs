/**
 * R5-2/R5-3 — On-glass WCAG AA verification.
 *
 * Models how the R5 glass material actually renders over the live backdrop by
 * compositing the token-defined `--glass-bg` (a color-mix over base + accent
 * tint) onto the base palette, then AA-checks every text color that sits ON
 * glass. R5-2: hero identity plate + navbar. R5-3: work cards, testimonials,
 * GitHub card, tech chips, more-projects strip. Checked in both themes.
 *
 * Two backdrops per theme:
 *   1. plain canvas (hero / navbar feel)
 *   2. canvas + ambient `--color-glow` band behind the card sections (R5-3).
 *      The band is an accent radial that peaks at `glow` at its centre then
 *      masks to nothing at its edge. Cards sit *below* the centre, so we model
 *      the region where cards render: ~50% of the centre alpha (7%/5%).
 *
 * Sources of truth: src/styles/global.css @theme / theme overrides + spec §5.1/§5.3.
 * Run: node scripts/check-glass-contrast.mjs
 */
const THEMES = {
  dark: {
    canvas: '#0f0f0f',
    accent: '#6495ed',
    glow: 0.07, // band at card zone ≈ 50% of centre alpha (14% peak → 7%)
    glass: { base: '#0f0f0f', mix: 0.62, tint: 0.08 },
    text: {
      'name/nav-logo (ink)': '#f0f0f0',
      '#bio/nav-link (ink-muted)': '#888888',
      'section-label (accent-text)': '#a9c8ff',
'card title / quote / gh strong (ink)': '#f0f0f0',
      'card summary / chip / gh meta (ink-muted)': '#888888',
      'card period / status / meta (ink-dim-glass)': '#848484',
    },
  },
  light: {
    canvas: '#f8f8f8',
    accent: '#6495ed',
    glow: 0.05, // band zone: 50% of the light centre alpha (10% → 5%)
    glass: { base: '#ffffff', mix: 0.66, tint: 0.06 },
    text: {
      'name/nav (ink)': '#111111',
      'bio/nav-link (ink-muted)': '#555555',
      'section-label (accent-text)': '#2f57ad',
      'card title / quote / gh strong (ink)': '#111111',
      'card summary / chip / gh meta (ink-muted)': '#555555',
      'card period / status / meta (ink-dim-glass)': '#6c6c6c',
    },
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
 * Premultiplied color-mix (CSS Color 4 in srgb) of `base` (opaque) with a
 * translucent accent tint, then alpha-composited over the opaque base:
 *   tint layer premultiplied: rgb = accent*tint, a = tint
 *   out = mix(base, tint) by `mix` →  unpremultiply → composite over base
 */
function glassOverBackdrop(baseHex, accentHex, mix, tint) {
  const base = hexToRgb(baseHex);
  const accent = hexToRgb(accentHex);
  const tintRgb = accent.map((ch) => ch * tint);
  const aOut = 1 * mix + tint * (1 - mix);
  const outRgb = base.map((ch, i) => ch * mix + tintRgb[i] * (1 - mix));
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
for (const [name, theme] of Object.entries(THEMES)) {
  // Backdrop 1: plain canvas.
  const canvasBg = glassOverBackdrop(theme.canvas, theme.accent, theme.glass.mix, theme.glass.tint);
  // Backdrop 2: canvas blended with the glow-band centre (accent @ glow alpha).
  const bandBackdrop = hexToRgb(theme.canvas)
    .map((c, i) => Math.round(c * (1 - theme.glow) + hexToRgb(theme.accent)[i] * theme.glow));
  const bandBg = glassOverBackdrop(
    bandBackdrop.map((v) => v.toString(16).padStart(2, '0')).join(''),
    theme.accent,
    theme.glass.mix,
    theme.glass.tint,
  );

  console.log(`\n${name.toUpperCase()} — composited glass:`);
  console.log(`  over canvas → rgb(${canvasBg.join(', ')}) · over +band → rgb(${bandBg.join(', ')})`);
  for (const [label, fgHex] of Object.entries(theme.text)) {
    const fg = hexToRgb(fgHex);
    const rows = [
      ['canvas', ratio(fg, canvasBg)],
      ['band', ratio(fg, bandBg)],
    ];
    for (const [which, r] of rows) {
      const ok = r >= 4.5;
      if (!ok) failed = true;
      console.log(`${ok ? 'PASS' : 'FAIL'} ${label.padEnd(42)} ${which.padEnd(6)} ${r.toFixed(2)}:1 (min 4.5:1)`);
    }
  }
}

process.exit(failed ? 1 : 0);