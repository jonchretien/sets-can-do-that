import { createElement } from '../utils/domUtils.js';
import { getDiagramStrategy } from '../svg/diagramStrategies.js';
import { createVennSVG } from '../svg/vennDiagram.js';
import { CONFIG } from '../config/constants.js';

export function renderDiagramWithFallback(wrapper, methodName, imageSrc) {
  wrapper.innerHTML = '';
  const img = createElement('img', {
    alt: `${methodName} diagram`,
    src: imageSrc,
    loading: 'lazy',
  });

  img.onerror = function () {
    const strategy = getDiagramStrategy(methodName);
    if (strategy) {
      wrapper.innerHTML = createVennSVG(CONFIG, { ...strategy(), methodName });
    }
  };

  wrapper.appendChild(img);
}
