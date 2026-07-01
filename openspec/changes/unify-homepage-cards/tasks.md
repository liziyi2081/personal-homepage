## 1. 布局重构

- [x] 1.1 将首页下方区域合并为单一 2×2 grid 容器
- [x] 1.2 调整 Articles section 为 2 列象限格式（含终端标题栏 + View all 链接）

## 2. Products 象限

- [x] 2.1 替换 Products 内联 hex-icon 列表为卡片样式（name → title, description, → link）
- [x] 2.2 终端标题栏保留 `$ cat products.json | jq '.[]'`

## 3. Open Source 象限

- [x] 3.1 替换 Projects 内联 hex-icon 列表为卡片样式（name · language, description, ★ stars → repo）
- [x] 3.2 终端标题栏保留 `$ gh repo list --limit 3`

## 4. Contracts 象限

- [x] 4.1 新增 Contracts 象限，终端标题栏 `$ ls outsourcing/ --reverse`
- [x] 4.2 卡片内容：name · client, description, → link

## 5. 验证

- [x] 5.1 `npm run build` 构建通过
- [x] 5.2 本地预览 2×2 网格布局和卡片统一性
