# project-showcase (delta)

## MODIFIED Requirements

### Requirement: 开源项目展示
系统 SHALL 在项目展示页面和首页以统一卡片样式展示个人开源项目列表，每个项目卡片包含文件创建/修改时间、项目名称和描述。首页仅展示第一项，空类目显示 NULL 且不可点击。外包项目由独立的 outsourcing collection 管理。

#### Scenario: 访问开源项目页
- **WHEN** 用户访问开源项目页面
- **THEN** 页面以统一卡片列表形式展示所有开源项目（不包含外包项目），每页 5 条，支持翻页，卡片结构与首页一致

#### Scenario: 首页开源项目卡片
- **WHEN** 用户访问首页
- **THEN** 开源项目摘要区展示第一项项目的统一卡片；若无项目，卡片内容全部显示 NULL 且不可点击，点击提示无内容
