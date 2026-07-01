# sci-fi-effects (delta)

## MODIFIED Requirements

### Requirement: 伪终端 Section 标题
系统 SHALL 使用终端命令格式作为页面 section 标题。

#### Scenario: Section 标题展示
- **WHEN** 首页加载
- **THEN** Articles 区标题展示为 `$ ls articles/ --latest`，Products 区为 `$ cat products.json | jq '.[]'`，Open Source 区为 `$ gh repo list --limit 3`，Contracts 区为 `$ ls outsourcing/ --reverse`
