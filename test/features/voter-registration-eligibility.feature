Feature: Check Voter Registration Eligibility
  As a DMV Customer
  I want to check if I qualify for voter registration status
  so that I can register to vote during this DMV transaction

  Scenario: Seeing the empty form
    Given I go to the new online DL application page
    And I visit the voter eligibility requirements page
    Then I will see buttons for Yes, No and Skip Section

  Scenario: I qualify
    Given I go to the new online DL application page
    When I visit the voter eligibility requirements page
    When I select Yes
    When I click to submit
    And I return to the home page
    And I go to the page with my summary
    Then I will see that I do qualify to register to vote

  Scenario: I do not qualify - saving
    Given I go to the new online DL application page
    When I visit the voter eligibility requirements page
    When I select No
    When I click to submit
    And I return to the home page
    And I go to the page with my summary
    Then I will see that I do not qualify to register to vote

  Scenario: Choose not to answer - saving
    Given I go to the new online DL application page
    When I visit the voter eligibility requirements page
    When I select Skip Section
    When I click to submit
    And I return to the home page
    And I go to the page with my summary
    Then I will see No Answer for if I qualify to register to vote

  Scenario: Continuing with Yes
    Given I go to the new online DL application page
    When I visit the voter eligibility requirements page
    When I select Yes
    And I click to submit
    Then I will be on the page for entering voter opt-out

  Scenario: Continuing with No
    Given I go to the new online DL application page
    When I visit the voter eligibility requirements page
    When I select No
    And I click to submit
    Then I will be on the page for entering voter opt-out

  Scenario: Continuing with Skip Section
    Given I go to the new online DL application page
    When I visit the voter eligibility requirements page
    When I select Skip Section
    And I click to submit
    Then I will be on the page with my summary

  Scenario: Continuing without a selection - skips voter section
    Given I go to the new online DL application page
    When I visit the voter eligibility requirements page
    And I click to submit
    Then I will be on the page with my summary

  Scenario: Seeing a form with existing data
    Given I go to the new online DL application page
    Given I have already entered my voter eligibility requirement status into the form
    When I visit the voter eligibility requirements page
    Then I will see the eligibility requirement status I entered

  Scenario: Updating US citizen status
    Given I go to the new online DL application page
    Given I have already entered my voter eligibility requirement status into the form
    When I visit the voter eligibility requirements page
    And I change my eligibility requirement
    When I click to submit
    And I return to the home page
    And I go to the page with my summary
    Then I will see my updated eligibility requirement status
