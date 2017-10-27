Feature: Choose if you want to change or add a political party or not
  As a DMV Customer
  I want the choice to add or update a political party preference and choose a choose a political party
  so that I choose to go into the party preference information or skip it

  Scenario: Selecting Yes and select a party
    Given I go to the new online DL application page
    When I visit the political party choose page
    When I select Yes
    Then I will see buttons for each political party
    When I select a political party button
    Then I will see that the Continue button is no longer disabled
    When I click to submit
    Then I will be taken to ballot language page
    And I go to the page with my summary
    Then I will see Yes for my political party choice
    And I will see my political party in summary
    When I visit the political party choose page
    Then I will see Yes and political party selected
    When I change my political party
    And I go to the page with my summary
    Then I will see my political party updated in summary

  Scenario: Selecting No
    Given I go to the new online DL application page
    When I visit the political party choose page
    When I select no political party
    Then I will see that the Continue button is no longer disabled
    When I click to submit
    Then I will be taken to ballot language page