# sci-fi-effects

## Purpose

"极光实验室"科幻视觉效果系统，包含蓝图网格背景、CRT 扫描线、卡片边框流光动画、数字滚动动画、伪终端标题、六边形图标和系统状态栏 Footer。

## Requirements

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

### Requirement: 扫描线叠加
系统 SHALL 在全局添加微弱的 CRT 扫描线效果，增强终端感。

#### Scenario: 扫描线覆盖
- **WHEN** 用户在任意页面滚动
- **THEN** 页面显示极淡的水平扫描线覆盖层（opacity 0.03），不影响可读性

### Requirement: 边框流光动画
系统 SHALL 在卡片 hover 时展示边框跑马灯流光效果。

#### Scenario: 鼠标悬停卡片
- **WHEN** 用户鼠标悬停任意卡片组件
- **THEN** 卡片边框出现顺时针环绕的 Forge Orange 流光动画

### Requirement: 数字滚动动画
系统 SHALL 在 Hero 区统计卡片展示数字从 0 到目标值的入场计数动画。

#### Scenario: 页面加载时数字动画
- **WHEN** 用户访问首页且统计卡片区域进入视口
- **THEN** 4 张统计卡片中的数字以递增动画从 0 展示至最终值，动画时长约 800ms

### Requirement: 伪终端 Section 标题
系统 SHALL 使用终端命令格式作为页面 section 标题。

#### Scenario: Section 标题展示
- **WHEN** 首页加载
- **THEN** Articles 区标题展示为 `$ ls articles/ --latest`，Products 区为 `$ cat products.json | jq '.[]'`，Open Source 区为 `$ gh repo list --limit 3`，Contracts 区为 `$ ls outsourcing/ --reverse`

### Requirement: 六边形图标
系统 SHALL 在产品/项目卡片中使用六边形（⬡）包裹的首字母替代方形盒子。

#### Scenario: 产品列表展示六边形图标
- **WHEN** 用户查看产品页或首页产品摘要
- **THEN** 每个产品的图标以六边形 CSS shape 呈现，内含首字母

### Requirement: 系统状态栏 Footer
系统 SHALL 在 Footer 中展示系统状态栏样式，包含 uptime、构建时间和版本信息。

#### Scenario: Footer 展示状态信息
- **WHEN** 用户浏览任意页面底部
- **THEN** Footer 显示 `[SYS]` 前缀的状态栏，包含站点运行天数、最新构建日期、Astro 版本号
