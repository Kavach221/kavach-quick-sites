import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const CalendlySection = () => {
  return (
    <section className="py-20 bg-card px-4" id="booking">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Schedule a Free 30-Min Consultation
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Let's discuss your project requirements and how I can help bring your vision to life
        </p>
        
        <div className="bg-background p-8 rounded-lg shadow-card">
          <div className="mb-6">
            <Calendar className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Free Project Consultation
            </h3>
            <p className="text-muted-foreground">
              30 minutes to discuss your requirements, timeline, and budget
            </p>
          </div>
          
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => window.open('https://calendly.com/smartaistudio2025/30min', '_blank')}
            className="group"
          >
            <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Book Your Call
          </Button>
          
          <p className="text-sm text-muted-foreground mt-4">
            Available Monday to Friday, 10 AM to 6 PM IST
          </p>
        </div>
      </div>
    </section>
  );
};

export default CalendlySection;