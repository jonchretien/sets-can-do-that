export function createElement<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  attributes: Record<string, string | boolean> = {}
): HTMLElementTagNameMap[K] {
  const element = document.createElement(tag);
  Object.entries(attributes).forEach(([key, value]) => {
    if (key === 'textContent') {
      element.textContent = String(value);
    } else {
      element.setAttribute(key, String(value));
    }
  });
  return element;
}
