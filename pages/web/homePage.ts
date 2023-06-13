import { Page } from '@playwright/test';

class homePage {
    
    readonly page: Page;
    static open: any;
    static clickCloseBtn: any;

    constructor(page) {
      this.page = page;
    }

    public async open(url: string) {
        await this.page.goto(url);
    }

    public async clickCloseBtn() {
        await this.page.click('home-popup__close-button');
    }

}

export default homePage;