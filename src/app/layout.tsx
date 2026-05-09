import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vera LAU | Portfolio',
  description: '汉语言文学 · 古典学 · 内容策划 — Vera Lau 个人简历主页',
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
