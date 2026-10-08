/** 简历数据的共享类型定义 */

/** 时间线条目：学术 / 实习 / 校园 / 项目 共用 */
export interface TimelineItem {
  id: string;
  title: string;
  org?: string;
  period: string;
  tags: string[];
  bullets: string[];
  /** 图标 key，由各 Section 映射到 lucide 图标组件 */
  icon?: IconKey;
  /** 左侧色条主题 */
  tone?: Tone;
}

export type IconKey = 'book' | 'flask' | 'users' | 'graduation' | 'pen' | 'megaphone' | 'briefcase';

export type Tone = 'rose' | 'accent' | 'blue' | 'lavender';

export interface Stat {
  value: string;
  label: string;
  tone: Tone | 'sand';
}

export interface Language {
  lang: string;
  level: string;
  pct: number;
}

export interface EducationEntry {
  name: string;
  detail: string;
  tone: 'muted' | 'blue';
}

export interface SkillGroup {
  icon: 'sheet' | 'code' | 'palette';
  title: string;
  tone: Tone;
  skills: string[];
}

export interface AwardItem {
  icon: 'award' | 'star' | 'book';
  text: string;
  tone: Tone;
}

export interface SocialItem {
  name: string;
  icon: 'book' | 'message' | 'mail';
  description: string;
  /** 有外链时才渲染为可点击链接 */
  url?: string;
  tone: 'red' | 'accent';
}

export interface WorkItem {
  title: string;
  metric: string;
  tag: string;
  /** 可选外链，无链接时仅作数据展示 */
  href?: string;
}

export interface WorkGroup {
  id: string;
  title: string;
  desc: string;
  tone: Tone;
  items: WorkItem[];
}

export interface NavItem {
  id: string;
  label: string;
  emoji: string;
}
