import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail, Instagram } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Since we don't have a backend, we'll show a success message and suggest WhatsApp
    toast({
      title: "Thank you for your interest!",
      description: "Please reach out via WhatsApp for faster response.",
    });
    setFormData({ name: '', email: '', project: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 bg-background px-4" id="contact">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to get your website online? Contact me through any of these channels
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Get in Touch
            </h3>
            
            <div className="space-y-6">
              <div 
                className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-card hover:shadow-lg transition-all cursor-pointer group"
                onClick={() => window.open('https://wa.me/919899297617', '_blank')}
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">WhatsApp</h4>
                  <p className="text-muted-foreground">+91 98992 97617</p>
                </div>
              </div>
              
              <div 
                className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-card hover:shadow-lg transition-all cursor-pointer group"
                onClick={() => window.open('mailto:smartaistudio2025@gmail.com', '_blank')}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-muted-foreground">smartaistudio2025@gmail.com</p>
                </div>
              </div>
              
              <div 
                className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-card hover:shadow-lg transition-all cursor-pointer group"
                onClick={() => window.open('https://www.instagram.com/thekavachsharma_wolfie', '_blank')}
              >
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                  <Instagram className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Instagram</h4>
                  <p className="text-muted-foreground">@thekavachsharma_wolfie</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-card">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="project" className="block text-sm font-medium text-foreground mb-2">
                  Project Details
                </label>
                <Textarea
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project requirements..."
                  rows={4}
                />
              </div>
              
              <Button type="submit" variant="default" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;