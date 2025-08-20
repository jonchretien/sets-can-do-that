export function createVennSVG(config, highlights) {
  const { WIDTH, HEIGHT, CENTER_Y, RADIUS, LEFT_CIRCLE_X, RIGHT_CIRCLE_X } =
    config.SVG;

  const baseCircles = createBaseCircles(
    LEFT_CIRCLE_X,
    RIGHT_CIRCLE_X,
    CENTER_Y,
    RADIUS
  );
  const overlayPaths = createOverlayPaths(
    highlights,
    LEFT_CIRCLE_X,
    RIGHT_CIRCLE_X,
    CENTER_Y,
    RADIUS
  );

  return `
    <svg viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${highlights.methodName} diagram">
      <rect width="100%" height="100%" fill="#fff"/>
      ${baseCircles}
      ${overlayPaths}
    </svg>`;
}

function createBaseCircles(leftX, rightX, centerY, radius) {
  return `
    <circle cx="${leftX}" cy="${centerY}" r="${radius}" fill="#000" fill-opacity="0.06" stroke="#111" stroke-opacity="0.4"/>
    <circle cx="${rightX}" cy="${centerY}" r="${radius}" fill="#000" fill-opacity="0.06" stroke="#111" stroke-opacity="0.4"/>
  `;
}

function createOverlayPaths(highlights, leftX, rightX, centerY, radius) {
  const { left, middle, right } = highlights;
  let paths = '';

  if (left) paths += createLeftPath(leftX, rightX, centerY, radius);
  if (middle) paths += createMiddlePath(leftX, rightX, centerY, radius);
  if (right) paths += createRightPath(leftX, rightX, centerY, radius);

  return paths;
}

function createLeftPath(leftX, rightX, centerY, radius) {
  return `<path d="M ${leftX - radius},${centerY} A ${radius},${radius} 0 1,1 ${
    leftX + radius
  },${centerY} L ${rightX},${centerY} A ${radius},${radius} 0 1,0 ${rightX},${centerY} Z" fill="#111" fill-opacity="0.22"/>`;
}

function createMiddlePath(leftX, rightX, centerY, radius) {
  const centerX = (leftX + rightX) / 2;
  const ellipseRadiusX = (rightX - leftX) / 2;
  const ellipseRadiusY = radius * 0.8;
  return `<ellipse cx="${centerX}" cy="${centerY}" rx="${ellipseRadiusX}" ry="${ellipseRadiusY}" fill="#111" fill-opacity="0.22"/>`;
}

function createRightPath(leftX, rightX, centerY, radius) {
  return `<path d="M ${
    rightX + radius
  },${centerY} A ${radius},${radius} 0 1,1 ${
    rightX - radius
  },${centerY} L ${leftX},${centerY} A ${radius},${radius} 0 1,0 ${leftX},${centerY} Z" fill="#111" fill-opacity="0.22"/>`;
}
