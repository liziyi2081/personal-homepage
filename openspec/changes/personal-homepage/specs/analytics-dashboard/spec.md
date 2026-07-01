## ADDED Requirements

### Requirement: 浏览统计数据收集
系统 SHALL 集成 Umami Cloud 统计脚本，自动收集页面浏览数据。

#### Scenario: 访客访问页面
- **WHEN** 访客打开网站任意页面
- **THEN** Umami 脚本自动记录页面浏览事件，包含页面路径、来源和浏览器信息

### Requirement: 统计脚本加载
系统 SHALL 在网站全局布局中加载 Umami 追踪脚本，不影响页面渲染性能。

#### Scenario: 脚本以异步方式加载
- **WHEN** 页面加载完成
- **THEN** Umami 脚本以异步方式加载，不阻塞页面渲染

### Requirement: 统计数据分析
系统 SHALL 向管理员提供可通过 Umami Cloud 仪表盘查看的浏览统计数据，包括页面浏览量、独立访客数、来源和浏览器分布。

#### Scenario: 查看统计数据
- **WHEN** 管理员登录 Umami Cloud 仪表盘
- **THEN** 可以看到网站的页面浏览量、独立访客数、热门页面和来源分布

### Requirement: 隐私合规
系统 SHALL 使用 Umami 的隐私友好统计方式，不收集个人身份信息，不使用 Cookie。

#### Scenario: 隐私友好统计
- **WHEN** 访客访问网站
- **THEN** 统计系统不收集个人信息，不使用追踪 Cookie，访客隐私得到保护
