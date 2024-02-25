terraform {
  backend "s3" {
    bucket         = "devhalos-nihil-dyene-state"
    dynamodb_table = "devhalos-nihil-dyene-state-locking"
    key            = "web-app/terraform.tfstate"
    region         = "ap-southeast-1"
    encrypt        = true
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.21.0"
    }
  }
}
