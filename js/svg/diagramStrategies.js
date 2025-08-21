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
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="difference diagram" style="width: 100%; height: 100%; max-width: 100%; max-height: 100%;">
      <rect width="100%" height="100%" fill="#fff"/>
      <circle cx="160" cy="150" r="80" fill="#000" fill-opacity="0.06" stroke="#111" stroke-opacity="0.4" stroke-width="2"/>
      <circle cx="240" cy="150" r="80" fill="#000" fill-opacity="0.06" stroke="#111" stroke-opacity="0.4" stroke-width="2"/>
      <path d="M 80,150
    A 80,80 0 1,1 200,219.2820323027551
    A 80,80 0 0,0 200,80.7179676972449
    A 80,80 0 1,1 80,150 Z" fill="#111" fill-opacity="0.22"/>
    </svg>`;
}

function createIntersectionDiagram() {
  return `
    <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="intersection diagram">
      <rect width="100%" height="100%" fill="#fff"/>
      <path d="M150 39.39c-20.92 12.1-35 34.71-35 60.61s14.08 48.51 35 60.61c20.92-12.1 35-34.71 35-60.61s-14.08-48.51-35-60.61z" style="fill:#ea9930"/>
      <circle cx="115" cy="100" r="70" fill-opacity="0.06" stroke="#999" stroke-width="2"/>
      <circle cx="185" cy="100" r="70" fill-opacity="0.06" stroke="#999" stroke-width="2"/>
    </svg>`;
}

function createSymmetricDifferenceDiagram() {
  return `
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="symmetric difference diagram" style="width: 100%; height: 100%; max-width: 100%; max-height: 100%;">
      <rect width="100%" height="100%" fill="#fff"/>
      <circle cx="160" cy="150" r="80" fill="#000" fill-opacity="0.06" stroke="#111" stroke-opacity="0.4" stroke-width="2"/>
      <circle cx="240" cy="150" r="80" fill="#000" fill-opacity="0.06" stroke="#111" stroke-opacity="0.4" stroke-width="2"/>
      <path d="M 80,150
    A 80,80 0 1,1 200,219.2820323027551
    A 80,80 0 0,0 200,80.7179676972449
    A 80,80 0 1,1 80,150 Z" fill="#111" fill-opacity="0.22"/>
      <path d="M 320,150
    A 80,80 0 1,1 200,219.2820323027551
    A 80,80 0 0,0 200,80.7179676972449
    A 80,80 0 1,1 320,150 Z" fill="#111" fill-opacity="0.22"/>
    </svg>`;
}

function createUnionDiagram() {
  return `
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="union diagram" style="width: 100%; height: 100%; max-width: 100%; max-height: 100%;">
      <rect width="100%" height="100%" fill="#fff"/>
      <circle cx="160" cy="150" r="80" fill="#111" fill-opacity="0.22" stroke="#111" stroke-opacity="0.4" stroke-width="2"/>
      <circle cx="240" cy="150" r="80" fill="#111" fill-opacity="0.22" stroke="#111" stroke-opacity="0.4" stroke-width="2"/>
    </svg>`;
}

function createDisjointDiagram() {
  return `
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="disjoint sets diagram" style="width: 100%; height: 100%; max-width: 100%; max-height: 100%;">
      <rect width="100%" height="100%" fill="#fff"/>
      <circle cx="160" cy="150" r="80" fill="#000" fill-opacity="0.06" stroke="#111" stroke-opacity="0.4" stroke-width="2"/>
      <circle cx="240" cy="150" r="80" fill="#000" fill-opacity="0.06" stroke="#111" stroke-opacity="0.4" stroke-width="2"/>
    </svg>`;
}

function createSubsetDiagram() {
  return `
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="subset diagram" style="width: 100%; height: 100%; max-width: 100%; max-height: 100%;">
      <rect width="100%" height="100%" fill="#fff"/>
      <circle cx="200" cy="150" r="80" fill="#000" fill-opacity="0.06" stroke="#111" stroke-opacity="0.4" stroke-width="2"/>
      <circle cx="200" cy="150" r="50" fill="#111" fill-opacity="0.22" stroke="#111" stroke-opacity="0.4" stroke-width="2"/>
    </svg>`;
}

function createSupersetDiagram() {
  return `
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="superset diagram" style="width: 100%; height: 100%; max-width: 100%; max-height: 100%;">
      <rect width="100%" height="100%" fill="#fff"/>
      <circle cx="200" cy="150" r="85" fill="#111" fill-opacity="0.22" stroke="#111" stroke-opacity="0.4" stroke-width="2"/>
      <circle cx="200" cy="150" r="55" fill="#000" fill-opacity="0.06" stroke="#111" stroke-opacity="0.4" stroke-width="2"/>
    </svg>`;
}
