Feature: hilarity ensues

  Scenario: the web page is funny
    Given the user is looking at the page
    Then the page is hilarious

  Scenario: pages on paths are visible to wdio
    Given the user is looking at another path
    Then the page at another path is visible
