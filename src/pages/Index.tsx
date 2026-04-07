import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FormationsSection from "@/components/FormationsSection";
import EntrepriseSection from "@/components/EntrepriseSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <FormationsSection />
      <EntrepriseSection />
      <Footer />
    </div>
  );
};

export default Index;
