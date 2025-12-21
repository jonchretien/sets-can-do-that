export function createUrlManager() {
  return {
    update(methodName) {
      window.location.hash = methodName;
    },

    getCurrent() {
      return window.location.hash.replace('#', '');
    },
  };
}
