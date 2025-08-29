import { test, expect } from '@playwright/test';
import { mainMenuPage } from '../pages/mainmenu.page';
import { BasketPage } from '../pages/basket.page';
import { GardenPage } from '../pages/garden.page';

test('validate search functionality is working',{
  annotation: {
    type: 'issue',
    description: 'https://github.com/microsoft/playwright/issues/23180',
  },
}, async ({ page }) => {
  await page.goto('https://www.daals.co.uk/',{waitUntil: 'load'});

  // Expect a title "to contain" a substring.
  await page.locator('//input[@type="text"]').nth(0).fill('sofa');
});

test('validate logo functionality is working', async ({ page }) => {
    await page.goto('https://www.daals.co.uk/',{waitUntil: 'load'});
  
    // Expect a title "to contain" a substring.
    await page.locator('//div[@class="main-logo"]').nth(0).click();
    //validating if logo clicking functionality is working
    await expect(page.locator('//h2[text()="Accessories"]')).toBeVisible({ timeout: 5000 });
});
test('validate main navigation functionality is working', async ({ page }) => {
    await page.goto('https://www.daals.co.uk/',{waitUntil: 'load'});
  
    const mainMenu = new mainMenuPage(page);
    
    await mainMenu.check_popup_Page()
    // click on lounge settings
    await mainMenu.click_lounge()

    await mainMenu.click_dining_link()

    await mainMenu.click_bedroom_link()

    await mainMenu.click_storage_link()
    
    await mainMenu.click_office_link()

});
test('validate adding an item to the basket is working', async ({ page }) => {
    // naviagate to the daals website
    await page.goto('https://www.daals.co.uk/',{waitUntil: 'load'});
    // wait for the page to load

    const mainMenu = new mainMenuPage(page);

    await mainMenu.check_popup_Page()
    // click on lounge 
    await mainMenu.click_lounge()
    //click on a  available product
    await mainMenu.click_on_a_product()

    await page.waitForLoadState('load')

    // click on add to basket button
    await mainMenu.click_add_to_basket()
});
test('Verify the basket page core areas', async ({ page }) => {
    // naviagate to the daals website
    await page.goto('https://www.daals.co.uk/',{waitUntil: 'load'});
    // wait for the page to load
    const mainMenu = new mainMenuPage(page);

    await mainMenu.check_popup_Page()
    // click on lounge 
    await mainMenu.click_lounge()
    //click on a  available product
    await mainMenu.click_on_a_product()

    await page.waitForLoadState('domcontentloaded')
    //click on add to basket button
    await mainMenu.click_add_to_basket()

    // await mainMenu.click_basketlink()
    const basketPage = new BasketPage(page);
    // click on checkout link
    // await basketPage.validate_add_to_basket_button()

    await basketPage.validate_your_basket_header()
    await basketPage.validate_perfect_match_header()
    await basketPage.validate_subtotal()
    await basketPage.validate_delivery()
    await basketPage.validate_remove_item_button()
    await basketPage.validate_checkout_link()
    await basketPage.click_checkout_link()
});
test('Verify a catalouge page: Garden core areas', async ({ page }) => {
    // naviagate to the daals website
    await page.goto('https://www.daals.co.uk/',{waitUntil: 'load'});
    // wait for the page to load
   
    const mainMenu = new mainMenuPage(page);

    await mainMenu.check_popup_Page()
    // click on lounge 
    await mainMenu.click_garden_link()
    //click on a  available product
    const gardenPage = new GardenPage(page);
    await gardenPage.validate_garden_furniture_header()
});
test('Verify a catalouge page: validate sorting is working', async ({ page }) => {
    // naviagate to the daals website
    await page.goto('https://www.daals.co.uk/',{waitUntil: 'load'});
    // wait for the page to load
   

    const mainMenu = new mainMenuPage(page);

    
    await mainMenu.check_popup_Page()
    // click on lounge 
    await mainMenu.click_garden_link()
    //click on a  available product
    const gardenPage = new GardenPage(page);
    await gardenPage.click_on_sort_by()
});
test('Verify a catalouge page: validate sorting is working for newest items', async ({ page }) => {
    // naviagate to the daals website
    await page.goto('https://www.daals.co.uk/',{waitUntil: 'load'});
    // wait for the page to load
   

    const mainMenu = new mainMenuPage(page);

    
    await mainMenu.check_popup_Page()
    // click on lounge 
    await mainMenu.click_garden_link()
    //click on a  available product
    const gardenPage = new GardenPage(page);
    await gardenPage.click_on_sort_by()

    // await gardenPage.click_on_sort_by_newest()
})
test('Verify a catalouge page: validate sorting is working for price low to high', async ({ page }) => {
    // naviagate to the daals website
    await page.goto('https://www.daals.co.uk/',{waitUntil: 'load'});
    // wait for the page to load
   

    const mainMenu = new mainMenuPage(page);

    
    await mainMenu.check_popup_Page()
    // click on lounge 
    await mainMenu.click_garden_link()
    //click on a  available product
    const gardenPage = new GardenPage(page);
    await gardenPage.click_on_sort_by()
    // await gardenPage.click_on_sort_by_price_low_to_high()
})
test('Verify a catalouge page: validate sorting is working for price high to low', async ({ page }) => {
    // naviagate to the daals website
    await page.goto('https://www.daals.co.uk/',{waitUntil: 'load'});
    // wait for the page to load
   

    const mainMenu = new mainMenuPage(page);

    await mainMenu.check_popup_Page()
    // click on lounge 
    await mainMenu.click_garden_link()
    //click on a  available product
    const gardenPage = new GardenPage(page);
    await gardenPage.click_on_sort_by()
    // await gardenPage.click_on_sort_by_price_high_to_low()
})
