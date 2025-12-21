export function createSelectionStateManager(selectElement) {
  function updateSelection(methodName) {
    if (selectElement) {
      selectElement.value = methodName;
    }
  }

  return {
    updateSelection,
  };
}
