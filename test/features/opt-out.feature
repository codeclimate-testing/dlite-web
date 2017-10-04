Feature: Opt-out of Voter Registration
As a DMV Customer
  I want to Opt-Out of Voter Registration
  so that I can register to vote at another time
 
  Scenario: Viewing the form and selecting options
    Given I go to the new online DL application page
    When I visit voter opt out page
    Then I will see that the Continue button is disabled
    And I see three buttons labelled I want to register to vote, I am already registered to vote,  and I am eligible but to not want to be registered to vote at this time
    When I select I want to register to vote
    When I click to submit
    Then I will be taken to voter preferences info page
    And I return to the home page
    And I go to the page with my summary
    Then I will see voter registration choice as I want to register to vote in summary

  Scenario: I am already registered - navigation and summary
    Given I go to the new online DL application page
    When I visit voter opt out page
    When I select I am already registered to vote
    When I click to submit
    Then I will be taken to voter preferences info page
    And I return to the home page
    And I go to the page with my summary
    Then I will see I am already registered to vote as voter registration in summary
    Then I will see voter registration choice as I am already registered to vote in summary

  Scenario: I am saving a No to Voter Registration - navigation and summary
    Given I go to the new online DL application page
    When I visit voter opt out page
    When I select I am eligible but to not want to be registered to vote at this time
    When I click to submit
    Then I will be taken to summary page
    Then I will see voter registration choice as I am eligible but to not want to be registered to vote at this time in summary
