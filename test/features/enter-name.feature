
  
  Scenario: I want to go back to previous page
    Given I go to the new online DL application page
    When I visit the legal name page
    # Then I will see a field for first, middle last name and suffix
    When I click to go back
    Then I will be on the get started page
>>>>>>> combined most navigation stories into one
