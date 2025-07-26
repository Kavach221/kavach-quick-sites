import { MessageCircle, Mail, Instagram, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Websites by Kavach</h3>
            <p className="text-background/80 leading-relaxed">
              Professional website designer helping businesses in Delhi establish their online presence with fast, clean, and mobile-friendly websites.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Book Call
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Connect With Me</h4>
            <div className="space-y-3">
              <a 
                href="https://wa.me/919899297617" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-background/80 hover:text-background transition-colors group"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                WhatsApp
              </a>
              
              <a 
                href="mailto:smartaistudio2025@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-background/80 hover:text-background transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Email
              </a>
              
              <a 
                href="https://www.instagram.com/thekavachsharma_wolfie" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-background/80 hover:text-background transition-colors group"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60 flex items-center justify-center gap-2">
            © {currentYear} Websites by Kavach. Made with <Heart className="w-4 h-4 text-red-400 fill-current" /> in Delhi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;