# BigModels.top 项目文档

> 维护人：小欧 / AI助手（小爱）| 最后更新：2026-04-19 | 版本：v1.1

---

## 一、项目概览

| 项目 | 内容 |
|------|------|
| **名称** | BigModels.top — AI 工具导航站 |
| **域名** | https://bigmodels.top |
| **架构** | Astro 静态站点 + Tailwind CSS + Cloudflare R2/CDN |
| **页面数** | 50 页（含 sitemap） |
| **构建产物** | `/dist`，~854KB |
| **部署方式** | `deploy.sh` 同步至 Cloudflare R2 bucket01 |
| **Git 仓库** | https://github.com/dxjjj2008/bigmodels.top |

### 目录结构

```
bigmodels.top/
├── src/
│   ├── data/
│   │   ├── tools.ts        # 工具数据（42个工具，含评分/定价/优缺点/Affiliate）
│   │   └── seo-meta.ts     # SEO 元数据
│   ├── layouts/
│   │   └── Layout.astro    # 全局布局（Header + BottomNav + Footer）
│   ├── components/
│   │   ├── BottomNav.astro # 移动端底部 Tab 导航
│   │   └── ToolLogo.astro   # 工具 Logo 组件
│   ├── pages/
│   │   ├── index.astro           # 首页
│   │   ├── about.astro           # 关于页
│   │   ├── category/[slug].astro  # 分类页（8个分类）
│   │   └── tool/[slug].astro      # 工具详情页（42个）
│   └── styles/
│       └── global.css        # 全局样式
├── docs/
│   └── mobile-optimization-plan.md  # 移动端优化方案（小欧 v1.0）
├── public/                   # 静态资源（favicon, robots.txt）
├── deploy.sh                 # 部署脚本（→ R2）
├── astro.config.mjs          # Astro 配置
├── package.json
└── tsconfig.json
```

---

## 二、技术规格

### 框架与依赖

- **Astro** v5（静态生成，`output: "static"`）
- **Tailwind CSS**（样式框架）
- **astro-sitemap**（自动生成 sitemap，50 页）
- **部署**：AWS CLI → Cloudflare R2 bucket01 → Cloudflare CDN

### 路由结构

| 路由 | 文件 | 说明 |
|------|------|------|
| `/` | `index.astro` | 首页：Hero + 搜索 + 分类入口 + 工具卡片 |
| `/about` | `about.astro` | 关于页 |
| `/category/[slug]` | `category/[slug].astro` | 分类页（8个：llm/code/image/video/audio/search/docs/other） |
| `/tool/[slug]` | `tool/[slug].astro` | 工具详情页（42个工具） |

### 工具数据模型（tools.ts）

```typescript
interface Tool {
  id: string;              // URL slug，如 "chatgpt"
  name: string;            // 显示名称
  description: string;     // 完整描述
  category: string;        // 分类 ID
  url: string;             // 官网链接
  tags: string[];          // 标签数组
  rating: number;          // 0-5，支持半星（如 4.5）
  pricing: string;         // 免费 / 付费 / 免费+订阅 / 订阅
  features: string[];      // 核心功能，3-5条
  pros: string[];          // 优点，2-4条
  cons: string[];          // 缺点，2-4条
  targetAudience: string;  // 适用人群
  affiliateUrl: string;    // 推广链接（带追踪参数）
}
```

---

## 三、页面设计规范（已实现）

### 3.1 首页（index.astro）

#### Hero 区域
- **标题字号**：`text-2xl sm:text-3xl md:text-4xl lg:text-5xl`
- **上下内边距**：`py-6 sm:py-10 md:py-16`
- **副标题字号**：`text-base sm:text-lg md:text-xl`
- **Badge**：两个计数标签（工具数 + 分类数）

#### 搜索框
- `enterKeyHint="search"` — 手机键盘显示搜索按钮
- 最多显示 8 条搜索结果
- 点击外部关闭下拉

#### 分类入口
- **网格列数**：移动端 3 列 → sm 4列 → md 6列 → lg 8列
- **间距**：`gap-2 sm:gap-3`
- 每个分类显示：图标 + 名称 + 工具数量

#### 工具卡片
- **网格**：`grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`
- **间距**：`gap-3 sm:gap-4`
- **内容**：Logo + 名称 + 评分 + 描述（line-clamp-2）+ 分类标签 + 前两个标签

### 3.2 工具详情页（tool/[slug].astro）

| 元素 | 移动端 | 桌面端 |
|------|--------|--------|
| 标题字号 | `text-2xl` | `text-3xl md:text-4xl` |
| 标签区 | `overflow-x-auto` 横向滚动 | `flex-wrap` 自然换行 |
| 功能列表文字 | `text-sm` | `text-base` |
| 优缺点文字 | `text-sm` | `text-base` |
| 适用人群文字 | `text-base` | `text-lg` |
| Affiliate 按钮 | `w-full` 全宽 | `w-auto` 自适应 |
| Affiliate 字号 | `text-base` | `text-lg` |

### 3.3 全局布局（Layout.astro）

| 元素 | 实现 |
|------|------|
| Header | 固定顶部 + 毛玻璃效果，`sticky top-0 z-40` |
| 移动端导航 | 隐藏文字导航，`hidden md:flex` |
| 底部留白 | 移动端 `pb-16`（给 BottomNav 让位），桌面端 `pb-0 lg:pb-0` |
| 底部导航 | `BottomNav.astro`，仅移动端显示，`lg:hidden` |
| Footer | 移动端紧凑 `py-4`，桌面端正常 `py-6` |

### 3.4 底部 Tab 导航（BottomNav.astro）

- **4 个 Tab**：🏠 首页 / 📂 分类 / 🔍 搜索 / ℹ️ 关于
- **当前页高亮**：`text-brand-500`，其余 `text-gray-400`
- **iPhone 安全区域**：`env(safe-area-inset-bottom)`
- **搜索按钮**：聚焦首页搜索框，`scrollIntoView`

---

## 四、已完成的移动端优化（全部 8 项）

| # | 优化项 | 实现状态 | 代码位置 |
|---|--------|----------|----------|
| 1 | Hero 标题响应式 | ✅ `text-2xl~5xl` | `index.astro` L13 |
| 2 | Hero 内边距响应式 | ✅ `py-6~16` | `index.astro` L12 |
| 3 | 分类入口响应式网格 | ✅ `3→4→6→8` 列 | `index.astro` L49 |
| 4 | 工具卡片响应式 | ✅ `grid-cols-1 sm:grid-cols-2` | `index.astro` L73, L110 |
| 5 | 底部 Tab 导航栏 | ✅ 固定底部 + 安全区域 | `BottomNav.astro` |
| 6 | 详情页标签横向滚动 | ✅ `overflow-x-auto whitespace-nowrap` | `tool/[slug].astro` L40 |
| 7 | 详情页功能/优缺点响应式 | ✅ `text-sm sm:text-base` | `tool/[slug].astro` L86, L103, L118 |
| 8 | Affiliate 按钮移动端全宽 | ✅ `w-full sm:w-auto` | `tool/[slug].astro` L64, L138 |

---

## 五、Affiliate 按钮规范

详情页有两个 Affiliate 按钮：
- **顶部按钮**：在简介下方，`bg-brand-500`，白色文字
- **底部按钮**：在适用人群下方，渐变背景 `from-brand-500 to-accent-500`

两者均包含：`w-full sm:w-auto`（移动端全宽）+ `active:bg-*`（按压态）+ 佣金提示文字。

**注意**：目前大部分工具的 `affiliateUrl` 字段为空或占位符，需由小欧逐一填入真实推广链接。

---

## 六、部署流程

```bash
# 1. 本地构建
cd /var/www/bigmodels.top
npm run build

# 2. 部署到 R2
bash deploy.sh

# 3. 验证
curl -sI https://bigmodels.top
```

- `.env` 文件包含 R2 凭据（已 `gitignore`）
- `deploy.sh` 读取 `.env` 并用 `aws s3 sync` 上传 `dist/`
- `--exclude "*.map"` 排除 source map 减小体积
- `--cache-control "max-age=86400"` 缓存一天
- 部署后自动列出 R2 文件结构验证

---

## 七、开发约定

| 约定 | 说明 |
|------|------|
| 组件 | `.astro` 文件放在 `src/components/` |
| 布局 | 全局布局统一在 `Layout.astro`，页面不使用局部 layout |
| 样式 | 使用 Tailwind 工具类，避免手写 CSS（global.css 仅放全局覆盖） |
| 图片 | 工具 Logo 统一使用 `ToolLogo.astro` 组件（emoji fallback） |
| 响应式断点 | `sm:640px` / `md:768px` / `lg:1024px` / `xl:1280px` |
| 移动端隐藏 | 使用 `lg:hidden`（BottomNav 等），不使用 `md:hidden` / `sm:hidden` |
| 桌面端隐藏 | 使用 `hidden md:flex`（Header 文字导航） |
| 工具数据 | 所有工具数据集中在 `src/data/tools.ts`，不可硬编码在页面中 |
| SEO | 每个工具详情页的 title/description 由 `src/data/seo-meta.ts` 控制 |

---

## 八、待办事项

| 优先级 | 事项 | 负责人 |
|--------|------|--------|
| 🔴 高 | 填入 42 个工具的真实 Affiliate 推广链接 | 小欧 |
| 🟡 中 | 补充部分工具的 features/pros/cons 内容细节 | 小欧 |
| 🟡 中 | 添加工具 Logo 图片（目前纯 emoji） | 小欧 |
| 🟢 低 | 页面过渡动画（`view transitions`） | 小爱/小欧 |
| 🟢 低 | Open Graph 社交分享图片 | 小欧 |

---

## 九、相关链接

- **站点**：https://bigmodels.top
- **GitHub**：https://github.com/dxjjj2008/bigmodels.top
- **R2 Bucket**：bucket01（Cloudflare）
- **域名接入**：bigmodels.top（Cloudflare Proxy 模式）
- **备份仓库**：https://github.com/dxjjj2008/hermes-backup
