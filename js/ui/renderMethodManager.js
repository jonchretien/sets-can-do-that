import { renderMethodContent } from './contentArea.js';
import { renderDiagram } from './diagramRenderer.js';
import { createFocusManager } from './focusManager.js';
import { updateUrlHash } from '../navigation/navigationManager.js';

export function createRenderMethod(data, contentElement) {
  let selectElement = null;
  const focusManager = createFocusManager(contentElement);

  function render(methodName) {
    const methodData = data[methodName];
    if (!methodData) return;

    if (selectElement) {
      selectElement.value = methodName;
    }
    contentElement.innerHTML = renderMethodContent(methodName, methodData);

    const diagramElement = contentElement.querySelector('.diagram');
    renderDiagram(diagramElement, methodName);

    focusManager.focusContent();

    updateUrlHash(methodName);
  }

  function setSelectElement(element) {
    selectElement = element;
  }

  return {
    render,
    setSelectElement,
  };
}
