Feature: CDL application
As a DMV customer
I would like to be able to choose whether I need a CDL or an ID/DL application
So that I can get what I need easily

Scenario: Navigating to the start of the CDL or ID/DL application after choosing
  Given I go to the new online DL application page
  And I visit the page to choose application language
  When I click to continue
  Then I will be on the page to choose application
  When I select a commercial DL application
  And I click "Next" to continue
  Then I will be on the CDL true name page
  When I click to go back
  Then I will be on the page to choose application
  When I select a regular ID or DL application
  And I click "Next" to continue
  Then I will be on the ID.me page

Scenario: New CDL
  Given I go to the new online DL application page
  When I visit the CDL name page
  When I click "Next" to continue
  Then I will see an error message telling me to enter my name
  When I enter my full name
  And I click "Next" to continue
  Then I will be on the CDL dob page
  When I click to go back
  Then I will be on the CDL name page
  And I click "Next" to continue
  When I click "Next" to continue
  Then I will see an error message telling me to enter a valid date
  When I indicate that I am between 17.5 and 18
  Then I will see an info message box show up letting me know limitations on my CDL based on my age
  When I click "Next" to continue
  Then I will be on the CDL WDYWTDT page
  When I select a new commercial DL
  And I click "Next" to continue
  Then I will be on the residency page
  And I click "Next" to continue
  Then I will see an error message telling me I need to make a selection
  And I click Yes to being a resident
  Then I will see correct home address labels
  When I enter my home address
  And I select address interstitial Yes
  When I click "Next" to continue
  Then I will be on the CDL Social Security page
  And I select No for social security
  Then I will see text for no social security info
  When I select Yes for social security
  And I enter my full social security number
  And I click "Next" to continue
  Then I will be on the CDL page to enter my current DL
  And I select existing DL/ID No
  Then I will see an info message about needing to pass the driving test
  When I select existing DL/ID Yes
  Then I will see input fields for entering my current DL info
  When I enter my driver license number
  And I enter the date of DL/ID expiration
  Then I will see an info message letting me know I will need to do more work to get a CDL
  When I click "Next" to continue
  Then I will be on the CDL Real ID page
  When I click yes to getting a real id on my CDL

  When I visit the CDL class page
  And I select Class A
  And I click "Next" to continue

  When I will be on the CDL endorsements page
  And I click yes to wanting an endorsement
  And I click on the tank checkbox
  And I click "Next" to continue

  When I will be on the CDL certificates page
  And I click yes to wanting a certificate
  And I click on the ambulance checkbox

  When I visit the self cert page for CDL
  And I click to drive interstate
  When I click "Next" to continue
  Then I will be on the page to add a motorcycle class

  When I visit the CDL name history page
  And I select previously used names Yes
  And I enter my previously used names
  When I click "Next" to continue
  Then I will be on the CDL license issues page
  And I select suspended license Yes
  And I enter date of my license suspension
  And I enter the reason for my license suspension

  When I go to the CDL summary
  And I will see my name on that summary
  And I will see that I am applying for a new CDL
  And I will see that I am applying for a class A license
  And I will see my between 17.5 and 18 dob on that summary
  And I will see my home address on that summary
  And I will see my social security on that summary
  And I will see I selected to get a tank endorsement
  And I will see my license suspension reason
  Then I will see my "Yes" answer about having a current DL in California
  And I will see my driver license number and expiration date
  When I click in the self-certification drawer
  Then I will see that I am driving interstate

  When I click to edit my CDL name
  Then I will be on the CDL name page
  When I change my first name
  And I click "Next" to continue
  Then I will be on the CDL summary
  When I click to edit my CDL date of birth
  Then I will be on the CDL dob page
  When I click "Next" to continue
  Then I will be on the CDL summary

Scenario: Renewing a CDL
    Given I go to the new online DL application page
    When I visit the CDL WDYWTDT page
    When I select a renewal CDL
    And I click "Next" to continue
    Then I will be on the current CDL page
    When I enter my driver license number
    And I enter the date of DL/ID expiration
    When I visit the CDL Social Security page
    When I select Yes for social security
    And I enter my full social security number
    And I click "Next" to continue
    Then I will be on the CDL Real ID page
    When I visit the CDL motorcycle license page
    And I select No to getting a motorcycle class
    When I go to the CDL summary
    Then I will see that I am renewing my card
    And I will see my current CDL number
    And I will see that I am not getting a motorcycle class

  Scenario: Updating my CDL
    Given I go to the new online DL application page
    When I visit the CDL WDYWTDT page
    And I select to change my CDL
    And I click "Next" to continue
    Then I will be on the current CDL page
    When I enter my driver license number
    And I enter the date of DL/ID expiration
    And I click "Next" to continue
    Then I will be on the page to specify my changes to my CDL
    Then I click to Update my CDL
    And I click to change my name section
    When I go to the CDL summary
    Then I will see that I am updating my card

  Scenario: Replacing my CDL
    Given I go to the new online DL application page
    When I visit the CDL WDYWTDT page
    And I select to replace my CDL
    And I click "Next" to continue
    Then I will be on the current CDL page
    When I enter my driver license number
    And I enter the date of DL/ID expiration
    And I click "Next" to continue
    Then I will be on the page to select reason for replacing my CDL
    Then I select my reason for replacing my CDL
    And I click "Next" to continue
    Then I will be on the residency page

  Scenario: Saying no to having a current DL
    Given I go to the new online DL application page
    When I visit the CDL page to enter my current DL
    And I select existing DL/ID No
    Then I will see an info message about needing to pass the driving test
    When I select existing DL/ID Yes
    Then I will see input fields for entering my current DL info
    When I enter my driver license number
    And I enter the date of DL/ID expiration
    Then I will see an info message letting me know I will need to do more work to get a CDL
    When I go to the CDL summary
    Then I will see my "Yes" answer about having a current DL in California
    And I will see my driver license number and expiration date


  Scenario: Enter my basic information
    Given I go to the new online DL application page
    When I visit the CDL page for entering my physical traits
    And I select my sex
    And I select an eye color
    And I select a hair color
    And I click "Next" to continue
    Then I will be on the CDL page for entering my height and weight
    And I enter my traits
    When I go to the CDL summary
    Then I will see my sex in the summary
    And I will see my eye color in the summary
    And I will see my hair color in the summary
    And I will see my height on that summary
    And I will see my weight on that summary

  Scenario: Organ Donation
    Given I go to the new online DL application page
    When I visit the CDL page for Organ Donation
    Then I choose to donate my organs
    And I choose to contribute
    When I go to the CDL summary
    And I will see my organ selection in the summary
