Feature: Inventory Page Links Functionality

  Background: 
    Given the user is on the login page
    And the user login with username "standard_user" and password "secret_sauce"

  Scenario: Log out
    When the user clicks on the "Burger" button at the top left corner
    And the user clicks the Logout link
    Then the user is redirected to the login page
    And Username and Password fields are empty

  Scenario: Clicking on the Cart icon
    When the user clicks on the "Cart" icon at the top right corner
    Then the cart page is displayed
    And the list of products is empty

  Scenario: Clicking on the "Add to cart" button
    When the user clicks on the "Add to cart" button near the first product
    Then the cart count is equal to 1