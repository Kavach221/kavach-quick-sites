import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-xl font-bold text-foreground hover:text-primary transition-colors"
            >
              Websites by Kavach
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            
            <Button 
              variant="whatsapp" 
              size="sm"
              onClick={() => window.open('https://wa.me/919899297617', '_blank')}
              className="group"
            >
              <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-primary transition-colors font-medium text-left"
                >
                  {item.label}
                </button>
              ))}
              
              <Button 
                variant="whatsapp" 
                size="sm"
                onClick={() => {
                  window.open('https://wa.me/919899297617', '_blank');
                  setIsMenuOpen(false);
                }}
                className="group w-fit"
              >
                <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                WhatsApp
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;