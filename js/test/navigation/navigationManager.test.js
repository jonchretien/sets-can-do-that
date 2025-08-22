import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  updateUrlHash,
  setupNavigation,
} from '../../navigation/navigationManager.js';
import { CONFIG } from '../../config/constants.js';

const mockLocation = {
  _hash: '',
  set hash(value) {
    this._hash = value;
  },
  get hash() {
    return this._hash;
  },
};

const mockAddEventListener = vi.fn();
const mockRemoveEventListener = vi.fn();

Object.defineProperty(window, 'location', {
  value: mockLocation,
  writable: true,
});

Object.defineProperty(window, 'addEventListener', {
  value: mockAddEventListener,
  writable: true,
});

Object.defineProperty(window, 'removeEventListener', {
  value: mockRemoveEventListener,
  writable: true,
});

describe('navigationManager', () => {
  let mockData;
  let mockRenderMethod;

  beforeEach(() => {
    vi.clearAllMocks();
    mockLocation.hash = '';
    mockData = {
      [CONFIG.SET_METHODS.DIFFERENCE]: { name: 'Difference' },
      [CONFIG.SET_METHODS.INTERSECTION]: { name: 'Intersection' },
      [CONFIG.SET_METHODS.UNION]: { name: 'Union' },
      [CONFIG.SET_METHODS.SYMMETRIC_DIFFERENCE]: {
        name: 'Symmetric Difference',
      },
      [CONFIG.SET_METHODS.IS_DISJOINT_FROM]: { name: 'Is Disjoint From' },
      [CONFIG.SET_METHODS.IS_SUBSET_OF]: { name: 'Is Subset Of' },
      [CONFIG.SET_METHODS.IS_SUPERSET_OF]: { name: 'Is Superset Of' },
    };

    mockRenderMethod = vi.fn();
  });

  afterEach(() => {
    mockAddEventListener.mockClear();
    mockRemoveEventListener.mockClear();
  });

  describe('updateUrlHash', () => {
    it('should update window.location.hash with the provided hash', () => {
      const testHash = 'test-hash';
      updateUrlHash(testHash);
      expect(mockLocation.hash).toBe(testHash);
    });

    it('should handle empty hash', () => {
      updateUrlHash('');
      expect(mockLocation.hash).toBe('');
    });

    it('should handle special characters in hash', () => {
      const specialHash = 'test-hash-with-special-chars-!@#$%';
      updateUrlHash(specialHash);
      expect(mockLocation.hash).toBe(specialHash);
    });
  });

  describe('setupNavigation', () => {
    it('should call renderMethod with a valid hash when hash exists in data', () => {
      const validHash = CONFIG.SET_METHODS.DIFFERENCE;
      mockLocation.hash = `#${validHash}`;

      setupNavigation(mockData, mockRenderMethod);

      expect(mockRenderMethod).toHaveBeenCalledWith(validHash);
      expect(mockRenderMethod).toHaveBeenCalledTimes(1);
    });

    it('should call renderMethod with a random method when no hash exists', () => {
      mockLocation.hash = '';

      setupNavigation(mockData, mockRenderMethod);

      expect(mockRenderMethod).toHaveBeenCalledTimes(1);
      const calledMethod = mockRenderMethod.mock.calls[0][0];
      expect(Object.values(CONFIG.SET_METHODS)).toContain(calledMethod);
    });

    it('should call renderMethod with a random method when hash is invalid', () => {
      mockLocation.hash = '#invalid-hash';

      setupNavigation(mockData, mockRenderMethod);

      expect(mockRenderMethod).toHaveBeenCalledTimes(1);
      const calledMethod = mockRenderMethod.mock.calls[0][0];
      expect(Object.values(CONFIG.SET_METHODS)).toContain(calledMethod);
    });

    it('should call renderMethod with a random method when hash is empty string', () => {
      mockLocation.hash = '#';

      setupNavigation(mockData, mockRenderMethod);

      expect(mockRenderMethod).toHaveBeenCalledTimes(1);
      const calledMethod = mockRenderMethod.mock.calls[0][0];
      expect(Object.values(CONFIG.SET_METHODS)).toContain(calledMethod);
    });

    it('should handle hashchange events correctly', () => {
      setupNavigation(mockData, mockRenderMethod);

      // get the event handler function
      const eventHandler = mockAddEventListener.mock.calls[0][1];

      // simulate hash change to a valid method
      mockLocation.hash = `#${CONFIG.SET_METHODS.INTERSECTION}`;
      eventHandler();

      expect(mockRenderMethod).toHaveBeenCalledWith(
        CONFIG.SET_METHODS.INTERSECTION
      );
    });

    it('should handle hashchange events with invalid hash', () => {
      setupNavigation(mockData, mockRenderMethod);

      // get the event handler function
      const eventHandler = mockAddEventListener.mock.calls[0][1];

      // simulate hash change to an invalid method
      mockLocation.hash = '#invalid-hash';
      eventHandler();

      // should call with a random method
      expect(mockRenderMethod).toHaveBeenCalledTimes(2); // Initial call + hashchange call
      const lastCall = mockRenderMethod.mock.calls[1][0];
      expect(Object.values(CONFIG.SET_METHODS)).toContain(lastCall);
    });

    it('should handle hashchange events with empty hash', () => {
      setupNavigation(mockData, mockRenderMethod);

      // get the event handler function
      const eventHandler = mockAddEventListener.mock.calls[0][1];

      // simulate hash change to empty hash
      mockLocation.hash = '#';
      eventHandler();

      // should call with a random method
      expect(mockRenderMethod).toHaveBeenCalledTimes(2); // Initial call + hashchange call
      const lastCall = mockRenderMethod.mock.calls[1][0];
      expect(Object.values(CONFIG.SET_METHODS)).toContain(lastCall);
    });

    it('should call renderMethod immediately on setup', () => {
      setupNavigation(mockData, mockRenderMethod);

      expect(mockRenderMethod).toHaveBeenCalledTimes(1);
    });

    it('should work with different data structures', () => {
      const customData = {
        'custom-method': { name: 'Custom Method' },
        'another-method': { name: 'Another Method' },
      };

      mockLocation.hash = '#custom-method';
      setupNavigation(customData, mockRenderMethod);

      expect(mockRenderMethod).toHaveBeenCalledWith('custom-method');
    });
  });

  describe('random method selection', () => {
    it('should handle single method in data', () => {
      const singleMethodData = {
        [CONFIG.SET_METHODS.DIFFERENCE]: { name: 'Difference' },
      };

      mockLocation.hash = '';
      setupNavigation(singleMethodData, mockRenderMethod);

      // when there's only one method, it should always be called
      expect(mockRenderMethod).toHaveBeenCalledWith(
        CONFIG.SET_METHODS.DIFFERENCE
      );
    });
  });
});
