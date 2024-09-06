@login
Feature: login

  Background:
    Given user already on login page

  @positive
  Scenario: Successful login
  # Note: If the dummy data is not registered / expired
  # please register newUser and relogin with that data 
    When user input login credentials with email "<email>" and password "<password>"
    Then user is successfully logged in and redirected to the dashboard page

    Examples:
      | email                | password |
      | dummyuser06@mail.com | password |

  @negative
  Scenario: Failed login with invalid credentials
    When user input login credentials with email "<invalidEmail>" and password "<invalidPassword>"
    Then user sees a popup with the error message "<popupMessage>"

    Examples:
      | invalidEmail        | invalidPassword | popupMessage                       |
      | loremipsum@mail.com | dolorsitamet    | Kredensial yang Anda berikan salah |
