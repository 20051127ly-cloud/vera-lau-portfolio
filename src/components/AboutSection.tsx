'use client';

import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Briefcase, BookOpen } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-1 bg-bvb-yellow rounded-full" />
            <span className="text-sm font-semibold text-nature-green uppercase tracking-widest">About</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">关于我</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Avatar & Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="relative">
              {/* Avatar placeholder with Dortmund yellow border */}
              <div className="w-48 h-48 mx-auto lg:mx-0 rounded-2xl overflow-hidden border-4 border-bvb-yellow/30 shadow-lg shadow-bvb-yellow/10">
                <div className="w-full h-full bg-gradient-to-br from-nature-green/20 to-bvb-yellow/20 flex items-center justify-center">
                  <span className="text-6xl font-serif font-bold text-nature-green/60">M</span>
                </div>
              </div>

              {/* Quick info cards */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border/50">
                  <MapPin className="w-4 h-4 text-nature-green shrink-0" />
                  <span className="text-sm text-muted-foreground">北京，中国</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border/50">
                  <GraduationCap className="w-4 h-4 text-nature-green shrink-0" />
                  <span className="text-sm text-muted-foreground">计算机科学与技术 博士在读</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border/50">
                  <Briefcase className="w-4 h-4 text-nature-green shrink-0" />
                  <span className="text-sm text-muted-foreground">人工智能 & 自然语言处理</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border/50">
                  <BookOpen className="w-4 h-4 text-nature-green shrink-0" />
                  <span className="text-sm text-muted-foreground">已发表 SCI/EI 论文 12 篇</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-foreground/90">
                你好！我是<span className="font-semibold text-nature-green">张明远</span>，
                目前就读于清华大学计算机科学与技术系，博士三年级。我的研究方向主要集中在
                <span className="text-bvb-black bg-bvb-yellow/30 px-1 rounded">大语言模型</span>、
                <span className="text-bvb-black bg-bvb-yellow/30 px-1 rounded">知识图谱</span>和
                <span className="text-bvb-black bg-bvb-yellow/30 px-1 rounded">多模态学习</span>领域。
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                在学术研究之余，我热衷于将理论成果应用于实际场景。曾在多家科技公司实习，
                参与过推荐系统、智能对话和文档理解等工业级项目。我相信，好的研究应该既能推动学术前沿，
                也能服务社会需求。
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                生活中，我是一个足球迷——尤其钟爱多特蒙德俱乐部。黄黑配色不仅是球队的象征，
                更代表着一种永不言弃的精神。正如 Signal Iduna Park（威斯特法伦球场）的南看台，
                热爱与坚持永远是最动人的力量。
              </p>

              {/* Interest Tags */}
              <div className="pt-4">
                <p className="text-sm font-medium text-foreground mb-3">研究兴趣</p>
                <div className="flex flex-wrap gap-2">
                  {['大语言模型', '知识图谱', '多模态学习', '信息抽取', '对话系统', '文本生成'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-xs font-medium rounded-full bg-nature-green/10 text-nature-green border border-nature-green/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
