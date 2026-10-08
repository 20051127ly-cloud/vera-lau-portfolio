import type { Metadata, Viewport } from 'next';
import './globals.css';
import { PROFILE, SITE_URL } from '@/data/profile';
import ThemeProvider from '@/components/ThemeProvider';
import MotionProvider from '@/components/MotionProvider';

const DESCRIPTION =
  `${PROFILE.name}，${PROFILE.school}汉语言文学专业，GPA 4.15/5.00（专业排名 2/14）。` +
  '专注古典学研究与内容策划，具备嘉士伯中国雇主品牌运营、新媒体内容创作与文化活动策划的实习经验。';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${PROFILE.name} | 汉语言文学 · 古典学 · 内容策划`,
    template: `%s | ${PROFILE.name}`,
  },
  description: DESCRIPTION,
  keywords: [
    'Vera LAU',
    '个人主页',
    '中山大学',
    '博雅学院',
    '汉语言文学',
    '古典学',
    '内容策划',
    '雇主品牌',
    '新媒体运营',
  ],
  authors: [{ name: PROFILE.name }],
  creator: PROFILE.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    locale: 'zh_CN',
    url: SITE_URL,
    siteName: `${PROFILE.name} Portfolio`,
    title: `${PROFILE.name} | 汉语言文学 · 古典学 · 内容策划`,
    description: DESCRIPTION,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: `${PROFILE.name} Portfolio` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PROFILE.name} | 汉语言文学 · 古典学 · 内容策划`,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F5F1ED',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-background text-foreground">
        <a href="#main" className="skip-link">
          跳转到主要内容
        </a>
        <ThemeProvider>
          <MotionProvider>{children}</MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
