import { getSetExamplesData } from './data/setExamples.js';
import { createSelectMenu } from './ui/selectMenu.js';
import { createContentArea } from './ui/contentArea.js';
import { createContentRenderer } from './ui/contentRenderer.js';
import { createDiagramRendererService } from './ui/diagramRendererService.js';
import { createFocusManager } from './ui/focusManager.js';
import { createSelectionStateManager } from './ui/selectionStateManager.js';
import { createUrlManager } from './navigation/urlManager.js';
import { createRenderOrchestrator } from './ui/renderOrchestrator.js';
import { setupNavigation } from './navigation/navigationManager.js';
import { createEventBus } from './core/eventBus.js';
import type { NavigationPayload } from './types.js';

function initializeApp() {
  const data = getSetExamplesData();
  const contentElement = createContentArea();
  const eventBus = createEventBus();

  // Create render function that will be used by select menu
  let renderMethod: ((methodName: string) => void) | undefined;

  // Create select menu with render callback
  const selectElement = createSelectMenu((methodName) => {
    if (renderMethod) {
      renderMethod(methodName);
    }
  });

  // Create orchestrator with all dependencies
  const contentRenderer = createContentRenderer(contentElement);
  const diagramRenderer = createDiagramRendererService(contentElement);
  const focusManager = createFocusManager(contentElement);
  const urlManager = createUrlManager();
  const stateManager = createSelectionStateManager(selectElement);

  const orchestrator = createRenderOrchestrator({
    contentRenderer,
    diagramRenderer,
    focusManager,
    urlManager,
    stateManager,
  });

  // Define render method
  renderMethod = (methodName: string) => {
    const methodData = data[methodName as keyof typeof data];
    orchestrator.render(methodName, methodData);
  };

  // Subscribe to navigation events
  eventBus.subscribe<NavigationPayload>('navigation:methodChanged', ({ methodName }) => {
    renderMethod!(methodName);
  });

  document.getElementById('app')!.append(selectElement, contentElement);
  document.getElementById('year')!.textContent = new Date().getFullYear().toString();
  setupNavigation(data, eventBus);
}

document.addEventListener('DOMContentLoaded', initializeApp);
