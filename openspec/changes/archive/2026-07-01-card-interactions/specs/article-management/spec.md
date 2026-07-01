# article-management (delta)

## MODIFIED Requirements

### Requirement: 文章列表展示
系统 SHALL 在文章列表页以统一卡片样式展示文章，每页 5 条，支持翻页，卡片结构与首页一致（日期行、标题、描述）。

#### Scenario: 文章列表分页
- **WHEN** 用户访问文章列表页
- **THEN** 页面以统一卡片网格展示文章，每页 5 条，底部提供分页导航
