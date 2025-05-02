import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.daals.co.uk/');

  // Expect a title "to contain" a substring.
  expect(page.url()).toContain('DAALS | Digital Asset and Algorithmic Trading Solutions');
});