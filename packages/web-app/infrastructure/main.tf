provider "aws" {
  region = "ap-southeast-1"

  default_tags {
    tags = {
      environment  = local.environment
      organization = var.organization
      project      = var.project
      component    = var.component
    }
  }
}

data "aws_region" "current" {}

locals {
  environment    = terraform.workspace
  component_name = "${local.environment}-${var.organization}-${var.project}-${var.component}"
  cache_policy_id = {
    caching_optimized = "658327ea-f89d-4fab-a63d-7e88639e58f6"
  }
  s3_origin_id = "${local.component_name}-origin"
}
