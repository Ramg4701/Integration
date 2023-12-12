Feature: Retirement Savings Calculator Functionality

  Scenario: Submitting the Retirement Savings Calculator Form
  
    Given I am on the Retirement Savings Calculator page
    When I fill in all the required fields with valid data
    And I submit the form
    Then I should see the form submitted successfully

  Scenario: Toggling Social Security Benefits
  
    Given I am on the Retirement Savings Calculator page
    When I toggle the Social Security benefits to Yes
    Then I should see additional Social Security fields displayed
    And when I toggle the Social Security benefits to No
    Then I should see the additional fields hidden

