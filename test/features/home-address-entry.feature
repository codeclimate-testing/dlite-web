Feature: CRUD operations on the home address
  As a DMV customer
  I want to save my home address in my new online DL application
  So that the DMV knows how to get in touch with me

  Scenario: Seeing the empty form
    Given I go to the new online DL application page
    When I visit the home addresses page
    Then I will see a form for entering my home address

  Scenario: Seeing lables for home address form
    Given I go to the new online DL application page
    When I visit the home addresses page
    Then I will see correct home address lables
    And I will see that the Continue button is no longer disabled

  Scenario: Entering my address and saving
    Given I go to the new online DL application page
    And I visit the home addresses page
    When I enter my home address
    And I click to submit
    Then I will be asked if my home and mailing addresses are the same
    And I return to the home page
    And I go to the page with my summary
    Then I will see my home address on that summary

  Scenario: Seeing a form with existing data
    Given I go to the new online DL application page
    And I have already entered my home address into the form
    When I visit the home addresses page
    Then I will see the home address I entered

  Scenario: Updating home address data
    Given I go to the new online DL application page
    And I have already entered my home address into the form
    When I visit the home addresses page
    And I change my home zip
    And I return to the home page
    And I go to the page with my summary
    Then I will see my updated home zip
