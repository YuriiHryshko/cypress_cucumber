import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { LoginPage } from '../../pages/loginPage';
import { InventoryPage } from '../../pages/inventoryPage';

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

Given('the user is on the login page', () => {
    loginPage.visit();
});

When('the user enters {string} into the "Username" field', (username) => {
    loginPage.enterUserName(username);
});

When('the user enters {string} into the "Password" field', (password) => {
    loginPage.enterPassword(password);
});

When('the user clicks the "Login" button', () => {
    loginPage.clickLoginButton();
});

Then('the user is redirected to the inventory page', () => {
    cy.url().should("contain", "inventory.html");
});

Then('cart are displayed', () => {
    inventoryPage.elements.cartIcon().should("be.visible");
});

Then('the error message {string} is displayed', (errorMessage) => {
    loginPage.elements.errorMessage().should("have.text", errorMessage);
});