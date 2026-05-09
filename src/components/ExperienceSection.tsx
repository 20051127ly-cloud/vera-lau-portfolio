'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Briefcase, Microscope, ChevronRight, Calendar, MapPin } from 'lucide-react';

type ExperienceCategory = 'education' | 'internship' | 'academic';

interface ExperienceItem {
  id: string;
  category: ExperienceCategory;
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  tags: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'edu1',
    category: 'education',
    title: '博士研究生 - 计算机科学与技术',
    organization: '清华大学',
    location: '北京',
    period: '2022.09 - 至今',
    description: '研究方向：大语言模型与知识图谱的融合方法。导师：李教授。参与国家自然科学基金重点项目，提出基于知识增强的 LLM 推理框架。',
    tags: ['NLP', '大语言模型', '知识图谱'],
  },
  {
    id: 'edu2',
    category: 'education',
    title: '硕士 - 计算机科学与技术',
    organization: '北京大学',
    location: '北京',
    period: '2020.09 - 2022.06',
    description: '硕士期间专注于信息抽取与知识推理方向，毕业论文获评优秀硕士论文。GPA 3.9/4.0。',
    tags: ['信息抽取', '知识推理'],
  },
  {
    id: 'edu3',
    category: 'education',
    title: '学士 - 软件工程',
    organization: '浙江大学',
    location: '杭州',
    period: '2016.09 - 2020.06',
    description: '本科期间系统学习计算机基础，多次获得学业奖学金。大四期间在 ACL Workshop 发表首篇论文。',
    tags: ['软件工程', '计算机基础'],
  },
  {
    id: 'int1',
    category: 'internship',
    title: '算法研究实习生',
    organization: '字节跳动 - AI Lab',
    location: '北京',
    period: '2023.06 - 2023.12',
    description: '参与大语言模型训练优化项目，负责数据清洗与指令微调流程。将模型在 C-Eval 基准上提升了 8.2%。',
    tags: ['LLM', '指令微调', '数据工程'],
  },
  {
    id: 'int2',
    category: 'internship',
    title: 'NLP 算法实习生',
    organization: '阿里巴巴 - 达摩院',
    location: '杭州',
    period: '2022.03 - 2022.09',
    description: '负责智能客服对话系统的意图识别模块，优化模型推理速度 3 倍，准确率提升 5.1%。',
    tags: ['对话系统', '意图识别', '模型优化'],
  },
  {
    id: 'int3',
    category: 'internship',
    title: '研究实习生',
    organization: '微软亚洲研究院 (MSRA)',
    location: '北京',
    period: '2021.06 - 2021.12',
    description: '参与文档理解与信息抽取项目，提出跨模态文档布局理解方法，发表于 ACL 2022。',
    tags: ['文档理解', '多模态', '信息抽取'],
  },
  {
    id: 'aca1',
    category: 'academic',
    title: '研究项目：知识增强的大语言模型推理',
    organization: '国家自然科学基金重点项目',
    location: '北京',
    period: '2023.01 - 至今',
    description: '项目核心成员，负责知识检索增强与推理链构建模块。提出 KGR-LLM 框架，在多个推理基准上达到 SOTA。',
    tags: ['知识增强', '推理', 'RAG'],
  },
  {
    id: 'aca2',
    category: 'academic',
    title: '研究项目：多模态知识图谱构建',
    organization: '北京市自然科学基金',
    location: '北京',
    period: '2022.06 - 2024.06',
    description: '项目负责人之一，设计多模态实体对齐与关系抽取方法。构建了包含 50 万实体的多模态知识图谱。',
    tags: ['多模态', '知识图谱', '实体对齐'],
  },
  {
    id: 'aca3',
    category: 'academic',
    title: '访问学生',
    organization: '斯坦福大学 NLP Group',
    location: 'Stanford, CA',
    period: '2024.03 - 2024.09',
    description: '在 Christopher Manning 教授指导下开展大语言模型可解释性研究，完成一篇关于注意力头功能解耦的工作。',
    tags: ['可解释性', '注意力机制', '访问研究'],
  },
];

const CATEGORIES: { key: ExperienceCategory; label: string; icon: React.ElementType }[] = [
  { key: 'education', label: '教育经历', icon: GraduationCap },
  { key: 'internship', label: '实习经历', icon: Briefcase },
  { key: 'academic', label: '学术经历', icon: Microscope },
];

export default function ExperienceSection() {
  const [activeCategory, setActiveCategory] = useState<ExperienceCategory>('education');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredExperiences = EXPERIENCES.filter((e) => e.category === activeCategory);

  return (
    <section id="experience" className="py-20 sm:py-28 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 dortmund-stripe pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-1 bg-bvb-yellow rounded-full" />
            <span className="text-sm font-semibold text-nature-green uppercase tracking-widest">Experience</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">经历</h2>
        </motion.div>

        {/* Category Tabs - Horizontal Scrollable */}
        <div className="mb-10">
          <div className="flex gap-2 overflow-x-auto horizontal-scroll pb-2">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => {
                    setActiveCategory(cat.key);
                    setExpandedId(null);
                  }}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-bvb-yellow text-bvb-black shadow-sm'
                      : 'bg-card text-muted-foreground hover:text-foreground border border-border hover:border-nature-green/30'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Experience Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {filteredExperiences.map((exp, index) => {
              const isExpanded = expandedId === exp.id;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                    className="w-full text-left nature-card rounded-xl p-5 sm:p-6 bg-card cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      {/* Timeline dot */}
                      <div className="hidden sm:flex flex-col items-center pt-1">
                        <div className={`w-3 h-3 rounded-full border-2 transition-colors duration-200 ${
                          isExpanded ? 'bg-bvb-yellow border-bvb-yellow' : 'border-nature-green bg-nature-green/20'
                        }`} />
                        {index < filteredExperiences.length - 1 && (
                          <div className="w-0.5 h-8 bg-border mt-1" />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        {/* Header */}
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1">
                            <h3 className="text-base sm:text-lg font-semibold text-foreground leading-snug">
                              {exp.title}
                            </h3>
                            <p className="text-sm text-nature-green font-medium mt-0.5">{exp.organization}</p>
                          </div>
                          <ChevronRight
                            className={`w-5 h-5 text-muted-foreground shrink-0 mt-1 transition-transform duration-200 ${
                              isExpanded ? 'rotate-90' : ''
                            }`}
                          />
                        </div>

                        {/* Meta info */}
                        <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {exp.location}
                          </span>
                        </div>

                        {/* Expanded content */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pt-4 space-y-3">
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {exp.description}
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                  {exp.tags.map((tag) => (
                                    <span
                                      key={tag}
                                      className="px-2 py-0.5 text-xs rounded-md bg-nature-green/10 text-nature-green"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
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
