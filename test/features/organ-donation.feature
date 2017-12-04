Feature: Donate Life
  As a DMV Customer
  I want the option to register and donate to organ and tissue donation
  So that I can save my relatives from making that decision

  Scenario: Selecting organ donation preferences -- Under 16
    Given I go to the new online DL application page
    Given I visit the date of birth page
    Given I am under 16 years old
    When I visit the organ page
    And I will see that the Continue button is disabled
    And I choose to donate
    Then I will see text for donate - Yes
    And I choose to contribute
    Then I will see text for donate contribution - Yes
    Then I will see that the Continue button is no longer disabled
    And I click to submit
    Then I will be on the page with my summary
    And I will see my organ selection in the summary

  Scenario: Updating organ donation preferences -- Over 16
    Given I go to the new online DL application page
    Given I have already entered my organ selection
    Given I visit the date of birth page
    Given I am over 16 years old
    When I visit the organ page
    When I change my organ selection
    Then I will see text for donate - No
    And I change my contribution selection
    And I click to submit
    Then I will be taken to voter intro info page
    And I go to the page with my summary
    Then I will see my updated organ selection in the summary

  Scenario: Selecting organ donation preferences -- Today I turned 16
    Given I go to the new online DL application page
    Given I have already entered my organ selection
    Given I visit the date of birth page
    Given Today I turned 16 years old
    When I visit the organ page
    When I change my organ selection
    Then I will see text for donate - No
    And I change my contribution selection
    And I click to submit
    Then I will be taken to voter intro info page
    And I go to the page with my summary
    Then I will see my updated organ selection in the summary

  Scenario: I want to go back to previous page
    Given I go to the new online DL application page
    When I visit the organ page
    Then I will see organ donation question
    When I click to go back
    Then Then I will be on the page for veteran related services