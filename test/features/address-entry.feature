Feature: CRUD operations on the residential address
  As a DMV customer
  I want to save my residence address in my new online DL application
  So that the DMV knows how to get in touch with me

  Scenario: Seeing the empty form
    Given I go to the new online DL application page
    When I visit the addresses page
    Then I will see a form for entering my residential address

  #Scenario: Entering my address and saving
    #Given I go to the new online DL application page
    #And I visit the addresses page
    #When I enter my residence address
    #And I submit my residence address
    #And I return to the home page
    #And I go to the page with my summary
    #Then I will see my residence address on that summary

  #Scenario: Seeing a form with existing data
    #Given I go to the new online DL application page
    #And I have already entered my residence address into the form
    #When I visit the addresses page
    #Then I will see the residence address I entered

  #Scenario: Updating residence address data
    #Given I go to the new online DL application page
    #And I have already entered my residence address into the form
    #When I visit the addresses page
    #And I change my residence zip
    #And I return to the home page
    #And I go to the page with my summary
    #Then I will see my updated residence zip
