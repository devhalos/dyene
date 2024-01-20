locals {
  cache_policy_id = {
    caching_optimized = "658327ea-f89d-4fab-a63d-7e88639e58f6"
  }
  response_headers_policy_id = {
    cors_with_preflight_and_security_headers = "eaab4381-ed33-4a86-88ca-d9558dc6cd63"
  }
  s3_origin_id = "${local.component_name}-origin"
}

resource "aws_cloudfront_origin_access_control" "web_app" {
  name                              = local.component_name
  description                       = "${local.component_name} acl"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_distribution" "web_app" {
  comment             = local.component_name
  aliases             = [var.domain_name]
  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  custom_error_response {
    error_caching_min_ttl = 86400
    error_code            = 403
    response_code         = 200
    response_page_path    = "/index.html"
  }

  origin {
    domain_name              = aws_s3_bucket.web_app.bucket_regional_domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.web_app.id
    origin_id                = local.s3_origin_id
  }

  default_cache_behavior {
    cache_policy_id            = local.cache_policy_id.caching_optimized
    response_headers_policy_id = local.response_headers_policy_id.cors_with_preflight_and_security_headers
    compress                   = true
    allowed_methods            = ["HEAD", "GET"]
    cached_methods             = ["HEAD", "GET"]
    target_origin_id           = local.s3_origin_id
    viewer_protocol_policy     = "redirect-to-https"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate.web_app.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  price_class = "PriceClass_200"
}
