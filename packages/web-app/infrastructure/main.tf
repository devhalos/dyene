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


provider "aws" {
  alias  = "us-east-1"
  region = "us-east-1"
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
  hash_dir_dist  = sha1(join("", [for f in fileset("../dist", "*") : filesha1("../dist/${f}")]))
}


output "hash_dir_dist" {
  value = local.hash_dir_dist
}
