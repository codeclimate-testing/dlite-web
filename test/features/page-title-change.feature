Feature: Title of html page changes when navigating to a new link
  As an ADA customer
  I want to see the updated title for each page in the html document
  So that I know where I am

  Scenario: Navigating from the home page to the other pages
    Given I go to the new online DL application page
    When I visit the legal name page
    Then I will see page title for legal name
    And I return to the home page
    When I go to the page with my summary
    Then I will see page title for summary
    And I return to the home page
    When I visit the date of birth page
    Then I will see page title for date of birth
    And I return to the home page
    When I visit the home addresses page
    Then I will see page title for home address
    And I return to the home page
    When I visit the mailing addresses page
    Then I will see page title for mailing address
    And I return to the home page
    When I visit the sex identification page
    Then I will see page title for sex identification
    And I return to the home page
    When I visit eye color page
    Then I will see page title for eye color
    And I return to the home page
    When I visit hair color page
    Then I will see page title for hair color
    And I return to the home page
    When I visit the height page
    Then I will see page title for height
    And I return to the home page
    When I visit the weight page
    Then I will see page title for weight
    And I return to the home page
    When I visit the social security page
    Then I will see page title for social security