# detail-pages

## Purpose

Products、Projects 和 Outsourcing 三个类目各生成独立的详情页，渲染对应 `.md` 文件的完整正文内容。

## ADDED Requirements

### Requirement: 类目详情页
系统 SHALL 为 Products、Projects 和 Outsourcing 类目生成 `[slug].astro` 动态路由详情页，通过 `getStaticPaths()` 自动生成所有条目的静态页面。

#### Scenario: 详情页渲染
- **WHEN** 用户访问 `/products/flux`、`/projects/dotfiles` 或 `/outsourcing/example`
- **THEN** 页面渲染该条目 .md 文件的完整正文内容，包含标题、日期、正文和返回链接

#### Scenario: 返回列表
- **WHEN** 用户在详情页点击返回链接
- **THEN** 跳转回对应的列表页
