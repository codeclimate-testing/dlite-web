Feature:  I want to enter my date of birth
  As a DMV customer
  I want to save my date of birth in my new online DL application
  So that I can drink or get senior discounts

  Scenario: Entering my date of birth and saving
    Given I go to the new online DL application page
    When I visit the date of birth page
    Then I will see a number field for month, day and year
    And I will see that the Continue button is disabled
    When I enter my full date of birth into the form
    Then I will see that the Continue button is no longer disabled
    When I click to submit
    Then I will be on the ID and DL selection page
    And I go to the page with my summary
    Then I will see my date of birth on that summary

  Scenario: Updating date of birth
    Given I go to the new online DL application page
    And I have already entered my date of birth
    When I visit the date of birth page
    Then I will see the date of birth that I entered
    When I change my year of birth
    And I click to submit
    And I go to the page with my summary
    Then I will see my updated birth year

  Scenario: I want to go back to previous page
    Given I go to the new online DL application page
    When I visit the date of birth page
    Then I will see a number field for month, day and year
    When I click to go back
    Then I will be taken to the names page
