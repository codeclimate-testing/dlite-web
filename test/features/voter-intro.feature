Feature: Voter Intro Screen
    As a DMV Customer
    I want an introduction screen
    so that I know what to expect filling out this form

  Scenario: Seeing the page for the first time and starting the form
    Given I go to the new online DL application page
    When I visit voter intro page
    Then I see text introducing the voter page
    When I click "Next" to continue
    Then I will be on the page for voter citizen status entry

  Scenario: I want to go back to previous page
    Given I go to the new online DL application page
    When I visit voter intro page
    Then I see text introducing the voter page
    When I click to go back
    Then I will be taken to organ donation page