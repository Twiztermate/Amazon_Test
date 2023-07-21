Feature: Sort Tablet Accessories by Brand on Amazon
  As a user
  I want to filter and sort Tablet Accessories by brand on Amazon
  So that I can find and verify specific products

  Scenario: Filter and Sort Tablet Accessories by JETech and filter by Newest arrivals
    Given I am on the Amazon homepage
    When I click the hamburger menu
    When I click on Computers
    When I click on Tablet Accessories
    When I check the JETech brand
    When I filter JETech results with the Newest Arrivals
    When I find the lowest priced item
    Then I should see the About this item section
    Then I log the About this item section to the console