import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import akJazzImage from "@/assets/ak-jazz-screenshot.jpg";
import robustaImage from "@/assets/robusta-cafe-screenshot.jpg";
import barrelImage from "@/assets/barrel-mansion-screenshot.jpg";

const PortfolioSection = () => {
  const portfolioItems = [
    {
      title: "AK Jazz Club",
      description: "Premium jazz club website with event booking and live music schedule",
      image: akJazzImage,
      url: "https://preview--ak-jazz-nights-online.lovable.app/"
    },
    {
      title: "Robusta Cafe",
      description: "Cozy cafe website with menu display and online ordering system",
      image: robustaImage,
      url: "https://preview--robusta-cafe-canvas.lovable.app/"
    },
    {
      title: "Barrel Mansion",
      description: "Upscale bar and lounge with sophisticated design and event booking",
      image: barrelImage,
      url: "https://preview--barrel-mansion-nights-alive.lovable.app/"
    }
  ];

  return (
    <section className="py-20 bg-card px-4" id="portfolio" itemScope itemType="https://schema.org/CreativeWork">
      <div className="container mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Website Portfolio - Recent Projects in Delhi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore successful website projects for cafes, restaurants, clubs, and businesses - showcasing fast delivery and professional design
          </p>
        </header>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <article 
              key={index}
              className="bg-background rounded-lg shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
              itemScope
              itemType="https://schema.org/CreativeWork"
            >
              <figure className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.title} - Professional website design project by Kavach Sharma featuring ${item.description.toLowerCase()}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  itemProp="image"
                  loading="lazy"
                  width="400"
                  height="300"
                />
              </figure>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3" itemProp="name">
                  {item.title} - Website Design Project
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed" itemProp="description">
                  {item.description}
                </p>
                
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open(item.url, '_blank')}
                  className="group/btn"
                >
                  <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                  View Live Site
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;