Feature: Required documents page
  As a DMV customer
  I want to see what documents I need
  So I know what to bring

  Scenario: I have a social security number
    Given I go to the new online DL application page
    When I visit the social security page
    When I select Yes for social security
    When I enter my full social security number
    And I go to the page with my summary
    And I click to submit
    Then I will be on the page for appointment preparation
    And I click link for required documents
    Then I will be on the required documents page
    Then I will see proof of social security section

  Scenario: I do not have a social security number
    Given I go to the new online DL application page
    When I visit the social security page
    When I select No for social security
    And I go to the page with my summary
    And I click to submit
    Then I will be on the page for appointment preparation
    And I click link for required documents
    Then I will be on the required documents page
    Then I will not see the proof of social security section
