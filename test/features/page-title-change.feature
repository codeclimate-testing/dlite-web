Feature: Title of html page changes when navigating to a new link
  As an ADA customer
  I want to see the updated title for each page in the html document
  So that I know where I am

  Scenario: Navigating from the home page to the other pages
    Given I go to the new online DL application page
    When I visit the legal name page
    Then I will see page title for legal name
    When I go to the page with my summary
    Then I will see page title for summary
    When I visit the date of birth page
    Then I will see page title for date of birth
    When I visit the home addresses page
    Then I will see page title for home address
    When I visit the mailing addresses page
    Then I will see page title for mailing address
    When I visit the sex identification page
    Then I will see page title for sex identification
    When I visit eye color page
    Then I will see page title for eye color
    When I visit hair color page
    Then I will see page title for hair color
    When I visit the traits height and weight page
    Then I will see page title for height and weight
    When I visit the social security page
    Then I will see page title for social security
