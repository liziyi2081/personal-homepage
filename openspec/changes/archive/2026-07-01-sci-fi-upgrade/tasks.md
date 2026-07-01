## 1. 配色切换

- [x] 1.1 更新 `tailwind.config.mjs` 颜色令牌（Lab White、Card White、Ink、Slate、Neon Cyan、Electric Blue、Grid Line、Glow Cyan）
- [x] 1.2 更新 `global.css` 默认背景/文字色为浅色主题
- [x] 1.3 更新 `BaseLayout.astro` 的 `<html>` class 和 Umami 脚本

## 2. 蓝图网格背景

- [x] 2.1 创建 `src/components/BlueprintGrid.astro` Canvas 组件（网格线 + 光点漂移 + RAF）
- [x] 2.2 实现移动端自适应光点数（desktop ~30, mobile ~12）
- [x] 2.3 实现 `prefers-reduced-motion` 检测，自动降级为静态网格
- [x] 2.4 在 BaseLayout.astro 中引入 BlueprintGrid

## 3. 扫描线叠加 + 全局科幻样式

- [x] 3.1 在 global.css 中添加浅色适配扫描线（`body::after`，Slate 色 0.04 opacity）
- [x] 3.2 注册 CSS `@property --border-angle`
- [x] 3.3 添加 `.card-glow` 工具类（conic-gradient 青色霓虹边框流光，hover 触发）

## 4. Hero 区升级

- [x] 4.1 创建 `src/components/CounterRoll.astro` 数字滚动动画组件（Intersection Observer + RAF）
- [x] 4.2 首页 Hero 区 `$ whoami` 下方增加数据面板（文章数、项目数、运行天数）
- [x] 4.3 `$ whoami` 加闪烁块状光标

## 5. 伪终端 Section 标题

- [x] 5.1 首页 Featured Articles 标题改为 `$ ls articles/ --latest`
- [x] 5.2 首页 Products 标题改为 `$ cat products.json | jq '.[]'`
- [x] 5.3 首页 Projects 标题改为 `$ gh repo list --limit 5`

## 6. 六边形图标 + 卡片重构

- [x] 6.1 在 global.css 中添加 `.hex-icon` CSS 类（clip-path 六边形）
- [x] 6.2 更新首页产品/项目卡片的图标为六边形
- [x] 6.3 更新产品页和项目页的图标为六边形
- [x] 6.4 卡片外层包裹 `.card-glow` 边框流光效果（首页 + 分页）

## 7. Footer 系统状态栏

- [x] 7.1 Footer 重构为 `[SYS] ready · ⬡ running · built YYYY-MM-DD · Astro vX.Y.Z` 格式
- [x] 7.2 站点运行天数动态计算

## 8. 响应式 + 可访问性

- [x] 8.1 确保蓝图网格在移动端正常（减少光点数）
- [x] 8.2 `prefers-reduced-motion` 时降级所有动效为静态
- [x] 8.3 扫描线不影响内容可读性
- [x] 8.4 全页面移动端测试（< 768px）
