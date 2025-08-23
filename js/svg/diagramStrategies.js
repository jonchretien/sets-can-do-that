import { CONFIG } from '../config/constants.js';

export function getDiagramStrategy(methodName) {
  const strategies = {
    [CONFIG.SET_METHODS.DIFFERENCE]: createDifferenceDiagram,
    [CONFIG.SET_METHODS.INTERSECTION]: createIntersectionDiagram,
    [CONFIG.SET_METHODS.SYMMETRIC_DIFFERENCE]: createSymmetricDifferenceDiagram,
    [CONFIG.SET_METHODS.UNION]: createUnionDiagram,
    [CONFIG.SET_METHODS.IS_DISJOINT_FROM]: createDisjointDiagram,
    [CONFIG.SET_METHODS.IS_SUBSET_OF]: createSubsetDiagram,
    [CONFIG.SET_METHODS.IS_SUPERSET_OF]: createSupersetDiagram,
  };
  return strategies[methodName];
}

function createDifferenceDiagram() {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${CONFIG.SVG.WIDTH} ${CONFIG.SVG.HEIGHT}" role="img" aria-label="Venn diagram showing set difference: elements in set A that are not in set B">
      <rect width="100%" height="100%" fill="#fff"/>
      <path d="M115 100c0-25.91 14.08-48.51 35-60.61A69.667 69.667 0 0 0 115 30c-38.66 0-70 31.34-70 70s31.34 70 70 70c12.75 0 24.7-3.43 35-9.39-20.92-12.1-35-34.7-35-60.61z" style="fill:#ea9930"/>
      <circle cx="115" cy="100" r="70" fill-opacity="0.06" stroke="#999" stroke-width="2"/>
      <circle cx="185" cy="100" r="70" fill-opacity="0.06" stroke="#999" stroke-width="2"/>
      <text transform="translate(99.37 50.4)" fill="#333" font-weight="700">A</text>
      <text transform="translate(190.014 50.4)" fill="#333" font-weight="700">B</text>
    </svg>`;
}

function createIntersectionDiagram() {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${CONFIG.SVG.WIDTH} ${CONFIG.SVG.HEIGHT}" role="img" aria-label="Venn diagram showing set intersection: elements in both set A and set B">
      <rect width="100%" height="100%" fill="#fff"/>
      <path d="M150 39.39c-20.92 12.1-35 34.71-35 60.61s14.08 48.51 35 60.61c20.92-12.1 35-34.71 35-60.61s-14.08-48.51-35-60.61z" style="fill:#ea9930"/>
      <circle cx="115" cy="100" r="70" fill-opacity="0.06" stroke="#999" stroke-width="2"/>
      <circle cx="185" cy="100" r="70" fill-opacity="0.06" stroke="#999" stroke-width="2"/>
      <text transform="translate(99.37 50.4)" fill="#333" font-weight="900">A</text>
      <text transform="translate(190.014 50.4)" fill="#333" font-weight="900">B</text>
    </svg>`;
}

function createSymmetricDifferenceDiagram() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${CONFIG.SVG.WIDTH} ${CONFIG.SVG.HEIGHT}" role="img" aria-label="Venn diagram showing symmetric difference: elements in either set A or B but not both">
    <rect width="100%" height="100%" fill="#fff"/>
    <path d="M115 100c0-25.91 14.08-48.51 35-60.61A69.667 69.667 0 0 0 115 30c-38.66 0-70 31.34-70 70s31.34 70 70 70c12.75 0 24.7-3.43 35-9.39-20.92-12.1-35-34.7-35-60.61zm70-70c-12.75 0-24.7 3.43-35 9.39 20.92 12.1 35 34.71 35 60.61s-14.08 48.51-35 60.61a69.667 69.667 0 0 0 35 9.39c38.66 0 70-31.34 70-70s-31.34-70-70-70z" style="fill:#ea9930"/>
    <circle cx="115" cy="100" r="70" fill-opacity="0.06" stroke="#999" stroke-width="2"/>
    <circle cx="185" cy="100" r="70" fill-opacity="0.06" stroke="#999" stroke-width="2"/>
    <text transform="translate(99.37 50.4)" fill="#333" font-weight="900">A</text>
    <text transform="translate(190.014 50.4)" fill="#333" font-weight="900">B</text>
  </svg>`;
}

function createUnionDiagram() {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${CONFIG.SVG.WIDTH} ${CONFIG.SVG.HEIGHT}" role="img" aria-label="Venn diagram showing set union: elements in either set A or B">
      <rect width="100%" height="100%" fill="#fff"/>
      <path d="M185 30c-12.75 0-24.7 3.43-35 9.39A69.667 69.667 0 0 0 115 30c-38.66 0-70 31.34-70 70s31.34 70 70 70c12.75 0 24.7-3.43 35-9.39a69.667 69.667 0 0 0 35 9.39c38.66 0 70-31.34 70-70s-31.34-70-70-70z" style="fill:#ea9930"/>
      <circle cx="115" cy="100" r="70" fill-opacity="0.06" stroke="#999" stroke-width="2"/>
      <circle cx="185" cy="100" r="70" fill-opacity="0.06" stroke="#999" stroke-width="2"/>
      <text transform="translate(99.37 50.4)" fill="#333" font-weight="900">A</text>
      <text transform="translate(190.014 50.4)" fill="#333" font-weight="900">B</text>
    </svg>`;
}

function createDisjointDiagram() {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${CONFIG.SVG.WIDTH} ${CONFIG.SVG.HEIGHT}" role="img" aria-label="Venn diagram showing disjoint sets: no elements in common between set A and set B">
      <rect width="100%" height="100%" fill="#fff"/>
      <circle cx="90" cy="100" r="50" fill-opacity="0.06" stroke="#111" stroke-opacity="0.4" stroke-width="2"/>
      <circle cx="210" cy="100" r="50" fill-opacity="0.06" stroke="#111" stroke-opacity="0.4" stroke-width="2"/>
      <text transform="translate(85.996 75)" fill="#333" font-weight="900">A</text>
      <text transform="translate(205.998 75)" fill="#333" font-weight="900">B</text>
    </svg>`;
}

function createSubsetDiagram() {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${CONFIG.SVG.WIDTH} ${CONFIG.SVG.HEIGHT}" role="img" aria-label="Venn diagram showing subset: all elements of set A are also in set B">
    <rect width="100%" height="100%" fill="#fff"/>
    <circle cx="150" cy="100" r="75" fill="#fff" stroke="#111" stroke-opacity="0.4" stroke-width="2"/>
    <circle cx="150" cy="120" r="50" fill="#fff" stroke="#111" stroke-opacity="0.4" stroke-width="2"/>
    <text transform="translate(144.361 94.51)" fill="#333" font-weight="900">A</text>
    <text transform="translate(144.358 44.51)" fill="#333" font-weight="900">B</text>
  </svg>`;
}

function createSupersetDiagram() {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${CONFIG.SVG.WIDTH} ${CONFIG.SVG.HEIGHT}" role="img" aria-label="Venn diagram showing superset: all elements of set B are also in set A">
    <rect width="100%" height="100%" fill="#fff"/>
    <circle cx="150" cy="100" r="75" fill="#fff" stroke="#111" stroke-opacity="0.4" stroke-width="2"/>
    <circle cx="150" cy="120" r="50" fill="#fff" stroke="#111" stroke-opacity="0.4" stroke-width="2"/>
    <text transform="translate(144.358 44.51)" fill="#333" font-weight="900">A</text>
    <text transform="translate(144.361 94.51)" fill="#333" font-weight="900">B</text>
  </svg>`;
}
