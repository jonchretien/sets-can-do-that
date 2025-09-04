import { renderMethodContent } from './contentArea.js';
import { renderDiagram } from './diagramRenderer.js';
import { updateUrlHash } from '../navigation/navigationManager.js';

export function createRenderMethod(data, contentElement) {
  let selectElement = null;

  function render(methodName) {
    const methodData = data[methodName];
    if (!methodData) return;

    if (selectElement) {
      selectElement.value = methodName;
    }
    contentElement.innerHTML = renderMethodContent(methodName, methodData);

    const diagramElement = contentElement.querySelector('.diagram');
    renderDiagram(diagramElement, methodName);

    // focus management
    const title = contentElement.querySelector('.content-area__title');
    if (title) {
      title.focus();
    }

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
