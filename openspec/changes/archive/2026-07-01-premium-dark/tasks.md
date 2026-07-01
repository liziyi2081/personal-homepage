## 1. 配色全面切换

- [x] 1.1 更新 `tailwind.config.mjs` 颜色令牌（Midnight、Void、Plasma、Frost、Neon Cyan、Neon Purple、Neon Blue、Glass 系列）
- [x] 1.2 更新 `global.css` 背景/文字默认色为暗色主题 + film grain 噪点
- [x] 1.3 更新 `BaseLayout.astro` html class 为暗色背景

## 2. 极光渐变背景

- [x] 2.1 创建 `src/components/AuroraGlow.astro` 纯 CSS 极光光斑组件（4 blobs + @keyframes）
- [x] 2.2 在 BaseLayout.astro 中引入 AuroraGlow

## 3. 毛玻璃卡片系统

- [x] 3.1 在 global.css 中添加 `.glass-card` 工具类（backdrop-blur + semi-transparent + top highlight + hover 增强）
- [x] 3.2 更新首页 ArticleCard/ProductCard/ProjectCard 使用 `.glass-card`

## 4. 鼠标光晕跟随

- [x] 4.1 在 BaseLayout.astro 中添加 cursor glow div + mousemove 事件脚本
- [x] 4.2 移动端检测并禁用

## 5. 卡片磁吸倾斜

- [x] 5.1 创建 `src/components/MagneticCard.astro` 包装组件（perspective + rotateX/Y on mousemove）
- [x] 5.2 用 MagneticCard 包装首页/文章页/产品页/项目页的卡片

## 6. Hero 区升级

- [x] 6.1 Hero 名字改为渐变流动文字（`background-clip: text` + `@keyframes gradient-shift`）
- [x] 6.2 数据面板改为 SVG 光环进度指标（替换 CounterRoll）
- [x] 6.3 保留 `$ whoami █` 与光标闪烁

## 7. 悬浮几何装饰

- [x] 7.1 更新 `BlueprintGrid.astro` Canvas 绘制逻辑，加入 2-3 个大型模糊六边形/圆环装饰，缓慢旋转漂移

## 8. 全页面毛玻璃化

- [x] 8.1 更新 `articles/index.astro` 卡片为 `.glass-card`
- [x] 8.2 更新 `articles/[slug].astro` 文章页 prose 样式适配暗色背景
- [x] 8.3 更新 `products.astro` 卡片为 `.glass-card`
- [x] 8.4 更新 `projects.astro` 卡片为 `.glass-card`
- [x] 8.5 更新 Header / Footer 适配暗色背景

## 9. 响应式 + 可访问性

- [x] 9.1 确保极光/光晕在移动端降级或减少
- [x] 9.2 `prefers-reduced-motion` 时禁用所有动效
- [x] 9.3 毛玻璃在移动端性能可接受
- [x] 9.4 构建验证无报错
