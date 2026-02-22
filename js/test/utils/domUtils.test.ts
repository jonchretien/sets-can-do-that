import { describe, it, expect, afterEach } from 'vitest';
import { createElement } from '../../utils/domUtils.js';

describe('domUtils', () => {
  afterEach(() => {
    // clean up after each test
    document.body.innerHTML = '';
  });

  describe('createElement', () => {
    it('should create an element with the specified tag', () => {
      const div = createElement('div');
      expect(div.tagName.toLowerCase()).toBe('div');

      const span = createElement('span');
      expect(span.tagName.toLowerCase()).toBe('span');

      const button = createElement('button');
      expect(button.tagName.toLowerCase()).toBe('button');
    });

    it('should create element without attributes when none provided', () => {
      const element = createElement('div');
      expect(element.attributes.length).toBe(0);
    });

    it('should set attributes correctly', () => {
      const element = createElement('div', {
        id: 'test-id',
        class: 'test-class',
        'data-test': 'test-value',
      });

      expect(element.getAttribute('id')).toBe('test-id');
      expect(element.getAttribute('class')).toBe('test-class');
      expect(element.getAttribute('data-test')).toBe('test-value');
    });

    it('should handle textContent attribute specially', () => {
      const element = createElement('div', {
        textContent: 'Hello World',
      });

      expect(element.textContent).toBe('Hello World');
      expect(element.getAttribute('textContent')).toBeNull();
    });

    it('should handle mixed attributes and textContent', () => {
      const element = createElement('span', {
        id: 'greeting',
        class: 'message',
        textContent: 'Hello there!',
      });

      expect(element.getAttribute('id')).toBe('greeting');
      expect(element.getAttribute('class')).toBe('message');
      expect(element.textContent).toBe('Hello there!');
    });

    it('should handle empty attributes object', () => {
      const element = createElement('div', {});
      expect(element.attributes.length).toBe(0);
    });

    it('should handle null and undefined attributes gracefully', () => {
      const element = createElement('div', {
        'data-null': null as unknown as string,
        'data-undefined': undefined as unknown as string,
      });

      expect(element.getAttribute('data-null')).toBe('null');
      expect(element.getAttribute('data-undefined')).toBe('undefined');
    });

    it('should create element that can be appended to DOM', () => {
      const element = createElement('div', { id: 'test' });
      document.body.appendChild(element);

      const foundElement = document.getElementById('test');
      expect(foundElement).toBe(element);
    });
  });
});
