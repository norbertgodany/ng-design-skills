# Changelog

Versions are bumped in both `.claude-plugin/plugin.json` and `.claude-plugin/marketplace.json`;
users update with `/plugin marketplace update ng-design-skills`.

## 0.10.0 — 2026-07-08

Speed, quality, and parity overhaul.

- **System cache** (`design-context/system/`): tokens + component inventory derived once,
  reused until stale; house-style capture short-circuits when a prior note covers it.
- **Scope tiers**: small edits run a targeted QA subset + one scoped `design-critic` dispatch;
  the full gate stack is reserved for new screens/flows. Escalate on structural problems.
- **Independent critique in every tier**: the self-review escape hatch is closed — a
  self-applied pass may precede the critic dispatch but never substitutes for it.
- **One evidence chain**: gates share renders forward (cross-check render = QA evidence;
  the critic re-fetches only Figma-derived evidence); batch-then-verify cadence replaces
  render-after-every-edit.
- **design-parity measured capture**: viewport-exact DPR-1 production capture, computed-CSS
  spec (`computed.json`), verbatim copy, exact SVG/image assets, hover/focus state captures.
- **Pixel-diff verdict** (`scripts/pixel-diff.mjs`, pixelmatch + pngjs): cross-check passes on
  mismatch ≤ 2%, replacing "looks identical"; residue reports quote the final %.
- **Critique rigor**: mandatory structural counts (detached instances / absolute-positioned
  children / unbound values, target 0/0/0); `get_metadata` before `get_design_context`.
- **Dedup**: canonical homes for the design principles (`principles.md`), structure/naming
  detail (`structure.md`), off-grid exceptions, type-scale numbers, and anti-slop tells.

## 0.9.0 — 2026-07-08

- Durable design-context convention (`design-context.md`): persist node IDs/URLs, research,
  and decisions to the target project's `design-context/`; read before re-deriving.
- Touch-target rule aligned between `applying-the-system.md` and `qa.md` (advisory).

## 0.8.0 — 2026-07-07

- Model/effort routing policy (frontmatter aliases only, no orchestrator); parity loop capped
  at 3 rounds.
- `applying-the-system.md` craft reference; house-style study step; surfaces QA.
- Figma layer/frame structure quality rules; marginal AA contrast near-miss downgraded to
  advisory.

## 0.6.0 — 2026-06-29

- `design-critique` skill + `design-critic` agent with the shared review gate; critic hardened
  to read-only (Write/Edit denied).

## 0.5.x — 2026-06-23 / 24

- 0.5.0: foundation scales/tiering + shared QA gate, modern anti-slop, dial cascade,
  color/typography references.
- 0.5.1: qa — turn off Clip content for outward drop shadows/effects in Figma frames.

## 0.4.0 — 2026-06-23

- `creative-direction` (greenfield, Figma-first) skill.

## 0.3.0 — 2026-06-23

- `design-generation` skill; `design-workflow` renamed to `design-parity`.

## 0.2.x — 2026-06-23

- 0.2.0: `design-system-conventions` extracted from `design-workflow`.
- 0.2.1–0.2.3: 8px grid as the standard; off-grid production flagged as likely bug; the
  8→4→2 spacing ladder.
