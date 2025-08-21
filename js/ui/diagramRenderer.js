import { createElement } from '../utils/domUtils.js';
import { getDiagramStrategy } from '../svg/diagramStrategies.js';
import { createVennSVG } from '../svg/vennDiagram.js';
import { CONFIG } from '../config/constants.js';

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
    const strategy = getDiagramStrategy(methodName);
    if (strategy) {
      const svgContent = createVennSVG(CONFIG, { ...strategy(), methodName });
      wrapper.innerHTML = svgContent;
    } else {
      console.error('No diagram strategy found for:', methodName);
    }
  };

  wrapper.appendChild(img);
}
