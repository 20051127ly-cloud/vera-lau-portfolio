'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, BookOpen, Award, Filter } from 'lucide-react';

type PubType = 'all' | 'conference' | 'journal' | 'preprint';

interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: 'conference' | 'journal' | 'preprint';
  highlight?: boolean;
  tags: string[];
  abstract: string;
  link?: string;
}

const PUBLICATIONS: Publication[] = [
  {
    id: 'p1',
    title: 'KGR-LLM: Knowledge-Grounded Reasoning with Large Language Models',
    authors: 'Mingyuan Zhang, Wei Li, Xiaochen Liu, et al.',
    venue: 'ACL 2024',
    year: 2024,
    type: 'conference',
    highlight: true,
    tags: ['知识增强', '推理', '大语言模型'],
    abstract: '提出知识检索增强的大语言模型推理框架 KGR-LLM，通过结构化知识图谱指导 LLM 的推理链生成，在多个推理基准上达到 SOTA 表现。',
    link: '#',
  },
  {
    id: 'p2',
    title: 'Cross-Modal Document Understanding with Layout-Aware Pre-training',
    authors: 'Mingyuan Zhang, Hao Wang, Jie Chen, et al.',
    venue: 'ACL 2022',
    year: 2022,
    type: 'conference',
    highlight: true,
    tags: ['文档理解', '多模态', '预训练'],
    abstract: '提出跨模态文档布局感知预训练方法，融合文本、图像和布局信息进行端到端文档理解，在 DocVQA 等任务上显著超越基线。',
    link: '#',
  },
  {
    id: 'p3',
    title: 'MultiModal-KE: Multimodal Knowledge Extraction with Vision-Language Models',
    authors: 'Mingyuan Zhang, Yufei Wang, Lei Zhang, et al.',
    venue: 'NeurIPS 2023',
    year: 2023,
    type: 'conference',
    tags: ['多模态', '知识抽取', '视觉语言模型'],
    abstract: '利用视觉语言模型进行多模态知识抽取，同时从文本和图像中识别实体与关系，构建了首个大规模多模态知识抽取数据集。',
    link: '#',
  },
  {
    id: 'p4',
    title: 'Attention Head Disentanglement in Large Language Models',
    authors: 'Mingyuan Zhang, Christopher Manning, et al.',
    venue: 'ICLR 2025 (Under Review)',
    year: 2025,
    type: 'preprint',
    tags: ['可解释性', '注意力机制', 'LLM'],
    abstract: '对大语言模型中的注意力头进行功能解耦分析，发现不同注意力头承担了可区分的语法与语义角色，提出基于功能聚类的高效剪枝方法。',
  },
  {
    id: 'p5',
    title: 'A Survey on Knowledge-Enhanced Language Models: Methods, Applications, and Challenges',
    authors: 'Mingyuan Zhang, Wei Li, et al.',
    venue: 'ACM Computing Surveys',
    year: 2024,
    type: 'journal',
    tags: ['综述', '知识增强', '语言模型'],
    abstract: '系统综述了知识增强语言模型的方法体系，涵盖知识检索、知识注入、知识融合三大范式，梳理了该领域的关键挑战与未来方向。',
    link: '#',
  },
  {
    id: 'p6',
    title: 'Efficient Intent Detection for Task-Oriented Dialogue via Distillation',
    authors: 'Mingyuan Zhang, Kai Sun, et al.',
    venue: 'EMNLP 2022',
    year: 2022,
    type: 'conference',
    tags: ['对话系统', '意图识别', '模型蒸馏'],
    abstract: '提出面向任务型对话的高效意图识别框架，通过知识蒸馏将大型预训练模型的意图理解能力迁移到轻量级模型中，推理速度提升 3 倍。',
    link: '#',
  },
];

const PUB_TYPES: { key: PubType; label: string }[] = [
  { key: 'all', label: '全部' },
  { key: 'conference', label: '会议论文' },
  { key: 'journal', label: '期刊论文' },
  { key: 'preprint', label: '预印本' },
];

export default function PublicationsSection() {
  const [activeType, setActiveType] = useState<PubType>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredPubs = PUBLICATIONS.filter(
    (p) => activeType === 'all' || p.type === activeType
  );

  const getTypeColor = (type: Publication['type']) => {
    switch (type) {
      case 'conference': return 'bg-nature-green/10 text-nature-green border-nature-green/20';
      case 'journal': return 'bg-bvb-yellow/10 text-bvb-black border-bvb-yellow/20';
      case 'preprint': return 'bg-muted text-muted-foreground border-border';
    }
  };

  const getTypeLabel = (type: Publication['type']) => {
    switch (type) {
      case 'conference': return '会议';
      case 'journal': return '期刊';
      case 'preprint': return '预印本';
    }
  };

  return (
    <section id="publications" className="py-20 sm:py-28 relative bg-nature-warm/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
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
            <span className="text-sm font-semibold text-nature-green uppercase tracking-widest">Publications</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">学术作品</h2>
          <p className="text-muted-foreground mt-3">代表性论文与学术成果，点击展开查看摘要</p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="mb-8 flex items-center gap-2 overflow-x-auto horizontal-scroll pb-2">
          <Filter className="w-4 h-4 text-muted-foreground shrink-0" />
          {PUB_TYPES.map((t) => (
            <button
              key={t.key}
              onClick={() => {
                setActiveType(t.key);
                setExpandedId(null);
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                activeType === t.key
                  ? 'bg-bvb-yellow text-bvb-black'
                  : 'bg-card text-muted-foreground border border-border hover:border-nature-green/30'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Publication List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeType}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-3"
          >
            {filteredPubs.map((pub, index) => {
              const isExpanded = expandedId === pub.id;
              return (
                <motion.div
                  key={pub.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : pub.id)}
                    className={`w-full text-left nature-card rounded-xl p-5 sm:p-6 bg-card cursor-pointer ${
                      pub.highlight ? 'border-l-4 border-l-bvb-yellow' : ''
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <BookOpen className="w-5 h-5 text-nature-green shrink-0 mt-0.5 hidden sm:block" />
                      <div className="flex-1 min-w-0">
                        {/* Title */}
                        <h3 className="text-sm sm:text-base font-semibold text-foreground leading-snug">
                          {pub.title}
                          {pub.highlight && (
                            <Award className="w-3.5 h-3.5 inline-block ml-2 text-bvb-yellow" />
                          )}
                        </h3>

                        {/* Authors */}
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                          {pub.authors}
                        </p>

                        {/* Venue & Meta */}
                        <div className="flex flex-wrap items-center gap-2 mt-2">
                          <span className={`px-2 py-0.5 text-xs rounded-md border ${getTypeColor(pub.type)}`}>
                            {getTypeLabel(pub.type)}
                          </span>
                          <span className="text-xs font-medium text-foreground">{pub.venue}</span>
                          <span className="text-xs text-muted-foreground">{pub.year}</span>
                        </div>

                        {/* Expanded Abstract */}
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
                                  {pub.abstract}
                                </p>
                                <div className="flex flex-wrap items-center gap-1.5">
                                  {pub.tags.map((tag) => (
                                    <span
                                      key={tag}
                                      className="px-2 py-0.5 text-xs rounded-md bg-nature-green/10 text-nature-green"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                                {pub.link && (
                                  <a
                                    href={pub.link}
                                    className="inline-flex items-center gap-1 text-xs text-nature-green hover:text-nature-leaf transition-colors"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <ExternalLink className="w-3 h-3" />
                                    查看论文
                                  </a>
                                )}
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

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            { label: '发表论文', value: '12', suffix: '篇' },
            { label: '会议论文', value: '8', suffix: '篇' },
            { label: '引用次数', value: '260+', suffix: '' },
            { label: 'H-index', value: '8', suffix: '' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-xl bg-card border border-border/50">
              <div className="text-2xl font-bold text-foreground">
                {stat.value}<span className="text-sm font-normal text-muted-foreground">{stat.suffix}</span>
              </div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
