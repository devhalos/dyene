variable "organization" {
  type        = string
  description = "Name of the organization"
  default     = "devhalos"
}

variable "project" {
  type        = string
  description = "Name of the project"
  default     = "dyene"
}

variable "component" {
  type        = string
  description = "Name of the project's component"
  default     = "web-app"
}

variable "root_domain_name" {
  type        = string
  description = "The root domain's name"
}

variable "domain_name" {
  type        = string
  description = "The web app domain's name"
}
