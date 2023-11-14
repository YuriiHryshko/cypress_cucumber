export class InventoryPage {

    elements = {

        cartIcon: () => cy.get('#shopping_cart_container'),

        burgerMenuButton: () => cy.get('#react-burger-menu-btn'),

        logOutLink: () => cy.get('#logout_sidebar_link'),

        sortTypeBox: () => cy.get('.select_container'),

        inventoryList: () => cy.get('.inventory_list'),

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

    clickSortTypeBox() {
        this.elements.sortTypeBox().click();
    }

    selectSortType(sortingOption) {
        this.elements.sortTypeBox().filter(':contains("' + sortingOption + '")').click();
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