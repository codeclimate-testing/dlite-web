Feature: User views correct flow after logging in and logging out
As a DMV customer
I want the log-in and log-out functionality to work

Scenario: Clicking the log-out link to log-out
  Given I go to the new online DL application
  When I go to the IDDL sign-in page
  And I go to the logged in page
  When I click the log-out link
  And I will be on the choose language page
  And I will not see any log-out link

Scenario: Logging in with multiple applications
  Given I go to the open applications page
  # Then I will see 4 open applications
  # And I will see a button to edit a CDL application id 1
  # And I will see a button to edit a DL application id 2
  # And I will see a button to edit an ID and DL application id 3
  # And I will see a button to edit ID and DL application id 4
  # When I click on the button to edit id 1
  Then I will be on the CDL name page
  # When I go to the what do you want to do today page
  #  Then I will see that I am getting a new CDL
  # And I will see my cdl name
  When I go to the open applications page
  # And I click on the button to edit id 2
  Then I will be taken to the names page
  # And I will see my id 2 name
  # When I go to the what do you want to do today page
  #  Then I will see that I am replacing a DL
  When I go to the open applications page
  # And I click on the button to edit id 3
  Then I will be taken to the names page
  # When I go to the what do you want to do today page
  # Then I will see that I am getting a new card
  And I click "Next" to continue
  # Then I will see that I am getting a new DL and ID
  When I go to the open applications page
  # Then I click on the button to edit id 4
  Then I will be taken to the names page
  # And I will see my id 4 name
  # When I go to the what do you want to do today page
  # Then I will see that I am renewing a card
  And I click "Next" to continue
  # Then I will see that I am renewing my ID
  When I go to the page with my summary
  # Then I will see that I am updating my DL
