Feature: Address interstitial page
  As a DMV customer
  I want to select if my home addres sis same as mailing address
  So that the DMV knows how to get in touch with me

  Scenario: My Addresses are the Same
    Given I go to the new online DL application page
    And I have entered my home address and clicked submit
    Then I see a page labelled correctly for address interstitial page
    And I see two buttons labelled Yes and No
    When I select Yes
    Then I will be on the page for entering my sex identification
    Then I return to the home page
    And I go to the page with my summary
    Then I will see residence address and mailing address will have the same information

  Scenario: My Addresses are Not the Same
    Given I go to the new online DL application page
    And I have entered my home address and clicked submit
    When I select No
    Then I will be on the page for entering my mailing address
