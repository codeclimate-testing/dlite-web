Feature: I want to select my hair color
  As a DMV customer
  I want to provide hair color in my new online DL application
  So that the DMV can use it for identification

  Scenario: Seeing the  form for hair color
    Given I go to the new online DL application page
    When I visit /about-me/appearance/hair
    Then I will see buttons for Auburn, Bald, Black, Blonde, Brown, Gray, Red, White and Other
    And I will see a button to submit

  Scenario: Entering my hair color and saving
    Given I go to the new online DL application page
    When I visit /about-me/appearance/hair
    And I select a hair color
    And I click to submit
    And I return to the home page
    And I go to the page with my summary
    Then I will see my hair color is on that summary

  Scenario: Seeing a form with existing data
    Given I have already entered my hair color into the form
    When I visit /about-me/appearance/hair
    Then I will see the hair color I selected

  Scenario: Changing selection before saving and seeing feedback about current selection
    And I return to the home page
    When I visit /about-me/appearance/hair
    And I select another hair color
    And I see that color selected
    And I realize I made the wrong selection and change it
    Then I will see the original selection as not highlighted
    And I will see the new selection has been highlighted

  Scenario: Updating hair color
    Given I have already entered my hair color into the form
    When I visit /about-me/appearance/hair
    And I change my hair color selection
    And I return to the home page
    And I go to the page with my summary
    Then I will see my updated hair color
