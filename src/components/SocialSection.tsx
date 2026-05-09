'use client';

import { motion } from 'framer-motion';
import { Mail, ExternalLink, BookOpen, MessageCircle } from 'lucide-react';

interface SocialItem {
  name: string;
  icon: React.ReactNode;
  color: string;
  hoverColor: string;
  description: string;
  url: string;
}

const SOCIALS: SocialItem[] = [
  { name: '小红书', icon: <BookOpen className="w-5 h-5" />, color: 'bg-red-50 text-red-400 border-red-100', hoverColor: 'hover:bg-red-500 hover:text-white hover:border-red-500', description: '英剧内容运营', url: 'https://www.xiaohongshu.com/user/profile/6104a355000000000101c0a7' },
  { name: '公众号', icon: <MessageCircle className="w-5 h-5" />, color: 'bg-morandi-accent-light text-morandi-accent border-morandi-accent/20', hoverColor: 'hover:bg-morandi-accent hover:text-white hover:border-morandi-accent', description: '中山大学博雅学院', url: 'https://mp.weixin.qq.com' },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function SocialSection() {
  return (
    <section id="social" className="py-16 sm:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="icon-badge bg-morandi-lavender/15">
              <ExternalLink className="w-4 h-4 text-morandi-lavender" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold">联系 & 社交</h2>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="ml-12"
        >
          <div className="grid grid-cols-2 gap-4 mb-5 max-w-md">
            {SOCIALS.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={item}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className={`mod-card border p-4 sm:p-5 cursor-pointer transition-all duration-300 ${social.color} ${social.hoverColor} group`}
              >
                <div className="mb-2.5">{social.icon}</div>
                <h3 className="font-semibold text-sm">{social.name}</h3>
                <p className="text-[0.65rem] opacity-60 mt-0.5 group-hover:opacity-80 transition-opacity">{social.description}</p>
              </motion.a>
            ))}
          </div>

          {/* Email CTA */}
          <motion.div variants={item}>
            <a href="mailto:2419503690@qq.com">
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="mod-card bg-morandi-rose border border-morandi-rose/30 p-5 sm:p-6 cursor-pointer flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-base">发送邮件联系我</h3>
                    <p className="text-xs text-white/65 mt-0.5">期待与你交流学术、合作项目或任何有趣的事</p>
                  </div>
                </div>
                <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <ExternalLink className="w-5 h-5 text-white/50 group-hover:text-white/80 transition-colors" />
                </motion.div>
              </motion.div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
