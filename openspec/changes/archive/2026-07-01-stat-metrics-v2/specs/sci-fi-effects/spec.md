# sci-fi-effects (delta)

## MODIFIED Requirements

### Requirement: 数字滚动动画
系统 SHALL 在 Hero 区统计卡片展示数字从 0 到目标值的入场计数动画。

#### Scenario: 页面加载时数字动画
- **WHEN** 用户访问首页且统计卡片区域进入视口
- **THEN** 4 张统计卡片中的数字以递增动画从 0 展示至最终值，动画时长约 800ms
