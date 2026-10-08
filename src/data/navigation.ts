import type { NavItem } from '@/types/resume';

/** 导航与页脚共用同一份锚点配置，避免两处维护不一致 */
export const NAV_ITEMS: NavItem[] = [
  { id: 'profile', label: '关于', emoji: '👋' },
  { id: 'academic', label: '学术', emoji: '📜' },
  { id: 'experience', label: '实习', emoji: '💼' },
  { id: 'campus', label: '校园', emoji: '🎓' },
  { id: 'works', label: '作品', emoji: '🖼️' },
  { id: 'awards', label: '荣誉', emoji: '🏆' },
  { id: 'skills', label: '技能', emoji: '⚡' },
  { id: 'social', label: '联系', emoji: '📬' },
];
