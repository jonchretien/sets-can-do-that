import { describe, it, expect } from 'vitest';
import { getSetExamplesData } from '../../data/setExamples.js';
import { CONFIG } from '../../config/constants.js';

describe('setExamples', () => {
  describe('getSetExamplesData', () => {
    it('should return set examples data', () => {
      const data = getSetExamplesData();
      expect(data).toBeDefined();
      expect(typeof data).toBe('object');
    });

    it('should contain all expected set methods', () => {
      const data = getSetExamplesData();
      const expectedMethods = Object.values(CONFIG.SET_METHODS);

      expectedMethods.forEach((method) => {
        expect(data).toHaveProperty(method);
      });
    });

    it('should have valid structure for each example', () => {
      const data = getSetExamplesData();

      Object.values(data).forEach((example) => {
        expect(example).toHaveProperty('code');
        expect(example).toHaveProperty('description');
        expect(example).toHaveProperty('emoji');
        expect(example).toHaveProperty('image');
        expect(example).toHaveProperty('output');

        expect(typeof example.code).toBe('string');
        expect(typeof example.description).toBe('string');
        expect(typeof example.emoji).toBe('string');
        expect(typeof example.image).toBe('string');
        expect(typeof example.output).toBe('string');
      });
    });

    it('should have non-empty values for required fields', () => {
      const data = getSetExamplesData();

      Object.values(data).forEach((example) => {
        expect(example.code.length).toBeGreaterThan(0);
        expect(example.description.length).toBeGreaterThan(0);
        expect(example.emoji.length).toBeGreaterThan(0);
        expect(example.image.length).toBeGreaterThan(0);
        expect(example.output.length).toBeGreaterThan(0);
      });
    });
  });
});
