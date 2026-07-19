# ng-design-skills

A small, growing collection of agent skills for **design work** — packaged as a plugin for
[Claude Code](https://docs.claude.com/en/docs/claude-code) and
[Codex / ChatGPT](https://developers.openai.com/codex/plugins), and usable in any other
SKILL.md-compatible agent (e.g. [Kimi Code](https://moonshotai.github.io/kimi-cli/)).

## Skills

The skills are layered: **`design-system-conventions`** is the shared foundation (reuse + naming
rules); the three workflows stand on it — **`creative-direction`** (invent from a blank canvas),
**`design-generation`** (invent within an existing system), and **`design-parity`** (replicate
existing production).

### Which skill, when

| Situation | Skill |
| --- | --- |
| Blank file, no design system yet — inventing the look (type, color, atmosphere) | **creative-direction** |
| System exists — new screen, flow, feature, or variation | **design-generation** |
| Screen already shipped in production — mirror it into Figma 1:1 | **design-parity** |
| Naming, scales, scope tiers, gates — the foundation | **design-system-conventions** (load alongside the three above) |
| Sign-off review of any deliverable | **design-critique**, via a **design-critic** dispatch |

**No system → creative-direction · system + new → design-generation · already live →
design-parity.** Edge cases: a small tweak to an existing screen stays in its workflow skill at
the **small scope tier** (targeted QA + one scoped critic dispatch); a new screen that should
match a live sibling's look is **generation** (the house-style study covers the resemblance), not
parity; rebuilding a shipped screen with intentional changes = parity for the baseline, then
generation for the changes.

### What each skill covers

| Skill | Use it for |
| --- | --- |
| **creative-direction** | **Greenfield** — no design system yet. Establish a brand-new visual direction in Figma (type, color, atmosphere) and lay the foundation. Brief-first, taste dials, anti-slop, principles; delegates the build to `figma-generate-library` / `figma-generate-design`. |
| **design-generation** | **Brownfield** — a design system already exists. Create new on-brand screens/variations that reuse existing components and interaction patterns. |
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

### Claude Code

```text
/plugin marketplace add norbertgodany/ng-design-skills
/plugin install design-skills@ng-design-skills
```

Once installed, the skills load on demand and appear namespaced, e.g.
`design-skills:design-generation`. Claude invokes them automatically when a task matches a
skill's description; you can also invoke one explicitly with `/design-skills:design-generation`.

### ChatGPT / Codex

```text
codex plugin marketplace add norbertgodany/ng-design-skills
codex plugin add design-skills@ng-design-skills
```

(Or browse with `/plugins` inside Codex after adding the marketplace.) The plugin manifest is
`.codex-plugin/plugin.json`; the marketplace catalog is `.agents/plugins/marketplace.json`.
Skills work in Codex CLI, the ChatGPT desktop app, and the IDE extension.

### Kimi Code

Kimi has no skills-plugin format; it auto-discovers Claude/Codex-style skill folders instead.
Clone the repo and point Kimi at its `skills/` directory (updates are then just `git pull`):

```text
git clone https://github.com/norbertgodany/ng-design-skills
```

Then add the clone's `skills/` path to `extra_skill_dirs` in your Kimi config (or launch with
`--skills-dir <path>/ng-design-skills/skills`). Alternatively, copy or symlink the skill
folders into `~/.kimi/skills/`.

Note: the `design-critic` **subagent** is Claude Code-only. On other agents the critique step
degrades gracefully — `design-system-conventions` already specifies running the
`design-critique` rubric inline when subagents aren't available.

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
3. Bump `version` in `.claude-plugin/plugin.json`, `.claude-plugin/marketplace.json`, and
   `.codex-plugin/plugin.json` (all three stay in lockstep), and add a `CHANGELOG.md` entry.
4. Commit and push. Installed users update with `/plugin marketplace update ng-design-skills`.

## Layout

```text
.claude-plugin/
  plugin.json        # Claude Code plugin manifest
  marketplace.json   # Claude Code marketplace listing this plugin (source ".")
.codex-plugin/
  plugin.json        # Codex / ChatGPT plugin manifest
.agents/
  plugins/
    marketplace.json # Codex marketplace catalog listing this plugin
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
