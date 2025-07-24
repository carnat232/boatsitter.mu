import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-marina.jpg";
import boatsitterLogo from "@/assets/boatsitter-logo.png";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/2305725336", "_blank");
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        {/* Logo in Hero */}
        <div className="mb-8">
          <img 
            src={boatsitterLogo} 
            alt="Boat Sitter Mauritius Logo" 
            className="h-20 md:h-24 w-auto mx-auto mb-4 object-contain"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-6 leading-tight">
          Mauritius' Trusted
          <span className="block text-transparent bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text">
            Marine Partner
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl font-light mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          From storage to repairs, we handle it all with professional expertise and decades of experience
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="whatsapp" 
            size="xl"
            onClick={handleWhatsAppClick}
            className="min-w-[200px]"
          >
            <MessageCircle className="h-5 w-5" />
            Contact us on WhatsApp
          </Button>
          
          <Button 
            variant="outline" 
            size="xl"
            className="bg-white/10 border-white/30 text-white hover:bg-white/20 min-w-[200px]"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Our Services
          </Button>
        </div>
        
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Licensed & Insured
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            24/7 Emergency Service
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            All Vessel Types
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;