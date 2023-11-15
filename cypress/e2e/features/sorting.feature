Feature: Sorting Functionality

  Background: 
    Given the user is on the login page
    And the user login with username "standard_user" and password "secret_sauce"

  Scenario: Sorting by name A to Z
    When the user selects "Name (A to Z)" on the sort type box
    Then the list of products starts with "Sauce Labs Backpack"

  Scenario: Sorting by name Z to A
    When the user selects "Name (Z to A)" on the sort type box
    Then the list of products starts with "Test.allTheThings() T-Shirt (Red)"

  Scenario: Sorting by price low to high
    When the user selects "Price (low to high)" on the sort type box
    Then the list of products starts with "Sauce Labs Onesie"

  Scenario: Sorting by price high to low
    When the user selects "Price (high to low)" on the sort type box
    Then the list of products starts with "Sauce Labs Fleece Jacket"
