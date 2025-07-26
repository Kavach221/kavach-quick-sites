import { User, Calendar, Coffee, Target } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: User,
      title: "Portfolio Website",
      description: "Showcase your work with a stunning portfolio that converts visitors into clients"
    },
    {
      icon: Calendar,
      title: "Booking Website", 
      description: "Allow customers to book appointments, tables, or services directly online"
    },
    {
      icon: Coffee,
      title: "Café / Restaurant Website",
      description: "Menu displays, online ordering, and reservation systems for food businesses"
    },
    {
      icon: Target,
      title: "Landing Page for Ads",
      description: "High-converting landing pages designed to maximize your advertising ROI"
    }
  ];

  return (
    <section className="py-20 bg-background px-4" id="services">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Services I Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional website solutions tailored for your business needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-lg shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;