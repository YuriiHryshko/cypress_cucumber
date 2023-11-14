export class LoginPage {
    elements = {

        userNameField: () => cy.get('#user-name'),

        passwordField: () => cy.get('#password'),

        logInButton: () => cy.get('#login-button'),

        errorMessage: () => cy.get('.error-message-container')

    }

    visit() {
        cy.visit('/');
    }

    login(username, password) {
        this.enterUserName(username);
        this.enterPassword(password);
        this.clickLoginButton();
    }

    enterUserName(username) {
        this.elements.userNameField().type(username);
    }

    enterPassword(password) {
        this.elements.passwordField().type(password);
    }

    clickLoginButton() {
        this.elements.logInButton().click();
    }
}