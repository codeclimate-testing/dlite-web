Feature: Disclosing a medical condition
  As a DMV Customer with a medical condition impacting my ability to drive
  I want to disclose my medical details
  So that I meet my responsibilities as a California driver

  Scenario: Selecting Yes
    Given I go to the new online DL application page
    When I visit the medical history page
    And I will see that the "Next" button is disabled
    When I select Yes to having reportable medical history
    And I see the page expand to have a form for entering my conditions
    Then I enter my medical conditions into the textarea
    Then I will see that the "Next" button is no longer disabled
    When I click "Next" to continue
    And I will be taken to license and id history page
    And I go to the page with my summary
    Then I will see Yes for having reportable medical history

  Scenario: Selecting No
    Given I go to the new online DL application page
    When I visit the medical history page
    And I will see that the "Next" button is disabled
    When I select No to having reportable medical history
    Then I will see that the "Next" button is no longer disabled
    When I click "Next" to continue
    And I will be taken to license and id history page
    And I go to the page with my summary
    Then I will see No for having reportable medical history

  Scenario: I want to go back to previous page
    Given I go to the new online DL application page
    When I visit the medical history page
    When I click to go back
    Then I will be on the page for entering my social security
