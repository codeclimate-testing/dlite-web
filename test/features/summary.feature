Feature: View Summary Before Submitting
  As a DMV Customer
  I want to view a summary of all my previously submitted answers
  so that I can review they are all correct before I submit the entire application for processing

  Scenario: Review and submit DL information
    Given I go to the new online DL application page
    When I visit eye color page
    Then I will see select buttons for Blue, Gray, Green, Hazel and Brown
    When I select an eye color
    When I return to the home page
    And I go to the page with my summary
    And I click to submit
    Then I will be taken to the success visit page
