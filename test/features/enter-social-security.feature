Feature:  I want to enter my name
  As a DMV customer
  I want to save my social security in my new online DL application
  So that my id or license can be used for employment verification

  Scenario: Entering my social security number and saving
    Given I go to the new online DL application page
    When I visit the social security page
    Then I will see a number field for each part of my social security number
    And I will see that the Continue button is disabled
    When I enter my full social security number
    Then I will see that the Continue button is no longer disabled
    When I click to submit
    And I will be taken to license and id history page
    And I go to the page with my summary
    Then I will see my social security on that summary

  Scenario: Updating social security
    Given I go to the new online DL application page
    And I have already entered my social security number
    When I visit the social security page
    Then I will see the social security number that I entered
    When I change my social security number
    And I click to submit
    And I will be taken to license and id history page
    And I go to the page with my summary
    Then I will see my social security number in the summary
  
  Scenario: I want to go back to previous page
    Given I go to the new online DL application page
    When I visit the social security page
    Then I will see a number field for each part of my social security number
    When I click to go back
    Then I will be on the page for entering my height and weight
