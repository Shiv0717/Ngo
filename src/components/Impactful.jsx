import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Target, ArrowRight } from 'lucide-react';

// Counter Animation Hook
const useCounter = (end, duration = 2000) => {
  const [count, setCount] = React.useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.ceil(start));
            }
          }, 16);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return [count, ref];
};

const Counter = ({ end, suffix = "", duration = 2000 }) => {
  const [count, ref] = useCounter(end, duration);
  return <span ref={ref}>{count}{suffix}</span>;
};

const Impactful = () => {
  const cards = [
    {
      bgColor: "#FF8E6C",
      textColor: "#111111",
      icon: Users,
      title: "Education Programs",
      description: "Providing quality education and learning opportunities for underprivileged children and youth.",
      stats: 2500,
      suffix: "+",
      statText: "Students Educated"
    },
    {
      bgColor: "#111111",
      textColor: "#FFFFFF",
      icon: Heart,
      title: "Healthcare Initiatives",
      description: "Ensuring access to medical care, nutrition, and health awareness in remote communities.",
      stats: 15000,
      suffix: "+",
      statText: "Lives Touched"
    },
    {
      bgColor: "#FEE581",
      textColor: "#111111",
      icon: Target,
      title: "Skill Development",
      description: "Empowering individuals with vocational training and employment opportunities.",
      stats: 1200,
      suffix: "+",
      statText: "People Trained"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-['Urbanist']">
            Programs that{' '}
            <span className="bg-gradient-to-r from-[#FF8E6C] to-[#FEE581] bg-clip-text text-transparent">
              change lives
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-['Urbanist']">
            Together, we can make a real impact in communities around the world. 
            Help us bring hope and support.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={index}
                className="rounded-3xl p-8  transition-all duration-500 transform hover:-translate-y-2"
                style={{ 
                  backgroundColor: card.bgColor,
                  color: card.textColor
                }}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${card.textColor}15` }}
                  >
                    <IconComponent 
                      size={32} 
                      style={{ color: card.textColor }} 
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 font-['Urbanist']">
                  {card.title}
                </h3>
                <p className="mb-8 leading-relaxed opacity-90 font-['Urbanist']">
                  {card.description}
                </p>

                {/* Counter */}
                <div className="mt-6">
                  <div className="text-4xl md:text-5xl font-bold mb-2 font-['Urbanist']">
                    <Counter end={card.stats} suffix={card.suffix} />
                  </div>
                  <div className="text-sm opacity-80 font-medium font-['Urbanist']">
                    {card.statText}
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  className="mt-8 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 font-['Urbanist']"
                  style={{ 
                    backgroundColor: `${card.textColor}15`,
                    color: card.textColor
                  }}
                  whileHover={{ 
                    backgroundColor: card.textColor,
                    color: card.bgColor
                  }}
                >
                  Learn More
                  <ArrowRight size={16} />
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>

         
       
      </div>
    </section>
  );
};

export default Impactful;