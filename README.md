# Vera LAU Portfolio

Vera LAU 的个人简历 / 作品集主页，Next.js 16 App Router + React 19 + Tailwind CSS v4 + Framer Motion。
设计风格为莫兰迪低饱和色系的模块化卡片（Bento Grid），附带 Signal Iduna Park（多特蒙德）的斜条纹元素。

## 快速开始

```bash
pnpm install
pnpm dev      # http://localhost:5000
pnpm build
pnpm start
```

静态检查：

```bash
pnpm validate   # ts-check + lint 并行
```

> 必须使用 pnpm（`preinstall` 会通过 only-allow 阻止 npm / yarn）。

## 目录结构

```
public/
└── avatar.jpeg          # 头像（288×288，30 KB）
src/
├── app/
│   ├── layout.tsx       # 根布局：metadata / viewport / 主题与动效 Provider / skip link
│   ├── page.tsx         # 首页 + Person JSON-LD
│   ├── globals.css      # 莫兰迪色板、mod-card / pill / icon-badge、打印与 reduced-motion 样式
│   ├── opengraph-image.tsx  # 动态生成 1200×630 社交分享图
│   ├── sitemap.ts / robots.ts
│   └── not-found.tsx / error.tsx
├── components/
│   ├── Navigation.tsx        # 固定导航（IntersectionObserver 高亮）
│   ├── HeroSection.tsx       # Bento Grid 概览
│   ├── AcademicSection.tsx   # 学术简历
│   ├── ExperienceSection.tsx # 实习经历
│   ├── CampusSection.tsx     # 校园 & 个人项目（Tab 切换）
│   ├── WorksSection.tsx      # 作品集
│   ├── AwardsSection.tsx     # 奖项荣誉
│   ├── SkillsSection.tsx     # 技能工具
│   ├── SocialSection.tsx     # 联系 & 社交 / 导出 PDF
│   ├── Footer.tsx
│   ├── TimelineCard.tsx      # 可展开卡片（a11y 完整）
│   ├── Section.tsx           # Section 容器与标题（含 scroll-mt 抵消导航）
│   ├── MaskedPhone.tsx       # 手机号脱敏
│   ├── PrintButton.tsx / ThemeToggle.tsx
│   └── MotionProvider.tsx / ThemeProvider.tsx
├── data/                     # 简历内容单一数据源（改内容只动这里）
│   ├── profile.ts  academics.ts  experiences.ts
│   ├── campus.ts   awards.ts     skills.ts
│   └── socials.ts  works.ts      navigation.ts
├── lib/tone.ts                # 颜色主题映射
└── types/resume.ts            # 数据类型
```

## 开发约定

1. **改内容不动组件**：所有文案 / 数据集中在 `src/data/`，组件只负责渲染。
2. **优先服务端组件**：只有需要状态或浏览器 API 的模块才加 `'use client'`（目前仅 Navigation、CampusSection、TimelineCard、CourseTags、MaskedPhone、PrintButton、Theme\*）。
3. **动效**：入场动画用 CSS（`.rise`）；Framer Motion 只用于交互（展开、Tab、导航 pill），且统一走 `LazyMotion` + `m`，并由 `MotionConfig reducedMotion="user"` 尊重系统「减弱动态效果」。
4. **可访问性**：可展开卡片的 `<button>` 只包标题区，配 `aria-expanded` / `aria-controls`；正文最小 12 px，对比度满足 WCAG AA。
5. **隐私**：手机号默认脱敏（`MaskedPhone`），完整号码需用户主动点击；不要再把联系方式明文写进组件。
6. **图片**：只使用本地图片，`next.config.ts` 未开放任何远程域名（避免 SSRF 与带宽滥用）。

## 部署

Vercel：`vercel.json` 已声明 `framework: "nextjs"`，推送到 `main` 即自动部署。
部署后请把 `src/data/profile.ts` 里的 `SITE_URL` 换成实际域名（用于 canonical / sitemap / OG）。

## 技术栈

| 项 | 版本 / 选择 |
|---|---|
| 框架 | Next.js 16.1.1（App Router，Turbopack 构建） |
| 运行时 | React 19.2 |
| 样式 | Tailwind CSS v4 + tw-animate-css |
| 动效 | Framer Motion 12（LazyMotion / m） |
| 图标 | lucide-react |
| 主题 | next-themes（亮 / 暗） |
| 包管理 | pnpm 9+ |
