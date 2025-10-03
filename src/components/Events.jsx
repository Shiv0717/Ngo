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
  Ribbon,
  ArrowRight,
  Eye,
  Clock,
  MapPin,
  ThumbsUp
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Target,
      title: "Proven Impact",
      description: "15+ years of measurable results with 95% program success rate and transparent impact reporting.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      stats: "50K+ Lives Changed",
      delay: 0.1
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "500+ dedicated professionals and volunteers with domain expertise across all social sectors.",
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-gradient-to-br from-emerald-50 to-green-50",
      stats: "15+ Years Experience",
      delay: 0.2
    },
    {
      icon: Shield,
      title: "Full Transparency",
      description: "80G certified with public financial reports and real-time impact tracking for complete accountability.",
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-gradient-to-br from-violet-50 to-purple-50",
      stats: "100% Transparent",
      delay: 0.3
    },
    {
      icon: Heart,
      title: "Community First",
      description: "Grassroots approach working directly with 25+ communities across multiple states in India.",
      color: "from-rose-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-rose-50 to-pink-50",
      stats: "25+ Communities",
      delay: 0.4
    },
    {
      icon: Star,
      title: "Award Winning",
      description: "Nationally recognized for excellence in social work and sustainable community development.",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
      stats: "10+ Awards",
      delay: 0.5
    },
    {
      icon: TrendingUp,
      title: "Sustainable Growth",
      description: "Long-term solutions that create self-reliant communities with continuous monitoring and support.",
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-teal-50 to-cyan-50",
      stats: "95% Success Rate",
      delay: 0.6
    }
  ];

  const impactStats = [
    { 
      number: "50,000+", 
      label: "Lives Transformed", 
      icon: Users,
      change: "+12% this year",
      trend: "up"
    },
    { 
      number: "15+", 
      label: "Years of Service", 
      icon: Award,
      change: "Since 2009",
      trend: "stable"
    },
    { 
      number: "25+", 
      label: "Active Communities", 
      icon: MapPin,
      change: "Across India",
      trend: "up"
    },
    { 
      number: "95%", 
      label: "Program Success", 
      icon: TrendingUp,
      change: "+2% from last year",
      trend: "up"
    }
  ];

  const certifications = [
    { name: "80G Tax Exemption", status: "Active", verified: true },
    { name: "FCRA Certified", status: "Active", verified: true },
    { name: "ISO 9001:2015", status: "Certified", verified: true },
    { name: "CSR Compliant", status: "Verified", verified: true }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
  };

  const staggerChildren = {
    whileInView: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section className="w-full bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden py-20 lg:py-18">
      {/* Enhanced Background Elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-cyan-200/15 rounded-full blur-3xl animate-pulse delay-500"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.9),rgba(255,255,255,0.9)),linear-gradient(90deg,transparent_99%,rgba(59,130,246,0.03)_99%)] bg-[size:20px_20px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl text-sm font-semibold mb-8 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 cursor-pointer hover:scale-105"
          >
            <Sparkles className="w-4 h-4" />
            Trusted Since 2009
            <div className="w-2 h-2 bg-white/80 rounded-full animate-pulse"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Why Choose
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-gradient mt-2">
              Our Foundation?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light"
          >
            We combine decades of experience with innovative approaches to create 
            sustainable impact. Here's what makes us different and why thousands trust us.
          </motion.p>
        </motion.div>

       

        {/* Enhanced Features Grid */}
        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative"
            >
              <div className={`${feature.bgColor} rounded-2xl p-6 border border-gray-100/50  transition-all duration-500 group-hover:scale-105 group-hover:border-transparent cursor-pointer backdrop-blur-sm h-full flex flex-col relative overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/50 to-transparent rounded-bl-2xl"></div>
                
                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors relative z-10">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm mb-4 flex-1 relative z-10">
                  {feature.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between relative z-10">
                  <span className="text-xs font-semibold text-gray-500 bg-white/50 px-2 py-1 rounded-full">
                    {feature.stats}
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications & Trust Bar */}
       
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
         
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
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;