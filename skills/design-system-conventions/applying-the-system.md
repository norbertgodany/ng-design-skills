# Applying the system — in-context craft

The scales and tiers (in `SKILL.md`) tell you the **ladder**; this file tells you **which rung**
to pick for a given role or relationship when composing a screen. It is the *application*
counterpart to two other references — don't duplicate them:
- **Establishing** a palette or type system (greenfield): `creative-direction/color.md`,
  `creative-direction/typography.md`.
- **Structure** — scales, token tiering, naming: this skill's `SKILL.md`.

Here the system already exists. Your job is to *apply it with craft* so a new screen reads like
the product's own work. Each section below is a few rules + the common mistake to avoid.

## Surfaces & elevation
- Treat elevation as a **semantic ladder of surface roles**: base/background → raised
  (card/panel) → overlay (menu/modal/toast/popover). Each tier is a *role* mapped to a token, not
  an ad-hoc color.
- A container's **fill communicates its elevation**. A card must sit **one deliberate surface step**
  off its parent — lighter on a dark theme, or a subtle raise on a light one.
- **Separation priority:** surface-fill step *first*, hairline border *second*, shadow *last and
  sparingly*. Don't stack all three — that reads heavy and AI-generated.
- **Nesting discipline:** cap the number of elevation levels; the deeper you nest, the *smaller*
  each step, or the hierarchy turns to mud.
- Common mistake: a card with the **same fill as its background** (invisible card), or an **accent
  color used as a surface** → give it a real surface step, keep accents for emphasis.

## Typography
- Pick the right **step + weight for the role** (display / heading / body / caption / label) off
  the existing type scale — don't eyeball a size.
- Build hierarchy through **weight and size contrast**, not ad-hoc size drift. Reuse a scale step
  before inventing one.
- Common mistake: everything one weight at slightly different sizes → establish real contrast; pull
  from the scale, not a new number. (Scale *establishment* → `creative-direction/typography.md`.)

## Color / fill
- Choose the correct **semantic role** — surface vs. text vs. border vs. accent — and use the
  semantic token, never a raw primitive in a layout.
- **Ration accents:** one accent used with intent per view. Use **state colors for state**
  (danger/success/warning), not decoration.
- Common mistake: reaching for a primitive (`color/blue/500`) where a semantic token
  (`background-brand`) belongs → bind to the semantic role. (Palette *establishment* →
  `creative-direction/color.md`.)

## Spacing
- The **which-step** decision follows the *relationship*, on the 8px ladder (owned by `SKILL.md`):
  section rhythm (default 8-based layout gaps) > component-internal (4, tight: icon↔label) > micro
  (2, rare and intentional).
- Let spacing express grouping: related things closer, unrelated things further apart.
- Common mistake: uniform spacing everywhere → vary it by relationship so hierarchy is legible.

## Radius
- Keep radius **consistent per tier / component family**; match it to the product's geometry
  direction (sharp vs. soft), don't mix at random.
- **Nested-radius rule:** an inner element's radius is *smaller* than its container's (inner <
  outer) so the corners stay concentric.
- Common mistake: a rounded card holding an equally-rounded input that bulges the corner → step the
  inner radius down.

## Sizes
- Size controls, targets, and icons off the **sizing scale** (distinct from spacing):
  `size/control/*`, `size/icon/*`.
- **Touch targets ≥ 44×44px** *(advisory — see `qa.md` Accessibility)*. Optically size icons to
  their neighbours rather than to a raw box.
- Common mistake: icons at raw pixel values that fight the text they sit beside → align to the
  sizing scale and optical weight.

## Position / alignment
- Alignment is a decision: pick an edge and hold it. **Proximity signals relationship** — group by
  spacing, separate by space.
- Prefer **optical** centering over mathematical when a shape's visual mass is off-center (icons,
  glyphs, asymmetric marks).
- Content sits **on** a surface, not floating in space — anchor elements to a container, not to bare
  coordinates.
- Common mistake: absolute x/y where auto-layout belongs, or ragged multi-axis alignment → commit
  to a layout structure and consistent alignment.
