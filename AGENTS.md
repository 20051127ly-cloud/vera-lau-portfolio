# 项目上下文

### 版本技术栈

- **Framework**: Next.js 16 (App Router)
- **Core**: React 19
- **Language**: TypeScript 5
- **UI 组件**: shadcn/ui (基于 Radix UI)
- **Styling**: Tailwind CSS 4
- **Animation**: Framer Motion 12

### 项目简介

个人主页网站，风格清新自然，以多特蒙德球场（Signal Iduna Park）为设计灵感。采用黄黑配色与自然绿色调结合，支持暗色模式。

## 目录结构

```
├── public/                 # 静态资源
├── scripts/                # 构建与启动脚本
│   ├── build.sh            # 构建脚本
│   ├── dev.sh              # 开发环境启动脚本
│   ├── prepare.sh          # 预处理脚本
│   └── start.sh            # 生产环境启动脚本
├── src/
│   ├── app/                # 页面路由与布局
│   │   ├── globals.css     # 全局样式（含 Dortmund 色系主题变量）
│   │   ├── layout.tsx      # 根布局
│   │   └── page.tsx        # 首页（组合所有 Section 组件）
│   ├── components/         # 业务组件
│   │   ├── Navigation.tsx  # 顶部导航栏（sticky, 动画高亮）
│   │   ├── HeroSection.tsx # Hero 全屏区域（个人简介、CTA）
│   │   ├── AboutSection.tsx# 关于我（头像、简介、标签）
│   │   ├── ExperienceSection.tsx # 经历模块（教育/实习/学术 Tab 切换+展开详情）
│   │   ├── PublicationsSection.tsx # 学术作品（分类筛选+展开摘要）
│   │   ├── SocialSection.tsx # 社交媒体（平台卡片网格）
│   │   ├── Footer.tsx      # 页脚
│   │   └── ui/             # Shadcn UI 组件库
│   ├── hooks/              # 自定义 Hooks
│   ├── lib/                # 工具库
│   │   └── utils.ts        # 通用工具函数 (cn)
│   └── server.ts           # 自定义服务端入口
├── next.config.ts          # Next.js 配置
├── package.json            # 项目依赖管理
└── tsconfig.json           # TypeScript 配置
```

- 项目文件默认初始化到 `src/` 目录下。

## 核心功能模块

| 模块 | 文件 | 功能 |
|------|------|------|
| 导航 | `Navigation.tsx` | Sticky 顶部导航，滚动高亮，移动端汉堡菜单，Framer Motion 动画 |
| Hero | `HeroSection.tsx` | 全屏个人介绍，背景动画光晕，CTA 按钮 |
| 关于我 | `AboutSection.tsx` | 左右布局：头像+快速信息 / 个人简介+研究标签 |
| 经历 | `ExperienceSection.tsx` | 三类 Tab 切换（教育/实习/学术），点击展开详情 |
| 学术作品 | `PublicationsSection.tsx` | 类型筛选（全部/会议/期刊/预印本），高亮代表作，展开摘要 |
| 社交媒体 | `SocialSection.tsx` | 平台卡片网格（GitHub/Scholar/Twitter/知乎/LinkedIn/ORCID） |
| 页脚 | `Footer.tsx` | 快捷链接 + Dortmund 主题引用 |

## 设计主题

- **主色**: Dortmund 黄 (#FDE100) + 自然绿 (#4A7C59)
- **辅色**: 叶绿 (#6B9B7D) / 鼠尾草 (#A8C5A0) / 暖沙 (#E8E0D0)
- **背景**: 暖白 (#FAFAF5) / 暖调 (#F5F0E8)
- **暗色模式**: 深黑 (#0D0D0D) + 深灰 (#1A1A1A)
- **动画**: Framer Motion (滚动入场、Tab 切换、卡片悬浮、背景光晕)
- **Dortmund 元素**: 45度斜条纹纹理、黄色高亮、Echte Liebe 引用

## 包管理规范

**仅允许使用 pnpm** 作为包管理器，**严禁使用 npm 或 yarn**。
**常用命令**：
- 安装依赖：`pnpm add <package>`
- 安装开发依赖：`pnpm add -D <package>`
- 安装所有依赖：`pnpm install`
- 移除依赖：`pnpm remove <package>`

## 开发规范

### 编码规范

- 默认按 TypeScript `strict` 心智写代码；优先复用当前作用域已声明的变量、函数、类型和导入，禁止引用未声明标识符或拼错变量名。
- 禁止隐式 `any` 和 `as any`；函数参数、返回值、解构项、事件对象、`catch` 错误在使用前应有明确类型或先完成类型收窄，并清理未使用的变量和导入。

### next.config 配置规范

- 配置的路径不要写死绝对路径，必须使用 path.resolve(__dirname, ...)、import.meta.dirname 或 process.cwd() 动态拼接。

### Hydration 问题防范

1. 严禁在 JSX 渲染逻辑中直接使用 typeof window、Date.now()、Math.random() 等动态数据。**必须使用 'use client' 并配合 useEffect + useState 确保动态内容仅在客户端挂载后渲染**；同时严禁非法 HTML 嵌套（如 <p> 嵌套 <div>）。
2. **禁止使用 head 标签**，优先使用 metadata，详见文档：https://nextjs.org/docs/app/api-reference/functions/generate-metadata
   1. 三方 CSS、字体等资源可在 `globals.css` 中顶部通过 `@import` 引入或使用 next/font
   2. preload, preconnect, dns-prefetch 通过 ReactDOM 的 preload、preconnect、dns-prefetch 方法引入
   3. json-ld 可阅读 https://nextjs.org/docs/app/guides/json-ld

## UI 设计与组件规范 (UI & Styling Standards)

- 模板默认预装核心组件库 `shadcn/ui`，位于`src/components/ui/`目录下
- Next.js 项目**必须默认**采用 shadcn/ui 组件、风格和规范，**除非用户指定用其他的组件和规范。**

## 构建与测试命令

- 静态检查：`pnpm ts-check` + `pnpm lint:build`
- 开发：`pnpm dev`（端口 5000）
- 构建：`pnpm build`
- 生产启动：`pnpm start`
