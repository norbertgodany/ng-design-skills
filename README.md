# ng-design-skills

A small, growing collection of [Claude Code](https://docs.claude.com/en/docs/claude-code)
skills for **design work** — packaged as a plugin so they're installable in one step and
namespaced cleanly.

## Skills

| Skill | Use it for |
| --- | --- |
| **design-workflow** | Any UI/design work — building, editing, or syncing screens/components in Figma, mirroring production into designs (production → design), or building/extending a design system. Enforces reuse of the existing design system, a structure audit (auto-layout + semantic naming), capturing production via Chrome MCP, native-resolution visual cross-check, and design-system naming conventions. |

## Install

```text
/plugin marketplace add norbertgodany/ng-design-skills
/plugin install design-skills@ng-design-skills
```

Once installed, the skills load on demand and appear namespaced, e.g.
`design-skills:design-workflow`. Claude invokes them automatically when a task matches a
skill's description; you can also invoke one explicitly with `/design-skills:design-workflow`.

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
  design-workflow/
    SKILL.md
```

## License

MIT © Norbert Godany
