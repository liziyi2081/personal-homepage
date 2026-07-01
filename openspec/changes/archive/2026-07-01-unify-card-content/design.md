## Context

当前首页 2×2 卡片网格中，每种内容类型的卡片结构不一致。只有 articles 有日期字段，其他类型没有时间信息。通过读取文件系统 stat 信息获取所有文件的创建/修改时间，无需修改 content schema。

## Goals / Non-Goals

**Goals:**
- 所有卡片两层时间（created / updated），通过 `fs.statSync()` 读取
- 统一卡片内容为：日期行 → 标题 → 描述
- Stat cards 顺序与下方卡片顺序一致：Products → Articles → Open Source → Outsourcing
- StatCard label "Contracts" → "Outsourcing"

**Non-Goals:**
- 不修改 content collection schema（日期来自文件系统而非 frontmatter）
- 不改变卡片视觉效果（glass-card、MagneticCard 包裹等保持原样）
- 不改变 View all 链接指向

## Decisions

### Decision 1: fs.statSync 在 .astro frontmatter 中内联读取

每个 content entry 在构建时通过 `import.meta.url` 推导文件路径或使用 `fileURLToPath` + `fs.statSync`。实际做法：在 `index.astro` 的 frontmatter 中，利用 Astro 的 `getCollection` 返回的 entry 对象本身不直接暴露文件路径，但可以通过 `render()` 获取。更稳妥的方案是直接构造路径：

```js
import { statSync } from 'node:fs';
const contentDir = new URL('../content/', import.meta.url);
// 对每个 entry: statSync(new URL(`articles/${entry.id}.md`, contentDir))
```

`entry.id` 对应文件名（不含扩展名），路径规则：`content/<collection>/<id>.md`。

**替代方案：** 用 Vite 的 `import.meta.glob` 批量获取 → 过于复杂，且 Astro content collections 已经做了 glob + 解析。

### Decision 2: 卡片内容精简

所有卡片模板统一为：
```
<div class="glass-card p-6">
  <p class="font-mono text-xs text-frost/50 mb-3">
    created {date} / updated {date}
  </p>
  <h3 class="font-display text-lg font-bold text-plasma mb-2 group-hover:text-neon-cyan">
    {title}
  </h3>
  <p class="font-body text-sm text-frost leading-relaxed">
    {description}
  </p>
</div>
```

Articles 不再展示 tags；Projects 不再展示 language/stars/repo link；Products 不再展示 link；Outsourcing 不再展示 client/link。

### Decision 3: 顺序调整

Stat cards 和 2×2 grid 均按 Products → Articles → Open Source → Outsourcing 排列。

```js
// StatCards
<StatCard ... label="Products" />
<StatCard ... label="Articles" />
<StatCard ... label="Open Source" />
<StatCard ... label="Outsourcing" />

// 下方 grid 同样顺序
Products section | Articles section
Open Source section | Outsourcing section
```

## Risks / Trade-offs

- **macOS birthtime 可靠，Linux CI 可能退化为 ctime →** 个人主页在 macOS 开发部署，GitHub Pages macOS runner 也稳定，风险低
- **文件移动后 birthtime 重置 →** 极少发生，且个人内容文件几乎不会移动
