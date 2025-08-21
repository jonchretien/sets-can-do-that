import { CONFIG } from '../config/constants.js';

export function getDiagramStrategy(methodName) {
  const strategies = {
    [CONFIG.SET_METHODS.DIFFERENCE]: createDifferenceStrategy,
    [CONFIG.SET_METHODS.INTERSECTION]: createIntersectionStrategy,
    [CONFIG.SET_METHODS.SYMMETRIC_DIFFERENCE]:
      createSymmetricDifferenceStrategy,
    [CONFIG.SET_METHODS.UNION]: createUnionStrategy,
    [CONFIG.SET_METHODS.IS_DISJOINT_FROM]: createDisjointDiagram,
    [CONFIG.SET_METHODS.IS_SUBSET_OF]: createSubsetDiagram,
    [CONFIG.SET_METHODS.IS_SUPERSET_OF]: createSupersetDiagram,
  };
  return strategies[methodName];
}

function createDifferenceStrategy() {
  return { left: true, middle: false, right: false };
}

function createIntersectionStrategy() {
  return { left: false, middle: true, right: false };
}

function createSymmetricDifferenceStrategy() {
  return { left: true, middle: false, right: true };
}

function createUnionStrategy() {
  return { left: true, middle: true, right: true };
}

function createDisjointDiagram() {
  const { WIDTH, HEIGHT, CENTER_Y, RADIUS } = CONFIG.SVG;
  const leftX = 160;
  const rightX = 240;

  return `
    <svg viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Disjoint sets diagram" style="width: 100%; height: 100%; max-width: 100%; max-height: 100%;">
      <rect width="100%" height="100%" fill="#fff"/>
      <circle cx="${leftX}" cy="${CENTER_Y}" r="${RADIUS}" fill="#000" fill-opacity="0.06" stroke="#111" stroke-opacity="0.4" stroke-width="2"/>
      <circle cx="${rightX}" cy="${CENTER_Y}" r="${RADIUS}" fill="#000" fill-opacity="0.06" stroke="#111" stroke-opacity="0.4" stroke-width="2"/>
    </svg>`;
}

function createSubsetDiagram() {
  const { WIDTH, HEIGHT } = CONFIG.SVG;

  return `
    <svg viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%; max-width: 100%; max-height: 100%;">
      <rect width="400" height="300" fill="#2a2a2a" stroke="#444" stroke-width="2" rx="10"/>
      <circle cx="200" cy="150" r="80" fill="none" stroke="#666" stroke-width="2"/>
      <circle cx="200" cy="150" r="50" fill="none" stroke="#666" stroke-width="2"/>
      <text x="200" y="110" text-anchor="middle" fill="#ccc" font-family="Arial, sans-serif" font-size="18" font-weight="bold">A</text>
      <text x="200" y="80" text-anchor="middle" fill="#ccc" font-family="Arial, sans-serif" font-size="18" font-weight="bold">B</text>
    </svg>`;
}

function createSupersetDiagram() {
  const { WIDTH, HEIGHT, CENTER_Y } = CONFIG.SVG;
  const bigRadius = 85;
  const smallRadius = 55;
  const leftX = 150;
  const rightX = 170;

  return `
    <svg viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Superset diagram" style="width: 100%; height: 100%; max-width: 100%; max-height: 100%;">
      <rect width="100%" height="100%" fill="#fff"/>
      <circle cx="${leftX}" cy="${CENTER_Y}" r="${bigRadius}" fill="#111" fill-opacity="0.18" stroke="#111" stroke-opacity="0.4" stroke-width="2"/>
      <circle cx="${rightX}" cy="${CENTER_Y}" r="${smallRadius}" fill="#000" fill-opacity="0.06" stroke="#111" stroke-opacity="0.4" stroke-width="2"/>
    </svg>`;
}
