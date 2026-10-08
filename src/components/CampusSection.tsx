'use client';

import { useState } from 'react';
import { AnimatePresence, m } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { CAMPUS_ITEMS, PROJECT_ITEMS } from '@/data/campus';
import { Section, SectionHeader } from '@/components/Section';
import { TimelineCard } from '@/components/TimelineCard';

type Tab = 'campus' | 'projects';

const TABS: { key: Tab; label: string; emoji: string }[] = [
  { key: 'campus', label: '校园经历', emoji: '🎓' },
  { key: 'projects', label: '个人项目', emoji: '🚀' },
];

export default function CampusSection() {
  const [activeTab, setActiveTab] = useState<Tab>('campus');
  const items = activeTab === 'campus' ? CAMPUS_ITEMS : PROJECT_ITEMS;

  return (
    <Section id="campus" tinted>
      <SectionHeader
        icon={<BookOpen className="w-4 h-4 text-morandi-blue" />}
        title="校园 & 项目"
        tip="点击卡片展开详情"
        badgeClass="bg-morandi-blue/15"
      >
        <div className="flex gap-2 md:ml-12" role="tablist" aria-label="校园与项目切换">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 bounce-click ${
                activeTab === tab.key
                  ? 'bg-morandi-rose text-white shadow-sm shadow-morandi-rose/25'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              <span aria-hidden>{tab.emoji}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </SectionHeader>

      <div role="tabpanel" aria-label={activeTab === 'campus' ? '校园经历' : '个人项目'}>
        <AnimatePresence mode="wait" initial={false}>
          <m.div
            key={activeTab}
            initial={{ opacity: 0, x: activeTab === 'campus' ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: activeTab === 'campus' ? 20 : -20 }}
            transition={{ duration: 0.25 }}
          >
            <div className="space-y-4 md:ml-12">
              {items.map((item) => (
                <TimelineCard key={item.id} item={item} />
              ))}
            </div>
          </m.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}
