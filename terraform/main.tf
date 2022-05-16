terraform {
  backend "remote" {
    organization = "antoinedelia"
    workspaces {
      name = "antoine-delia-website"
    }
  }
}

provider "aws" {
  region = "eu-west-1"

  default_tags {
    tags = {
      Environment = "Production"
      Project     = "Website Antoine Delia"
    }
  }
}

provider "aws" {
  region = "us-east-1"
  alias  = "us_east_1"

  default_tags {
    tags = {
      Environment = "Production"
      Project     = "Website Antoine Delia"
    }
  }
}