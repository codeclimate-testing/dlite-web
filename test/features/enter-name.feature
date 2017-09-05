Feature:  I want to enter my name
  As a DMV customer
  I want to save my name in my new online DL application
  So that my id is issued with the correct name

  Scenario: Seeing the empty form
    Given I go to the new online DL application page
    When I visit about-me-names
    Then I will see a field for first, middle and last name
    And I will see a button to submit

  Scenario: Entering my name and saving
    Given I go to the new online DL application page
    When I visit about-me-names
    And I enter my first name
    And I enter my middle name
    And I enter my last name
    And I click to submit
    And I return to the home page
    And I go to the page with my summary
    Then I will see my name on that summary

  Scenario: Seeing a form with existing data
    Given I have already entered my name into the form
    When I visit about-me-names
    Then I will see the name I entered

  Scenario: Updating name data
    Given I have already entered my name into the form
    When I visit about-me-names
    And I change my first name
    And I click to submit
    And I return to the home page
    And I go to the page with my summary
    Then I will see my updated name
