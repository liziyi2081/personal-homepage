# premium-effects (delta)

## MODIFIED Requirements

### Requirement: 悬浮几何装饰
系统 SHALL 在 Canvas 背景层渲染 4-6 个大型模糊六边形/三角形/菱形/圆环装饰元素，缓慢旋转漂移，opacity 0.06-0.10。

#### Scenario: 几何装饰渲染
- **WHEN** 用户访问任意页面
- **THEN** Canvas 背景中可见 4-6 个 opacity 0.06-0.10 的模糊六边形、三角形、菱形或圆环缓慢移动旋转，桌面端不少于 4 个

### Requirement: 极光渐变背景
系统 SHALL 在全局背景渲染 4 个超大径向渐变光斑，以不同周期和路径缓慢漂移。

#### Scenario: 页面加载后极光渲染
- **WHEN** 用户访问任意页面
- **THEN** 背景显示青色、紫色、蓝色极光光斑缓慢漂浮移动，单个光斑尺寸约 500-600px，filter: blur(120px)，opacity 0.10-0.16，背景色为 #0d1117，整体对比度优于原 #0b0d17
