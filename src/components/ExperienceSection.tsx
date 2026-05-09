'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, BookOpen, ChevronDown, ExternalLink, Calendar, Building2 } from 'lucide-react';

interface ExperienceItem {
  id: string;
  type: 'intern' | 'edu';
  title: string;
  org: string;
  period: string;
  icon: string;
  color: string;
  tags: string[];
  bullets: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'carlsberg',
    type: 'intern',
    title: '人员与文化部实习生',
    org: '嘉士伯中国总部',
    period: '2026.01 - 2026.03',
    icon: '🍺',
    color: 'border-l-4 border-l-bvb-yellow',
    tags: ['雇主品牌', '内容策划', '招聘'],
    bullets: [
      '负责"嘉士伯中国招聘"公众号及小红书账号内容策划，结合热点撰写文案，参与女性招聘月、北欧企业文化专题策划，输出"北欧外企"传播创意（已被采纳为全平台宣传slogan），任职期间粉丝增长5%，最高阅读量3w+。',
      '社招端根据岗位画像在BOSS、智联等平台完成候选人寻访，日均产出推荐邮件5封以上；校招独立负责Marketing、Sales、HR方向实习生招聘，招聘完成率100%。',
    ],
  },
  {
    id: 'library',
    type: 'intern',
    title: '活动策划岗实习生',
    org: '广州少年儿童图书馆',
    period: '2025.01 - 2025.03',
    icon: '📚',
    color: 'border-l-4 border-l-nature-green',
    tags: ['活动策划', '传统文化IP', '内容运营'],
    bullets: [
      '创新策划"绘本+汉服+非遗游戏"沉浸式阅读体验，将静态书展升级为可参与的文化场景，单场活动家庭参与率超50组，实现从"图书借阅"到"文化体验"的用户价值升级。',
      '负责活动全流程内容输出，包括预热海报、现场摄影及公众号/地方报刊深度稿件，发布《"植"此青绿》专题图书推荐、元宵节活动回顾内容等4篇。',
    ],
  },
  {
    id: 'bilbili',
    type: 'intern',
    title: '宣传组成员',
    org: 'Bilibili新国辩',
    period: '2025.07 - 2025.08',
    icon: '🎬',
    color: 'border-l-4 border-l-nature-leaf',
    tags: ['新媒体运营', '数据分析', '内容创作'],
    bullets: [
      '参与bilibili头部知识类IP"新国辩"公众号、微博图文宣传，累计产出比赛海报32张，实时更新图文64条，总阅读量5万+。进行最佳辩手访谈，整理"辩论金句"、专访内容5篇。',
      '运用Excel对辩论内容进行数据分析，运用"选手输出效率"模型，识别高潜力辩手特征，为后续赛事内容策划提供数据支持。',
    ],
  },
  {
    id: 'sysu',
    type: 'edu',
    title: '博雅学院（本科）',
    org: '中山大学',
    period: '2022.09 - 2026.06',
    icon: '🎓',
    color: 'border-l-4 border-l-bvb-yellow',
    tags: ['人文学科', '跨学科', '古典学'],
    bullets: [
      '博雅学院本科，接受跨学科人文教育，主修古典文学与人文研究，具备扎实的学术写作与跨文化分析能力。',
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

export default function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'intern' | 'edu'>('all');

  const filtered = EXPERIENCES.filter((e) => activeFilter === 'all' || e.type === activeFilter);

  return (
    <section id="experience" className="py-16 sm:py-24 relative">
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
            <div className="icon-badge bg-bvb-yellow/15">
              <Briefcase className="w-4 h-4 text-bvb-black" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold">经历</h2>
          </div>
          <p className="text-sm text-muted-foreground ml-12">点击卡片展开详情</p>
        </motion.div>

        {/* Filter pills */}
        <div className="flex gap-2 mb-6 ml-12">
          {[
            { key: 'all' as const, label: '全部', emoji: '📋' },
            { key: 'intern' as const, label: '实习', emoji: '💼' },
            { key: 'edu' as const, label: '教育', emoji: '🎓' },
          ].map((f) => (
            <button
              key={f.key}
              onClick={() => { setActiveFilter(f.key); setExpandedId(null); }}
              className={`pill border cursor-pointer transition-all bounce-click ${
                activeFilter === f.key
                  ? 'bg-bvb-yellow text-bvb-black border-bvb-yellow/50'
                  : 'bg-card text-muted-foreground border-border/50 hover:border-nature-green/30'
              }`}
            >
              <span>{f.emoji}</span> {f.label}
            </button>
          ))}
        </div>

        {/* Experience Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-4"
          >
            {filtered.map((exp) => {
              const isExpanded = expandedId === exp.id;
              return (
                <motion.div key={exp.id} variants={item}>
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                    className={`w-full text-left mod-card bg-card border border-border/50 p-5 sm:p-6 cursor-pointer ${exp.color} bounce-click`}
                  >
                    {/* Header row */}
                    <div className="flex items-start gap-3">
                      <div className="icon-badge bg-muted/80 shrink-0 text-xl">
                        {exp.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="font-semibold text-sm sm:text-base text-foreground leading-snug">{exp.title}</h3>
                            <p className="text-xs text-nature-green font-medium mt-0.5">{exp.org}</p>
                          </div>
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.25 }}
                          >
                            <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
                          </motion.div>
                        </div>
                        <div className="flex items-center gap-3 mt-1.5 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Tags (always visible) */}
                    <div className="flex flex-wrap gap-1.5 mt-3 ml-[3.25rem]">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="pill bg-nature-green/8 text-nature-green border border-nature-green/15 text-[0.65rem] py-0.5 px-2">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Expanded bullets */}
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
