import type { RenderOrchestratorDeps, MethodData } from '../types.js';

export function createRenderOrchestrator(dependencies: RenderOrchestratorDeps) {
  const { contentRenderer, diagramRenderer, focusManager, urlManager, stateManager } = dependencies;

  function render(methodName: string, methodData?: MethodData) {
    if (!methodData) return;

    contentRenderer.render(methodName, methodData);
    diagramRenderer.render(methodName);
    focusManager.focusContent();
    stateManager.updateSelection(methodName);
    urlManager.update(methodName);
  }

  return {
    render,
  };
}
