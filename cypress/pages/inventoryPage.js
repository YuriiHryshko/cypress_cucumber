export class InventoryPage {

    elements = {

        cartIcon: () => cy.get('#shopping_cart_container'),

        burgerMenuButton: () => cy.get('#react-burger-menu-btn'),

        logOutLink: () => cy.get('#logout_sidebar_link'),

        sortTypeBox: () => cy.get('.product_sort_container'),

        inventoryItems: () => cy.get('.inventory_item'),

        firstAddToCartButton: () => cy.get('#add-to-cart-sauce-labs-backpack'),

        firstRemoveButton: () => cy.get('#remove-sauce-labs-backpack'),

        cartCount: () => cy.get('.shopping_cart_badge')

    }

    clickLogOutLink() {
        this.elements.logOutLink().click();
    }

    clickBurgerMenuButton() {
        this.elements.burgerMenuButton().click();
    }

    selectSortType(sortingOption) {
        this.elements.sortTypeBox().select(sortingOption);
    }

    clickCartIcon() {
        this.elements.cartIcon().click();
    }

    clickAddToCartForFirstProduct() {
        this.elements.firstAddToCartButton().click();
    }

    clickRemoveForFirstProduct() {
        this.elements.firstRemoveButton().click();
    }
}