import { expect, type Locator, type Page } from '@playwright/test';

export class GardenPage {

    readonly page: Page;
    readonly gardenFurnitureHeader: Locator;
    readonly filters: Locator;
    readonly sortBy: Locator;
    readonly searchButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.gardenFurnitureHeader = page.locator('h1:has-text("Garden Furniture")');
        this.sortBy = page.locator('text=Sort by');
    }
    async validate_garden_furniture_header(){
        // Validate the header of the garden furniture page
        await expect(this.gardenFurnitureHeader).toBeVisible();
    }
    async click_on_sort_by(){
        // Click on the sort by button
        const sortBY = this.page.locator('text=Sort by');
        await sortBY.click();
        // Validate the sort by options
        const sortByOptions = this.page.locator('.sort-by-options');
        await expect(sortByOptions).toBeVisible();
    }
    async click_on_filters(){
        // Click on the filters button
        const filters = this.page.locator('text=Filters');
        await filters.click();
        // Validate the filters options
        const filterOptions = this.page.locator('.filter-options');
        await expect(filterOptions).toBeVisible();
    }

}