import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { createRenderMethod } from '../../ui/renderMethodManager.js';
import { renderMethodContent } from '../../ui/contentArea.js';
import { renderDiagram } from '../../ui/diagramRenderer.js';

vi.mock('../../ui/contentArea.js', () => ({
  renderMethodContent: vi.fn(),
}));

vi.mock('../../ui/diagramRenderer.js', () => ({
  renderDiagram: vi.fn(),
}));

const mockUpdate = vi.fn();
vi.mock('../../navigation/urlManager.js', () => ({
  createUrlManager: vi.fn(() => ({
    update: mockUpdate,
    getCurrent: vi.fn(),
  })),
}));

describe('renderMethodManager', () => {
  let mockRenderMethodContent;
  let mockRenderDiagram;
  let mockData;
  let mockContentElement;
  let renderMethod;

  beforeEach(() => {
    vi.clearAllMocks();

    mockRenderMethodContent = renderMethodContent;
    mockRenderDiagram = renderDiagram;

    mockData = {
      difference: {
        emoji: '🍦',
        description: 'Test difference method',
        code: '<span>test code</span>',
        output: '<span>test output</span>',
      },
      intersection: {
        emoji: '🚗',
        description: 'Test intersection method',
        code: '<span>intersection code</span>',
        output: '<span>intersection output</span>',
      },
    };

    mockContentElement = document.createElement('div');
    mockContentElement.innerHTML = '<div class="diagram"></div>';
    document.body.appendChild(mockContentElement);
    mockRenderMethodContent.mockReturnValue(
      '<h2>Test</h2><div class="diagram"></div>'
    );
    const { render, setSelectElement } = createRenderMethod(
      mockData,
      mockContentElement
    );
    renderMethod = { render, setSelectElement };
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  describe('createRenderMethod', () => {
    it('should return an object with render and setSelectElement methods', () => {
      expect(typeof renderMethod).toBe('object');
      expect(typeof renderMethod.render).toBe('function');
      expect(typeof renderMethod.setSelectElement).toBe('function');
    });
  });

  describe('renderMethod.render function', () => {
    it('should call renderMethodContent with correct parameters', () => {
      renderMethod.render('difference');

      expect(mockRenderMethodContent).toHaveBeenCalledWith(
        'difference',
        mockData.difference
      );
    });

    it('should update content element innerHTML', () => {
      renderMethod.render('difference');

      expect(mockContentElement.innerHTML).toBe(
        '<h2>Test</h2><div class="diagram"></div>'
      );
    });

    it('should find and render diagram', () => {
      renderMethod.render('difference');

      expect(mockRenderDiagram).toHaveBeenCalledWith(
        expect.any(HTMLElement),
        'difference'
      );
    });

    it('should call urlManager.update with method name', () => {
      renderMethod.render('intersection');

      expect(mockUpdate).toHaveBeenCalledWith('intersection');
    });

    it('should update select element value when selectElement is set', () => {
      const mockSelectElement = document.createElement('select');
      const option1 = document.createElement('option');
      option1.value = 'previous';
      option1.textContent = 'Previous';
      mockSelectElement.appendChild(option1);

      const option2 = document.createElement('option');
      option2.value = 'intersection';
      option2.textContent = 'Intersection';
      mockSelectElement.appendChild(option2);

      mockSelectElement.value = 'previous';
      renderMethod.setSelectElement(mockSelectElement);

      renderMethod.render('intersection');

      expect(mockSelectElement.value).toBe('intersection');
    });

    it('should not update select element when selectElement is not set', () => {
      renderMethod.render('difference');

      // should still work without errors
      expect(mockRenderMethodContent).toHaveBeenCalledWith(
        'difference',
        mockData.difference
      );
    });

    it('should handle different method names', () => {
      renderMethod.render('intersection');

      expect(mockRenderMethodContent).toHaveBeenCalledWith(
        'intersection',
        mockData.intersection
      );
      expect(mockRenderDiagram).toHaveBeenCalledWith(
        expect.any(HTMLElement),
        'intersection'
      );
    });
  });

  describe('renderMethod.render with invalid data', () => {
    it('should handle non-existent method gracefully', () => {
      renderMethod.render('nonexistent');

      // should not call any rendering functions
      expect(mockRenderMethodContent).not.toHaveBeenCalled();
      expect(mockRenderDiagram).not.toHaveBeenCalled();
      expect(mockUpdate).not.toHaveBeenCalled();
    });

    it('should handle undefined method gracefully', () => {
      renderMethod.render(undefined);

      expect(mockRenderMethodContent).not.toHaveBeenCalled();
      expect(mockRenderDiagram).not.toHaveBeenCalled();
      expect(mockUpdate).not.toHaveBeenCalled();
    });

    it('should handle null method gracefully', () => {
      renderMethod.render(null);

      expect(mockRenderMethodContent).not.toHaveBeenCalled();
      expect(mockRenderDiagram).not.toHaveBeenCalled();
      expect(mockUpdate).not.toHaveBeenCalled();
    });
  });

  describe('setSelectElement', () => {
    it('should store the select element reference', () => {
      const mockSelect = document.createElement('select');
      const option1 = document.createElement('option');
      option1.value = 'difference';
      option1.textContent = 'Difference';
      mockSelect.appendChild(option1);

      const option2 = document.createElement('option');
      option2.value = 'intersection';
      option2.textContent = 'Intersection';
      mockSelect.appendChild(option2);

      renderMethod.setSelectElement(mockSelect);

      // when we render it should update the select value
      renderMethod.render('intersection');
      expect(mockSelect.value).toBe('intersection');
    });

    it('should allow changing the select element reference', () => {
      const mockSelect1 = document.createElement('select');
      const mockSelect2 = document.createElement('select');
      const option1 = document.createElement('option');
      option1.value = 'difference';
      option1.textContent = 'Difference';
      mockSelect1.appendChild(option1);
      mockSelect2.appendChild(option1.cloneNode(true));

      const option2 = document.createElement('option');
      option2.value = 'intersection';
      option2.textContent = 'Intersection';
      mockSelect1.appendChild(option2);
      mockSelect2.appendChild(option2.cloneNode(true));

      renderMethod.setSelectElement(mockSelect1);
      renderMethod.render('difference');
      expect(mockSelect1.value).toBe('difference');

      renderMethod.setSelectElement(mockSelect2);
      renderMethod.render('intersection');
      expect(mockSelect2.value).toBe('intersection');
      expect(mockSelect1.value).toBe('difference'); // should not change
    });

    it('should handle null select element', () => {
      renderMethod.setSelectElement(null);

      expect(() => renderMethod.render('difference')).not.toThrow();
    });
  });

  describe('integration with content element', () => {
    it('should work with real DOM content element', () => {
      const realContentElement = document.createElement('div');
      realContentElement.innerHTML = '<div class="diagram"></div>';
      document.body.appendChild(realContentElement);

      const { render: realRender, setSelectElement: realSetSelectElement } =
        createRenderMethod(mockData, realContentElement);
      const realRenderMethod = {
        render: realRender,
        setSelectElement: realSetSelectElement,
      };

      realRenderMethod.render('difference');

      expect(realContentElement.innerHTML).toBe(
        '<h2>Test</h2><div class="diagram"></div>'
      );
    });

    it('should preserve content element attributes', () => {
      mockContentElement.setAttribute('data-test', 'content-area');
      mockContentElement.setAttribute('class', 'content-area test');

      renderMethod.render('difference');

      expect(mockContentElement.getAttribute('data-test')).toBe('content-area');
      expect(mockContentElement.getAttribute('class')).toBe(
        'content-area test'
      );
    });
  });

  describe('multiple render calls', () => {
    it('should handle multiple consecutive renders', () => {
      renderMethod.render('difference');
      expect(mockRenderMethodContent).toHaveBeenCalledWith(
        'difference',
        mockData.difference
      );

      renderMethod.render('intersection');
      expect(mockRenderMethodContent).toHaveBeenCalledWith(
        'intersection',
        mockData.intersection
      );

      renderMethod.render('difference');
      expect(mockRenderMethodContent).toHaveBeenCalledWith(
        'difference',
        mockData.difference
      );
    });

    it('should maintain select element state across renders', () => {
      const mockSelect = document.createElement('select');
      const option1 = document.createElement('option');
      option1.value = 'difference';
      option1.textContent = 'Difference';
      mockSelect.appendChild(option1);

      const option2 = document.createElement('option');
      option2.value = 'intersection';
      option2.textContent = 'Intersection';
      mockSelect.appendChild(option2);

      renderMethod.setSelectElement(mockSelect);

      renderMethod.render('difference');
      expect(mockSelect.value).toBe('difference');

      renderMethod.render('intersection');
      expect(mockSelect.value).toBe('intersection');

      renderMethod.render('difference');
      expect(mockSelect.value).toBe('difference');
    });
  });
});
