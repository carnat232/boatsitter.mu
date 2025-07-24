import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Captain Jean-Michel",
      role: "Yacht Owner",
      location: "Port Louis, Mauritius",
      rating: 5,
      text: "Exceptional service! They restored my 40ft yacht to perfection. The attention to detail and professionalism is unmatched in Mauritius.",
      image: "/lovable-uploads/781cc77b-3447-4241-b483-e3c27e08b433.png"
    },
    {
      name: "Sarah Thompson",
      role: "Catamaran Owner",
      location: "Grand Baie, Mauritius",
      rating: 5,
      text: "Best boat maintenance service on the island. They've been taking care of our catamaran for 3 years now. Always reliable and professional.",
      image: "/lovable-uploads/360d28fa-6132-405d-b78c-357e94ad3135.png"
    },
    {
      name: "David Kumar",
      role: "Fishing Charter Business",
      location: "Rivière Noire, Mauritius",
      rating: 5,
      text: "They saved our business when our main boat broke down. Emergency repair was done in 24 hours. Highly recommend their services!",
      image: "/lovable-uploads/678db23d-1627-4881-846f-acc2a0ab2fe1.png"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-deep-water mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from boat owners who trust us with their most valuable assets.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <Card className="bg-white shadow-xl border-0 overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Testimonial Image */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 text-center md:text-left">
                  <Quote className="h-6 w-6 text-marine mb-3 mx-auto md:mx-0" />
                  
                  <p className="text-base md:text-lg text-gray-700 mb-4 leading-relaxed italic">
                    "{testimonials[currentIndex].text}"
                  </p>
                  
                  {/* Rating Stars */}
                  <div className="flex justify-center md:justify-start gap-1 mb-3">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  {/* Author Info */}
                  <div>
                    <h4 className="text-lg font-semibold text-deep-water">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-marine font-medium">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {testimonials[currentIndex].location}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full w-12 h-12 border-marine text-marine hover:bg-marine hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full w-12 h-12 border-marine text-marine hover:bg-marine hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-marine' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;