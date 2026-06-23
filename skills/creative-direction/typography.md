# Typography — the craft specifics

The fastest signal of "real design vs. AI default." Pick a **distinctive pairing** and get the
numbers right.

## Pairing
- A display/heading face with character + a clean, legible body face. High contrast between them
  (e.g. editorial serif display + grotesk body; or expressive grotesk display + neutral body).
- Avoid the generic defaults: Inter, Roboto, Open Sans, Lato, system stack — and the current
  monochrome-grotesk safe choices (Geist, Space Grotesk) used reflexively. Choose with intent.

## Scale & rhythm
- One **modular scale ratio**: 1.2 (minor third) for dense UI, 1.25, or 1.333 for editorial.
  Define each step as a token; no one-off sizes. (See `design-system-conventions`.)
- **Leading**: body ~1.4–1.6; display tight ~1.05–1.15.
- **Measure**: body line length 45–75ch — never full-width paragraphs.
- **Tracking**: slight *negative* letter-spacing on large display type; default elsewhere.
- **Tabular figures** for any aligned numbers (tables, stats, the DENSITY-10 cockpit case).

## Hierarchy
- Establish clear levels with size **and** weight (and color/space) — not size alone.
- One H1 per screen; don't skip levels (annotate H1/H2/H3 for handoff — see `qa.md`).

## Glyph coverage & i18n
- Confirm the chosen fonts cover the target locales' characters. Distinctive display fonts often
  have minimal coverage — verify **Latin Extended** at minimum.
- If the product is (or may become) multi-lingual, design text containers with **~35% expansion
  headroom** (German/Finnish run longer), and plan an RTL fallback stack if relevant.
