Feature: Dyene web app

    Scenario Outline: resources should have default tags defined
        Given I have resource that supports tags_all defined
        When it has tags_all
        Then it must contain tags_all
        Then it must contain "<tags>"
        And its value must match the "<value>" regex
        Examples:
            | tags         | value                  |
            | organization | devhalos               |
            | project      | dyene                  |
            | component    | web-app                |
            | environment  | ^(prod\|preprod\|dev)$ |
