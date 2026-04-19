# BigModels.top 移动端优化方案
方案人：小欧 | 日期：2026-04-19 | 版本：v1.0

---

## 一、移动端现状问题清单

### 🔴 高优先级（影响核心体验）

| 问题 | 位置 | 影响 |
|------|------|------|
| 标题字号过大 | Hero `text-5xl`，详情页 `text-4xl` | 手机屏幕一行显示不全 |
| Hero 区域过高 | `py-16`（上下各64px） | 首屏被大量空白占据 |
| 返回链接占空间 | 详情页顶部 `← 返回` | 浪费手机顶部宝贵空间 |
| 缺少底部导航 | 全站无底部 Tab 栏 | 切换分类需滚动到顶部或返回 |
| 搜索下拉被遮挡 | 搜索框 absolute 下拉 | 键盘弹出时可能出问题 |
| 分类标签换行 | 详情页标签 `flex-wrap` | 标签多时纵向堆叠不美观 |

### 🟡 中优先级（体验细节）

| 问题 | 位置 | 影响 |
|------|------|------|
| 工具卡片单列 | 首页 `grid-cols-1` | 屏幕宽裕时内容太少 |
| 标签字号偏小 | 详情页 `text-sm` | 手机上阅读吃力 |
| 优缺点字号 | `text-sm` 在手机上偏小 | 正文可读性一般 |
| 分类入口偏小 | 首页 2×2 网格 | 图标 `text-3xl` 偏小 |
| 页面切换感弱 | 无过渡动画 | 体验不够流畅 |
| 图片处理 | 目前无工具图片（纯文字） | 视觉吸引力不足 |

### 🟢 低优先级（加分项）

| 问题 | 说明 |
|------|------|
| 分类页侧边栏在手机上隐藏 | 目前已有移动端横向滚动方案（✅ 已实现）|
| 点击/hover 效果 | 目前只有 hover，建议加 active 态 |
| 滚动平滑 | 锚点跳转需要 `scroll-behavior: smooth` |

---

## 二、优化方案（按优先级）

### ✅ P0-1：Hero 区域移动端适配
- 标题字号：`text-5xl` → `text-3xl sm:text-4xl lg:text-5xl`
- 上下内边距：`py-16` → `py-8 sm:py-12 lg:py-16`
- 副标题：`text-xl` → `text-base sm:text-lg lg:text-xl`
- Badge：`text-sm` 保持不变，间距微调

### ✅ P0-2：工具详情页标题适配
- 标题字号：`text-4xl` → `text-2xl sm:text-3xl lg:text-4xl`
- 标签横向滚动：加 `overflow-x-auto whitespace-nowrap`
- 返回链接：保持，但加 `sticky top-0 bg-white z-10` 悬浮顶栏

### ✅ P0-3：底部导航栏（移动端核心）
新增固定底部 Tab 栏（仅移动端显示），包含：
- 首页
- 分类
- 搜索（点击聚焦搜索框）
- 关于

```html
<!-- 移动端底部导航：固定在屏幕底部 -->
<nav class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 lg:hidden safe-area-inset-bottom">
  <div class="flex justify-around items-center h-14">
    <a href="/" class="flex flex-col items-center justify-center gap-0.5 text-gray-500 active:text-brand-500">
      <span class="text-xl">🏠</span>
      <span class="text-xs">首页</span>
    </a>
    <a href="/category/llm" class="...">...</a>
    <!-- 搜索按钮：点击触发搜索框聚焦 -->
    <button id="mobileSearchBtn" class="...">🔍</button>
    <a href="/about" class="...">...</a>
  </div>
</nav>
```

### ✅ P0-4：搜索框移动端优化
- 键盘弹出时页面不乱：`scrollIntoView` 或调整滚动位置
- 搜索结果最多显示 5 条（减少占屏高度）
- 添加 `enterKeyHint="search"` 提示手机键盘显示搜索按钮

### ✅ P1-1：分类入口移动端优化
- 移动端从 2 列改为 4 列（`grid-cols-4 gap-2`）
- 图标从 `text-3xl` 改为 `text-2xl`

### ✅ P1-2：工具卡片移动端优化
- 移动端卡片可尝试 1.5 列（`grid-cols-1 sm:grid-cols-2`）
- 描述文字 `line-clamp-2` 保持，但加 `text-sm sm:text-base`

### ✅ P1-3：优缺点区块移动端
- 保持单列（`grid-cols-1`），字号从 `text-sm` 改为 `text-base`
- 增加行间距 `space-y-4`

### ✅ P1-4：页面过渡与交互优化
- 全站 `scroll-behavior: smooth`
- 按钮/卡片 `active:scale-95` 触摸反馈
- 链接 `transition-all duration-150` 快速过渡

### ✅ P2-1：Viewport 和安全区域
```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<!-- 确保刘海屏底部不被导航栏遮挡 -->
<style>
  .safe-area-inset-bottom { padding-bottom: env(safe-area-inset-bottom); }
</style>
```

### ✅ P2-2：Affiliate 按钮移动端
- 按钮宽度占满容器（`w-full`）方便点击
- 字号从 `text-lg` 改为 `text-base sm:text-lg`
- 顶部和底部按钮都加 `w-full`

---

## 三、Layout 全局改动

### Header 改造
```astro
<!-- 手机：紧凑 Header（固定顶部）-->
<header class="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-40">
  <div class="flex items-center justify-between px-4 py-3">
    <a href="/" class="text-xl font-bold text-gray-900">🧠 BigModels</a>
    <!-- 移动端隐藏文字导航 -->
    <nav class="hidden sm:flex items-center gap-4">
      <a href="/" class="text-gray-600 hover:text-brand-600">首页</a>
      <a href="/about" class="text-gray-600 hover:text-brand-600">关于</a>
    </nav>
  </div>
</header>
```

### 全局样式增加
```css
/* 移动端触摸优化 */
@media (hover: none) {
  .tool-card:active { transform: scale(0.98); }
  a:active { opacity: 0.8; }
}

/* 平滑滚动 */
html { scroll-behavior: smooth; }

/* 安全区域适配（刘海屏）*/
.safe-area-bottom { padding-bottom: env(safe-area-inset-bottom); }
```

---

## 四、实施状态

- [x] 改动3：**底部 Tab 导航栏** ✅ 已实现
  - 固定底部，4个 Tab：首页 / 分类 / 搜索 / 关于
  - 当前页 Tab 高亮
  - 搜索按钮聚焦首页搜索框
  - iPhone刘海屏安全区域适配（`env(safe-area-inset-bottom)`）
  - `lg:hidden` 桌面端自动隐藏

1. **全局 Layout** — Header 紧凑化 + Viewport 配置
2. **底部导航** — 移动端核心导航
3. **Hero 适配** — 字号 + 内边距
4. **详情页优化** — 标题字号 + 标签滚动
5. **搜索框** — 键盘适配
6. **分类入口** — 4列网格
7. **工具卡片** — 1.5列 + 字号
8. **细节打磨** — 过渡动画 + active 态

---

## 五、技术要点

- 所有 `hidden lg:block` 表示桌面端隐藏
- 所有 `lg:hidden` 表示移动端隐藏
- 底部导航加 `lg:hidden` 确保桌面端不显示
- 使用 `sticky` 让关键导航固定
- `touch-manipulation` CSS 优化触摸延迟
