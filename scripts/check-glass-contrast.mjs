/**
 * R5-2/R5-3/R5-5 + R5-8a(T1) — On-glass WCAG AA verification.
 *
 * Models how the R5 glass material actually renders over the live backdrop by
 * compositing the token-defined `--glass-bg` (a color-mix over base + accent
 * tint) onto the base palette, then AA-checks every text color that sits ON
 * glass. Surfaces: navbar, work/testimonial cards, tech chips, GitHub card,
 * more-projects strip, case-study page-hero glass band, sidebar cards, drawer
 * links. Checked in both themes.
 *
 * NOTE (T1, R5-8a): the home-hero identity plate was removed — hero text now
 * sits flat directly over the dot matrix / canvas, so it is validated by the
 * base `check-contrast.mjs` (text on canvas), not by this on-glass script.
 * All surfaces modelled here remain glass and continue to pass.
 *
 * Backdrops per theme:
 *   1. plain canvas (hero / navbar / sidebar feel — nothing behind)
 *   2. canvas + ambient `--color-glow` band at the card zone (R5-3): ~50% of
 *      the centre alpha (7%/5%) — cards sit below the glow's centre.
 *   3. canvas + glow at the FULL centre alpha (14%/10%) — R5-5 case-hero:
 *      the page-hero glass band sits close to the glow peak, not below it.
 *
 * Sources of truth: src/styles/global.css @theme / theme overrides + spec §5.1/§5.3.
 * Run: node scripts/check-glass-contrast.mjs
 */
const THEMES = {
  dark: {
    canvas: '#0f0f0f',
    accent: '#6495ed',
    glow: 0.07, // band at card zone ≈ 50% of centre alpha (14% peak → 7%)
    glowCentre: 0.14, // full peak under the case-study page-hero band (R5-5)
    glass: { base: '#0f0f0f', mix: 0.62, tint: 0.08 },
    text: {
      'case title / nav (ink)': '#f0f0f0',
      'case summary / nav-link (ink-muted)': '#8d8d8d',
      'card title / quote (ink)': '#f0f0f0',
      'card summary / chip / gh meta (ink-muted)': '#8d8d8d',
      'card meta / label / hero period / sep (ink-dim-glass)': '#8b8b8b',
      'section-label / link (accent-text)': '#a9c8ff',
    },
  },
  light: {
    canvas: '#f8f8f8',
    accent: '#6495ed',
    glow: 0.05,
    glowCentre: 0.10,
    glass: { base: '#ffffff', mix: 0.66, tint: 0.06 },
    text: {
      'case title / nav (ink)': '#111111',
      'case summary / nav-link (ink-muted)': '#555555',
      'card title / quote (ink)': '#111111',
      'card summary / chip / gh meta (ink-muted)': '#555555',
      'card meta / label / hero period / sep (ink-dim-glass)': '#6a6a6a',
      'section-label / link (accent-text)': '#2f57ad',
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

function glowBackdrop(backdropHex, accentHex, alpha) {
  return hexToRgb(backdropHex)
    .map((c, i) => Math.round(c * (1 - alpha) + hexToRgb(accentHex)[i] * alpha))
    .map((v) => v.toString(16).padStart(2, '0'))
    .join('');
}

for (const [name, theme] of Object.entries(THEMES)) {
  // Backdrop 1: plain canvas.
  const canvasBg = glassOverBackdrop(theme.canvas, theme.accent, theme.glass.mix, theme.glass.tint);
  // Backdrop 2: canvas blended with the glow band at the CARD zone.
  const bandBg = glassOverBackdrop(
    glowBackdrop(theme.canvas, theme.accent, theme.glow),
    theme.accent,
    theme.glass.mix,
    theme.glass.tint,
  );
  // Backdrop 3 (R5-5 case-hero centre): glow at the FULL centre alpha — the
  // page-hero glass band sits at the glow peak, not below it.
  const centreBg = glassOverBackdrop(
    glowBackdrop(theme.canvas, theme.accent, theme.glowCentre),
    theme.accent,
    theme.glass.mix,
    theme.glass.tint,
  );

  console.log(`\n${name.toUpperCase()} — composited glass:`);
  console.log(
    `  canvas rgb(${canvasBg.join(', ')}) · band rgb(${bandBg.join(', ')}) · centre rgb(${centreBg.join(', ')})`,
  );

  // The three core ink tokens are checked against every backdrop (30 checks
  // total: 3 tokens × 4 backdrops... plain tags that sit over the glow peak).
  const core = ['case title / nav (ink)', 'case summary / nav-link (ink-muted)', 'card meta / label / hero period / sep (ink-dim-glass)'];
  for (const [label, fgHex] of Object.entries(theme.text)) {
    const fg = hexToRgb(fgHex);
    const rows = [['canvas', ratio(fg, canvasBg)], ['band', ratio(fg, bandBg)]];
    if (core.includes(label)) rows.push(['centre', ratio(fg, centreBg)]);
    for (const [which, r] of rows) {
      const ok = r >= 4.5;
      if (!ok) failed = true;
      console.log(`${ok ? 'PASS' : 'FAIL'} ${label.padEnd(42)} ${which.padEnd(6)} ${r.toFixed(2)}:1 (min 4.5:1)`);
    }
  }
}

process.exit(failed ? 1 : 0);