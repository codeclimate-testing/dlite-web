Feature: ID seekers can opt for a reduced fee
As a low income customer seeking an ID
I would like to be presented with the option of getting a reduced fee
So that I know this is and option and can come prepared

  Scenario: Navigating to the page
    Given I go to the new online DL application
    When I visit the reduced fee page
    When I click to go back
    Then I will be on the page for choosing real id


  Scenario: Special language when applying for both an ID and a DL
    Given I go to the new online DL application
    And I visit the ID or DL selection page
    When I click on the ID checkbox
    When I click on the DL checkbox
    When I visit the reduced fee page
    Then I will see an information note under the reduced fee question saying: "This only applies to your ID card."

  Scenario: Bullet points for reduced fee and no fee eligibility
    Given I go to the new online DL application
    When I visit the reduced fee page
    And I select Yes to getting a reduced fee
    When I visit the required documents page
    Then I will see at the end two additional bullet points and corresponding sections: "Reduced fee eligibility", and "No fee eligibility"
