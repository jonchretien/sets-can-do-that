import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { getSetExamplesData } from '../data/setExamples.js';
import { CONFIG } from '../config/constants.js';

vi.mock('../ui/selectMenu.js', () => ({
  createSelectMenu: vi.fn(() => document.createElement('select')),
}));

vi.mock('../ui/contentArea.js', () => ({
  createContentArea: vi.fn(() => document.createElement('div')),
}));

vi.mock('../ui/contentRenderer.js', () => ({
  createContentRenderer: vi.fn(() => ({
    render: vi.fn(),
  })),
}));

vi.mock('../ui/diagramRendererService.js', () => ({
  createDiagramRendererService: vi.fn(() => ({
    render: vi.fn(),
  })),
}));

vi.mock('../ui/focusManager.js', () => ({
  createFocusManager: vi.fn(() => ({
    focusContent: vi.fn(),
  })),
}));

vi.mock('../ui/selectionStateManager.js', () => ({
  createSelectionStateManager: vi.fn(() => ({
    updateSelection: vi.fn(),
  })),
}));

vi.mock('../navigation/urlManager.js', () => ({
  createUrlManager: vi.fn(() => ({
    update: vi.fn(),
    getCurrent: vi.fn(),
  })),
}));

vi.mock('../ui/renderOrchestrator.js', () => ({
  createRenderOrchestrator: vi.fn(() => ({
    render: vi.fn(),
  })),
}));

vi.mock('../navigation/navigationManager.js', () => ({
  setupNavigation: vi.fn(),
}));

vi.mock('../core/eventBus.js', () => ({
  createEventBus: vi.fn(() => ({
    subscribe: vi.fn(),
    publish: vi.fn(),
    clear: vi.fn(),
  })),
}));

describe('main application', () => {
  beforeEach(() => {
    // set up DOM environment
    document.body.innerHTML = `
      <div id="app"></div>
      <div id="copyright"></div>
    `;

    // clear all mocks
    vi.clearAllMocks();
  });

  afterEach(() => {
    // clean up
    document.body.innerHTML = '';
  });

  describe('DOM structure', () => {
    it('should have required DOM elements', () => {
      expect(document.getElementById('app')).toBeTruthy();
      expect(document.getElementById('copyright')).toBeTruthy();
    });
  });

  describe('setExamplesData', () => {
    it('should return valid data structure', () => {
      const data = getSetExamplesData();
      expect(data).toBeDefined();
      expect(typeof data).toBe('object');
    });

    it('should contain expected set methods', () => {
      const data = getSetExamplesData();
      Object.values(CONFIG.SET_METHODS).forEach((method) => {
        expect(data).toHaveProperty(method);
      });
    });
  });

  describe('copyright year', () => {
    it('should set current year in copyright element', () => {
      const currentYear = new Date().getFullYear().toString();
      const copyrightElement = document.getElementById('copyright')!;
      copyrightElement.textContent = currentYear;
      expect(copyrightElement.textContent).toBe(currentYear);
    });
  });
});
