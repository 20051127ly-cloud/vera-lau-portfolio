interface SectionProps {
  id: string;
  /** 交替底色，默认透明 */
  tinted?: boolean;
  className?: string;
  children: React.ReactNode;
}

/**
 * 统一 Section 容器：
 * - scroll-mt-20 抵消 64px 固定导航，避免锚点跳转后标题被遮挡
 * - 内容区 md:ml-12，移动端不再浪费 13% 宽度
 */
export function Section({ id, tinted = false, className = '', children }: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 py-16 sm:py-24 relative ${tinted ? 'bg-morandi-cream-deep/30' : ''} ${className}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  icon: React.ReactNode;
  title: string;
  /** 仅当模块卡片真的可展开时才传该提示 */
  tip?: string;
  badgeClass?: string;
  children?: React.ReactNode;
}

export function SectionHeader({ icon, title, tip, badgeClass = '', children }: SectionHeaderProps) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-3">
        <div className={`icon-badge ${badgeClass}`}>{icon}</div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold">{title}</h2>
        {tip && <p className="text-xs text-muted-foreground mt-1">{tip}</p>}
      </div>
      {children}
    </div>
  );
}
