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

function createHashNavigationHandler(data, eventBus) {
  return function handleHashNavigation() {
    const hash = urlManager.getCurrent();
    let methodName;

    // if there's a valid hash, use it
    if (hash && data[hash]) {
      methodName = hash;
    } else {
      // if on page load or no valid hash, randomly select a composition method
      methodName = getRandomMethod(data);
    }

    // Publish event instead of directly calling render
    eventBus.publish('navigation:methodChanged', { methodName });
  };
}

export function setupNavigation(data, eventBus) {
  const handleHashNavigation = createHashNavigationHandler(data, eventBus);
  handleHashNavigation();
  window.addEventListener('hashchange', handleHashNavigation);
}
