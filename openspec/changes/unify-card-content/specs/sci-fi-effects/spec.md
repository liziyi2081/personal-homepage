# sci-fi-effects (delta)

## MODIFIED Requirements

### Requirement: 伪终端 Section 标题
系统 SHALL 使用终端命令格式作为页面 section 标题，顺序与上方 Stat cards 保持一致（Products → Articles → Open Source → Outsourcing）。

#### Scenario: Section 标题展示
- **WHEN** 首页加载
- **THEN** Section 按 Products（`$ cat products.json | jq '.[]'`）、Articles（`$ ls articles/ --latest`）、Open Source（`$ gh repo list --limit 3`）、Outsourcing（`$ ls outsourcing/ --reverse`）顺序排列
