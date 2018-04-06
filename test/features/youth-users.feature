Feature: Happy path for youth users
  Scenario: I am younger than 14
    Given I go to the new online DL application page
    Then I visit the legal name page
    Then I will see page title for legal name
    And I enter my full name
    Then I click "Next" to continue
    Then I will be on the page for entering my date of birth
    Then I will see page title for date of birth
    And I indicate that I am younger than 14
    When I visit the legal name page
    Then I will see the name I entered
    And I change my first name
    When I visit the what do you want to do today page
    And I choose to get a new card
    And I click "Next" to continue
    Then I will be on the ID and DL selection page
    And I click on the DL checkbox
    And I click "Next" to continue
    Then I will see a message asking if I would like an ID instead
    When I click to get an ID instead
    When I go to the page with my summary
    Then I will see page title for summary
    Then I will see that my ID card type has been saved
    Then I will see that I am not getting a DL
    Then I will see my updated name


  Scenario: I am between 15 and 15.5
    Given I go to the new online DL application page
    When I visit the date of birth page
    And I indicate that I am between 15 and 15.5
    When I visit the what do you want to do today page
    And I choose to get a new card
    And I click "Next" to continue
    Then I will be on the ID and DL selection page
    And I click on the DL checkbox
    And I click "Next" to continue
    Then I will be on the youth license notification page
    Then I will see a message letting me know that I cannot complete my license application in office until I am 15.5
    And I click to get an ID instead
    And I click "Next" to continue
    Then I will be on the page for choosing real id
    When I visit the organ donation page
    And I choose to donate my organs
    And I choose to contribute
    When I click "Next" to continue
    Then I will be on the page with my summary
    When I visit the ID or DL selection page
    And I click on the DL checkbox
    When I go to the page with my summary
    Then I will see a notification at the top letting me know I can't yet come in to complete my DL application
    And I will also see that I can make an appointment at any time to get my ID

  Scenario: I am between 15.5 and 16
    Given I go to the new online DL application page
    When I visit the date of birth page
    And I indicate that I am under 16 years old
    When I visit the what do you want to do today page
    And I choose to get a new card
    And I click "Next" to continue
    Then I will be on the ID and DL selection page
    And I click on the DL checkbox
    When I visit the organ donation page
    And I choose to donate my organs
    And I choose to contribute
    When I click "Next" to continue
    Then I will be on the page for guardian signature
    When I visit the ID or DL selection page
    And I click on the DL checkbox
    And I click on the ID checkbox
    When I visit the organ donation page
    And I choose to donate my organs
    And I choose to contribute
    When I click "Next" to continue
    Then I will be on the page with my summary

  Scenario: I just turned 16 today
    Given I go to the new online DL application page
    When I visit the date of birth page
    And Today I turned 16 years old
    When I click "Next" to continue
    And I choose to get a new card
    And I click "Next" to continue
    And I click on the DL checkbox
    And I click "Next" to continue
    When I visit the organ donation page
    And I choose to donate my organs
    And I choose to contribute
    When I click "Next" to continue
    Then I will be on the page for voter citizen status entry
    Then I will see header for Voting pre-registration
    When I select citizen Yes
    When I click "Next" to continue
    Then I will be on the eligibility page
    Then I select voter registration Yes
    When I click "Next" to continue
    And I will be on the page for entering voter opt-out
    Then I select I would like to pre-register to vote
    When I click "Next" to continue
    Then I will be taken to voter preferences info page
    When I visit ballot language page
    When I select a language
    When I visit the political party choose page
    When I select choose party Yes
    When I select a political party button
    And I click "Next" to continue
    When I go to the page with my summary
    And I will see I would like to pre-register to vote in summary
    Then I will see my language in the summary
    Then I will see my political party in summary
    When I visit ballot language page
    Then I will see the language I chose is selected
    And I change my language
    When I visit the political party choose page
    Then I will see Yes and political party selected
    When I change my political party
    When I visit the voter eligibility requirements page
    Then I will see the eligibility requirement status I entered
    And I change my eligibility requirement
    When I click "Next" to continue
    Then I will be on the page for guardian signature
    And My guardian enters his/her details
    When I click "Next" to continue
    Then I will be on the page with my summary
    And I will see my updated eligibility requirement status
    Then I will not see language section in the summary
    Then I will not see political party section in summary
    When I visit the required documents page
    Then I will see section about new driver requirements
    Then I will see section about knowledge test
    When I visit the ID or DL selection page
    And I click on the DL checkbox
    And I click on the ID checkbox
    When I visit the voter eligibility requirements page
    And I change my eligibility requirement
    When I click "Next" to continue
    Then I will be on the page with my summary
