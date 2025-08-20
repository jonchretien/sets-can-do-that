import { createElement } from '../utils/domUtils.js';

export function createContentArea() {
  return createElement('div', {
    className: 'content-area',
    textContent: 'Placeholder content area',
  });
}

export function renderMethodContent(methodName, methodData) {
  return `
    <h2>${methodName}</h2>
    <p>${methodData.description}</p>
    <div class="diagram" aria-hidden="true"></div>
    <pre><code>${methodData.code}</code></pre>
    <pre><code>${methodData.output}</code></pre>
  `;
}
