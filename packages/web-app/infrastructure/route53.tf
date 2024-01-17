data "aws_route53_zone" "root" {
  name = var.root_domain_name
}

resource "aws_route53_zone" "web_app" {
  name = var.domain_name
}

resource "aws_route53_record" "web_app_ns" {
  zone_id = data.aws_route53_zone.root.zone_id
  name    = var.domain_name
  type    = "NS"
  ttl     = 30
  records = aws_route53_zone.web_app.name_servers
}

resource "aws_route53_record" "web_app" {
  zone_id = aws_route53_zone.web_app.zone_id
  name    = var.domain_name
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.web_app.domain_name
    zone_id                = aws_cloudfront_distribution.web_app.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "web_app_cert_validation" {
  for_each = {
    for d in aws_acm_certificate.web_app.domain_validation_options : d.domain_name => {
      name   = d.resource_record_name
      record = d.resource_record_value
      type   = d.resource_record_type
    }
  }
  provider        = aws.us-east-1
  zone_id         = aws_route53_zone.web_app.zone_id
  name            = each.value.name
  type            = each.value.type
  allow_overwrite = true
  records         = [each.value.record]
  ttl             = 60
}
