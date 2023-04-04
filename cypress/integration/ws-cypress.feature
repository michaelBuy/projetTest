Feature: Hello Cypress

    Scenario: Cypress mock-test
        Then I open the browser
        And I open the Google
        Then I can search
        When I search "cookie"
        Then all elements in list should contain "cookie"
