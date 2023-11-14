import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import { InventoryPage } from '../../pages/inventoryPage';

const inventoryPage = new InventoryPage();

When('the user clicks on the "sort type box"', () => {
    inventoryPage.clickSortTypeBox();
});

When('the user clicks on {string} sorting option', (sortingOption) => {
    inventoryPage.selectSortType(sortingOption);
});

Then('the list of products starts with {string}', (productName) => {
    inventoryPage.elements.inventoryList().first().should('contain.text', productName);
});