import { expect, type Locator, type Page } from '@playwright/test';

export class mainMenuPage {
  readonly page: Page;
  readonly accessoriesLink: Locator;
  readonly loungeLink: Locator;
  readonly officeLink: Locator;
  readonly bathroomLink: Locator;
  readonly bedroomLink: Locator;
  readonly gardenLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.accessoriesLink = page.locator('//a[text()="Accessories"]');
    this.loungeLink = page.locator('//a[text()="Lounge"]');
    this.officeLink = page.locator('//a[text()="Office"]');
    this.bathroomLink = page.locator('//a[text()="Bathroom"]');
    this.bedroomLink = page.locator('//a[text()="Bedroom"]');
    this.gardenLink = page.locator('//a[text()="Garden"]');

  }

  async click_office() {
    await this.officeLink.click({ force: true });
  }

  async click_lounge() {
    await this.loungeLink.click({ force: true });
  }

  async click_office_link() {
    await this.officeLink.click({ force: true });
  }

  async click_bathroom_link() {
    await this.bathroomLink.click({ force: true });
  }

  async click_bedroom_link() {
    await this.bedroomLink.click({ force: true });
  }

  async click_garden_link() {
    await this.gardenLink.click({ force: true });
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