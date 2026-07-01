## Why

精简页面结构，删除顶部导航栏，Footer 邮箱改为弹出式联系人提示，个人信息增加毕业学校/故乡/现居地条目。

## What Changes

- **删除 Header 导航栏**：从所有页面移除 `Header` 组件（含 import 和使用）
- **Footer Email 改为弹出提示**：点击 Email 弹出 toast 显示 `saibogongjiang.lzy@163.com`，3 秒后自动消失并自动复制到剪贴板
- **新增个人附加信息**：about YAML 新增 `school`/`hometown`/`location` 字段，首页 Hero 区以终端条目风格展示

## Capabilities

### Modified Capabilities
- `personal-info`: 新增个人附加信息字段（学校、故乡、现居地），首页条目式展示

## Impact

- `src/pages/*.astro` (5 个文件) — 移除 Header import 和 `<Header />`
- `src/components/Footer.astro` — Email 链接改为 button + toast
- `src/content/about/index.yaml` — 新增 school/hometown/location 字段
- `src/pages/index.astro` — 新增附加信息展示区
- `openspec/specs/personal-info/spec.md` — 更新需求
