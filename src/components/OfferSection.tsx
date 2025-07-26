import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, CheckCircle, Clock } from "lucide-react";

const OfferSection = () => {
  return (
    <section className="py-20 bg-gradient-primary text-primary-foreground px-4" id="offer">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-12 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Your Website in ₹9,999
          </h2>
          <p className="text-xl mb-2 opacity-90">
            <span className="line-through">Actual Price: ₹20,999</span> – You Save Over 50%
          </p>
          <p className="text-lg mb-8 opacity-80">
            Only available for the first 5 clients this month
          </p>
          
          <div className="flex items-center justify-center gap-2 mb-8">
            <Clock className="w-5 h-5" />
            <span className="text-lg font-medium">7 Days Delivery Guaranteed</span>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8 text-left">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
              <span>Responsive design for all devices</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
              <span>SEO optimized for Google</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
              <span>Fast loading speed</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => window.open('https://wa.me/919899297617', '_blank')}
              className="group text-primary bg-white hover:bg-gray-100"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Book Now on WhatsApp
            </Button>
            
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => window.open('https://calendly.com/smartaistudio2025/30min', '_blank')}
              className="group text-primary bg-white hover:bg-gray-100"
            >
              <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Schedule Free Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;