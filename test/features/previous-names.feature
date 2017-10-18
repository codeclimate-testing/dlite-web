Feature: Select if I have previously used Names
  As a DMV Customer
  I want to select if I have previously used names
  so that tell you my other identities or not

  Scenario: Selecting Yes
    Given I go to the new online DL application page
    When I visit the page to choose if I ever had previous names
    And I will see that the Continue button is disabled
    When I select Yes
    Then I will see that the Continue button is no longer disabled
    When I click to submit
    Then I will be taken to the previous names info page
    And I go to the page with my summary
    Then I will see Yes for having a previous name

  Scenario: Selecting No
    Given I go to the new online DL application page
    When I visit the page to choose if I ever had previous names
    And I will see that the Continue button is disabled
    When I select No
    Then I will see that the Continue button is no longer disabled
    When I click to submit
    Then I will be taken to revoke or suspended license page
    And I go to the page with my summary
    Then I will see No for having a previous name
