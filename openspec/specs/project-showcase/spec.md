# project-showcase

## Purpose

开源项目展示模块，支持项目名称、图标、仓库链接、星标数和编程语言的展示。

## Requirements

### Requirement: 开源项目展示
系统 SHALL 在项目展示页面展示个人开源项目列表，每个项目包含名称、图标、描述和仓库链接。

#### Scenario: 访问开源项目页
- **WHEN** 用户访问开源项目页面
- **THEN** 页面以卡片或列表形式展示所有开源项目，包含项目名称、图标、描述和仓库链接

### Requirement: 项目数据管理
系统 SHALL 通过 Markdown 或 YAML 文件管理开源项目信息，支持项目名称、图标路径、描述、仓库链接、星标数和编程语言字段。

#### Scenario: 添加新开源项目
- **WHEN** 用户在 `content/projects/` 目录下创建新的项目文件并推送到仓库
- **THEN** 网站重新构建后项目展示页包含新增项目

#### Scenario: 修改项目信息
- **WHEN** 用户修改已有项目文件并推送到仓库
- **THEN** 网站重新构建后项目页面展示更新后的项目信息

### Requirement: 仓库链接
系统 SHALL 支持配置项目仓库链接，点击后跳转到外部平台（如 GitHub）。

#### Scenario: 点击仓库链接
- **WHEN** 用户点击项目的仓库链接
- **THEN** 浏览器在新标签页打开对应的仓库地址

### Requirement: 项目图标
系统 SHALL 支持为每个项目配置图标图片。

#### Scenario: 项目图标正确加载
- **WHEN** 项目文件配置了 icon 字段指向有效图片路径
- **THEN** 项目卡片上正确渲染项目图标
