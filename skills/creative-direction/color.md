# Color — building a real palette (OKLCH)

A direction needs more than "a primary and an accent." Build the full set, in **OKLCH**
(`oklch(L C H)` — Lightness 0–1, Chroma 0–~0.4, Hue 0–360). Example accent:
`oklch(0.65 0.18 250)` = a confident blue (mid lightness, moderate chroma, hue 250).

## What a usable palette includes
- **Dominant / brand** — one hue that owns the product.
- **One accent** — a single sharp call-to-action color, used sparingly. One accent per page.
- **Neutral ramp** — the most-used colors in any UI (backgrounds, surfaces, borders, text):
  ~10 steps. **Tint the neutrals** with a hint of the brand hue (low chroma, ~0.01–0.03) — a
  cheap, high-impact distinctiveness lever vs. pure grays.
- **Semantic state colors** — success / warning / danger / info, each with a text-safe and a
  fill variant.

## The trap: OKLCH lightness ≠ WCAG contrast
Equal `L` values do **not** yield equal contrast, and chroma shifts perceived contrast. Never pick
text/icon colors by lightness alone — **verify every text and non-text pair against the actual
WCAG ratio** in `qa.md` (4.5:1 text, 3:1 large/non-text). An accent that looks bold can still fail.

## Dark theme (construct it, don't invert)
- Elevation via **lightness**, not drop shadows (higher surfaces = lighter).
- **Desaturate accents** on dark backgrounds (reduce chroma) so they don't vibrate.
- Avoid pure `#000` — use a near-black with a touch of the brand hue (e.g. `oklch(0.18 0.01 250)`).
- Re-verify contrast in dark mode separately; light-mode ratios don't carry over.

## Avoid (see also `anti-slop.md`)
- Timid, evenly-distributed palettes — commit to dominance + one accent.
- The purple→pink gradient and beige+brass "premium" defaults.
- Pure-black + single-neon-accent dark mode (a current AI tell).
