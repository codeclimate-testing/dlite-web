Feature: CRUD operations on the address
  As a DMV customer
  I want to save my home address in my new online DL application
  So that the DMV knows how to get in touch with me

  Scenario: My addresses are the same
    Given I go to the new online DL application page
    And I visit the addresses page
    Then I will see correct home address labels
    When I enter my home address
    And I select address interstitial Yes
    And I go to the page with my summary
    Then I will see residence address and mailing address will have the same information

  Scenario: My addresses are not the same
    Given I go to the new online DL application page
    And I visit the addresses page
    When I enter my home address
    And I select address interstitial No
    Then I will see correct mailing address labels
    When I enter my mailing address
    And I click to submit
    Then I will be on the page for entering my physical traits
    And I go to the page with my summary
    Then I will see my mailing address on that summary

  Scenario: Updating my address
    Given I go to the new online DL application page
    And I have already entered my address into the form
    When I visit the addresses page
    Then I will see the home address I entered
    And I change my home zip
    And I go to the page with my summary
    Then I will see my updated home zip
  
  Scenario: I want to go back to previous page
    Given I go to the new online DL application page
    When I visit the addresses page
    Then I will see correct home address labels
    When I click to go back
    Then I will be taken to date of birth page
