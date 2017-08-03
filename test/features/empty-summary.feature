Feature: I can see an empty summary page
  As a DMV customer
  I want to be able to see a summary of the data I have entered
  So that I have a clear overview of my application

  Scenario: There is no data in the application
    Given I go to the new online DL application
    When I click to see the summary
    Then I should see a message 'No information has been entered yet'
    And I will not see the link to the summary

  Scenario: Navigating between the application and the summary
    Given I go to the new online DL application
    When I click to see the summary
    And I click to return application
    Then I should see a link to the summary
