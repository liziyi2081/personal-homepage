## 1. Outsourcing Collection

- [x] 1.1 在 `src/content/config.ts` 中新增 `outsourcingCollection` schema（name, description, client, link, order）
- [x] 1.2 创建 `src/content/outsourcing/` 目录及示例 `.md` 文件

## 2. StatCard 组件

- [x] 2.1 创建 `src/components/StatCard.astro`：大号 mono 数字 + 标签 + 目录路径
- [x] 2.2 实现 IntersectionObserver 数字滚动动画（从 0 到目标值，~800ms ease-out）
- [x] 2.3 移动端和 prefers-reduced-motion 下直接显示最终值

## 3. Hero 区指标替换

- [x] 3.1 `index.astro` 中新增 `getCollection('outsourcing')` 查询
- [x] 3.2 替换 RingMetric 区域为 4 个 StatCard（products, articles, projects, outsourcing）
- [x] 3.3 移除 `SITE_BIRTHDAY` / `uptimeDays` / `uptimePct` 计算逻辑
- [x] 3.4 移除 `RingMetric` 组件的 import 和使用

## 4. 清理

- [x] 4.1 删除 `src/components/RingMetric.astro`
- [x] 4.2 如有 CounterRoll 残留引用，一并清理

## 5. 验证

- [x] 5.1 `npm run build` 构建通过
- [x] 5.2 本地 dev 预览：4 个统计卡片正确显示、数字滚动动画正常、新增外包 md 后计数自动更新
