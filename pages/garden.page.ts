import { expect, type Locator, type Page } from '@playwright/test';

export class GardenPage {

    readonly page: Page;
    readonly gardenFurnitureHeader: Locator;
    readonly gardenLivingHeader: Locator;
    readonly gardenDiningHeader: Locator;
    readonly gardenSetsByMaterialHeader: Locator;
    readonly gardenAccessoriesHeader: Locator;
    // readonly filters: Locator;
    readonly sortBy: Locator;
    // readonly searchButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.gardenFurnitureHeader = page.locator('h1:has-text("Garden Furniture")');
        this.gardenLivingHeader = page.locator('h1:has-text("Garden Living")');
        this.gardenDiningHeader = page.locator('h1:has-text("Garden Dining")');
        this.gardenSetsByMaterialHeader = page.locator('h1:has-text("Garden Sets by Material")');
        this.gardenAccessoriesHeader = page.locator('h1:has-text("Garden Accessories")');
        // this.filters = page.locator('text=Filters');
        this.sortBy = page.locator('text=Sort by');
    }
    async validate_garden_furniture_header(){
        await this.page.waitForLoadState('load');
        // Validate the header of the garden furniture page
        await expect(this.gardenFurnitureHeader.first()).toBeVisible();
    }
     async validate_garden_Living_header(){
        await this.page.waitForLoadState('load');
        // Validate the header of the garden furniture page
        await expect(this.gardenLivingHeader.first()).toBeVisible();
    }
    async validate_garden_sets_by_material(){
        await this.page.waitForLoadState('load');
        // Validate the header of the garden furniture page
        await expect(this.gardenSetsByMaterialHeader.first()).toBeVisible();
    }
    async validate_garden_accessories(){
        await this.page.waitForLoadState('load');
        // Validate the header of the garden furniture page
        await expect(this.gardenAccessoriesHeader.first()).toBeVisible();
    }

    async validate_garden_dining(){
        await this.page.waitForLoadState('load');
        // Validate the header of the garden furniture page
        await expect(this.gardenDiningHeader.first()).toBeVisible();
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