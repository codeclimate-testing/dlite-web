Feature: Interstitial page on the steps of the voter preference section
  As a DMV Customer
  I want a page explaining the next steps of the voter preference section
  so that I know what to expect in the next section

    # When I visit voter preferences intro page
    # Then I see text for voter preference intro render
    # Then I will see that the "Next" button is no longer disabled

  Scenario: Continuing voter preference steps
    Given I go to the new online DL application page
    When I visit voter preferences intro page
    When I click "Next" to continue
    Then I will be taken to the political party choose page
    When I click to go back
    Then I will be taken to voter preferences info page
