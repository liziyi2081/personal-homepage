## Why

当前背景过于深邃暗淡——`midnight #0b0d17` 接近纯黑，粒子网络、网格线和浮游几何体的 opacity 偏低，导致动态元素被底色吞噬，科技感打折扣。需要在保留暗色调的前提下提升背景可见度与层次感。

## What Changes

- 背景色从 `#0b0d17` 微调至 `#0d1117`，拉开与纯黑的差距
- 网格线 opacity 翻倍，间距加密，增加科技感
- 粒子数量增加，普通点和节点的 opacity 整体提升 2-3 倍
- 连线距离扩大，连线最大 opacity 从 0.12 提升至 0.25
- 浮游几何体 opacity 从 0.02-0.03 提升至 0.06-0.10
- 新增"数据脉冲"效果——沿随机连线穿梭的光点
- Aurora 光斑 opacity 微调适配提亮后的背景

## Capabilities

### New Capabilities
- `data-pulse`: 沿粒子网络连线穿梭的数据脉冲光点效果

### Modified Capabilities
- `sci-fi-effects`: 蓝图网格线 opacity 和间距调整；粒子网络连线增强
- `premium-effects`: 浮游几何体 opacity 提升；背景色调整

## Impact

- `tailwind.config.mjs` — `midnight` 色值变更
- `src/components/BlueprintGrid.astro` — 粒子网络参数调整 + 数据脉冲逻辑
- `src/components/AuroraGlow.astro` — opacity 微调
- `src/styles/global.css` — 扫描线 opacity 微调
