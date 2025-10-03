import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  BookOpen, 
  Stethoscope, 
  Briefcase, 
  Users, 
  Leaf,
  ArrowRight,
  Sparkles,
  Target,
  Award,
  Clock,
  MapPin,
  ChevronRight,
  Play,
  Pause
} from 'lucide-react';

const Service = () => {
  const [activeService, setActiveService] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const services = [
    {
      id: 1,
      title: "Resource Assistance",
      description: "We offer a range of material and financial support to individuals and families facing challenges, ensuring basic needs are met with dignity and care.",
      icon: <Heart className="w-8 h-8" />,
      image: "https://shrishankaracharya.org/wp-content/uploads/2024/05/India-Covid-19.jpg",
      color: "#EF4444",
      gradient: "from-red-500 to-pink-600",
      stats: "50,000+ Families Supported",
      duration: "Ongoing",
      impact: "Essential needs provided",
      features: ["Food Distribution", "Financial Aid", "Shelter Support", "Emergency Relief"]
    },
    {
      id: 2,
      title: "Education Support",
      description: "Through scholarships, educational workshops, and infrastructure development, we promote learning opportunities and literacy among underprivileged communities.",
      icon: <BookOpen className="w-8 h-8" />,
      image: "https://shrishankaracharya.org/wp-content/uploads/2024/05/kanha-kids-a-play-school-and-day-care-kolar-road-bhopal-schools-0dggajqcgh-2.jpg",
      color: "#3B82F6",
      gradient: "from-blue-500 to-cyan-600",
      stats: "50,000+ Students Educated",
      duration: "Since 2009",
      impact: "Literacy rate improved by 40%",
      features: ["Scholarships", "Digital Learning", "School Infrastructure", "Teacher Training"]
    },
    {
      id: 3,
      title: "Healthcare Programs",
      description: "Our healthcare initiatives focus on preventive care, medical camps, and awareness campaigns, aiming to improve the overall health status of the community.",
      icon: <Stethoscope className="w-8 h-8" />,
      image: "https://shrishankaracharya.org/wp-content/uploads/2024/05/Sanitary-pad-distribution-2.jpeg",
      color: "#10B981",
      gradient: "from-green-500 to-emerald-600",
      stats: "100,000+ Lives Impacted",
      duration: "Continuous",
      impact: "Health awareness increased",
      features: ["Medical Camps", "Vaccination Drives", "Health Education", "Medicine Distribution"]
    },
    {
      id: 4,
      title: "Skill Development",
      description: "We offer vocational training, career counseling, and job placement services to equip individuals with the skills and knowledge needed for sustainable employment.",
      icon: <Briefcase className="w-8 h-8" />,
      image: "https://shrishankaracharya.org/wp-content/uploads/2024/05/IMG-20180220-WA0067.jpg",
      color: "#8B5CF6",
      gradient: "from-purple-500 to-violet-600",
      stats: "20,000+ Trained",
      duration: "5 Years",
      impact: "75% Employment Rate",
      features: ["Vocational Training", "Career Counseling", "Job Placement", "Entrepreneurship"]
    },
    {
      id: 5,
      title: "Women's Empowerment",
      description: "Empowering women through skill-building, entrepreneurship support, and gender equality programs, fostering independence and social empowerment.",
      icon: <Users className="w-8 h-8" />,
      image: "https://shrishankaracharya.org/wp-content/uploads/2024/05/Women-Empowerment.jpeg",
      color: "#EC4899",
      gradient: "from-pink-500 to-rose-600",
      stats: "15,000+ Women Empowered",
      duration: "7 Years",
      impact: "Financial independence achieved",
      features: ["Skill Building", "Microfinance", "Leadership Training", "Legal Awareness"]
    },
    {
      id: 6,
      title: "Environmental Conservation",
      description: "Engaging in environmental initiatives, tree plantation drives, and waste management projects to promote a sustainable and greener future for all.",
      icon: <Leaf className="w-8 h-8" />,
      image: "https://shrishankaracharya.org/wp-content/uploads/2024/05/world-health-day-2019-nmcg-organises-cleanup-yamuna-ghat-delhi-twitter-660x330-1.jpg",
      color: "#059669",
      gradient: "from-emerald-500 to-teal-600",
      stats: "1 Million+ Trees Planted",
      duration: "Ongoing",
      impact: "Carbon footprint reduced",
      features: ["Tree Plantation", "Waste Management", "Water Conservation", "Eco Awareness"]
    }
  ];

  // Auto-rotate services
  React.useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [autoplay, services.length]);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <section className="min-h-screen mt-20 bg-gradient-to-br from-slate-50 via-blue-50/20 to-purple-50/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl text-sm font-semibold mb-6
                "
              >
                <Sparkles className="w-4 h-4" />
                Transformative Services
                <div className="w-2 h-2 bg-white/80 rounded-full animate-pulse"></div>
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Community
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                  Empowerment
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
              >
                Comprehensive programs designed to uplift communities, empower individuals, 
                and create sustainable change through targeted interventions.
              </motion.p>
            </motion.div>

            {/* Featured Service Showcase */}
            <div className="grid lg:grid-cols-2 gap-12 mb-20">
              {/* Left - Service Navigation */}
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
                  <button
                    onClick={() => setAutoplay(!autoplay)}
                    className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center transition-all duration-300 border border-gray-200"
                  >
                    {autoplay ? <Pause size={20} /> : <Play size={20} />}
                  </button>
                </div>

                <div className="space-y-4">
                  {services.map((service, index) => (
                    <motion.button
                      key={service.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      onClick={() => {
                        setActiveService(index);
                        setAutoplay(false);
                      }}
                      className={`w-full p-6 rounded-2xl text-left transition-all duration-500 group ${
                        activeService === index 
                          ? 'bg-white  scale-105 border-2' 
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                      style={{ 
                        borderColor: activeService === index ? service.color : 'transparent' 
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <div 
                          className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-110"
                          style={{ backgroundColor: service.color }}
                        >
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{service.title}</h3>
                          <p className="text-gray-600 text-sm line-clamp-2">{service.description}</p>
                        </div>
                        <ChevronRight 
                          className={`w-5 h-5 transition-transform duration-300 ${
                            activeService === index ? 'text-gray-900 rotate-90' : 'text-gray-400 group-hover:text-gray-600'
                          }`}
                        />
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Right - Active Service Detail */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="bg-white rounded-3xl  overflow-hidden h-full">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={services[activeService].image}
                        alt={services[activeService].title}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${services[activeService].gradient} opacity-20`}></div>
                      
                      {/* Stats Overlay */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-2xl font-bold text-gray-900">{services[activeService].stats.split('+')[0]}+</div>
                              <div className="text-sm text-gray-600">Impact Created</div>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center gap-1 text-sm text-gray-600">
                                <Clock size={14} />
                                {services[activeService].duration}
                              </div>
                              <div className="text-sm font-semibold" style={{ color: services[activeService].color }}>
                                {services[activeService].impact}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{services[activeService].title}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {services[activeService].description}
                      </p>

                      {/* Features */}
                      <div className="grid grid-cols-2 gap-3 mb-8">
                        {services[activeService].features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl"
                          >
                            <div 
                              className="w-2 h-2 rounded-full"
                              style={{ backgroundColor: services[activeService].color }}
                            ></div>
                            <span className="text-sm font-medium text-gray-700">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                        style={{ background: `linear-gradient(135deg, ${services[activeService].color}, ${services[activeService].color}CC)` }}
                      >
                        <span>Learn More About This Program</span>
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="py-20 bg-gradient-to-r from-gray-900 to-blue-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-white mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Collective Impact</h2>
              <p className="text-blue-200 text-xl max-w-3xl mx-auto">
                Transforming lives and communities through dedicated service and sustainable interventions
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "200K+", label: "Lives Transformed", icon: <Heart className="w-8 h-8" /> },
                { number: "15+", label: "Years of Service", icon: <Clock className="w-8 h-8" /> },
                { number: "500+", label: "Active Volunteers", icon: <Users className="w-8 h-8" /> },
                { number: "25+", label: "Communities Served", icon: <MapPin className="w-8 h-8" /> }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                    <div className="text-white">{stat.icon}</div>
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-blue-200 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <Target className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ready to Make a Difference?
              </h2>
              
              <p className="text-gray-600 text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                Join our mission to empower communities and create lasting change. 
                Your support can transform lives and build a better future for all.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Heart className="w-6 h-6" />
                  Get Involved Today
                </motion.button>
                
                <motion.button
                  className="border-2 border-gray-300 text-gray-700 px-10 py-5 rounded-2xl font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Partnerships
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Service;