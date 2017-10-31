Feature: Enter my previously used Names
  As a DMV Customer
  I want to enter my previously used names
  so that I can link my identities together

  Scenario: Selecting Yes
    Given I go to the new online DL application page
    When I visit the page to choose if I ever had previous names
    And I will see that the Continue button is disabled
    When I select previously used names Yes
    Then I will see that the Continue button is no longer disabled
    When I click to submit
    Then I will be taken to the previous names info page
    And I go to the page with my summary
    Then I will see Yes for having a previous name

  Scenario: Selecting No
    Given I go to the new online DL application page
    When I visit the page to choose if I ever had previous names
    And I will see that the Continue button is disabled
    When I select previously used names No
    Then I will see that the Continue button is no longer disabled
    When I click to submit
    Then I will be taken to revoke or suspended license page
    And I go to the page with my summary
    Then I will see No for having a previous name

  Scenario: Entering previously used names
    Given I go to the new online DL application page
    When I visit the page to enter my previously used names
    And I will see that the Continue button is disabled
    And I enter my previously used names
    Then I will see that the Continue button is no longer disabled
    When I click to submit
    Then I will be taken to revoke or suspended license page
    And I go to the page with my summary
    Then I will see my previously used name on that summary

  Scenario: Updating previously used names
    Given I go to the new online DL application page
    And I have already entered my previously used names
    When I visit the page to enter my previously used names
    Then I will see the previously used name I entered
    When I change my previously used name
    And I click to submit
    Then I will be taken to revoke or suspended license page
    And I go to the page with my summary
    Then I will see my updated previously used name
