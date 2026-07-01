# file-timestamps

## Purpose

构建时通过 Node.js `fs.statSync()` 读取内容文件的 birthtime 和 mtime，为所有 content collection 项目提供 `created` 和 `updated` 时间字段。所有类目列表按 mtime 倒序排列（最近修改的在前）。

## Requirements

### Requirement: 文件时间戳注入
系统 SHALL 在构建时通过 `fs.statSync()` 读取每个 content collection 条目对应文件的 `birthtime` 和 `mtime`，并注入为模板可用的 `created` 和 `updated` 字段。

#### Scenario: 获取文件创建和修改时间
- **WHEN** 构建过程读取 `content/<collection>/<id>.md` 文件
- **THEN** 该条目的 `created` 字段值为文件的 birthtime，`updated` 字段值为文件的 mtime

#### Scenario: 日期格式化展示
- **WHEN** 卡片渲染文件时间
- **THEN** 日期以 `YYYY-MM-DD HH:MM:SS` 格式展示，精确到秒

### Requirement: 按修改时间排序
系统 SHALL 在所有类目列表页和首页卡片中，按文件 `mtime`（最后修改时间）倒序排列条目。

#### Scenario: 列表页排序
- **WHEN** 用户访问 articles / products / projects / outsourcing 列表页
- **THEN** 条目按各自 .md 文件的 mtime 倒序展示（最近修改的在最前）

#### Scenario: 首页卡片排序
- **WHEN** 用户访问首页
- **THEN** 四个类目的卡片均取 mtime 最新的条目展示
