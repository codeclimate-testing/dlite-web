Feature: Designate US citizenship status
  As a DMV Customer
  I want to select my US citizenship status
  so that I can apply for benefits available to citizens

  Scenario: I am a citizen
    Given I go to the new online DL application page
    When I visit voter citizen status page
    Then I will see citizen related faq
    When I select citizen Yes
    When I click to submit
    Then I will be on the eligibility page
    And I go to the page with my summary
    Then I will see Yes in my citizenship selection

  Scenario: I am not a citizen - saving data
    Given I go to the new online DL application page
    When I visit voter citizen status page
    When I select citizen No
    When I click to submit
    Then I will be on the page with my summary
    Then I will see No in my citizenship selection

  Scenario: Choose not to answer - saving data
    Given I go to the new online DL application page
    When I visit voter citizen status page
    When I select citizen Skip Section
    When I click to submit
    Then I will be on the page with my summary
    Then I will see No Value in my citizenship selection

  Scenario: Continuing without a selection
    Given I go to the new online DL application page
    When I visit voter citizen status page
    When I click to submit
    Then I will be on the page with my summary
    Then I will see No Value in my citizenship selection

  Scenario: Updating US citizen status
    Given I go to the new online DL application page
    Given I have already entered my US citizenship status into the form
    When I visit voter citizen status page
    Then I will see the US citizenship status I entered
    And I change my US citizenship status
    When I click to submit
    And I go to the page with my summary
    Then I will see my updated US citizenship status

  Scenario: I want to go back to previous page
    Given I go to the new online DL application page
    When I visit voter citizen status page
    Then I will see citizen related faq
    When I click to back
    Then I will be taken to voter intro info page
