import { Anchor, MessageCircle, Mail, MapPin, Facebook } from "lucide-react";
import logoImage from "@/assets/boatsitter-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    <footer className="bg-deep-water text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logoImage} 
                alt="Boat Sitter Mauritius Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold font-poppins">
                Boat Sitter Mauritius
              </span>
            </div>
            
            <p className="text-white/80 mb-6 max-w-md leading-relaxed">
              Mauritius' trusted marine partner providing comprehensive boat solutions including storage, 
              repairs, building, and management services with years of expertise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleWhatsAppClick}
                className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors font-poppins"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </button>
              
              <button 
                onClick={handleEmailClick}
                className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-md hover:bg-white/20 transition-colors font-poppins"
              >
                <Mail className="h-4 w-4" />
                Email
              </button>

              <button 
                onClick={handleFacebookClick}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-poppins"
              >
                <Facebook className="h-4 w-4" />
                Facebook
              </button>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold font-poppins mb-4">
              Our Services
            </h3>
            <ul className="space-y-2 text-white/80">
              <li>Boat Storage</li>
              <li>New Boat Building</li>
              <li>Mechanical & Electrical</li>
              <li>Paint & Fiberglass</li>
              <li>Licensing & Insurance</li>
              <li>Salvage & Rescue</li>
              <li>Boat Management</li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold font-poppins mb-4">
              Contact Information
            </h3>
            
            <div className="space-y-3 text-white/80">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-green-400" />
                <span>+230 5725 2366</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>boatsitter@gmail.com</span>
              </div>
              
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-red-400" />
                <span>Marina Facilities, Mauritius</span>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-white/10 rounded-lg">
              <p className="text-sm font-medium text-green-400">
                🕒 24/7 Emergency Services
              </p>
              <p className="text-sm text-white/70">
                Always available for marine emergencies
              </p>
            </div>
          </div>
        </div>
        
        <hr className="border-white/20 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            © {currentYear} Boat Sitter Mauritius. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <p className="text-white/70 text-sm">
              Licensed & Insured Marine Services
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;