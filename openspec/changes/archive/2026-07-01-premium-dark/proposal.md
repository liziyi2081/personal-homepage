## Why

当前「极光实验室」亮色主题过于素淡，`#06b6d4` 配 `#f8fafc` 缺乏视觉张力和高级感。需要切换为深邃暗色基调，利用霓虹色在深底上的高对比优势，叠加极光动态背景、毛玻璃质感、鼠标交互特效，打造让人印象深刻的个人品牌页面。

## What Changes

- 配色切换为「午夜霓虹」暗色方案：午夜蓝黑背景 + 高饱和电光青/茄紫霓虹强调色
- 极光渐变背景：4 个超大径向渐变光斑缓慢漂移（纯 CSS，20-30s 周期）
- 毛玻璃卡片系统：`backdrop-blur` + 半透明表面 + 顶边微光
- 鼠标光晕跟随：>400px 径向渐变跟随 cursor，让页面"活着"
- 卡片磁吸倾斜：hover 时向鼠标方向微倾 3-5deg
- Hero 名字渐变文字流动：`background-clip: text` + 青紫渐变动画
- 科技光环指标：SVG 环形进度替代纯文字数据面板
- 全局 SVG 噪点纹理（film grain）
- 悬浮几何装饰（模糊六边形/圆环，opacity <0.1）

## Capabilities

### Modified Capabilities

- `sci-fi-effects`: 粒子背景 → 极光渐变 + 噪点纹理 + 悬浮几何
- `personal-info`: Hero 名字渐变流动、光环数据面板
- `article-management`: 毛玻璃卡片 + 磁吸倾斜
- `product-showcase`: 毛玻璃卡片 + 磁吸倾斜
- `project-showcase`: 毛玻璃卡片 + 磁吸倾斜

### New Capabilities

- `cursor-glow`: 鼠标光晕跟随系统
- `magnetic-tilt`: 卡片磁吸倾斜交互
