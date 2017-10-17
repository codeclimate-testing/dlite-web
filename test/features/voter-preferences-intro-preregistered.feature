Feature: Voter Preference page for already registered voters
  As a DMV Customer
  I want a voter preference page for people that are already registered to vote (voter-preferences-intro-preregistered)
  so that I will know what to expect for the next steps

  Scenario: Continuing from preregistered page
    Given I go to the new online DL application page
    When I visit voter preferences intro preregistered page
    Then I see text for voter preference intro preregistered render
    When I click to continue
    Then I will be taken to the political party choose page
