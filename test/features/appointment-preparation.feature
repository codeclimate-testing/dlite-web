Feature: Appointment preparation page
  As a DMV customer
  I want to see what I need to do after my form has been submitted
  So that I know what to do next

  Scenario: Seeing appointment preparation page
    Given I go to the new online DL application page
    When I go to the page with my summary
    When I click to submit
    Then I will be on the page for appointment preparation
    Then I see text for documents needed for a Class C license

  Scenario: Seeing the required documents page
    Given I go to the new online DL application page
    When I visit appointment preparation page
    And I click link for required documents
    Then I will be on the required documents page
