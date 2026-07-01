# sci-fi-effects (delta)

## MODIFIED Requirements

### Requirement: 蓝图网格背景
系统 SHALL 在全局背景渲染蓝图风格的网格线、粒子网络连线和淡色光点，模拟数据终端的视觉效果。

#### Scenario: 页面加载后网格渲染
- **WHEN** 用户访问任意页面
- **THEN** 页面背景显示 ~60px 间距的细线蓝图网格和缓慢漂移的粒子，网格线 opacity 不低于 0.05，粒子间在 180px 距离内绘制半透明连线，连线最大 opacity 0.25

#### Scenario: 粒子网络连线
- **WHEN** 页面渲染背景粒子网络
- **THEN** 粒子数量不少于 100（桌面端）/ 40（移动端），相邻粒子间距小于 180px（桌面端）/ 120px（移动端）时绘制渐变青紫连线，连线 opacity 随距离衰减

#### Scenario: 网格动画性能
- **WHEN** 页面渲染蓝图网格背景
- **THEN** 使用 Canvas 实现，帧率不低于 30fps，移动端自动减少粒子数量
