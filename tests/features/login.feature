Feature: Login Feature

  Background:
    Given user is on login page

  Scenario: Login success with valid credential
    When user login with username "standard_user" and password "secret_sauce"
    Then user should see products page

  Scenario Outline: Login failed with invalid credentials
    When user login with username "<username>" and password "<password>"
    Then user should see error message "<error_message>"

    Examples:
      | username      | password        | error_message                                                               |
      | standard_user | wrong_password  | Epic sadface: Username and password do not match any user in this service |
      | wrong_user    | secret_sauce    | Epic sadface: Username and password do not match any user in this service |
      |               |                 | Epic sadface: Username is required                                        |