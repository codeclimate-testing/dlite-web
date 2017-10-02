Feature: Confirmation Page
As a DMV Customer
I want to prepare for my in-person visit
so that I will schedule and confirm my visit and be able to complete my transaction during my visit

Scenario: Seeing the empty form
Given I go to the new online DL application page
And I visit success visit page
Then I see text for documents needed for a Class C license
When I click to submit
Then I will be taken to the existing DMV scheduling tool