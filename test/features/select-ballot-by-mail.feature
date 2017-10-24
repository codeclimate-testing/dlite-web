Feature: Determining whether to recieve ballot by mail or not
  As a DMV Customer
  I want to choose if I get my ballot by mail
  so that I can vote from the convenience of my home

  Scenario: Viewing the form and selecting options
    Given I go to the new online DL application page
    When I visit ballot by mail option page
    Then I will see that the Continue button is disabled
    And I see two buttons labelled Yes and No

  Scenario: I want a ballot by mail - navigation and summary
    Given I go to the new online DL application page
    When I visit ballot by mail option page
    When I select Yes
    Then I will see text for ballot by mail - Yes
    Then I will see that the Continue button is no longer disabled
    When I click to submit
    Then I will be taken to political contact page
    And I go to the page with my summary
    Then I will see mail by ballot as Yes in summary

  Scenario: I do not want an ballot by mail - navigation and summary
    Given I go to the new online DL application page
    When I visit ballot by mail option page
    When I select No
    Then I will see text for ballot by mail - No
    Then I will see that the Continue button is no longer disabled
    When I click to submit
    Then I will be taken to political contact page
    And I go to the page with my summary
    Then I will see mail by ballot as No in summary
