import { Anchor, Wrench, Palette, Shield, LifeBuoy, Settings, Warehouse, Ship } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Warehouse,
      title: "Boat Storage",
      description: "Secure, climate-controlled storage facilities with 24/7 monitoring for your peace of mind."
    },
    {
      icon: Ship,
      title: "New Boat Building",
      description: "Custom boat construction using premium materials and expert craftsmanship."
    },
    {
      icon: Wrench,
      title: "Mechanical & Electrical",
      description: "Complete engine overhauls, electrical systems, and diagnostic services by certified technicians."
    },
    {
      icon: Palette,
      title: "Paint, Fiberglass & Gelcoat",
      description: "Professional hull restoration, painting, and fiberglass repair for lasting protection."
    },
    {
      icon: Shield,
      title: "Licensing & Insurance",
      description: "Complete documentation assistance for registration, licensing, and insurance requirements."
    },
    {
      icon: LifeBuoy,
      title: "Salvage & Rescue",
      description: "24/7 emergency marine rescue and salvage services across Mauritian waters."
    },
    {
      icon: Settings,
      title: "Boat Management",
      description: "Comprehensive vessel management including maintenance scheduling and crew coordination."
    },
    {
      icon: Anchor,
      title: "Marine Consulting",
      description: "Expert advice on vessel acquisition, upgrades, and marine regulations compliance."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 text-deep-water">
            Our Marine Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive marine solutions designed to keep your vessel in perfect condition
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-ocean transition-all duration-300 hover:-translate-y-2 border-coastal-gray hover:border-marine-blue"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-marine rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold font-poppins mb-3 text-deep-water group-hover:text-marine-blue transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;