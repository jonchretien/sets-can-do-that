import type { UrlManagerDep } from '../types.js';

export function createUrlManager(): UrlManagerDep {
  return {
    update(methodName: string) {
      window.location.hash = methodName;
    },

    getCurrent() {
      return window.location.hash.replace('#', '');
    },
  };
}
