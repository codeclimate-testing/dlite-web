Feature: Save user data
  As a DMV customer
  I want to save my user data to my application from the summary screen
  So that my application can be used in the field office to enable my request

  Scenario: Save user data
    Given I go to the new online DL application page
    Then I visit the legal name page
    And I enter my first name
    And I enter my middle name
    And I enter my last name
    And I select a suffix
    When I click to submit
    Then I will be on the page for entering my date of birth
    And I enter my full date of birth into the form
    When I click to submit
    Then I will be on the page for entering my address
    And I enter my home address
    And I select address interstitial No
    And I enter my mailing address
    When I click to submit
    Then I will be on the page for entering my physical traits
    And I select my sex
    And I select an eye color
    And I select a hair color
    When I click to submit
    Then I will be on the page for entering my height and weight
    And I enter my feet
    And I enter my inches
    And I enter my weight
    When I click to submit
    Then I will be on the page for entering my social security
    And I select Yes for social security
    And I enter my full social security number
    When I click to submit
    Then I will be taken to medical history page
    And I select Yes to having reportable medical history
    And I enter my medical conditions into the textarea
    When I click to submit
    Then I will be taken to license and id history page
    And I select exisiting DL/ID Yes
    And I enter my existing DL/ID card number
    And I enter the issuing state or country
    And I enter the date of DL/ID expiration
    When I click to submit
    Then I will be taken to previous names page
    And I select previously used names Yes
    And I enter my previously used names
    When I click to submit
    Then I will be taken to the license issues page
    And I select suspended licence Yes
    And I enter date of my license suspension
    And I enter the reason for my license suspension
    When I click to submit
    Then Then I will be on the page for veteran related services
    And I click Yes for veteran
    And I click Yes to receiving additional information about benefits
    And I click Yes about having my license labeled with Veteran
    And I click to submit
    Then I will be on the page for organ selection
    And I choose to donate
    And I choose to contribute
    And I click to submit
    Then I will be taken to voter intro info page
    When I click to continue
    Then I will be on the page for voter citizen status entry
    And I select citizen Yes
    When I click to submit
    Then I will be on the eligibility page
    And I select voter registration Yes
    When I click to submit
    Then I will be on the page for entering voter opt-out
    And I select I am a new voter in California
    When I click to submit
    Then I will be taken to voter preferences info page
    When I click to continue
    Then I will be taken to the political party choose page
    And I select choose party Yes
    And I select a political party button
    When I click to submit
    Then I will be taken to ballot language page
    And I select a language
    When I click to submit
    Then I will be on the page for ballot by mail
    And I select ballot by mail Yes
    When I click to submit
    Then I will be taken to contact methods page
    And I select contact methods Yes
    And I enter my email
    And I enter my phone number
    When I click to submit
    Then I will be taken to voter registration complete page
    And I click to continue
    Then I will be on the page with my summary
    And The Continue button now reads Save and Continue
    When I click the save and continue button
    And There are no errors saving data via API call
    Then I will be on the page for appointment preparation