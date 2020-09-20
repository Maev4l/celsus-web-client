/**
 * Deployment script into a parameterized CloudFront distribution
 */

const { execSync } = require('child_process');
const infra = require('./infra.json');

execSync(
  `deploy-aws-s3-cloudfront --source ./dist --bucket celsus.isnan.eu --distribution ${infra.webClientDistribution} --invalidation-path "/*" --profile default --delete --non-interactive --react`,
  { stdio: 'inherit' },
);
