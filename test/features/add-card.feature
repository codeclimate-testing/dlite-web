Feature: Add a second card to an existing application
As a DMV customer, who has already completed a single-card application
I want to create a second application for a new card without entering everything again
So that my process is efficient and I have a better experience with government software

Scenario: Choosing to add a new DL
  Given I have already filled out my ID application
  When I visit the page to add a DL
  Then I will see a WDYWTDT page with only the new DL option
  Then I will see that the validations work the same as the WDYWTDT page
  When I choose to add a new DL
  And I click "Next" to continue
  Then I will be on the page to add license type
  Then I will see that the page looks the same as the normal license type page
  And I will see that the validations work the same as the normal license type page
  When I click to go back
  Then I will be on the page to add a DL
  And I click "Next" to continue
  When I click on the car checkbox
  Then I click to not need endorsements
  And I click "Next" to continue
  Then I will be on the page to add medical history
  Then I will see that the page looks like the current medical history page
  And I will see that the page validations behave the same as the current medical history page
  When I click to go back
  Then I will be on the page to add license type
  And I click "Next" to continue
  When I select No to having reportable medical history
  And I click "Next" to continue
  Then I will be on the page to add license history
  Then I will see a page that looks and acts like the existing DL license and ID history page
  When I select existing DL/ID Yes
  And I click "Next" to continue
  Then I will be on the page to add license issues
  When I select suspended license No
  And I click "Next" to continue
  Then I will be on the page with my summary
  And I will see that my DL card type has been saved
  And I will see No for having reportable medical history
  And I will see what license type I need
  And I will see No in my suspended license selection

Scenario: Adding a DL renewal
  Given I have already filled out my ID application
  When I visit the page to add a DL
  And I choose to renew a DL
  And I click "Next" to continue
  Then I will be on the page to add current card info
  When I click to go back
  Then I will be on the page to add a DL
  And I click "Next" to continue
  When I enter my current card data
  And I click "Next" to continue
  Then I will be on the page to add license type
  When I click on the car checkbox
  Then I click to not need endorsements
  And I click "Next" to continue
  Then I will be on the page to add medical history
  When I select No to having reportable medical history
  And I click "Next" to continue
  Then I will be on the page to add license issues
  When I select suspended license No
  And I click "Next" to continue
  Then I will be on the page with my summary
  And I will see my renewal DL card type has been saved
  And I will not see a card history section
  And I will see my DL card info saved

Scenario: Adding a DL update/correct
  Given I have already filled out my ID application
  When I visit the page to add a DL
  And I choose to change a DL
  And I click "Next" to continue
  Then I will be on the page to add current card info
  When I enter my current card data
  And I click "Next" to continue
  Then I will be on the page to add update/correct info
  And I choose to update my DL
  And I check the box to update my name
  When I click "Next" to continue
  Then I will be on the page to add license type
  When I click on the car checkbox
  Then I click to not need endorsements
  And I click "Next" to continue
  Then I will be on the page to add medical history
  When I select No to having reportable medical history
  And I click "Next" to continue
  Then I will be on the page to add license issues
  When I select suspended license No
  And I click "Next" to continue
  Then I will be on the page with my summary
  And I will not see a card history section
  Then I will see that I am updating my DL

Scenario: Adding a DL replacement
  Given I have already filled out my ID application
  When I visit the current card info page
  And I enter my current card data
  When I visit the page to add a DL
  And I choose to replace an added DL
  And I click "Next" to continue
  Then I will be on the page to add replacement details
  And I select the DL was damaged
  When I click "Next" to continue
  Then I will be on the page to add license type
  When I go to the page with my summary
  Then I will not see a card history section
  And I will see that I am replacing my DL

Scenario: Choosing to add a new ID
  Given I have already filled out my DL application
  When I visit the page to add an ID
  Then I will see a WDYWTDT page with the new ID option
  Then I will see that the validations work the same as the WDYWTDT page
  When I choose to add a new ID
  And I click "Next" to continue
  Then I will be on the page to add reduced fee
  When I select No to getting a reduced fee
  And I click "Next" to continue
  Then I will be on the page with my summary
  And I will see that my new ID card type has been saved
  And I will see that I am not opting for a reduced fee

Scenario: Choosing to add a renewal ID
  Given I have already filled out my DL application
  When I visit the page to add an ID
  Then I choose to add a renewal ID
  And I click "Next" to continue
  Then I will be on the page to add current ID info
  When I enter my current card data
  And I click "Next" to continue
  Then I will be on the page to add reduced fee
  When I go to the page with my summary
  Then I will see the info of the ID card saved
