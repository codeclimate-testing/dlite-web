Feature: CDL application
As a DMV customer
I would like to be able to choose whether I need a CDL or an ID/DL application
So that I can get what I need easily

Scenario: Navigating to cdl what can I do page
  Given  I go to the new online DL application page
  And I visit the page about what I can do in the CDL application
  Then I will see the title of each accordion for cdl what can I do page
  And I click in the title for cdl what can I do accordion
  Then The cdl what can I do info accordion will open to show its full content
  When I click "Next" to continue
  And I will be on the id.me page
  When I click to go back
  Then I will be on the CDL welcome page

Scenario: Navigating to the new page
  Given I go to the new online DL application page
  And I visit the page to choose application language
  When I click to continue
  Then I will be on the page to choose application
  When I select a commercial DL application
  And I click "Next" to continue
  Then I will be on the CDL welcome page
  When I click to go back
  Then I will be on the page to choose application
  When I select a regular ID or DL application
  And I click "Next" to continue
  Then I will be on the IDDL welcome page

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
  When I go to the CDL summary
  And I will see my name on that summary
  And I will see that I am applying for a new CDL
  And I will see my between 17.5 and 18 dob on that summary
  And I will see my home address on that summary
  And I will see my social security on that summary
  Then I will see my "Yes" answer about having a current DL in California
  And I will see my driver license number and expiration date
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
    When I go to the CDL WDYWTDT page
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
    When I go to the CDL summary
    Then I will see that I am renewing my card
    And I will see my current CDL number

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
