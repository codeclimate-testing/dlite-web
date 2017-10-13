Feature: Select Ballot by Mail Language
  As a DMV Customer
  I want to select my preferred language for my ballot by mail
  so that I can get materials in the language I understand best

  Scenario: Entering my preferred language
    Given I go to the new online DL application page
    When I visit ballot language page
    Then I will see select buttons for English, Chinese, Japanese, Spanish, Thai, Korean, Tagalog, Hindi, Khmer, and Vietnamese
    When I select a language
    Then I will see the language I chose is selected
    When I click to submit
    Then I will be on the page for ballot by mail
    And I go to the page with my summary
    Then I will see my language in the summary

  Scenario: Updating my preferred language
    Given I go to the new online DL application page
    And I have already entered my language
    When I visit ballot language page
    Then I will see the language I chose is selected
    When I change my language
    And I click to submit
    And I go to the page with my summary
    Then I will see my updated language in the summary
