import type { FocusManagerDep } from '../types.js';

export function createFocusManager(contentElement: HTMLElement): FocusManagerDep {
  return {
    focusContent() {
      const title = contentElement.querySelector<HTMLElement>('.content-area__title');
      if (title) {
        title.focus();
      }
    },
  };
}
