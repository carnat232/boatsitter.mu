import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Mail, MapPin, Phone, Clock, Facebook } from "lucide-react";

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/2305725336", "_blank");
  };

  const handleEmailClick = () => {
    window.open("mailto:boatsitter@gmail.com", "_blank");
  };

  const handleFacebookClick = () => {
    window.open("https://web.facebook.com/Boatsitter", "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-gradient-marine text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ready to discuss your marine needs? Contact us today for professional service and expert advice.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold font-poppins mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-white/80">+230 5725 2366</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-white/80">boatsitter@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-white/80">Marina & Boatyard Facilities<br />Mauritius</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">Emergency Services</p>
                    <p className="text-white/80">24/7 Available</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="whatsapp" 
                size="lg"
                onClick={handleWhatsAppClick}
                className="flex-1"
              >
                <MessageCircle className="h-5 w-5" />
                Message us on WhatsApp
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleEmailClick}
                className="flex-1 bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                <Mail className="h-5 w-5" />
                Send Email
              </Button>

              <Button 
                variant="outline" 
                size="lg"
                onClick={handleFacebookClick}
                className="flex-1 bg-blue-600 border-blue-600 text-white hover:bg-blue-700"
              >
                <Facebook className="h-5 w-5" />
                Facebook
              </Button>
            </div>
          </div>
          
          {/* Map and Additional Info */}
          <div className="space-y-6">
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold font-poppins mb-4 text-white">
                  Our Location
                </h4>
                
                {/* Location Map */}
                <div className="aspect-video rounded-lg overflow-hidden bg-white/20">
                  <img 
                    src="/lovable-uploads/171c5b39-74ca-4a89-b049-a824dd935a24.png"
                    alt="Boat Sitter Mauritius Location Map"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                
                <p className="text-white/80 text-sm mt-4">
                  Located in prime marina facilities across Mauritius, easily accessible for both local and international clients.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold font-poppins mb-4 text-white">
                  Why Contact Us?
                </h4>
                
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0" />
                    <span>Free consultation and estimates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0" />
                    <span>Rapid response to emergencies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0" />
                    <span>Expert advice on all marine matters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0" />
                    <span>Personalized service solutions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;