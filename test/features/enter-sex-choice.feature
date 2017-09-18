Feature: Adding information about my sex
  As a DMV customer
  I want to save my sex in the new online DL application
  So that I can be correctly identified via my ID

  Scenario: Entering my sex info
    Given I go to the new online DL application page
    When I visit the sex identification page
    Then I will see select buttons for male and female
    And I will see that the Continue button is disabled
    When I select my sex
    Then I will see that the Continue button is no longer disabled
    When I click to submit
    Then I will be on the page for entering my eye color
    When I return to the home page
    And I go to the page with my summary
    Then I will see my sex listed in the summary

  Scenario: Updating my sex info
    Given I go to the new online DL application page
    And I have already selected my sex
    When I visit the sex identification page
    Then I will see the sex I chose is selected
    When I change my sex
    And I click to submit
    And I return to the home page
    And I go to the page with my summary
    Then I will see my updated sex listed in the summary
