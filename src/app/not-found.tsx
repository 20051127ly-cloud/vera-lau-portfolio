import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-xs text-muted-foreground uppercase tracking-widest">404</p>
        <h1 className="font-serif text-2xl sm:text-3xl font-bold mt-2">页面不存在</h1>
        <p className="text-sm text-muted-foreground mt-3">
          你访问的地址可能已经变更，回到主页看看完整简历吧。
        </p>
        <Link
          href="/"
          className="inline-block mt-6 px-5 py-2.5 rounded-xl bg-morandi-rose text-white text-sm font-medium hover:opacity-90 transition-opacity"
        >
          返回主页
        </Link>
      </div>
    </main>
  );
}
