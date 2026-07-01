# personal-info (delta)

## MODIFIED Requirements

### Requirement: 展示个人信息
系统 SHALL 在首页展示用户的个人信息，包括昵称、头像、简要介绍、社交链接和附加信息条目（毕业学校、故乡、现居地）。

#### Scenario: 首页展示个人资料
- **WHEN** 用户访问网站首页
- **THEN** 页面顶部展示用户昵称、头像、简要介绍，以及毕业学校、故乡、现居地等条目式附加信息

### Requirement: 个人信息数据管理
系统 SHALL 通过 YAML 文件管理个人信息内容，支持编辑昵称、头像路径、简介、社交链接、毕业学校、故乡和现居地。

#### Scenario: 编辑个人信息
- **WHEN** 用户修改 `content/about/index.yaml` 文件并推送到仓库
- **THEN** 网站重新构建后展示更新后的个人信息，包含附加信息条目
