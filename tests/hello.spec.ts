import { expect } from '@playwright/experimental-ct-react';
const { test } = require('../fixtures');

// eslint-disable-next-line jest/valid-title
test('Test hello world', async ({ page }) => {
    await page.goto('https://hello.kodhek.com/');
    const title = page.locator('.App > .box > h3');

    // Expect a tag "to contain" a substring.
    await expect(title).toContainText('Hello World!');
});