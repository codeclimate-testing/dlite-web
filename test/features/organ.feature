Feature: Donate Life
  As a DMV Customer
  I want the option to register and donate to organ and tissue donation
  So that I can save my relatives from making that decision

  Scenario: Selecting organ donation preference
    Given I go to the new online DL application page
    When I visit the organ page
    And I select Yes
    Then I will see the organ selection I chose is selected
    And I click to submit
    Then I will be on the page for entering my social security
    When I return to the home page
    And I go to the page with my summary
    Then I will not see any contribution selection in the summary
    Then I will see my organ selection in the summary

  Scenario: Selecting voluntary contribution preference
    Given I go to the new online DL application page
    When I visit the organ page
    And I select to voluntarily contribute
    Then I will see the contribution selection I chose is selected
    And I click to submit
    Then I will be on the page for entering my social security
    When I return to the home page
    And I go to the page with my summary
    Then I will not see any organ selection in the summary
    Then I will see my contribution selection in the summary

  Scenario: Selecting organ donation and voluntary contribution
    Given I go to the new online DL application page
    When I visit the organ page
    And I select Yes
    And I select to voluntarily contribute
    And I click to submit
    Then I will be on the page for entering my social security
    When I return to the home page
    And I go to the page with my summary
    Then I will see my organ selection in the summary
    Then I will see my contribution selection in the summary

  Scenario: Updating organ donation preference
    Given I go to the new online DL application page
    Given I have already entered my organ selection
    When I visit the organ page
    Then I will see the organ selection I chose is selected
    When I change my organ selection
    And I click to submit
    Then I will be on the page for entering my social security
    And I return to the home page
    And I go to the page with my summary
    Then I will not see any contribution selection in the summary
    Then I will see my updated organ selection in the summary

  Scenario: Selecting nothing
    Given I go to the new online DL application page
    When I visit the organ page
    And I click to submit
    Then I will be on the page for entering my social security
    When I return to the home page
    And I go to the page with my summary
    Then I will not see any organ or contribution selection in the summary
