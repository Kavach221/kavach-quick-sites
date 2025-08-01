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
    <section className="py-20 bg-background px-4" id="services" itemScope itemType="https://schema.org/ServiceCatalog">
      <div className="container mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Website Design Services in Delhi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive website solutions tailored for small businesses, cafes, restaurants, clubs, and artists with fast 7-day delivery
          </p>
        </header>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <article 
              key={index}
              className="bg-card p-8 rounded-lg shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center group"
              itemScope
              itemType="https://schema.org/Service"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4" itemProp="name">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed" itemProp="description">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;