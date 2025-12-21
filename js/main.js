import { getSetExamplesData } from './data/setExamples.js';
import { createSelectMenu } from './ui/selectMenu.js';
import { createContentArea } from './ui/contentArea.js';
import { createRenderMethod } from './ui/renderMethodManager.js';
import { setupNavigation } from './navigation/navigationManager.js';
import { createEventBus } from './core/eventBus.js';

function initializeApp() {
  const data = getSetExamplesData();
  const contentElement = createContentArea();
  const eventBus = createEventBus();
  const { render, setSelectElement } = createRenderMethod(data, contentElement);
  const selectElement = createSelectMenu(render);

  setSelectElement(selectElement);

  // Subscribe to navigation events
  eventBus.subscribe('navigation:methodChanged', ({ methodName }) => {
    render(methodName);
  });

  document.getElementById('app').append(selectElement, contentElement);
  document.getElementById('year').textContent = new Date().getFullYear();
  setupNavigation(data, eventBus);
}

document.addEventListener('DOMContentLoaded', initializeApp);
