Feature: Editing a card and needing additional info
As a DMV customer who is editing WDYWTDT to correct/update
I want to get the right remaining data points
So that I have a complete and valid application

  Scenario: Switching from new DL/ID to correct/update
    Given I have already filled out my DL application
    When I click to edit my DL
    Then I will see a WDYWTDT page with only the new DL option
    And I will see that my selection to get a new card is already selected
    When I choose to change a DL
    And I click "Next" to continue
    Then I will be on the edit current card info page
    And I click "Next" to continue
    Then I will be on the page to edit choosing to update or correct my card
    When I choose to update my DL
    And I check the box to update my name
    And I click "Next" to continue
    Then I will be on the page with my summary
    And I will see that I am updating my DL

  Scenario: Switching from renew/replace to correct/update
    Given I have already filled out an application to replace a DL
    When I click to edit my DL
    Then I will see a WDYWTDT page with only the new DL option
    And I will see that my selection to get a replacement card is already selected
    When I choose to change a DL
    And I click "Next" to continue
    And I will be on the page to edit choosing to update or correct my card
    When I choose to update my DL
    And I check the box to update my name
    And I click "Next" to continue
    Then I will be on the page with my summary
    And I will see that I am updating my DL

  Scenario: Switching from correct to update, or the opposite
    Given I have already filled out an application to correct a DL
    And I will be on the page with my summary
    When I click to edit my DL
    Then I will see a WDYWTDT page with only the new DL option
    And I will see that my selection to change a card is already selected
    And I click "Next" to continue
    And I will be on the page to edit choosing to update or correct my card
    When I choose to update my DL
    And I check the box to update my name
    And I click "Next" to continue
    Then I will be on the page with my summary
    And I will see that I am updating my DL

  Scenario: Switching from new DL/ID to replace
    Given I have already filled out my DL application
    When I click to edit my DL
    Then I will see a WDYWTDT page with only the new DL option
    And I will see that my selection to get a new card is already selected
    When I choose to replace an added DL
    And I click "Next" to continue
    Then I will be on the edit current card info page
    When I click "Next" to continue
    Then I will be on the page to edit choosing reason for replacement
    When I select the DL was damaged
    And I click "Next" to continue
    Then I will be on the page with my summary
    And I will see that I am replacing my DL

  Scenario: Switching from renew/correct/update to replace
    Given I have already filled out an application to replace a DL
    When I click to edit my DL
    Then I will see a WDYWTDT page with only the new DL option
    And I will see that my selection to get a replacement card is already selected
    When I choose to replace an added DL
    And I click "Next" to continue
    And I will be on the page to edit choosing reason for replacement
    When I select the DL was damaged
    And I click "Next" to continue
    Then I will be on the page with my summary
    And I will see that I am replacing my DL

  Scenario: Affirming replacement, changing reason
    Given I have already filled out an application to replace a DL
    When I click to edit my DL
    Then I will see a WDYWTDT page with only the new DL option
    And I will see that my selection to get a replacement card is already selected
    When I click "Next" to continuet
    And I will be on the page to edit choosing reason for replacement
    When I select the DL was damaged
    And I click "Next" to continue
    Then I will be on the page with my summary
    And I will see that I am replacing my DL

  Scenario: Switching from new DL/ID to renew
    Given I have already filled out my DL application
    When I click to edit my DL
    Then I will see a WDYWTDT page with only the new DL option
    And I will see that my selection to get a new card is already selected
    When I choose to renew a DL
    And I click "Next" to continue
    Then I will be on the edit current card info page
    When I enter my current card data
    And I click "Next" to continue
    Then I will be on the page with my summary
    And I will see that I am renewing my DL

  Scenario: Switching from correct/update/replace (or renew) to renew
    Given I have already filled out an application to replace a DL
    When I click to edit my DL
    Then I will see a WDYWTDT page with only the new DL option
    And I will see that my selection to get a replacement card is already selected
    When I choose to renew a DL
    And I click "Next" to continue
    Then I will be on the page with my summary
    And I will see that I am renewing my DL

  Scenario: Editing the WDYWTDT and selecting new
    Given I have already filled out an application to replace a DL
    When I click to edit my DL
    Then I will see a WDYWTDT page with only the new DL option
    When I choose to add a new DL
    And I click "Next" to continue
    Then I will be on the page to edit existing license and id
    When I select existing DL/ID No
    Then I click "Next" to continue
    Then I will be on the page with my summary
    And I will see that I am getting a new DL
    And I will see No in my existing DL/ID selection
