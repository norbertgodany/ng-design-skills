---
name: design-system-conventions
description: The shared foundation for all design work — use when building or extending a design system, naming/structuring tokens, variables, components, or layers (in Figma or in code), or whenever you need the spacing/type scales or the quality gate. The other design skills (creative-direction, design-generation, design-parity) all stand on this one.
---

# Design-system conventions

**Reuse first; name semantically; build on the scales; pass the gate.**

## Hard rule — reuse the existing design system

Designs and UI MUST be composed from the system's existing components, variables, and
text-styles. Inspect what already exists first and build from instances. Never redraw a component
that already exists; never hardcode a value that has a token. Create a *new* component or token
ONLY when nothing suitable exists — and when you do, follow the naming + scales below. (Exception:
values the product itself hardcodes, e.g. brand-mandated button colors.)

**Source of truth.** When the product has a tokenized design system in code (e.g. a `tokens.ts`),
those values are the authoritative spec — match them exactly; don't invent parallel values.

## Durable context — persist findings to `design-context/`

Precise data (Figma node IDs, file keys, canonical URLs, token names, measured values) and
research/decision outcomes MUST be written to the target project's `design-context/` the moment
you obtain them — context gets compacted; files don't. Check `design-context/` **before**
re-deriving anything. Full convention (layout, registry rules, the system cache):
**`design-context.md`**.

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

## Token tiering — primitive → semantic → component (DTCG / Material 3 standard)

1. **Primitive** — raw values, the ramps; one token per step: color `color/blue/500`; space
   `space/16` (the 8px ladder); sizing `size/icon/20`, `size/control/40` (distinct from space);
   typography `font/family/sans`, `font/size/16`, `line-height/1.5`; border `radius/12`,
   `border-width/1`; effects `opacity/40`, `shadow/md` (composite); gradient `gradient/brand`
   (composite); breakpoint `breakpoint/md/768`.
2. **Semantic** — intent, *aliased to primitives*: `background-danger` → `color/red/600`.
3. **Component** (optional) — per-component overrides: `button-bg-primary` → `background-brand`.
Build screens against **semantic** tokens; never hardcode primitives in a layout.

## Naming (new elements only — reuse comes first)

Match the file's existing convention (project rules win). When creating new: **tokens** semantic
`{category}-{role}-{state}` (`background-danger-hover`); **components** `Type/Category` with
Size/State/Variant as Figma variant props (`Button/Primary`, `size = Large` — never
`Button/Primary/Large/Hover`); **layers** `Function-Role-Identifier` (`Nav-Header-01`). Full
patterns + examples: **`structure.md`**.

## Layer & frame structure

**Lean tree — every layer earns its place:** no redundant wrappers; **auto-layout by default**
(no absolute x/y where layout belongs; hug/fill over fixed); **variants + component properties**,
never per-state layer copies or detached/flattened instances; **second use = componentize** —
repeated raw frames are a defect; hierarchy mirrors the logical component tree. Full craft +
rationale: **`structure.md`**.

## Applying the system (in-context craft)

The scales above give you the **ladder**; **`applying-the-system.md`** tells you **which rung** to
pick when composing — surfaces/elevation, typography, color/fill, spacing, radius, sizes, and
position. Load it whenever you're composing against an existing system.

## Scope tiers — right-size the gate

Pick the tier first; unsure = full. **Escalate, never downgrade:** a small-scope run that uncovers
structural problems (detached instance, unbound values, broken auto-layout) becomes full scope.

- **Small** — confined to existing frames: a token value tweak, copy/label change,
  single-component/instance fix, or spacing/style tweak touching ≤2 components on one screen —
  no new screen/component, no restructure. **Gate:** the `qa.md` sections the change touches +
  **one `design-critic` dispatch scoped to the changed node IDs** (on BLOCK: fix, re-check once,
  then surface; parity work: plus one pixel-diff of the affected frame).
- **Full** — new screen/flow/component, layout restructure, multi-screen work, greenfield.
  **Gate:** states coverage + full `qa.md` + the workflow's cross-check loop + the critique gate
  below (max 3 rounds).

## Quality gate — one evidence chain, batched

Every screen — generated, replicated, or greenfield — must pass the shared accessibility / states
/ forms / responsive / surfaces checklist (**`qa.md`**; craft behind it: `applying-the-system.md`)
before it's done.

**Batch, then verify.** Never render after every edit: make all planned edits for a surface, then
run **one** render/verify cycle — each cross-check round has the same shape (fix everything
found, re-render once). Independent captures — shipped-screen studies, state variants,
exploratory variations — run as one batched round of tool calls, never serially.

**Share evidence forward.** The same screen is never re-shot per gate: the final cross-check
render **is** the QA-gate evidence; re-shoot only what a fix changed. Hand the critic the node ID
+ canonical URL plus the production capture, pixel-diff result, and `system/tokens.md` paths; the
critic re-fetches only what comes *from the Figma file under review* (its own screenshot +
structure — that's what independence protects). Critique rounds 2–3 re-verify only changed nodes
and disputed findings.

## Independent critique gate

Self-review misses what you rationalized — the producer of a design is the worst judge of it.
Before any design is declared done, in **every scope tier**, dispatch the **`design-critic`**
agent (fresh context; it can't defend your decisions). A self-applied `design-critique` pass may
*precede* the dispatch but never substitutes for it; only if the environment cannot run subagents
at all, apply `design-critique` yourself **and state in the sign-off that the review was not
independent**. Resolve every **BLOCK** finding and re-review until **PASS** — max 3 rounds (small
scope: one round + one re-check), then surface unresolved findings to the user. Advisory findings
are recommendations, not blockers. When the gate resolves, the **dispatching session persists the
outcome** to `design-context/` (see `design-context.md`); the critic itself never writes.
