## 1. 项目初始化

- [x] 1.1 使用 Astro 脚手架创建项目，选择空模板
- [x] 1.2 安装依赖：@astrojs/tailwind、tailwindcss
- [x] 1.3 配置 astro.config.mjs，启用 GitHub Pages 部署模式（site + base）
- [x] 1.4 配置 Tailwind CSS

## 2. 内容结构与类型定义

- [x] 2.1 创建 `src/content/config.ts`，定义 about、articles、products、projects 四个 Content Collection 的 Zod schema
- [x] 2.2 创建 `src/content/about/index.yaml` 示例数据
- [x] 2.3 创建 `src/content/articles/` 目录及一篇示例文章
- [x] 2.4 创建 `src/content/products/` 目录及一个示例产品
- [x] 2.5 创建 `src/content/projects/` 目录及一个示例项目
- [x] 2.6 创建 `public/images/` 目录结构（avatar.png、products/、articles/）

## 3. 全局布局与导航

- [x] 3.1 创建全局布局组件 `src/layouts/BaseLayout.astro`（Header + Footer + SEO meta）
- [x] 3.2 在 BaseLayout 中集成 Umami 统计脚本
- [x] 3.3 创建 Header 组件（网站标题 + 导航链接）
- [x] 3.4 创建 Footer 组件（备案信息 + 社交链接 + 版权）

## 4. 首页

- [x] 4.1 创建首页 `src/pages/index.astro`
- [x] 4.2 首页顶部展示个人信息区域（昵称、头像、简介、社交链接）
- [x] 4.3 首页展示精选文章列表（最新 N 篇）
- [x] 4.4 首页展示产品和开源项目摘要区域

## 5. 个人信息模块（personal-info）

- [x] 5.1 实现 about Content Collection 数据读取
- [x] 5.2 个人信息区域样式实现（响应式）
- [x] 5.3 社交链接图标组件

## 6. 文章模块（article-management）

- [x] 6.1 创建文章列表页 `src/pages/articles/index.astro`（日期倒序）
- [x] 6.2 创建 ArticleCard 组件（标题、日期、描述、标签、封面图）
- [x] 6.3 创建文章详情页 `src/pages/articles/[slug].astro`（Markdown 渲染）
- [x] 6.4 文章详情页样式（排版、代码高亮、图片响应式）
- [x] 6.5 文章标签展示与筛选（可选：按标签过滤）

## 7. 产品模块（product-showcase）

- [x] 7.1 创建产品展示页 `src/pages/products.astro`
- [x] 7.2 创建 ProductCard 组件（图标、名称、描述、外部链接）
- [x] 7.3 产品列表按 order 排序

## 8. 开源项目模块（project-showcase）

- [x] 8.1 创建项目展示页 `src/pages/projects.astro`
- [x] 8.2 创建 ProjectCard 组件（图标、名称、描述、仓库链接、星标、语言）
- [x] 8.3 仓库链接新标签页打开

## 9. CI/CD 部署

- [x] 9.1 创建 `.github/workflows/deploy.yml`，配置 GitHub Actions 构建部署流程
- [x] 9.2 配置 GitHub Pages 源为 gh-pages 分支
- [ ] 9.3 验证部署流程：push → 构建 → 线上更新

## 10. 响应式与样式打磨

- [x] 10.1 确保所有页面在移动端（< 768px）正常展示
- [x] 10.2 统一配色方案与字体
- [x] 10.3 页面过渡与微交互优化
- [ ] 9.3 验证部署流程：push → 构建 → 线上更新
