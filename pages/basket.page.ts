import { expect, type Locator, type Page } from '@playwright/test';

export class BasketPage {

    readonly page: Page;
    readonly yourBasketHeader: Locator;
    readonly checkoutLink: Locator;
    readonly addToBasketButton: Locator;
    readonly perfectMatchHeader: Locator;
    readonly removeitemButton: Locator;
    readonly subtotal: Locator;
    readonly delivery: Locator;
    readonly checkOutSecurelyLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.yourBasketHeader = page.getByRole('heading', { name: 'Your Basket' });
        this.checkoutLink = page.getByRole('link', { name: 'Checkout' });
        this.addToBasketButton = page.getByRole('button', { name: 'Add to Basket' });
        this.perfectMatchHeader = page.locator('//h2[text()="Perfect match..."]').first();
        this.removeitemButton = page.locator('//a[@title="Remove this item"]').first();
        this.subtotal = page.locator('//span[text()="Subtotal"]').first();
        this.delivery = page.locator('//span[text()="Delivery"]').first();
        this.checkOutSecurelyLink = page.getByRole('link', { name: 'Check out securely' });
       



    }

  
    async click_on_a_product() {
        const product = this.page.locator('//div[@class="product-item-content"]/div/a').first();
        await expect(product).toBeVisible({ timeout: 5000 });
        await product.click();
    }
    
    async click_add_to_basket() {
        const addToBasketButton = this.page.locator('//button[text()="Add to Basket"]').first();  
        await addToBasketButton.scrollIntoViewIfNeeded;
        await addToBasketButton.click();
    }

    async click_checkout_link() {
        await expect(this.checkoutLink).toBeVisible({ timeout: 5000 });
        await this.checkoutLink.click();
    }

    async validate_checkOut_secrely_link() {
        await expect(this.checkOutSecurelyLink).toBeVisible({ timeout: 5000 });
    }

    async validate_your_basket_header() {
        await expect(this.yourBasketHeader).toBeVisible({ timeout: 5000 });
    }
    async validate_perfect_match_header() {
        await expect(this.perfectMatchHeader).toBeVisible({ timeout: 5000 });
    }
    async validate_subtotal() {
        await expect(this.subtotal).toBeVisible({ timeout: 5000 });
    }
    async validate_delivery() {
        await expect(this.delivery).toBeVisible({ timeout: 5000 });
    }
    async validate_remove_item_button() {
        await expect(this.removeitemButton).toBeVisible({ timeout: 5000 });
    }
    async validate_add_to_basket_button() { 
        await expect(this.addToBasketButton).toBeVisible({ timeout: 5000 });
    }
    async validate_checkout_link() {
        await expect(this.checkoutLink).toBeVisible({ timeout: 5000 });
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