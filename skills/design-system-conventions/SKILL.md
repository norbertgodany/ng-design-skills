---
name: design-system-conventions
description: The shared foundation for all design work — use when building or extending a design system, naming/structuring tokens, variables, components, or layers (in Figma or in code), or whenever you need the spacing/type scales or the quality gate. The other design skills (creative-direction, design-generation, design-parity) all stand on this one.
---

# Design-system conventions

**Reuse first; name semantically; build on the scales; pass the gate.** This is the foundation
the other design skills depend on.

## Hard rule — reuse the existing design system

Designs and UI MUST be composed from the system's existing components, variables, and
text-styles. Inspect what already exists first and build from instances. Never redraw a component
that already exists; never hardcode a value that has a token. Create a *new* component or token
ONLY when nothing suitable exists — and when you do, follow the naming + scales below. (Exception:
values the product itself hardcodes, e.g. brand-mandated button colors.)

**Source of truth.** When the product has a tokenized design system in code (e.g. a `tokens.ts`),
those values are the authoritative spec — match them exactly; don't invent parallel values.

## Spacing scale — the 8px grid

For height, width, gap, margin, and padding, work down a tight step ladder: **8 = default**
rhythm (layout, section gaps, padding) → **4 = tight** spacing inside a component (icon↔label,
label↔caption) → **2 = micro**, rare and intentional only when 4 is visibly too much (a dense
badge, a tiny chevron, an optical nudge). Never go below 2 except true sub-pixel cases
(hairlines). Drive gap / margin / padding from **spacing tokens** (e.g. `spacing.md`) rather than
raw numbers; if a 2px step isn't in the scale, add a token (e.g. `xxs`) instead of hardcoding `2`.

The 8px grid is the standard, not a suggestion: an off-grid spacing value is a **likely bug** —
flag and correct it rather than bake it in. (Genuine exceptions, *not* violations: hairline
borders/dividers, icon & glyph sizes, type line-heights, platform safe-area insets, brand-
mandated values.)

## Type scale

Use a **modular scale** with one ratio (1.2 minor-third for dense UI, 1.25, or 1.333 for
editorial) rather than ad-hoc sizes. Define each step as a token (`type/size/sm…display`); never
introduce a one-off size. Pair size with intentional weight contrast. Body line-height ~1.4–1.6;
display tighter (~1.05–1.15) with slight negative letter-spacing on large display type.

## Token tiering — primitive → semantic → component

Three tiers (DTCG / Material 3 / Tokens Studio standard):
1. **Primitive** — raw values, the ramps. One token per step; never hardcode these in a layout:
   - **Color** — `color/blue/500`
   - **Space** — `space/16` (gap, margin, padding; the 8px ladder)
   - **Sizing** — `size/icon/20`, `size/control/40` (element dimensions, distinct from space)
   - **Typography** — `font/family/sans`, `font/weight/600`, `font/size/16`, `line-height/1.5`, `letter-spacing/-0.02`
   - **Border** — `radius/12`, `border-width/1`
   - **Effects** — opacity `opacity/40`; shadow `shadow/md` (composite: x/y offset, blur, spread, color)
   - **Gradient** — `gradient/brand` (composite: stops + direction)
   - **Breakpoint** — `breakpoint/md/768`
2. **Semantic** — intent, *aliased to primitives*: `background-danger` → `color/red/600`.
3. **Component** (optional) — per-component overrides: `button-bg-primary` → `background-brand`.
Build screens against **semantic** tokens; never hardcode primitives in a layout.

## Naming conventions (for elements you must create new — reuse comes first)

Match an existing file's convention when extending one (project rules win — don't rename existing
tokens/components). When genuinely creating something new:
- **Tokens / variables — semantic, `{category}-{role}-{state}`.** Category = where it's used
  (`background`, `text`, `border`); role = intent (`primary`, `danger`, `success`, `brand`);
  state/modifier = variation (`hover`, `disabled`, `subtle`, `inverse`). E.g.
  `background-danger-hover`, `text-primary-inverse`.
- **Components — `Type/Category` for the slash name; put Size/State/Variant in Figma variant
  properties, not in the slash path.** E.g. component `Button/Primary` with variant props
  `size = Large`, `state = Hover` — not `Button/Primary/Large/Hover`. Slashes are for top-level
  categorization only.
- **Layers / elements — `Function-Role-Identifier`.** E.g. `Nav-Header-01`, `Footer-Legal-Links`.

## Quality gate

Every screen — generated, replicated, or greenfield — must pass the shared accessibility / states
/ forms / responsive checklist before it's done. See **`qa.md`**.

## Independent critique gate

Self-review misses what you rationalized — the producer of a design is the worst judge of it.
Before any design is declared done, get an **adversarial, evidence-based** pass: dispatch the
**`design-critic`** agent (it reviews in a fresh context and can't defend your decisions), or load
**`design-critique`** and apply it yourself. Resolve every **BLOCK** finding and re-review until
**PASS** — max 3 rounds, then surface unresolved findings to the user. Advisory findings are
recommendations, not blockers.
