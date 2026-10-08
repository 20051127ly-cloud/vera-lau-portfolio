import type { EducationEntry, Language, Stat } from '@/types/resume';

/** 站点地址：用于 sitemap / robots / canonical / OG */
export const SITE_URL = 'https://vera-lau-portfolio.vercel.app';

export const PROFILE = {
  name: 'Vera LAU',
  school: '中山大学 · 博雅学院',
  location: '广州',
  grade: '2023级',
  intro: '汉语言文学（博雅），热爱古典学与人文研究，擅长内容策划与文化传播。',
  headlinePrimary: '古典学 · 人文研究',
  headlineSecondary: '内容策划 & 品牌传播',
  summary:
    '拥有雇主品牌、新媒体运营与活动策划的实战经验，善于结合热点进行内容创意。同时具备扎实的人文学术研究背景，专注于古典文学与跨文化比较，跨领域整合能力强。',
  email: '2419503690@qq.com',
  phone: '13694288875',
  mottoLatin: 'Echte Liebe.',
  mottoEnglish: 'True Love.',
};

/** 手机号脱敏展示，完整号码仅在用户主动点击后于前端拼接 */
export function maskPhone(phone: string): string {
  return phone.length === 11 ? `${phone.slice(0, 3)} **** ${phone.slice(7)}` : phone;
}

export const STATS: Stat[] = [
  { value: '4.15', label: 'GPA / 5.00', tone: 'rose' },
  { value: '2/14', label: '专业排名', tone: 'accent' },
  { value: '90+', label: '推文产出', tone: 'blue' },
  { value: '3', label: '段实习经历', tone: 'sand' },
];

export const LANGUAGES: Language[] = [
  { lang: '粤语', level: '母语', pct: 100 },
  { lang: '普通话', level: '二甲', pct: 100 },
  { lang: '英语', level: 'CET-6 605', pct: 85 },
  { lang: '拉丁语', level: '可阅读', pct: 55 },
];

export const EDUCATION: EducationEntry[] = [
  { name: '中山大学 · 博雅学院', detail: '汉语言文学（博雅）· 2023-2027', tone: 'muted' },
  { name: '剑桥大学 · 克莱尔学院', detail: '古典学暑期课程 · 2025.08', tone: 'blue' },
];

export const CORE_STRENGTHS = [
  '内容策划',
  '社交媒体运营',
  '品牌传播',
  '学术研究',
  '古典学',
  '跨文化传播',
];
