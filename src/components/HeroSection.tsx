'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, School, Sparkles } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function HeroSection() {
  return (
    <section id="profile" className="min-h-screen flex items-center pt-20 pb-12 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 dortmund-stripe" />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-bvb-yellow/8 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="absolute bottom-20 -left-20 w-64 h-64 rounded-full bg-nature-sage/15 blur-3xl"
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-12 gap-5"
        >
          {/* === Avatar Card (tall) === */}
          <motion.div variants={item} className="lg:col-span-4 lg:row-span-2">
            <div className="mod-card bg-card border border-border/50 p-6 h-full flex flex-col items-center justify-center text-center glow-pulse">
              <div className="w-36 h-36 rounded-2xl overflow-hidden border-4 border-bvb-yellow/40 shadow-lg shadow-bvb-yellow/10 mb-5">
                <Image
                  src="/avatar.jpeg"
                  alt="陈思琪"
                  width={144}
                  height={144}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <h1 className="font-serif text-2xl font-bold text-foreground">陈思琪</h1>
              <p className="text-sm text-nature-green font-medium mt-1">中山大学 · 博雅学院</p>

              {/* Quick info pills */}
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                <span className="pill bg-bvb-yellow/15 text-bvb-black border border-bvb-yellow/25">
                  <MapPin className="w-3 h-3" /> 广州
                </span>
                <span className="pill bg-nature-green/10 text-nature-green border border-nature-green/20">
                  <School className="w-3 h-3" /> 大三
                </span>
              </div>

              {/* Mini bio */}
              <p className="text-xs text-muted-foreground mt-4 leading-relaxed max-w-[240px]">
                热爱内容策划与文化传播，擅长用文字与视觉叙事连接品牌与用户。
              </p>
            </div>
          </motion.div>

          {/* === Name & Title Card === */}
          <motion.div variants={item} className="lg:col-span-8">
            <div className="mod-card bg-bvb-yellow border border-bvb-yellow/50 p-6 sm:p-8 h-full flex flex-col justify-center">
              <div className="flex items-start justify-between">
                <div>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 48 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="h-1 bg-bvb-black/20 rounded-full mb-4"
                  />
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-bvb-black leading-tight">
                    内容策划 · 品牌传播
                    <br />
                    <span className="text-bvb-black/60">文化运营</span>
                  </h2>
                </div>
                <Sparkles className="w-8 h-8 text-bvb-black/20" />
              </div>
              <p className="text-sm text-bvb-black/70 mt-4 leading-relaxed max-w-lg">
                拥有雇主品牌、新媒体运营与活动策划的实战经验，善于结合热点进行内容创意，
                从品牌传播到社群运营均有深度实践。同时具备人文学术研究背景，跨领域整合能力强。
              </p>
            </div>
          </motion.div>

          {/* === Stats Row === */}
          <motion.div variants={item} className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { value: '3', label: '段实习经历', color: 'bg-nature-green/10 text-nature-green border-nature-green/20' },
                { value: '2', label: '校园职务', color: 'bg-bvb-yellow/15 text-bvb-black border-bvb-yellow/25' },
                { value: '90+', label: '推文产出', color: 'bg-nature-sage/20 text-nature-green border-nature-sage/30' },
                { value: '5w+', label: '总阅读量', color: 'bg-nature-warm text-bvb-black border-nature-sand/50' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={`mod-card p-4 text-center border ${stat.color}`}
                >
                  <div className="text-xl font-bold">{stat.value}</div>
                  <div className="text-xs mt-0.5 opacity-70">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* === Language Card === */}
          <motion.div variants={item} className="lg:col-span-4 lg:row-span-2">
            <div className="mod-card bg-card border border-border/50 p-5 h-full">
              <div className="flex items-center gap-2 mb-4">
                <div className="icon-badge bg-nature-green/10">
                  <span className="text-lg">🌐</span>
                </div>
                <h3 className="font-semibold text-sm">语言能力</h3>
              </div>
              <div className="space-y-3">
                {[
                  { lang: '粤语', level: '母语', pct: 100 },
                  { lang: '普通话', level: '流利', pct: 95 },
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
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded-full bg-gradient-to-r from-nature-green to-bvb-yellow"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-border/50">
                <div className="flex items-center gap-2 mb-3">
                  <div className="icon-badge bg-bvb-yellow/10">
                    <span className="text-lg">🎓</span>
                  </div>
                  <h3 className="font-semibold text-sm">教育</h3>
                </div>
                <div className="space-y-2">
                  <div className="p-2.5 rounded-lg bg-muted/50">
                    <p className="text-xs font-medium">中山大学 · 博雅学院</p>
                    <p className="text-xs text-muted-foreground">2022.09 - 2026.06</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* === Core Strengths Card === */}
          <motion.div variants={item} className="lg:col-span-8">
            <div className="mod-card bg-card border border-border/50 p-5 h-full">
              <div className="flex items-center gap-2 mb-4">
                <div className="icon-badge bg-bvb-yellow/10">
                  <span className="text-lg">✨</span>
                </div>
                <h3 className="font-semibold text-sm">核心竞争力</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  '内容策划', '社交媒体运营', '品牌传播',
                  '活动策划', '数据分析', '跨文化传播',
                ].map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="pill bg-nature-green/8 text-nature-green border border-nature-green/15 cursor-default justify-center py-2"
                  >
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
