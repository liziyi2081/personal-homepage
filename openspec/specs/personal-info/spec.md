# personal-info

## Purpose

个人信息管理，支持编辑和展示昵称、头像、基本信息、简要介绍和社交链接。

## Requirements

### Requirement: 展示个人信息
系统 SHALL 在首页展示用户的个人信息，包括昵称、头像、简要介绍和社交链接。

#### Scenario: 首页展示个人资料
- **WHEN** 用户访问网站首页
- **THEN** 页面顶部展示用户昵称、头像、简要介绍和社交链接图标

### Requirement: 个人信息数据管理
系统 SHALL 通过 YAML 文件管理个人信息内容，支持编辑昵称、头像路径、简介和社交链接。

#### Scenario: 编辑个人信息
- **WHEN** 用户修改 `content/about/index.yaml` 文件并推送到仓库
- **THEN** 网站重新构建后展示更新后的个人信息

### Requirement: 头像和图片
系统 SHALL 支持通过本地路径引用头像图片。

#### Scenario: 头像正确加载
- **WHEN** 用户配置了 avatar 字段指向有效的图片路径
- **THEN** 页面上正确渲染用户头像
