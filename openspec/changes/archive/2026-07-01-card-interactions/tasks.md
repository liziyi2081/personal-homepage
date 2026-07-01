## 1. 首页卡片改造

- [x] 1.1 将 4 区卡片从展示前 2 项改为仅展示第 1 项，`.slice(0, 2)` → `[0]`
- [x] 1.2 空类目显示 NULL 卡片（日期/标题/描述均为 NULL，不可点击）
- [x] 1.3 非空卡片点击跳转对应详情页（而非外部链接）

## 2. 列表页改造（Articles）

- [x] 2.1 列表卡片统一为日期行 + 标题 + 描述（移除 tags 行）
- [x] 2.2 每页 5 条，通过 `?page=N` 分页，底部 prev/next 导航

## 3. 列表页改造（Products）

- [x] 3.1 列表卡片统一为日期行 + 标题 + 描述
- [x] 3.2 每页 5 条，通过 `?page=N` 分页，底部 prev/next 导航

## 4. 列表页改造（Projects）

- [x] 4.1 列表卡片统一为日期行 + 标题 + 描述
- [x] 4.2 每页 5 条，通过 `?page=N` 分页，底部 prev/next 导航

## 5. 新建 Outsourcing 列表页

- [x] 5.1 创建 `src/pages/outsourcing/index.astro`，卡片结构与首页一致
- [x] 5.2 每页 5 条，通过 `?page=N` 分页，底部 prev/next 导航
- [x] 5.3 首页 Outsourcing 的 View all 链接改为 `/outsourcing`

## 6. 新建详情页

- [x] 6.1 创建 `src/pages/products/[slug].astro` 详情页
- [x] 6.2 创建 `src/pages/projects/[slug].astro` 详情页
- [x] 6.3 创建 `src/pages/outsourcing/[slug].astro` 详情页
- [x] 6.4 详情页渲染 `.md` body 内容，包含返回列表链接

## 7. 内容文件正文

- [x] 7.1 为 products/flux.md、projects/dotfiles.md、outsourcing/example.md 补充 body 内容

## 8. 验证

- [x] 8.1 `npm run build` 构建通过，验证所有路由和分页
