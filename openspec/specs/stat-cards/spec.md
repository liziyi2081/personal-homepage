# stat-cards

## Purpose

Hero 区统计卡片组件，以大号数字 + 标签 + 目录路径替代环形进度指标，适合展示纯计数数据。

## Requirements

### Requirement: 统计卡片展示
系统 SHALL 在 Hero 区使用卡片式统计组件展示 4 项指标：产品数量、文章数量、开源项目数量、外包项目数量。

#### Scenario: 统计卡片渲染
- **WHEN** 用户访问首页
- **THEN** Hero 区展示 4 张统计卡片，每张包含大号 mono 数字、小号标签文本和对应的内容目录路径（如 `products/`、`articles/`），数字从 0 滚动至最终值

#### Scenario: 构建时自动计数
- **WHEN** 用户在对应 content 目录下新增或删除条目后重新构建
- **THEN** 各统计卡片数字反映最新的集合大小

### Requirement: 数字滚动动画
系统 SHALL 在统计卡片进入视口时播放数字从 0 到目标值的滚动动画。

#### Scenario: 页面加载时数字动画
- **WHEN** 用户访问首页且统计卡片进入视口
- **THEN** 数字以约 800ms 的 ease-out 动画从 0 滚动至最终值

#### Scenario: 移动端和弱动画模式
- **WHEN** 用户在移动设备访问或系统 prefers-reduced-motion
- **THEN** 数字直接显示最终值，不播放滚动动画
