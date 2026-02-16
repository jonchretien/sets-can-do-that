# CLAUDE.md

## Project

Interactive web app showcasing JavaScript Set composition methods with visual Venn diagrams. Vanilla JS, no framework — intentionally kept simple.

## Code Conventions

- Factory pattern: `create*()` functions returning objects with public methods
- Event-driven architecture via `eventBus` (pub/sub)
- Dependency injection — functions accept deps as params
- Thin adapter modules (contentRenderer, diagramRendererService, focusManager, selectionStateManager) wrap single operations for DI; they have no business logic and are intentionally untested
- No ESLint/Prettier — uses `.editorconfig` only

## Architecture

- `renderOrchestrator` coordinates the render flow across UI modules
- `diagramStrategies` uses strategy pattern for Venn diagram SVGs
- Hash-based routing (no library) via `navigationManager` + `urlManager`
- Accessibility: ARIA attributes, semantic HTML, skip links

## Commits

Follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

## Testing

- Tests in `js/test/` mirror source structure
- Test config: `js/test/vitest.config.js` (jsdom environment, globals enabled)
- Run `npm run test:run` for single pass, `npm test` for watch mode
