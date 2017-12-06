Feature: Existing DL or ID number
  As a DMV Customer
  I want to enter my existing Driver's License or Identification Card number
  So that the DMV can more easily look up my record for my requested transaction

  Scenario: Yes I have another license and entering my license information into the form
    Given I go to the new online DL application page
    When I visit the page to enter existing license and id
    And I will see that the "Next" button is disabled
    When I select exisiting DL/ID Yes
    Then I will see that the "Next" button is no longer disabled
    And I will see input fields for entering my DL/ID info
    When I enter my existing DL/ID card number
    And I enter the issuing state or country
    And I enter the date of DL/ID expiration
    When I click "Next" to continue
    And I will be taken to previous names page
    And I go to the page with my summary
    Then I will see my previous DL/ID information
    Then I will see Yes in my existing DL/ID selection

  Scenario: I do not have an existing license
    Given I go to the new online DL application page
    When I visit the page to enter existing license and id
    And I will see that the "Next" button is disabled
    When I select existing DL/ID No
    Then I will see that the "Next" button is no longer disabled
    When I click "Next" to continue
    And I will be taken to previous names page
    And I go to the page with my summary
    Then I will see No in my existing DL/ID selection

  Scenario: I want to go back to previous page
    Given I go to the new online DL application page
    When I visit the page to enter existing license and id
    When I click to go back
    Then I will be on the page for entering my social security
    Then I visit the ID or DL selection page
    And I click on the DL checkbox
    When I visit the page to enter existing license and id
    When I click to go back
    Then I will be taken to medical history page
