Feature: Cart Functionality

  Background:
    Given the user is on the login page
    And the user login with username "standard_user" and password "secret_sauce"

  Scenario: Cart with Product
    Given the first product is added to the cart
    When the user clicks on the "Cart" icon at the top right corner
    Then the cart page is displayed
    And the list of products contains the added product

  Scenario: Remove Product from Cart
    Given the first product is added to the cart
    When the user clicks on the "Remove" button near the first product
    Then the cart icon is displayed without a number at the top right

  Scenario: Saving the Cart after Logout
    Given the first product is added to the cart
    When the user clicks on the "Burger" button at the top left corner
    And the user clicks the Logout link
    And the user login with username "standard_user" and password "secret_sauce"
    And the user clicks on the "Cart" icon at the top right corner
    Then the cart page is displayed
    And the list of products contains the added product

  Scenario: Navigate to Products Page from Empty Cart
    When the user clicks on the "Cart" icon at the top right corner
    Then the cart page is displayed
    And the list of products is empty
    When the user clicks on the "Continue Shopping" button
    Then the user is redirected to the inventory page
    And cart are displayed

  Scenario: Navigate to Checkout Page
    When the user clicks on the "Cart" icon at the top right corner
    Then the cart page is displayed
    And the list of products is empty
    When the user clicks on the "Checkout" button
    Then the user is redirected to the checkout page
