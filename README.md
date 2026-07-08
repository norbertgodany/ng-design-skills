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
| **design-parity** | Mirroring/syncing an **existing/shipped** production screen into Figma 1:1 (production → design). Structure audit (auto-layout + semantic naming), 8px-grid spacing, **measured capture** (viewport-exact screenshot + computed-CSS spec + verbatim copy + exact assets), **pixel-diff cross-check** (`scripts/pixel-diff.mjs`, numeric mismatch verdict). |
| **design-system-conventions** | The shared **foundation** for the other three. Reuse-first rule, naming schemes, token tiering, the spacing (8px) + type scales, the in-context **apply-with-craft** reference (`applying-the-system.md` — surfaces/elevation, type, color, spacing, radius, sizes, position), and the shared **quality gate** (`qa.md` — accessibility, states, forms, responsive, surfaces). Also owns the **durable-context convention** (`design-context.md` — persist node IDs/URLs, research, and decisions into the target project's `design-context/` so later sessions re-read instead of re-derive). |
| **design-critique** | The adversarial **review** rubric — used before any design is declared done. Evidence-based posture (compute contrast, cross-check sizes against tokens), blocking (coherence / a11y / broken reuse) vs advisory (taste / slop) tiers, PASS/BLOCK verdict. Paired with the **`design-critic`** agent, which runs it in a fresh, independent context. |

**Load `design-system-conventions` alongside any of the other three** — they reference it for the
scales and the quality gate. (Foundation → `creative-direction` / `design-generation` /
`design-parity` all stand on it.)

*`creative-direction` is original work, drawing inspiration from
[`frontend-design`](https://github.com/anthropics/skills/tree/main/skills/frontend-design),
[`taste-skill`](https://github.com/Leonxlnx/taste-skill), and
[`design-taste`](https://github.com/h3nryprod01/design-taste).*

## Install

```text
/plugin marketplace add norbertgodany/ng-design-skills
/plugin install design-skills@ng-design-skills
```

Once installed, the skills load on demand and appear namespaced, e.g.
`design-skills:design-generation`. Claude invokes them automatically when a task matches a
skill's description; you can also invoke one explicitly with `/design-skills:design-generation`.

## Model & effort policy

- Skill **bodies** stay tool-agnostic — no model names, no Claude-specific instructions — so
  they also work on other agents (e.g. Codex).
- Claude-specific tuning lives **only in frontmatter** (`model`, `effort`), which other tools
  ignore gracefully.
- Frontmatter uses **aliases only** (`haiku` / `sonnet` / `opus`) or omits the field
  (= inherit the session model); never full model IDs — those break on other users' setups.
- Rule of thumb: mechanical/lookup work → `haiku`; judgment/review → `sonnet`
  (e.g. `design-critic` runs `sonnet` / `effort: medium`); generation/craft → inherit the
  session model.
- **No orchestrator agent** — the main session already routes; frontmatter is the declarative
  routing table.

## Adding a new skill

1. Create `skills/<skill-name>/SKILL.md` with YAML frontmatter (`name`, `description`).
   The `description` should say **when to use** the skill (start with "Use when…"), not
   summarize its steps.
2. Keep it lean: SKILL.md stays under ~120 lines; move detail into on-demand reference files
   in the skill folder (the `qa.md` / `anti-slop.md` pattern). Only the `description` is
   always in context, so it must carry the "when to use" signal on its own.
3. Bump `version` in both `.claude-plugin/plugin.json` and `.claude-plugin/marketplace.json`.
4. Commit and push. Installed users update with `/plugin marketplace update ng-design-skills`.

## Layout

```text
.claude-plugin/
  plugin.json        # plugin manifest
  marketplace.json   # marketplace listing this plugin (source ".")
agents/
  design-critic.md   # independent adversarial reviewer (runs design-critique)
scripts/
  package.json       # deps for the verification helpers (pixelmatch, pngjs)
  pixel-diff.mjs     # numeric PNG diff used by design-parity's cross-check
skills/
  creative-direction/
    SKILL.md
    anti-slop.md
    color.md
    typography.md
  design-critique/
    SKILL.md
  design-generation/
    SKILL.md
  design-parity/
    SKILL.md
  design-system-conventions/
    SKILL.md
    applying-the-system.md
    design-context.md
    principles.md
    qa.md
    structure.md
```

## License

MIT © Norbert Godany
