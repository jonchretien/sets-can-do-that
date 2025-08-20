import { getSetExamplesData } from './data/setExamples.js';
import {
  getCurrentYear,
  extractHashFromUrl,
  updateUrlHash,
} from './utils/domUtils.js';
import { createSelectMenu } from './ui/selectMenu.js';
import { createContentArea, renderMethodContent } from './ui/contentArea.js';
import { renderDiagramWithFallback } from './ui/diagramRenderer.js';

function initializeApp() {
  const data = getSetExamplesData();
  let selectElement, contentElement;

  function renderMethod(methodName) {
    const methodData = data[methodName];
    if (!methodData) return;

    selectElement.value = methodName;
    contentElement.innerHTML = renderMethodContent(methodName, methodData);

    const diagramElement = contentElement.querySelector('.diagram');
    renderDiagramWithFallback(diagramElement, methodName, methodData.image);

    updateUrlHash(methodName);
  }

  // initialize UI
  selectElement = createSelectMenu(renderMethod);
  contentElement = createContentArea();

  // setup DOM
  const appElement = document.getElementById('app');
  appElement.append(selectElement, contentElement);

  // update copyright
  const copyrightElement = document.getElementById('copyright');
  if (copyrightElement) {
    copyrightElement.textContent = getCurrentYear();
  }

  // handle initial hash
  const initialHash = extractHashFromUrl();
  if (initialHash && data[initialHash]) {
    renderMethod(initialHash);
  }
}

// start the application
document.addEventListener('DOMContentLoaded', initializeApp);
