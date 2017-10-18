Feature: Existing DL or ID number
  As a DMV Customer
  I want to enter my existing Driver's License or Identification Card number
  So that the DMV can more easily look up my record for my requested transaction

  Scenario: Entering my license information into the form
    Given I go to the new online DL application page
    When I visit the page to enter my existing DL/ID license info
    Then I will see that the Continue button is no longer disabled
    And I will see input fields for entering my DL/ID info
    When I enter my existing DL/ID card number
    And I enter the issuing state or country
    And I enter the date of DL/ID expiration
    When I click to submit
    Then I will be taken to previous names page
    And I go to the page with my summary
    Then I will see my previous DL/ID information