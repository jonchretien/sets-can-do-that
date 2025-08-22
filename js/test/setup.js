// Test setup file for Vitest
// This file runs before each test file

// Mock DOM elements that might not exist in jsdom
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
};

// Mock IntersectionObserver if needed
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
};

// Set up any global test utilities here
global.testUtils = {
  // Helper to create DOM elements for testing
  createElement: (tag, attributes = {}) => {
    const element = document.createElement(tag);
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
    return element;
  },

  // Helper to clean up DOM after tests
  cleanup: () => {
    document.body.innerHTML = '';
  },
};
