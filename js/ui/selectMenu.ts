import { CONFIG } from '../config/constants.js';
import { createElement } from '../utils/domUtils.js';
import type { SetMethodName } from '../types.js';

export function createSelectMenu(onChange: (methodName: SetMethodName) => void): HTMLSelectElement {
  const select = createElement('select', {
    'aria-label': 'Select a Set composition method to visualize',
    class: 'select-menu',
  });

  select.appendChild(
    createElement('option', {
      textContent: 'Pick a method',
      disabled: true,
      selected: true,
    })
  );

  Object.values(CONFIG.SET_METHODS).forEach((method) => {
    select.appendChild(
      createElement('option', {
        value: method,
        textContent: method,
      })
    );
  });

  select.addEventListener('change', (e) => onChange((e.target as HTMLSelectElement).value as SetMethodName));
  select.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      select.focus();
    }
  });

  return select;
}
