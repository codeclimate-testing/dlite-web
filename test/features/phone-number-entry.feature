Feature: I want to enter my phone number
	As a DMV customer
	I want to save my phone number** in my new online DL application
	So that the DMV knows how to get in touch with me

Scenario: Seeing the  form for my phone
	Given I go to the new online DL application page
  When I visit /about-me/contact
  Then I will see a field for my phone number
  And I will see a button to submit my phone number

Scenario: Entering my phone and saving
	Given I go to the new online DL application page
  When I visit /about-me/contact
  And I enter my phone number
  And I click to submit my phone
	And I return to the home page
	And I go to the page with my summary
	Then I will see my phone on that summary

Scenario: Seeing a form with existing data
  Given I have already entered my phone into the form
	And I return to the home page
  When I visit /about-me/contact
  Then I will see the phone I entered

Scenario: Updating mailing address data
  Given I have already entered my phone into the form
	And I return to the home page
  When I visit /about-me/contact
  And I change my phone number
	And I return to the home page
  And I go to the page with my summary
  Then I will see my updated phone