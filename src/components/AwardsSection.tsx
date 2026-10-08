import { Award, BookOpen, Languages, Star, Trophy } from 'lucide-react';
import { ACADEMIC_AWARDS, LANGUAGE_SCORES, LANGUAGE_TAGS, SCHOLARSHIP_AWARDS } from '@/data/awards';
import { Section, SectionHeader } from '@/components/Section';
import { TONE_PILL } from '@/lib/tone';

const AWARD_ICONS = {
  award: Award,
  star: Star,
  book: BookOpen,
} as const;

function AwardList({ items }: { items: typeof SCHOLARSHIP_AWARDS }) {
  return (
    <ul className="space-y-2">
      {items.map((award) => {
        const Icon = AWARD_ICONS[award.icon];
        return (
          <li
            key={award.text}
            className={`flex items-center gap-2.5 p-2.5 rounded-lg border ${TONE_PILL[award.tone]} transition-colors`}
          >
            <Icon className="w-3.5 h-3.5 shrink-0" aria-hidden />
            <span className="text-xs leading-snug">{award.text}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default function AwardsSection() {
  return (
    <Section id="awards">
      <SectionHeader
        icon={<Trophy className="w-4 h-4 text-morandi-amber" />}
        title="奖项荣誉"
        badgeClass="bg-morandi-amber/15"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:ml-12">
        <div className="rise mod-card bg-card border border-border/50 p-5 h-full">
          <div className="flex items-center gap-2 mb-4">
            <div className="icon-badge bg-morandi-rose/12">
              <span className="text-lg" aria-hidden>
                🏅
              </span>
            </div>
            <h3 className="font-semibold text-sm">奖学金 & 荣誉</h3>
          </div>
          <AwardList items={SCHOLARSHIP_AWARDS} />
        </div>

        <div className="rise space-y-5" style={{ animationDelay: '80ms' }}>
          <div className="mod-card bg-card border border-border/50 p-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="icon-badge bg-morandi-blue/12">
                <span className="text-lg" aria-hidden>
                  📝
                </span>
              </div>
              <h3 className="font-semibold text-sm">学术获奖</h3>
            </div>
            <AwardList items={ACADEMIC_AWARDS} />
          </div>

          <div className="mod-card bg-card border border-border/50 p-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="icon-badge bg-morandi-accent/12">
                <Languages className="w-4 h-4 text-morandi-accent" aria-hidden />
              </div>
              <h3 className="font-semibold text-sm">英语成绩</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {LANGUAGE_SCORES.map((lang) => (
                <div key={lang.label} className="text-center p-3 rounded-xl bg-muted/50">
                  <div className={`text-lg font-bold bg-gradient-to-r ${lang.gradient} bg-clip-text text-transparent`}>
                    {lang.score}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">{lang.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {LANGUAGE_TAGS.map((tag) => (
                <span key={tag.text} className={`pill ${TONE_PILL[tag.tone]} text-[0.7rem] py-0.5 px-2`}>
                  {tag.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
