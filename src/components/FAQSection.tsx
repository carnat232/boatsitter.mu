import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Do you only serve boat owners in Mauritius?",
      answer: "Yes, but we work with both locals and international clients who have boats docked in Mauritius. Our location allows us to provide comprehensive services to vessels from around the world."
    },
    {
      question: "How do I get a quote?",
      answer: "Simple — just message us on WhatsApp with what you need done. We'll guide you from there and provide a detailed, transparent quote based on your specific requirements."
    },
    {
      question: "Is my boat safe with you?",
      answer: "Absolutely. We treat every vessel like our own and ensure it's secured and professionally managed. Our facility has 24/7 security monitoring and we're fully licensed and insured."
    },
    {
      question: "Do you offer emergency services?",
      answer: "Yes, we do. From towing to urgent repairs and salvage operations, our emergency response team is available 24/7 to assist with any marine emergency across Mauritian waters."
    },
    {
      question: "What types of boats do you work on?",
      answer: "We handle fishing boats, speedboats, catamarans, yachts — you name it. Our experienced team has worked on vessels of all sizes and types, from small recreational boats to large luxury yachts."
    },
    {
      question: "How long have you been in business?",
      answer: "We have over 20 years of experience in the Mauritian marine industry. Our team combines decades of traditional craftsmanship with modern technology and techniques."
    },
    {
      question: "Do you provide warranties on your work?",
      answer: "Yes, we provide comprehensive warranties on all our work. The specific warranty terms depend on the type of service, and we'll clearly explain all warranty coverage before beginning any project."
    },
    {
      question: "Can you help with boat documentation and licensing?",
      answer: "Absolutely! We assist with all aspects of boat documentation, including registration, licensing, insurance requirements, and surveys. We'll handle the paperwork so you can focus on enjoying your vessel."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 text-deep-water">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Get answers to the most common questions about our marine services
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-coastal-gray rounded-lg px-6 hover:border-marine-blue transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold font-poppins text-deep-water hover:text-marine-blue">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="text-center mt-12 p-8 bg-gradient-coastal rounded-lg">
            <h3 className="text-2xl font-semibold font-poppins mb-4 text-deep-water">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Don't hesitate to reach out. We're here to help with any questions about your marine needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/2305725336" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors font-poppins font-medium"
              >
                WhatsApp Us
              </a>
              <a 
                href="mailto:boatsitter@gmail.com"
                className="inline-flex items-center justify-center gap-2 bg-marine-blue text-white px-6 py-3 rounded-md hover:bg-marine-blue-dark transition-colors font-poppins font-medium"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;