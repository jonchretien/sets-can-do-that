import { getSetExamplesData } from './data/setExamples.js';
import {
  getCurrentYear,
  extractHashFromUrl,
  updateUrlHash,
} from './utils/domUtils.js';
import { createSelectMenu } from './ui/selectMenu.js';
import { createContentArea, renderMethodContent } from './ui/contentArea.js';
import { renderDiagram } from './ui/diagramRenderer.js';
import { CONFIG } from './config/constants.js';

function getRandomMethod() {
  const methods = Object.values(CONFIG.SET_METHODS);
  const randomIndex = Math.floor(Math.random() * methods.length);
  return methods[randomIndex];
}

function initializeApp() {
  const data = getSetExamplesData();
  let selectElement, contentElement;

  function renderMethod(methodName) {
    const methodData = data[methodName];
    if (!methodData) return;

    selectElement.value = methodName;
    contentElement.innerHTML = renderMethodContent(methodName, methodData);

    const diagramElement = contentElement.querySelector('.diagram');
    renderDiagram(diagramElement, methodName, methodData.image);

    updateUrlHash(methodName);
  }

  function handleHashNavigation() {
    const hash = extractHashFromUrl();
    if (hash && data[hash]) {
      renderMethod(hash);
    } else {
      // if no valid hash, randomly select a method
      const randomMethod = getRandomMethod();
      renderMethod(randomMethod);
    }
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
  handleHashNavigation();

  // listen for hash changes (back/forward button)
  window.addEventListener('hashchange', handleHashNavigation);
}

// start the application
document.addEventListener('DOMContentLoaded', initializeApp);
