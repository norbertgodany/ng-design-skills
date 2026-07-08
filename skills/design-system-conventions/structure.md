# Structure & naming — the full reference

`SKILL.md` carries the hard one-liners; this file is the complete craft for naming and layer/frame
structure when you must create something new. (Reuse comes first — see the hard rule in `SKILL.md`.)

## Naming conventions (for elements you must create new)

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

## Layer & frame structure

**Build the layer tree lean — every layer earns its place.** This generalizes design-parity's
"Audit structure before pixels" to *all* design work: generated, greenfield, and replicated.

- **Minimal layers.** No redundant wrapper or group layers; don't bloat the layer panel. Collapse
  single-child pass-through frames; prefer one auto-layout frame over nested groups that do nothing.
- **Auto-layout by default.** Related children (stacked / aligned / gapped) belong in an
  auto-layout frame — no absolute x/y where layout belongs. Use **hug / fill** sizing where content
  should drive size rather than fixed dimensions.
- **Latest Figma conventions.** Build with **variants + component properties** (boolean,
  instance-swap, text), nested instances, and component sets — not duplicated per-state layers.
  Avoid detached instances and rasterized / flattened UI.
- **Componentize repetition.** When no existing component fits and you build new UI, the moment that
  UI repeats (or clearly will), make it a **component** and place **instances** — never copy-paste
  the same frame/layer group twice. Repeated raw frames are a defect: they make every later edit an
  N-place manual change instead of one edit to the main component. Second use = componentize.
- **Clean hierarchy.** Structure mirrors the logical component tree; layers named semantically
  (see above). No orphan vectors where a shape or icon component belongs.
