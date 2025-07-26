import { Button } from "@/components/ui/button";
import { ExternalLink, MessageCircle } from "lucide-react";
import kavachPhoto from "@/assets/kavach-photo.jpg";

const HeroSection = () => {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center bg-background px-4 py-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Get Your Own Website in Just{" "}
              <span className="text-primary">7 Days</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Hi, I'm <span className="font-semibold text-foreground">Kavach Sharma</span> – I help cafes, clubs, artists, and small businesses go online fast.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={scrollToPortfolio}
                className="group"
              >
                <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
                See My Work
              </Button>
              
              <Button 
                variant="whatsapp" 
                size="lg"
                onClick={() => window.open('https://wa.me/919899297617', '_blank')}
                className="group"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Message on WhatsApp
              </Button>
            </div>
          </div>
          
          {/* Right side - Photo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-20 scale-110"></div>
              <img
                src={kavachPhoto}
                alt="Kavach Sharma - Website Designer"
                className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-full shadow-card border-4 border-card"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;