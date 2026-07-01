## Context

当前首页下方是两个独立 section（Articles 全宽 3 列 + Products/Projects 2 列内联列表）。需要统一为 2×2 网格，每象限使用一致的卡片结构。

## Goals / Non-Goals

**Goals:**
- 4 象限 2×2 网格布局
- 每个象限：终端标题栏 + 2 张 MagneticCard
- 卡片内部结构统一（顶行 + 描述 + 底行）
- Contracts 区读取 `getCollection('outsourcing')` 数据

**Non-Goals:**
- 不新建组件文件
- 不改动子页面（articles/[slug]、products、projects）
- 不修改 content collection schema

## Decisions

### 1. 统一卡片结构

```
<MagneticCard class="glass-card">
  <a href="..." class="group block p-6">
    <!-- 顶行：元信息 -->
    <p class="font-mono text-xs text-frost/50 mb-3">
      {type-specific top row}
    </p>
    <!-- 标题 -->
    <h3 class="font-display text-lg font-bold text-plasma mb-2 group-hover:text-neon-cyan">
      {name/title}
    </h3>
    <!-- 描述 -->
    <p class="font-body text-sm text-frost leading-relaxed mb-4">{description}</p>
    <!-- 底行：元信息 -->
    <div class="flex items-center gap-2 text-xs">{type-specific bottom row}</div>
  </a>
</MagneticCard>
```

各象限差异化部分：

| 象限 | 顶行 | 底行 |
|------|------|------|
| Articles | date (格式化) | tags (border pills) |
| Products | name (顶行空，name 做标题) | link URL 箭头 |
| Open Source | name · language | ★ stars → repo |
| Contracts | name · client | → link |

### 2. 布局

```
<div class="grid grid-cols-1 md:grid-cols-2 gap-8 pb-24">
  <!-- Articles -->
  <section>...</section>
  <!-- Products -->
  <section>...</section>
  <!-- Open Source -->
  <section>...</section>
  <!-- Contracts -->
  <section>...</section>
</div>
```

Articles 区每个象限展示 2 张卡片，不足时留空。
