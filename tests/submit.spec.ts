import { expect } from '@playwright/test';
const { test } = require('../fixtures');

// eslint-disable-next-line jest/valid-title
test('Test hello world', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    const button = page.locator('button');

    // Expect a tag "to contain" a substring.
    await expect(button).toContainText('Submit');
});