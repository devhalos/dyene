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
}
