# sci-fi-effects (delta)

## MODIFIED Requirements

### Requirement: 卡片统一模板
系统 SHALL 为所有内容类目使用统一的卡片模板，包含日期行（created/updated）、标题和描述。空类目卡片所有字段显示 NULL，不可点击。

#### Scenario: 空类目卡片
- **WHEN** 首页某类目无内容
- **THEN** 卡片日期显示 "created NULL / updated NULL"，标题显示 "NULL"，描述显示 "NULL"，卡片不可点击
