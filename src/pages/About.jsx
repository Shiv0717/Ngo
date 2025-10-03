"use client";
import React from "react";
import { motion } from "framer-motion";
import { Heart, Users, Target, Award, Shield, ExternalLink, BookOpen, GraduationCap, Home, Trees, Sparkles, Globe, Star } from "lucide-react";

const OurStory = () => {
  const storySections = [
    {
      title: "Our Foundation",
      subtitle: "Shri Shankarcharya Swaroopanand Foundation",
      description: "A dynamic non-profit organization dedicated to addressing pressing social, economic, and environmental challenges. With a team of passionate individuals and a network of dedicated volunteers, we work tirelessly to implement sustainable solutions that uplift communities and promote positive change.",
      image: "https://shrishankaracharya.org/wp-content/uploads/2024/05/feet-together-2.webp",
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      color: "from-blue-500 to-blue-700",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      title: "Our Mission",
      subtitle: "Building a Better Future",
      description: "We guide orphaned and abandoned children toward sustainable success, shaping the future generation of professionals, leaders, and changemakers. Through collaborative partnerships and innovative projects, we strive to make a lasting impact.",
      image: "https://shrishankaracharya.org/wp-content/uploads/2024/05/WhatsApp-Image-2018-09-07-at-3.04.14-AM.jpeg",
      icon: <Target className="w-8 h-8 text-green-600" />,
      color: "from-green-500 to-green-700",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    }
  ];

  const focusAreas = [
    {
      title: "Education",
      description: "Quality education programs for underprivileged children",
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      stats: "50K+ Students",
      color: "blue"
    },
    {
      title: "Healthcare",
      description: "Medical camps and health awareness programs",
      icon: <Heart className="w-6 h-6 text-red-600" />,
      stats: "100K+ Lives",
      color: "red"
    },
    {
      title: "Women Empowerment",
      description: "Skill development and financial literacy",
      icon: <Users className="w-6 h-6 text-purple-600" />,
      stats: "15K+ Women",
      color: "purple"
    },
    {
      title: "Environment",
      description: "Conservation and sustainability initiatives",
      icon: <Trees className="w-6 h-6 text-green-600" />,
      stats: "1M+ Trees",
      color: "green"
    }
  ];

  const values = [
    {
      title: "Compassion",
      description: "We approach every individual with empathy and understanding",
      icon: <Heart className="w-6 h-6 text-pink-600" />
    },
    {
      title: "Impact",
      description: "We focus on creating measurable, sustainable change",
      icon: <Target className="w-6 h-6 text-orange-600" />
    },
    {
      title: "Community",
      description: "We believe in the power of collective action",
      icon: <Users className="w-6 h-6 text-teal-600" />
    },
    {
      title: "Integrity",
      description: "We maintain transparency and accountability",
      icon: <Shield className="w-6 h-6 text-indigo-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 mt-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.section 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center justify-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6 shadow-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Our Journey
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our <span className="text-blue-600">Story</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Discover the journey of Shri Shankarcharya Swaroopanand Foundation - 
            a story of compassion, impact, and transformation in communities across the nation.
          </motion.p>
        </motion.section>

        {/* Main Story Sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {storySections.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
              className={`bg-white rounded-2xl  overflow-hidden border ${item.borderColor} hover:shadow-xl transition-all duration-300`}
            >
              {/* Image Section */}
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${item.color} p-6 text-white`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-white/20 p-2 rounded-lg mr-4 backdrop-blur-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-white/90 text-sm">{item.subtitle}</p>
                    </div>
                  </div>
                  <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                    <Award className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Since 2009</span>
                  <motion.a
                    href="#"
                    className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Read More
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Focus Areas Section */}
        <motion.div 
          className="bg-white rounded-2xl  p-8 border border-gray-200 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Focus Areas</h2>
            <p className="text-gray-600">Comprehensive programs addressing multiple dimensions of community development</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300"
              >
                <div className={`bg-${area.color}-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {area.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{area.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{area.description}</p>
                <div className={`text-${area.color}-600 font-bold text-sm`}>
                  {area.stats}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Who We Are & Values */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Who We Are */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-br from-orange-600 to-blue-700 rounded-2xl p-8 text-white "
          >
            <div className="flex items-center mb-6">
              <Globe className="w-8 h-8 mr-4" />
              <h2 className="text-2xl font-bold">Who We Are</h2>
            </div>
            <p className="text-purple-100 leading-relaxed text-lg mb-6">
              We are a caring, international community of professionals, philanthropists, and students in our programs. 
              We support youth who have lost their homes and families, yet remain determined to pursue education, 
              become self-reliant, and actively contribute to their communities.
            </p>
            <div className="flex items-center text-purple-200">
              <Star className="w-5 h-5 mr-2" />
              <span className="font-semibold">International Community Making Local Impact</span>
            </div>
          </motion.div>

          {/* Our Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="bg-white rounded-2xl  p-8 border border-gray-200"
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Values</h2>
              <p className="text-gray-600">The principles that guide our work</p>
            </div>

            <div className="space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
                >
                  <div className="bg-white p-2 rounded-lg mr-4 shadow-sm">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{value.title}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <h2 className="text-2xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Be part of our journey to create lasting change and build a more inclusive and sustainable future for all.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-white text-blue-600 font-medium px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Involved
            </motion.button>
            <motion.button
              className="border-2 border-white text-white font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurStory;