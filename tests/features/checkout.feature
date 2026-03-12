Feature: Checkout Feature

  Scenario: User can add 3 products and checkout successfully
    Given user login with valid credential
    And user add 3 products to cart
    When user proceed to checkout and fill information
    Then user should see checkout success message