resource "aws_acm_certificate" "web_app" {
  provider                  = aws.us-east-1
  domain_name               = var.domain_name
  subject_alternative_names = ["*.${var.domain_name}"]
  validation_method         = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_acm_certificate_validation" "web_app_cert_validation" {
  provider                = aws.us-east-1
  certificate_arn         = aws_acm_certificate.web_app.arn
  validation_record_fqdns = [for r in aws_route53_record.web_app_cert_validation : r.fqdn]
}
