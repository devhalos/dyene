Feature: dyene web app bucket

    Scenario: web app bucket should have correct name
        Given I have aws_s3_bucket defined
        Then it must contain bucket
        And its value must match the "^(dev|preprod|prod)-devhalos-dyene-.+$" regex

    Scenario Outline: web app bucket object should have correct properties
        Given I have aws_s3_object defined
        Then it must contain "<property>"
        Examples:
            | property     |
            | content_type |
            | content      |
            | source       |
            | etag         |
