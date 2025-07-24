import boatRepair from "@/assets/boat-repair.jpg";
import boatPainting from "@/assets/boat-painting.jpg";
import boatStorage from "@/assets/boat-storage.jpg";
import marineRescue from "@/assets/marine-rescue.jpg";

const GallerySection = () => {
  const galleryItems = [
    {
      image: boatRepair,
      title: "Engine & Mechanical Work",
      description: "Professional engine repairs and maintenance"
    },
    {
      image: boatPainting,
      title: "Hull Restoration",
      description: "Expert painting and gelcoat application"
    },
    {
      image: boatStorage,
      title: "Secure Storage",
      description: "Climate-controlled storage facilities"
    },
    {
      image: marineRescue,
      title: "Emergency Services",
      description: "24/7 marine rescue and assistance"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-coastal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 text-deep-water">
            Our Work in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the quality and professionalism that sets us apart in the marine industry
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-ocean transition-all duration-500 hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-semibold font-poppins mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-200">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Want to see more of our work? Contact us for a facility tour.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;