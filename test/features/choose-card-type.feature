Feature: I want to choose card type
As a customer
I want the option to get an ID
So that I am able to identify myself to interested parties

  Scenario: Intro page comes after the ID/DL selection
    Given I go to the new online DL application
    And I visit the ID or DL selection page
    Then I click on the DL checkbox
    When I click to submit
    Then I will be on the page for choosing real id
    When I click yes to getting a real id
    And I click to submit
    Then I will be on the get started page
    When I click to go back
    Then I will be on the page for choosing real id
    When I click to go back
    Then I will be on the ID and DL selection page

  Scenario: Navigating to the ID/DL selector page
    Given I go to the new online DL application
    And I visit the date of birth page
    And I enter my full date of birth into the form
    When I click to submit
    Then I will be on the ID and DL selection page
    When I click to go back
    Then I will be taken to date of birth page

  Scenario: Choosing an ID
    Given I go to the new online DL application
    And I visit the ID or DL selection page
    Then I will see that the Continue button is disabled
    When I click on the ID checkbox
    Then I will see that the Continue button is enabled
    When I go to the page with my summary
    Then I will see that my ID card type has been saved

  Scenario: Choosing a DL
    Given I go to the new online DL application
    And I visit the ID or DL selection page
    Then I will see that the Continue button is disabled
    When I click on the DL checkbox
    Then I will see that the Continue button is enabled
    When I go to the page with my summary
    Then I will see that my DL card type has been saved

  Scenario: Choosing both a DL and ID
    Given I go to the new online DL application
    And I visit the ID or DL selection page
    Then I will see that the Continue button is disabled
    When I click on the DL checkbox
    And I click on the ID checkbox
    Then I will see that the Continue button is enabled
    When I go to the page with my summary
    Then I will see that my card types have been saved