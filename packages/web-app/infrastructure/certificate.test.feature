Feature: dyene web app certificate

    Scenario Outline: web app certificate should have correct properties
        Given I have aws_acm_certificate defined
        Then it must contain "<property>"
        And its value must match the "<value>" regex
        Examples:
            | property          | value                                         |
            | domain_name       | ^(dev\|preprod\|prod)-dyene\\.devhalos\\.com$ |
            | validation_method | DNS                                           |

