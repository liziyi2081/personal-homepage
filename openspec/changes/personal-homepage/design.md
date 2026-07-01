## Context

构建一个零成本的个人主页网站，采用纯静态架构。内容通过手动 Git 编辑（VS Code），推送后由 GitHub Actions 自动构建部署至 GitHub Pages。无需后端服务器和数据库。

**技术约束：**
- 纯静态站点，无服务端运行时
- 零成本部署和运维
- 手动 Git + VS Code 编辑内容，无在线 CMS
- 图片直接存储在仓库中

## Goals / Non-Goals

**Goals:**
- 使用 Astro 框架构建，Content Collections 管理内容
- 五个模块：个人信息、文章、产品、开源项目、浏览统计
- GitHub Actions 自动构建部署至 GitHub Pages
- Umami Cloud 集成实现浏览统计
- 响应式设计，移动端友好

**Non-Goals:**
- 不实现在线编辑后台（如 Decap CMS）
- 不支持用户评论、登录注册等交互功能
- 不支持全文搜索（可后续添加）
- 不实现图片上传接口
- 不做国际化

## Decisions

### 1. Astro + Content Collections 管理内容

**选择**：使用 Astro 的 Content Collections 作为内容管理方案。

**理由**：
- Markdown/MDX 一等公民，`src/content/` 下直接编写内容
- Zod schema 定义内容结构，类型安全校验
- 构建时自动验证 frontmatter，格式错误会在构建阶段暴露
- 零运行时 JS 输出，页面体积小

**替代方案**：Next.js + next-mdx-remote 功能更强但更重，Astro 更契合内容站定位。

### 2. 目录结构设计

```
src/
├── content/
│   ├── about/           # ① 个人信息 (单条记录)
│   │   └── index.yaml
│   ├── articles/        # ② 文章 (集合，每篇一个 .md)
│   │   ├── hello-world.md
│   │   └── ...
│   ├── products/        # ③ 产品 (集合，每个产品一个 .md 或 .yaml)
│   │   ├── product-a.md
│   │   └── ...
│   └── projects/        # ④ 开源项目 (集合)
│       ├── project-a.md
│       └── ...
├── pages/               # Astro 路由页面
│   ├── index.astro      # 首页（聚合展示）
│   ├── articles/
│   │   ├── index.astro  # 文章列表
│   │   └── [slug].astro # 文章详情
│   ├── products.astro
│   └── projects.astro
└── components/          # 可复用组件
    ├── Header.astro
    ├── Footer.astro
    ├── ArticleCard.astro
    ├── ProductCard.astro
    └── ProjectCard.astro
public/
└── images/              # 静态图片资源
    ├── avatar.png
    ├── products/
    └── articles/
```

### 3. 内容数据结构

**① 个人信息 (about)**
```yaml
# content/about/index.yaml
nickname: string
avatar: string           # 图片路径
bio: string              # 简要介绍
social:
  github: string
  twitter: string
  email: string
```

**② 文章 (articles)**
```yaml
# 每篇文章 frontmatter
title: string
date: Date
description: string
tags: string[]
image: string            # 可选，文章封面图
```

**③ 产品 (products)**
```yaml
name: string
icon: string             # 图片路径
description: string
link: string
order: number            # 排序
```

**④ 开源项目 (projects)**
```yaml
name: string
icon: string             # 图片路径
description: string
repo: string             # 仓库链接
stars: number            # 可选，手动更新
language: string
```

### 4. 部署方案

**选择**：GitHub Actions + GitHub Pages。

```
编辑内容 → git push → GitHub Actions 触发 →
  npm install → npm run build → 部署到 gh-pages 分支
```

- 构建命令：`npm run build` (astro build)
- 输出目录：`dist/`
- 部署目标：GitHub Pages (gh-pages 分支)
- 自定义域名：通过 CNAME 文件或仓库 Settings 配置

### 5. Umami Cloud 统计集成

**选择**：Umami Cloud 免费 tier（10K 事件/月）。

实现方式：在 Astro 全局布局中通过 `<script>` 标签加载 Umami 追踪脚本，无需额外 SDK。

### 6. 视觉设计系统：「锤炼工坊」The Digital Smithy

**定位**：精密但有人情味的暗色主题。Iron Black 作为主背景，Forge Orange 作为稀有强调色。几何无衬线 + 人文衬线的字体搭配体现「赛博工匠」的内在张力。

**配色令牌**：

| Token | 值 | 用途 |
|-------|-----|------|
| Iron Black | `#1a1a17` | 主背景 |
| Anvil Grey | `#262623` | 卡片/表面 |
| Parchment | `#ece8e0` | 主文字 |
| Stone | `#96928b` | 次要文字 |
| Forge Orange | `#e6813a` | 主强调色（全站 ≤3 处） |
| Patina | `#4a9e8f` | 次强调色（极少） |

**排版**：

| 角色 | 字体 | 用途 |
|------|------|------|
| 标题/展示 | Space Grotesk | Hero、文章标题、卡片标题 |
| 正文 | Crimson Pro | 文章正文、简介段落 |
| 代码/元数据 | JetBrains Mono | 标签、日期、导航、代码块 |

**布局原则**：
- `border-radius: 0` —— 锐利边缘，精密工具感
- `1px hairline rules`（Stone，opacity 0.2）分隔区域，不用大色块
- 宽裕留白，不挤迫
- 卡片微弱边框 + hover 变 Forge Orange
- 所有装饰仅限边框、文字、间距，无阴影系统

**动效系统**：
- Hero 区 staggered fade-in（页面加载，600ms）
- 卡片 hover 边框过渡：Stone → Forge Orange，200ms
- 链接 hover 下划线画入（background-size 0→100%）
- Astro View Transitions：极简 fade（150ms）
- 不使用飘浮、视差、随机动画

**签名元素**：Hero 区 `$ whoami` — 终端命令作为图形设计元素，大号 monospace + Forge Orange，全站唯一使用主强调色的位置。

**样式实现**：使用 Tailwind CSS + `@astrojs/tailwind`，配合 `tailwind.config.mjs` 定义设计令牌。

## Risks / Trade-offs

- **仓库体积增长**：图片存储在仓库中，长期可能增大。缓解：构建时使用 sharp 压缩图片，或后续迁移至外部图床。
- **Umami 免费额度**：月 10K 事件上限。个人站点初期足够，超限后可自部署 Umami 或切换方案。
- **无在线编辑**：所有内容编辑需通过 Git。这是主动选择，适合技术用户。
- **GitHub Pages 国内访问**：速度一般但可接受。如需加速可后续加 CDN。
