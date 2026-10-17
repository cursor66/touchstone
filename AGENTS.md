# Touchstone 前端开发说明

## 项目介绍

这是基于 Next.js App Router 的个人创作内容平台「心之所向」。首页呈现创作者介绍、文章/视频/资源动态与订阅入口。设计参考 `temp/01-HeartDirection - Home.html`，色彩与内容卡片延续同目录的其他页面。

## 设计系统架构

- 全局设计令牌、排版、布局与响应式规则集中在 `src/app/globals.css` 的 `:root` 变量和语义类中。
- 路由页面放在 `src/app`；首页的 Header、Card、Sidebar 为页面内可复用组件，复杂度增长时再迁移至 `src/components`。
- `/design-system` 是纯前端的开发环境组件预览页，展示颜色、字体、按钮、卡片、表单和布局；生产环境不开放。
- 主题基调：主色 `#2563eb`，墨色 `#0f172a`，辅助底色 `#f8fafc`，边框 `#e2e8f0`；系统无衬线字体，卡片圆角 12px。

## 组件复用规范

- 开发页面时，必须优先复用已有组件。
- 如果已有组件可以通过 props、variant、className 等方式扩展，应优先扩展，而不是重新创建相似组件。
- 只有在现有组件无法满足需求时，才新增组件。
- 共享外观使用全局令牌与语义类，不在页面中重复堆叠相近的样式值；交互控件提供 hover、focus 状态。
- 内容卡片、面板、按钮、导航、表单应优先复用首页已有样式/组件，响应式变化也应沿用统一断点。

## 后续开发注意事项

- 使用 TypeScript、React Server Components 和 Next.js App Router 约定；只有需要客户端状态/事件的模块才添加 `"use client"`。
- 保持中文页面 `lang="zh-CN"`、可访问的表单标签与图片替代文本。
- 媒体尽可能迁移到 `public/` 或受控 CDN，避免新增不可用的临时资源地址。
- 修改设计令牌或通用组件后，同时检查首页和 `/design-system`；运行 `npm run lint` 与 `npm run build` 验证。
