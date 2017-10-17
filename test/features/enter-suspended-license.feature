Feature: Select and enter my revoked, refused or suspended license info
  As a DMV Customer
  I want to designate and enter if I had a revoked, refused or suspended license
  so that I can address these issues with the DMV

  Scenario: Yes I had a revoked license
    Given I go to the new online DL application page
    When I visit the page to choose if license was suspended
    And I will see that the Continue button is disabled
    When I select Yes
    Then I will see that the Continue button is no longer disabled
    When I click to submit
    Then I will be taken to suspended license info page
    And I go to the page with my summary
    Then I will see Yes in my suspended license selection

  Scenario: I do not have a revoked license
    Given I go to the new online DL application page
    When I visit the page to choose if license was suspended
    And I will see that the Continue button is disabled
    When I select No
    Then I will see that the Continue button is no longer disabled
    When I click to submit
    Then I will be on the page for entering my social security
    And I go to the page with my summary
    Then I will see No in my suspended license selection

  Scenario: Entering information into the form
    Given I go to the new online DL application page
    When I visit the page to enter my suspended license info
    Then I will see that the Continue button is no longer disabled
    And I will see inpurt fields for date and reason for suspension
    When I enter date of my license suspension
    And I enter the reason for my license suspension
    When I click to submit
    Then I will be on the page for entering my social security
    And I go to the page with my summary
    Then I will see the date and reason for my license suspension