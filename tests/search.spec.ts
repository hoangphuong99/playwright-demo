import test from '../ fixtures/customTest';
import urls from '../configs/urls';
import { search1} from '../configs/data'

const { describe, step } = test;
describe('Feature - HomePage 2', () => {
    test('verify seach page 2 @regression', async ({ pageObjects: { homePage } }) => {
        await step('1. Go to homepage', async () => {
            await homePage.open(urls.baseUrl);
        });

        await step('2. click on input', async () => {
            await homePage.clickInputSearch();
        });

        await step('2. enter to input', async () => {
            await homePage.inputSearch(search1.keyword);
        });

        await step('3. Verify suggestion contain keyword', async () => {
            await homePage.verifySearchKeyword(search1.keyword);

        });

    });

});
