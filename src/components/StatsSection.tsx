import { useState, useEffect } from "react";
import { Star, Users, Clock, Award } from "lucide-react";

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    clients: 0,
    projects: 0,
    experience: 0,
    satisfaction: 0
  });

  const finalCounts = {
    clients: 150,
    projects: 300,
    experience: 15,
    satisfaction: 99
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepTime = duration / steps;

      Object.keys(finalCounts).forEach((key) => {
        const finalValue = finalCounts[key as keyof typeof finalCounts];
        const increment = finalValue / steps;
        let currentValue = 0;

        const timer = setInterval(() => {
          currentValue += increment;
          if (currentValue >= finalValue) {
            currentValue = finalValue;
            clearInterval(timer);
          }
          setCounts(prev => ({
            ...prev,
            [key]: Math.floor(currentValue)
          }));
        }, stepTime);
      });
    }
  }, [isVisible]);

  const stats = [
    {
      icon: Users,
      value: counts.clients,
      suffix: "+",
      label: "Happy Clients",
      color: "text-blue-500"
    },
    {
      icon: Award,
      value: counts.projects,
      suffix: "+",
      label: "Projects Completed",
      color: "text-green-500"
    },
    {
      icon: Clock,
      value: counts.experience,
      suffix: "+",
      label: "Years Experience",
      color: "text-orange-500"
    },
    {
      icon: Star,
      value: counts.satisfaction,
      suffix: "%",
      label: "Satisfaction Rate",
      color: "text-yellow-500"
    }
  ];

  return (
    <section id="stats-section" className="py-16 bg-gradient-to-r from-marine to-deep-water">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.color} bg-white/10 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-white/80 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;