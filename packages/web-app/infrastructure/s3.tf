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
