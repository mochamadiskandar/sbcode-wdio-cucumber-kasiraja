@login
Feature: login

  Background:
    Given user already on login page

  @positive
  Scenario: Successful login
    When user input valid login credentials with email "<email>" and password "<password>"
    Then user is successfully logged in and redirected to the dashboard page

    Examples:
      | email                | password |
      | dummyuser00@mail.com | password |
