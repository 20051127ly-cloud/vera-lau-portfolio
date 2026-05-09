'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, ChevronDown, Calendar } from 'lucide-react';

interface ExpItem {
  id: string;
  title: string;
  org: string;
  period: string;
  color: string;
  tags: string[];
  bullets: string[];
}

const EXPERIENCES: ExpItem[] = [
  {
    id: 'carlsberg',
    title: '人员与文化部实习生',
    org: '嘉士伯中国总部',
    period: '2026.01 - 2026.03',
    color: 'border-l-4 border-l-morandi-rose',
    tags: ['雇主品牌', '社媒运营', '招聘'],
    bullets: [
      '雇主品牌社交媒体内容策划：负责"嘉士伯中国招聘"公众号及小红书账号内容策划。结合小红书热点撰写文案，参与女性招聘月、北欧企业文化等专题策划头脑风暴，输出"北欧外企"传播创意（已被采纳为全平台宣传slogan），结合旗下"风花雪月"啤酒品牌活动进行文稿撰写。任职期间账号粉丝增长5%，账号最高阅读量3w+。',
      '校招&社招招聘：社招端根据岗位画像在BOSS、智联等平台完成候选人寻访（Sourcing），日均产出推荐邮件5封以上；校招独立负责Marketing、Sales、HR方向实习生招聘，撰写岗位JD、电话沟通候选人，招聘完成率100%。',
    ],
  },
  {
    id: 'library',
    title: '活动策划岗实习生',
    org: '广州少年儿童图书馆',
    period: '2025.01 - 2025.03',
    color: 'border-l-4 border-l-morandi-accent',
    tags: ['文化IP策划', '内容分发', '活动运营'],
    bullets: [
      '传统文化IP化内容策划：挖掘元宵节、植树节节点流量，创新策划"绘本+汉服+非遗游戏"沉浸式阅读体验，将静态书展升级为可参与的文化场景，单场活动家庭参与率超50组。策划图书馆夹层节日专题图书展览，实现从"图书借阅"到"文化体验"的用户价值升级。',
      '多渠道内容分发与转化：负责活动全流程内容输出，包括预热海报文案、现场摄影记录及公众号/地方报刊深度稿件优化标题与书写策略，发布《"植"此青绿》专题图书推荐、元宵节活动回顾内容等4篇。',
    ],
  },
  {
    id: 'bilibili',
    title: '宣传组成员',
    org: 'Bilibili 新国辩',
    period: '2025.07 - 2025.08',
    color: 'border-l-4 border-l-morandi-blue',
    tags: ['新媒体运营', '数据分析', '内容创作'],
    bullets: [
      '新媒体平台运营：参与bilibili头部知识类IP"新国辩"公众号、微博图文宣传，累计产出比赛海报32张，实时进行微博/公众号更新图文64条，总阅读量5万+。进行最佳辩手、最佳队伍访谈，整理"辩论金句"、专访内容5篇。',
      '数据驱动的用户洞察：运用Excel对辩论内容进行数据分析，运用"选手输出效率"模型，识别高潜力辩手特征，为后续赛事内容（全程最佳辩手奖项、优秀辩手采访等）策划提供数据支持。',
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

  return (
    <section id="experience" className="py-16 sm:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="icon-badge bg-morandi-accent/15">
              <Briefcase className="w-4 h-4 text-morandi-accent" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold">实习经历</h2>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-4 ml-12"
        >
          {EXPERIENCES.map((exp) => {
            const isExpanded = expandedId === exp.id;
            return (
              <motion.div key={exp.id} variants={item}>
                <button
                  onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                  className={`w-full text-left mod-card bg-card border border-border/50 p-5 sm:p-6 cursor-pointer ${exp.color} bounce-click`}
                >
                  <div className="flex items-start gap-3">
                    <div className="icon-badge bg-morandi-accent/8 text-morandi-accent shrink-0">
                      <Briefcase className="w-4 h-4" />
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
                              <span className="text-morandi-accent mt-0.5 shrink-0">●</span>
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
