---
name: design-system-conventions
description: Use when building or extending a design system, or naming/structuring design tokens, variables, components, or layers — in Figma or in code (e.g. a tokens file). Covers the reuse-first rule and the naming schemes for tokens, components, and layers.
---

# Design-system conventions

**Reuse first; name semantically.**

**Hard rule — reuse the existing design system.** Designs and UI MUST be composed from the
system's existing components, variables, and text-styles. Inspect what already exists first and
build from instances. Never redraw a component that already exists; never hardcode a value that
has a token. Create a *new* component or token ONLY when nothing suitable exists — and when you
do, follow the naming conventions below. (Exception: values the product itself hardcodes, e.g.
brand-mandated button colors.)

**Source of truth.** When the product has a tokenized design system in code (e.g. a `tokens.ts`),
those values are the authoritative spec — match them exactly; don't invent parallel values.

**Naming conventions (only for elements you must create new — reuse comes first).** Match an
existing file's convention when extending one (project rules win — don't rename existing
tokens/components). When genuinely creating something new:
- **Tokens / variables — semantic, `{category}-{role}-{state}`.** Category = where it's used
  (`background`, `text`, `border`); role = intent (`primary`, `danger`, `success`, `brand`);
  state/modifier = variation (`hover`, `disabled`, `subtle`, `inverse`). E.g.
  `background-danger-hover`, `text-primary-inverse`.
- **Components — declarative `Type/Category/Variant/State`.** E.g. `Button/Primary/Large/Hover`.
- **Layers / elements — `Function-Role-Identifier`.** E.g. `Nav-Header-01`, `Footer-Legal-Links`.
