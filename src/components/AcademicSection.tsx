import { BookMarked, BookOpen } from 'lucide-react';
import { ACADEMIC_ITEMS, CORE_COURSES, GPA } from '@/data/academics';
import { Section, SectionHeader } from '@/components/Section';
import { TimelineCard } from '@/components/TimelineCard';
import CourseTags from '@/components/CourseTags';

export default function AcademicSection() {
  return (
    <Section id="academic" tinted>
      <SectionHeader
        icon={<BookMarked className="w-4 h-4 text-morandi-rose" />}
        title="学术简历"
        tip="点击卡片展开详情"
        badgeClass="bg-morandi-rose/15"
      />

      {/* GPA & 核心课程 */}
      <div className="rise md:ml-12 mb-6">
        <div className="mod-card bg-card border border-border/50 p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-start gap-5">
            <div className="shrink-0">
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-morandi-rose/10 border border-morandi-rose/20">
                <span className="text-2xl font-bold text-morandi-rose">{GPA.value}</span>
                <span className="text-xs text-muted-foreground">{GPA.scale}</span>
                <span className="text-xs text-morandi-rose font-medium ml-1">专业排名 {GPA.rank}</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4 text-morandi-accent" aria-hidden />
                <span className="text-sm font-medium">核心课程</span>
                <span className="text-xs text-muted-foreground">共 {CORE_COURSES.length} 门</span>
              </div>
              <CourseTags />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4 md:ml-12">
        {ACADEMIC_ITEMS.map((item, i) => (
          <div key={item.id} className="rise" style={{ animationDelay: `${i * 80}ms` }}>
            <TimelineCard item={item} />
          </div>
        ))}
      </div>
    </Section>
  );
}
