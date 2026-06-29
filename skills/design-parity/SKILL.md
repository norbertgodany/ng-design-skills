---
name: design-parity
description: Use when mirroring or syncing an existing/shipped production screen or component into Figma (production → design) — replicating what already exists so the design matches it 1:1. For inventing NEW screens or variations use design-generation; for token/component naming use design-system-conventions.
---

# Design parity

**When syncing production into Figma, match it exactly — verify, don't assume.**

**Reuse the design system.** Compose from the file's existing components, variables, and
text-styles — never redraw what already exists, never hardcode what has a token. **REQUIRED:
follow `design-system-conventions`** for the full reuse rule and naming schemes.

**Spacing & the 8px grid.** Follow the spacing scale + 8px ladder in `design-system-conventions`.
Parity-specific rule: if a production screen uses an **off-grid spacing value**, treat it as a
*likely development bug* — flag it and propose the on-grid value rather than replicating the
defect. **The same flag-don't-replicate logic applies to accessibility defects:** if production
ships insufficient contrast, a missing focus state, or color-only signals, flag it and propose the
corrected value — match the *intent*, not the bug. (Genuine non-violations: hairline
borders/dividers, icon & glyph sizes, type line-heights, safe-area insets, brand-mandated values.)

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
6. **Run the quality gate.** Apply the accessibility items of `design-system-conventions/qa.md`;
   flag (don't replicate) any production a11y defects per the rule above.
7. **Independent critique before sign-off.** Run the **independent critique gate** in
   `design-system-conventions` (dispatch `design-critic`); resolve all BLOCK findings before done.

**Be honest about verification.** When the product has a tokenized design system in code (e.g. a
`tokens.ts`), those values are the authoritative spec and the screenshot confirms the render. If
a screen can't be screenshot-verified (native-only widgets, auth-gated views), say so explicitly
— never claim a 1:1 match you can't actually verify.

The test: a teammate flipping between the production screenshot and the Figma frame can't tell
which is which.
