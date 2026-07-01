# premium-effects

## Purpose

午夜霓虹主题的高级视觉效果系统，包含极光渐变背景、毛玻璃卡片、鼠标交互特效、渐变文字和光环指标等沉浸式视觉体验。

## Requirements

### Requirement: 极光渐变背景
系统 SHALL 在全局背景渲染 4 个超大径向渐变光斑，以不同周期和路径缓慢漂移。

#### Scenario: 页面加载后极光渲染
- **WHEN** 用户访问任意页面
- **THEN** 背景显示青色、紫色、蓝色极光光斑缓慢漂浮移动，单个光斑尺寸约 500-600px，filter: blur(120px)，opacity 不高于 0.15，不影响内容可读性

#### Scenario: 极光动画性能
- **WHEN** 极光光斑动画播放
- **THEN** 使用纯 CSS @keyframes 实现，不依赖 JavaScript，帧率稳定

### Requirement: Film grain 噪点纹理
系统 SHALL 在全局添加微弱的 SVG 噪点纹理叠加，增强电影质感。

#### Scenario: 噪点纹理覆盖
- **WHEN** 用户访问任意页面
- **THEN** 页面顶层显示 opacity 0.03 的 SVG feTurbulence 噪点纹理，不干扰可读性

### Requirement: 毛玻璃卡片
系统 SHALL 使用毛玻璃效果渲染所有内容卡片，包含半透明背景、backdrop-blur 和顶边微光。

#### Scenario: 卡片毛玻璃效果
- **WHEN** 用户浏览任意卡片
- **THEN** 卡片背景为 rgba(255,255,255,0.05) + backdrop-blur(12px)，顶边有 1px 水平微光渐变线

#### Scenario: 卡片 hover 增强
- **WHEN** 用户 hover 毛玻璃卡片
- **THEN** 卡片背景变亮 (0.05 → 0.10)，边框变 Neon Cyan 30% 透明度

### Requirement: 鼠标光晕跟随
系统 SHALL 在桌面端显示跟随鼠标移动的大尺寸径向渐变光晕。

#### Scenario: 鼠标移动时光晕跟随
- **WHEN** 用户在桌面端移动鼠标
- **THEN** 一个 500px 的青色径向渐变光晕（opacity 0.06）平滑跟随光标位置

#### Scenario: 移动端禁用
- **WHEN** 用户在移动设备访问
- **THEN** 鼠标光晕不渲染

### Requirement: 卡片磁吸倾斜
系统 SHALL 在卡片 hover 时根据鼠标位置施加轻微 3D 倾斜。

#### Scenario: 鼠标悬停时卡片倾斜
- **WHEN** 用户鼠标悬停在卡片上
- **THEN** 卡片向鼠标方向倾斜 3-6 度（perspective + rotateX/Y）

#### Scenario: 鼠标离开时恢复
- **WHEN** 用户鼠标离开卡片
- **THEN** 卡片平滑恢复为原始角度

### Requirement: Hero 渐变文字
系统 SHALL 在 Hero 区名字上使用青紫流动渐变色。

#### Scenario: 渐变文字展示
- **WHEN** 用户访问首页
- **THEN** 用户名字以 cyan→purple→blue→cyan 渐变渲染，6 秒循环流动

### Requirement: 光环进度指标
系统 SHALL 使用 SVG 环形进度展示首页数据指标替代纯文字数字。

#### Scenario: 光环指标渲染
- **WHEN** 用户访问首页 Hero 区
- **THEN** 数据面板展示 3 个 SVG 光环指标（articles、projects、uptime），每个光环根据数值渲染进度弧

### Requirement: 悬浮几何装饰
系统 SHALL 在 Canvas 背景层渲染 2-3 个大型模糊六边形/圆环装饰元素，缓慢旋转漂移。

#### Scenario: 几何装饰渲染
- **WHEN** 用户访问任意页面
- **THEN** Canvas 背景中可见 2-3 个 opacity <0.08 的模糊六边形或圆环缓慢移动旋转
