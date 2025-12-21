import { renderDiagram } from './diagramRenderer.js';

export function createDiagramRendererService(contentElement) {
  function render(methodName) {
    const diagramElement = contentElement.querySelector('.diagram');
    renderDiagram(diagramElement, methodName);
  }

  return {
    render,
  };
}
