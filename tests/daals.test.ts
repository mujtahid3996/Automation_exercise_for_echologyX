import { test, expect } from '@playwright/test';
import { mainMenuPage } from '../pages/mainmenu.page';

test('validate search functionality is working', async ({ page }) => {
  await page.goto('https://www.daals.co.uk/');

  await page.waitForLoadState('load');
  // Expect a title "to contain" a substring.
  await page.locator('//input[@type="text"]').nth(0).fill('sofa');
});

test('validate logo functionality is working', async ({ page }) => {
    await page.goto('https://www.daals.co.uk/');
  
    await page.waitForLoadState('load');
    // Expect a title "to contain" a substring.
    await page.locator('//div[@class="main-logo"]').nth(0).click();
    //validating if logo clicking functionality is working
    await expect(page.locator('//h2[text()="Accessories"]')).toBeVisible({ timeout: 5000 });
});
test('validate main navigation functionality is working', async ({ page }) => {
    await page.goto('https://www.daals.co.uk/');
  
    await page.waitForLoadState('load');
    // click on lounge settings
    await page.getByRole('link').filter({hasText:' Lounge'}).first().click({force:true});

    await page.waitForLoadState('domcontentloaded');

    // await page.locator('//a[text()="Menu"]').click();

    // await page.waitForLoadState('domcontentloaded');
    await page.locator('//a[text()="Office"]').first().click();

    await page.waitForLoadState('domcontentloaded');
    await page.locator('//a[text()="Bathroom"]').first().click();

    await page.waitForLoadState('domcontentloaded');
    await page.locator('//a[text()="Bedroom"]').first().click();

    await page.waitForLoadState('domcontentloaded');
    await page.locator('//a[text()="kitchen"]').first().click();

    await page.waitForLoadState('domcontentloaded');



});