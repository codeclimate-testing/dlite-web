Feature: Add a second card to an existing application
As a DMV customer, who has already completed a single-card application
I want to create a second application for a new card without entering everything again
So that my process is efficient and I have a better experience with government software

Scenario: Choosing to add a new DL
  Given I have already filled out my ID application
  When I click to add a DL
  Then I will see a WDYWTDT page with only the new DL option
  Then I will see that the validations work the same as the WDYWTDT page
  When I choose to add a new DL
  And I click "Next" to continue
  Then I will be on the add license type page
  Then I will see that the page looks the same as the normal license type page
  And I will see that the validations work the same as the normal license type page
  When I click to go back
  Then I will see a WDYWTDT page with only the new DL option
  And I click "Next" to continue
  When I click on the car checkbox
  Then I click to not need endorsements
  And I click "Next" to continue
  Then I will be taken to add medical history page
  Then I will see that the page looks like the current medical history page
  And I will see that the page validations behave the same as the current medical history page
  When I click to go back
  Then I will be on the add license type page
  And I click "Next" to continue
  When I select No to having reportable medical history
  And I click "Next" to continue
  Then I will be on the page to add existing license and id
  Then I will see a page that looks and acts like the existing DL license and ID history page
  When I select existing DL/ID Yes
  And I click "Next" to continue
  Then I will be taken to the add license issues page
  When I select suspended license No
  And I click "Next" to continue
  Then I will be on the page with my summary
  And I will see that my new ID card type has been saved
  And I will see that my DL card type has been saved
  And I will see No for having reportable medical history
  And I will see what license type I need
  And I will see No in my suspended license selection

Scenario: Adding a DL renewal
  Given I have already filled out my ID application
  When I click to add a DL
  And I choose to renew a DL
  And I click "Next" to continue
  Then I will be on the add current card info page
  When I click to go back
  Then I will see a WDYWTDT page with only the new DL option
  And I click "Next" to continue
  When I enter my current card data
  And I click "Next" to continue
  Then I will be on the add license type page
  When I click on the car checkbox
  Then I click to not need endorsements
  And I click "Next" to continue
  Then I will be taken to add medical history page
  When I select No to having reportable medical history
  And I click "Next" to continue
  Then I will be taken to the add license issues page
  When I select suspended license No
  And I click "Next" to continue
  Then I will be on the page with my summary
  And I will see my renewal DL card type has been saved
  And I will not see a card history section
  And I will see my DL card info saved
  And I will see that my new ID card type has been saved

Scenario: Adding a DL update/correct
  Given I have already filled out my ID application
  When I click to add a DL
  And I choose to change a DL
  And I click "Next" to continue
  Then I will be on the add current card info page
  When I enter my current card data
  And I click "Next" to continue
  Then I will be on the page to add choosing to update or correct my card
  And I choose to update my DL
  And I check the box to update my name
  When I click "Next" to continue
  Then I will be on the add license type page
  When I click on the car checkbox
  Then I click to not need endorsements
  And I click "Next" to continue
  Then I will be taken to add medical history page
  When I select No to having reportable medical history
  And I click "Next" to continue
  Then I will be taken to the add license issues page
  When I select suspended license No
  And I click "Next" to continue
  Then I will be on the page with my summary
  And I will not see a card history section
  Then I will see that I am updating my DL
  And I will see that my new ID card type has been saved

Scenario: Adding a DL replacement after replacing an ID
  Given I go to the new online DL application
  When I go to the page with my summary
  When I click to add an ID
  And I choose to add a replacement ID
  When I click "Next" to continue
  And I enter my current card data
  When I go to the page with my summary
  And I click to add a DL
  And I choose to replace an added DL
  And I click "Next" to continue
  Then I will be on the page to add choosing reason for replacement
  And I select the DL was damaged
  When I click "Next" to continue
  Then I will be on the add license type page
  When I go to the page with my summary
  Then I will not see a card history section
  And I will see that I am replacing my DL
  And I will see that I am replacing my ID

Scenario: Choosing to add a new ID
  Given I have already filled out my DL application
  When I click to add an ID
  Then I will see a WDYWTDT page with the new ID option
  Then I will see that the validations work the same as the WDYWTDT page
  When I choose to add a new ID
  And I click "Next" to continue
  And Then I will be on the add reduced fee page
  When I select No to getting a reduced fee
  And I click "Next" to continue
  Then I will be on the page with my summary
  And I will see that my new ID card type has been saved
  And I will see that I am getting a new DL
  And I will see that I am not opting for a reduced fee

Scenario: Choosing to add a renewal ID
  Given I have already filled out my DL application
  When I click to add an ID
  Then I choose to add a renewal ID
  And I click "Next" to continue
  Then I will be on the add current card info page
  When I enter my current card data
  And I click "Next" to continue
  Then I will be on the add reduced fee page
  When I go to the page with my summary
  Then I will see the info of the ID card saved
  And I will see that I am getting a new DL

Scenario: Adding a renewal ID after renewing a DL
  Given I go to the new online DL application
  When I go to the page with my summary
  When I click to add a DL
  Then I choose to renew a DL
  When I click "Next" to continue
  And I enter my current card data
  When I go to the page with my summary
  And I click to add an ID
  And I choose to add a renewal ID
  And I click "Next" to continue
  Then I will be on the add reduced fee page

Scenario: Choosing to add a correct/updated ID
  Given I have already filled out my DL application
  When I click to add an ID
  Then I choose to add a change ID
  And I click "Next" to continue
  When I enter my current card data
  And I click "Next" to continue
  Then I choose to update my ID
  And I check the box to update my name
  When I go to the page with my summary
  Then I will see that I am updating the name on my ID
  And I will see the info of the ID card saved
  And I will see that I am getting a new DL

Scenario: Adding a replacement ID after replacing a DL skips current card data
  Given I go to the new online DL application
  When I go to the page with my summary
  When I click to add a DL
  And I choose to replace an added DL
  When I click "Next" to continue
  And I enter my current card data
  And I click "Next" to continue
  Then I will be on the page to add choosing reason for replacement
  When I go to the page with my summary
  And I click to add an ID
  Then I choose to add a replacement ID
  And I click "Next" to continue
  Then I will be on the page to add choosing reason for replacement

Scenario: Adding a correct/update ID after correcting/updating a DL skips current card data
  Given I go to the new online DL application
  When I go to the page with my summary
  When I click to add a DL
  And I choose to change a DL
  When I click "Next" to continue
  And I enter my current card data
  When I go to the page with my summary
  And I click to add an ID
  And I choose to add a change ID
  And I click "Next" to continue
  Then I will be on the page to add choosing to update or correct my card
