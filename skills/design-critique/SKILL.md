---
name: design-critique
description: Use when reviewing, critiquing, or sign-off-checking a design deliverable (a Figma frame, screen, component, or mockup) before it ships or is declared done — including reviewing your own design output or another agent's.
---

# Design critique

**Adversarial review: your job is to find what's wrong, not to confirm it's good.** A reviewer who
opens with praise and eyeballs the grid passes broken work. Assume a defect exists until evidence
says otherwise.

## Posture

- Lead with findings, not praise. No "strong, shippable" openers. A clean verdict is *earned* with
  evidence, never asserted.
- "Looks clean" is not a finding. Every claim — pass or fail — cites what you measured.

## Gather evidence — don't eyeball

- **See it.** Render at native resolution (`get_screenshot`); pull structure (`get_metadata` /
  `get_design_context`) and tokens (`get_variable_defs`).
- **Measure, don't guess.** Cross-check actual spacing/size numbers against the token scale.
  **Compute** text contrast ratios — never call contrast "good" by eye.
- **Be honest about coverage.** A static frame can't show focus / hover / pressed / empty / loading
  states — flag those as *unverified*, never silently pass them.

## What to attack — BLOCKING (must fix before done)

- **Coherence / correctness** — numbers that don't reconcile, a control that disagrees with what it
  shows, content that contradicts itself. *Often the highest-value defect — look here first.*
- **Accessibility** — text contrast below WCAG AA (4.5:1 body, 3:1 large/UI); meaning carried by
  color alone; interactive states missing or not visually distinct.
- **Broken system reuse** — a hardcoded value that has a token; a component redrawn instead of
  reused; non-semantic naming. (See `design-system-conventions`.)
- **Parity** (when mirroring production) — a visible mismatch against the reference.

## What to attack — ADVISORY (recommend, don't block)

Off-grid nits with no real consequence (a 1px height, a stray gap), type polish (line-height,
letter-spacing), and **slop tells**: generic AI-default palette, no intentional contrast, default
drop shadows, everything safe and even, no brand specificity. (See `creative-direction`.)

**Calibrate by consequence, not rule-count.** A failed contrast or an incoherent total blocks; a
79-vs-80px card is an advisory nit. A critic that blocks on nits gets ignored — which defeats the
purpose.

## Output

A verdict line — **PASS** or **BLOCK** — then a findings table:

| Tier | Severity | Location | What's wrong (evidence) | Fix |
|------|----------|----------|-------------------------|-----|

BLOCK if any blocking finding is open. Re-review after fixes, **max 3 rounds**; if a finding is
still disputed after round 3, surface it to the user with both positions rather than looping.

## Red flags — you are reviewing wrong

- Opening with praise / a "ship-quality" verdict before any measurement
- Calling the grid "clean" or contrast "good" without numbers
- A conditional dodge ("verify it if essential") on something you could just compute
- No PASS/BLOCK verdict; no note of what you could not verify
