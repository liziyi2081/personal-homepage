# pagination

## Purpose

List pages support `?page=N` query parameter for dividing content into pages of 5 items each, with prev/next navigation links.

## ADDED Requirements

### Requirement: 列表分页
系统 SHALL 在列表页支持通过 `?page=N` 查询参数进行分页，每页展示 5 条记录。

#### Scenario: 首页加载
- **WHEN** 用户访问列表页未带 page 参数
- **THEN** 默认展示第 1 页内容，底部显示分页导航

#### Scenario: 翻页
- **WHEN** 用户点击 "Next" 或 "Prev" 链接
- **THEN** 页面跳转至对应 page 参数，展示对应页的 5 条记录

#### Scenario: 第一页
- **WHEN** 当前为第 1 页
- **THEN** "Prev" 链接不可用或隐藏

#### Scenario: 最后一页
- **WHEN** 当前为最后一页
- **THEN** "Next" 链接不可用或隐藏
