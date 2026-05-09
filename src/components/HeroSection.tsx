'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, School, Sparkles } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function HeroSection() {
  return (
    <section id="profile" className="min-h-screen flex items-center pt-20 pb-12 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 dortmund-stripe" />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-morandi-rose/10 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.18, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="absolute bottom-20 -left-20 w-64 h-64 rounded-full bg-morandi-accent/12 blur-3xl"
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Avatar Card */}
          <motion.div variants={item} className="lg:col-span-4 lg:row-span-2">
            <div className="mod-card bg-card border border-border/50 p-6 h-full flex flex-col items-center justify-center text-center glow-pulse">
              <div className="w-36 h-36 rounded-2xl overflow-hidden border-4 border-morandi-rose/30 shadow-lg shadow-morandi-rose/10 mb-5">
                <Image src="/avatar.jpeg" alt="Vera LAU" width={144} height={144} className="w-full h-full object-cover" priority />
              </div>
              <h1 className="font-serif text-2xl font-bold text-foreground">Vera LAU</h1>
              <p className="text-sm text-morandi-accent font-medium mt-1">中山大学 · 博雅学院</p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                <span className="pill bg-morandi-rose/15 text-morandi-rose border border-morandi-rose/25">
                  <MapPin className="w-3 h-3" /> 广州
                </span>
                <span className="pill bg-morandi-accent/12 text-morandi-accent border border-morandi-accent/25">
                  <School className="w-3 h-3" /> 2023级
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-4 leading-relaxed max-w-[240px]">
                汉语言文学（博雅），热爱古典学与人文研究，擅长内容策划与文化传播。
              </p>
            </div>
          </motion.div>

          {/* Title Card */}
          <motion.div variants={item} className="lg:col-span-8">
            <div className="mod-card bg-morandi-rose border border-morandi-rose/30 p-6 sm:p-8 h-full flex flex-col justify-center">
              <div className="flex items-start justify-between">
                <div>
                  <motion.div initial={{ width: 0 }} animate={{ width: 48 }} transition={{ duration: 0.6, delay: 0.4 }} className="h-1 bg-white/25 rounded-full mb-4" />
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
                    古典学 · 人文研究
                    <br />
                    <span className="text-white/70">内容策划 & 品牌传播</span>
                  </h2>
                </div>
                <Sparkles className="w-8 h-8 text-white/20" />
              </div>
              <p className="text-sm text-white/75 mt-4 leading-relaxed max-w-lg">
                拥有雇主品牌、新媒体运营与活动策划的实战经验，善于结合热点进行内容创意。
                同时具备扎实的人文学术研究背景，专注于古典文学与跨文化比较，跨领域整合能力强。
              </p>
            </div>
          </motion.div>

          {/* Stats Row */}
          <motion.div variants={item} className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { value: '4.15', label: 'GPA / 5.00', color: 'bg-morandi-rose/12 text-morandi-rose border-morandi-rose/25' },
                { value: '2/14', label: '专业排名', color: 'bg-morandi-accent/12 text-morandi-accent border-morandi-accent/25' },
                { value: '90+', label: '推文产出', color: 'bg-morandi-blue/12 text-morandi-blue border-morandi-blue/25' },
                { value: '3', label: '段实习经历', color: 'bg-morandi-sand/20 text-morandi-warm border-morandi-sand/30' },
              ].map((stat) => (
                <div key={stat.label} className={`mod-card p-4 text-center border ${stat.color}`}>
                  <div className="text-xl font-bold">{stat.value}</div>
                  <div className="text-xs mt-0.5 opacity-70">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Language Card */}
          <motion.div variants={item} className="lg:col-span-4 lg:row-span-2">
            <div className="mod-card bg-card border border-border/50 p-5 h-full">
              <div className="flex items-center gap-2 mb-4">
                <div className="icon-badge bg-morandi-accent/12"><span className="text-lg">🌐</span></div>
                <h3 className="font-semibold text-sm">语言能力</h3>
              </div>
              <div className="space-y-3">
                {[
                  { lang: '粤语', level: '母语', pct: 100 },
                  { lang: '普通话', level: '二甲', pct: 95 },
                  { lang: '英语', level: 'CET-6 605', pct: 85 },
                ].map((l) => (
                  <div key={l.lang}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-medium">{l.lang}</span>
                      <span className="text-muted-foreground">{l.level}</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${l.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-morandi-accent to-morandi-rose"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-border/50">
                <div className="flex items-center gap-2 mb-3">
                  <div className="icon-badge bg-morandi-rose/12"><span className="text-lg">🎓</span></div>
                  <h3 className="font-semibold text-sm">教育</h3>
                </div>
                <div className="space-y-2">
                  <div className="p-2.5 rounded-lg bg-muted/50">
                    <p className="text-xs font-medium">中山大学 · 博雅学院</p>
                    <p className="text-xs text-muted-foreground">汉语言文学（博雅）· 2023-2027</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-morandi-blue/8 border border-morandi-blue/15">
                    <p className="text-xs font-medium text-morandi-blue">剑桥大学 · 克莱尔学院</p>
                    <p className="text-xs text-muted-foreground">古典学暑期课程 · 2025.08</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Core Strengths Card */}
          <motion.div variants={item} className="lg:col-span-8">
            <div className="mod-card bg-card border border-border/50 p-5 h-full">
              <div className="flex items-center gap-2 mb-4">
                <div className="icon-badge bg-morandi-amber/15"><span className="text-lg">✨</span></div>
                <h3 className="font-semibold text-sm">核心竞争力</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {['内容策划', '社交媒体运营', '品牌传播', '学术研究', '古典学', '跨文化传播'].map((skill) => (
                  <motion.div key={skill} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    className="pill bg-morandi-accent/8 text-morandi-accent border border-morandi-accent/15 cursor-default justify-center py-2">
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
