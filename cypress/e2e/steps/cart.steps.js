import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { InventoryPage } from '../../pages/inventoryPage';
import { CartPage } from '../../pages/cartPage';

const inventoryPage = new InventoryPage();
const cartPage = new CartPage();

Given('the first product is added to the cart', () => {
    inventoryPage.clickAddToCartForFirstProduct();
});

When('the user clicks on the "Continue Shopping" button', () => {
    cartPage.clickContinueShoppingButton();
});

When('the user clicks on the "Checkout" button', () => {
    cartPage.clickCheckOutButton();
});

Then('the user is redirected to the checkout page', () => {;
    cy.url().should("contain", "checkout-step-one.html")
});

Then('the list of products contains the added product', () => {
    cartPage.elements.cartItem().should("contain.text", "Sauce Labs Backpack");
});

Then('the user clicks on the "Remove" button near the first product', () => {
    inventoryPage.clickRemoveForFirstProduct();
});

Then('the cart icon is displayed without a number at the top right', () => {
    inventoryPage.elements.cartCount().should('not.exist');
});