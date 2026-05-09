import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import CampusSection from '@/components/CampusSection';
import AwardsSection from '@/components/AwardsSection';
import SkillsSection from '@/components/SkillsSection';
import SocialSection from '@/components/SocialSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ExperienceSection />
        <CampusSection />
        <AwardsSection />
        <SkillsSection />
        <SocialSection />
      </main>
      <Footer />
    </>
  );
}
