import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { setupNavigation } from '../../navigation/navigationManager.js';
import { CONFIG } from '../../config/constants.js';
import type { MethodDataMap, EventBus } from '../../types.js';

const mockLocation = {
  _hash: '',
  set hash(value: string) {
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
  let mockData: MethodDataMap;
  let mockEventBus: EventBus;

  beforeEach(() => {
    vi.clearAllMocks();
    mockLocation.hash = '';
    mockData = {
      [CONFIG.SET_METHODS.DIFFERENCE]: { name: 'Difference' },
      [CONFIG.SET_METHODS.INTERSECTION]: { name: 'Intersection' },
      [CONFIG.SET_METHODS.UNION]: { name: 'Union' },
      [CONFIG.SET_METHODS.SYMMETRIC_DIFFERENCE]: { name: 'Symmetric Difference' },
      [CONFIG.SET_METHODS.IS_DISJOINT_FROM]: { name: 'Is Disjoint From' },
      [CONFIG.SET_METHODS.IS_SUBSET_OF]: { name: 'Is Subset Of' },
      [CONFIG.SET_METHODS.IS_SUPERSET_OF]: { name: 'Is Superset Of' },
    } as unknown as MethodDataMap;

    mockEventBus = {
      publish: vi.fn(),
      subscribe: vi.fn(),
      clear: vi.fn(),
    };
  });

  afterEach(() => {
    mockAddEventListener.mockClear();
    mockRemoveEventListener.mockClear();
  });

  describe('setupNavigation', () => {
    it('should publish navigation:methodChanged event with a valid hash when hash exists in data', () => {
      const validHash = CONFIG.SET_METHODS.DIFFERENCE;
      mockLocation.hash = `#${validHash}`;

      setupNavigation(mockData, mockEventBus);

      expect(mockEventBus.publish).toHaveBeenCalledWith(
        'navigation:methodChanged',
        { methodName: validHash }
      );
      expect(mockEventBus.publish).toHaveBeenCalledTimes(1);
    });

    it('should publish navigation:methodChanged event with a random method when no hash exists', () => {
      mockLocation.hash = '';

      setupNavigation(mockData, mockEventBus);

      expect(mockEventBus.publish).toHaveBeenCalledTimes(1);
      const payload = (mockEventBus.publish as ReturnType<typeof vi.fn>).mock.calls[0][1];
      expect(Object.values(CONFIG.SET_METHODS)).toContain(payload.methodName);
    });

    it('should publish navigation:methodChanged event with a random method when hash is invalid', () => {
      mockLocation.hash = '#invalid-hash';

      setupNavigation(mockData, mockEventBus);

      expect(mockEventBus.publish).toHaveBeenCalledTimes(1);
      const payload = (mockEventBus.publish as ReturnType<typeof vi.fn>).mock.calls[0][1];
      expect(Object.values(CONFIG.SET_METHODS)).toContain(payload.methodName);
    });

    it('should publish navigation:methodChanged event with a random method when hash is empty string', () => {
      mockLocation.hash = '#';

      setupNavigation(mockData, mockEventBus);

      expect(mockEventBus.publish).toHaveBeenCalledTimes(1);
      const payload = (mockEventBus.publish as ReturnType<typeof vi.fn>).mock.calls[0][1];
      expect(Object.values(CONFIG.SET_METHODS)).toContain(payload.methodName);
    });

    it('should handle hashchange events correctly', () => {
      setupNavigation(mockData, mockEventBus);

      // get the event handler function
      const eventHandler = mockAddEventListener.mock.calls[0][1];

      // simulate hash change to a valid method
      mockLocation.hash = `#${CONFIG.SET_METHODS.INTERSECTION}`;
      eventHandler();

      expect(mockEventBus.publish).toHaveBeenCalledWith(
        'navigation:methodChanged',
        { methodName: CONFIG.SET_METHODS.INTERSECTION }
      );
    });

    it('should handle hashchange events with invalid hash', () => {
      setupNavigation(mockData, mockEventBus);

      // get the event handler function
      const eventHandler = mockAddEventListener.mock.calls[0][1];

      // simulate hash change to an invalid method
      mockLocation.hash = '#invalid-hash';
      eventHandler();

      // should publish with a random method
      expect(mockEventBus.publish).toHaveBeenCalledTimes(2); // Initial call + hashchange call
      const lastPayload = (mockEventBus.publish as ReturnType<typeof vi.fn>).mock.calls[1][1];
      expect(Object.values(CONFIG.SET_METHODS)).toContain(lastPayload.methodName);
    });

    it('should handle hashchange events with empty hash', () => {
      setupNavigation(mockData, mockEventBus);

      // get the event handler function
      const eventHandler = mockAddEventListener.mock.calls[0][1];

      // simulate hash change to empty hash
      mockLocation.hash = '#';
      eventHandler();

      // should publish with a random method
      expect(mockEventBus.publish).toHaveBeenCalledTimes(2); // Initial call + hashchange call
      const lastPayload = (mockEventBus.publish as ReturnType<typeof vi.fn>).mock.calls[1][1];
      expect(Object.values(CONFIG.SET_METHODS)).toContain(lastPayload.methodName);
    });

    it('should publish event immediately on setup', () => {
      setupNavigation(mockData, mockEventBus);

      expect(mockEventBus.publish).toHaveBeenCalledTimes(1);
    });

    it('should work with different data structures', () => {
      const customData = {
        'custom-method': { name: 'Custom Method' },
        'another-method': { name: 'Another Method' },
      };

      mockLocation.hash = '#custom-method';
      setupNavigation(customData as unknown as MethodDataMap, mockEventBus);

      expect(mockEventBus.publish).toHaveBeenCalledWith(
        'navigation:methodChanged',
        { methodName: 'custom-method' }
      );
    });
  });

  describe('random method selection', () => {
    it('should handle single method in data', () => {
      const singleMethodData = {
        [CONFIG.SET_METHODS.DIFFERENCE]: { name: 'Difference' },
      };

      mockLocation.hash = '';
      setupNavigation(singleMethodData as unknown as MethodDataMap, mockEventBus);

      // when there's only one method, it should always publish that method
      expect(mockEventBus.publish).toHaveBeenCalledWith(
        'navigation:methodChanged',
        { methodName: CONFIG.SET_METHODS.DIFFERENCE }
      );
    });
  });
});
