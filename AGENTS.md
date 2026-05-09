# 项目上下文

### 版本技术栈

- **Framework**: Next.js 16 (App Router)
- **Core**: React 19
- **Language**: TypeScript 5
- **UI 组件**: shadcn/ui (基于 Radix UI)
- **Styling**: Tailwind CSS 4
- **Animation**: Framer Motion 12

### 项目简介

个人简历主页，参考 Dribbble 模块化插画风格设计，以多特蒙德球场（Signal Iduna Park）为灵感。采用黄黑配色与自然绿色调结合。所有模块以圆角卡片拼接，点击触发展开/收起动画。

## 目录结构

```
├── public/
│   └── avatar.jpeg        # 个人头像
├── scripts/                # 构建与启动脚本
├── src/
│   ├── app/                # 页面路由与布局
│   │   ├── globals.css     # 全局样式（Dortmund 色系 + mod-card 模块化样式）
│   │   ├── layout.tsx      # 根布局
│   │   └── page.tsx        # 首页（组合所有 Section 组件）
│   ├── components/         # 业务组件
│   │   ├── Navigation.tsx  # 顶部导航栏（pill 风格，sticky，emoji 标识）
│   │   ├── HeroSection.tsx # Hero 个人信息区（头像卡+标题卡+统计卡+语言卡+技能卡）
│   │   ├── ExperienceSection.tsx # 实习/教育经历（筛选+点击展开详情）
│   │   ├── CampusSection.tsx # 校园经历 & 科研项目（Tab 切换+展开详情）
│   │   ├── AwardsSection.tsx # 奖项荣誉（渐变卡片+英语成绩）
│   │   ├── SkillsSection.tsx # 技能工具（分类卡片+pill 标签）
│   │   ├── SocialSection.tsx # 社交联系（平台卡片+邮箱CTA）
│   │   ├── Footer.tsx      # 页脚
│   │   └── ui/             # Shadcn UI 组件库
│   ├── hooks/              # 自定义 Hooks
│   └── lib/                # 工具库
```

## 核心功能模块

| 模块 | 文件 | 功能 |
|------|------|------|
| 导航 | `Navigation.tsx` | Sticky 导航，pill 风格切换，emoji 标识，移动端 3 列图标菜单 |
| Hero | `HeroSection.tsx` | 头像卡+标题黄卡+统计行+语言能力+核心竞争力，Bento Grid 布局 |
| 经历 | `ExperienceSection.tsx` | 实习/教育筛选，卡片左侧色条，点击展开详情动画 |
| 校园 | `CampusSection.tsx` | 校园/科研 Tab 切换，同卡片展开交互 |
| 荣誉 | `AwardsSection.tsx` | 渐变卡片 hover 旋转，CET 成绩 pill |
| 技能 | `SkillsSection.tsx` | 三类分组卡片，pill 横滑，hover 右移 |
| 社交 | `SocialSection.tsx` | 平台卡片 hover 变色，邮箱 CTA 宽卡 |
| 页脚 | `Footer.tsx` | 黑底黄字，Dortmund 引用 |

## 设计主题

- **主色**: Dortmund 黄 (#FDE100) + 自然绿 (#4A7C59)
- **辅色**: 叶绿 (#6B9B7D) / 鼠尾草 (#A8C5A0) / 暖沙 (#E8E0D0)
- **背景**: 暖白 (#FAFAF5) / 暖调 (#F5F0E8)
- **动画**: Framer Motion (stagger 入场、点击弹跳 bounce-click、卡片悬浮、进度条动画)
- **交互**: mod-card 模块化卡片 + pill 标签 + icon-badge 图标角标
- **Dortmund 元素**: 45度斜条纹纹理、黄色高亮、Echte Liebe 引用

## 构建与测试命令

- 静态检查：`pnpm ts-check` + `pnpm lint:build`
- 开发：`pnpm dev`（端口 5000）
- 构建：`pnpm build`
- 生产启动：`pnpm start`
