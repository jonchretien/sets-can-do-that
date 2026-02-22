import { createElement } from '../utils/domUtils.js';
import type { MethodData } from '../types.js';

export function createContentArea(): HTMLDivElement {
  return createElement('div', {
    'aria-live': 'polite',
    'aria-atomic': 'true',
    class: 'content-area',
  });
}

export function renderMethodContent(methodName: string, methodData: MethodData): string {
  return `
    <h2 class="content-area__title">${methodName} ${methodData.emoji}</h2>
    <p class="content-area__description">${methodData.description}</p>
    <p class="content-area__example"><strong>Example:</strong> ${methodData.example}</p>
    <pre class="code-block"><code class="code-inline">${methodData.code}</code></pre>
    <pre class="code-block"><code class="code-inline">${methodData.output}</code></pre>
    <div class="diagram" aria-hidden="true"></div>
  `;
}
