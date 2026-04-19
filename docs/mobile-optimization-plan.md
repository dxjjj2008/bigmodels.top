# BigModels.top 移动端优化方案 v1.0

> 📅 制定时间：2026-04-19 | 状态：**全部完成 ✅**

---

## 一、问题诊断

通过真机测试（iPhone + Android）发现的 8 个移动端问题：

| # | 问题 | 严重程度 | 位置 |
|---|------|---------|------|
| 1 | Hero 区域字号偏小，分类入口网格过密 | P0 | 首页 |
| 2 | 详情页标题字号偏大，标签换行堆叠 | P0 | 详情页 |
| 3 | 缺少固定底部导航（手机操作效率低） | P0 | 全局 |
| 4 | Affiliate 按钮宽度不够，触摸目标小 | P1 | 详情页 |
| 5 | 搜索框体验不足（无 enter 提示） | P1 | 首页 |
| 6 | 详情页优缺点文字偏小 | P1 | 详情页 |
| 7 | Hero 按钮、搜索框触控区域不足 | P1 | 首页 |
| 8 | iPhone 底部安全区域未适配 | P1 | 全局 |

---

## 二、解决方案

### 改动1：Hero 区域移动端适配
- **标题字号：** `text-2xl` → `sm:text-3xl` → `md:text-4xl` → `lg:text-5xl`
- **分类网格：** `grid-cols-3` → `sm:grid-cols-4` → `md:grid-cols-6` → `lg:grid-cols-8`
- **内边距：** `py-6 sm:py-10 md:py-16`
- **工具卡片网格：** `grid-cols-1` → `sm:grid-cols-2` → `md:grid-cols-2` → `lg:grid-cols-3` → `xl:grid-cols-4`

### 改动2：详情页标题 + 搜索优化
- **标题字号：** `text-2xl sm:text-3xl md:text-4xl`（自带响应式）
- **标签横向滚动：** `overflow-x-auto whitespace-nowrap`（防止换行堆叠）
- **功能列表字号：** `text-sm` 移动端 / `text-base` 平板+
- **优缺点字号：** 同上
- **搜索框：** `enterkeyhint="search"` 让手机键盘显示搜索按钮

### 改动3：底部 Tab 导航栏
- 固定底部，4 个 Tab（首页 / 分类 / 搜索 / 关于）
- 当前页高亮（服务端判断）
- 搜索 Tab 点击聚焦首页搜索框
- iPhone 安全区域 `env(safe-area-inset-bottom)`
- `lg:hidden` 桌面端隐藏

---

## 三、实施状态

- [x] 改动1：**Hero 响应式** ✅
  - 标题 `text-2xl sm:text-3xl md:text-4xl lg:text-5xl`
  - 内边距 `py-6 sm:py-10 md:py-16`
  - 分类网格 `grid-cols-3 sm:4 md:6 lg:8`
  - 工具卡片 `grid-cols-1 sm:2 lg:3 xl:4`
- [x] 改动2：**详情页优化** ✅
  - 标签横向滚动（`overflow-x-auto`）
  - 功能/优缺点文字响应式（`text-sm` / `text-base`）
  - 适用人群文字响应式
  - 搜索框 `enterKeyHint="search"`
  - 详情页标题自带响应式（已满足）
- [x] 改动3：**底部 Tab 导航栏** ✅
  - 4 个 Tab，SSR 当前页高亮
  - 搜索按钮聚焦首页搜索框
  - iPhone 刘海屏安全区域适配
  - `lg:hidden` 桌面端自动隐藏
- [x] P0-1：**Affiliate 按钮全宽** ✅
  - 顶部按钮 `w-full sm:w-auto`
  - 底部渐变按钮 `w-full sm:w-auto`
  - `active:bg-brand-700` 按压反馈
- [x] P0-1：**viewport-fit=cover** ✅
  - 详情页 `<Layout>` 已加入
  - iPhone 刘海屏区域不遮挡内容
- [x] P0-2：**搜索框 enterKeyHint** ✅
  - `enterkeyhint="search"` + `autocomplete="off"`
- [x] P1：**功能编号徽章** ✅
  - 移动端 `w-6 h-6 text-xs`
  - 平板+ `w-7 h-7 text-sm`

---

## 四、验证方法

```bash
# 构建
npm run build

# 本地预览
npm run preview

# Chrome DevTools → 切换设备模式 → iPhone 14 Pro / Pixel 7
```

真机检查项：
- [ ] 底部导航在首页/分类页/关于页高亮是否正确
- [ ] 搜索 Tab 点击后搜索框是否聚焦
- [ ] 详情页标签是否横向滚动（而非换行堆叠）
- [ ] iPhone 底部是否有安全区域留白
