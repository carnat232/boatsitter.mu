import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Mail, CheckCircle, Clock } from "lucide-react";

const PricingSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/2305725336", "_blank");
  };

  const handleEmailClick = () => {
    window.open("mailto:boatsitter@gmail.com", "_blank");
  };

  const advantages = [
    "Transparent process",
    "No hidden fees", 
    "Fair rates based on your exact needs",
    "Clear timelines and expert delivery"
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-coastal">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 text-deep-water">
              💬 Get a Personalized Quote
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              To ensure you get the best service at the right price, we recommend reaching out to us directly for a quote.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Contact Info */}
            <Card className="p-8 shadow-ocean border-marine-blue/20">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold font-poppins mb-6 text-deep-water">
                  📞 Contact us today:
                </h3>
                
                <div className="space-y-4 mb-8">
                  <Button 
                    variant="whatsapp" 
                    size="lg"
                    onClick={handleWhatsAppClick}
                    className="w-full justify-start"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp: +230 5725 2366
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={handleEmailClick}
                    className="w-full justify-start border-marine-blue text-marine-blue hover:bg-marine-blue hover:text-white"
                  >
                    <Mail className="h-5 w-5" />
                    Email: boatsitter@gmail.com
                  </Button>
                </div>
                
                <div className="flex items-center gap-2 text-green-600 font-medium mb-4">
                  <Clock className="h-5 w-5" />
                  🕒 We respond fast. No waiting. No guesswork.
                </div>
              </CardContent>
            </Card>

            {/* Why Trust Our Pricing */}
            <div>
              <h3 className="text-2xl font-semibold font-poppins mb-6 text-deep-water">
                🌊 Why Clients Trust Our Pricing:
              </h3>
              
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-marine-blue flex-shrink-0" />
                    <p className="text-lg text-foreground/80">
                      ✅ {advantage}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-marine-blue rounded-lg text-white">
                <h4 className="text-xl font-semibold font-poppins mb-2">
                  Ready to Get Started?
                </h4>
                <p className="text-white/90 mb-4">
                  Simply message us on WhatsApp with what you need done. We'll guide you from there and provide a detailed, transparent quote.
                </p>
                <Button 
                  variant="whatsapp" 
                  onClick={handleWhatsAppClick}
                  className="bg-white text-green-600 hover:bg-gray-100"
                >
                  <MessageCircle className="h-4 w-4" />
                  Start Your Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;