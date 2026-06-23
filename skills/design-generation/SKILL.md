---
name: design-generation
description: Use when creating NEW screens, flows, features, or variations in Figma for a product that ALREADY has a design system — generative, on-brand design that reuses existing components and interaction patterns. If NO design system exists yet (blank canvas, establishing the look) use creative-direction; to replicate an existing screen 1:1 use design-parity.
---

# Design generation

**Invent the layout and the flow — not the language. A new screen should read like the next
sentence in the product, not a different book.**

## This skill stands on `design-system-conventions` — load it too

`design-generation` is the *creative workflow*; **`design-system-conventions` is its foundation
and is REQUIRED alongside it** — it owns the reuse rule, naming schemes, the spacing (8px) and
type scales, token tiering, and the shared **quality gate (`qa.md`)**; every generation decision
must obey them. Delegate the Figma build to **`figma-generate-design`** (assemble screens from the
existing system) and **`figma-use`** (Plugin API mechanics). Generation =
`design-system-conventions` (rules + scales + gate) + `figma-generate-design` / `figma-use`
(build) + the creative process below.

## Reuse first — components AND patterns

Default to the system's existing components and established interaction patterns. **Pattern
familiarity is sacred:** people rely on the same controls behaving the same way across screens
(the Familiarity principle). Inventory what the system already solves before drawing anything new.

New components clear a high bar — create one only when it is **distinct, goal-oriented, and
unavoidable.** When you must: build it on-brand following `design-system-conventions` (tokens,
8px grid, naming), and **flag it as net-new** so it can be reviewed and promoted into the system.

## Design principles — the compass (universal; weigh trade-offs with these)

- **Purpose** — make something meaningful; design serves the one thing this must do well.
- **Agency** — let people act their own way; keep them informed; make mistakes recoverable.
- **Responsibility** — act in people's best interest; be transparent; protect their data.
- **Familiarity** — build on what people know; reuse established patterns consistently.
- **Flexibility** — adapt to diverse contexts, inputs, and accessibility needs.
- **Simplicity** — include only what's necessary; establish clear hierarchy; be concise.
- **Craft** — care about every detail; refine spacing, type, motion, and wording.
- **Delight** — decide the emotion to evoke; create defining moments; never decoration over purpose.

## Workflow

1. **Frame the intent** (Purpose). Who is this for, and the one thing it must nail? Don't
   re-create solutions that already exist — define what makes this screen distinct.
2. **Inventory the system.** Find the components, patterns, and tokens that already solve parts
   of the problem, and reuse them.
3. **Compose.** Assemble the new layout from those — on the 8px grid, with auto-layout and bound
   tokens/text-styles (see `design-system-conventions`).
4. **Extend only when unavoidable** (high bar above), on-brand and flagged.
5. **Cover the states.** For each data-loading surface, design the empty, error, loading, and
   disabled variants — not just the filled state.
6. **Pressure-test against the principles** — hierarchy and simplicity first, then familiarity,
   craft, and delight. Cut anything that doesn't earn its place.
7. **Offer variations** when exploring, so trade-offs are visible.
8. **Run the quality gate** — pass `design-system-conventions/qa.md` (a11y, states, forms,
   responsive) before done.

The test: a teammate can't tell it's new — it looks like it was always part of the product.
