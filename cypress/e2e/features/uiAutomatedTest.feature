Feature: test 1
 
    Scenario: scenario 1
        Given access test page
        When fill the required fields
            | username | tomsmith             |
            | password | SuperSecretPassword! |
        Then click to login
        And should be logged to the page
        And logout to the page

