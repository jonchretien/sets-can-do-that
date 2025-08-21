import { createElement } from '../utils/domUtils.js';

export function createContentArea() {
  return createElement('div', {
    class: 'content-area',
  });
}

export function renderMethodContent(methodName, methodData) {
  return `
    <h2 class="content-area__title">${methodName} ${methodData.emoji}</h2>
    <p class="content-area__description">${methodData.description} – <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/${methodName}" target="_blank" rel="noopener noreferrer">MDN Web Docs</a></p>
    <pre class="code-block"><code class="code-inline">${methodData.code}</code></pre>
    <pre class="code-block"><code class="code-inline">${methodData.output}</code></pre>
    <div class="diagram" aria-hidden="true"></div>
  `;
}
