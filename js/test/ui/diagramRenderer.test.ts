import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { renderDiagram } from '../../ui/diagramRenderer.js';
import { getDiagramStrategy } from '../../svg/diagramStrategies.js';

vi.mock('../../svg/diagramStrategies.js', () => ({
  getDiagramStrategy: vi.fn(),
}));

describe('diagramRenderer', () => {
  let mockGetDiagramStrategy: ReturnType<typeof vi.fn>;
  let mockWrapper: HTMLDivElement;

  beforeEach(() => {
    vi.clearAllMocks();

    mockGetDiagramStrategy = getDiagramStrategy as ReturnType<typeof vi.fn>;
    mockWrapper = document.createElement('div');
    mockWrapper.className = 'diagram';
    document.body.appendChild(mockWrapper);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  describe('renderDiagram', () => {
    it('should clear wrapper innerHTML before rendering', () => {
      mockWrapper.innerHTML = '<p>Previous content</p>';
      mockGetDiagramStrategy.mockReturnValue(() => '<svg>test</svg>');
      renderDiagram(mockWrapper, 'difference');

      expect(mockWrapper.innerHTML).not.toContain('<p>Previous content</p>');
    });

    it('should call getDiagramStrategy with correct method name', () => {
      mockGetDiagramStrategy.mockReturnValue(() => '<svg>test</svg>');

      renderDiagram(mockWrapper, 'intersection');

      expect(mockGetDiagramStrategy).toHaveBeenCalledWith('intersection');
    });

    it('should render SVG content when strategy exists', () => {
      const mockSvgContent = '<svg>test diagram</svg>';
      mockGetDiagramStrategy.mockReturnValue(() => mockSvgContent);

      renderDiagram(mockWrapper, 'union');

      expect(mockWrapper.innerHTML).toBe(mockSvgContent);
    });

    it('should handle different method names', () => {
      const mockSvgContent = '<svg>test</svg>';
      mockGetDiagramStrategy.mockReturnValue(() => mockSvgContent);

      renderDiagram(mockWrapper, 'difference');
      expect(mockWrapper.innerHTML).toBe(mockSvgContent);

      renderDiagram(mockWrapper, 'symmetricDifference');
      expect(mockWrapper.innerHTML).toBe(mockSvgContent);
    });

    it('should handle empty SVG content', () => {
      mockGetDiagramStrategy.mockReturnValue(() => '');

      renderDiagram(mockWrapper, 'testMethod');

      expect(mockWrapper.innerHTML).toBe('');
    });

    it('should handle SVG content with attributes', () => {
      const mockSvgContent =
        '<svg width="400" height="300" class="diagram-svg">content</svg>';
      mockGetDiagramStrategy.mockReturnValue(() => mockSvgContent);

      renderDiagram(mockWrapper, 'testMethod');

      expect(mockWrapper.innerHTML).toBe(mockSvgContent);
    });
  });

  describe('renderDiagram error handling', () => {
    it('should handle null wrapper gracefully', () => {
      const consoleSpy = vi
        .spyOn(console, 'error')
        .mockImplementation(() => {});

      renderDiagram(null, 'testMethod');

      expect(consoleSpy).toHaveBeenCalledWith(
        'No wrapper element provided for diagram'
      );
      consoleSpy.mockRestore();
    });

    it('should handle undefined wrapper gracefully', () => {
      const consoleSpy = vi
        .spyOn(console, 'error')
        .mockImplementation(() => {});

      renderDiagram(undefined, 'testMethod');

      expect(consoleSpy).toHaveBeenCalledWith(
        'No wrapper element provided for diagram'
      );
      consoleSpy.mockRestore();
    });

    it('should handle missing diagram strategy', () => {
      const consoleSpy = vi
        .spyOn(console, 'error')
        .mockImplementation(() => {});
      mockGetDiagramStrategy.mockReturnValue(null);

      renderDiagram(mockWrapper, 'nonexistentMethod');

      expect(consoleSpy).toHaveBeenCalledWith(
        'No diagram strategy found for:',
        'nonexistentMethod'
      );
      expect(mockWrapper.innerHTML).toBe('');
      consoleSpy.mockRestore();
    });

    it('should handle undefined diagram strategy', () => {
      const consoleSpy = vi
        .spyOn(console, 'error')
        .mockImplementation(() => {});
      mockGetDiagramStrategy.mockReturnValue(undefined);

      renderDiagram(mockWrapper, 'testMethod');

      expect(consoleSpy).toHaveBeenCalledWith(
        'No diagram strategy found for:',
        'testMethod'
      );
      expect(mockWrapper.innerHTML).toBe('');
      consoleSpy.mockRestore();
    });
  });

  describe('renderDiagram with real DOM', () => {
    it('should work with actual DOM element', () => {
      const realWrapper = document.createElement('div');
      realWrapper.className = 'real-diagram';
      document.body.appendChild(realWrapper);

      const mockSvgContent = '<svg>real test</svg>';
      mockGetDiagramStrategy.mockReturnValue(() => mockSvgContent);

      renderDiagram(realWrapper, 'testMethod');

      expect(realWrapper.innerHTML).toBe(mockSvgContent);
      expect(realWrapper.querySelector('svg')).toBeTruthy();
    });

    it('should preserve wrapper attributes', () => {
      mockWrapper.setAttribute('data-test', 'diagram-wrapper');
      mockWrapper.setAttribute('aria-label', 'Set diagram');

      const mockSvgContent = '<svg>test</svg>';
      mockGetDiagramStrategy.mockReturnValue(() => mockSvgContent);

      renderDiagram(mockWrapper, 'testMethod');

      expect(mockWrapper.getAttribute('data-test')).toBe('diagram-wrapper');
      expect(mockWrapper.getAttribute('aria-label')).toBe('Set diagram');
      expect(mockWrapper.innerHTML).toBe(mockSvgContent);
    });
  });
});
