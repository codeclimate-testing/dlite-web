Feature: Determining whether to recieve ballot by mail or not
  As a DMV Customer
  I want to choose if I get my ballot by mail
  so that I can vote from the convenience of my home

  Scenario: Viewing the form
    Given I go to the new online DL application page
    When I visit ballot by mail option page
    Then I will see that the Continue button is no longer disabled
    And I see two buttons labelled Yes and No

  Scenario: I want a ballot by mail
    Given I go to the new online DL application page
    When I visit ballot by mail option page
    When I select Yes
    Then I will see text for ballot by mail - Yes

  Scenario: I do not want a ballot by mail
    Given I go to the new online DL application page
    When I visit ballot by mail option page
    When I select No
    Then I will see text for ballot by mail - No

  Scenario: Skip Question
    Given I go to the new online DL application page
    When I visit ballot by mail option page
    When I select Skip Section
    Then I will see text for ballot by mail - Skip Section

  Scenario: Continuing without a selection
    Given I go to the new online DL application page
    When I visit ballot by mail option page
    When I click to submit
    Then I will be taken to contact choice page

  Scenario: I want a ballot by mail - Summary
    Given I go to the new online DL application page
    When I visit ballot by mail option page
    When I select Yes
    When I click to submit
    Then I will be taken to ballot language page

  Scenario: I do not want an ballot by mail - Summary
    Given I go to the new online DL application page
    When I visit ballot by mail option page
    When I select No
    When I click to submit
    Then I will be taken to contact choice page

  Scenario: Viewing selected value in summary - Yes
    Given I go to the new online DL application page
    When I visit ballot by mail option page
    When I select Yes
    When I click to submit
    And I return to the home page
    And I go to the page with my summary
    Then I will see mail by ballot as Yes in summary

  Scenario: Viewing selected value in summary - No
    Given I go to the new online DL application page
    When I visit ballot by mail option page
    When I select No
    When I click to submit
    And I return to the home page
    And I go to the page with my summary
    Then I will see mail by ballot as No in summary

  Scenario: Viewing selected value in summary - Skip Section
    Given I go to the new online DL application page
    When I visit ballot by mail option page
    When I select Skip Section
    When I click to submit
    And I return to the home page
    And I go to the page with my summary
    Then I will see mail by ballot as No Answer in summary