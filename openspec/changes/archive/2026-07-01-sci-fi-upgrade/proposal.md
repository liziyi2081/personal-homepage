## Why

当前页面虽然有了 "Digital Smithy" 暗色主题和 `$ whoami` 终端签名，但整体观感仍然是传统的静态内容站。需要注入数据可视化和赛博空间感，让页面看起来像一个活的信息终端而非打印出来的简历。

## What Changes

- Hero 区新增打字机效果、数据指标面板（文章数、项目数、运行天数）
- Section 标题改为伪终端命令格式（`$ ls articles/ --latest`）
- 全局新增极暗粒子/六边形网格背景
- 卡片 hover 边框跑马灯流光效果
- 新增扫描线叠加层
- 产品/项目图标从字母盒子改为六边形几何图标
- Footer 改为系统状态栏样式（uptime、构建时间、版本号）
- 新增数字滚动动画和链接 hover 科幻下划线效果
- 配色切换为明亮赛博主题：浅色背景 + 深色文字 + 电光蓝强调色，替代现有暗色方案

## Capabilities

### Modified Capabilities

- `personal-info`: Hero 区增加打字机动画、数据指标面板
- `article-management`: 文章卡片增加边框流光、六边形图标
- `product-showcase`: 产品卡片增加边框流光、六边形图标
- `project-showcase`: 项目卡片增加边框流光、六边形图标

### New Capabilities

- `sci-fi-effects`: 全局科幻视觉效果系统（粒子背景、扫描线、边框流光、数字动画）
