Feature: I want to select my eye color
  As a DMV customer
  I want to provide eye color in my new online DL application
  So that the DMV can use it for identification

  Scenario: Seeing the form for eye color
    Given I go to the new online DL application
    And I visit /about-me/appearance/eye
    Then I will see buttons for Blue, Gray, Green, Hazel and Brown
    And I will see a button to submit my information about my eye color

  Scenario: Entering my eye color and saving
    Given I go to the new online DL application
    And I visit /about-me/appearance/eye
    When I select an eye color
    And I submit that description of my eye color
    And I return to the home page
    And I go to the page with my summary
    Then I will see the eye color I selected

  Scenario: Seeing a form with existing data
    Given I go to the new online DL application
    And I have already entered my eye color into the form
    And I visit /about-me/appearance/eye
    Then I will see the eye color I selected

  Scenario: Changing selection before saving and seeing feedback about current selection
    Given I go to the new online DL application
    And I visit /about-me/appearance/eye
    When I select an eye color
    And I see that eye color selected
    And I realize I made the wrong eye color selection and change it
    Then I will see the original eye color selection as not highlighted
    And I will see the new eye color selection has been highlighted

  Scenario: Updating eye color
    Given I go to the new online DL application
    Given I have already entered my eye color into the form
    And I visit /about-me/appearance/eye
    And I change my eye color selection
    And I return to the home page
    And I go to the page with my summary
    Then I will see my updated eye color
