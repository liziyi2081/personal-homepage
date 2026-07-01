## Why

Hero 区当前使用环形进度组件展示 3 个指标，但环形组件适合展示"进度/比例"而非"纯计数"。需要将指标改为 4 项（产品、文章、开源项目、外包项目），用更合适的卡片式数字展示替换环形组件。同时需要将外包项目从通用 projects collection 中独立出来。

## What Changes

- 新增 `content/outsourcing/` content collection，独立管理外包项目
- 新建 `StatCard` 组件替代 `RingMetric`，以大号 mono 数字 + 标签 + 目录路径展示
- Hero 区指标从 3 项改为 4 项：产品数、文章数、开源项目数、外包项目数
- 移除 `RingMetric` 组件和相关 import
- 移除 `uptime` 百分比指标（不适合环形也不适合纯计数）
- 数据始终通过 `getCollection` 实时统计（构建时）

## Capabilities

### New Capabilities
- `outsourcing-content`: 外包项目内容管理，独立的 content collection（name, description, client, link, order）
- `stat-cards`: Hero 区统计卡片组件，大号数字 + 标签 + 目录路径，替换环形指标

### Modified Capabilities
- `project-showcase`: projects 现在专指开源项目，外包项目独立为 outsourcing collection
- `sci-fi-effects`: "数字滚动动画" requirement 仅涉及 CounterRoll（已不存在），需要更新为 StatCard 的入场计数动画

## Impact

- `src/content/config.ts` — 新增 outsourcingCollection schema
- `src/content/outsourcing/` — 新目录
- `src/components/StatCard.astro` — 新组件
- `src/components/RingMetric.astro` — 删除
- `src/pages/index.astro` — 替换指标区域
- `src/pages/projects.astro` — 仅展示开源项目
- `openspec/specs/project-showcase/spec.md` — 更新语义
