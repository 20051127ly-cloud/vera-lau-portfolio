# 项目上下文

### 版本技术栈

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Core**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4（未使用 shadcn/ui，卡片为自绘样式）
- **Animation**: Framer Motion 12（LazyMotion + `m`，仅用于交互）
- **Theme**: next-themes（亮 / 暗，`.dark` 变量在 `globals.css`）

### 项目简介

个人简历 + 作品集主页。莫兰迪低饱和色系，模块化圆角卡片拼接（Bento Grid），
时间线卡片点击展开详情，附带多特蒙德 Signal Iduna Park 的 45° 斜条纹元素与 "Echte Liebe" 引用。

## 目录结构

```
├── public/
│   └── avatar.jpeg          # 头像（288×288）
├── scripts/                 # 构建与启动脚本
├── src/
│   ├── app/
│   │   ├── layout.tsx       # metadata / viewport / Provider / skip link
│   │   ├── page.tsx         # 首页 + Person JSON-LD
│   │   ├── globals.css      # 色板 + mod-card/pill/icon-badge + 打印 + reduced-motion
│   │   ├── opengraph-image.tsx
│   │   ├── sitemap.ts / robots.ts
│   │   └── not-found.tsx / error.tsx
│   ├── components/          # 业务组件（默认服务端组件）
│   ├── data/                # 简历内容单一数据源
│   ├── lib/tone.ts          # 颜色主题映射
│   ├── types/resume.ts      # 数据类型
│   └── server.ts            # coze 平台自定义服务器入口
```

## 核心功能模块

| 模块 | 文件 | 说明 |
|------|------|------|
| 导航 | `Navigation.tsx` | 固定导航，IntersectionObserver 高亮，桌面 pill / 移动端折叠 |
| Hero | `HeroSection.tsx` | 头像卡 + 标题卡 + 统计 + 语言能力 + 核心竞争力 + Motto |
| 学术 | `AcademicSection.tsx` | GPA + 核心课程（可展开更多）+ 时间线卡片 |
| 实习 | `ExperienceSection.tsx` | 时间线卡片，左侧色条 |
| 校园 | `CampusSection.tsx` | 校园经历 / 个人项目 Tab 切换 |
| 作品 | `WorksSection.tsx` | 作品集三栏，仅有真实外链的条目可点击 |
| 荣誉 | `AwardsSection.tsx` | 奖学金 / 学术获奖 / 英语成绩 |
| 技能 | `SkillsSection.tsx` | 三组分类卡片 |
| 社交 | `SocialSection.tsx` | 平台卡片 + 导出 PDF + 邮箱 CTA |
| 页脚 | `Footer.tsx` | 原生锚点快捷导航 |

## 设计主题

- **主色**: 莫兰迪玫瑰 `#C4A6A6`
- **辅色**: 驼棕 `#9B7E5E` / 雾蓝 `#A3B5C7` / 薰衣草 `#B8A9C9` / 鼠尾草 `#9CAF96` / 暖沙 `#CFC3B7`
- **背景**: 奶油 `#F5F1ED` / 深奶油 `#EDE6DD`
- **文字**: 炭褐 `#4A4340`（正文）/ `#6E6760`（次要，满足 WCAG AA）
- **动画**: CSS `.rise` 入场 + Framer Motion 处理展开 / Tab / 导航 pill；全局尊重 `prefers-reduced-motion`
- **交互**: `mod-card` 卡片 + `pill` 标签 + `icon-badge` 图标角标
- **Dortmund 元素**: `.dortmund-stripe` 斜条纹纹理、"Echte Liebe" 引用

## 开发约定

1. 内容一律写在 `src/data/`，组件不硬编码文案；`navigation.ts` 同时驱动导航与页脚。
2. 默认写服务端组件，只有需要 state / 浏览器 API 时才加 `'use client'`。
3. 新增颜色主题请扩展 `src/lib/tone.ts`，不要散落类名字符串。
4. 手机号只允许通过 `MaskedPhone` 渲染，禁止明文出现。
5. 不使用远程图片，`next.config.ts` 不配置 `remotePatterns`。
6. 折叠详情需保留在 DOM 中（`data-collapsible`），以便打印时自动展开。

## 构建与测试命令

- 静态检查：`pnpm ts-check` + `pnpm lint:build`（合起来 `pnpm validate`）
- 开发：`pnpm dev`（端口 5000）
- 构建：`pnpm build`
- 生产启动：`pnpm start`
