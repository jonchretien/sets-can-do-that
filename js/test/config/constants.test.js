import { describe, it, expect } from 'vitest';
import { CONFIG } from '../../config/constants.js';

describe('constants', () => {
  describe('CONFIG.SET_METHODS', () => {
    it('should contain all expected set method constants', () => {
      expect(CONFIG.SET_METHODS).toHaveProperty('DIFFERENCE');
      expect(CONFIG.SET_METHODS).toHaveProperty('INTERSECTION');
      expect(CONFIG.SET_METHODS).toHaveProperty('IS_DISJOINT_FROM');
      expect(CONFIG.SET_METHODS).toHaveProperty('IS_SUBSET_OF');
      expect(CONFIG.SET_METHODS).toHaveProperty('IS_SUPERSET_OF');
      expect(CONFIG.SET_METHODS).toHaveProperty('SYMMETRIC_DIFFERENCE');
      expect(CONFIG.SET_METHODS).toHaveProperty('UNION');
    });

    it('should have correct string values for set methods', () => {
      expect(CONFIG.SET_METHODS.DIFFERENCE).toBe('difference');
      expect(CONFIG.SET_METHODS.INTERSECTION).toBe('intersection');
      expect(CONFIG.SET_METHODS.IS_DISJOINT_FROM).toBe('isDisjointFrom');
      expect(CONFIG.SET_METHODS.IS_SUBSET_OF).toBe('isSubsetOf');
      expect(CONFIG.SET_METHODS.IS_SUPERSET_OF).toBe('isSupersetOf');
      expect(CONFIG.SET_METHODS.SYMMETRIC_DIFFERENCE).toBe(
        'symmetricDifference'
      );
      expect(CONFIG.SET_METHODS.UNION).toBe('union');
    });

    it('should have exactly 7 set methods', () => {
      const methodCount = Object.keys(CONFIG.SET_METHODS).length;
      expect(methodCount).toBe(7);
    });
  });

  describe('CONFIG structure', () => {
    it('should be a frozen object', () => {
      expect(Object.isFrozen(CONFIG)).toBe(true);
    });

    it('should have exactly 2 top-level properties', () => {
      const topLevelCount = Object.keys(CONFIG).length;
      expect(topLevelCount).toBe(2);
    });
  });
});
