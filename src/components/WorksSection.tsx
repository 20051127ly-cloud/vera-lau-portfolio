import { FolderOpen, ExternalLink } from 'lucide-react';
import { WORK_GROUPS } from '@/data/works';
import { Section, SectionHeader } from '@/components/Section';
import { TONE_ACCENT_BORDER, TONE_BADGE, TONE_TEXT } from '@/lib/tone';

/** 作品集：把简历里的量化成果落成可查看条目，仅有真实外链的条目才渲染链接 */
export default function WorksSection() {
  return (
    <Section id="works">
      <SectionHeader
        icon={<FolderOpen className="w-4 h-4 text-morandi-lavender" />}
        title="作品集"
        badgeClass="bg-morandi-lavender/15"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:ml-12">
        {WORK_GROUPS.map((group, gi) => (
          <div
            key={group.id}
            className={`rise mod-card bg-card border border-border/50 p-5 h-full ${TONE_ACCENT_BORDER[group.tone]}`}
            style={{ animationDelay: `${gi * 80}ms` }}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className={`icon-badge ${TONE_BADGE[group.tone]}`}>
                <FolderOpen className={`w-4 h-4 ${TONE_TEXT[group.tone]}`} aria-hidden />
              </div>
              <h3 className="font-semibold text-sm">{group.title}</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4">{group.desc}</p>

            <ul className="space-y-2">
              {group.items.map((item) => {
                const body = (
                  <>
                    <span className="block text-xs font-medium leading-snug">{item.title}</span>
                    <span className="block text-[0.7rem] text-muted-foreground mt-0.5">
                      <span
                        className={`pill ${TONE_TEXT[group.tone]} bg-muted/60 border border-border/40 text-[0.65rem] py-0 px-1.5 mr-1.5`}
                      >
                        {item.tag}
                      </span>
                      {item.metric}
                    </span>
                  </>
                );

                return (
                  <li key={item.title}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start justify-between gap-2 p-2.5 rounded-lg bg-muted/30 hover:bg-muted/60 transition-colors group"
                      >
                        {body}
                        <ExternalLink
                          className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${TONE_TEXT[group.tone]} opacity-60 group-hover:opacity-100`}
                          aria-hidden
                        />
                      </a>
                    ) : (
                      <div className="p-2.5 rounded-lg bg-muted/30">{body}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
