import type { SkillGroup } from '@/types/resume';

export const SKILL_GROUPS: SkillGroup[] = [
  {
    icon: 'sheet',
    title: '办公工具',
    tone: 'rose',
    skills: ['Excel (VLOOKUP、数据透视表)', 'Word', 'PowerPoint'],
  },
  {
    icon: 'code',
    title: '技术工具',
    tone: 'accent',
    skills: ['Python', 'SQL', 'ChatGPT / Deepseek'],
  },
  {
    icon: 'palette',
    title: '设计 & 媒体',
    tone: 'blue',
    skills: ['可画', '剪映', '秀米', '135编辑器', '即梦AI'],
  },
];
