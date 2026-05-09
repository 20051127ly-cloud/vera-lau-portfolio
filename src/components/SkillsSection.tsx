'use client';

import { motion } from 'framer-motion';
import { Wrench, FileSpreadsheet, Code, Palette } from 'lucide-react';

interface SkillGroup {
  icon: React.ReactNode;
  title: string;
  color: string;
  skills: string[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    icon: <FileSpreadsheet className="w-4 h-4" />,
    title: '办公工具',
    color: 'border-t-2 border-t-morandi-rose',
    skills: ['Excel (VLOOKUP、数据透视表)', 'Word', 'PowerPoint'],
  },
  {
    icon: <Code className="w-4 h-4" />,
    title: '技术工具',
    color: 'border-t-2 border-t-morandi-accent',
    skills: ['Python', 'SQL', 'ChatGPT / Deepseek'],
  },
  {
    icon: <Palette className="w-4 h-4" />,
    title: '设计 & 媒体',
    color: 'border-t-2 border-t-morandi-blue',
    skills: ['可画', '剪映', '秀米', '135编辑器', '即梦AI'],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-24 relative bg-morandi-cream-deep/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="icon-badge bg-morandi-sand/20">
              <Wrench className="w-4 h-4 text-morandi-warm" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold">技能工具</h2>
            <p className="text-xs text-muted-foreground/60 mt-1">点击卡片展开详情</p>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 ml-12"
        >
          {SKILL_GROUPS.map((group) => (
            <motion.div key={group.title} variants={item}>
              <div className={`mod-card bg-card border border-border/50 p-5 h-full ${group.color}`}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="icon-badge bg-muted/80">{group.icon}</div>
                  <h3 className="font-semibold text-sm">{group.title}</h3>
                </div>
                <div className="space-y-1.5">
                  {group.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{ x: 6, backgroundColor: 'rgba(var(--morandi-cream-rgb), 0.5)' }}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/30 text-xs cursor-default transition-colors"
                    >
                      <span className="w-1 h-1 rounded-full bg-morandi-accent shrink-0" />
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
