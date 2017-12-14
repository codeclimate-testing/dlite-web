Feature: Contact details for voter flow
  As a DMV Customer
  I want to choose and enter my preferred contact details
  so that the Secretary of State can contact me related to voter information

  Scenario: Viewing the form and entering my contact details
    Given I go to the new online DL application page
    When I visit contact methods details page
    Then I will see that the "Next" button is enabled
    And I see three contact methods buttons labelled Yes, No and Skip Question
    When I select contact methods Yes
    Then I will be shown form to enter my contact methods details
    And I will see that the "Next" button is disabled
    And I enter my email
    And I enter my phone number
    Then I will see that the "Next" button is no longer disabled
    When I click "Next" to continue
    Then I will be taken to voter registration complete page
    When I click to go back
    Then I will be taken to contact methods page
    And I go to the page with my summary
    Then I will see my contact details in summary

  Scenario: I choose not to provide my conatct details
    Given I go to the new online DL application page
    When I visit contact methods details page
    When I select contact methods No
    When I click "Next" to continue
    Then I will be taken to voter registration complete page
    When I click to go back
    Then I will be taken to contact methods page
    And I go to the page with my summary
    Then I will see that I did not choose to be contacted

  Scenario: I choose to skip
    Given I go to the new online DL application page
    When I visit contact methods details page
    When I select contact methods Skip Question
    When I click "Next" to continue
    Then I will be taken to voter registration complete page
    When I click to go back
    Then I will be taken to contact methods page
    And I go to the page with my summary
    Then I will see that I did not answer to be contacted

  Scenario: Updating contact methods details
    Given I go to the new online DL application page
    And I have already eneterd my contact details
    When I visit contact methods details page
    Then I will see my email and phone number
    When I update my email and phone number
    And I go to the page with my summary
    Then I will see my updated email and phone number in summary

