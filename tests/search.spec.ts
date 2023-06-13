import { test, Page } from '@playwright/test';
import urls from '../configs/urls';
import homePage from '../pages/web/homepage';


const { describe, step } = test;
describe('Feature - Article', () => {
    test('Create - Verify user can create new article @regression @article @id_1', async () => {
        await step('1. Go to homepage', async () => {
            await homePage.open(urls.baseUrl);
        });

        await step('2. Navigate to log in page', async () => {
            await homePage.clickCloseBtn();
        });

    });

});
