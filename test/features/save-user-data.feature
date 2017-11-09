Feature: Save user data
  As a DMV customer
  I want to save my user data to my application from the summary screen
  So that my application can be used in the field office to enable my request

  Scenario: Summary screen has a reload button
    Given I go to the new online DL application page
    And I visit app intro page
    And I click to continue
    When I enter my first name
    And I enter my middle name
    And I enter my last name
    When I click to submit
    And I go to the page with my summary
    And I see the reload button
    And I click the reload button
    Then I will see that the data I entered disappears from the summary

  Scenario: Summary screen has a save button that saved
    Given I go to the new online DL application page
    And I visit app intro page
    And I click to continue
    When I enter my first name
    And I enter my middle name
    And I enter my last name
    When I click to submit
    And I go to the page with my summary
    And I see the save button
    And I click the save button
    And I click the reload button
    Then I will see all my data persists in the summary

  Scenario: Saving partial data and reloading
    Given I go to the new online DL application page
    And I visit app intro page
    And I click to continue
    When I enter my first name
    And I enter my middle name
    And I enter my last name
    When I click to submit
    And I go to the page with my summary
    And I see the save button
    And I visit the addresses page
    When I enter my home address
    And I go to the page with my summary
    And I click the reload button
    Then I will see all my name data, but not my residential address