Feature: dyene web app bucket

    Scenario: web app bucket should have correct name
        Given I have aws_s3_bucket defined
        Then it must contain bucket
        And its value must match the "^(dev|preprod|prod)-devhalos-dyene-.+$" regex
