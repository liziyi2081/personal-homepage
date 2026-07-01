# project-showcase (delta)

## MODIFIED Requirements

### Requirement: 开源项目展示
系统 SHALL 在项目展示页面和首页以统一卡片样式展示个人开源项目列表，每个项目卡片包含文件创建/修改时间、项目名称和描述。外包项目由独立的 outsourcing collection 管理。

#### Scenario: 访问开源项目页
- **WHEN** 用户访问开源项目页面
- **THEN** 页面以卡片或列表形式展示所有开源项目（不包含外包项目），包含项目名称、图标、描述和仓库链接

#### Scenario: 首页开源项目卡片
- **WHEN** 用户访问首页
- **THEN** 开源项目摘要区以统一卡片形式展示，每张卡片顶部展示 created/updated 日期，中间展示项目名称，底部展示简要描述
