'use client';

import { motion } from 'framer-motion';
import { Wrench, Monitor, Palette, Languages } from 'lucide-react';

interface SkillGroup {
  category: string;
  icon: React.ReactNode;
  color: string;
  borderColor: string;
  bgColor: string;
  skills: string[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    category: '办公工具',
    icon: <Monitor className="w-4 h-4" />,
    color: 'text-nature-green',
    borderColor: 'border-nature-green/20',
    bgColor: 'bg-nature-green/8',
    skills: ['Excel (VLOOKUP/透视表)', 'Word', 'PowerPoint'],
  },
  {
    category: '编程 & 数据',
    icon: <Wrench className="w-4 h-4" />,
    color: 'text-bvb-black',
    borderColor: 'border-bvb-yellow/30',
    bgColor: 'bg-bvb-yellow/10',
    skills: ['Python', 'SQL'],
  },
  {
    category: '设计 & 创作',
    icon: <Palette className="w-4 h-4" />,
    color: 'text-nature-leaf',
    borderColor: 'border-nature-leaf/25',
    bgColor: 'bg-nature-sage/15',
    skills: ['可画 (Canva)', '剪映', '秀米', '135编辑器', '即梦AI'],
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
    <section id="skills" className="py-16 sm:py-24 relative bg-nature-warm/20">
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
              <Wrench className="w-4 h-4 text-nature-green" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold">技能 & 工具</h2>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 ml-12"
        >
          {SKILL_GROUPS.map((group) => (
            <motion.div
              key={group.category}
              variants={item}
              whileHover={{ y: -4 }}
              className={`mod-card border ${group.borderColor} bg-card p-5`}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className={`icon-badge ${group.bgColor} ${group.color}`}>
                  {group.icon}
                </div>
                <h3 className="font-semibold text-sm">{group.category}</h3>
              </div>
              <div className="space-y-2">
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.97 }}
                    className={`pill ${group.bgColor} ${group.color} border ${group.borderColor} cursor-default w-full justify-center py-1.5`}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
