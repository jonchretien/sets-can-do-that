import { createUrlManager } from './urlManager.js';
import type { MethodDataMap, EventBus, NavigationPayload } from '../types.js';

const urlManager = createUrlManager();

function getRandomMethod(data: MethodDataMap): string {
  const methods = Object.keys(data);
  const randomIndex = Math.floor(Math.random() * methods.length);
  return methods[randomIndex];
}

function createHashNavigationHandler(data: MethodDataMap, eventBus: EventBus) {
  return function handleHashNavigation() {
    const hash = urlManager.getCurrent();
    let methodName: string;

    // if there's a valid hash, use it
    if (hash && data[hash as keyof MethodDataMap]) {
      methodName = hash;
    } else {
      // if on page load or no valid hash, randomly select a composition method
      methodName = getRandomMethod(data);
    }

    // Publish event instead of directly calling render
    eventBus.publish<NavigationPayload>('navigation:methodChanged', { methodName: methodName as NavigationPayload['methodName'] });
  };
}

export function setupNavigation(data: MethodDataMap, eventBus: EventBus) {
  const handleHashNavigation = createHashNavigationHandler(data, eventBus);
  handleHashNavigation();
  window.addEventListener('hashchange', handleHashNavigation);
}
