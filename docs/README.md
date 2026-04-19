# BigModels.top - 项目文档

> 📅 文档更新时间：2026-04-19（与代码 100% 同步）
> GitHub: https://github.com/dxjjj2008/bigmodels.top

---

## 一、项目概述

BigModels.top 是一个基于 **Astro + Tailwind CSS** 的静态站点，用于 AI 工具发现与导航。

**核心功能：**
- 按分类浏览 AI 工具（9 大分类，40 个工具）
- 工具详情页（含功能、优缺点、适用人群、评分）
- 实时前端搜索（无需后端）
- Affiliate 推广链接（变现途径）
- SEO 优化（sitemap + meta + robots.txt）
- 移动端优先体验（底部导航 + 响应式布局）

---

## 二、技术架构

| 层级 | 技术选型 | 说明 |
|------|---------|------|
| 框架 | Astro 4.x | 静态站点生成器 |
| UI | Tailwind CSS 3.x (`@tailwindcss/vite`) | 原子化 CSS |
| 搜索 | 前端 JS（无后端） | 基于工具数据属性过滤 |
| 字体 | @fontsource via jsDelivr CDN | Inter + Noto Sans SC，版本锁定，国内可访问 |
| 图标 | Google Favicon API + emoji | 自动 favicon 提取，40 个工具 emoji 回退 |
| SEO | astro-sitemap | 构建时自动生成 sitemap |
| 部署 | Cloudflare R2 + aws-cli | `deploy.sh` 读取 `.env` 推送 |
| 版本控制 | Git + GitHub | 分支：`main` |

**设计规范（颜色）：**

| Token | 色值 | 用途 |
|-------|------|------|
| `brand-500` | `#6366F1` | 主色（紫蓝） |
| `accent-500` | `#8B5CF6` | 强调色 |
| `brand-600` | `#4F46E5` | Hover 态 |

---

## 三、目录结构

```
bigmodels.top/
├── public/
│   ├── favicon.svg         # 站点 favicon（AI 脑图标）
│   └── robots.txt          # 搜索引擎规则（允许 Google/Bing/Baidu）
├── src/
│   ├── components/
│   │   ├── BottomNav.astro  # 移动端底部 Tab 导航（4 Tab）
│   │   └── ToolLogo.astro   # 工具 Logo（Google Favicon + emoji）
│   ├── data/
│   │   ├── tools.ts         # 工具数据源（40 工具，9 分类）
│   │   └── seo-meta.ts      # SEO 元数据（自动生成，40 工具）
│   ├── layouts/
│   │   └── Layout.astro     # 全局布局（Hedaer + Footer + 底部导航）
│   ├── pages/
│   │   ├── index.astro      # 首页（Hero + 分类 + 热门 + 全部工具）
│   │   ├── about.astro      # 关于页
│   │   ├── category/
│   │   │   └── [slug].astro  # 分类页（9 个分类，各一个页面）
│   │   └── tool/
│   │       └── [slug].astro  # 工具详情页（40 个页面）
│   └── styles/
│       └── global.css        # 全局样式（字体 + Tailwind + 自定义变量）
├── .env                     # R2 凭据（gitignore，不提交）
├── .env.example              # 凭据模板（可提交）
├── .gitignore
├── astro.config.mjs          # Astro 配置（site + sitemap + Tailwind）
├── deploy.sh                 # R2 部署脚本（读取 .env）
├── package.json
└── tsconfig.json
```

**总页面数：50 个（构建时生成）**
- 1 个首页
- 1 个关于页
- 9 个分类页
- 40 个工具详情页

---

## 四、页面路由

| 路径 | 文件 | 说明 |
|------|------|------|
| `/` | `pages/index.astro` | 首页 |
| `/about` | `pages/about.astro` | 关于页 |
| `/category/[id]` | `pages/category/[slug].astro` | 分类页 |
| `/tool/[id]` | `pages/tool/[slug].astro` | 工具详情页 |

**9 个分类 ID：**
- `llm` — 大语言模型
- `code` — 编程助手
- `image` — 图像生成
- `video` — 视频生成
- `audio` — 音频处理
- `search` — AI 搜索
- `docs` — 文档效率
- `other` — 其他工具

---

## 五、组件系统

### BottomNav.astro（移动端底部导航）

**作用：** 移动端固定底部 Tab 栏，桌面端自动隐藏。

**Tabs（4 个）：**

| Tab | 路径 | 图标 |
|-----|------|------|
| 首页 | `/` | 🏠 |
| 分类 | `/category/llm`（默认进 LLM） | 📂 |
| 搜索 | `#mobileSearchBtn` → 聚焦首页搜索框 | 🔍 |
| 关于 | `/about` | ℹ️ |

**实现细节：**
- 服务端根据 `currentPath` 判断激活 Tab（SSR）
- `lg:hidden` 桌面端自动隐藏
- iPhone 刘海屏：`padding-bottom: env(safe-area-inset-bottom)`
- 毛玻璃效果：`backdrop-blur-sm` + `bg-white/95`

### ToolLogo.astro（工具 Logo）

**作用：** 显示工具 logo，兜底 emoji。

**Logo 策略（优先级）：**
1. **Google Favicon API**：`https://www.google.com/s2/favicons?domain={domain}&sz={size*2}`
2. **emoji 回退**：`img onerror` 时显示 emoji（40 个工具均有人工映射）

**参数：**

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `name` | string | 必填 | 工具名称（用于 emoji 查找） |
| `url` | string | 必填 | 工具官网 URL（用于提取域名） |
| `size` | number | `36` | Logo 尺寸（px） |

**使用位置：**
- 首页工具卡片：`size=36`
- 分类页工具卡片：`size=36`
- 详情页顶部：`size=56`

---

## 六、数据层

### tools.ts（工具数据源）

**Tool 接口字段：**

| 字段 | 类型 | 说明 |
|------|------|------|
| `id` | string | URL slug（如 `chatgpt`） |
| `name` | string | 工具名称 |
| `description` | string | 一段描述（1-3 句） |
| `category` | string | 分类 ID |
| `url` | string | 官网 URL |
| `tags` | string[] | 标签（2-4 个） |
| `rating` | number | 评分（0-5，支持半星，如 4.5） |
| `pricing` | string | 定价：免费 / 免费+订阅 / 付费 / 订阅 |
| `features` | string[] | 核心功能（5 条） |
| `pros` | string[] | 优点（2-4 条） |
| `cons` | string[] | 缺点（2-4 条） |
| `targetAudience` | string | 适用人群（1-2 句） |
| `affiliateUrl` | string | 联盟推广链接（目前均为占位或官网 URL） |

**categories 数组：9 个分类，每个包含 `id`、`name`、`icon`（emoji）、`description`。**

**辅助函数：**
- `getToolById(id)` — 按 ID 查找工具
- `getCategoryById(id)` — 按 ID 查找分类
- `getToolsByCategory(category)` — 筛选某分类工具

**⚠️ 注意：** `affiliateUrl` 目前大部分是占位符（官网 URL），需要小滴授权后注册联盟并填入真实追踪链接。

### seo-meta.ts（SEO 元数据）

**内容：** 40 个工具各一条，包含：
- `title`：如 `"ChatGPT - AI 工具评测与使用指南 | BigModels.top"`
- `description`：评分 + 定价 + 功能摘要 + 适用人群（100-200 字）

**使用方式：** 详情页 `<Layout>` 组件接收 `title` 和 `description` prop。

---

## 七、样式系统

### 全局 CSS（`src/styles/global.css`）

**字体加载（jsDelivr CDN，版本锁定）：**
```
Inter: 400 / 500 / 600 / 700
Noto Sans SC: 400 / 500 / 600 / 700
```
> 选择 jsDelivr 而非 Google Fonts：因为 Google Fonts 在中国大陆不可访问。

**Tailwind 主题扩展：**
```css
@theme {
  --color-brand-50: #EEF2FF;
  --color-brand-100: #E0E7FF;
  --color-brand-400: #818CF8;
  --color-brand-500: #6366F1;  /* 主色 */
  --color-brand-600: #4F46E5;
  --color-brand-700: #4338CA;
  --color-accent-500: #8B5CF6; /* 强调色 */
}
```

### 移动端响应式断点

| 类前缀 | 触发宽度 | 主要用途 |
|--------|---------|---------|
| 无前缀 | 默认（< 640px） | 手机 |
| `sm:` | 640px+ | 大手机 / 小平板 |
| `md:` | 768px+ | 平板 |
| `lg:` | 1024px+ | 桌面 |
| `xl:` | 1280px+ | 大桌面 |

**关键响应式规则：**
- 工具卡片：`grid-cols-1` → `sm:2` → `lg:3` → `xl:4`
- 分类导航：`grid-cols-3` → `sm:4` → `md:6` → `lg:8`
- Hero 内边距：`py-6` → `sm:py-10` → `md:py-16`
- 标题字号：`text-2xl` → `sm:text-3xl` → `md:text-4xl` → `lg:text-5xl`
- 底部留白：`pb-20`（移动端含底部导航）→ `lg:pb-0`（桌面端）

---

## 八、SEO 配置

### sitemap
- 构建时由 `astro-sitemap` 自动生成
- `sitemap-index.xml` → `sitemap-0.xml`
- 50 个 URL（含首页、分类页、工具详情页）
- 自动注入到每个页面的 `<head>`

### robots.txt
- 允许 Googlebot / Bingbot / Baiduspider / YandexBot 全站爬取
- 禁止 AI 爬虫训练（GPTBot、ClaudeBot、Google-Extended 等 10+ 个）
- 引用 sitemap

### SEO Meta（页面级）
- 每个页面 `<Layout>` 接收 `title` + `description`
- Layout 输出 `og:title` / `og:description` / `og:type`
- 工具详情页使用 `seo-meta.ts` 中的专属内容

---

## 九、部署流程

### 本地开发
```bash
npm run dev      # 开发服务器
npm run build    # 构建静态文件到 dist/
npm run preview  # 预览构建结果
```

### 生产部署
```bash
npm run build    # 构建
./deploy.sh     # 读取 .env，推送 dist/ 到 R2
```

**deploy.sh 工作流程：**
1. 读取 `.env` 中的 `R2_BUCKET`、`AWS_ENDPOINT_URL`、`AWS_ACCESS_KEY_ID`、`AWS_SECRET_ACCESS_KEY`
2. `aws s3 sync` 推送 `dist/` 到 R2
3. 列出 R2 文件结构（最近 30 个）验证

**⚠️ 注意：** `.env` 文件含 R2 凭据，已加入 `.gitignore`，不提交到 GitHub。

---

## 十、移动端优化（已全部完成 ✅）

| 改动 | 文件 | 状态 |
|------|------|------|
| 改动1：Hero 响应式 | `pages/index.astro` | ✅ 断点优化（py/text/col） |
| 改动2：详情页标题响应式 | `pages/tool/[slug].astro` | ✅ `text-2xl sm:text-3xl md:text-4xl` |
| 改动2：标签横向滚动 | `pages/tool/[slug].astro` | ✅ `overflow-x-auto` |
| 改动2：文字排版响应式 | `pages/tool/[slug].astro` | ✅ `text-sm` 移动 / `text-base` 平板+ |
| 改动3：底部导航栏 | `components/BottomNav.astro` | ✅ 4 Tab，SSR 当前页高亮，iPhone 安全区域 |
| P0-1：Affiliate 按钮移动端全宽 | `pages/tool/[slug].astro` | ✅ `w-full sm:w-auto` |
| P0-1：viewport-fit=cover | `layouts/Layout.astro` | ✅ iPhone 刘海屏适配 |
| P0-2：搜索框 enterKeyHint | `pages/index.astro` | ✅ `enterkeyhint="search"` |

---

## 十一、Affiliate（联盟营销）现状

**变现机制：** 工具详情页顶部 + 底部各有一个 Affiliate 按钮，用户点击后跳转官网（带追踪参数），成交后获得佣金。

**支持联盟计划的工具（已确认）：**
- Notion（50% 首年佣金）
- Grammarly
- Canva
- Cursor
- Midjourney
- Runway
- Suno
- ElevenLabs
- Perplexity
- Gamma
- Monica
- Beautiful.ai
- Leonardo.ai
- Windsurf

**无联盟计划（已确认）：**
- ChatGPT、Claude、Gemini、DeepSeek、Kimi、通义千问、文心一言

**当前状态：** 大部分 `affiliateUrl` 为占位符（官网 URL），需要小滴授权注册联盟账号后填入真实追踪链接。

---

## 十二、Git 提交历史

```
4291c70 fix: mobile detail page typography improvements
a1e522d feat: add ToolLogo component with Google Favicon API
3d09c9e feat: mobile bottom tab navigation bar
3ec0b0f docs: add mobile optimization plan v1.0
79fe8aa security: migrate R2 credentials to .env file
58cf68a Initial commit: Astro AI tools directory site
```

---

## 十三、团队分工

| 角色 | 职责 |
|------|------|
| 🐾 小欧（我） | 设计规范、内容填充、方案制定、文档维护 |
| 🛠️ 小爱 | 代码实现、构建部署 |
| 🎯 小滴 | 战略决策、审批（联盟账号、域名等） |

---

## 十四、技术选型

**选择 Astro + Tailwind CSS 的原因：**
- 开源（MIT license）
- 默认输出纯静态 HTML，访问零服务器计算开销
- island 架构，JS 按需加载，页面极快
- Tailwind CSS 做样式定制，设计灵活

**备选方案对比：**

| 方案 | 优点 | 缺点 |
|------|------|------|
| Astro + Tailwind ✅ | 轻量、纯静态、Markdown 原生 | 需要一定前端知识 |
| Hugo | 极快、主题多 | 模板定制复杂，Go 模板上手难 |
| Jekyll | GitHub Pages 原生支持 | 构建慢，插件依赖多 |
| Next.js 静态导出 | 生态丰富 | 偏重，不需要 SSR 时浪费 |

**服务器与部署：**
- VPS（andy.vps.ca）运行 Astro 构建的静态站点
- Cloudflare R2 提供全球边缘节点加速
- 架构：用户 → Cloudflare → R2 → 边缘分发（VPS 零流量）

---

## 十五、协作规范

- **不确定的事，先问再执行**
- 涉及具体解决方案、技术路线、实现方式等，需在群内提出，由小滴确认后再执行
- 方案调整需在文档中标注（时间 + 人员 + 日期）
- 小欧与小爱遇到需要确认的问题，及时在群里说明
- 三方协同：小滴确认后 → 更新文档 → 再执行

---

## 十六、工具收录标准与模板

**收录标准：**
- 主流普通用户高频使用
- 有官方网站（可验证）
- 有 Affiliate 计划（优先）或可靠官方推荐链接
- 能写出有价值的简短评测

**内容模板（每个工具）：**
```
## 基本信息
官网：https://xxx.com
定价：免费 / 付费 / 免费+高级订阅
分类：AI 图像生成

## 工具简介
（3-5句话介绍这是什么、解决什么问题）

## 核心功能
- 功能点1
- 功能点2
- 功能点3

## 适用人群
（2-3句话说明谁适合用）

## 优缺点
**优点：** ...
**缺点：** ...

## Affiliate 链接
[立即使用 →](https://xxx.com?ref=bigmodels)
（此为推广链接，我们可能会获得佣金）
```

---

## 十七、KPI 指标

| 指标 | 目标 |
|------|------|
| 月度独立访客（UV） | 第一个月 500+ |
| Affiliate 转化 | 第一个月 5 单 |
| 收录工具数 | MVP 阶段 40 个（已完成） |
| Google 收录 | 上线后 2 周内完成 |
| LCP 性能 | < 2.5s（纯静态，天然优势） |

---

## 十八、Phase 2 SEO 建设方案（待实施）

### Step 1：SEO 基础设施（待小爱开发）
- [ ] canonical URL — 每页添加 `<link rel="canonical">`
- [ ] Twitter Card meta — `og:image` / `twitter:card`
- [ ] 统一 OG 图片 — 生成品牌图 `/public/og-image.png`

### Step 2：用户体验（待开发）
- [ ] R2 404 页面配置 — 指向 `/404.html`
- [ ] 全站 404 页面 — `src/pages/404.astro`（友好提示 + 搜索引导）
- [ ] 统计工具 — 优先接入 Cloudflare Web Analytics（免费，零配置）

### Step 3：SEO 验证（小欧执行）
- [ ] Google Search Console 提交 sitemap
- [ ] 验证各工具页 meta 是否正确
- [ ] 检查 Google 是否正常抓取页面

---

## 十九、参考站点

- https://theaisurf.com
- https://alltheaitools.com
- https://theres.an
- https://aitoolsforme.com

---

## 二十、相关飞书文档

- MVP 完整提案（原始版）：`J7bkddYqeoAiuqxmZqpceyXNnKe`
- MVP 完整提案（含 R2 迁移 + Phase 2 SEO）：`XE3UdyIMcovUSlxDZhDcddvunyr`
- 本地文档：`/var/www/bigmodels.top/docs/README.md`
