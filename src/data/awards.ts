import type { AwardItem } from '@/types/resume';

export const SCHOLARSHIP_AWARDS: AwardItem[] = [
  { icon: 'award', text: '2023-2024学年中山大学优秀学生奖学金（三等奖）', tone: 'rose' },
  { icon: 'award', text: '2024-2025学年中山大学优秀学生奖学金（三等奖）', tone: 'rose' },
  { icon: 'star', text: '2023-2024学年中山大学专项奖学金笃行骨干奖', tone: 'accent' },
  { icon: 'star', text: '2025年中山大学优秀学生社团骨干', tone: 'accent' },
  { icon: 'star', text: '2024年中山大学勤工助学先进个人', tone: 'accent' },
];

export const ACADEMIC_AWARDS: AwardItem[] = [
  {
    icon: 'book',
    text: '南京大学文学院520本硕博联动本科生学术论文报告会获奖（《她与共和：论普鲁塔克对波西娅的形象塑造》）',
    tone: 'blue',
  },
  {
    icon: 'book',
    text: '第四届社科法学书评、影评与翻译大赛获奖（《"永恒的挑衅"：论福柯的权力与战争》）',
    tone: 'blue',
  },
];

export const LANGUAGE_SCORES = [
  { label: 'CET-4', score: '614', gradient: 'from-morandi-accent to-morandi-rose' },
  { label: 'CET-6', score: '605', gradient: 'from-morandi-rose to-morandi-lavender' },
];

export const LANGUAGE_TAGS = [
  { text: '普通话（二甲）', tone: 'accent' as const },
  { text: '粤语（母语）', tone: 'rose' as const },
  { text: '拉丁语（可阅读）', tone: 'blue' as const },
];
