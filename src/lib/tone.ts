import type { Tone } from '@/types/resume';

/** 左侧色条 */
export const TONE_ACCENT_BORDER: Record<Tone, string> = {
  rose: 'border-l-4 border-l-morandi-rose',
  accent: 'border-l-4 border-l-morandi-accent',
  blue: 'border-l-4 border-l-morandi-blue',
  lavender: 'border-l-4 border-l-morandi-lavender',
};

/** 文字色 */
export const TONE_TEXT: Record<Tone, string> = {
  rose: 'text-morandi-rose',
  accent: 'text-morandi-accent',
  blue: 'text-morandi-blue',
  lavender: 'text-morandi-lavender',
};

/** 图标角标底色 */
export const TONE_BADGE: Record<Tone, string> = {
  rose: 'bg-morandi-rose/12',
  accent: 'bg-morandi-accent/12',
  blue: 'bg-morandi-blue/12',
  lavender: 'bg-morandi-lavender/15',
};

/** pill 标签 */
export const TONE_PILL: Record<Tone, string> = {
  rose: 'bg-morandi-rose/8 text-morandi-rose border border-morandi-rose/20',
  accent: 'bg-morandi-accent/8 text-morandi-accent border border-morandi-accent/20',
  blue: 'bg-morandi-blue/8 text-morandi-blue border border-morandi-blue/20',
  lavender: 'bg-morandi-lavender/10 text-morandi-lavender border border-morandi-lavender/20',
};

/** 统计卡 */
export const STAT_TONE: Record<Tone | 'sand', string> = {
  rose: 'bg-morandi-rose/12 text-morandi-rose border-morandi-rose/25',
  accent: 'bg-morandi-accent/12 text-morandi-accent border-morandi-accent/25',
  blue: 'bg-morandi-blue/12 text-morandi-blue border-morandi-blue/25',
  lavender: 'bg-morandi-lavender/12 text-morandi-lavender border-morandi-lavender/25',
  sand: 'bg-morandi-sand/20 text-morandi-warm border-morandi-sand/30',
};
