Feature: Youth who can't yet apply for license due to age
  As a youth under 14
  I want to get a helpful message about being too young to apply
  So I don't waste my time trying to get a junior license before it is legal

  Scenario: Opting for an ID instead
    Given I go to the new online DL application
    When I visit the date of birth page
    And I indicate that I am younger than 14
    When I visit the ID or DL selection page
    And I click on the DL checkbox
    And I click "Next" to continue
    Then I will be on a page letting me know I cant yet apply
    And I will see a message asking if I would like an ID instead
    When I click to get an ID instead
    And I click "Next" to continue
    Then I will be on the page for choosing real id
    When I go to the page with my summary
    Then I will see that my ID card type has been saved
    And I will see that I am not getting a DL
    
  Scenario: Opting not to get a license
    Given I go to the new online DL application
    When I visit the date of birth page
    And I indicate that I am younger than 14
    When I visit the ID or DL selection page
    And I click on the DL checkbox
    And I click "Next" to continue
    Then I will be on a page letting me know I cant yet apply
    When I click "No" to not get a license instead
    Then I will see a message after my choice letting me know I should come back when I am 14 or older
    And I will see there is no "Next" button