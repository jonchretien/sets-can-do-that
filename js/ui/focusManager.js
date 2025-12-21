export function createFocusManager(contentElement) {
  return {
    focusContent() {
      const title = contentElement.querySelector('.content-area__title');
      if (title) {
        title.focus();
      }
    },
  };
}
