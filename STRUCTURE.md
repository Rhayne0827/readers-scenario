# Structure

Gameplay is framework-agnostic under `client/src/game/`.

- `types.ts` — game state, choice, scenario, inventory, and stat types.
- `ScenarioEngine.ts` — state transitions, requirements, item effects, rewards, sponsors, and endings.
- `content/scenarios.ts` — five hand-written scenarios and three items.
- `components/GameCanvas.tsx` — lifecycle-safe Babylon background canvas.
- `pages/Home.tsx` — game shell and UI rendering.

React owns presentation and input dispatch. The scenario engine owns gameplay rules. Babylon is intentionally limited to the atmospheric canvas and has no gameplay authority.
