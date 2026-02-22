import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getDiagramStrategy } from '../../svg/diagramStrategies.js';
import { CONFIG } from '../../config/constants.js';
import type { DiagramStrategy } from '../../types.js';

describe('diagramStrategies', () => {
  describe('getDiagramStrategy', () => {
    it('should return a function for each valid set method', () => {
      Object.values(CONFIG.SET_METHODS).forEach((method) => {
        const strategy = getDiagramStrategy(method);
        expect(typeof strategy).toBe('function');
      });
    });

    it('should return undefined for invalid method names', () => {
      const invalidStrategy = getDiagramStrategy('invalidMethod');
      expect(invalidStrategy).toBeUndefined();
    });

    it('should return undefined for null method name', () => {
      const nullStrategy = getDiagramStrategy(null);
      expect(nullStrategy).toBeUndefined();
    });

    it('should return undefined for undefined method name', () => {
      const undefinedStrategy = getDiagramStrategy(undefined);
      expect(undefinedStrategy).toBeUndefined();
    });

    it('should return undefined for empty string method name', () => {
      const emptyStrategy = getDiagramStrategy('');
      expect(emptyStrategy).toBeUndefined();
    });
  });

  describe('diagram creation functions', () => {
    let differenceDiagram: DiagramStrategy;
    let intersectionDiagram: DiagramStrategy;
    let unionDiagram: DiagramStrategy;
    let symmetricDifferenceDiagram: DiagramStrategy;
    let disjointDiagram: DiagramStrategy;
    let subsetDiagram: DiagramStrategy;
    let supersetDiagram: DiagramStrategy;

    beforeEach(() => {
      // get all diagram strategies
      differenceDiagram = getDiagramStrategy(CONFIG.SET_METHODS.DIFFERENCE)!;
      intersectionDiagram = getDiagramStrategy(CONFIG.SET_METHODS.INTERSECTION)!;
      unionDiagram = getDiagramStrategy(CONFIG.SET_METHODS.UNION)!;
      symmetricDifferenceDiagram = getDiagramStrategy(
        CONFIG.SET_METHODS.SYMMETRIC_DIFFERENCE
      )!;
      disjointDiagram = getDiagramStrategy(CONFIG.SET_METHODS.IS_DISJOINT_FROM)!;
      subsetDiagram = getDiagramStrategy(CONFIG.SET_METHODS.IS_SUBSET_OF)!;
      supersetDiagram = getDiagramStrategy(CONFIG.SET_METHODS.IS_SUPERSET_OF)!;
    });

    describe('common SVG properties', () => {
      it('should all have consistent viewBox dimensions', () => {
        const allDiagrams = [
          differenceDiagram(),
          intersectionDiagram(),
          unionDiagram(),
          symmetricDifferenceDiagram(),
          disjointDiagram(),
          subsetDiagram(),
          supersetDiagram(),
        ];

        allDiagrams.forEach((svg) => {
          expect(svg).toContain(
            `viewBox="0 0 ${CONFIG.SVG.WIDTH} ${CONFIG.SVG.HEIGHT}"`
          );
        });
      });

      it('should all have white background rectangles', () => {
        const allDiagrams = [
          differenceDiagram(),
          intersectionDiagram(),
          unionDiagram(),
          symmetricDifferenceDiagram(),
          disjointDiagram(),
          subsetDiagram(),
          supersetDiagram(),
        ];

        allDiagrams.forEach((svg) => {
          expect(svg).toContain(
            '<rect width="100%" height="100%" fill="#fff"/>'
          );
        });
      });

      it('should all have proper SVG namespace', () => {
        const allDiagrams = [
          differenceDiagram(),
          intersectionDiagram(),
          unionDiagram(),
          symmetricDifferenceDiagram(),
          disjointDiagram(),
          subsetDiagram(),
          supersetDiagram(),
        ];

        allDiagrams.forEach((svg) => {
          expect(svg).toContain('xmlns="http://www.w3.org/2000/svg"');
        });
      });
    });

    describe('label positioning', () => {
      it('should have consistent label positioning across diagrams', () => {
        const allDiagrams = [
          differenceDiagram(),
          intersectionDiagram(),
          unionDiagram(),
          symmetricDifferenceDiagram(),
          disjointDiagram(),
          subsetDiagram(),
          supersetDiagram(),
        ];

        allDiagrams.forEach((svg) => {
          // all diagrams should have A and B labels
          expect(svg).toContain('>A<');
          expect(svg).toContain('>B<');
        });
      });
    });

    describe('color consistency', () => {
      it('should use consistent colors across diagrams', () => {
        const allDiagrams = [
          differenceDiagram(),
          intersectionDiagram(),
          unionDiagram(),
          symmetricDifferenceDiagram(),
          disjointDiagram(),
          subsetDiagram(),
          supersetDiagram(),
        ];

        allDiagrams.forEach((svg) => {
          // all should use #333 for text
          expect(svg).toContain('fill="#333"');
        });
      });

      it('should use consistent fill colors for highlighted areas', () => {
        const diagramsWithHighlightedAreas = [
          differenceDiagram(),
          intersectionDiagram(),
          unionDiagram(),
          symmetricDifferenceDiagram(),
        ];

        diagramsWithHighlightedAreas.forEach((svg) => {
          // these should use #ea9930 for highlighted areas
          expect(svg).toContain('style="fill:#ea9930"');
        });
      });
    });
  });
});
