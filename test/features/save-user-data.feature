Feature: Save user data
  As a DMV customer
  I want to save my user data to my application from the summary screen
  So that my application can be used in the field office to enable my request

  Scenario: applying for one new DL
    Given I go to the new online DL application page
    Then I visit the legal name page
    And I enter my full name
    When I click "Next" to continue
    Then I will be on the page for entering my date of birth
    And I enter my full date of birth into the form
    When I click "Next" to continue
    Then I will be on the what do you want to do today page
    And I choose to get a new card
    When I click "Next" to continue
    Then I will be on the ID and DL selection page
    And I click on the DL checkbox
    When I click "Next" to continue
    Then I will be on the page for choosing real id
    And I click no to getting a real id
    And I click "Next" to continue
    Then I will be on the license type page
    And I click on the car checkbox
    And I click to not need endorsements
    When I click "Next" to continue
    Then I will be on the get started page
    When I click "Next" to continue
    Then I will be on the page for entering my address
    And I enter my home address
    And I select address interstitial No
    And I enter my mailing address
    When I click "Next" to continue
    Then I will be on the page for entering my physical traits
    When I click to go back
    Then I will see the home address I entered
    And I change my home zip
    When I click "Next" to continue
    And I select my sex
    And I select an eye color
    And I select a hair color
    When I click "Next" to continue
    Then I will be on the page for entering my height and weight
    And I enter my feet
    And I enter my inches
    And I enter my weight
    When I click "Next" to continue
    Then I will be on the page for entering my social security
    And I select Yes for social security
    And I enter my full social security number
    When I click "Next" to continue
    Then I will be taken to medical history page
    And I select Yes to having reportable medical history
    And I enter my medical conditions into the textarea
    When I click "Next" to continue
    Then I will be on the page to enter existing license and id
    And I select exisiting DL/ID Yes
    And I enter my existing DL/ID card number
    And I enter the issuing state or country
    And I enter the date of DL/ID expiration
    When I click "Next" to continue
    Then I will be taken to previous names page
    And I select previously used names Yes
    And I enter my previously used names
    When I click "Next" to continue
    Then I will be taken to the license issues page
    And I select suspended license Yes
    And I enter date of my license suspension
    And I enter the reason for my license suspension
    When I click "Next" to continue
    Then Then I will be on the page for veteran related services
    And I click Yes for veteran
    And I click Yes to receiving additional information about benefits
    And I click Yes about having my license labeled with Veteran
    And I click "Next" to continue
    Then I will be on the page for organ donation
    And I choose to donate
    And I choose to contribute
    And I click "Next" to continue
    Then I will be taken to voter intro info page
    When I click "Next" to continue
    Then I will be on the page for voter citizen status entry
    And I select citizen Yes
    When I click "Next" to continue
    Then I will be on the eligibility page
    And I select voter registration Yes
    When I click "Next" to continue
    Then I will be on the page for entering voter opt-out
    And I select I am a new voter in California
    When I click "Next" to continue
    Then I will be taken to voter preferences info page
    When I click "Next" to continue
    Then I will be taken to the political party choose page
    And I select choose party Yes
    And I select a political party button
    When I click "Next" to continue
    Then I will be taken to ballot language page
    And I select a language
    When I click "Next" to continue
    Then I will be on the page for ballot by mail
    And I select ballot by mail Yes
    When I click "Next" to continue
    Then I will be taken to contact methods page
    And I select contact methods Yes
    And I enter my email
    And I enter my phone number
    When I click "Next" to continue
    Then I will be taken to voter registration complete page
    And I click "Next" to continue
    Then I will be on the page with my summary
    Then I will see my name on that summary
    Then I will see my date of birth on that summary
    Then I will see my mailing address on that summary
    Then I will see my updated home zip
    Then I will see that my DL card type has been saved
    Then I will see that I am not getting a real id
    Then I will see what license type I need
    Then I will see my sex in the summary
    Then I will see my eye color in the summary
    Then I will see my hair color in the summary
    Then I will see my height on that summary
    Then I will see Yes in my citizenship selection
    Then I will see my social security on that summary
    Then I will see my language in the summary
    Then I will see mail by ballot as Yes in summary
    Then I will see Yes for having reportable medical history
    Then I will see Yes in my suspended license selection
    Then I will see the date and reason for my license suspension
    Then I will see Yes for having a previous name
    Then I will see that I am a veteran
    Then I will see that I would like additional veterans benefits info
    Then I will see that I would like that veterans label on my id
    Then I will see voter registration choice as I am a new voter in California in summary
    And I will see my organ selection in the summary
    Then I will see Yes for my political party choice
    And I will see my political party in summary
    Then I will see my contact details in summary
    When I visit the required documents page
    Then I will not see a section about RealID information
    And I will see a section about medical information
    Then I will see an additional bullet for medical information
    Then I will see an additional bullet for proving my veterans status
    And I will see a section letting me know what I need to do to prove my status
    Then I will see proof of social security section
    When I visit contact methods details page
    Then I will see my email and phone number
    When I update my email and phone number
    And I go to the page with my summary
    Then I will see my updated email and phone number in summary


  Scenario: renewing one new ID and no social
    Given I go to the new online DL application page
    When I visit the date of birth page
    And I enter my full date of birth into the form
    When I click "Next" to continue
    Then I will be on the what do you want to do today page
    And I choose to renew a card
    When I click "Next" to continue
    Then I will be on the ID and DL selection page
    When I click to renew my ID
    When I click "Next" to continue
    Then I will be on the current card info page
    When I enter my current card data
    And I click "Next" to continue
    Then I will be on the page for choosing real id
    And I click yes to getting a real id
    And I click "Next" to continue
    Then I will be on the reduced fee page
    And I select Yes to getting a reduced fee
    When I select No to having the correct forms
    When I visit the social security page
    When I select No for social security
    And I click "Next" to continue
    Then I will be on the page to enter existing license and id
    When I select exisiting DL/ID Yes
    When I enter my existing DL/ID card number
    And I enter the issuing state or country
    And I enter the date of DL/ID expiration
    When I click "Next" to continue
    And I will be taken to previous names page
    When I select previously used names No
    When I click "Next" to continue
    Then I will be taken to the license issues page
    And I visit the veteran services page
    When I click No for veteran
    And I click "Next" to continue
    Then I will be on the page for organ donation
    And I change my organ selection
    When I visit voter citizen status page
    And I select citizen No
    When I click "Next" to continue
    Then I will be on the page with my summary
    Then I will see that my ID card type has been saved
    Then I will see the info of the card I want renewed
    Then I will see that I am getting a real id
    Then I will see that I am opting for a reduced fee and my answer about not having documents
    Then I will see that I do not have a social security number
    Then I will see my previous DL/ID information
    Then I will see Yes in my existing DL/ID selection
    Then I will see No for having a previous name
    Then I will see that I am not a veteran
    And I will see No in my citizenship selection
    Then I will see my updated organ selection in the summary
    When I visit the date of birth page
    Then I will see the date of birth that I entered
    When I change my year of birth
    And I go to the page with my summary
    Then I will see my updated birth year
    When I visit the required documents page
    Then I will see at the end two additional bullet points and corresponding sections: "Reduced fee eligibility", and "No fee eligibility"
    Then I will see an additional bullet for RealID information
    Then I will see a section about RealID information
    Then I will not see the proof of social security section


  Scenario: Save user data with both ID and DL
    Given I go to the new online DL application page
    And I visit the what do you want to do today page
    And I choose to get a new card
    When I click "Next" to continue
    Then I will be on the ID and DL selection page
    When I click on the ID checkbox
    When I click on the DL checkbox
    And I click "Next" to continue
    When I click yes to getting a real id
    When I select ID to have my real id designation
    And I click "Next" to continue
    Then I will be on the license type page
    And I click on the car checkbox
    And I click to not need endorsements
    When I click "Next" to continue
    Then I will be on the reduced fee page
    And I select No to getting a reduced fee
    When I visit the addresses page
    And I enter my home address
    And I select address interstitial Yes
    When I visit the traits height and weight page
    And I enter my traits
    When I click "Next" to continue
    Then I will be on the page for entering my social security
    When I select Yes for social security
    And I click "Next" to continue
    When I enter my full social security number
    And I click "Next" to continue
    Then I will be taken to medical history page
    When I select No to having reportable medical history
    And I click "Next" to continue
    Then I will be on the page to enter existing license and id
    When I select exisiting DL/ID Yes
    When I enter my existing DL/ID card number
    And I enter the issuing state or country
    And I enter the date of DL/ID expiration
    When I click "Next" to continue
    And I will be taken to previous names page
    And I select previously used names No
    When I click "Next" to continue
    Then I will be taken to the license issues page
    When I select suspended license No
    When I click "Next" to continue
    Then I will be on the page for veteran related services
    When I click No for veteran
    When I visit voter citizen status page
    And I select citizen Yes
    When I visit the voter eligibility requirements page
    And I click "Next" to continue
    Then I will be on the page with my summary
    When I visit the voter eligibility requirements page
    And I select voter registration Yes
    When I click "Next" to continue
    Then I will be on the page for entering voter opt-out
    When I select I am already registered to vote in California
    When I click "Next" to continue
    Then I will be taken to updated voter preferences info page
    When I click "Next" to continue
    Then I will be taken to the political party choose page
    When I select no political party
    Then I click "Next" to continue
    Then I will be taken to ballot language page
    And I select a language
    When I click "Next" to continue
    Then I will be on the page for ballot by mail
    And I select ballot by mail Yes
    When I click "Next" to continue
    Then I will be taken to contact methods page
    When I select contact methods No
    When I click "Next" to continue
    Then I will be taken to voter registration complete page
    When I click "Next" to continue
    Then I will be on the page with my summary
    Then I will see residence address and mailing address will have the same information
    Then I will see that my card types have been saved
    Then I will see that I am getting a real id
    Then I will see that I am not opting for a reduced fee
    Then I will see my height on that summary
    Then I will see No in my existing DL/ID selection
    Then I will see No in my suspended license selection
    Then I will see No for having reportable medical history
    Then I will see that I did not choose to be contacted
    Then I will see that I do qualify to register to vote
    Then I will see voter registration choice as I am already registered to vote in California in summary
    Then I will see that I declined to choose a political party
    Then I will see my social security on that summary
    When I visit the required documents page
    Then I will not see a section about medical information
    Then I will not see any information about proving veterans status
    When I visit the traits height and weight page
    Then I will see traits height and weight I entered
    When I change my inches
    When I visit the social security page
    Then I will see the social security number that I entered
    When I change my social security number
    And I go to the page with my summary
    Then I will see my updated height on the summary
    Then I will see my updated social security number
    When I click "Next" to continue
    Then I will be on the page for appointment preparation
    And I click link for required documents
    Then I will be on the required documents page
