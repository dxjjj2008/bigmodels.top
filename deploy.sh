#!/bin/bash
# Deploy bigmodels.top to Cloudflare R2
# 配置通过 .env 文件管理，不在脚本中硬编码密钥
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ENV_FILE="$SCRIPT_DIR/.env"

# 读取 .env 文件
if [ -f "$ENV_FILE" ]; then
  set -a
  source "$ENV_FILE"
  set +a
else
  echo "❌ 错误：未找到 .env 配置文件"
  echo "请复制 .env.example 为 .env 并填入实际值"
  exit 1
fi

DIST_DIR="$SCRIPT_DIR/dist"

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
