'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative py-10 bg-bvb-black text-white overflow-hidden">
      {/* Dortmund stripe overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          background: `repeating-linear-gradient(-45deg, transparent, transparent 20px, #FDE100 20px, #FDE100 22px)`,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          {/* Logo & Quote */}
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-2.5 justify-center sm:justify-start mb-2">
              <div className="w-7 h-7 rounded-lg bg-bvb-yellow flex items-center justify-center">
                <span className="text-bvb-black font-bold text-xs">C</span>
              </div>
              <span className="font-serif font-bold text-sm">陈思琪</span>
            </div>
            <p className="text-[0.7rem] text-white/40 italic">&ldquo;Echte Liebe&rdquo; — 真正的爱，永不止步。</p>
          </div>

          {/* Quick links */}
          <div className="flex items-center gap-5 text-xs">
            {['关于', '经历', '校园', '荣誉', '技能', '联系'].map((label) => (
              <button
                key={label}
                onClick={() => {
                  const map: Record<string, string> = { '关于': 'profile', '经历': 'experience', '校园': 'campus', '荣誉': 'awards', '技能': 'skills', '联系': 'social' };
                  document.getElementById(map[label])?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-white/50 hover:text-bvb-yellow transition-colors"
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="my-5 h-px bg-white/8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[0.65rem] text-white/30">
          <span>&copy; {new Date().getFullYear()} 陈思琪. All rights reserved.</span>
          <motion.span
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Inspired by Signal Iduna Park
          </motion.span>
        </div>
      </div>
    </footer>
  );
}
