Feature: showing off behave

  Scenario: run a simple test
     Given Website is up and running
      When open boat-reservation
      Then "Finally it works" appear
