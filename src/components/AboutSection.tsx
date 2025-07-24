const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-coastal">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-8 text-deep-water">
            About Boat Sitter Mauritius
          </h2>
          
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              With over two decades of experience in the Mauritian marine industry, Boat Sitter Mauritius has established itself as the island's most trusted partner for complete boat solutions. Our comprehensive approach combines traditional craftsmanship with modern technology to deliver exceptional results.
            </p>
            
            <p>
              From our state-of-the-art facility, we serve both local boat owners and international clients who dock their vessels in Mauritius. Our team of certified marine professionals is dedicated to treating every boat with the same care and attention we would give our own.
            </p>
            
            <p>
              Whether you need routine maintenance, emergency repairs, or long-term storage solutions, we provide reliable, professional service that keeps your vessel in pristine condition year-round.
            </p>
            
            <p className="font-semibold text-marine-blue text-xl">
              Your boat's safety and performance is our passion and expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;