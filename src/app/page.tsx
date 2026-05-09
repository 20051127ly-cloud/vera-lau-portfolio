import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AcademicSection from '@/components/AcademicSection';
import ExperienceSection from '@/components/ExperienceSection';
import CampusSection from '@/components/CampusSection';
import AwardsSection from '@/components/AwardsSection';
import SkillsSection from '@/components/SkillsSection';
import SocialSection from '@/components/SocialSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AcademicSection />
      <ExperienceSection />
      <CampusSection />
      <AwardsSection />
      <SkillsSection />
      <SocialSection />
      <Footer />
    </main>
  );
}
