import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import {
  createContentArea,
  renderMethodContent,
} from '../../ui/contentArea.js';
import type { MethodData } from '../../types.js';

describe('contentArea', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  describe('createContentArea', () => {
    it('should create a div element', () => {
      const contentArea = createContentArea();
      expect(contentArea.tagName.toLowerCase()).toBe('div');
    });

    it('should be appendable to DOM', () => {
      const contentArea = createContentArea();
      document.body.appendChild(contentArea);
      const foundElement = document.querySelector('.content-area');
      expect(foundElement).toBe(contentArea);
    });

    it('should create a new element each time', () => {
      const contentArea1 = createContentArea();
      const contentArea2 = createContentArea();
      expect(contentArea1).not.toBe(contentArea2);
    });
  });

  describe('renderMethodContent', () => {
    const mockMethodData: MethodData = {
      emoji: '🍦',
      description: 'Test description for the method',
      example: 'Test example',
      code: '<span class="keyword">const</span> test = true;',
      output:
        '<span class="set">Set</span>(2) {<span class="string">\'test\'</span>}',
    };

    it('should return a string', () => {
      const result = renderMethodContent('testMethod', mockMethodData);
      expect(typeof result).toBe('string');
    });

    it('should include the method name in the title', () => {
      const result = renderMethodContent('difference', mockMethodData);
      expect(result).toContain(
        '<h2 class="content-area__title">difference 🍦</h2>'
      );
    });

    it('should include the emoji in the title', () => {
      const result = renderMethodContent('testMethod', mockMethodData);
      expect(result).toContain('🍦');
    });

    it('should include the description', () => {
      const result = renderMethodContent('testMethod', mockMethodData);
      expect(result).toContain('Test description for the method');
    });

    it('should include the code block', () => {
      const result = renderMethodContent('testMethod', mockMethodData);
      expect(result).toContain(
        '<pre class="code-block"><code class="code-inline">'
      );
      expect(result).toContain(
        '<span class="keyword">const</span> test = true;'
      );
    });

    it('should include the output block', () => {
      const result = renderMethodContent('testMethod', mockMethodData);
      expect(result).toContain(
        '<pre class="code-block"><code class="code-inline">'
      );
      expect(result).toContain(
        '<span class="set">Set</span>(2) {<span class="string">\'test\'</span>}'
      );
    });

    it('should include diagram container', () => {
      const result = renderMethodContent('testMethod', mockMethodData);
      expect(result).toContain(
        '<div class="diagram" aria-hidden="true"></div>'
      );
    });

    it('should handle different method names', () => {
      const result1 = renderMethodContent('union', mockMethodData);
      const result2 = renderMethodContent('difference', mockMethodData);

      expect(result1).toContain('union 🍦');
      expect(result2).toContain('difference 🍦');
    });

    it('should handle HTML content in description', () => {
      const dataWithHtml: MethodData = {
        ...mockMethodData,
        description: 'Test <strong>bold</strong> text',
      };
      const result = renderMethodContent('testMethod', dataWithHtml);
      expect(result).toContain('Test <strong>bold</strong> text');
    });

    it('should handle special characters in method name', () => {
      const result = renderMethodContent('isSubsetOf', mockMethodData);
      expect(result).toContain('isSubsetOf 🍦');
    });
  });
});
