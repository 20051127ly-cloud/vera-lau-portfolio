'use client';

import { motion } from 'framer-motion';
import { Award, Star, Trophy } from 'lucide-react';

const AWARDS = [
  {
    title: '中山大学优秀学生奖学金',
    period: '2023-24 / 2024-25学年',
    icon: '🏅',
    type: 'scholarship' as const,
  },
  {
    title: '中山大学优秀学生干部',
    period: '2024-25学年',
    icon: '🎖️',
    type: 'honor' as const,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function AwardsSection() {
  return (
    <section id="awards" className="py-16 sm:py-24 relative">
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
              <Trophy className="w-4 h-4 text-bvb-black" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold">荣誉 & 奖项</h2>
          </div>
        </motion.div>

        {/* Awards grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 ml-12"
        >
          {AWARDS.map((award) => (
            <motion.div
              key={award.title}
              variants={item}
              whileHover={{ scale: 1.03, rotate: -0.5 }}
              whileTap={{ scale: 0.97 }}
              className="mod-card bg-gradient-to-br from-bvb-yellow/10 to-bvb-yellow/5 border border-bvb-yellow/25 p-5 cursor-default"
            >
              <div className="flex items-center gap-3">
                <div className="text-3xl">{award.icon}</div>
                <div>
                  <h3 className="font-semibold text-sm text-foreground">{award.title}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{award.period}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* CET scores as mini cards */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.03 }}
            className="mod-card bg-card border border-border/50 p-5 cursor-default"
          >
            <div className="flex items-center gap-3">
              <div className="icon-badge bg-nature-green/10">
                <Star className="w-4 h-4 text-nature-green" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">英语水平</h3>
                <div className="flex gap-3 mt-1">
                  <span className="pill bg-bvb-yellow/10 text-bvb-black border border-bvb-yellow/20">
                    CET-4 <strong>625</strong>
                  </span>
                  <span className="pill bg-nature-green/10 text-nature-green border border-nature-green/20">
                    CET-6 <strong>605</strong>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
