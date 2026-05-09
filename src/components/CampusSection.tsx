'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, BookOpen, ChevronDown, Calendar, Megaphone, PenTool } from 'lucide-react';

interface CampusItem {
  id: string;
  title: string;
  org: string;
  period: string;
  icon: React.ReactNode;
  color: string;
  tags: string[];
  bullets: string[];
}

interface ProjectItem {
  id: string;
  title: string;
  period: string;
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
    icon: <Users className="w-4 h-4" />,
    color: 'border-l-4 border-l-morandi-rose',
    tags: ['企业联动', '社群运营', '活动策划'],
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
    icon: <PenTool className="w-4 h-4" />,
    color: 'border-l-4 border-l-morandi-accent',
    tags: ['内容运营', 'SOP优化', '新闻通稿'],
    bullets: [
      '负责学院公众号及官网栏目规划，基于用户阅读数据优化导航结构与推送策略，建立"博雅教育-博雅学术-博雅人物"内容体系，优化推送工作SOP。任职期间累计产出推文90+篇，总阅读量23000+。',
      '负责"中国古典学年会""中国通识教育年会"重大活动的海报设计与新闻通稿撰写，具有扎实的新闻素养与文字功底。',
    ],
  },
];

const PROJECT_ITEMS: ProjectItem[] = [
  {
    id: 'xiaohongshu',
    title: '小红书英剧账号（个人运营）',
    period: '2025.08 - 至今',
    color: 'border-l-4 border-l-morandi-lavender',
    tags: ['内容运营', '数据分析', '视觉策略'],
    bullets: [
      '制作推送英国演员相关内容，进行英剧剧情盘点和热点二创。累计运营7个月，产出笔记45篇。擅长把握平台调性与年轻用户偏好，最高阅读量超4w，点赞量900+。',
      '通过分析小红书推荐机制，优化标题关键词与封面视觉策略，改变tag书写方式，建立"黄金发布时间"发布表，笔记平均曝光量提升30%。',
    ],
  },
  {
    id: 'petrarch-project',
    title: '彼特拉克"谴责四书"中的人文主义与自我技术',
    period: '2024.12 - 2025.12',
    color: 'border-l-4 border-l-morandi-blue',
    tags: ['大创项目(优秀)', '拉丁文翻译', 'AIGC应用'],
    bullets: [
      '独立完成四篇拉丁文书信的中译与学术注释，补充中国学界出版空白，展现扎实的文学功底与跨文化内容转化能力。运用ChatGPT、Deepseek等AI工具进行三语版本校对与格式优化，探索AIGC在学术内容生产中的应用。',
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

type Tab = 'campus' | 'projects';

export default function CampusSection() {
  const [activeTab, setActiveTab] = useState<Tab>('campus');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="campus" className="py-16 sm:py-24 relative bg-morandi-cream-deep/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="icon-badge bg-morandi-blue/15">
              <BookOpen className="w-4 h-4 text-morandi-blue" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold">校园 & 项目</h2>
          </div>
          <div className="flex gap-2 ml-12">
            {[
              { key: 'campus' as Tab, label: '校园经历', emoji: '🎓' },
              { key: 'projects' as Tab, label: '个人项目', emoji: '🚀' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => { setActiveTab(tab.key); setExpandedId(null); }}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 bounce-click ${
                  activeTab === tab.key
                    ? 'bg-morandi-rose text-white shadow-sm shadow-morandi-rose/25'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                <span>{tab.emoji}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === 'campus' ? (
            <motion.div
              key="campus"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-4 ml-12"
              >
                {CAMPUS_ITEMS.map((exp) => {
                  const isExpanded = expandedId === exp.id;
                  return (
                    <motion.div key={exp.id} variants={item}>
                      <button
                        onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                        className={`w-full text-left mod-card bg-card border border-border/50 p-5 sm:p-6 cursor-pointer ${exp.color} bounce-click`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="icon-badge bg-morandi-rose/8 text-morandi-rose shrink-0">
                            {exp.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <h3 className="font-semibold text-sm sm:text-base text-foreground">{exp.title}</h3>
                                <p className="text-xs text-morandi-accent font-medium mt-0.5">{exp.org}</p>
                              </div>
                              <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.25 }}>
                                <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
                              </motion.div>
                            </div>
                            <div className="flex items-center gap-3 mt-1.5 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{exp.period}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1.5 mt-3 ml-[3.25rem]">
                          {exp.tags.map((tag) => (
                            <span key={tag} className="pill bg-morandi-rose/8 text-morandi-rose border border-morandi-rose/15 text-[0.65rem] py-0.5 px-2">
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
                                {exp.bullets.map((bullet, i) => (
                                  <div key={i} className="flex gap-2 text-xs text-muted-foreground leading-relaxed">
                                    <span className="text-morandi-rose mt-0.5 shrink-0">●</span>
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
            </motion.div>
          ) : (
            <motion.div
              key="projects"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-4 ml-12"
              >
                {PROJECT_ITEMS.map((proj) => {
                  const isExpanded = expandedId === proj.id;
                  return (
                    <motion.div key={proj.id} variants={item}>
                      <button
                        onClick={() => setExpandedId(isExpanded ? null : proj.id)}
                        className={`w-full text-left mod-card bg-card border border-border/50 p-5 sm:p-6 cursor-pointer ${proj.color} bounce-click`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="icon-badge bg-morandi-blue/8 text-morandi-blue shrink-0">
                            <Megaphone className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                              <h3 className="font-semibold text-sm sm:text-base text-foreground">{proj.title}</h3>
                              <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.25 }}>
                                <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
                              </motion.div>
                            </div>
                            <div className="flex items-center gap-3 mt-1.5 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{proj.period}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1.5 mt-3 ml-[3.25rem]">
                          {proj.tags.map((tag) => (
                            <span key={tag} className="pill bg-morandi-blue/8 text-morandi-blue border border-morandi-blue/15 text-[0.65rem] py-0.5 px-2">
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
                                {proj.bullets.map((bullet, i) => (
                                  <div key={i} className="flex gap-2 text-xs text-muted-foreground leading-relaxed">
                                    <span className="text-morandi-blue mt-0.5 shrink-0">●</span>
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
