import React from "react";
import { motion } from "framer-motion";
import { 
  Target, 
  Users, 
  Shield, 
  Heart, 
  Star, 
  Award, 
  TrendingUp,
  Sparkles,
  CheckCircle,
  Globe,
  HandHeart,
  Ribbon
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Target,
      title: "Impactful Initiatives",
      description: "We strive to make a positive impact on society through our diverse range of humanitarian initiatives.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      delay: 0.1
    },
    {
      icon: Users,
      title: "Compassionate Team",
      description: "Our team of dedicated individuals is driven by compassion and a genuine desire to help those in need.",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      delay: 0.2
    },
    {
      icon: Shield,
      title: "Community Trust",
      description: "We have earned the trust and respect of the local community through our consistent efforts and commitment.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      delay: 0.3
    },
    {
      icon: Heart,
      title: "Resources for All",
      description: "We offer support and resources to those in need, regardless of their background or circumstances.",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      delay: 0.4
    },
    {
      icon: Star,
      title: "Beacon of Hope",
      description: "Our foundation serves as a beacon of hope for the vulnerable and marginalized in our community.",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      delay: 0.5
    },
    {
      icon: TrendingUp,
      title: "Making a Difference",
      description: "Join us in making a difference and creating a better future for our community.",
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
      delay: 0.6
    }
  ];

  const stats = [
    { number: "50K+", label: "Lives Impacted", icon: Users },
    { number: "15+", label: "Years of Service", icon: Award },
    { number: "25+", label: "Communities Served", icon: Globe },
    { number: "95%", label: "Success Rate", icon: TrendingUp }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
  };

  const staggerChildren = {
    whileInView: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="w-full bg-gradient-to-br from-slate-50 via-blue-50/20 to-purple-50/10 relative overflow-hidden py-24 lg:py-32">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-200/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl text-sm font-semibold mb-6 shadow-lg shadow-blue-500/25"
          >
            <Sparkles className="w-4 h-4" />
            Our Unique Value
            <div className="w-2 h-2 bg-white/80 rounded-full animate-pulse"></div>
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Why Choose
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
              Our Foundation
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Discover what sets us apart in our mission to create lasting change and build 
            stronger, more resilient communities through compassionate action.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 lg:mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: feature.delay }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className={`${feature.bgColor} rounded-3xl p-8 border border-gray-100  transition-all duration-500 group-hover:scale-105 cursor-pointer backdrop-blur-sm h-full flex flex-col`}>
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-700 leading-relaxed flex-1">
                  {feature.description}
                </p>

                {/* Hover Effect Line */}
                <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${feature.color} group-hover:w-full transition-all duration-500 rounded-full`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-8 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 text-gray-700">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="font-semibold">15+ Years of Trust</span>
            </div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="flex items-center gap-3 text-gray-700">
              <HandHeart className="w-5 h-5 text-blue-500" />
              <span className="font-semibold">500+ Active Volunteers</span>
            </div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="flex items-center gap-3 text-gray-700">
              <Ribbon className="w-5 h-5 text-purple-500" />
              <span className="font-semibold">Certified Non-Profit</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Custom CSS for animations */}
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

export default WhyChooseUs;