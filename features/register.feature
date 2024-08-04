@register
Feature: Register Feature

  Background:
    Given user already on home page

  @positive
  Scenario: Successful registration
  # Note: If the dummy data is already registered or exists
  # please modify numbers at the end of storeName and email
    When user navigates to the registration page
    And user input valid registration details with name "<storeName>", email "<email>", and password "<password>"
    Then user should be registered successfully

    Examples:
      | storeName   | email                | password |
      | dummyuser20 | dummyuser20@mail.com | password |
