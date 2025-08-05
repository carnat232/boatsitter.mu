import { CheckCircle, Users, Shield, Clock, Award } from "lucide-react";

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: Users,
      title: "Experienced Team",
      description: "20+ years of marine expertise with certified professionals"
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed and comprehensively insured for your protection"
    },
    {
      icon: Award,
      title: "All-in-One Service",
      description: "Complete marine solutions under one roof"
    },
    {
      icon: Clock,
      title: "Fast Response",
      description: "24/7 emergency services and rapid response times"
    }
  ];

  const benefits = [
    "Transparent pricing with no hidden fees",
    "State-of-the-art equipment and facilities",
    "Personalized service for every client",
    "International and local clientele",
    "Comprehensive warranty on all work",
    "Environmental compliance and sustainability"
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 text-deep-water">
            Why Choose Boat Sitter Boat Care Service?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover what makes us the preferred marine partner for boat owners across Mauritius
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="text-center p-6 rounded-lg bg-gradient-coastal hover:shadow-soft transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-marine rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold font-poppins mb-2 text-deep-water">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
          
          {/* Benefits List */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold font-poppins mb-6 text-deep-water">
              What Our Clients Love About Us
            </h3>
            
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4">
                <CheckCircle className="h-6 w-6 text-marine-blue flex-shrink-0" />
                <p className="text-foreground/80 text-lg">
                  {benefit}
                </p>
              </div>
            ))}
            
            <div className="mt-8 p-6 bg-gradient-marine rounded-lg text-white">
              <h4 className="text-xl font-semibold font-poppins mb-2">
                Our Promise
              </h4>
              <p className="text-white/90">
                Every vessel that comes through our doors receives the same level of care and attention we would give our own. 
                Your boat's safety, performance, and longevity are our top priorities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;