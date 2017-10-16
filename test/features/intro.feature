Feature: Intro Screen
    As a DMV Customer
    I want an introduction screen
    so that I know what to expect filling out this form

  Scenario: Seeing the page for the first time and starting the form
    Given I go to the new online DL application page
    When I visit app intro page
    Then I see text introducing the page
    When I click to button
    Then I will be taken to the names page
