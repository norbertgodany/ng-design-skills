# ng-design-skills

A small, growing collection of [Claude Code](https://docs.claude.com/en/docs/claude-code)
skills for **design work** — packaged as a plugin so they're installable in one step and
namespaced cleanly.

## Skills

The skills are layered: **`design-system-conventions`** is the shared foundation (reuse + naming
rules); the three workflows stand on it — **`creative-direction`** (invent from a blank canvas),
**`design-generation`** (invent within an existing system), and **`design-parity`** (replicate
existing production).

| Skill | Use it for |
| --- | --- |
| **creative-direction** | **Greenfield** — no design system yet. Establish a brand-new visual direction in Figma (type, color, atmosphere) and lay the foundation. Brief-first, taste dials, anti-slop, principles; delegates the build to `figma-generate-library` / `figma-generate-design`. (A system already exists → `design-generation`.) |
| **design-generation** | **Brownfield** — a design system already exists. Create new on-brand screens/variations that reuse existing components and interaction patterns. (No system yet → `creative-direction`; replicating an existing screen → `design-parity`.) |
| **design-parity** | Mirroring/syncing an **existing/shipped** production screen into Figma 1:1 (production → design). Structure audit (auto-layout + semantic naming), 8px-grid spacing, capturing production via Chrome MCP, native-resolution visual cross-check. |
| **design-system-conventions** | Building or extending a design system, or naming/structuring tokens, variables, components, or layers (in Figma or in code). The reuse-first rule and the naming schemes. Foundation for the other three. |

*`creative-direction` is original work, drawing inspiration from `frontend-design`, `taste-skill`, and `design-taste`.*

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
  creative-direction/
    SKILL.md
    anti-slop.md
    pre-flight.md
  design-generation/
    SKILL.md
  design-parity/
    SKILL.md
  design-system-conventions/
    SKILL.md
```

## License

MIT © Norbert Godany
