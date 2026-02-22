import { describe, it, expect, beforeEach, vi } from 'vitest';
import { createEventBus } from '../../core/eventBus.js';
import type { EventBus } from '../../types.js';

describe('eventBus', () => {
  let eventBus: EventBus;

  beforeEach(() => {
    eventBus = createEventBus();
  });

  describe('createEventBus', () => {
    it('should return an object with subscribe, publish, and clear methods', () => {
      expect(typeof eventBus).toBe('object');
      expect(typeof eventBus.subscribe).toBe('function');
      expect(typeof eventBus.publish).toBe('function');
      expect(typeof eventBus.clear).toBe('function');
    });
  });

  describe('subscribe', () => {
    it('should allow subscribing to an event', () => {
      const handler = vi.fn();
      eventBus.subscribe('testEvent', handler);

      eventBus.publish('testEvent', { data: 'test' });

      expect(handler).toHaveBeenCalledWith({ data: 'test' });
    });

    it('should allow multiple subscribers to the same event', () => {
      const handler1 = vi.fn();
      const handler2 = vi.fn();

      eventBus.subscribe('testEvent', handler1);
      eventBus.subscribe('testEvent', handler2);

      eventBus.publish('testEvent', { data: 'test' });

      expect(handler1).toHaveBeenCalledWith({ data: 'test' });
      expect(handler2).toHaveBeenCalledWith({ data: 'test' });
    });

    it('should return an unsubscribe function', () => {
      const handler = vi.fn();
      const unsubscribe = eventBus.subscribe('testEvent', handler);

      expect(typeof unsubscribe).toBe('function');
    });

    it('should allow unsubscribing from an event', () => {
      const handler = vi.fn();
      const unsubscribe = eventBus.subscribe('testEvent', handler);

      eventBus.publish('testEvent', { data: 'first' });
      expect(handler).toHaveBeenCalledTimes(1);

      unsubscribe();

      eventBus.publish('testEvent', { data: 'second' });
      expect(handler).toHaveBeenCalledTimes(1); // Should not be called again
    });

    it('should not affect other subscribers when unsubscribing', () => {
      const handler1 = vi.fn();
      const handler2 = vi.fn();

      const unsubscribe1 = eventBus.subscribe('testEvent', handler1);
      eventBus.subscribe('testEvent', handler2);

      unsubscribe1();

      eventBus.publish('testEvent', { data: 'test' });

      expect(handler1).not.toHaveBeenCalled();
      expect(handler2).toHaveBeenCalledWith({ data: 'test' });
    });

    it('should handle unsubscribing from non-existent event gracefully', () => {
      const handler = vi.fn();
      const unsubscribe = eventBus.subscribe('testEvent', handler);

      eventBus.clear('testEvent');

      expect(() => unsubscribe()).not.toThrow();
    });
  });

  describe('publish', () => {
    it('should not throw when publishing to non-existent event', () => {
      expect(() => eventBus.publish('nonExistent', { data: 'test' })).not.toThrow();
    });

    it('should pass payload to all subscribers', () => {
      const handler1 = vi.fn();
      const handler2 = vi.fn();
      const payload = { message: 'hello', count: 42 };

      eventBus.subscribe('testEvent', handler1);
      eventBus.subscribe('testEvent', handler2);

      eventBus.publish('testEvent', payload);

      expect(handler1).toHaveBeenCalledWith(payload);
      expect(handler2).toHaveBeenCalledWith(payload);
    });

    it('should handle errors in handlers gracefully', () => {
      const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
      const errorHandler = vi.fn(() => {
        throw new Error('Handler error');
      });
      const successHandler = vi.fn();

      eventBus.subscribe('testEvent', errorHandler);
      eventBus.subscribe('testEvent', successHandler);

      eventBus.publish('testEvent', { data: 'test' });

      expect(errorHandler).toHaveBeenCalled();
      expect(successHandler).toHaveBeenCalled(); // Should still be called
      expect(consoleErrorSpy).toHaveBeenCalled();

      consoleErrorSpy.mockRestore();
    });

    it('should call handlers in order of subscription', () => {
      const callOrder: string[] = [];
      const handler1 = vi.fn(() => callOrder.push('handler1'));
      const handler2 = vi.fn(() => callOrder.push('handler2'));
      const handler3 = vi.fn(() => callOrder.push('handler3'));

      eventBus.subscribe('testEvent', handler1);
      eventBus.subscribe('testEvent', handler2);
      eventBus.subscribe('testEvent', handler3);

      eventBus.publish('testEvent');

      expect(callOrder).toEqual(['handler1', 'handler2', 'handler3']);
    });

    it('should work with undefined payload', () => {
      const handler = vi.fn();
      eventBus.subscribe('testEvent', handler);

      eventBus.publish('testEvent');

      expect(handler).toHaveBeenCalledWith(undefined);
    });

    it('should work with null payload', () => {
      const handler = vi.fn();
      eventBus.subscribe('testEvent', handler);

      eventBus.publish('testEvent', null);

      expect(handler).toHaveBeenCalledWith(null);
    });
  });

  describe('clear', () => {
    it('should clear specific event handlers', () => {
      const handler1 = vi.fn();
      const handler2 = vi.fn();

      eventBus.subscribe('event1', handler1);
      eventBus.subscribe('event2', handler2);

      eventBus.clear('event1');

      eventBus.publish('event1', { data: 'test1' });
      eventBus.publish('event2', { data: 'test2' });

      expect(handler1).not.toHaveBeenCalled();
      expect(handler2).toHaveBeenCalledWith({ data: 'test2' });
    });

    it('should clear all event handlers when no event name is provided', () => {
      const handler1 = vi.fn();
      const handler2 = vi.fn();

      eventBus.subscribe('event1', handler1);
      eventBus.subscribe('event2', handler2);

      eventBus.clear();

      eventBus.publish('event1', { data: 'test1' });
      eventBus.publish('event2', { data: 'test2' });

      expect(handler1).not.toHaveBeenCalled();
      expect(handler2).not.toHaveBeenCalled();
    });

    it('should not throw when clearing non-existent event', () => {
      expect(() => eventBus.clear('nonExistent')).not.toThrow();
    });
  });

  describe('integration scenarios', () => {
    it('should support multiple events with different handlers', () => {
      const methodChangedHandler = vi.fn();
      const dataLoadedHandler = vi.fn();

      eventBus.subscribe('methodChanged', methodChangedHandler);
      eventBus.subscribe('dataLoaded', dataLoadedHandler);

      eventBus.publish('methodChanged', { methodName: 'intersection' });
      eventBus.publish('dataLoaded', { data: {} });

      expect(methodChangedHandler).toHaveBeenCalledWith({ methodName: 'intersection' });
      expect(dataLoadedHandler).toHaveBeenCalledWith({ data: {} });
    });

    it('should support dynamic subscription and unsubscription', () => {
      const handler = vi.fn();
      let unsubscribe: () => void;

      // Subscribe
      unsubscribe = eventBus.subscribe('testEvent', handler);
      eventBus.publish('testEvent', { count: 1 });
      expect(handler).toHaveBeenCalledTimes(1);

      // Unsubscribe
      unsubscribe();
      eventBus.publish('testEvent', { count: 2 });
      expect(handler).toHaveBeenCalledTimes(1); // No change

      // Re-subscribe
      unsubscribe = eventBus.subscribe('testEvent', handler);
      eventBus.publish('testEvent', { count: 3 });
      expect(handler).toHaveBeenCalledTimes(2);

      unsubscribe();
    });

    it('should handle complex payloads', () => {
      const handler = vi.fn();
      const complexPayload = {
        methodName: 'intersection',
        data: {
          emoji: '🚗',
          description: 'Test',
          nested: {
            array: [1, 2, 3],
            object: { key: 'value' },
          },
        },
      };

      eventBus.subscribe('complexEvent', handler);
      eventBus.publish('complexEvent', complexPayload);

      expect(handler).toHaveBeenCalledWith(complexPayload);
    });
  });
});
