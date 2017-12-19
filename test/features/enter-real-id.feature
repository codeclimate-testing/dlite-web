Feature: I want to request a Real ID along with my DL
  As a customer who is getting a license
  I would be like to be able to use my license to fly nationally
  So that I don't need to get a passport just for this purpose

Scenario: Choosing real id with just one card
  Given I go to the new online DL application
  When I visit the real id page
  When I click yes to getting a real id
  And I click "Next" to continue
  Then I go to the page with my summary
  Then I will see that I am getting a real id

Scenario: Choosing real id with two cards
  Given I go to the new online DL application
  And I visit the ID or DL selection page
  When I click on the ID checkbox
  When I click on the DL checkbox
  And I click "Next" to continue
  Then I will be on the page for choosing real id
  When I click yes to getting a real id
  And I will see that the "Next" button is disabled
  When I select ID to have my real id designation
  And I click "Next" to continue
  Then I go to the page with my summary
  Then I will see that I am getting a real id
Scenario: Navigating to and from the real id page
Given I go to the new online DL application
And I visit the ID or DL selection page
When I click on the ID checkbox
And I click "Next" to continue
Then I will be on the page for choosing real id
When I click yes to getting a real id
And I click "Next" to continue
Then I will be on the reduced fee page
And I click to go back
Then I will be on the page for choosing real id

Scenario: Choosing real id
Given I go to the new online DL application
When I visit the real id page
When I click yes to getting a real id
And I click "Next" to continue
Then I go to the page with my summary
Then I will see that I am getting a real id

Scenario: Opting out of real id
  Given I go to the new online DL application
  When I visit the real id page
  When I click no to getting a real id
  And I click "Next" to continue
  Then I go to the page with my summary
  Then I will see that I am not getting a real id

Scenario: Interacting with the accordions for real ID
  Given I go to the new online DL application
  When I visit the real id page
  Then I will see two closed accordions for real ID
  And The title of each accordion for real ID will be visible
  When I click in the title for real ID info accordion
  Then The real ID info accordion will open to show its full content
  When I click in the title for real ID info accordion
  Then The real ID info accordion will close
  When I click in the title for real ID requirements accordion
  Then The real ID requirements accordion will open to show its full content
