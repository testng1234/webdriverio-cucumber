Feature: Retirement Calculator

  Scenario: Submit retirement calculator form with all fields filled
    Given I am on the retirement calculator page
    When I fill the form with valid data
    And I submit the form
    Then I should see the retirement calculation result
