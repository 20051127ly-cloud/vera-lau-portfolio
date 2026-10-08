'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, m } from 'framer-motion';
import { NAV_ITEMS } from '@/data/navigation';
import ThemeToggle from '@/components/ThemeToggle';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('profile');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // 以 IntersectionObserver 替代逐帧 getBoundingClientRect，避免滚动掉帧
    const observer = new IntersectionObserver(
      (entries) => {
        const best = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (best) setActiveSection(best.target.id);
      },
      { rootMargin: '-64px 0px -55% 0px', threshold: [0.15, 0.4, 0.75, 1] },
    );

    const elements = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    elements.forEach((el) => observer.observe(el));

    const onScroll = () => setIsScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <m.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      aria-label="主导航"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.03)] border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <m.a
            href="#profile"
            className="flex items-center gap-2.5 group bounce-click"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="w-9 h-9 rounded-xl bg-morandi-rose flex items-center justify-center shadow-sm shadow-morandi-rose/30">
              <span className="text-white font-bold text-sm" aria-hidden>
                V
              </span>
            </div>
            <span className="hidden sm:flex items-baseline">
              <span className="font-serif font-bold text-foreground group-hover:text-morandi-accent transition-colors">
                Vera LAU
              </span>
              <span className="text-xs text-muted-foreground ml-2">Portfolio</span>
            </span>
          </m.a>

          <div className="hidden md:flex items-center gap-1.5 bg-card/60 backdrop-blur-sm rounded-2xl px-2 py-1.5 border border-border/40">
            {NAV_ITEMS.map((navItem) => {
              const isActive = activeSection === navItem.id;
              return (
                <a
                  key={navItem.id}
                  href={`#${navItem.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-colors duration-200 bounce-click ${
                    isActive ? 'text-white' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {isActive && (
                    <m.span
                      layoutId="navPill"
                      className="absolute inset-0 bg-morandi-rose rounded-xl"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 text-sm" aria-hidden>
                    {navItem.emoji}
                  </span>
                  <span className="relative z-10">{navItem.label}</span>
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="md:hidden p-2.5 rounded-xl hover:bg-muted transition-colors bounce-click"
              aria-label="打开导航菜单"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="w-5 h-5 flex flex-col justify-center items-center gap-1.5">
                <m.span
                  animate={isMobileMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                  className="w-5 h-[2px] bg-foreground block rounded-full"
                />
                <m.span
                  animate={isMobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  className="w-5 h-[2px] bg-foreground block rounded-full"
                />
                <m.span
                  animate={isMobileMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                  className="w-5 h-[2px] bg-foreground block rounded-full"
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isMobileMenuOpen && (
          <m.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/50 overflow-hidden"
          >
            <div className="px-4 py-3 grid grid-cols-3 sm:grid-cols-4 gap-2">
              {NAV_ITEMS.map((navItem) => (
                <a
                  key={navItem.id}
                  href={`#${navItem.id}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex flex-col items-center gap-1 p-3 rounded-xl text-xs font-medium transition-all bounce-click ${
                    activeSection === navItem.id
                      ? 'bg-morandi-rose text-white'
                      : 'text-muted-foreground hover:bg-muted'
                  }`}
                >
                  <span className="text-lg" aria-hidden>
                    {navItem.emoji}
                  </span>
                  {navItem.label}
                </a>
              ))}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </m.nav>
  );
}
