import type { WorkGroup } from '@/types/resume';

/**
 * 作品集：把简历里的量化成果落成可查看的条目。
 * 只有具备真实可访问外链的条目才设置 href，其余作为数据展示，避免死链。
 */
export const WORK_GROUPS: WorkGroup[] = [
  {
    id: 'writing',
    title: '文字内容',
    desc: '博雅学院公众号 · 累计产出推文 90+ 篇，总阅读量 23,000+',
    tone: 'rose',
    items: [
      { title: '中国古典学年会 · 新闻通稿', metric: '学院官网 + 公众号头条', tag: '新闻稿' },
      { title: '中国通识教育年会 · 深度报道', metric: '会务全程跟稿', tag: '深度稿' },
      { title: '《"植"此青绿》专题图书推荐', metric: '广州少年儿童图书馆', tag: '书单' },
      { title: '元宵节沉浸式阅读活动回顾', metric: '单场 50+ 组家庭', tag: '活动稿' },
    ],
  },
  {
    id: 'visual',
    title: '视觉 & 活动',
    desc: 'Bilibili 新国辩 · 产出比赛海报 32 张、图文 64 条，总阅读 5 万+',
    tone: 'accent',
    items: [
      { title: '新国辩赛事海报系列', metric: '32 张 · 微博/公众号', tag: '海报' },
      { title: '"北欧外企"雇主品牌 slogan', metric: '嘉士伯中国全平台采用', tag: '文案' },
      { title: '"绘本+汉服+非遗"沉浸阅读', metric: '单场 50+ 组家庭', tag: '活动策划' },
      { title: '港乐 Busking（宝洁合作）', metric: '单场 800+ 人', tag: '活动策划' },
    ],
  },
  {
    id: 'academic-works',
    title: '学术 & 自媒',
    desc: '古典学研究与个人内容账号',
    tone: 'blue',
    items: [
      {
        title: '《她与共和：论普鲁塔克对波西娅的形象塑造》',
        metric: '南京大学文学院获奖论文',
        tag: '论文',
      },
      { title: '彼特拉克拉丁文书信译注', metric: '大创项目 · 评级优秀', tag: '译著' },
      {
        title: '小红书英剧账号',
        metric: '45 篇笔记 · 最高阅读 4w+',
        tag: '自媒',
        href: 'https://www.xiaohongshu.com/user/profile/6104a355000000000101c0a7',
      },
      { title: '《文选》读书会（主持 20+ 次）', metric: '跨校跨学科对谈', tag: '学术活动' },
    ],
  },
];
