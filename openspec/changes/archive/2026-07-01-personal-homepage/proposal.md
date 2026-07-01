## Why

需要一个零成本、易维护的个人主页网站来展示个人信息、技术文章、产品和开源项目，同时具备基础的浏览数据统计能力。纯静态方案确保部署免费、性能优良、维护简单。

## What Changes

- 新增个人信息模块：支持编辑和展示昵称、基本信息、简要介绍
- 新增文章模块：支持 Markdown 格式文章编写与发布，支持文章中嵌入图片
- 新增产品展示模块：支持产品名称、图标、介绍、链接的展示
- 新增开源项目模块：支持项目名称、图标、仓库链接的展示
- 新增浏览统计看板：通过 Umami Cloud 收集和展示页面浏览数据
- 搭建 Astro 纯静态站点，GitHub Actions 自动构建部署至 GitHub Pages

## Capabilities

### New Capabilities

- `personal-info`: 个人信息管理，支持编辑和展示昵称、基本信息、简要介绍
- `article-management`: 文章管理，支持 Markdown 格式编写发布，支持文章内嵌图片
- `product-showcase`: 产品展示，支持产品名称、图标、介绍、外部链接的展示
- `project-showcase`: 开源项目展示，支持项目名称、图标、仓库链接的展示
- `analytics-dashboard`: 浏览统计看板，集成 Umami Cloud 收集和展示页面浏览数据

### Modified Capabilities

<!-- No existing capabilities to modify -->

## Impact

- 新建 Astro 项目，影响范围：整个项目目录
- 依赖：Astro、GitHub Pages、GitHub Actions、Umami Cloud
- 内容存储于 Git 仓库内（Markdown + YAML + 图片），无外部 CMS
