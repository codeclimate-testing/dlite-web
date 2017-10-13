Feature:  I want to enter my height
  As a DMV customer
  I want to enter my height
  So that my physical description will accurately reflect my body dimension to assist with identity

  Scenario: Entering my weight and saving
    Given I go to the new online DL application page
    When I visit the height page
    Then I will see a field for height feet and inches
    And I will see that the Continue button is disabled
    When I enter my feet
    Then I will see that the Continue button is no longer disabled
    When I enter my inches
    And I click to submit
    Then I will be on the page for entering my weight
    And I go to the page with my summary
    Then I will see my height on that summary

  Scenario: Updating weight data
    Given I go to the new online DL application page
    And I have already entered my height into the form
    When I visit the height page
    Then I will see the height I entered
    When I change my inches
    And I click to submit
    And I go to the page with my summary
    Then I will see my updated height on the summary
