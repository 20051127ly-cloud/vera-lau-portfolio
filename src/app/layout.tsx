import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '个人主页 | Portfolio',
  description: '清新自然风格的个人主页，灵感源自多特蒙德球场',
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
