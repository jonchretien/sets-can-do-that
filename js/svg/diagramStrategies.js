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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" role="img" aria-label="difference diagram">
      <rect width="100%" height="100%" fill="#fff"/>
      <path d="M115 100c0-25.91 14.08-48.51 35-60.61A69.667 69.667 0 0 0 115 30c-38.66 0-70 31.34-70 70s31.34 70 70 70c12.75 0 24.7-3.43 35-9.39-20.92-12.1-35-34.7-35-60.61z" style="fill:#ea9930"/>
      <circle cx="115" cy="100" r="70" fill-opacity="0.06" stroke="#999" stroke-width="2"/>
      <circle cx="185" cy="100" r="70" fill-opacity="0.06" stroke="#999" stroke-width="2"/>
    </svg>`;
}

function createIntersectionDiagram() {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" role="img" aria-label="intersection diagram">
      <rect width="100%" height="100%" fill="#fff"/>
      <path d="M150 39.39c-20.92 12.1-35 34.71-35 60.61s14.08 48.51 35 60.61c20.92-12.1 35-34.71 35-60.61s-14.08-48.51-35-60.61z" style="fill:#ea9930"/>
      <circle cx="115" cy="100" r="70" fill-opacity="0.06" stroke="#999" stroke-width="2"/>
      <circle cx="185" cy="100" r="70" fill-opacity="0.06" stroke="#999" stroke-width="2"/>
    </svg>`;
}

function createSymmetricDifferenceDiagram() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" role="img" aria-label="symmetric difference diagram">
    <rect width="100%" height="100%" fill="#fff"/>
    <path d="M115 100c0-25.91 14.08-48.51 35-60.61A69.667 69.667 0 0 0 115 30c-38.66 0-70 31.34-70 70s31.34 70 70 70c12.75 0 24.7-3.43 35-9.39-20.92-12.1-35-34.7-35-60.61zm70-70c-12.75 0-24.7 3.43-35 9.39 20.92 12.1 35 34.71 35 60.61s-14.08 48.51-35 60.61a69.667 69.667 0 0 0 35 9.39c38.66 0 70-31.34 70-70s-31.34-70-70-70z" style="fill:#ea9930"/>
    <circle cx="115" cy="100" r="70" fill-opacity="0.06" stroke="#999" stroke-width="2"/>
    <circle cx="185" cy="100" r="70" fill-opacity="0.06" stroke="#999" stroke-width="2"/>
    <text transform="translate(99.37 50.4)">A</text>
    <text transform="translate(190.014 50.4)">B</text>
  </svg>`;
}

function createUnionDiagram() {
  // return `
  //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" role="img" aria-label="union diagram">
  //     <rect width="100%" height="100%" fill="#fff"/>
  //     <circle cx="160" cy="150" r="80" fill="#111" fill-opacity="0.22" stroke="#111" stroke-opacity="0.4" stroke-width="2"/>
  //     <circle cx="240" cy="150" r="80" fill="#111" fill-opacity="0.22" stroke="#111" stroke-width="2"/>
  //   </svg>`;
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" xml:space="preserve">
      <rect width="100%" height="100%" fill="#fff"/>
      <path d="M185 30c-12.75 0-24.7 3.43-35 9.39A69.667 69.667 0 0 0 115 30c-38.66 0-70 31.34-70 70s31.34 70 70 70c12.75 0 24.7-3.43 35-9.39a69.667 69.667 0 0 0 35 9.39c38.66 0 70-31.34 70-70s-31.34-70-70-70z" style="fill:#ea9930"/>
      <circle cx="115" cy="100" r="70" fill-opacity="0.06" stroke="#999" stroke-width="2"/>
      <circle cx="185" cy="100" r="70" fill-opacity="0.06" stroke="#999" stroke-width="2"/>
      <text transform="translate(99.37 50.4)">A</text>
      <text transform="translate(190.014 50.4)">B</text>
    </svg>`;
}

function createDisjointDiagram() {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" role="img" aria-label="disjoint sets diagram">
      <rect width="100%" height="100%" fill="#fff"/>
      <circle cx="90" cy="100" r="50" fill-opacity="0.06" stroke="#111" stroke-opacity="0.4" stroke-width="2"/>
      <circle cx="210" cy="100" r="50" fill-opacity="0.06" stroke="#111" stroke-opacity="0.4" stroke-width="2"/>
    </svg>`;
}

function createSubsetDiagram() {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" role="img" aria-label="subset diagram">
    <rect width="100%" height="100%" fill="#fff"/>
    <circle cx="150" cy="100" r="75" fill="#fff" stroke="#111" stroke-opacity="0.4" stroke-width="2"/>
    <circle cx="150" cy="120" r="50" fill="#fff" stroke="#111" stroke-opacity="0.4" stroke-width="2"/>
    <text transform="translate(144.361 94.51)">A</text>
    <text transform="translate(144.358 44.51)">B</text>
  </svg>`;
}

function createSupersetDiagram() {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" role="img" aria-label="superset diagram">
    <rect width="100%" height="100%" fill="#fff"/>
    <circle cx="150" cy="100" r="75" fill="#fff" stroke="#111" stroke-opacity="0.4" stroke-width="2"/>
    <circle cx="150" cy="120" r="50" fill="#fff" stroke="#111" stroke-opacity="0.4" stroke-width="2"/>
    <text transform="translate(144.358 44.51)">A</text>
    <text transform="translate(144.361 94.51)">B</text>
  </svg>`;
}
