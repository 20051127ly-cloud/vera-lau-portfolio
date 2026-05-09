import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import PublicationsSection from '@/components/PublicationsSection';
import SocialSection from '@/components/SocialSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <PublicationsSection />
        <SocialSection />
      </main>
      <Footer />
    </>
  );
}
