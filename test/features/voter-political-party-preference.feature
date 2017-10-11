Feature: Select a political party preference page
  As a DMV Customer
  I want to choose a political party
  so that I can get that party's primary materials

Scenario: Select a party
  Given I go to the new online DL application page
  When I visit the political party preference page
  Then I will see buttons for each political party
  And I will see that the Continue button is disabled
  When I select a political party button
  Then I will see that the Continue button is no longer disabled
  And I click to submit
  Then I will be taken to ballot language page
  And I return to the home page
  And I go to the page with my summary
  Then I will see my political party in summary
  And I return to the home page
  When I visit the political party preference page
  Then I will see my my political party selected
  When I change my political party
  And I return to the home page
  And I go to the page with my summary
  Then I will see my political party updated in summary