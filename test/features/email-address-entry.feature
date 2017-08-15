Feature: I want to enter my email address
	As a DMV customer
	I want to save my email in my new online DL application
	So that the DMV can contact me digitally

	Scenario: Seeing the empty form
		Given I go to the new online DL application page
		When I visit /about-me/contact
		Then I will see a field for email
		And I will see a button to submit my email

	Scenario: Entering my email address and saving
		Given I go to the new online DL application page
		When I visit /about-me/contact
		And I enter email
		And I click to submit my email
		And I return to the home page
		And I go to the page with my summary
		Then I will see my email on that summary

	Scenario: Seeing a form with existing data
		Given I have already entered my email into the form
		And I return to the home page
		When I visit /about-me/contact
		Then I will see the email I entered

	Scenario: Updating email data
		Given I have already entered my email into the form
		And I return to the home page
		When I visit /about-me/contact
		And I change my email
		And I return to the home page
		And I go to the page with my summary
		Then I will see my updated email