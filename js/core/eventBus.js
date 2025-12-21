export function createEventBus() {
  const events = new Map();

  function subscribe(eventName, handler) {
    if (!events.has(eventName)) {
      events.set(eventName, new Set());
    }
    events.get(eventName).add(handler);

    return () => {
      events.get(eventName)?.delete(handler);
    };
  }

  function publish(eventName, payload) {
    if (!events.has(eventName)) return;

    events.get(eventName).forEach((handler) => {
      try {
        handler(payload);
      } catch (error) {
        console.error(`Error in ${eventName} handler:`, error);
      }
    });
  }

  function clear(eventName) {
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
