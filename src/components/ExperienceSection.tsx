import { Briefcase } from 'lucide-react';
import { EXPERIENCES } from '@/data/experiences';
import { Section, SectionHeader } from '@/components/Section';
import { TimelineCard } from '@/components/TimelineCard';

export default function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionHeader
        icon={<Briefcase className="w-4 h-4 text-morandi-accent" />}
        title="实习经历"
        tip="点击卡片展开详情"
        badgeClass="bg-morandi-accent/15"
      />

      <div className="space-y-4 md:ml-12">
        {EXPERIENCES.map((item, i) => (
          <div key={item.id} className="rise" style={{ animationDelay: `${i * 80}ms` }}>
            <TimelineCard item={item} />
          </div>
        ))}
      </div>
    </Section>
  );
}
