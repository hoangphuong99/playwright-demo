import { Page, expect } from '@playwright/test';
import urls from '../configs/urls';

class HomePage {
    
    readonly page: Page;

    constructor(page: Page) {
      this.page = page;
    }

    public async open(url: string) : Promise<void> {
        await this.page.goto(url);
    }

    public async clickInputSearch(): Promise<void> {
        await this.page.click("//input[contains(@class, 'FormSearchStyle')]");
    }

    public async inputSearch(keyword: string): Promise<void> {
        await this.page.locator("//input[contains(@class, 'FormSearchStyle')]").type(keyword);
    }

    public async verifySearchKeyword(keyword: string): Promise<void> {
        console.log(await this.page.locator("//div[@class='keyword']").allTextContents());
        expect( await this.page.locator("//div[@class='keyword']").allTextContents()).toContainEqual(keyword);
    }

}

export default HomePage;