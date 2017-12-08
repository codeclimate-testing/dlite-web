Feature:  I want to enter my social security number
  As a DMV customer
  I want to save my social security in my new online DL application
  So that my id or license can be used for employment verification

  Scenario: Yes, I have a social security number
    Given I go to the new online DL application page
    Then I visit the ID or DL selection page
    And I click on the ID checkbox
    When I visit the social security page
    Then The social security text matches the comp for unexpanded page
    And I will see that the "Next" button is disabled
    When I select Yes for social security
    Then I will see a number field for each part of my social security number
    When I enter my full social security number
    Then I will see that the "Next" button is no longer disabled
    When I click "Next" to continue
    And I will be taken to license and id history page
    And I go to the page with my summary
    Then I will see my social security on that summary

  Scenario: No, I do not have a social security number
    Given I go to the new online DL application page
    When I visit the social security page
    When I select No for social security
    Then I will see text for no social security info
    Then I will see that the "Next" button is no longer disabled
    When I click "Next" to continue
    And I will be taken to license and id history page
    And I go to the page with my summary
    Then I will see that I do not have a social security number

  Scenario: Updating social security
    Given I go to the new online DL application page
    When I visit the social security page
    And I have already entered my social security number
    Then I visit the ID or DL selection page
    And I click on the DL checkbox
    When I visit the social security page
    Then I will see the social security number that I entered
    When I change my social security number
    And I click "Next" to continue
    Then I will be taken to medical history page
    And I go to the page with my summary
    Then I will see my social security number in the summary

  Scenario: I want to go back to previous page
    Given I go to the new online DL application page
    When I visit the social security page
    When I click to go back
    Then I will be on the page for entering my height and weight
