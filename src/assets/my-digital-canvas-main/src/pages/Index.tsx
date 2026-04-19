import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import TechSkillsSection from "@/components/TechSkillsSection";
import OtherSkillsSection from "@/components/OtherSkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import MemoryMomentsSection from "@/components/MemoryMomentsSection";
import AwardsSection from "@/components/AwardsSection";
import CVSection from "@/components/CVSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <TechSkillsSection />
      <OtherSkillsSection />
      <ProjectsSection />
      <MemoryMomentsSection />
      <AwardsSection />
      <CVSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
