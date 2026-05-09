'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { id: 'profile', label: '关于', emoji: '👋' },
  { id: 'academic', label: '学术', emoji: '📜' },
  { id: 'experience', label: '实习', emoji: '💼' },
  { id: 'campus', label: '校园', emoji: '🎓' },
  { id: 'awards', label: '荣誉', emoji: '🏆' },
  { id: 'skills', label: '技能', emoji: '⚡' },
  { id: 'social', label: '联系', emoji: '📬' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('profile');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
      const sections = NAV_ITEMS.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.03)] border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 group bounce-click"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="w-9 h-9 rounded-xl bg-morandi-rose flex items-center justify-center shadow-sm shadow-morandi-rose/30">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-serif font-bold text-foreground group-hover:text-morandi-accent transition-colors">Vera LAU</span>
              <span className="text-xs text-muted-foreground ml-2">Portfolio</span>
            </div>
          </motion.button>

          <div className="hidden md:flex items-center gap-1.5 bg-card/60 backdrop-blur-sm rounded-2xl px-2 py-1.5 border border-border/40">
            {NAV_ITEMS.map((navItem) => {
              const isActive = activeSection === navItem.id;
              return (
                <button
                  key={navItem.id}
                  onClick={() => scrollToSection(navItem.id)}
                  className={`relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-colors duration-200 bounce-click ${
                    isActive ? 'text-white' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navPill"
                      className="absolute inset-0 bg-morandi-rose rounded-xl"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 text-sm">{navItem.emoji}</span>
                  <span className="relative z-10">{navItem.label}</span>
                </button>
              );
            })}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl hover:bg-muted transition-colors bounce-click"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-5 flex flex-col justify-center items-center gap-1.5">
              <motion.span animate={isMobileMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }} className="w-5 h-[2px] bg-foreground block rounded-full" />
              <motion.span animate={isMobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }} className="w-5 h-[2px] bg-foreground block rounded-full" />
              <motion.span animate={isMobileMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }} className="w-5 h-[2px] bg-foreground block rounded-full" />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/50 overflow-hidden"
          >
            <div className="px-4 py-3 grid grid-cols-4 gap-2">
              {NAV_ITEMS.map((navItem) => (
                <button
                  key={navItem.id}
                  onClick={() => scrollToSection(navItem.id)}
                  className={`flex flex-col items-center gap-1 p-3 rounded-xl text-xs font-medium transition-all bounce-click ${
                    activeSection === navItem.id
                      ? 'bg-morandi-rose text-white'
                      : 'text-muted-foreground hover:bg-muted'
                  }`}
                >
                  <span className="text-lg">{navItem.emoji}</span>
                  {navItem.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
