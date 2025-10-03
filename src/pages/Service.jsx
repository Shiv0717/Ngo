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
  Pause,
  Star,
  Shield,
  TrendingUp,
  Eye,
  Download,
  Share2
} from 'lucide-react';

const Service = () => {
  const [activeService, setActiveService] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const services = [
    {
      id: 1,
      title: "Resource Assistance",
      description: "We provide comprehensive material and financial support to individuals and families facing challenges, ensuring basic needs are met with dignity and care through our extensive network.",
      icon: Heart,
      image: "https://shrishankaracharya.org/wp-content/uploads/2024/05/India-Covid-19.jpg",
      color: "#EF4444",
      gradient: "from-red-500 to-pink-600",
      bgGradient: "from-red-50 to-pink-50",
      stats: "50,000+ Families Supported",
      duration: "Since 2009",
      impact: "Essential needs provided",
      features: ["Food Distribution", "Financial Aid", "Shelter Support", "Emergency Relief"],
      achievements: ["15K+ Emergency Kits", "25K+ Food Packets", "10K+ Financial Grants"]
    },
    {
      id: 2,
      title: "Education Support",
      description: "Through scholarships, educational workshops, and infrastructure development, we promote learning opportunities and literacy among underprivileged communities across India.",
      icon: BookOpen,
      image: "https://shrishankaracharya.org/wp-content/uploads/2024/05/kanha-kids-a-play-school-and-day-care-kolar-road-bhopal-schools-0dggajqcgh-2.jpg",
      color: "#3B82F6",
      gradient: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
      stats: "50,000+ Students Educated",
      duration: "Since 2009",
      impact: "Literacy rate improved by 40%",
      features: ["Scholarships", "Digital Learning", "School Infrastructure", "Teacher Training"],
      achievements: ["100+ Schools Built", "25K+ Scholarships", "500+ Digital Labs"]
    },
    {
      id: 3,
      title: "Healthcare Programs",
      description: "Our comprehensive healthcare initiatives focus on preventive care, medical camps, and awareness campaigns, significantly improving community health outcomes.",
      icon: Stethoscope,
      image: "https://shrishankaracharya.org/wp-content/uploads/2024/05/Sanitary-pad-distribution-2.jpeg",
      color: "#10B981",
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
      stats: "100,000+ Lives Impacted",
      duration: "Continuous",
      impact: "Health awareness increased",
      features: ["Medical Camps", "Vaccination Drives", "Health Education", "Medicine Distribution"],
      achievements: ["500+ Medical Camps", "1M+ Vaccinations", "50K+ Health Kits"]
    },
    {
      id: 4,
      title: "Skill Development",
      description: "We offer vocational training, career counseling, and job placement services to equip individuals with market-relevant skills for sustainable employment.",
      icon: Briefcase,
      image: "https://shrishankaracharya.org/wp-content/uploads/2024/05/IMG-20180220-WA0067.jpg",
      color: "#8B5CF6",
      gradient: "from-purple-500 to-violet-600",
      bgGradient: "from-purple-50 to-violet-50",
      stats: "20,000+ Trained",
      duration: "5 Years",
      impact: "75% Employment Rate",
      features: ["Vocational Training", "Career Counseling", "Job Placement", "Entrepreneurship"],
      achievements: ["50+ Training Centers", "15K+ Jobs Created", "500+ Startups"]
    },
    {
      id: 5,
      title: "Women's Empowerment",
      description: "Empowering women through comprehensive skill-building, entrepreneurship support, and gender equality programs, fostering economic independence.",
      icon: Users,
      image: "https://shrishankaracharya.org/wp-content/uploads/2024/05/Women-Empowerment.jpeg",
      color: "#EC4899",
      gradient: "from-pink-500 to-rose-600",
      bgGradient: "from-pink-50 to-rose-50",
      stats: "15,000+ Women Empowered",
      duration: "7 Years",
      impact: "Financial independence achieved",
      features: ["Skill Building", "Microfinance", "Leadership Training", "Legal Awareness"],
      achievements: ["10K+ Loans Provided", "5K+ Women Leaders", "100+ Self-Help Groups"]
    },
    {
      id: 6,
      title: "Environmental Conservation",
      description: "Leading environmental initiatives, massive tree plantation drives, and sustainable waste management projects for a greener, sustainable future.",
      icon: Leaf,
      image: "https://shrishankaracharya.org/wp-content/uploads/2024/05/world-health-day-2019-nmcg-organises-cleanup-yamuna-ghat-delhi-twitter-660x330-1.jpg",
      color: "#059669",
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50",
      stats: "1 Million+ Trees Planted",
      duration: "Ongoing",
      impact: "Carbon footprint reduced",
      features: ["Tree Plantation", "Waste Management", "Water Conservation", "Eco Awareness"],
      achievements: ["1M+ Trees", "500+ Clean Drives", "50K+ Eco Warriors"]
    }
  ];

  // Auto-rotate services
  React.useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay, services.length]);

  const stats = [
    { number: "200K+", label: "Lives Transformed", icon: Users, color: "blue" },
    { number: "15+", label: "Years of Service", icon: Award, color: "purple" },
    { number: "500+", label: "Active Volunteers", icon: Heart, color: "red" },
    { number: "25+", label: "Communities Served", icon: MapPin, color: "green" }
  ];

  return (
    <section className="min-h-screen mt-20  bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-200/5 rounded-full blur-3xl"></div>

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
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl text-sm font-semibold mb-6 shadow-lg shadow-blue-500/25"
              >
                <Sparkles className="w-4 h-4" />
                Comprehensive Services
                <div className="w-2 h-2 bg-white/80 rounded-full animate-pulse"></div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Transforming
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">
                  Communities
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
              >
                Empowering individuals and communities through comprehensive programs in education, 
                healthcare, skill development, and environmental conservation for sustainable growth.
              </motion.p>
            </motion.div>

            {/* Services Showcase */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-20">
              {/* Left - Service Navigation */}
              <div className="w-full lg:w-2/5">
                <div className="bg-white rounded-2xl p-6  border border-gray-100">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">Our Programs</h2>
                    <button
                      onClick={() => setAutoplay(!autoplay)}
                      className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center transition-all duration-300 border border-gray-200 hover:border-gray-300 hover:bg-gray-100"
                    >
                      {autoplay ? <Pause size={20} /> : <Play size={20} />}
                    </button>
                  </div>

                  <div className="space-y-3">
                    {services.map((service, index) => {
                      const IconComponent = service.icon;
                      return (
                        <motion.button
                          key={service.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          onClick={() => {
                            setActiveService(index);
                            setAutoplay(false);
                          }}
                          className={`w-full p-4 rounded-xl text-left transition-all duration-500 group ${
                            activeService === index 
                              ? 'bg-gradient-to-r from-gray-50 to-white  scale-[1.02] border-l-4' 
                              : 'bg-gray-50/50 hover:bg-gray-50  border-l-4 border-transparent'
                          }`}
                          style={{ 
                            borderLeftColor: activeService === index ? service.color : 'transparent' 
                          }}
                        >
                          <div className="flex items-center gap-4">
                            <div 
                              className="w-12 h-12 rounded-xl flex items-center justify-center text-white  transition-all duration-300 group-hover:scale-110"
                              style={{ backgroundColor: service.color }}
                            >
                              <IconComponent className="w-6 h-6" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-lg font-bold text-gray-900 mb-1 truncate">{service.title}</h3>
                              <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">{service.description}</p>
                            </div>
                            <ChevronRight 
                              className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                                activeService === index ? 'text-gray-900 rotate-90' : 'text-gray-400 group-hover:text-gray-600'
                              }`}
                            />
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right - Active Service Detail */}
              <div className="w-full lg:w-3/5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService}
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="relative h-full"
                  >
                    <div className="bg-white rounded-3xl  overflow-hidden h-full border border-gray-100">
                      {/* Image Header */}
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={services[activeService].image}
                          alt={services[activeService].title}
                          className="w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${services[activeService].gradient} opacity-30`}></div>
                        
                        {/* Overlay Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="text-2xl font-bold text-gray-900 mb-1">
                                  {services[activeService].stats}
                                </div>
                                <div className="text-sm text-gray-600">Direct Impact</div>
                              </div>
                              <div className="text-right">
                                <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                                  <Clock size={16} />
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
                        <div className="flex items-center gap-4 mb-6">
                          <div 
                            className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg"
                            style={{ backgroundColor: services[activeService].color }}
                          >
                            {React.createElement(services[activeService].icon, { size: 24 })}
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">
                              {services[activeService].title}
                            </h3>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                              <span className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-500" />
                                4.9/5 Rating
                              </span>
                              <span>•</span>
                              <span>95% Success Rate</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                          {services[activeService].description}
                        </p>

                        {/* Features & Achievements */}
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                          {/* Features */}
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h4>
                            <div className="space-y-3">
                              {services[activeService].features.map((feature, index) => (
                                <motion.div
                                  key={index}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.4, delay: index * 0.1 }}
                                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
                                >
                                  <div 
                                    className="w-2 h-2 rounded-full flex-shrink-0"
                                    style={{ backgroundColor: services[activeService].color }}
                                  ></div>
                                  <span className="text-sm font-medium text-gray-700">{feature}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Achievements */}
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements</h4>
                            <div className="space-y-3">
                              {services[activeService].achievements.map((achievement, index) => (
                                <motion.div
                                  key={index}
                                  initial={{ opacity: 0, x: 20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.4, delay: index * 0.1 }}
                                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
                                >
                                  <Award className="w-4 h-4" style={{ color: services[activeService].color }} />
                                  <span className="text-sm font-medium text-gray-700">{achievement}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Stats Section */}
        <div className="py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-white mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Collective Impact
              </h2>
              <p className="text-blue-200 text-xl max-w-3xl mx-auto">
                Transforming lives and building sustainable communities through dedicated service and innovative solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                    <div className="text-white">{React.createElement(stat.icon, { size: 32 })}</div>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
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
                Ready to Make an Impact?
              </h2>
              
              <p className="text-gray-600 text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                Join thousands of changemakers in our mission to create sustainable change. 
                Together, we can build a better future for communities in need.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Heart className="w-5 h-5" />
                  Join Our Mission
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Share2 className="w-5 h-5" />
                  Share Impact
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
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Service;