import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import { InventoryPage } from '../../pages/inventoryPage';

const inventoryPage = new InventoryPage();

When('the user selects {string} on the sort type box', (sortingOption) => {
    inventoryPage.selectSortType(sortingOption);
});

Then('the list of products starts with {string}', (productName) => {
    inventoryPage.elements.inventoryItems().first().should('contain.text', productName);
});