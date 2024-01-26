resource "aws_s3_bucket" "web_app" {
  bucket = local.component_name
}

resource "aws_s3_bucket_policy" "web_app" {
  bucket = aws_s3_bucket.web_app.id
  policy = data.aws_iam_policy_document.web_app.json
}

data "aws_iam_policy_document" "web_app" {
  statement {
    sid = "AllowGetObject"
    principals {
      type = "Service"
      identifiers = [
        "cloudfront.amazonaws.com"
      ]
    }
    actions = [
      "s3:GetObject"
    ]
    resources = [
      "arn:aws:s3:::${aws_s3_bucket.web_app.bucket}/*"
    ]
    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values   = [aws_cloudfront_distribution.web_app.arn]
    }
  }
}

module "web_app_source_files" {
  source   = "hashicorp/dir/template"
  base_dir = "${path.root}/../dist"
}

resource "aws_s3_object" "static_files" {
  for_each     = module.web_app_source_files.files
  bucket       = aws_s3_bucket.web_app.bucket
  key          = each.key
  content_type = each.value.content_type
  content      = each.value.content
  source       = each.value.source_path
  etag         = each.value.digests.md5
}
