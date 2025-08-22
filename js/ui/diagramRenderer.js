import { getDiagramStrategy } from '../svg/diagramStrategies.js';

export function renderDiagram(wrapper, methodName) {
  if (!wrapper) {
    console.error('No wrapper element provided for diagram');
    return;
  }

  wrapper.innerHTML = '';

  const createDiagram = getDiagramStrategy(methodName);
  if (createDiagram) {
    const svgContent = createDiagram();
    wrapper.innerHTML = svgContent;
  } else {
    console.error('No diagram strategy found for:', methodName);
  }
}
