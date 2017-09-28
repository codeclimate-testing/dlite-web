Feature: Interstitial page on the steps of the voter preference section
  As a DMV Customer
  I want a page explaining the next steps of the voter preference section
  so that I know what to expect in the next section

  Scenario: Seeing the empty form
    Given I go to the new online DL application page
    When I visit voter preferences intro page
    Then I see text for voter preference intro render
    Then I will see that the Continue button is no longer disabled

  Scenario: Continuing voter preference steps
    Given I go to the new online DL application page
    When I visit voter preferences intro page
    When I click to submit
    Then I will be taken to political party page
