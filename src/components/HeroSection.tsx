import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-marina.jpg";
import boatRepair from "@/assets/boat-repair.jpg";
import boatPainting from "@/assets/boat-painting.jpg";
import boatStorage from "@/assets/boat-storage.jpg";
import marineRescue from "@/assets/marine-rescue.jpg";
import boatsitterLogo from "/lovable-uploads/78849d4f-6526-4e15-96e2-8d29e0f7a38d.png";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroImage,
      title: "All Your Boat Needs in One Place",
      subtitle: "Professional marine services in the heart of Mauritius",
      linkTo: "#services"
    },
    {
      image: boatRepair,
      title: "Building, Storing & Renovating Boats",
      subtitle: "Expert craftsmanship meets modern marine technology",
      linkTo: "#new-boat-building"
    },
    {
      image: boatPainting,
      title: "Trusted by Locals & International Owners",
      subtitle: "Years of experience serving the Mauritian marine community",
      linkTo: "#paint-fiberglass"
    },
    {
      image: boatStorage,
      title: "Secure Storage & Maintenance",
      subtitle: "Keep your vessel safe and sea-ready year-round",
      linkTo: "#boat-management"
    },
    {
      image: marineRescue,
      title: "24/7 Emergency Marine Services",
      subtitle: "Professional rescue and emergency support when you need it",
      linkTo: "#salvage-rescue"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const handleSlideClick = (linkTo: string) => {
    const element = document.querySelector(linkTo);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Slideshow Background */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transform transition-transform duration-[4000ms] ease-out scale-105"
              style={{ 
                backgroundImage: `url(${slide.image})`,
                animation: index === currentSlide ? 'kenBurns 4s ease-out' : 'none'
              }}
            />
          </div>
        ))}
      </div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
        {/* Logo */}
        <div className="mb-6 animate-fade-in">
          <img 
            src={boatsitterLogo} 
            alt="The Boat Sitter Boat Care Service Logo" 
            className="w-auto mx-auto mb-2 object-contain drop-shadow-lg"
            style={{ 
              height: '16rem', 
              maxHeight: '40vh'
            }}
          />
        </div>
        
        {/* Animated Headlines - Directly beneath logo */}
        <div className="flex flex-col justify-center items-center">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-700 text-center ${
                index === currentSlide 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-4 absolute'
              }`}
            >
              <h1 
                className="text-3xl md:text-5xl lg:text-6xl font-bold font-poppins mb-3 leading-tight cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => handleSlideClick(slide.linkTo)}
              >
                {slide.title.split(' ').slice(0, -3).join(' ')}
                <span className="block text-transparent bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text">
                  {slide.title.split(' ').slice(-3).join(' ')}
                </span>
              </h1>
              
              <p 
                className="text-base md:text-lg font-light mb-6 text-gray-200 max-w-2xl mx-auto leading-relaxed cursor-pointer hover:text-white transition-colors duration-300"
                onClick={() => handleSlideClick(slide.linkTo)}
              >
                {slide.subtitle}
              </p>
            </div>
          ))}
        </div>
        
        {/* Click hint for mobile */}
        <div className="md:hidden text-center mt-6">
          <p className="text-sm text-gray-300 animate-pulse">
            Tap the text to explore our services
          </p>
        </div>
        
        {/* Service Indicators */}
        <div className="hidden md:flex mt-12 justify-center items-center gap-8 text-sm text-gray-300">
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
      
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;