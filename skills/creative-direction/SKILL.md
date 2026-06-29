---
name: creative-direction
description: Use when there is NO design system yet and you're establishing a brand-new visual direction in Figma from a blank/near-empty file (greenfield) — deciding the look (type, color, atmosphere) and laying the foundation. If a design system ALREADY exists and you're adding on-brand screens, use design-generation instead; to replicate a shipped production screen 1:1 use design-parity.
---

# Creative direction

**Commit to one intentional direction. Avoid the generic center — taste is deliberate decisions,
not luck.** Models default to safe, average-looking design because that's what dominates training
data; this skill exists to make a bold, coherent choice and execute it with care.

## This skill owns judgment — it delegates the building

`creative-direction` decides the **what and why** (the direction); other skills build the **how**:
- **`design-system-conventions`** — the foundation: reuse rule, naming, the spacing (8px) and
  type scales, token tiering, and the shared **quality gate (`qa.md`)**. REQUIRED.
- **`figma-generate-library`** — lay the foundation (variables/tokens, text & effect styles) and
  build components. Greenfield = empty file, so this comes FIRST.
- **`figma-generate-design`** — assemble the screens from that foundation.
- **`figma-use`** — the Plugin API mechanics (mandatory for every `use_figma` call).

Do not reimplement those mechanics here. This skill is the creative layer on top of them.

## Step 0 — Read the brief first

Before designing, state a **one-line design direction**: who it's for, what it's for, and the one
feeling it must evoke. If you can't name the direction, you're not ready to design.

## The dials (set 1–10 from the brief)

A calibration mechanic. The dials are **gates, not vibes** — each value unlocks concrete choices:

| Dial | 1–3 | 4–7 | 8–10 |
|---|---|---|---|
| **VARIANCE** (layout) | strict symmetry, even grid | mixed weights, one focal break | asymmetry, masonry, grid-breaking, no centered sections |
| **DENSITY** (space) | art-gallery, ≥24px gaps | balanced, 16px rhythm | packed/cockpit, ≤8px gaps, tabular figures |
| **ATMOSPHERE** (depth) | flat, clean fills | subtle shadow/gradient | layered texture, gradient mesh, grain, dramatic shadow |
| **GEOMETRY** (form) | sharp, 0–2px radius | moderate 8–12px radius | soft/pill, ≥16px radius, organic curves |
| **SATURATION** (color energy) | muted, desaturated | confident mid-chroma | electric, high-chroma accents |

Declare all five up front; static frames have no motion, so capture any *intended* motion as build
annotations. Let the dials constrain everything below.

## Commit to a direction

- **Typography** — a distinctive pairing; avoid generic defaults. Full craft (scale ratio,
  leading, measure, tracking, tabular figures, glyph coverage / i18n) → **`typography.md`**.
- **Color** — a full palette in OKLCH (dominant + accent + neutral ramp + state colors + dark
  theme), with the lightness≠contrast trap called out → **`color.md`**.
- **Atmosphere & geometry** — per the ATMOSPHERE and GEOMETRY dials.
- **Spacing** — a clear rhythm on the 8px grid (see `design-system-conventions`).

## Anti-convergence (a mechanism, not a wish)

Don't default to one look. **Generate 2–3 genuinely distinct directions first, then pick the least
generic** that still fits the brief. Have the brief name looks to *avoid*. (An agent has no
cross-session memory, so "don't repeat yourself" only works as an in-session choice.)

## Design principles — the compass (weigh trade-offs with these)

- **Purpose** — make something meaningful; serve the one thing it must do well.
- **Agency** — let people act their own way; keep them informed; make mistakes recoverable.
- **Responsibility** — act in people's best interest; be transparent; protect their data.
- **Familiarity** — build on what people know; use established patterns consistently.
- **Flexibility** — adapt to diverse contexts, inputs, and accessibility needs.
- **Simplicity** — include only what's necessary; establish clear hierarchy; be concise.
- **Craft** — care about every detail; refine spacing, type, and wording.
- **Delight** — decide the emotion to evoke; create defining moments; never decoration over purpose.

## Avoid AI slop

The direction and every screen must dodge the tells in **`anti-slop.md`** — check before and after.

## Build it

1. **Foundation first** — `figma-generate-library`: OKLCH variables, type scale, 8px spacing, core
   components. Name everything per `design-system-conventions` (tiered tokens).
2. **Then screens** — `figma-generate-design`: assemble views from that foundation.

## Done means

- [ ] Passes the shared **quality gate** (`design-system-conventions/qa.md` — a11y, states, forms,
      responsive).
- [ ] Passes the `anti-slop.md` scan.
- [ ] Matches the one-line direction from Step 0; chosen over 2–3 alternatives (anti-convergence).
- [ ] Passes the **independent critique gate** (`design-system-conventions` → dispatch
      `design-critic`); all BLOCK findings resolved.

The test: it feels intentionally designed — like a real brand made it, not an AI.
