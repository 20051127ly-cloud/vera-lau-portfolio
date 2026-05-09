'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  description: string;
  color: string;
  bgColor: string;
  hoverClass: string;
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    name: '小红书',
    url: 'https://xiaohongshu.com',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 13.2h-2.56v2.56c0 .88-.72 1.6-1.6 1.6h-.96c-.88 0-1.6-.72-1.6-1.6v-2.56H7.36c-.88 0-1.6-.72-1.6-1.6v-.96c0-.88.72-1.6 1.6-1.6h2.56V8.48c0-.88.72-1.6 1.6-1.6h.96c.88 0 1.6.72 1.6 1.6v2.56h2.56c.88 0 1.6.72 1.6 1.6v.96c0 .88-.72 1.6-1.6 1.6z" />
      </svg>
    ),
    description: '英剧账号运营',
    color: 'text-red-500',
    bgColor: 'bg-red-50',
    hoverClass: 'hover:bg-red-500 hover:text-white group-hover/bg:border-red-500/30',
  },
  {
    name: '微信公众号',
    url: '#',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.531c0 2.227 1.213 4.243 3.203 5.641l-.798 2.399 2.79-1.395c.857.2 1.757.311 2.695.335-.169-.596-.261-1.218-.261-1.861 0-3.688 3.427-6.688 7.656-6.688.242 0 .48.013.717.036C15.629 4.621 12.432 2.188 8.691 2.188zm-2.6 3.938c.56 0 1.013.453 1.013 1.013s-.453 1.013-1.013 1.013-1.013-.453-1.013-1.013.453-1.013 1.013-1.013zm5.2 0c.56 0 1.013.453 1.013 1.013s-.453 1.013-1.013 1.013-1.013-.453-1.013-1.013.453-1.013 1.013-1.013z" />
        <path d="M23.997 14.651c0-3.329-3.212-6.031-7.171-6.031-3.96 0-7.172 2.702-7.172 6.031 0 3.329 3.212 6.031 7.172 6.031.812 0 1.593-.125 2.322-.35l2.37 1.185-.68-2.04c1.692-1.186 2.78-2.96 2.78-4.926zm-9.57-1.213c-.448 0-.811-.363-.811-.811s.363-.811.811-.811.811.363.811.811-.363.811-.811.811zm4.8 0c-.448 0-.811-.363-.811-.811s.363-.811.811-.811.811.363.811.811-.363.811-.811.811z" />
      </svg>
    ),
    description: '内容策划 & 运营',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    hoverClass: 'hover:bg-green-600 hover:text-white',
  },
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    description: '项目 & 代码',
    color: 'text-foreground',
    bgColor: 'bg-muted/50',
    hoverClass: 'hover:bg-foreground hover:text-background',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    description: '职业社交',
    color: 'text-blue-700',
    bgColor: 'bg-blue-50',
    hoverClass: 'hover:bg-blue-700 hover:text-white',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function SocialSection() {
  return (
    <section id="social" className="py-16 sm:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="icon-badge bg-bvb-yellow/15">
              <Mail className="w-4 h-4 text-bvb-black" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold">联系我</h2>
          </div>
        </motion.div>

        {/* Social cards grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 ml-12"
        >
          {SOCIAL_LINKS.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.97 }}
              className={`mod-card bg-card border border-border/50 p-5 flex items-center gap-4 transition-colors duration-200 ${social.hoverClass}`}
            >
              <div className={`icon-badge ${social.bgColor} ${social.color} shrink-0`}>
                {social.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm">{social.name}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{social.description}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0" />
            </motion.a>
          ))}

          {/* Email CTA — wide card */}
          <motion.div
            variants={item}
            className="sm:col-span-2"
          >
            <motion.div
              whileHover={{ y: -2 }}
              className="mod-card bg-gradient-to-r from-bvb-yellow/10 via-bvb-yellow/5 to-nature-green/10 border border-bvb-yellow/20 p-5 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="icon-badge bg-bvb-yellow/20 text-bvb-black">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">邮箱联系</h3>
                  <a
                    href="mailto:siqi.chen@example.edu.cn"
                    className="text-xs text-nature-green hover:text-nature-leaf transition-colors"
                  >
                    siqi.chen@example.edu.cn
                  </a>
                </div>
              </div>
              <motion.div
                whileHover={{ x: 4 }}
                className="pill bg-bvb-yellow text-bvb-black border border-bvb-yellow/50 cursor-pointer"
              >
                发邮件 <ArrowRight className="w-3 h-3" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
