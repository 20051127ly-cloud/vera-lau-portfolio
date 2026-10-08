'use client';

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-serif text-2xl sm:text-3xl font-bold">页面加载出错了</h1>
        <p className="text-sm text-muted-foreground mt-3">请重试，或稍后再访问。</p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 px-5 py-2.5 rounded-xl bg-morandi-rose text-white text-sm font-medium hover:opacity-90 transition-opacity"
        >
          重试
        </button>
      </div>
    </main>
  );
}
