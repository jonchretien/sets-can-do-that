import { renderMethodContent } from './contentArea.js';

export function createContentRenderer(contentElement) {
  function render(methodName, methodData) {
    contentElement.innerHTML = renderMethodContent(methodName, methodData);
  }

  return {
    render,
  };
}
