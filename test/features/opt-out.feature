Feature: Opt-out of Voter Registration
As a DMV Customer
  I want to Opt-Out of Voter Registration
  so that I can register to vote at another time

  Scenario: Viewing the form and selecting options
    Given I go to the new online DL application page
    When I visit voter opt out page
    Then I will see that the "Next" button is disabled
    And I see three options on opt out page
    When I select I am a new voter in California
    When I click "Next" to continue
    Then I will be taken to voter preferences info page
    And I go to the page with my summary
    Then I will see voter registration choice as I am a new voter in California in summary

  Scenario: I am already registered - navigation and summary
    Given I go to the new online DL application page
    When I visit voter opt out page
    When I select I am already registered to vote in California
    When I click "Next" to continue
    Then I will be taken to updated voter preferences info page
    And I go to the page with my summary
    Then I will see voter registration choice as I am already registered to vote in California in summary

  Scenario: I am saving a No to Voter Registration - navigation and summary
    Given I go to the new online DL application page
    When I visit voter opt out page
    When I select I am eligible to vote, but do not want to register to vote
    When I click "Next" to continue
    Then I will be on the page with my summary
    Then I will see voter registration choice as I am eligible to vote, but do not want to register to vote in summary
