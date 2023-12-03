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
        And its value must match the "<value>" regex
        Examples:
            | property                 | value                                                                    |
            | domain_name              | ^(dev\|preprod\|prod)-devhalos-dyene-.+.s3.ap-southeast-1.amazonaws.com$ |
            | origin_access_control_id | .+                                                                       |
            | origin_id                | ^(dev\|preprod\|prod)-devhalos-dyene-.+.+-origin$                        |

    Scenario Outline: Web app cloudfront default cache behaviour should be defined
        Given I have aws_cloudfront_distribution defined
        Then it must contain default_cache_behavior
        And it must contain "<property>"
        And its value must be "<value>"
        Examples:
            | property               | value             |
            | viewer_protocol_policy | redirect-to-https |
