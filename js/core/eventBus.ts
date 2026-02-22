import type { EventBus, EventHandler } from '../types.js';

export function createEventBus(): EventBus {
  const events = new Map<string, Set<EventHandler>>();

  function subscribe<T = unknown>(eventName: string, handler: EventHandler<T>) {
    if (!events.has(eventName)) {
      events.set(eventName, new Set());
    }
    events.get(eventName)!.add(handler as EventHandler);

    return () => {
      events.get(eventName)?.delete(handler as EventHandler);
    };
  }

  function publish<T = unknown>(eventName: string, payload?: T) {
    if (!events.has(eventName)) return;

    events.get(eventName)!.forEach((handler) => {
      try {
        handler(payload);
      } catch (error) {
        console.error(`Error in ${eventName} handler:`, error);
      }
    });
  }

  function clear(eventName?: string) {
    if (eventName) {
      events.delete(eventName);
    } else {
      events.clear();
    }
  }

  return {
    subscribe,
    publish,
    clear,
  };
}
