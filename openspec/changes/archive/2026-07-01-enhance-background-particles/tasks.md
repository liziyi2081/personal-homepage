## 1. 背景色与基础层

- [x] 1.1 tailwind.config.mjs 中 midnight 色值从 `#0b0d17` 改为 `#0d1117`
- [x] 1.2 global.css 中 scanlines opacity 从 0.04 微调至 0.05

## 2. 网格线增强

- [x] 2.1 BlueprintGrid.astro 中 GRID_SPACING 从 80 改为 60
- [x] 2.2 网格线 strokeStyle 从 `rgba(255,255,255,0.025)` 改为 `rgba(255,255,255,0.05)`

## 3. 粒子网络增强

- [x] 3.1 CONNECT_DIST 从 150 改为 180（桌面端），从 100 改为 120（移动端）
- [x] 3.2 连线 baseAlpha 从 0.12 改为 0.25，lineWidth 从 0.35/0.7 改为 0.5/1.0
- [x] 3.3 普通点 alpha 范围从 0.05-0.15 改为 0.12-0.30
- [x] 3.4 节点 alpha 从 0.5 改为 0.7，glow halo 半径从 6 改为 8
- [x] 3.5 DOT_COUNT 从 100/40 改为 120/50

## 4. 几何体增强

- [x] 4.1 几何体 alpha 范围从 0.02-0.03 改为 0.06-0.10
- [x] 4.2 几何体 lineWidth 从 1 改为 1.2

## 5. 数据脉冲

- [x] 5.1 实现 Pulse 数据结构：起点粒子索引、终点粒子索引、进度 t (0→1)、速度、颜色
- [x] 5.2 在 draw() 中实现脉冲沿连线穿梭绘制逻辑（径向渐变光点 + 尾迹）
- [x] 5.3 脉冲到达终点后重新选择随机连线和粒子
- [x] 5.4 移动端脉冲数限制为 2，桌面端为 5
- [x] 5.5 prefers-reduced-motion 下禁用脉冲渲染

## 6. Aurora 光斑微调

- [x] 6.1 AuroraGlow.astro 四个光斑 opacity 从 0.08-0.12 提升至 0.10-0.16

## 7. 验证

- [x] 7.1 npm run build 构建通过
- [x] 7.2 本地 preview 检查：背景点线可见度、网格清晰度、脉冲效果、移动端降级
