import { Code, FileSpreadsheet, Palette, Wrench } from 'lucide-react';
import { SKILL_GROUPS } from '@/data/skills';
import { Section, SectionHeader } from '@/components/Section';
import type { Tone } from '@/types/resume';

const ICONS = {
  sheet: FileSpreadsheet,
  code: Code,
  palette: Palette,
} as const;

const TOP_BORDER: Record<Tone, string> = {
  rose: 'border-t-2 border-t-morandi-rose',
  accent: 'border-t-2 border-t-morandi-accent',
  blue: 'border-t-2 border-t-morandi-blue',
  lavender: 'border-t-2 border-t-morandi-lavender',
};

export default function SkillsSection() {
  return (
    <Section id="skills" tinted>
      <SectionHeader
        icon={<Wrench className="w-4 h-4 text-morandi-warm" />}
        title="技能工具"
        badgeClass="bg-morandi-sand/20"
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:ml-12">
        {SKILL_GROUPS.map((group, gi) => {
          const Icon = ICONS[group.icon];
          return (
            <div
              key={group.title}
              className={`rise mod-card bg-card border border-border/50 p-5 h-full ${TOP_BORDER[group.tone]}`}
              style={{ animationDelay: `${gi * 80}ms` }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="icon-badge bg-muted/80">
                  <Icon className="w-4 h-4" aria-hidden />
                </div>
                <h3 className="font-semibold text-sm">{group.title}</h3>
              </div>
              <ul className="space-y-1.5">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/30 text-xs transition-colors hover:bg-muted/60"
                  >
                    <span className="w-1 h-1 rounded-full bg-morandi-accent shrink-0" aria-hidden />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
