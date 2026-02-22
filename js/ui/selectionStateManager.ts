import type { SelectionStateManagerDep } from '../types.js';

export function createSelectionStateManager(selectElement: HTMLSelectElement): SelectionStateManagerDep {
  function updateSelection(methodName: string) {
    if (selectElement) {
      selectElement.value = methodName;
    }
  }

  return {
    updateSelection,
  };
}
