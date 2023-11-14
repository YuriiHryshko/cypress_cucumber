Feature: Login Functionality

  Background: 
    Given the user is on the login page

  Scenario: Valid Login
    When the user enters "standard_user" into the "Username" field
    And the user enters "secret_sauce" into the "Password" field
    And the user clicks the "Login" button
    Then the user is redirected to the inventory page
    And cart are displayed

  Scenario: Login with empty password field
    When the user enters "standard_user" into the "Username" field
    And the user clicks the "Login" button
    Then the error message "Epic sadface: Password is required" is displayed

  Scenario: Login with empty username field
    When the user enters "secret_sauce" into the "Password" field
    And the user clicks the "Login" button
    Then the error message "Epic sadface: Username is required" is displayed