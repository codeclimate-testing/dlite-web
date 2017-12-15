Feature: Donate Life
  As a DMV Customer
  I want the option to register and donate to organ and tissue donation
  So that I can save my relatives from making that decision

  
    # And I will see that the "Next" button is disabled
    # And I choose to donate
    # Then I will see text for donate - Yes
    # Then I will see text for donate - No
    # And I choose to contribute
    # Then I will see text for donate contribution - Yes
    # Then I will see that the "Next" button is no longer disabled

  Scenario: Updating organ donation preferences -- Over 16
    Given I go to the new online DL application page
    Given I have already entered my organ selection
    Given I visit the date of birth page
    Given I am over 16 years old
    When I visit the organ page
    When I change my organ selection
    Then I will see text for donate - No
    And I change my contribution selection
    And I click "Next" to continue
    Then I will be taken to voter intro info page
    When I click to go back
    Then I will be taken to organ donation page
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
    And I click "Next" to continue
    Then I will be taken to voter intro info page
    When I click to go back
    Then I will be taken to organ donation page
    And I go to the page with my summary
    Then I will see my updated organ selection in the summary
