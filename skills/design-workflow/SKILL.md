---
name: design-workflow
description: Use when building, editing, or syncing UI screens or components in Figma, or mirroring production into Figma designs (production → design). Covers structure audit (auto-layout + semantic naming), capturing production via Chrome MCP, native-resolution visual cross-check, and verifying designs match production exactly.
---

# Design workflow

**When building or syncing UI in Figma, match production exactly — verify, don't assume.**

**Reuse the design system.** Compose from the file's existing components, variables, and
text-styles — never redraw what already exists, never hardcode what has a token. **REQUIRED:
follow `design-system-conventions`** for the full reuse rule and naming schemes.

**Stay on the 8px grid; use spacing variables.** For height, width, gap, margin, and padding,
work down a tight step ladder: **8 = default** rhythm (layout, section gaps, padding) → **4 =
tight** spacing inside a component (icon↔label, label↔caption) → **2 = micro**, rare and
intentional only when 4 is visibly too much (a dense badge, a tiny chevron, an optical nudge).
Never go below 2 except true sub-pixel cases (hairlines). It keeps whitespace and dimensions
legible and consistent. Wherever possible, drive gap / margin / padding from the design system's
**spacing variables/tokens** (e.g. `spacing.md`) rather than raw numbers — so they stay bound and
themeable; if a 2px step isn't in the scale, add a token (e.g. `xxs`) instead of hardcoding `2`. The 8px grid is the standard, not a suggestion: if a production
screen uses an off-grid spacing value, treat it as a **likely development bug** — flag it and
propose the on-grid value rather than silently replicating the defect into the design. (Genuine
exceptions that are *not* grid violations: hairline borders/dividers, icon & glyph sizes, type
line-heights, platform safe-area insets, and brand-mandated values.)

**Set a goal up front.** When moving production → designs, open a session goal (`/goal`) with
the condition that *the Figma frames look identical to production and the rechecks pass*, so the
harness blocks stopping until the visual cross-check actually succeeds — not just until edits
are made.

Then work in this order:

1. **Capture the target first.** Screenshot the real production screen (Chrome MCP, or the
   running app) before editing Figma. You can't match what you haven't looked at.
2. **Audit structure before pixels.** The Figma layers must be build-true:
   - Auto-layout on every container whose children are related (stacked/aligned/gapped) —
     no absolute x/y where layout belongs.
   - Layers named semantically; hierarchy mirrors the real component tree.
   - Spacing, color, and type bound to **variables / text-styles** — never hardcoded values.
   - Composed from existing design-system instances, not redrawn.
   Fix structural problems before touching visuals.
3. **Build with the system.** New container frames default to a **solid white fill — clear it**
   (`fills = []`) or it bleeds through on dark themes. Apply tokens and text-styles as you go.
4. **Cross-check at native resolution.** Render the Figma frame at its real size (e.g. 390×844)
   and compare it side-by-side with the production screenshot, element by element: spacing,
   color, font family/size/weight (text-style), text content, alignment, and order. Never
   judge from a thumbnail.
5. **Loop until visually indistinguishable.** That is the success criterion.

**Be honest about verification.** When the product has a tokenized design system in code (e.g. a
`tokens.ts`), those values are the authoritative spec and the screenshot confirms the render. If
a screen can't be screenshot-verified (native-only widgets, auth-gated views), say so explicitly
— never claim a 1:1 match you can't actually verify.

The test: a teammate flipping between the production screenshot and the Figma frame can't tell
which is which.
