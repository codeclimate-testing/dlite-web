Feature: Customers can get a senior ID for free
  As a customer that is 62 years old or greater
  I want to get a free senior ID
  So that I can easily prove my senior status for other discounts

  Scenario: Opting for a senior ID and saving the data
    Given I go to the new online DL application
    When I visit the date of birth page
    And I indicate that I am turning 62 today
    And I click "Next" to continue
    And I choose to get a new card
    When I visit the ID or DL selection page
    And I click on the ID checkbox
    And I click "Next" to continue
    Then I will be on the senior id page
    When I select yes to get a senior id
    And I click "Next" to continue
    And I click yes to getting a real id on the ID
    And I click "Next" to continue
    Then I will be on the get started page
    When I go to the page with my summary
    Then I will see that I have opted for my senior ID


  Scenario: Navigation when choosing no
    Given I go to the new online DL application
    When I visit the date of birth page
    And I indicate that I am turning 62 today
    When I visit the what do you want to do today page
    And I choose to renew a card
    When I visit the ID or DL selection page
    And I choose to renew an ID
    When I visit the senior id page
    When I select no to not get a senior id
    And I click "Next" to continue
    Then I will be on the page for choosing real id
    When I click yes to getting a real id on the ID
    And I click "Next" to continue
    Then I will be on the reduced fee page
    When I click to go back
    Then I will be on the page for choosing real id

  Scenario: senior user updating ID
    Given I go to the new online DL application
    When I visit the date of birth page
    And I indicate that I am turning 62 today
    When I visit the what do you want to do today page
    And I choose to change a card
    When I click "Next" to continue
    When I visit the ID or DL selection page
    And I choose to change an ID
    When I click "Next" to continue
    Then I will be on the current card info page
    And I enter my current card data
    When I click "Next" to continue
    Then I will be on the page for choosing to update or correct my card
    When I click "Next" to continue
    Then I will see an error message telling me I need to make a selection
    And I choose to update my ID
    And I check the box to update my name
    When I click "Next" to continue
    Then I will be on the senior id page
    When I select yes to get a senior id
    And I click "Next" to continue
    And I click yes to getting a real id on the ID
    And I click "Next" to continue
    Then I will be on the get started page
    When I go to the page with my summary
    Then I will see that I am updating the name on my ID

  Scenario: senior user replacing ID
    Given I go to the new online DL application
    When I visit the date of birth page
    And I indicate that I am turning 62 today
    When I visit the what do you want to do today page
    And I choose to replace a card
    When I click "Next" to continue
    When I visit the ID or DL selection page
    And I choose to replace an ID
    When I click "Next" to continue
    Then I will be on the current card info page
    And I enter my current card data
    When I click "Next" to continue
    And I select the ID was damaged
    When I click "Next" to continue
    Then I will be on the senior id page
    When I select yes to get a senior id
    And I click "Next" to continue
    And I click yes to getting a real id on the ID
    And I click "Next" to continue
    Then I will be on the get started page

  Scenario: senior user adding a new ID
    Given I go to the new online DL application
    When I visit the date of birth page
    And I indicate that I am turning 62 today
    When I visit the what do you want to do today page
    And I choose to replace a card
    When I click "Next" to continue
    When I visit the ID or DL selection page
    And I choose to replace a DL
    When I visit the page to add an ID
    When I choose to add a new ID
    And I click "Next" to continue
    Then I will be on the page to add senior id
    When I select yes to get a senior id
    And I click "Next" to continue
    Then I will be on the page with my summary
    Then I will see that I have opted for my senior ID

  Scenario: senior user adding a replacement ID
    Given I go to the new online DL application
    When I visit the date of birth page
    And I indicate that I am turning 62 today
    When I visit the page to add an ID
    And I choose to add a replacement ID
    And I click "Next" to continue
    Then I will be on the page to add current ID info
    When I enter my current card data
    And I click "Next" to continue
    Then I will be on the page to add ID replacement details
    When I select the ID was damaged
    And I click "Next" to continue
    Then I will be on the page to add senior id
    When I select yes to get a senior id
    And I click "Next" to continue
    Then I will be on the page with my summary
    Then I will see that I have opted for my senior ID
    And I will see that I am replacing my ID

