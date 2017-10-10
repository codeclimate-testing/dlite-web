Feature: Select Preferred Contact Methods
  As a DMV Customer
  I want to choose my preferred contact methods
  so that I can be contacted by my preferred methods

  Scenario: Viewing the form and selecting options
    Given I go to the new online DL application page
    When I visit contact choice page
    Then I will see that the Continue button is no longer disabled
    And I see three buttons labelled Add or Update, Remove and Skip Question
    When I select Add or Update
    When I click to submit
    Then I will be taken to contact details page
    And I return to the home page
    And I go to the page with my summary
    Then I will see contact methods as Add or Update in summary

  Scenario: I want to remove contact method - navigation and summary
    Given I go to the new online DL application page
    When I visit contact choice page
    When I select Remove
    When I click to submit
    Then I will be taken to remove email phone page
    And I return to the home page
    And I go to the page with my summary
    Then I will see contact methods as Remove in summary

  Scenario: I want to skip contact method - navigation and summary
    Given I go to the new online DL application page
    When I visit contact choice page
    When I select Skip Question
    When I click to submit
    Then I will be taken to summary page
    Then I will see contact methods as Skip Question in summary