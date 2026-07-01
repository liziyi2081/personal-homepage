## ADDED Requirements

### Requirement: 文章编写与发布
系统 SHALL 支持通过 Markdown 文件编写和发布文章，每篇文章包含标题、日期、描述、标签和正文内容。

#### Scenario: 创建新文章
- **WHEN** 用户在 `content/articles/` 目录下创建新的 `.md` 文件并推送到仓库
- **THEN** 网站重新构建后在文章列表中展示新文章

#### Scenario: 编辑已有文章
- **WHEN** 用户修改已有文章的 `.md` 文件并推送到仓库
- **THEN** 网站重新构建后文章页面展示更新后的内容

### Requirement: 文章列表展示
系统 SHALL 在文章列表页按日期倒序展示所有已发布文章，每篇文章展示标题、日期、描述和封面图。

#### Scenario: 访问文章列表
- **WHEN** 用户访问文章列表页面
- **THEN** 页面按日期降序展示所有文章条目，包含原标题和发布日期

### Requirement: 文章详情页渲染
系统 SHALL 将 Markdown 正文渲染为 HTML，并在文章详情页展示完整内容。

#### Scenario: 访问文章详情
- **WHEN** 用户点击某篇文章标题
- **THEN** 页面展示文章的完整 Markdown 渲染内容、标题和发布日期

### Requirement: 文章内嵌图片
系统 SHALL 支持在文章 Markdown 中引用本地图片，并在构建时正确渲染。

#### Scenario: 文章包含图片
- **WHEN** 文章 Markdown 中包含指向 `public/images/` 的图片引用
- **THEN** 文章详情页正确展示内嵌图片

### Requirement: 文章标签
系统 SHALL 支持为文章添加标签，并在文章列表中展示标签。

#### Scenario: 文章带有标签
- **WHEN** 用户为文章配置了 tags 字段
- **THEN** 文章卡片上展示对应的标签
