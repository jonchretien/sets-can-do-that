import { CONFIG } from '../config/constants.js';
import { createUrlManager } from './urlManager.js';

const urlManager = createUrlManager();

export function updateUrlHash(hash) {
  urlManager.update(hash);
}

function getRandomMethod(data) {
  const methods = Object.keys(data);
  const randomIndex = Math.floor(Math.random() * methods.length);
  return methods[randomIndex];
}

function createHashNavigationHandler(data, renderMethod) {
  return function handleHashNavigation() {
    const hash = urlManager.getCurrent();
    // if there's a valid hash, render the method
    if (hash && data[hash]) {
      renderMethod(hash);
    } else {
      // if on page load or no valid hash, randomly select a composition method
      const randomMethod = getRandomMethod(data);
      renderMethod(randomMethod);
    }
  };
}

export function setupNavigation(data, renderMethod) {
  const handleHashNavigation = createHashNavigationHandler(data, renderMethod);
  handleHashNavigation();
  window.addEventListener('hashchange', handleHashNavigation);
}
