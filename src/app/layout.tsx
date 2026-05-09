import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '陈思琪 | Portfolio',
  description: '内容策划 · 品牌传播 · 文化运营 — 个人简历主页',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className="antialiased min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
