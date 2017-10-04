Feature:  I want to enter my weight
  As a DMV customer
  I want to enter my weight
  So that my physical description will accurately reflect my body dimension to assist with identity

  Scenario: Entering my weight and saving
    Given I go to the new online DL application page
    When I visit the weight page
    Then I will see a field for pounds weight
    And I will see that the Continue button is disabled
    When I enter my weight
    Then I will see that the Continue button is no longer disabled
    When I click to submit
    Then I will be on the page for organ selection
    When I return to the home page
    And I go to the page with my summary
    Then I will see my weight on that summary

  Scenario: Updating weight data
    Given I go to the new online DL application page
    And I have already entered my weight into the form
    When I visit the weight page
    Then I will see the weight I entered
    When I change my weight
    And I click to submit
    And I return to the home page
    And I go to the page with my summary
    Then I will see my updated weight on the summary
