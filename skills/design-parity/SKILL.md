---
name: design-parity
description: Use when mirroring or syncing an existing/shipped production screen or component into Figma (production → design) — replicating what already exists so the design matches it 1:1. For inventing NEW screens or variations use design-generation; for token/component naming use design-system-conventions.
---

# Design parity

**When syncing production into Figma, match it exactly — verify, don't assume.**

**Reuse the design system.** Compose from the file's existing components, variables, and
text-styles — never redraw what already exists, never hardcode what has a token. **REQUIRED:
follow `design-system-conventions`** for the full reuse rule and naming schemes.

**Spacing & the 8px grid.** Follow the spacing scale + 8px ladder in `design-system-conventions`.
Parity-specific rule: if a production screen uses an **off-grid spacing value**, treat it as a
*likely development bug* — flag it and propose the on-grid value rather than replicating the
defect. **The same flag-don't-replicate logic applies to accessibility defects:** if production
ships insufficient contrast, a missing focus state, or color-only signals, flag it and propose the
corrected value — match the *intent*, not the bug. (The genuine-exceptions list lives in
`design-system-conventions` → Spacing scale.)

**Pick the scope tier first** (`design-system-conventions` → Scope tiers): a small fix to an
already-mirrored frame runs the light gate (targeted QA + one pixel-diff + single-round critique),
not all seven steps below.

**Set a goal up front.** When moving production → designs, open a session goal (`/goal`) with
the condition that *the pixel-diff mismatch is ≤ 2%, **or** the residual deltas and the final
mismatch % are explicitly reported after 3 cross-check rounds* — so the harness blocks stopping
until the cross-check actually succeeds or is honestly accounted for, not just until edits are
made.

Then work in this order:

1. **Capture the target — measured, not just seen.** Before editing Figma, capture production
   (Chrome MCP / chrome-devtools, or the running app) into
   `design-context/captures/YYYY-MM-DD-<screen>/`:
   - **Viewport-exact.** Set the browser to the frame's exact dimensions at **DPR 1**
     (`resize_page` / `emulate`) so the capture is pixel-comparable to a 1x Figma export →
     `production.png`.
   - **Computed CSS, not eyeballing.** Extract `getComputedStyle` values (`evaluate_script`) for
     the screen's key elements — colors, font family/size/weight/line-height,
     padding/margin/gap, radius, box dimensions → `computed.json`. These measured values are the
     spec you match; never estimate a value off a screenshot when you can read the real one.
   - **Verbatim copy.** The text content of each region → `copy.txt`; mirrored text must match
     it word for word.
   - **Exact assets.** Download the production SVGs/images (`download_assets`, network response,
     or DOM extraction) — never redraw or approximate an icon or illustration.
   - *(Full scope)* Capture **hover / focus** (and disabled where present) for the screen's
     primary interactive components; verify Figma state variants/annotations against these.
2. **Audit structure before pixels.** The Figma layers must be build-true:
   - Auto-layout on every container whose children are related (stacked/aligned/gapped) —
     no absolute x/y where layout belongs.
   - Layers named semantically; hierarchy mirrors the real component tree.
   - Spacing, color, and type bound to **variables / text-styles** — never hardcoded values.
   - Composed from existing design-system instances, not redrawn.
   Fix structural problems before touching visuals.
3. **Build with the system.** New container frames default to a **solid white fill — clear it**
   (`fills = []`) or it bleeds through on dark themes. Apply tokens and text-styles as you go.
   Register each mirrored frame in `design-context/registry.md` (verbatim canonical URL + node
   ID) as it's built (see `design-system-conventions/design-context.md`).
4. **Cross-check by the numbers.** Export the Figma frame as a **1x PNG** into the same captures
   folder (`figma.png`), then run the diff:
   `node <plugin>/scripts/pixel-diff.mjs production.png figma.png`
   (first use: `npm install --prefix <plugin>/scripts`). **Pass = mismatch ≤ 2%** and no
   structured region in `diff.png` — a coherent block of difference is a real delta even under
   2%; scattered font anti-aliasing noise is not. On fail, use `diff.png` to localize the deltas
   and cross-check those elements against `computed.json` — the numbers say what to fix. Never
   judge from a thumbnail, or by eye when a measurement exists.
5. **Fix and re-check — at most 3 rounds.** Diff → fix → re-export → re-diff, up to 3 times. If
   deltas remain after round 3, stop and report each residual difference honestly (element,
   expected vs actual, final mismatch %) — and record them, with `diff.png`, in a dated
   `design-context/research/` note — instead of grinding; the user decides whether the residue
   matters.
6. **Run the quality gate.** Apply the accessibility items of `design-system-conventions/qa.md`;
   flag (don't replicate) any production a11y defects per the rule above.
7. **Independent critique before sign-off.** Run the **independent critique gate** in
   `design-system-conventions` (dispatch `design-critic`); resolve all BLOCK findings before done.

**Be honest about verification.** When the product has a tokenized design system in code (e.g. a
`tokens.ts`), those values are the authoritative spec and the screenshot confirms the render. If
a screen can't be screenshot-verified (native-only widgets, auth-gated views), say so explicitly
— never claim a 1:1 match you can't actually verify.

The test: a teammate flipping between the production screenshot and the Figma frame can't tell
which is which — and the pixel diff agrees.
