import { createElement } from '../utils/domUtils.js';

export function createContentArea() {
  return createElement('div', {
    class: 'content-area',
    textContent: 'Placeholder content area',
  });
}

export function renderMethodContent(methodName, methodData) {
  return `
    <h2>${methodName} ${methodData.emoji}</h2>
    <p>${methodData.description} – <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/${methodName}" target="_blank" rel="noopener noreferrer">MDN Web Docs</a></p>
    <pre><code>${methodData.code}</code></pre>
    <pre><code>${methodData.output}</code></pre>
    <div class="diagram" aria-hidden="true"></div>
  `;
}
