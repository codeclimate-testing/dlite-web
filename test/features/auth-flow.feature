Feature: User views correct flow after logging in and logging out
As a DMV customer
I want the log-in and log-out functionality to work

# Scenario: Logging in with multiple applications
#   Given I go to the open applications page
#   Then I will see 4 open applications
#   And I will see a button to edit a CDL application id 1
#   And I will see a button to edit a DL application id 2
#   And I will see a button to edit an ID and DL application id 3
#   And I will see a button to edit ID and DL application id 4
#   When I click on the button to edit id 1
#   Then I will be on the CDL name page
#   And I will see my cdl name
#   When I visit the what do you want to do today page
#   Then I will see that getting a new CDL is already selected
#   When I go to the open applications page
#   And I click on the button to edit id 2
#   Then I will be taken to the names page
#   And I will see my id 2 name
#   When I visit the what do you want to do today page
#   Then I will see that my selection to get a replacement card is already selected
#   When I go to the open applications page
#   And I click on the button to edit id 3
#   Then I will be taken to the names page
#   And I will see my id 3 name
#   When I visit the what do you want to do today page
#   Then I will see that I am getting a new card
#   And I click "Next" to continue
#   Then I will see that the DL checkbox is checked
#   And I will see that the ID checkbox is checked
#   When I go to the open applications page
#   Then I click on the button to edit id 4
#   Then I will be taken to the names page
#   And I will see my id 4 name
#   When I visit the what do you want to do today page
#   Then I will see that I am changing a DL
#   And I click "Next" to continue
#   Then I will see that the DL radio box is selected
#   When I go to the page with my summary
#   Then I will see that I am updating my DL
#   And I will see that I am renewing my ID

# Scenario: Adding CDL application from open-applications page
#   Given I go to the open applications page
#   When I click on the button to edit id 1
#   Then I will be on the CDL name page
#   And I will see my cdl name
#   When I go to the open applications page
#   Then I will see a button to add a CDL application
#   And I click the button to add a CDL application
#   Then I will be on the CDL name page
#   And I will not see my cdl name

Scenario: Clicking the log-out link to log-out
  Given I go to the new online DL application
  When I go to the IDDL sign-in page
  And I go to the logged in page
  When I click the log-out link
  And I will be on the choose language page
  And I will not see any log-out link