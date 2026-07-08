# Durable design context (`design-context/`)

**If it's precise and hard-won, write it to a file — conversation memory is not storage.** Figma
node IDs, file keys, canonical URLs, token names, measured values, research findings, and
decisions must survive context compaction; anything left only in the conversation degrades or
disappears. This doc defines the convention; the directory itself lives in the **target project**
you're designing for (project-local, committed with that project) — never in this plugin.

## Layout (create on first write)

```text
design-context/
  registry.md      # lookup table: screens/components → canonical Figma URL, node ID, status
  system/          # cached design-system state — mandated once a system exists (see below)
    tokens.md      # verbatim variable/token dump (or pointer to the code tokens source), dated
    components.md  # component inventory: name, node ID, variant props, one-line purpose
  captures/        # verification evidence: production/Figma PNGs, computed-CSS JSON, diff images
  research/        # dated topic notes, e.g. 2026-07-08-nav-patterns.md
  decisions/       # dated decision records, e.g. 2026-07-08-color-direction.md
```

## Read before work

At the start of any design task, check the project's `design-context/` before re-deriving
anything. If a registry row or note already answers the question (which frame is Settings? what
type-scale ratio was chosen?), use it — don't re-inventory the Figma file or redo research the
notes already cover. If the directory doesn't exist, create it the first time you have something
durable to record; never create it empty.

## The registry — verbatim or not at all

`registry.md` is a **lookup table, not a narrative** — one row per screen/component:

| Name | Figma URL | Node ID | Status | Updated |
|------|-----------|---------|--------|---------|

- **Record IDs, URLs, and values VERBATIM** — copied from tool output, never paraphrased, never
  reconstructed from memory. A plausible-looking node ID is worse than no entry.
- **The canonical URL carries both keys:**
  `https://www.figma.com/design/<file-key>/<file-name>?node-id=<node-id>` — one link must
  re-resolve the exact node.
- **Update, don't append.** Frame renamed, moved, or rebuilt → update its existing row (and
  `Updated`). The registry describes *current* state; history belongs to git.
- **Keep it lean.** Rationale, alternatives, and context go to `research/` or `decisions/` — a
  registry that reads like prose has failed.

## The system cache (`system/`) — derive once, reuse until stale

Once the project has a design system, `system/` is **mandated**: `tokens.md` holds the verbatim
variable/token dump (`get_variable_defs` output, or a pointer to the code tokens source, e.g.
`tokens.ts`); `components.md` holds the component inventory — name, node ID, variant props,
one-line purpose per row. Each file's header records the source (file key or code path), the
date, and the item count. These files are what turn "inventory the system" into a file read
instead of a re-derivation.

**Trust the cache.** Refresh a `system/` file only when a lookup **misses**, a variable bind
**fails**, a session **modified the system**, or the file is **older than 30 days**. On refresh,
re-dump and rewrite the whole file with a new date — never patch it from memory. Verification
evidence goes under `captures/YYYY-MM-DD-<screen>/` (the target project may gitignore it);
numbers worth keeping get transcribed into a `research/` note.

## Research & decision notes — dated, appended

- `research/YYYY-MM-DD-<topic>.md` — what was studied and what it showed: house-style findings
  from shipped screens, pattern surveys, token inventories — with the exact values measured.
- `decisions/YYYY-MM-DD-<topic>.md` — what was decided and why: direction, dials, scale ratio,
  color direction, rejected alternatives. One decision per file.
- New findings on an old topic → a **new dated file** that names what it supersedes
  ("supersedes 2026-07-01-…") — never a silent rewrite. Use the actual current date.

## When to write — immediately, not at session end

- **Frame/component created or node inspected** → registry row (verbatim URL + node ID).
- **System inventoried** (variables dumped, components cataloged) → `system/tokens.md` /
  `system/components.md` (verbatim, dated header).
- **Research step done** (shipped screens studied, tokens read, patterns surveyed) → research note.
- **Decision made** (direction, dials, palette, scale) → decision record.
- **Critique gate resolved** → the **dispatching session** records the final verdict and any
  unresolved findings (a dated note; registry `Status` updated). The `design-critic` agent is
  read-only and never writes — persistence is always the dispatcher's job.

Write at the moment you hold the precise data; after compaction it is gone.
