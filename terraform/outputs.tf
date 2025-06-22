output "s3_bucket_name" {
  description = "Name (id) of the bucket"
  value       = aws_s3_bucket.site.id
}

output "bucket_endpoint" {
  description = "Bucket endpoint"
  value       = aws_s3_bucket_website_configuration.site.website_endpoint
}

output "cloudfront_endpoint" {
  description = "Cloudfront endpoint"
  value       = aws_cloudfront_distribution.dist.domain_name
}

output "cloudfront_distribution_id" {
  description = "The ID of the CloudFront distribution."
  value       = aws_cloudfront_distribution.dist.id
}

output "domain_name" {
  description = "Website endpoint"
  value       = var.domain_name
}
