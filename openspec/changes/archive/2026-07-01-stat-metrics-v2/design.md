## Context

当前 Hero 区使用 `RingMetric`（SVG 环形进度）展示 3 项指标：articles、projects、uptime%。RingMetric 本质是"进度/比例"组件，不适合纯计数场景。需替换为 4 项计数的卡片式组件，并新增 outsourcing collection 独立管理外包项目。

## Goals / Non-Goals

**Goals:**
- 用 4 张统计卡片替换 3 个环形指标：产品数、文章数、开源项目数、外包项目数
- 新建 `content/outsourcing/` collection，与 `projects` 物理隔离
- 数字带入场滚动动画
- 删除 RingMetric 和 uptime 逻辑

**Non-Goals:**
- 不新增外包项目展示页面（仅统计和 collection 定义）
- 不修改产品/文章 collection 结构
- 不改变整体页面布局

## Decisions

### 1. StatCard 组件设计

```
┌──────────────────────┐
│  PRODUCTS     [C01]  │  ← label + id prefix
│                      │
│       12             │  ← 大号 mono 数字（48px+）
│                      │
│  content/products/   │  ← 小号目录路径
└──────────────────────┘
```

- Props: `value: number`, `label: string`, `path: string`, `prefix: string`
- 数字用 `font-mono` + `text-5xl`/`md:text-6xl`
- 标签用 `font-mono text-xs tracking-wider uppercase`
- 目录路径用 `font-mono text-[10px] text-frost/30`
- 复用 IntersectionObserver 触发数字滚动动画（从 RingMetric 迁移逻辑）
- 边框复用 `glass-card` class

### 2. Outsourcing collection schema

在 `config.ts` 中新增 `outsourcingCollection`：
- type: 'content'
- schema: name, description, client, link (url), order (number)

初始创建 `content/outsourcing/` 目录，放一个示例 `.md` 文件。

### 3. 首页数据流

```js
const articles = await getCollection('articles');
const products = await getCollection('products');
const projects = await getCollection('projects');
const outsourcings = await getCollection('outsourcing');
// 直接传 .length 给 StatCard
```

删除 `SITE_BIRTHDAY` / `uptimeDays` / `uptimePct` 计算。

### 4. RingMetric 移除

- 删除 `src/components/RingMetric.astro`
- 从 `index.astro` 移除 import 和使用

## Risks / Trade-offs

- [outsourcing 暂无展示页]：当前仅新建 collection + schema + 示例文件 + 统计计数。若后续需要外包项目展示页，再单独开 change。
