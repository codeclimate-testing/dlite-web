Feature: Customers can get a senior ID for free
  As a customer that is 62 years old or greater
  I want to get a free senior ID
  So that I can easily prove my senior status for other discounts

  Scenario: Seeing the question
    Given I go to the new online DL application
    When I visit the date of birth page
    And I indicate that I am turning 62 today
    When I visit the ID or DL selection page
    And I click on the ID checkbox
    And I click "Next" to continue
    Then I will be on the senior id page

  Scenario: Opting for a senior ID and saving the data
    Given I go to the new online DL application
    When I visit the date of birth page
    And I indicate that I am turning 62 today    
    When I visit the ID or DL selection page
    And I click on the ID checkbox
    And I click "Next" to continue
    When I select yes to get a senior id
    When I go to the page with my summary
    Then I will see that I have opted for my senior ID
    # When I click to save my data
    # Then it will be saved in the database


  Scenario: Navigation when choosing no
    Given I go to the new online DL application
    When I visit the date of birth page
    And I indicate that I am turning 62 today
    When I visit the ID or DL selection page
    And I click on the ID checkbox
    And I click "Next" to continue
    When I select no to not get a senior id
    And I click "Next" to continue
    Then I will be on the page for choosing real id
    When I click yes to getting a real id
    And I click "Next" to continue
    Then I will be on the reduced fee page
    When I click to go back
    Then I will be on the page for choosing real id
  
  Scenario: Navigation when choosing yes
    Given I go to the new online DL application
    When I visit the date of birth page
    And I indicate that I am turning 62 today
    When I visit the ID or DL selection page
    And I click on the ID checkbox
    And I click "Next" to continue
    When I select yes to get a senior id
    And I click "Next" to continue
    Then I will be on the page for choosing real id
    When I click yes to getting a real id
    And I click "Next" to continue
    Then I will be on the get started page
    When I click to go back
    Then I will be on the page for choosing real id