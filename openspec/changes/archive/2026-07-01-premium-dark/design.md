## Context

在现有「极光实验室」基础上升级为「午夜霓虹」暗色高级主题。保留终端美学和所有 sci-fi 动效框架，但全面替换配色方案和视觉层级。核心理念：**深底上的霓虹光**。

## Goals / Non-Goals

**Goals:**
- 深邃午夜蓝黑背景 + 高饱和霓虹色（电光青 + 茄紫）
- 4 个超大极光光斑缓慢漂移动画（纯 CSS radial-gradient）
- 毛玻璃卡片系统（backdrop-blur + semi-transparent surfaces）
- 鼠标光晕跟随 (>400px radial glow)
- 卡片磁吸倾斜 (perspective + rotateX/Y on hover)
- Hero 名字渐变文字流动 (background-clip: text, cyan→purple→cyan)
- SVG 光环进度指标
- 全局 film grain 噪点纹理
- 悬浮几何装饰元素
- 零新 npm 依赖

**Non-Goals:**
- 不使用 WebGL / Three.js
- 不做 3D 场景
- 不改变现有字体方案
- 不引入新 npm 依赖

## Decisions

### 1. 配色方案：「午夜霓虹」

| Token | 值 | 用途 |
|-------|-----|------|
| Midnight | `#0b0d17` | 主背景 |
| Void | `#131627` | 卡片/表面 |
| Plasma | `#ffffff` | 主文字 |
| Frost | `#94a3b8` | 次要文字 |
| Neon Cyan | `#00e5ff` | 主霓虹色（终端前缀、强调文字、光斑主色） |
| Neon Purple | `#a855f7` | 次霓虹色（渐变伙伴、光斑辅色） |
| Neon Blue | `#3b82f6` | 辅助霓虹（光斑第三色） |
| Glass Border | `rgba(255,255,255,0.08)` | 毛玻璃边框 |
| Glass Highlight | `rgba(255,255,255,0.12)` | 卡片顶边微光 |

**设计原则**：
- 所有卡片/面板使用毛玻璃 (`backdrop-blur` + `bg-white/5`)
- 边框保持 1px hairline，不圆角
- 强调色只用 Neon Cyan 和 Neon Purple，不用其他色
- 对比度远高于亮色版本

### 2. 极光渐变背景

在 BlueprintGrid 之上叠加极光层（纯 CSS，不替换 Canvas 网格）：

```css
.aurora-layer {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.aurora-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.15;
}

/* 4 blobs with different positions, colors, and animation durations */
.aurora-blob-1 { /* cyan, top-left, 25s cycle */ }
.aurora-blob-2 { /* purple, bottom-right, 30s cycle */ }
.aurora-blob-3 { /* blue, center, 20s cycle */ }
.aurora-blob-4 { /* cyan-purple mix, top-right, 35s cycle */ }
```

每个 blob 使用 `@keyframes` 来回移动 + 缩放，模拟极光流动。不依赖 JS。

### 3. 毛玻璃卡片系统

```
当前卡片:
┌──────────────────┐
│ solid white       │  bg-white, border grid-line
│ 100% opaque       │
└──────────────────┘

升级后:
┌──────────────────┐
│ ═══════════════  │  ← 顶边 glass-highlight (1px 白线, opacity 0.12)
│ semi-transparent  │  bg-white/5 + backdrop-blur-md
│ visible aurora    │  border-white/8
└──────────────────┘
  hover: bg-white/10, border 变 neon-cyan/30
```

CSS 实现：
```css
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.glass-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.12),
    transparent
  );
}
```

### 4. 鼠标光晕

在 BaseLayout 中加一个隐藏的 `<div id="cursor-glow">`，通过 `mousemove` 事件用 `transform: translate()` 移动：

```js
const glow = document.getElementById('cursor-glow');
document.addEventListener('mousemove', (e) => {
  glow.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`;
});
```

光晕本身是一个 500px 的 radial-gradient 圆，从 Neon Cyan center 渐变到 transparent，opacity 0.06。只在桌面端激活（移动端无 hover 无意义）。

### 5. 卡片磁吸倾斜

Hover 时计算鼠标在卡片内的相对位置，映射到 `rotateX/Y`：

```js
card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;  // -0.5 to 0.5
  const y = (e.clientY - rect.top) / rect.height - 0.5;
  card.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
});
card.addEventListener('mouseleave', () => {
  card.style.transform = 'perspective(800px) rotateY(0) rotateX(0)';
});
```

### 6. Hero 渐变文字

```css
.hero-name {
  background: linear-gradient(
    90deg,
    #00e5ff,
    #a855f7,
    #3b82f6,
    #00e5ff
  );
  background-size: 300% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient-shift 6s ease infinite;
}

@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
```

### 7. 光环指标

用 SVG circle + stroke-dasharray/stroke-dashoffset 制作环形进度：

```html
<svg viewBox="0 0 100 100" class="w-20 h-20">
  <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="4" />
  <circle cx="50" cy="50" r="42" fill="none"
    stroke="#00e5ff" stroke-width="4" stroke-linecap="round"
    stroke-dasharray="264" stroke-dashoffset="66"  <!-- 75% → offset = 264 * (1 - 0.75) -->
    transform="rotate(-90 50 50)"
    class="transition-all duration-1000" />
  <text x="50" y="50" text-anchor="middle" dominant-baseline="central"
    fill="white" font-family="Space Grotesk" font-size="18" font-weight="700">3</text>
</svg>
```

数据面板改为 3 个光环指标并排：articles、projects、uptime%。

### 8. Film grain 噪点

```css
body::before {
  content: '';
  position: fixed;
  inset: 0;
  z-index: 998;
  pointer-events: none;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,..."); /* SVG feTurbulence */
}
```

### 9. 悬浮几何装饰

在 BlueprintGrid 中额外绘制 2-3 个大型模糊六边形/圆环，缓慢旋转漂移，opacity <0.08，作为背景点缀。

## Visual Sketch

```
┌──────────────────────────────────────────────────────────────┐
│                        午夜霓虹                               │
│                                                              │
│   ◉ ~cyan,600px                          ◉ ~purple,500px    │
│     (极光光斑 1)                             (极光光斑 3)      │
│                                                              │
│              ◉ ~blue,550px                  · film grain     │
│                (极光光斑 2)                                    │
│  ─────────────────── 扫描线 (0.02) ─────────────────────     │
│                                                              │
│    ┌────────────────────────────────────────┐                │
│    │ ░░░░░░░░ top highlight ░░░░░░░░░░░░░ │                │
│    │  $ whoami █                           │ ← 青紫渐变文字  │
│    │  Li Ziyi                              │                │
│    │  Building tools at the edge...        │ ← Plasma 白     │
│    │                                       │                │
│    │   ╭─── 100% ──╮  ╭─── 100% ──╮  ╭── 90% ─╮            │
│    │  │    3      │ │    1      │ │   27d   │            │
│    │   ╰──────────╯   ╰──────────╯   ╰───────╯             │
│    │   articles       projects       uptime                │
│    └────────────────────────────────────────┘                │
│                      ↕ 鼠标光晕跟随                            │
│                                                              │
│    $ ls articles/ --latest                                   │
│    ┌──────┐ ┌──────┐ ┌──────┐     ← 毛玻璃, 磁吸倾斜          │
│    │ card │ │ card │ │ card │                                │
│    └──────┘ └──────┘ └──────┘                                │
│                                                              │
│    ──────────────────────────────────────────                │
│    [SYS] ready · ⬡ running · built 2026-07-01 · uptime 30d   │
└──────────────────────────────────────────────────────────────┘
```

## Implementation Order

1. **配色全面切换** — tailwind.config.mjs + global.css + BaseLayout
2. **极光渐变背景** — 新建 `AuroraGlow.astro`，BaseLayout 引入
3. **Film grain** — global.css body::before
4. **毛玻璃卡片** — `.glass-card` 替代 `.card-glow`
5. **鼠标光晕** — 新建 inline script 或组件
6. **磁吸倾斜** — 新建 `MagneticCard.astro` 包装组件
7. **Hero 渐变文字** — index.astro hero h1
8. **光环指标** — 重构 `CounterRoll.astro` 或新建 `RingMetric.astro`
9. **悬浮几何** — 更新 `BlueprintGrid.astro`
10. **全部页面毛玻璃化** — 更新 articles/products/projects 页面卡片
