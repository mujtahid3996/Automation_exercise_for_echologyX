import { test, expect } from '@playwright/test';
import { mainMenuPage } from '../pages/mainmenu.page';
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
