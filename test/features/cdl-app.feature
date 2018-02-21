Feature: Page for choosing between a CDL and a DL/ID application
As a DMV customer
I would like to be able to choose whether I need a CDL or an ID/DL application
So that I can get what I need easily

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
  Then I will be on the IDDL page
