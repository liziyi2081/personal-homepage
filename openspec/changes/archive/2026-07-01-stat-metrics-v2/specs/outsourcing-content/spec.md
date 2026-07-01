# outsourcing-content

## Purpose

外包项目内容管理，通过独立的 content collection 管理外包项目的名称、描述、客户、链接和排序。

## ADDED Requirements

### Requirement: 外包项目数据管理
系统 SHALL 通过独立的 content collection（`content/outsourcing/`）管理外包项目信息，支持名称、描述、客户、链接和排序字段。

#### Scenario: 添加新外包项目
- **WHEN** 用户在 `content/outsourcing/` 目录下创建新的 `.md` 文件并推送到仓库
- **THEN** 网站重新构建后外包项目数据纳入统计

#### Scenario: 修改外包项目信息
- **WHEN** 用户修改已有外包项目文件并推送到仓库
- **THEN** 网站重新构建后外包项目页面展示更新后的信息

### Requirement: 外包项目数量统计
系统 SHALL 在构建时通过 `getCollection('outsourcing')` 自动统计外包项目总数。

#### Scenario: 外包项目计数
- **WHEN** `content/outsourcing/` 目录下存在 3 个 `.md` 文件
- **THEN** 首页统计指标中外包项目数显示为 3
