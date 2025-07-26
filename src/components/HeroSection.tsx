import { Button } from "@/components/ui/button";
import { ExternalLink, MessageCircle } from "lucide-react";
const kavachPhoto = "/lovable-uploads/47f251c8-b3a2-4e67-b76b-17ce76d5c765.png";

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
          
          {/* Right side - Photo & Video */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-20 scale-110"></div>
              <img
                src={kavachPhoto}
                alt="Kavach Sharma - Website Designer"
                className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-full shadow-card border-4 border-card"
              />
              
              {/* Intro Video Section */}
              <div className="mt-8 text-center">
                <h3 className="text-lg font-semibold text-foreground mb-4">Watch My Introduction</h3>
                <div className="relative aspect-video max-w-md mx-auto rounded-lg overflow-hidden shadow-card">
                  <iframe
                    src="https://drive.google.com/file/d/1-Fz9OX6N_LszgCzFsWCIn-sNcKg1WNWn/preview"
                    className="w-full h-full"
                    allow="autoplay"
                    title="Kavach Sharma Introduction Video"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;