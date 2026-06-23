# Pre-flight checklist

Run this before declaring a greenfield design done. Any unchecked box = revise first.

## Accessibility
- [ ] Text contrast ≥ 4.5:1 (≥ 3:1 for large text) against its background.
- [ ] Visible focus states on every interactive element.
- [ ] Color is never the *only* signal (pair with text/icon/shape).
- [ ] Touch targets ≥ 44×44px.
- [ ] Intended motion is annotated with a `prefers-reduced-motion` fallback note for the build.

## Responsive
- [ ] Layout holds at the standard breakpoints: **375 / 768 / 1024 / 1440**.
- [ ] No fixed widths that overflow small screens; content reflows sensibly.

## Craft
- [ ] All spacing/sizing on the **8px grid** (see `design-system-conventions`).
- [ ] Consistent type scale — no one-off font sizes.
- [ ] One accent color, used intentionally.
- [ ] Real SVG icons from a single set — no emoji.
- [ ] **Every element fully inside its frame** — no bleed, no clipped labels at edges.
- [ ] Color/spacing/type bound to variables & styles, not hardcoded values.

## Direction integrity
- [ ] The result matches the one-line design direction from Step 0.
- [ ] Passes the `anti-slop.md` scan.
- [ ] Doesn't reuse the same look as a previous project (anti-convergence).

The test: it feels intentionally designed — like a real brand made it, not an AI.
