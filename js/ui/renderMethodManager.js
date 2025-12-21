import { createContentRenderer } from './contentRenderer.js';
import { createDiagramRendererService } from './diagramRendererService.js';
import { createFocusManager } from './focusManager.js';
import { createSelectionStateManager } from './selectionStateManager.js';
import { createUrlManager } from '../navigation/urlManager.js';
import { createRenderOrchestrator } from './renderOrchestrator.js';

export function createRenderMethod(data, contentElement) {
  let selectElement = null;
  let orchestrator = null;

  function initializeOrchestrator() {
    const contentRenderer = createContentRenderer(contentElement);
    const diagramRenderer = createDiagramRendererService(contentElement);
    const focusManager = createFocusManager(contentElement);
    const urlManager = createUrlManager();
    const stateManager = createSelectionStateManager(selectElement);

    orchestrator = createRenderOrchestrator({
      contentRenderer,
      diagramRenderer,
      focusManager,
      urlManager,
      stateManager,
    });
  }

  function render(methodName) {
    const methodData = data[methodName];

    // Initialize orchestrator on first render if not already initialized
    if (!orchestrator) {
      initializeOrchestrator();
    }

    orchestrator.render(methodName, methodData);
  }

  function setSelectElement(element) {
    selectElement = element;
    // Reinitialize orchestrator with new select element
    if (orchestrator) {
      initializeOrchestrator();
    }
  }

  return {
    render,
    setSelectElement,
  };
}
