import { getSetExamplesData } from './data/setExamples.js';
import { createSelectMenu } from './ui/selectMenu.js';
import { createContentArea } from './ui/contentArea.js';
import { createRenderMethod } from './ui/renderMethodManager.js';
import { setupNavigation } from './navigation/navigationManager.js';

function initializeApp() {
  const data = getSetExamplesData();
  const contentElement = createContentArea();
  const renderMethod = createRenderMethod(data, contentElement);
  const selectElement = createSelectMenu(renderMethod);

  renderMethod.setSelectElement(selectElement);
  document.getElementById('app').append(selectElement, contentElement);
  document.getElementById('year').textContent = new Date().getFullYear();
  setupNavigation(data, renderMethod);
}

document.addEventListener('DOMContentLoaded', initializeApp);
