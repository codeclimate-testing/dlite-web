Feature: Youth voting pre-registration
  As a youth from 16 years old to 18 years old
  I want to pre-register to vote via the DMV application
  So that I can start my adulthood as an engaged citizen

  Scenario: Turning 16 today and seeing pre-registration sections
    # And Today I turned 16 years old
    # When I visit voter intro page
    # And I will see header for Voting pre-registration
    # And I click "Next" to continue
    # Then I will be on the page for voter citizen status entry
    # Then I will see citizen related faq
    # And I will see header for Voting pre-registration
    # Then I will be on the eligibility page
    # And I will see header for Voting pre-registration
    # And I will be on the page for entering voter opt-out
    # Then I will see header for Voting pre-registration
    # Then I will be taken to voter preferences info page
    # And I will see header for Voting pre-registration


  Scenario: Not citizen
    Given I go to the new online DL application page
    When I visit voter citizen status page
    And I select citizen No
    Then I click "Next" to continue
    Then I go to the page with my summary
    And I will see No in my citizenship selection

#  test functions that drive what pre-registration pages user sees based on age
