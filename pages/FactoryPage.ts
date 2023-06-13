import { Page } from '@playwright/test';
import homePage from './homePage';


export default (page: Page) => ({
    homePage: new homePage(page)
});