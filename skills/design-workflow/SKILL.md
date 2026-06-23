---
name: design-workflow
description: Use for any UI/design work — building, editing, or syncing screens or components in Figma, mirroring production into designs (production → design), or building/extending a design system (tokens, variables, components, naming). Covers the mandatory reuse-the-design-system rule, structure audit (auto-layout + semantic naming), capturing production via Chrome MCP, native-resolution visual cross-check, and design-system naming conventions.
---

# Design workflow

**When building or syncing UI in Figma — or working with a design system — match production
exactly and reuse the system; verify, don't assume.**

**Hard rule — reuse the existing design system.** Figma designs MUST be composed from the
file's existing components, variables, and text-styles. Inspect what already exists first and
build from instances. Never redraw a component that already exists; never hardcode a value that
has a token. Create a *new* component or token ONLY when nothing suitable exists — and when you
do, follow the naming conventions below. (Exception: values production itself hardcodes, e.g.
brand-mandated button colors.)

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
   - Composed from existing design-system instances (see hard rule above), not redrawn.
   Fix structural problems before touching visuals.
3. **Build with the system.** New container frames default to a **solid white fill — clear it**
   (`fills = []`) or it bleeds through on dark themes. Apply tokens and text-styles as you go.
4. **Cross-check at native resolution.** Render the Figma frame at its real size (e.g. 390×844)
   and compare it side-by-side with the production screenshot, element by element: spacing,
   color, font family/size/weight (text-style), text content, alignment, and order. Never
   judge from a thumbnail.
5. **Loop until visually indistinguishable.** That is the success criterion.

**Source of truth.** When the product has a tokenized design system in code (e.g. a `tokens.ts`),
those values are the authoritative spec and the screenshot confirms the render. If a screen
can't be screenshot-verified (native-only widgets, auth-gated views), say so explicitly —
never claim a 1:1 match you can't actually verify.

**Naming conventions (only for elements you must create new — reuse comes first).** Match an
existing file's convention when extending one (project rules win — don't rename existing
tokens/components). When genuinely creating something new:
- **Tokens / variables — semantic, `{category}-{role}-{state}`.** Category = where it's used
  (`background`, `text`, `border`); role = intent (`primary`, `danger`, `success`, `brand`);
  state/modifier = variation (`hover`, `disabled`, `subtle`, `inverse`). E.g.
  `background-danger-hover`, `text-primary-inverse`.
- **Components — declarative `Type/Category/Variant/State`.** E.g. `Button/Primary/Large/Hover`.
- **Layers / elements — `Function-Role-Identifier`.** E.g. `Nav-Header-01`, `Footer-Legal-Links`.

The test: a teammate flipping between the production screenshot and the Figma frame can't tell
which is which.
