## 1. 文件时间戳注入

- [x] 1.1 在 `index.astro` frontmatter 中实现 `getFileStat()` 辅助函数，通过 `fs.statSync()` 读取文件 birthtime 和 mtime
- [x] 1.2 为四类 collection（articles、products、projects、outsourcing）的首页卡片条目注入 `created` 和 `updated` 字段

## 2. 统一卡片模板

- [x] 2.1 将所有卡片模板统一为：日期行（created YYYY-MM-DD / updated YYYY-MM-DD）→ 标题 → 描述
- [x] 2.2 Articles 卡片移除 tags 行
- [x] 2.3 Products 卡片移除底部 link 行
- [x] 2.4 Open Source 卡片移除顶部 name+language 行和底部 stars+repo 行
- [x] 2.5 Outsourcing 卡片移除顶部 name+client 行和底部 link 行

## 3. 顺序对齐

- [x] 3.1 StatCards 重排为 Products → Articles → Open Source → Outsourcing，label "Contracts" → "Outsourcing"
- [x] 3.2 2×2 grid section 顺序调整为 Products → Articles（上行）、Open Source → Outsourcing（下行）

## 4. 验证

- [x] 4.1 `npm run build` 构建通过，检查 dist 输出卡片结构一致性
