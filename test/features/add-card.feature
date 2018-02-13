Feature: Add a drivers license to an existing ID application
As a DMV customer, who has already completed an ID application
I want to create a DL application for a new DL without entering everything again
So that my process is efficient and I have a better experience with government software

Scenario: Choosing to add a new DL
Given I have already filled out my ID application
# And I want to add a DL
When I visit the page to add a DL
Then I will see a WDYWTDT page with only the new DL option
Then I will see that the validations work the same as the WDYWTDT page
When I choose to get a new card
And I click "Next" to continue
Then I will be on the page to add license type
Then I will see that the page looks the same as the normal license type page
And I will see that the validations work the same as the normal license type page
When I click to go back
Then I will be on the page to add a DL
And I click "Next" to continue
When I click on the car checkbox
Then I click to not need endorsements
And I click "Next" to continue
Then I will be on the page to add medical history
Then I will see that the page looks like the current medical history page
And I will see that the page validations behave the same as the current medical history page
When I click to go back
Then I will be on the page to add license type
And I click "Next" to continue
When I select No to having reportable medical history
And I click "Next" to continue
Then I will be on the page to add license history
Then I will see a page that looks and acts like the existing DL license and ID history page
When I select existing DL/ID Yes
And I click "Next" to continue
Then I will be on the page to add license issues
When I select suspended license No
And I click "Next" to continue
Then I will be on the page with my summary
# And I will see the information I filled out about my DL in the My Driver License section of the summary
