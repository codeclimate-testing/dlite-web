Feature: I want to select my hair color
  As a DMV customer
  I want to provide hair color in my new online DL application
  So that the DMV can use it for identification

  Scenario: Entering my hair color
    Given I go to the new online DL application page
    When I visit hair color page
    Then I will see select buttons for all the hair colors
    And I will see that the Continue button is disabled
    When I select a hair color
    Then I will see the hair color I chose is selected
    Then I will see that the Continue button is no longer disabled
    When I click to submit
    Then I will be on the page for entering my height
    And I go to the page with my summary
    Then I will see my hair color in the summary

  Scenario: Updating my hair color
    Given I go to the new online DL application page
    And I have already entered my hair color
    When I visit hair color page
    Then I will see the hair color I chose is selected
    When I change my hair color
    And I click to submit
    And I go to the page with my summary
    Then I will see my updated hair color in the summary
