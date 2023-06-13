import { test, Page, expect } from '@playwright/test';
import urls from '../configs/urls';
import HomePage from '../pages/homePage';
import { search1} from '../configs/data'


const { describe, step } = test;
describe('Feature - HomePage', () => {
    test('verify seach page @smoke', async ({ page }) => {
        await step('1. Go to homepage', async () => {
            await page.goto(urls.baseUrl);
        });

        await step('2. click on input', async () => {
            await page.click("//input[contains(@class, 'FormSearchStyle')]");
        });

        await step('3. enter to input', async () => {
            await page.locator("//input[contains(@class, 'FormSearchStyle')]").type(search1.keyword);
        });

        // await step('3. Verify suggestion contain keyword', async () => {
        //     console.log(await page.locator("//div[@class='keyword']").allTextContents());
        //     expect( await page.locator("//div[@class='keyword']").allTextContents()).toContainEqual(search1.keyword);

        // });

    });

});
