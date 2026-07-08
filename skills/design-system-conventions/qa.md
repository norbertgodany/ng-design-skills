# Quality gate (shared)

The completion checklist every screen must pass — whether built by `creative-direction`,
`design-generation`, or `design-parity`. Any unchecked box = revise before done. For static Figma,
"design" the state and **annotate** behavior that can't live in a frame (motion, dynamic a11y).
Run the gate against the **latest existing render and metadata** — re-shoot only what a fix
changed since (see `SKILL.md` → Quality gate: one evidence chain).

## Accessibility
- [ ] **Text contrast** ≥ 4.5:1 (≥ 3:1 for large text) against its background.
- [ ] **Non-text contrast** ≥ 3:1 — input borders, button outlines, toggle tracks, focus rings,
      and meaningful icons against adjacent colors (WCAG 1.4.11).
- [ ] **Visible focus state** on every interactive element.
- [ ] **Color is never the sole signal** — pair with text / icon / shape.
- [ ] **Touch targets** ≥ 44×44px *(advisory — aim for it; a smaller control with adequate
      spacing/padding around it is acceptable, not a hard block)*.
- [ ] **Heading levels (H1/H2/H3) and landmarks** (main/nav/aside) annotated; icon-only controls
      have an accessible name — so implementers don't guess.
- [ ] **Reduced-motion** behavior annotated per motion element: "reduce speed" for simple
      transitions; "remove entirely" for parallax, large-area motion, or auto-play (vestibular).

## States (design them, don't just hide them)
- [ ] **Empty** state (zero items, first-run) — designed, with a next action.
- [ ] **Error** state for each data-loading surface — message is specific and says what to do,
      not "Something went wrong" (WCAG 3.3.1/3.3.3).
- [ ] **Loading / skeleton** state — layout stays stable, no content jump.
- [ ] **Disabled** state visually distinct — not via color alone (opacity + cursor/icon).

## Forms (when the screen has inputs)
- [ ] Every input has a **persistent visible label** — placeholder text is not a label
      (WCAG 1.3.5 / 2.4.6).
- [ ] **Required fields** marked consistently (asterisk + legend, or equivalent) (WCAG 3.3.2).
- [ ] **Inline validation** appears adjacent to the field, not only on submit.
- [ ] **Character/length limits** shown before the user hits them.

## Responsive
- [ ] Content **reflows at 320px** wide without horizontal scroll (WCAG 1.4.10).
- [ ] Layout adapts intentionally at **375 / 768 / 1024 / 1440** — navigation pattern, column
      count, and density each have a stated behavior per breakpoint.
- [ ] On desktop (1024+), max content width is capped; body line length ≤ ~75ch.
- [ ] Landscape accounted for on 375/768.
- [ ] Touch targets ≥ 44×44 on mobile *(advisory, per Accessibility above)*; hover/precision
      affordances only from 1024+.

## Surfaces & hierarchy
Craft behind these: `applying-the-system.md`.
- [ ] **Cards/panels are distinct from their background** by a deliberate surface step (fill role),
      not the same fill as the parent.
- [ ] **Elevation is consistent** — peers at the same level share a surface role; nesting depth is
      bounded and each deeper step is smaller.
- [ ] **Separation isn't over-stacked** — fill step / border / shadow are prioritized, not all three
      at once.
- [ ] **Nested radius steps down** (inner < outer) so corners stay concentric.

## Figma rendering (effects & frames)
A Figma frame (and auto-layout frame) **clips its children by default** — anything past the frame
edge is cut off. This silently swallows effects that are *supposed* to bleed outward.
- [ ] **Outward effects render in full** — wherever a child has a **drop shadow, outer glow, layer
      blur, or any element that extends past the frame edge**, turn **OFF "Clip content"** on the
      enclosing frame (`clipsContent = false`) so the effect shows instead of being clipped. Set
      this when you build the frame, not only at review.
- [ ] **Clipping stays ON where you actually want a mask** — image crops, rounded-corner content,
      and scroll/overflow regions. Off is for outward effects; on is for intentional masks.
