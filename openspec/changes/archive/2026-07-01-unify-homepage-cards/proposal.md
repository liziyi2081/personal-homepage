## Why

首页下方区域当前使用两套视觉语言：articles 是完整卡片，products/projects 是紧凑 hex-icon 内联列表。需要统一为 2×2 卡片网格，每项使用一致的卡片结构，视觉对齐 articles 风格。

## What Changes

- 首页下方区域改为 2×2 网格布局：Articles / Products / Open Source / Contracts
- 每个象限：终端标题栏 + View all 链接 + `<MagneticCard>` 卡片列表
- 卡片内部结构统一：顶行信息 + 描述 + 底行元信息
- Products/Projects 现有的 hex-icon 内联样式替换为卡片样式
- Articles 区仍保持 2-3 条展示，其余区最多 2 条

## Capabilities

### Modified Capabilities
- `product-showcase`: 首页产品摘要区从内联列表改为卡片样式
- `project-showcase`: 首页项目摘要区从内联列表改为卡片样式
- `sci-fi-effects`: 终端标题栏样式扩展到新区域（Contracts、Open Source）

## Impact

- `src/pages/index.astro` — 重构下方布局：2×2 grid，替换 Products/Projects 区卡片结构
- 无新增组件，复用现有 MagneticCard + glass-card
