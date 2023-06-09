
import React from 'react';
import Button from '../src/components/Button';
import { test, expect } from '@playwright/experimental-ct-react'
test.use({ viewport: { width: 500, height: 1000 } });


test('event should work', async ({ mount, page }) => {


    // Mount a component. Returns locator pointing to the component.
    const component = await mount(
        <Button></Button>
    );

    // As with any Playwright test, assert locator text.
    await expect(component).toContainText('Submit');

});