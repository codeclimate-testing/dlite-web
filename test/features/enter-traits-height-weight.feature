Feature:  I want to enter my height
  As a DMV customer
  I want to enter my height
  So that my physical description will accurately reflect my body dimension to assist with identity

  Scenario: Entering my weight and saving
    Given I go to the new online DL application page
    When I visit the traits height and weight page
    Then I will see a field for traits height and weight
    And I will see that the Continue button is disabled
    When I enter my feet
    When I enter my inches
    When I enter my weight
    Then I will see that the Continue button is no longer disabled
    And I click to submit
    Then I will be on the page for entering my social security
    And I go to the page with my summary
    Then I will see my height on that summary

  Scenario: Updating weight data
    Given I go to the new online DL application page
    And I have already entered my height and weight into the form
    When I visit the traits height and weight page
    Then I will see traits height and weight I entered
    When I change my inches
    And I click to submit
    And I go to the page with my summary
    Then I will see my updated height on the summary
