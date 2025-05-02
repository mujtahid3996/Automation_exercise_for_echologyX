import { expect, type Locator, type Page } from '@playwright/test';

export class loungePage {

    readonly page: Page;
    readonly accessoriesLink: Locator;
    readonly loungeLink: Locator;
    readonly officeLink: Locator;
    readonly bathroomLink: Locator;
    readonly bedroomLink: Locator;
    readonly gardenLink: Locator;
    readonly diningLink: Locator;
    readonly storageLink: Locator;
    readonly BasketLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.accessoriesLink = page.getByRole('link', { name: 'Accessories' }).first();
        this.loungeLink = page.getByRole('link', { name: 'Lounge' }).first();
        this.officeLink = page.getByRole('link', { name: 'Office' }).first();
        this.bedroomLink = page.getByRole('link', { name: 'Bedroom' }).first();
        this.gardenLink = page.getByRole('link', { name: 'Garden' }).first();
        this.diningLink = page.getByRole('link', { name: 'Dining' }).first();
        this.storageLink = page.getByRole('link', { name: 'Storage' }).first();
        this.BasketLink = page.locator('//li[@id="cart_block_mobile"]').first();



    }

    async click_lounge() {
        await expect(this.loungeLink).toBeVisible({ timeout: 5000 });
        await this.loungeLink.click();
    }

    async click_office_link() {
        await expect(this.officeLink).toBeVisible({ timeout: 5000 });
        await this.officeLink.click();
    }

    async click_bathroom_link() {
        await expect(this.bathroomLink).toBeVisible({ timeout: 5000 });
        await this.bathroomLink.click();
    }

    async click_bedroom_link() {
        await expect(this.bedroomLink).toBeVisible({ timeout: 5000 });
        await this.bedroomLink.click();
    }

    async click_garden_link() {
        await expect(this.gardenLink).toBeVisible({ timeout: 5000 });
        await this.gardenLink.click();
    }

    async click_dining_link() {
        await expect(this.diningLink).toBeVisible({ timeout: 5000 });
        await this.diningLink.click();
    }

    async click_storage_link() {
        await expect(this.storageLink).toBeVisible({ timeout: 5000 });
        await this.storageLink.click();
    }

    async click_on_a_product() {
        const product = this.page.locator('//div[@class="product-item-content"]/div/a').first();
        await expect(product).toBeVisible({ timeout: 5000 });
        await product.click();
    }
    
    async click_add_to_basket() {
        const addToBasketButton = this.page.locator('//button[text()="Add to Basket"]').first();  
        await addToBasketButton.scrollIntoViewIfNeeded();
        await addToBasketButton.click();
    }


    async click_basketlink() {
        await expect(this.BasketLink).toBeVisible({ timeout: 5000 });
        await this.BasketLink.click();
    }


    //   async getStarted() {
    //     await this.getStartedLink.first().click();
    //     await expect(this.gettingStartedHeader).toBeVisible();
    //   }

    //   async pageObjectModel() {
    //     await this.getStarted();
    //     await this.pomLink.click();
    //   }
}