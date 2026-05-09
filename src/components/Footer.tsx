'use client';

import { motion } from 'framer-motion';

const QUICK_LINKS = [
  { label: '关于', id: 'profile' },
  { label: '学术', id: 'academic' },
  { label: '实习', id: 'experience' },
  { label: '校园', id: 'campus' },
  { label: '荣誉', id: 'awards' },
  { label: '技能', id: 'skills' },
  { label: '联系', id: 'social' },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="bg-foreground text-background py-10 sm:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="font-serif text-lg font-bold">Vera LAU</h3>
            <p className="text-xs text-background/50 mt-1">中山大学 · 博雅学院 · 汉语言文学</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {QUICK_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-xs text-background/50 hover:text-morandi-rose transition-colors px-2 py-1"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-background/10 text-center">
          <p className="text-xs text-background/30 italic font-serif">
            &ldquo;Echte Liebe&rdquo; — 真正的爱，是对知识的不懈追求
          </p>
          <p className="text-[0.65rem] text-background/20 mt-3">
            Built with Morandi colors & Dortmund spirit
          </p>
        </div>
      </div>
    </footer>
  );
}
