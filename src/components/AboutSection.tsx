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
              With years of experience, Boat Sitter Mauritius is your trusted partner for all boat needs on the island — from buying, selling, repairs, and renovations to storage and long-term maintenance.
            </p>
            
            <p>
              We blend traditional craftsmanship with modern marine technology to deliver quality work from our state-of-the-art facility. Whether you're a local owner or an international client, our certified team provides reliable, year-round service to keep your vessel safe, functional, and ready for the sea.
            </p>
            
            <p className="font-semibold text-marine-blue text-xl">
              Boatsitter helps you with everything your boat needs — all in one place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;