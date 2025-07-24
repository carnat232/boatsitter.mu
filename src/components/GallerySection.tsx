import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "/lovable-uploads/fe669e4b-a480-402f-b1c2-e771deac30e4.png",
      alt: "Professional boat on pristine waters",
      title: "Quality Boats on Mauritius Waters"
    },
    {
      src: "/lovable-uploads/6172886d-9327-416f-9f1c-b301638c6900.png",
      alt: "Boat storage and maintenance services",
      title: "Secure Storage & Maintenance"
    },
    {
      src: "/lovable-uploads/8ce53c5d-263e-44fc-9ca0-44ffaa570679.png",
      alt: "Fresh boat painting and renovation",
      title: "Professional Paint & Renovation"
    },
    {
      src: "/lovable-uploads/dbd76c09-db15-441a-b0f7-49b4a4a15026.png",
      alt: "New boat builds and custom work",
      title: "Custom Boat Building"
    },
    {
      src: "/lovable-uploads/df43ea03-769f-43ba-981a-a786b7fea284.png",
      alt: "Marine rescue and emergency services",
      title: "Emergency Rescue Services"
    },
    {
      src: "/lovable-uploads/b9a0743e-c7cd-4dc8-abb5-34ad0cfd2668.png",
      alt: "Marina facilities and boat services",
      title: "Full Marina Services"
    },
    {
      src: "/lovable-uploads/292bb976-5399-4a45-a1ba-a48d78fb960c.png",
      alt: "Professional salvage operations",
      title: "Salvage & Recovery Operations"
    },
    {
      src: "/lovable-uploads/1c63ae05-f8ab-4ee0-bd65-c2f520ebebbb.png",
      alt: "Boat management and care services",
      title: "Comprehensive Boat Management"
    },
    {
      src: "/lovable-uploads/e4c2b70b-81bc-4495-a4e3-1b8de6b754de.png",
      alt: "Charter and fishing boat services",
      title: "Charter & Fishing Boats"
    },
    {
      src: "/lovable-uploads/6bc342b6-edd1-4bf5-b836-7d4b9c76269b.png",
      alt: "Heavy marine construction equipment",
      title: "Marine Infrastructure Development"
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-background to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-deep-water mb-6">
            Our Work Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See our craftsmanship in action. From boat building and renovations to emergency rescue operations, 
            we handle every marine service with professional expertise.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-square">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold font-poppins text-sm">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-60 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-60 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-60 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image */}
            <div className="max-w-4xl max-h-[80vh] w-full">
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="w-full h-full object-contain"
              />
              
              {/* Image Title */}
              <div className="text-center mt-4">
                <h3 className="text-xl font-semibold text-white font-poppins">
                  {galleryImages[selectedImage].title}
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;