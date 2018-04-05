Feature: Timeout on the app after authenticating
As a DMV customer
I want the log-out functionality to work

Scenario: Clicking the log-out link to log-out
  Given I go to the new online DL application
  When I go to the IDDL sign-in page
  And I go to the logged in page
  When I click the log-out link
  And I will be on the choose language page
  And I will not see any log-out link
