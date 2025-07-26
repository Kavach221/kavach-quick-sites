import { Star } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background px-4" id="testimonials">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          What My Clients Say
        </h2>
        
        <div className="bg-card p-12 rounded-lg shadow-card">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
            ))}
          </div>
          
          <p className="text-xl text-muted-foreground mb-8 italic leading-relaxed">
            "Client feedback will be added after ongoing projects are completed."
          </p>
          
          <div className="text-center">
            <p className="text-foreground font-medium text-lg">
              Coming Soon
            </p>
            <p className="text-muted-foreground">
              Testimonials from satisfied clients
            </p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            Currently working on exciting projects. Check back soon for client testimonials!
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;