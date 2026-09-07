# Game Plan: The Reader's Scenario

## Risk Tasks

### Narrative state and branching resolution
- **Why isolated:** Multiple phases, gated choices, rewards, item use, and terminal endings can desynchronize if UI state owns the rules.
- **Approach:** Keep scenario content data-driven and resolve all choices through `ScenarioEngine`, with explicit `reading`, `choice`, `between`, `win`, and `lose` phases.
- **Verify:** Choice outcomes apply once, locked requirements remain disabled, restart clears the run, and both terminal states stop progression.

## Main Build

The MVP is a single-screen HTML/CSS/React interface with a Babylon canvas for the atmospheric background. It includes five scenarios, stats, coins, three items, Sponsor reactions, scenario history, typed narration, and a fixed win/fall ending.

- **Assets needed:** Generated emblem, dark atmosphere texture, and reference image recorded in `ASSETS.md`.
- **Verify:** The target desktop layout is readable; narrow layouts remain usable; the preview has no missing images or console errors; `pnpm check` passes; `?demo` produces a deterministic readable choice state.
