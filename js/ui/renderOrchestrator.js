export function createRenderOrchestrator(dependencies) {
  const { contentRenderer, diagramRenderer, focusManager, urlManager, stateManager } = dependencies;

  function render(methodName, methodData) {
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
