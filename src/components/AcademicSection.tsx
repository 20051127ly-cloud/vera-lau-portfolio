'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, GraduationCap, ChevronDown, Calendar, Award, FlaskConical, BookMarked, Users } from 'lucide-react';

interface AcademicItem {
  id: string;
  title: string;
  org: string;
  period: string;
  icon: React.ReactNode;
  color: string;
  tags: string[];
  bullets: string[];
}

const ACADEMIC_ITEMS: AcademicItem[] = [
  {
    id: 'plutarch',
    title: '《她与共和：论普鲁塔克对波西娅的形象塑造》',
    org: '学年论文 · 南京大学文学院520本硕博联动获奖论文',
    period: '2026.01 - 2026.06',
    icon: <BookOpen className="w-4 h-4" />,
    color: 'border-l-4 border-l-morandi-rose',
    tags: ['古典学', '普鲁塔克', '女性研究'],
    bullets: [
      '细致考证《希腊罗马名人传》中波西娅形象的形成过程，梳理自古罗马至文艺复兴的波西娅形象流变。分析了普鲁塔克对《伊利亚特》和《埃涅阿斯纪》的双重化用，揭示波西娅与共和命运的关系。',
      '对古典学界"女性缄默说"进行回应，以修习哲学的波西娅形象为个案，揭示罗马贵族女性参与共和政治的可能。运用多种艺术材料，分析巴洛克画家西拉尼对波西娅女性形象描绘。',
    ],
  },
  {
    id: 'petrarch',
    title: '彼特拉克"谴责四书"中的人文主义与自我技术',
    org: '大创项目 · 评级：优秀',
    period: '2024.12 - 2025.12',
    icon: <FlaskConical className="w-4 h-4" />,
    color: 'border-l-4 border-l-morandi-accent',
    tags: ['大创项目', '拉丁文翻译', '人文主义'],
    bullets: [
      '梳理彼特拉克对贺拉斯等古典文人生命观的接受，分析其在《谴责无德无才的高官》中折射出的彷徨与自我焦虑，进一步分析"谴责"文体对彼特拉克人文主义自我意识觉醒的影响。（成果为译本前言）',
      '独立完成《谴责无德无才的高官》拉丁文书信的翻译与注疏。工作基础为现代整理的英拉对照本（Marsh译本），重点关注核心词汇和宗教词汇，以确保翻译的忠实性与学术价值。',
    ],
  },
  {
    id: 'assistant',
    title: '学术助理 · 博雅学院学术部 & 人文高等研究院',
    org: '中山大学',
    period: '2023.11 - 至今',
    icon: <Users className="w-4 h-4" />,
    color: 'border-l-4 border-l-morandi-blue',
    tags: ['《文选》读书会', '古典学年会', '学术助理'],
    bullets: [
      '连续四学期主持博雅学院《文选》读书会（超20次），完成多版本《文选》在线共享库的搭建。自主策划阅读主题，已完成京都赋、情赋、哀伤赋的阅读。邀请文学、史学、考古学等多学科学者参与跨学科对谈，尝试运用文史互证等跨学科视角解读文本。',
      '担任香港中文大学赵志裕教授在中山大学驻访期间学术助理，协助处理文献检索等事务。参与2024年全国古典学年会会务工作，负责整理"古典学的学科建设"访谈稿件，推动古典学学科讨论的公共传播。',
    ],
  },
  {
    id: 'ta',
    title: '本科生书院研讨课助教',
    org: '古典社会理论 / 现当代社会理论',
    period: '2026.01 - 至今',
    icon: <GraduationCap className="w-4 h-4" />,
    color: 'border-l-4 border-l-morandi-lavender',
    tags: ['研讨课', '马克思/韦伯/涂尔干', '文本细读'],
    bullets: [
      '每周组织一节研讨课，围绕马克思、韦伯、涂尔干等社会学家原著文本问题进行讨论，掌握讨论节奏和讨论进程。每周提供1小时线上答疑服务，指导同学进行文本细读，提供必要参考材料。',
    ],
  },
];

const CORE_COURSES = [
  '外国文学史', '比较文学概论', '中国古代文学史', '中国文学批评史',
  '古希腊罗马文明', '西方古典语言（拉丁语）', '西方史诗传统',
  '欧洲中世纪与文艺复兴文学', '近现代政治哲学', '现当代社会理论',
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function AcademicSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showAllCourses, setShowAllCourses] = useState(false);

  return (
    <section id="academic" className="py-16 sm:py-24 relative bg-morandi-cream-deep/30">
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
            <div className="icon-badge bg-morandi-rose/15">
              <BookMarked className="w-4 h-4 text-morandi-rose" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold">学术简历</h2>
            <p className="text-xs text-muted-foreground/60 mt-1">点击卡片展开详情</p>
          </div>
        </motion.div>

        {/* GPA & Course Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="ml-12 mb-6"
        >
          <div className="mod-card bg-card border border-border/50 p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-start gap-5">
              {/* GPA */}
              <div className="shrink-0">
                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-morandi-rose/10 border border-morandi-rose/20">
                  <span className="text-2xl font-bold text-morandi-rose">4.15</span>
                  <span className="text-xs text-muted-foreground">/ 5.00</span>
                  <span className="text-xs text-morandi-rose font-medium ml-1">2/14</span>
                </div>
              </div>

              {/* Core Courses */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-4 h-4 text-morandi-accent" />
                  <span className="text-sm font-medium">核心课程</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {(showAllCourses ? CORE_COURSES : CORE_COURSES.slice(0, 5)).map((course) => (
                    <span key={course} className="pill bg-morandi-accent/8 text-morandi-accent border border-morandi-accent/15 text-[0.65rem] py-0.5 px-2">
                      {course}
                    </span>
                  ))}
                  {!showAllCourses && CORE_COURSES.length > 5 && (
                    <button
                      onClick={() => setShowAllCourses(true)}
                      className="pill bg-muted text-muted-foreground border border-border/50 text-[0.65rem] py-0.5 px-2 cursor-pointer hover:bg-morandi-accent/10"
                    >
                      +{CORE_COURSES.length - 5} 更多
                    </button>
                  )}
                  {showAllCourses && (
                    <button
                      onClick={() => setShowAllCourses(false)}
                      className="pill bg-muted text-muted-foreground border border-border/50 text-[0.65rem] py-0.5 px-2 cursor-pointer hover:bg-morandi-rose/10"
                    >
                      收起
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Academic Experience Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-4 ml-12"
        >
          {ACADEMIC_ITEMS.map((exp) => {
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
                          <h3 className="font-semibold text-sm sm:text-base text-foreground leading-snug">{exp.title}</h3>
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
                      <span key={tag} className="pill bg-morandi-accent/8 text-morandi-accent border border-morandi-accent/15 text-[0.65rem] py-0.5 px-2">
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
      </div>
    </section>
  );
}
