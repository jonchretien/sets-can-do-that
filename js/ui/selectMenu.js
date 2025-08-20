import { CONFIG } from '../config/constants.js';
import { createElement } from '../utils/domUtils.js';

export function createSelectMenu(onChange) {
  const select = createElement('select');
  select.appendChild(
    createElement('option', {
      textContent: 'Select a composition method',
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

  select.addEventListener('change', (e) => onChange(e.target.value));
  return select;
}
