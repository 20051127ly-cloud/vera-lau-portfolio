'use client';

import { motion } from 'framer-motion';
import { Trophy, Star, BookOpen, Languages, Award } from 'lucide-react';

interface AwardItem {
  icon: React.ReactNode;
  text: string;
  color: string;
}

const SCHOLARSHIP_AWARDS: AwardItem[] = [
  { icon: <Award className="w-3.5 h-3.5" />, text: '2023-2024学年中山大学优秀学生奖学金（三等奖）', color: 'bg-morandi-rose/10 text-morandi-rose border-morandi-rose/20' },
  { icon: <Award className="w-3.5 h-3.5" />, text: '2024-2025学年中山大学优秀学生奖学金（三等奖）', color: 'bg-morandi-rose/10 text-morandi-rose border-morandi-rose/20' },
  { icon: <Star className="w-3.5 h-3.5" />, text: '2023-2024学年中山大学专项奖学金笃行骨干奖', color: 'bg-morandi-accent/10 text-morandi-accent border-morandi-accent/20' },
  { icon: <Star className="w-3.5 h-3.5" />, text: '2025年中山大学优秀学生社团骨干', color: 'bg-morandi-accent/10 text-morandi-accent border-morandi-accent/20' },
  { icon: <Star className="w-3.5 h-3.5" />, text: '2024年中山大学勤工助学先进个人', color: 'bg-morandi-accent/10 text-morandi-accent border-morandi-accent/20' },
];

const ACADEMIC_AWARDS: AwardItem[] = [
  { icon: <BookOpen className="w-3.5 h-3.5" />, text: '南京大学文学院520本硕博联动本科生学术论文报告会获奖（《她与共和：论普鲁塔克对波西娅的形象塑造》）', color: 'bg-morandi-blue/10 text-morandi-blue border-morandi-blue/20' },
  { icon: <BookOpen className="w-3.5 h-3.5" />, text: '第四届社科法学书评、影评与翻译大赛获奖（《"永恒的挑衅"：论福柯的权力与战争》）', color: 'bg-morandi-blue/10 text-morandi-blue border-morandi-blue/20' },
];

const LANGUAGE_SCORES = [
  { label: 'CET-4', score: '614', color: 'from-morandi-accent to-morandi-rose' },
  { label: 'CET-6', score: '605', color: 'from-morandi-rose to-morandi-lavender' },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function AwardsSection() {
  return (
    <section id="awards" className="py-16 sm:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="icon-badge bg-morandi-amber/15">
              <Trophy className="w-4 h-4 text-morandi-amber" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold">奖项荣誉</h2>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-5 ml-12"
        >
          {/* Scholarship Awards */}
          <motion.div variants={item}>
            <div className="mod-card bg-card border border-border/50 p-5 h-full">
              <div className="flex items-center gap-2 mb-4">
                <div className="icon-badge bg-morandi-rose/12"><span className="text-lg">🏅</span></div>
                <h3 className="font-semibold text-sm">奖学金 & 荣誉</h3>
              </div>
              <div className="space-y-2">
                {SCHOLARSHIP_AWARDS.map((award, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02, x: 4 }}
                    className={`flex items-center gap-2.5 p-2.5 rounded-lg border ${award.color} transition-colors`}
                  >
                    {award.icon}
                    <span className="text-xs leading-snug">{award.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Academic Awards + English */}
          <motion.div variants={item} className="space-y-5">
            <div className="mod-card bg-card border border-border/50 p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="icon-badge bg-morandi-blue/12"><span className="text-lg">📝</span></div>
                <h3 className="font-semibold text-sm">学术获奖</h3>
              </div>
              <div className="space-y-2">
                {ACADEMIC_AWARDS.map((award, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02, x: 4 }}
                    className={`flex items-center gap-2.5 p-2.5 rounded-lg border ${award.color} transition-colors`}
                  >
                    {award.icon}
                    <span className="text-xs leading-snug">{award.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* English Scores */}
            <div className="mod-card bg-card border border-border/50 p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="icon-badge bg-morandi-accent/12"><Languages className="w-4 h-4 text-morandi-accent" /></div>
                <h3 className="font-semibold text-sm">英语成绩</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {LANGUAGE_SCORES.map((lang) => (
                  <div key={lang.label} className="text-center p-3 rounded-xl bg-muted/50">
                    <div className="text-lg font-bold bg-gradient-to-r bg-clip-text text-transparent" style={{ backgroundImage: `var(--tw-gradient-stops)` }}>
                      <span className={`bg-gradient-to-r ${lang.color} bg-clip-text text-transparent`}>{lang.score}</span>
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5">{lang.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                <span className="pill bg-morandi-accent/8 text-morandi-accent border border-morandi-accent/15">普通话（二甲）</span>
                <span className="pill bg-morandi-rose/8 text-morandi-rose border border-morandi-rose/15">粤语（母语）</span>
                <span className="pill bg-morandi-blue/8 text-morandi-blue border border-morandi-blue/15">拉丁语（可阅读）</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
