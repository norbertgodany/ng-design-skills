# Typography — the craft specifics

The fastest signal of "real design vs. AI default." Pick a **distinctive pairing** and get the
numbers right.

## Pairing
- A display/heading face with character + a clean, legible body face. High contrast between them
  (e.g. editorial serif display + grotesk body; or expressive grotesk display + neutral body).
- Avoid generic defaults — the font list lives in `anti-slop.md` (Typography). Choose with intent.

## Scale & rhythm
- Scale ratio and leading numbers are owned by `design-system-conventions` (Type scale) — use
  those; define each step as a token, no one-off sizes.
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
