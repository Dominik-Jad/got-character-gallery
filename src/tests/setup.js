import { expect, afterEach } from 'vitest';

// Step 2: Import the `cleanup` method from `@testing-library/react`.
import { cleanup } from '@testing-library/react';

// Step 3: Import the `matchers` default object from `@testing-library/jest-dom/matchers`
import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

afterEach(() => {
    cleanup();
});