Feature: CRUD operations on the mailing address
  As a DMV customer
  I want to save my mailing address in my new online DL application
  So that the DMV knows how to get in touch with me

  Scenario: Entering my address and saving
    Given I go to the new online DL application page
    And I visit the mailing addresses page
    Then I will see correct mailing address lables
    When I enter my mailing address
    And I click to submit
    Then I will be on the page for entering my physical traits
    And I go to the page with my summary
    Then I will see my mailing address on that summary

  Scenario: Updating mailing address data
    Given I go to the new online DL application page
    And I have already entered my mailing address into the form
    When I visit the mailing addresses page
    Then I will see the mailing address I entered
    And I change my mailing zip
    And I go to the page with my summary
    Then I will see my updated mailing zip
