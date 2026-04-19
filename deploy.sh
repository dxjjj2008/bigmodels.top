#!/bin/bash
# Deploy bigmodels.top to Cloudflare R2
set -e

# R2 配置
export AWS_ACCESS_KEY_ID="f479d097bb98367d7b253f3cf70d2dc3"
export AWS_SECRET_ACCESS_KEY="111576f0ef0381313f92ca0960aa52d6e2f3f5863a2b77662cb9d510afed71ef"
export AWS_DEFAULT_REGION="auto"
export AWS_ENDPOINT_URL="https://c4d08c0c61dc09383f35e0fd3eb946b4.r2.cloudflarestorage.com"

R2_BUCKET="bucket01"
DIST_DIR="/var/www/bigmodels.top/dist"

echo "=== 开始部署 bigmodels.top 到 R2 ==="
echo "Bucket: $R2_BUCKET"

# 同步 dist 目录到 R2
aws s3 sync "$DIST_DIR" "s3://$R2_BUCKET" \
  --endpoint-url "$AWS_ENDPOINT_URL" \
  --delete \
  --exclude "*.map" \
  --cache-control "max-age=86400"

echo ""
echo "=== 验证 R2 文件结构 ==="
aws s3 ls "s3://$R2_BUCKET" --endpoint-url "$AWS_ENDPOINT_URL" --recursive 2>&1 | awk 'NR<=30 {print}'

echo ""
echo "=== 部署完成 ==="
