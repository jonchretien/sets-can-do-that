import { createElement } from '../utils/domUtils.js';
import { getDiagramStrategy } from '../svg/diagramStrategies.js';

export function renderDiagramWithFallback(wrapper, methodName, imageSrc) {
  if (!wrapper) {
    console.error('No wrapper element provided for diagram');
    return;
  }

  wrapper.innerHTML = '';

  // try to load the image first
  const img = createElement('img', {
    alt: `${methodName} diagram`,
    src: imageSrc,
    loading: 'lazy',
  });

  img.onerror = function () {
    const createDiagram = getDiagramStrategy(methodName);
    if (createDiagram) {
      const svgContent = createDiagram();
      wrapper.innerHTML = svgContent;
    } else {
      console.error('No diagram strategy found for:', methodName);
    }
  };

  wrapper.appendChild(img);
}
