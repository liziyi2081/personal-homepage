## Context

将现有暗色 "Digital Smithy" 主题切换为明亮赛博风格——「极光实验室」。保持终端美学和科幻动效，但配色转为清爽明亮的浅色基调。所有动效必须可访问（prefers-reduced-motion 时降级为静态）。

## Goals / Non-Goals

**Goals:**
- 全新明亮配色方案（浅色背景 + 深色文字 + 电光蓝/青强调色）
- 全局蓝图网格背景（Canvas 实现，替代暗色粒子）
- CRT 扫描线叠加层（极淡，适配浅色背景）
- 卡片 hover 边框跑马灯流光（CSS `@property` + `conic-gradient`，青色霓虹）
- Hero 数据面板 + 数字滚动动画
- 伪终端命令格式 section 标题
- 六边形图标（CSS `clip-path`）
- Footer 系统状态栏样式

**Non-Goals:**
- 不使用 WebGL / Three.js
- 不做 3D 透视 / 视差滚动
- 不引入新 npm 依赖
- 字体方案不变（Space Grotesk + Crimson Pro + JetBrains Mono）

## Decisions

### 1. 配色方案：「极光实验室」

暗色主题 → 亮色主题的全面切换。

| Token | 旧值 | 新值 | 用途 |
|-------|------|------|------|
| Iron Black → **Lab White** | `#1a1a17` | `#f8fafc` | 主背景 |
| Anvil Grey → **Card White** | `#262623` | `#ffffff` | 卡片/表面 |
| Parchment → **Ink** | `#ece8e0` | `#0f172a` | 主文字 |
| Stone → **Slate** | `#96928b` | `#64748b` | 次要文字 |
| Forge Orange → **Neon Cyan** | `#e6813a` | `#06b6d4` | 主强调色 |
| Patina → **Electric Blue** | `#4a9e8f` | `#3b82f6` | 次强调色 |

新增令牌：

| Token | 值 | 用途 |
|-------|-----|------|
| Grid Line | `#e2e8f0` | 分隔线/卡片边框 |
| Glow Cyan | `#22d3ee` | hover 发光/流光浅色 |

**设计原则更新**：
- 背景明亮干净，卡片白色 + 微弱阴影代替暗色边框
- 强调色从暖橙改为冷色电光蓝/青（更符合「科幻终端」感觉）
- 锐利边缘 (`border-radius: 0`) 保留
- 1px hairline rules 保留，颜色改为 Grid Line
- 卡片 hover 边框变 Neon Cyan 发光
- `$ whoami` 等终端元素用 Neon Cyan 着色
- 无圆角、无大阴影（仅卡片用极淡 shadow）

### 2. 蓝图网格背景 — Canvas 组件

替代暗色粒子方案。在浅色背景上绘制蓝图风格的细线网格 + 随机散布的淡色光点。

- Canvas 置于 `position: fixed; z-index: 0`
- 网格：~60px 间距，线条颜色 `#e2e8f0`，宽度 0.5px
- 光点：~30 个，颜色 Neon Cyan (`#06b6d4`)，opacity 0.04–0.08，随机分布
- 光点缓慢漂移 (~0.2px/帧)
- 移动端减少光点至 ~12 个
- `prefers-reduced-motion` 时网格静态，光点不移动

### 3. 扫描线叠加 — 纯 CSS

适配浅色背景版本：

```css
body::after {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 999;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(148, 163, 184, 0.04) 2px,
    rgba(148, 163, 184, 0.04) 4px
  );
}
```

使用 Slate 色 (`#94a3b8`) 替代黑色，opacity 0.04。

### 4. 边框流光 — CSS @property + conic-gradient

卡片 hover 时青色霓虹流光。CSS 自定义属性：

```css
@property --border-angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

.card-glow {
  position: relative;
  background: #ffffff;
}

.card-glow::before {
  content: '';
  position: absolute;
  inset: -1px;
  z-index: -1;
  background: conic-gradient(
    from var(--border-angle),
    transparent 70%,
    #06b6d4,
    #3b82f6,
    transparent
  );
  opacity: 0;
  transition: opacity 200ms;
}

.card-glow:hover::before {
  opacity: 1;
  animation: border-spin 2s linear infinite;
}

@keyframes border-spin {
  to { --border-angle: 360deg; }
}
```

**实现方式**：卡片外层包裹 `<div class="card-glow">`，内部保持现有卡片结构。卡片默认用 `border: 1px solid #e2e8f0` + 微弱 `box-shadow`，hover 时 `::before` 伪元素显示 conic-gradient 边框流光。

### 5. 数字滚动动画

与暗色方案相同实现，颜色改为 Neon Cyan 数字。

### 6. 伪终端 Section 标题

与暗色方案相同，前缀 `$` 或 `> ` 用 Neon Cyan。

### 7. 六边形图标

六边形背景色改为 Card White + Grid Line 边框，内部首字母用 Ink 色。

### 8. Footer 系统状态栏

```html
[SYS] ready · ⬡ running · built 2026-07-01 · Astro v5.18.2
```

- `[SYS]` 前缀用 Neon Cyan
- 其余文字用 Slate 色

### 9. 可访问性

所有动画在 `prefers-reduced-motion: reduce` 时禁用。

## Visual Sketch

```
┌────────────────────────────────────────────────────────────┐
│  ┊   ·   ┊     ┊     ·   ┊     ┊   ·     ┊     ┊   ·     │  ← 蓝图网格 + 淡青光点
│  ┊     ┊     ·   ┊   ┊     ·   ┊   ┊     ┊     ┊        │
│ ────────────────────────────────────────── ← 扫描线 (0.04) │
│                                                            │
│  [Header]  Li Ziyi    Articles  Products  Projects         │
│                                                            │
│  $ whoami                                                  │  ← Neon Cyan 终端前缀
│  Li Ziyi                                                   │  ← Ink 色
│  以代码为基、匠心为魂，打造软件作品             │
│                                                            │
│  ┌──────────────────────────────────────────────────┐      │
│  │ ⬡ articles: 3  ⬡ projects: 1  ⬡ uptime: 30d    │      │  ← 数据面板
│  └──────────────────────────────────────────────────┘      │
│                                                            │
│  $ ls articles/ --latest                                   │  ← 终端标题
│  ┌──────────────────┐ ┌──────────────────┐ ┌───────────┐  │
│  │ ◆ Your First Proj│ │ ◆ ...            │ │ ◆ ...     │  │  ← 流光卡片 (hover 青色)
│  │ astro web tutoria│ │                  │ │           │  │
│  └──────────────────┘ └──────────────────┘ └───────────┘  │
│                                                            │
│  ────────────────────────────────────────────────          │
│  [SYS] ready · ⬡ running · built 2026-07-01 · v5.18.2     │  ← Footer 状态栏
└────────────────────────────────────────────────────────────┘
```

## Implementation Order

1. **配色切换** — 更新 `tailwind.config.mjs` 颜色令牌 + `global.css` 背景/文字默认色
2. **蓝图网格背景** — 新建 `BlueprintGrid.astro`，在 BaseLayout 中引入
3. **扫描线叠加** — BaseLayout 全局 CSS
4. **边框流光** — CSS `@property` + `.card-glow` 工具类
5. **数字滚动** — 新建 `CounterRoll.astro`，首页 Hero 使用
6. **伪终端标题** — 替换首页 section 标题
7. **六边形图标** — 修改产品/项目卡片图标
8. **Footer 系统状态** — 重构 Footer 组件
9. **响应式 + 可访问性** — 移动端 + reduced-motion
