Feature: I want to request a Real ID along with my DL
  As a customer who is getting a license
  I would be like to be able to use my license to fly nationally
  So that I don't need to get a passport just for this purpose


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
