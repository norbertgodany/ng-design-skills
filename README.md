# ng-design-skills

A small, growing collection of [Claude Code](https://docs.claude.com/en/docs/claude-code)
skills for **design work** — packaged as a plugin so they're installable in one step and
namespaced cleanly.

## Skills

The three skills are layered: **`design-system-conventions`** is the shared foundation (reuse +
naming rules); **`design-generation`** (invent new) and **`design-parity`** (replicate existing)
are the two workflows that stand on it.

| Skill | Use it for |
| --- | --- |
| **design-generation** | Creating **new** screens, flows, features, or variations in Figma for a product that already has a design system — generative, on-brand design that reuses existing components and interaction patterns. (Greenfield-from-scratch → `frontend-design`; replicating an existing screen → `design-parity`.) |
| **design-parity** | Mirroring/syncing an **existing/shipped** production screen into Figma 1:1 (production → design). Structure audit (auto-layout + semantic naming), 8px-grid spacing, capturing production via Chrome MCP, native-resolution visual cross-check. |
| **design-system-conventions** | Building or extending a design system, or naming/structuring tokens, variables, components, or layers (in Figma or in code). The reuse-first rule and the naming schemes for tokens, components, and layers. Foundation for the other two. |

## Install

```text
/plugin marketplace add norbertgodany/ng-design-skills
/plugin install design-skills@ng-design-skills
```

Once installed, the skills load on demand and appear namespaced, e.g.
`design-skills:design-generation`. Claude invokes them automatically when a task matches a
skill's description; you can also invoke one explicitly with `/design-skills:design-generation`.

## Adding a new skill

1. Create `skills/<skill-name>/SKILL.md` with YAML frontmatter (`name`, `description`).
   The `description` should say **when to use** the skill (start with "Use when…"), not
   summarize its steps.
2. Bump `version` in both `.claude-plugin/plugin.json` and `.claude-plugin/marketplace.json`.
3. Commit and push. Installed users update with `/plugin marketplace update ng-design-skills`.

## Layout

```text
.claude-plugin/
  plugin.json        # plugin manifest
  marketplace.json   # marketplace listing this plugin (source ".")
skills/
  design-generation/
    SKILL.md
  design-parity/
    SKILL.md
  design-system-conventions/
    SKILL.md
```

## License

MIT © Norbert Godany
