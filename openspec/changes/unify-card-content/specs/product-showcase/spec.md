# product-showcase (delta)

## MODIFIED Requirements

### Requirement: 产品信息展示
系统 SHALL 在产品展示页面和首页以统一卡片样式展示个人产品列表，每个产品卡片包含文件创建/修改时间、产品名称和描述。

#### Scenario: 访问产品展示页
- **WHEN** 用户访问产品展示页面
- **THEN** 页面以卡片或列表形式展示所有产品，包含产品名称、图标、描述和链接

#### Scenario: 首页产品卡片
- **WHEN** 用户访问首页
- **THEN** 产品摘要区以统一卡片形式展示，每张卡片顶部展示 created/updated 日期，中间展示产品名称，底部展示简要描述
