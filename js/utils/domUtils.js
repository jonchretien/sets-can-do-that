export function createElement(tag, attributes = {}) {
  const element = document.createElement(tag);
  Object.entries(attributes).forEach(([key, value]) => {
    if (key === 'textContent') {
      element.textContent = value;
    } else {
      element.setAttribute(key, value);
    }
  });
  return element;
}

export function getCurrentYear() {
  return new Date().getFullYear();
}

export function extractHashFromUrl() {
  return window.location.hash.replace('#', '');
}

export function updateUrlHash(hash) {
  window.location.hash = hash;
}
