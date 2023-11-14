import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { LoginPage } from '../../pages/loginPage';
import { InventoryPage } from '../../pages/inventoryPage';
import { CartPage } from '../../pages/cartPage';

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();
const cartPage = new CartPage();

Given('the user login with username {string} and password {string}', (username, password) => {
    loginPage.login(username, password);
});

When('the user clicks on the "Burger" button at the top left corner', () => {
    inventoryPage.clickBurgerMenuButton();
});

When('the user clicks the Logout link', () => {
    inventoryPage.clickLogOutLink();
});

When('the user clicks on the "Cart" icon at the top right corner', () => {
    inventoryPage.clickCartIcon();
});

When('the user clicks on the "Add to cart" button near the first product', () => {
    inventoryPage.clickAddToCartForFirstProduct();
});

Then('the cart count is equal to 1', () => {
    inventoryPage.elements.cartCount().should("have.text", "1");
});

Then('the cart page is displayed', () => {
    cy.url().should("contain", "cart.html");
});

Then('the list of products is empty', () => {
    cartPage.elements.cartItem().should("not.exist");
});

Then('the user is redirected to the login page', () => {
    cy.url().should("eq", Cypress.config().baseUrl);
});

Then('Username and Password fields are empty', () => {
    loginPage.elements.userNameField().should("have.value", "");
    loginPage.elements.passwordField().should("have.value", "");
});