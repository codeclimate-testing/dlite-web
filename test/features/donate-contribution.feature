Feature: Contribute money to Donate Life
  As a DMV Customer
  I want the option to donate money to Donate Life
  so that I add this voluntary contribution to my total fee

  Scenario: I select Yes for donate contribution
    Given I go to the new online DL application page
    When I visit the donate contribution page
    When I select Yes
    When I click to submit
    Then I will be taken to voter intro info page
    And I go to the page with my summary
    Then I will see my donate contribution selection in the summary

  Scenario: Continuing without a selection
    Given I go to the new online DL application page
    When I visit the donate contribution page
    And I click to submit
    Then I will be taken to voter intro info page

  Scenario: Updating donate contrbution
    Given I go to the new online DL application page
    Given I have already entered my donate contribution selection
    When I visit the donate contribution page
    Then I will see the donate contribution selection I chose is selected
    And I change my donate contribution selection
    When I click to submit
    And I go to the page with my summary
    Then I will see my updated donate contribution selection in the summary
