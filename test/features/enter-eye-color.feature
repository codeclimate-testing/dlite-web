Feature: I want to select my eye color
  As a DMV customer
  I want to provide eye color in my new online DL application
  So that the DMV can use it for identification

  Scenario: Entering my eye color
    Given I go to the new online DL application page
    When I visit eye color page
    Then I will see select buttons for Blue, Gray, Green, Hazel and Brown
    And I will see that the Continue button is disabled
    When I select an eye color
    Then I will see the eye color I chose is selected
    Then I will see that the Continue button is no longer disabled
    When I click to submit
    Then I will be on the page for entering my hair color
    And I go to the page with my summary
    Then I will see my eye color in the summary

  Scenario: Updating my eye color
    Given I go to the new online DL application page
    And I have already entered my eye color
    When I visit eye color page
    Then I will see the eye color I chose is selected
    When I change my eye color
    And I click to submit
    And I go to the page with my summary
    Then I will see my updated eye color in the summary
