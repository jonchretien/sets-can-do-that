# Testing Setup

This project uses [Vitest](https://vitest.dev/) for unit testing, which provides fast execution and excellent integration with Vite.

## Test Structure

```
js/test/
├── setup.js                 # Global test setup and mocks
├── config/                  # Tests for configuration modules
├── data/                    # Tests for data modules
├── ui/                      # Tests for UI components
├── utils/                   # Tests for utility functions
├── navigation/              # Tests for navigation logic
└── svg/                     # Tests for SVG-related modules
```

## Running Tests

### Development Mode (Watch)
```bash
npm test
```
Runs tests in watch mode, automatically re-running when files change.

### Single Run
```bash
npm run test:run
```
Runs all tests once and exits.

### UI Mode
```bash
npm run test:ui
```
Opens Vitest's web UI for a better testing experience.

### Coverage Report
```bash
npm run test:coverage
```
Generates a coverage report showing which code is tested.

## Writing Tests

### Test File Naming
- Test files should end with `.test.js`
- Place test files in the corresponding directory structure under `js/test/`

### Test Structure
```javascript
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

describe('Module Name', () => {
  beforeEach(() => {
    // Setup before each test
  });

  afterEach(() => {
    // Cleanup after each test
  });

  describe('Function Name', () => {
    it('should do something specific', () => {
      // Test implementation
      expect(result).toBe(expected);
    });
  });
});
```

### Common Testing Patterns

#### DOM Testing
```javascript
beforeEach(() => {
  document.body.innerHTML = '<div id="app"></div>';
});

afterEach(() => {
  document.body.innerHTML = '';
});
```

#### Mocking
```javascript
import { vi } from 'vitest';

// Mock a module
vi.mock('../path/to/module', () => ({
  functionName: vi.fn()
}));

// Mock a function
const mockFn = vi.fn();
```

#### Async Testing
```javascript
it('should handle async operations', async () => {
  const result = await asyncFunction();
  expect(result).toBe(expected);
});
```

## Test Setup

The `setup.js` file provides:
- Global DOM mocks (ResizeObserver, IntersectionObserver)
- Test utility functions
- Common test environment configuration

## Best Practices

1. **Test one thing at a time** - Each test should verify a single behavior
2. **Use descriptive test names** - Test names should clearly describe what's being tested
3. **Arrange, Act, Assert** - Structure tests with clear setup, execution, and verification
4. **Clean up after tests** - Always clean up DOM changes and mocks
5. **Test edge cases** - Include tests for error conditions and boundary cases
6. **Keep tests fast** - Avoid slow operations in unit tests

## Debugging Tests

### Console Logging
```javascript
it('should work correctly', () => {
  console.log('Debug info:', someVariable);
  expect(result).toBe(expected);
});
```

### Debug Mode
```bash
npm run test:run -- --reporter=verbose
```

### Break on Failures
```bash
npm run test:run -- --reporter=verbose --bail
```
