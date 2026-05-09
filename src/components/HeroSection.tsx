'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background: Dortmund-inspired diagonal stripes + nature gradient */}
      <div className="absolute inset-0">
        {/* Base gradient - natural green to cream */}
        <div className="absolute inset-0 bg-gradient-to-br from-nature-green/5 via-background to-nature-warm/30" />

        {/* Dortmund diagonal stripes */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            background: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 40px,
              #FDE100 40px,
              #FDE100 42px
            )`
          }}
        />

        {/* Decorative circles - like stadium lights */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 right-[15%] w-32 h-32 rounded-full bg-bvb-yellow/10 blur-2xl"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-32 left-[10%] w-40 h-40 rounded-full bg-nature-sage/20 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-1/2 right-[5%] w-24 h-24 rounded-full bg-bvb-yellow/5 blur-xl"
        />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle, #4A7C59 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Yellow accent line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-1 bg-bvb-yellow mx-auto mb-8 rounded-full"
        />

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-4 tracking-tight"
        >
          张{' '}明远
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl sm:text-2xl text-nature-green font-medium mb-6"
        >
          博士研究生 / 计算机科学
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10"
        >
          热爱探索人工智能与自然语言处理的前沿领域，
          <br className="hidden sm:block" />
          致力于将研究成果转化为实际应用价值。
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 bg-bvb-yellow text-bvb-black font-semibold rounded-lg hover:brightness-110 transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-bvb-yellow/20"
          >
            查看经历
          </button>
          <button
            onClick={() => document.getElementById('publications')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 border-2 border-nature-green text-nature-green font-semibold rounded-lg hover:bg-nature-green hover:text-white transition-all duration-200"
          >
            学术作品
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-1.5"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 bg-bvb-yellow rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
