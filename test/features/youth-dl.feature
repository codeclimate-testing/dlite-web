
  # test summary and required docs as presentation unit tests
  
    
  # Scenario: Opting not to get a license
  #   Given I go to the new online DL application
  #   When I visit the date of birth page
  #   And I indicate that I am younger than 14
  #   When I visit the ID or DL selection page
  #   And I click on the DL checkbox
  #   And I click "Next" to continue
  #   Then I will be on the page "/apply/youth-license-notification"
  #   When I click "No" to not get a license instead
  #   Then I will see a message after my choice letting me know I should come back when I am 14 or older
  #   And I will see there is no "Next" button

  
  # Scenario: I am 15 to 15.5 and I say that I want both a DL and ID
  #   Given I go to the new online DL application
  #   When I visit the date of birth page
  #   And I indicate that I am between 15 and 15.5
  #   And I visit the ID or DL selection page
  #   And I click on the DL checkbox
  #   And I click on the ID checkbox
  #   And I click "Next" to continue
  #   Then I will see a message letting me know that I cannot complete my license application in office until I am 15.5
  #   And I click "Next" to continue
  #   When I go to the page with my summary
  #   Then I will see a notification at the top letting me know I can't yet come in to complete my DL application
  #   And I will also see that I can make an appointment at any time to get my ID 




#  unit test the disabled buttons

  # Scenario: I am less than 15 and I opt only for a DL
  #   Given I go to the new online DL application
  #   When I visit the date of birth page
  #   And I indicate that I am between 14 and 15
  #   And I visit the ID or DL selection page
  #   And I click on the DL checkbox
  #   When I click "Next" to continue
  #   Then I will be on the page "/apply/youth-license-notification"
  #   And I will see a notification at the top letting me know I can't yet come in to complete my DL application
  #   And I will see that the "Next" button is disabled
  #   When I click "No" to not get a license instead
  #   Then I will see a message saying that I should come back when I am 15
  #   And I will see that the "Next" button is disabled

