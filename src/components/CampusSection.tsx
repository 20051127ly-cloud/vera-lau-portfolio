'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, ChevronDown, Calendar } from 'lucide-react';

interface CampusItem {
  id: string;
  title: string;
  org: string;
  period: string;
  icon: string;
  color: string;
  tags: string[];
  bullets: string[];
}

const CAMPUS_ITEMS: CampusItem[] = [
  {
    id: 'cantonese',
    title: '会长',
    org: '中山大学粤语协会',
    period: '2024.09 - 2025.09',
    icon: '🗣️',
    color: 'border-l-4 border-l-bvb-yellow',
    tags: ['活动策划', '企业联动', '社群运营'],
    bullets: [
      '主导"小红书开学博览会"、"港乐Busking"（与宝洁合作）粤语协会活动，主动联系校外企业资源，单场活动参与人数最高超800人。',
      '统筹"采青小课堂""盏鬼粤语堂"粤语教学系列活动，覆盖广州、深圳、珠海三大校区，搭建标准化活动体系，触达超300名社团成员。管理社团财务、考勤等日常行政工作。',
    ],
  },
  {
    id: 'newscenter',
    title: '公众号负责人',
    org: '中山大学博雅学院新闻中心',
    period: '2024.09 - 2025.09',
    icon: '✍️',
    color: 'border-l-4 border-l-nature-green',
    tags: ['内容运营', '新闻通稿', '海报设计'],
    bullets: [
      '负责学院公众号及官网栏目规划，基于用户阅读数据优化导航结构与推送策略，建立"博雅教育-博雅学术-博雅生活"内容体系，优化推送工作SOP。任职期间累计产出推文90+篇，总阅读量23000+。',
      '负责"中国古典学年会""中国通识教育年会"重大活动的海报设计与新闻通稿撰写，具有扎实的新闻素养与文字功底。',
    ],
  },
];

const RESEARCH_ITEMS: CampusItem[] = [
  {
    id: 'petrarch',
    title: '彼特拉克"谴责四书"中的人文主义与自我技术',
    org: '学术研究项目',
    period: '2024.12 - 2025.12',
    icon: '📖',
    color: 'border-l-4 border-l-nature-leaf',
    tags: ['拉丁文翻译', '人文主义', 'AIGC应用'],
    bullets: [
      '独立完成四篇拉丁文书信的中译与学术注释，补充中国学界出版空白，展现扎实的文学功底与跨文化内容转化能力。运用ChatGPT、Deepseek等AI工具进行三语版本校对与格式优化，探索AIGC在学术内容生产中的应用。',
    ],
  },
  {
    id: 'xiaohongshu',
    title: '小红书英剧账号（个人运营）',
    org: '自媒体项目',
    period: '2025.08 - 至今',
    icon: '📱',
    color: 'border-l-4 border-l-bvb-yellow',
    tags: ['自媒体运营', '内容二创', '数据分析'],
    bullets: [
      '制作推送英国演员相关内容，进行英剧剧情盘点和热点二创。累计运营7个月，产出笔记45篇，最高阅读量超4w，点赞量900+。',
      '通过分析小红书推荐机制，优化标题关键词与封面视觉策略，改变tag书写方式，建立"黄金发布时间"发布表，笔记平均曝光量提升30%。',
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function CampusSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'campus' | 'research'>('campus');

  const items = activeTab === 'campus' ? CAMPUS_ITEMS : RESEARCH_ITEMS;

  return (
    <section id="campus" className="py-16 sm:py-24 relative bg-nature-warm/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="icon-badge bg-nature-green/15">
              <Users className="w-4 h-4 text-nature-green" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold">校园 & 项目</h2>
          </div>
        </motion.div>

        {/* Tab Switch */}
        <div className="flex gap-2 mb-6 ml-12">
          {[
            { key: 'campus' as const, label: '校园经历', emoji: '🏫' },
            { key: 'research' as const, label: '科研 & 项目', emoji: '🔬' },
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => { setActiveTab(t.key); setExpandedId(null); }}
              className={`pill border cursor-pointer transition-all bounce-click ${
                activeTab === t.key
                  ? 'bg-bvb-yellow text-bvb-black border-bvb-yellow/50'
                  : 'bg-card text-muted-foreground border-border/50 hover:border-nature-green/30'
              }`}
            >
              <span>{t.emoji}</span> {t.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-4"
          >
            {items.map((c) => {
              const isExpanded = expandedId === c.id;
              return (
                <motion.div key={c.id} variants={item}>
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : c.id)}
                    className={`w-full text-left mod-card bg-card border border-border/50 p-5 sm:p-6 cursor-pointer ${c.color} bounce-click`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="icon-badge bg-muted/80 shrink-0 text-xl">{c.icon}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="font-semibold text-sm sm:text-base text-foreground leading-snug">{c.title}</h3>
                            <p className="text-xs text-nature-green font-medium mt-0.5">{c.org}</p>
                          </div>
                          <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.25 }}>
                            <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
                          </motion.div>
                        </div>
                        <div className="flex items-center gap-3 mt-1.5 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{c.period}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-3 ml-[3.25rem]">
                      {c.tags.map((tag) => (
                        <span key={tag} className="pill bg-nature-green/8 text-nature-green border border-nature-green/15 text-[0.65rem] py-0.5 px-2">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 mt-3 ml-[3.25rem] border-t border-border/50 space-y-2.5">
                            {c.bullets.map((bullet, i) => (
                              <div key={i} className="flex gap-2 text-xs text-muted-foreground leading-relaxed">
                                <span className="text-bvb-yellow mt-0.5 shrink-0">●</span>
                                <span>{bullet}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
