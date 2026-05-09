'use client';

import { motion } from 'framer-motion';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  description: string;
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    color: 'text-foreground',
    bgColor: 'bg-card hover:bg-foreground hover:text-background',
    description: '开源项目与代码',
  },
  {
    name: 'Google Scholar',
    url: 'https://scholar.google.com',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
      </svg>
    ),
    color: 'text-nature-green',
    bgColor: 'bg-nature-green/10 hover:bg-nature-green hover:text-white',
    description: '学术论文与引用',
  },
  {
    name: 'Twitter / X',
    url: 'https://twitter.com',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    color: 'text-foreground',
    bgColor: 'bg-card hover:bg-foreground hover:text-background',
    description: '学术动态与观点',
  },
  {
    name: '知乎',
    url: 'https://zhihu.com',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M5.721 0C2.251 0 0 2.25 0 5.719V18.28C0 21.751 2.252 24 5.721 24h12.56C21.751 24 24 21.75 24 18.281V5.72C24 2.249 21.75 0 18.281 0zm1.964 4.078h6.191c.14-.003.263.086.306.219l.574 1.874h2.145c.127-.003.24.08.28.199l.49 1.607a.27.27 0 01-.257.355h-2.068l1.083 3.543c.04.13-.012.27-.126.345l-1.627 1.068a.312.312 0 01-.385-.04L12.57 9.374l-2.287 2.872a.312.312 0 01-.385.04L8.27 11.218a.27.27 0 01-.126-.345l1.083-3.543H7.159a.27.27 0 01-.258-.355l.49-1.607a.27.27 0 01.281-.199h2.447l.578-1.874a.319.319 0 01.306-.219h-1.318zm-.38 10.108h2.003v4.252l-3.201 1.777v-1.74l1.198-.664z" />
      </svg>
    ),
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 hover:bg-blue-600 hover:text-white',
    description: '技术文章与回答',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: 'text-blue-700',
    bgColor: 'bg-blue-50 hover:bg-blue-700 hover:text-white',
    description: '职业经历与人脉',
  },
  {
    name: 'ORCID',
    url: 'https://orcid.org',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 01-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.563 0h3.904c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.922V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.444-3.722-3.903-3.722h-2.416z" />
      </svg>
    ),
    color: 'text-green-700',
    bgColor: 'bg-green-50 hover:bg-green-700 hover:text-white',
    description: '学术身份标识',
  },
];

export default function SocialSection() {
  return (
    <section id="social" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-1 bg-bvb-yellow rounded-full" />
            <span className="text-sm font-semibold text-nature-green uppercase tracking-widest">Connect</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">社交媒体</h2>
          <p className="text-muted-foreground mt-3">在这些平台上可以找到我</p>
        </motion.div>

        {/* Social Cards - Horizontal Scrollable on mobile, grid on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SOCIAL_LINKS.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-4 p-5 rounded-xl border border-border/50 transition-all duration-200 group ${social.bgColor}`}
            >
              <div className={`shrink-0 ${social.color} group-hover:text-inherit transition-colors`}>
                {social.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm text-foreground group-hover:text-inherit transition-colors">
                  {social.name}
                </h3>
                <p className="text-xs text-muted-foreground group-hover:text-inherit/70 mt-0.5 transition-colors">
                  {social.description}
                </p>
              </div>
              <svg
                className="w-4 h-4 text-muted-foreground group-hover:text-inherit shrink-0 transition-all group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-bvb-yellow/10 border border-bvb-yellow/20">
            <span className="text-sm text-foreground">邮箱联系：</span>
            <a
              href="mailto:mingyuan.zhang@example.edu.cn"
              className="text-sm font-medium text-nature-green hover:text-nature-leaf transition-colors"
            >
              mingyuan.zhang@example.edu.cn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
