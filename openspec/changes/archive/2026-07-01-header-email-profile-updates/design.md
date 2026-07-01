## Context

三个独立但相关的改动：Header 全局移除、Footer Email 交互改进、个人资料扩展。

## Decisions

### 1. Header 移除
直接从 5 个页面文件删除 `import Header` 和 `<Header />`。Header.astro 组件文件保留不删（后续可能恢复）。

### 2. Email Toast
点击 Email 按钮后：
- 创建一个绝对定位的 toast 元素，glass-card 风格
- 显示邮箱地址 `saibogongjiang.lzy@163.com`
- 自动调用 `navigator.clipboard.writeText()` 复制
- 3 秒后 fade out + remove

### 3. 个人附加信息展示
在 Hero 区 bio 下方、StatCard 上方插入：

```html
<div class="mt-8 flex flex-wrap gap-x-8 gap-y-2 font-mono text-sm text-frost/60">
  <span><span class="text-neon-cyan/60">▸</span> {school}</span>
  <span><span class="text-neon-cyan/60">▸</span> {hometown}</span>
  <span><span class="text-neon-cyan/60">▸</span> {location}</span>
</div>
```
