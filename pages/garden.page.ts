import { expect, type Locator, type Page } from '@playwright/test';

export class GardenPage {

    readonly page: Page;
    readonly gardenFurnitureHeader: Locator;
    readonly filters: Locator;
    readonly sortBy: Locator;
    readonly searchButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.gardenFurnitureHeader = page.locator('h1:has-text("Garden Furniture")').nth(1);
        this.sortBy = page.locator('text=Sort by');
    }
    async validate_garden_furniture_header(){
        // Validate the header of the garden furniture page
        await expect(this.gardenFurnitureHeader).toBeVisible();
    }
    async click_on_sort_by(){
        // Click on the sort by button
     // Click on the filters button
     const sortIcon = this.page.locator('//select[@id="sort-by"]').first();
     await sortIcon.click();
    }
    

    async click_on_sort_by_newest(){
        // Click on the sort by button
     // Click on the filters button
     await this.page.locator('//select[@id="sort-by"]').last().selectOption({label:'Newest'});
     
    }

    async click_on_sort_by_price_low_to_high(){
        // Click on the sort by button
     // Click on the filters button
     await this.page.locator('//select[@id="sort-by"]').last().selectOption({label:'Price: Low to High'})
    }
    async click_on_sort_by_price_high_to_low(){
        // Click on the sort by button
     // Click on the filters button
     await this.page.locator('//select[@id="sort-by"]').last().selectOption({label:'Price: High to Low'})
    }
    async click_on_filters(){
        // Click on the filters button
        const filters = this.page.locator('//select[@id="sort-by"]').nth(1);
        await filters.click();
    }

    async click_on_filter_options(){
       
    }

    async select_filter_option(option: string){
        const optionf = this.page.locator('//option[@value="title-ascending"]').nth(1);
        await optionf.click();
    }

}