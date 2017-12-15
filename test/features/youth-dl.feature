Feature: Youth who can't yet apply for license due to age
  As a youth under 15.5
  I want to get a helpful message about being too young to apply
  So I don't waste my time trying to get a junior license before it is legal

  Scenario: Opting for an ID instead
    Given I go to the new online DL application
    When I visit the date of birth page
    And I indicate that I am between 14 and 15
    When I visit the ID or DL selection page
    And I click on the DL checkbox
    And I click "Next" to continue
    Then I will be on the youth license notification page
    And I will see a message asking if I would like an ID instead
    When I click to get an ID instead
    And I click "Next" to continue
    Then I will be on the page for choosing real id
    When I go to the page with my summary
    Then I will see that my ID card type has been saved
    And I will see that I am not getting a DL
    
  Scenario: Opting not to get a license
    Given I go to the new online DL application
    When I visit the date of birth page
    And I indicate that I am between 14 and 15
    When I visit the ID or DL selection page
    And I click on the DL checkbox
    And I click "Next" to continue
    Then I will be on the youth license notification page
    When I click "No" to not get a license instead
    Then I will see a message saying that I should come back when I am 15
    And I will see that the "Next" button is disabled

  Scenario: I am 15 to 15.5 and I say that I want only a DL
    Given I go to the new online DL application
    When I visit the date of birth page
    And I indicate that I am between 15 and 15.5
    And I visit the ID or DL selection page
    And I click on the DL checkbox
    # And I click "Next" to continue
    # Then I will be on the page "/apply/youth-license-notification"
    # Then I will see a message letting me know that I cannot complete my license application in office until I am 15.5    
    # When I click "No" to not get a license instead
    # And I click "Next" to continue
    # Then I will be on the page for choosing real id
    # When I click to go back
    # Then I will be on the ID and DL selection page
    When I go to the page with my summary
    Then I will see a notification at the top letting me know I can't yet come in to complete my DL application

  Scenario: I am 15 to 15.5 and I say that I want both a DL and ID
    Given I go to the new online DL application
    When I visit the date of birth page
    And I indicate that I am between 15 and 15.5
    And I visit the ID or DL selection page
    And I click on the DL checkbox
    And I click on the ID checkbox
    And I click "Next" to continue
    Then I will see a message letting me know that I cannot complete my license application in office until I am 15.5
    When I click "No" to not get a license instead
    # And I click "Next" to continue
    When I go to the page with my summary
    Then I will see a notification at the top letting me know I can't yet come in to complete my DL application
    And I will also see that I can make an appointment at any time to get my ID 
    Then I will see that my card types have been saved

  Scenario: I am less than 15 and I opt only for a DL
    Given I go to the new online DL application
    When I visit the date of birth page
    And I indicate that I am between 14 and 15
    And I visit the ID or DL selection page
    And I click on the DL checkbox
    When I click "Next" to continue
    Then I will be on the youth license notification page
    And I will see a message saying that I can't apply for a license until I am 15
    And I will see that the "Next" button is disabled
    When I click "No" to not get a license instead
    Then I will see a message saying that I should come back when I am 15
    And I will see that the "Next" button is disabled

  Scenario: I am less than 15 and I opt for both a ID and a DL
    Given I go to the new online DL application
    When I visit the date of birth page
    And I indicate that I am between 14 and 15
    And I visit the ID or DL selection page
    And I click on the DL checkbox
    And I click on the ID checkbox
    When I click "Next" to continue
    Then I will be on the youth license notification page
    And I will see a message saying that I can't apply for a license until I am 15
    And I will see a message asking if I would like an ID instead
    And I will see that the "Next" button is disabled
    When I click "No" to not get a license instead
    Then I will see a message saying that I should come back when I am 15
    And I will see that the "Next" button is disabled
    When I click "Yes" to get a license instead
    # Then the application header and title will reflect that I am only applying for an ID
    When I go to the page with my summary
    Then I will see that my ID card type has been saved
    And I will see that I am not getting a DL