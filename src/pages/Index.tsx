import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import OfferSection from "@/components/OfferSection";
import ContactSection from "@/components/ContactSection";
import CalendlySection from "@/components/CalendlySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <div id="hero">
          <HeroSection />
        </div>
        
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <OfferSection />
        <ContactSection />
        <CalendlySection />
        <TestimonialsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
