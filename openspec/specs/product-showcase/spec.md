# product-showcase

## Purpose

产品展示模块，支持产品名称、图标、介绍、外部链接的展示和排序。

## Requirements

### Requirement: 产品信息展示
系统 SHALL 在产品展示页面和首页以统一卡片样式展示个人产品列表，每个产品卡片包含文件创建/修改时间、产品名称和描述。首页仅展示第一项，空类目显示 NULL 且不可点击。

#### Scenario: 访问产品展示页
- **WHEN** 用户访问产品展示页面
- **THEN** 页面以统一卡片列表形式展示所有产品，每页 5 条，支持翻页，卡片结构与首页一致（日期行、标题、描述）

#### Scenario: 首页产品卡片
- **WHEN** 用户访问首页
- **THEN** 产品摘要区展示第一项产品的统一卡片；若无产品，卡片内容全部显示 NULL 且不可点击

#### Scenario: 首页产品卡片点击
- **WHEN** 用户点击首页产品卡片
- **THEN** 跳转至该产品的详情页 `/products/[slug]`

### Requirement: 产品数据管理
系统 SHALL 通过 Markdown 或 YAML 文件管理产品信息，支持产品名称、图标路径、描述、链接和排序字段。

#### Scenario: 添加新产品
- **WHEN** 用户在 `content/products/` 目录下创建新的产品文件并推送到仓库
- **THEN** 网站重新构建后产品展示页包含新增产品

#### Scenario: 修改产品信息
- **WHEN** 用户修改已有产品文件并推送到仓库
- **THEN** 网站重新构建后产品页面展示更新后的产品信息

### Requirement: 产品排序
系统 SHALL 支持通过 order 字段控制产品展示顺序。

#### Scenario: 按序展示产品
- **WHEN** 产品文件配置了不同的 order 值
- **THEN** 产品展示页按 order 升序排列产品

### Requirement: 产品图标
系统 SHALL 支持为每个产品配置图标图片。

#### Scenario: 产品图标正确加载
- **WHEN** 产品文件配置了 icon 字段指向有效图片路径
- **THEN** 产品卡片上正确渲染产品图标
