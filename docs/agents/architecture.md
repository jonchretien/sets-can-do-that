# Architecture & Patterns

## Patterns

- Factory: `create*()` functions return objects with public methods
- Event-driven: `eventBus` pub/sub
- DI: functions accept deps as params
- Strategy: `diagramStrategies` for Venn diagram SVGs
- Adapters: `contentRenderer`, `diagramRendererService`, `focusManager`,
  `selectionStateManager` — wrap single operations for DI; no business logic,
  intentionally untested

## Module Map

- `renderOrchestrator` coordinates the render flow across UI modules
- Hash-based routing via `navigationManager` + `urlManager`

## Tooling

- No ESLint/Prettier — uses `.editorconfig` only
