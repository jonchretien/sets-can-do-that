import { renderMethodContent } from './contentArea.js';
import type { ContentRendererDep, MethodData } from '../types.js';

export function createContentRenderer(contentElement: HTMLElement): ContentRendererDep {
  function render(methodName: string, methodData: MethodData) {
    contentElement.innerHTML = renderMethodContent(methodName, methodData);
  }

  return {
    render,
  };
}
