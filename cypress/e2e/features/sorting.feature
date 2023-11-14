Feature: Sorting Functionality

  Background: 
    Given the user is on the login page
    And the user login with username "standard_user" and password "secret_sauce"

  Scenario: Sorting by name A to Z
    When the user clicks on the "sort type box"
    And the user clicks on "Name (A to Z)" sorting option
    Then the list of products starts with "Sauce Labs Backpack"

  Scenario: Sorting by name Z to A
    When the user clicks on the "sort type box"
    And the user clicks on "Name (Z to A)" sorting option
    Then the list of products starts with "Test.allTheThings() T-Shirt (Red)"

  Scenario: Sorting by price low to high
    When the user clicks on the "sort type box"
    And the user clicks on "Price (low to high)" sorting option
    Then the list of products starts with "Sauce Labs Onesie"

  Scenario: Sorting by price high to low
    When the user clicks on the "sort type box"
    And the user clicks on "Price (high to low)" sorting option
    Then the list of products starts with "Sauce Labs Fleece Jacket"
