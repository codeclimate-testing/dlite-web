Feature: View Summary Before Submitting
  As a DMV Customer
  I want to view a summary of all my previously submitted answers
  so that I can review they are all correct before I submit the entire application for processing

  Scenario: Review and submit DL information
    Given I go to the new online DL application page
    When I visit physical traits page
    And I select my sex
    And I select an eye color
    And I select a hair color
    And I go to the page with my summary
    And I click "Next" to continue
    Then I will be on the page for appointment preparation
