import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { createSelectMenu } from '../../ui/selectMenu.js';
import { CONFIG } from '../../config/constants.js';

describe('selectMenu', () => {
  let selectElement;
  let onChangeMock;

  beforeEach(() => {
    onChangeMock = vi.fn();
    selectElement = createSelectMenu(onChangeMock);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  describe('createSelectMenu', () => {
    it('should create a select element', () => {
      expect(selectElement.tagName.toLowerCase()).toBe('select');
    });

    it('should have correct number of options', () => {
      const options = selectElement.querySelectorAll('option');
      // +1 for the default "Pick a method" option
      expect(options.length).toBe(Object.keys(CONFIG.SET_METHODS).length + 1);
    });

    it('should have default "Pick a method" option', () => {
      const firstOption = selectElement.querySelector('option');
      expect(firstOption.textContent).toBe('Pick a method');
      expect(firstOption.disabled).toBe(true);
      expect(firstOption.selected).toBe(true);
    });

    it('should have options for all set methods', () => {
      const methodOptions = Array.from(
        selectElement.querySelectorAll('option')
      ).slice(1);
      const expectedMethods = Object.values(CONFIG.SET_METHODS);

      expect(methodOptions.length).toBe(expectedMethods.length);

      methodOptions.forEach((option, index) => {
        expect(option.value).toBe(expectedMethods[index]);
        expect(option.textContent).toBe(expectedMethods[index]);
        expect(option.disabled).toBe(false);
        expect(option.selected).toBe(false);
      });
    });

    it('should call onChange when selection changes', () => {
      const methodOptions = selectElement.querySelectorAll('option');
      const testOption = methodOptions[1]; // first actual method option

      // simulate change event
      const changeEvent = new Event('change');
      testOption.selected = true;
      selectElement.dispatchEvent(changeEvent);

      expect(onChangeMock).toHaveBeenCalledWith(testOption.value);
    });

    it('should call onChange with correct method value', () => {
      const methodOptions = selectElement.querySelectorAll('option');
      const testOption = methodOptions[2]; // second actual method option

      // simulate change event
      const changeEvent = new Event('change');
      testOption.selected = true;
      selectElement.dispatchEvent(changeEvent);

      expect(onChangeMock).toHaveBeenCalledWith(testOption.value);
    });
  });
});
