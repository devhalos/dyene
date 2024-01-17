Feature: Dyene web app cdn

    Scenario Outline: Web app cloudfront should be defined
        Given I have aws_cloudfront_distribution defined
        Then it must contain "<property>"
        And its value must be "<value>"
        Examples:
            | property            | value      |
            | enabled             | true       |
            | is_ipv6_enabled     | true       |
            | default_root_object | index.html |

    Scenario Outline: Web app cloudfront origin should be defined
        Given I have aws_cloudfront_distribution defined
        Then it must contain origin
        And it must contain "<property>"
        Examples:
            | property                 |
            | origin_access_control_id |

    Scenario Outline: Web app cloudfront default cache behaviour should be defined
        Given I have aws_cloudfront_distribution defined
        Then it must contain default_cache_behavior
        And it must contain "<property>"
        And its value must be "<value>"
        Examples:
            | property                   | value                                |
            | cache_policy_id            | 658327ea-f89d-4fab-a63d-7e88639e58f6 |
            | response_headers_policy_id | eaab4381-ed33-4a86-88ca-d9558dc6cd63 |
            | compress                   | true                                 |
            | viewer_protocol_policy     | redirect-to-https                    |
