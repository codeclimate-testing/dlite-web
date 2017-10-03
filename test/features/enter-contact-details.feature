Feature: Enter my email address and phone
  As a DMV Customer
  I want to enter my email address and phone number
  so that the Secretary of State can contact me related to voter information

  Scenario: Entering my email address and saving
    Given I go to the new online DL application page
    When I visit voter contact details page
    And I will see a button to submit
    Then I will see that the Continue button is disabled
    And I enter email
    Then I will see that the Continue button is no longer disabled
    And I click to submit
    Then I will be on the page with my summary
    And I will see my email on that summary

  Scenario: Updating email address
    Given I have already entered my email into the form
    And I return to the home page
    When I visit voter contact details page
    Then I will see the email I entered
    And I change my email
    And I click to submit
    Then I will see my updated email

  Scenario: Entering my phone number and saving
    Given I go to the new online DL application page
    When I visit voter contact details page
    Then I will see that the Continue button is disabled
    And I enter my phone number
    Then I will see that the Continue button is no longer disabled
    And I click to submit
    Then I will be on the page with my summary
    And I will see my phone number on that summary

  Scenario: Updating phone number
    Given I go to the new online DL application page
    And I have already entered my phone number into the form
    And I return to the home page
    When I visit voter contact details page
    Then I will see the phone number I entered
    And I change my phone number
    And I click to submit
    Then I will see my updated phone number

