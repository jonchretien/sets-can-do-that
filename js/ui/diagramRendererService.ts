import { renderDiagram } from './diagramRenderer.js';
import type { DiagramRendererDep } from '../types.js';

export function createDiagramRendererService(contentElement: HTMLElement): DiagramRendererDep {
  function render(methodName: string) {
    const diagramElement = contentElement.querySelector<HTMLElement>('.diagram');
    renderDiagram(diagramElement, methodName);
  }

  return {
    render,
  };
}
