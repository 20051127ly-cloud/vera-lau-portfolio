import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AcademicSection from '@/components/AcademicSection';
import ExperienceSection from '@/components/ExperienceSection';
import CampusSection from '@/components/CampusSection';
import WorksSection from '@/components/WorksSection';
import AwardsSection from '@/components/AwardsSection';
import SkillsSection from '@/components/SkillsSection';
import SocialSection from '@/components/SocialSection';
import Footer from '@/components/Footer';
import { PROFILE, SITE_URL } from '@/data/profile';

/** Person 结构化数据：让搜索引擎与知识面板能正确识别个人主页主体 */
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: PROFILE.name,
  jobTitle: '内容策划 / 古典学研究',
  description: PROFILE.intro,
  email: `mailto:${PROFILE.email}`,
  url: SITE_URL,
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: '中山大学博雅学院',
  },
  knowsAbout: ['古典学', '汉语言文学', '内容策划', '品牌传播', '社交媒体运营'],
  sameAs: ['https://www.xiaohongshu.com/user/profile/6104a355000000000101c0a7'],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Navigation />
      <main id="main" className="min-h-screen">
        <HeroSection />
        <AcademicSection />
        <ExperienceSection />
        <CampusSection />
        <WorksSection />
        <AwardsSection />
        <SkillsSection />
        <SocialSection />
      </main>
      <Footer />
    </>
  );
}
