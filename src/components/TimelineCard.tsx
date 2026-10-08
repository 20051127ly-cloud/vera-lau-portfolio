'use client';

import { useId, useState } from 'react';
import { m } from 'framer-motion';
import { Briefcase, BookOpen, ChevronDown, Calendar, FlaskConical, GraduationCap, Megaphone, PenTool, Users } from 'lucide-react';
import type { IconKey, TimelineItem } from '@/types/resume';
import { TONE_ACCENT_BORDER, TONE_BADGE, TONE_PILL, TONE_TEXT } from '@/lib/tone';

const ICONS: Record<IconKey, React.ComponentType<{ className?: string }>> = {
  book: BookOpen,
  flask: FlaskConical,
  users: Users,
  graduation: GraduationCap,
  pen: PenTool,
  megaphone: Megaphone,
  briefcase: Briefcase,
};

interface Props {
  item: TimelineItem;
  defaultOpen?: boolean;
}

/**
 * 可展开的时间线卡片。
 * 相比旧实现：<button> 只包裹标题区（不再嵌套 h3/div 长文），
 * 并补齐 aria-expanded / aria-controls，读屏与键盘可用。
 */
export function TimelineCard({ item, defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();
  const tone = item.tone ?? 'rose';
  const Icon = ICONS[item.icon ?? 'briefcase'];

  return (
    <div className={`mod-card bg-card border border-border/50 ${TONE_ACCENT_BORDER[tone]}`}>
      <h3 className="font-semibold">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((o) => !o)}
          className="w-full text-left p-5 sm:p-6 cursor-pointer flex items-start gap-3 rounded-t-[1.25rem]"
        >
          <span className={`icon-badge ${TONE_BADGE[tone]} ${TONE_TEXT[tone]} shrink-0`}>
            <Icon className="w-4 h-4" />
          </span>
          <span className="flex-1 min-w-0">
            <span className="block text-sm sm:text-base text-foreground leading-snug">{item.title}</span>
            {item.org && (
              <span className="block text-xs text-morandi-accent font-medium mt-0.5">{item.org}</span>
            )}
            <span className="flex items-center gap-1 mt-1.5 text-xs text-muted-foreground">
              <Calendar className="w-3 h-3" aria-hidden />
              {item.period}
            </span>
          </span>
          <m.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }} className="shrink-0">
            <ChevronDown className="w-5 h-5 text-muted-foreground" aria-hidden />
          </m.span>
        </button>
      </h3>

      <div className="flex flex-wrap gap-1.5 px-5 pb-4 md:ml-[3.25rem]">
        {item.tags.map((tag) => (
          <span key={tag} className={`pill ${TONE_PILL[tone]} text-[0.7rem] py-0.5 px-2`}>
            {tag}
          </span>
        ))}
      </div>

      {/* 折叠内容始终保留在 DOM 中：打印 / 导出 PDF 时由 @media print 展开全部详情 */}
      <m.div
        id={panelId}
        role="region"
        data-collapsible
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
        inert={!open}
      >
        <ul className="px-5 pb-5 md:ml-[3.25rem] border-t border-border/50 pt-4 mt-3 space-y-2.5">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2 text-xs text-muted-foreground leading-relaxed">
              <span className={`${TONE_TEXT[tone]} mt-0.5 shrink-0`} aria-hidden>
                ●
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </m.div>
    </div>
  );
}
