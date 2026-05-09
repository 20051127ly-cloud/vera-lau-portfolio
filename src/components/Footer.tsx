'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 bg-nature-green text-white overflow-hidden">
      {/* Dortmund stripe overlay */}
      <div className="absolute inset-0 opacity-5"
        style={{
          background: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 20px,
            #FDE100 20px,
            #FDE100 22px
          )`
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo & Quote */}
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-2 justify-center sm:justify-start mb-2">
              <div className="w-6 h-6 rounded-sm bg-bvb-yellow flex items-center justify-center">
                <span className="text-bvb-black font-bold text-xs">P</span>
              </div>
              <span className="font-serif font-bold">张明远</span>
            </div>
            <p className="text-xs text-white/60 italic">
              &ldquo;Echte Liebe&rdquo; — 真正的爱，永不止步。
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6 text-sm">
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-white/70 hover:text-bvb-yellow transition-colors"
            >
              关于
            </button>
            <button
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-white/70 hover:text-bvb-yellow transition-colors"
            >
              经历
            </button>
            <button
              onClick={() => document.getElementById('publications')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-white/70 hover:text-bvb-yellow transition-colors"
            >
              作品
            </button>
            <button
              onClick={() => document.getElementById('social')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-white/70 hover:text-bvb-yellow transition-colors"
            >
              社交
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 h-px bg-white/10" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <span>&copy; {currentYear} 张明远. All rights reserved.</span>
          <motion.span
            initial={{ opacity: 0.4 }}
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Inspired by Signal Iduna Park 🏟️
          </motion.span>
        </div>
      </div>
    </footer>
  );
}
