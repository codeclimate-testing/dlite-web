Feature: Voter Preference page for already registered voters
  As a DMV Customer
  I want a voter preference page for people that are already registered to vote (voter-preferences-intro-updated)
  so that I will know what to expect for the next steps

  Scenario: Continuing from preregistered page
    Given I go to the new online DL application page
    When I visit voter updating preferences page
    Then I see text for updating voter preferences render
    When I click "Next" to continue
    Then I will be taken to the political party choose page
  
  Scenario: I want to go back to previous page
    Given I go to the new online DL application page
    When I visit voter updating preferences page
    Then I see text for updating voter preferences render
    When I click to go back
    Then I will be on the page for entering voter opt-out
