import type { SetMethodName } from '../types.js';

export const CONFIG = Object.freeze({
  SET_METHODS: {
    DIFFERENCE: 'difference' as SetMethodName,
    INTERSECTION: 'intersection' as SetMethodName,
    IS_DISJOINT_FROM: 'isDisjointFrom' as SetMethodName,
    IS_SUBSET_OF: 'isSubsetOf' as SetMethodName,
    IS_SUPERSET_OF: 'isSupersetOf' as SetMethodName,
    SYMMETRIC_DIFFERENCE: 'symmetricDifference' as SetMethodName,
    UNION: 'union' as SetMethodName,
  },
  SVG: {
    WIDTH: 300,
    HEIGHT: 200,
  },
});
