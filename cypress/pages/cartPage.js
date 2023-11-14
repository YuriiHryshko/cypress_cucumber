export class CartPage {
    elements = {

        cartItem: () => cy.get('.cart_item'),

        continueShoppingButton: () => cy.get('#continue-shopping'),

        checkoutButton: () => cy.get('#checkout')

    }

    clickContinueShoppingButton() {
        this.elements.continueShoppingButton().click();
    }

    clickCheckOutButton() {
        this.elements.checkoutButton().click();
    }
}