Feature: dyene web app domain

    Scenario Outline: web app name server should have correct properties
        Given I have aws_route53_record defined
        When its type is "NS"
        Then it must contain "<property>"
        Examples:
            | property |
            | ttl      |
            | records  |

    Scenario Outline: web app alias should have correct properties
        Given I have aws_route53_record defined
        When its type is "A"
        Then it must contain "<property>"
        And its value must match the "<value>" regex
        Examples:
            | property | value                                         |
            | name     | ^(dev\|preprod\|prod)-dyene\\.devhalos\\.com$ |

