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
- **`figma-generate-library`** — lay the foundation (variables/tokens, text & effect styles) and
  build components. Greenfield = empty file, so this comes FIRST.
- **`figma-generate-design`** — assemble the screens from that foundation.
- **`figma-use`** — the Plugin API mechanics (mandatory for every `use_figma` call).
- **`design-system-conventions`** — naming schemes + the 8px-grid spacing rules for everything
  you create.

Do not reimplement those mechanics here. This skill is the creative layer on top of them.

## Step 0 — Read the brief first

Before designing, state a **one-line design direction**: who it's for, what it's for, and the one
feeling it must evoke. If you can't name the direction, you're not ready to design. Everything
below flows from this read.

## The three dials (set 1–10 from the brief)

A calibration mechanic (inspired by Leon Lin's `taste-skill`, re-fit for static Figma). The dials
are gates, not vibes — they decide which layout/spacing/treatment families you may use.

- **VARIANCE** — 1 = strict symmetry & even grids · 10 = asymmetry, grid-breaking, fractional/
  masonry layouts.
- **DENSITY** — 1 = art-gallery, generous whitespace · 10 = packed, data-dense, cockpit.
- **ATMOSPHERE** — 1 = flat & clean · 10 = layered depth: texture, gradient mesh, shadow, grain.
  (Static frames have no motion — capture any *intended* motion as build annotations for later.)

Declare the three values up front; let them constrain the choices below.

## Commit to a direction

- **Typography** — a distinctive pairing (display + body). Avoid the generic defaults (Inter,
  Roboto, Open Sans, Lato, system fonts). Pair high-contrast: editorial serif + grotesk, etc.
- **Color** — one dominant color + a single sharp accent, defined in **OKLCH** for perceptual
  consistency. Avoid timid, evenly-distributed palettes.
- **Atmosphere** — per the ATMOSPHERE dial: backgrounds with depth, not flat fills.
- **Spacing** — a clear rhythm on the **8px grid** (see `design-system-conventions`).
- **Anti-convergence** — rotate choices across projects; never default to the same look twice.

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

The direction and every screen must dodge the tells in **`anti-slop.md`** — read it and check
against it before and after building.

## Build it

1. **Foundation first** — with `figma-generate-library`: variables/tokens for the committed
   palette (OKLCH), the type scale, spacing (8px), and the core components.
2. **Then screens** — with `figma-generate-design`: assemble views from that foundation.
3. Name everything per `design-system-conventions`.

## Pre-flight

Before calling it done, run **`pre-flight.md`** — accessibility, responsive, and craft checks.

The test: it feels intentionally designed — like a real brand made it, not an AI.
