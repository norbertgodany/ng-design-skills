# Anti-slop — the AI tells to avoid

"AI slop" is the generic, average-looking output models drift toward. Each item below is a
recognizable tell; ship the **fix**, not the tell.

## Typography
- **Generic default fonts** (Inter, Roboto, Open Sans, Lato, system stack) → pick a distinctive,
  characterful pairing; a display font with personality + a clean body font.
- **One font, one weight everywhere** → establish a real type scale with intentional weight/size
  contrast (see `design-system-conventions` for the scale).

## Color
- **Purple/indigo→pink gradient on white** (the single most overused AI palette) → a committed,
  brand-specific palette in OKLCH.
- **Beige + brass "premium" palette** as a default → only if the brief genuinely calls for it.
- **Timid, evenly-distributed palettes** → one dominant color + a single sharp accent.
- **More than one accent per page** → one accent, used with intent.

## Layout
- **Three equal feature cards in a row** → vary size/weight; lead with a hero, break the grid per
  the VARIANCE dial.
- **Templated rhythm** (every section the same split-header → centered-text) → vary section
  structure; ration repeated patterns.
- **Everything centered** → use alignment and asymmetry deliberately.

## Imagery & icons
- **Emoji as UI icons** → real SVG icons (e.g. a single consistent icon set), sized on the grid.
- **Fake/placeholder screenshots or lorem-ipsum dashboards** → realistic, plausible content.
- **Stocky hero blobs / generic 3D gradients** → atmosphere that fits the chosen direction.

## Copy (when writing UI text)
- **Em-dash overuse** — the highest-frequency LLM signature in generated copy → use sparingly.
- **Vague marketing filler** ("Empower your workflow") → concrete, specific language.

## Current-gen tells (what reads as "AI made this" right now)
These are the 2026 defaults — more dangerous because they *look* modern:
- **Bento grids** as the reflexive layout → use only if genuinely the right structure; vary it.
- **Glassmorphism / backdrop-blur everywhere** → reserve for true overlays, not as a theme.
- **Gradient-filled headings** → solid, confident type; let color live in the palette.
- **The generic SaaS hero** (centered headline + two buttons + a floating dashboard screenshot)
  → find a composition specific to the product.
- **Pure-black `#000` dark mode + one neon accent** → near-black with brand hue, desaturated
  accent (see `color.md`).
- **The Linear/Vercel/Geist clone** (monochrome grotesk on near-black, faint borders, subtle
  glow) → it's now the safe center; commit to something with a point of view.

## The check
Before and after building, scan the design against this list. Any tell present = revise before
shipping. When in doubt, ask: *would a thoughtful brand have made this exact choice, or is it the
statistically safe default?*
