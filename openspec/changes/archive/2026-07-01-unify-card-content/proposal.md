## Why

首页下方的 2×2 内容卡片目前四种类型（Articles、Products、Open Source、Contracts）结构不统一：有的带日期有的不带，有的带 tags/language/stars 有的不带，Contracts 文案未统一为 Outsourcing。Stat cards 顺序与下方卡片顺序也不一致。需要精简统一卡片内容，并通过文件系统日期使所有项目都有创建和修改时间。

## What Changes

- 通过 Node.js `fs.statSync()` 读取每个内容文件，在 .astro frontmatter 中注入 `created`（birthtime）和 `updated`（mtime）
- 统一 2×2 卡片结构为：顶部日期行（created / updated）→ 中间标题 → 底部简要说明
- 移除冗余元素：文章 tags、产品 link 行、项目 language/stars/repo 行、外包 client/link 行
- Stats cards 顺序与下方 2×2 卡片顺序对齐：Products → Articles → Open Source → Outsourcing
- StatCard 标签 "Contracts" → "Outsourcing"

## Capabilities

### New Capabilities
- `file-timestamps`: 构建时通过 `fs.statSync()` 读取内容文件的 birthtime/mtime，为所有 content collection 项目提供 `created` 和 `updated` 字段

### Modified Capabilities
- `product-showcase`: 首页产品卡片精简为日期+标题+描述结构
- `project-showcase`: 首页项目卡片精简为日期+标题+描述结构
- `sci-fi-effects`: Section 标题顺序调整与 stat card 顺序对齐（Products → Articles → Open Source → Outsourcing）

## Impact

- `src/pages/index.astro`: 2×2 网格卡片模板 + StatCard 顺序 + 文件时间注入逻辑
- `src/components/StatCard.astro`: 无改动
- 各 content collection schema (`config.ts`): 无 schema 改动（日期来自文件系统而非 frontmatter）
