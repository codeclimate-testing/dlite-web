Feature: Select Preferred Contact Choice
  As a DMV Customer
  I want to choose my preferred contact choice
  so that I can be contacted by my preferred choice

  Scenario: Viewing the form and selecting options
    Given I go to the new online DL application page
    When I visit contact choice page
    Then I will see that the Continue button is no longer disabled
    And I see three buttons labelled Yes, No and Skip Question
    When I select Yes
    When I click to submit
    Then I will be taken to email phone page
    And I return to the home page
    And I go to the page with my summary
    Then I will see contact choice as Yes in summary

  Scenario: I want to remove contact choice - navigation and summary
    Given I go to the new online DL application page
    When I visit contact choice page
    When I select No
    When I click to submit
    Then I will be taken to summary page
    Then I will see contact choice as No in summary

  Scenario: I want to skip contact choice - navigation and summary
    Given I go to the new online DL application page
    When I visit contact choice page
    When I select Skip Question
    When I click to submit
    Then I will be taken to summary page
