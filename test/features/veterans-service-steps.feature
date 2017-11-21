Feature: Customer asked about vetran status and ID
  As a DMV Customer who is a vetran
  I want to have the option of getting a veteran's id
  And to get more information about veteran's services
  So that I can sign up for benefits unique to veterans

  Scenario: Navigating to the page from revocations or suspensions page
    Given I go to the new online DL application page
    And I visit the license issues page
    When I select suspended license No
    When I click to submit
    Then I will be on the page for veteran related services
    When I click to go back
    Then I will be taken to the license issues page
    When I select suspended licence Yes
    When I enter date of my license suspension
    And I enter the reason for my license suspension
    When I click to submit
    Then I will be on the page for veteran related services

  Scenario: Viewing and selecting No about being a veteran
    Given I go to the new online DL application page
    And I visit the veteran services page
    Then I will see the section heading for my history
    And I will see that the Continue button is disabled
    When I click No for veteran
    Then I will see that the Continue button is no longer disabled
    And I click to submit
    Then I will be on the page for organ selection
    When I go to the page with my summary
    Then I will see that I am not an veteran

  Scenario: Selecting Yes about being a veteran
    Given I go to the new online DL application page
    And I visit the veteran services page
    And I will see that the Continue button is disabled
    When I click Yes for veteran
    Then I will see a question to receive benefits information
    And I will see a message thanking me for my service
    And I will see a question about getting the word Veteran added to my license
    When I click Yes to receiving additional information about benefits
    And I click Yes about having my license labeled with Veteran
    Then I will see additional 5 dollars added to my fee message
    When I go to the page with my summary
    Then I will see that I am a veteran
    Then I will see that I would like additional veterans benefits info
    Then I will see that I would like that veterans label on my id