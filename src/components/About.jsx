import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Users, 
  Target, 
  Award, 
  Globe, 
  Star, 
  TrendingUp, 
  Shield,
  Clock,
  MapPin,
  BookOpen,
  GraduationCap
} from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { icon: Users, value: "125,000+", label: "Lives Impacted", color: "from-blue-500 to-blue-600" },
    { icon: Globe, value: "8+", label: "States", color: "from-green-500 to-green-600" },
    { icon: Award, value: "45+", label: "Active Programs", color: "from-orange-500 to-orange-600" },
    { icon: Clock, value: "19", label: "Years of Service", color: "from-purple-500 to-purple-600" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach every individual with empathy and understanding, recognizing the inherent dignity in every person we serve.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Shield,
      title: "Transparency",
      description: "We maintain complete openness in our operations, finances, and impact reporting to build trust with our stakeholders.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Community-Driven",
      description: "Our programs are designed with and for the communities we serve, ensuring relevance and sustainable impact.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Target,
      title: "Impact-Focused",
      description: "Every initiative is measured against clear outcomes to ensure we're creating meaningful, lasting change.",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const timeline = [
    {
      year: "2005",
      title: "Foundation",
      description: "Started with a single education program in rural Maharashtra",
      icon: BookOpen
    },
    {
      year: "2010",
      title: "Expansion",
      description: "Launched healthcare and women empowerment initiatives across 3 states",
      icon: TrendingUp
    },
    {
      year: "2015",
      title: "Recognition",
      description: "Received national award for excellence in rural education",
      icon: Award
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Implemented technology solutions to scale our impact during pandemic",
      icon: Globe
    },
    {
      year: "2024",
      title: "Present Day",
      description: "Serving 125,000+ beneficiaries across 8 states with 45+ programs",
      icon: Star
    }
  ];

  const team = [
    {
      name: "Dr. Priya Sharma",
      role: "Founder & CEO",
      image: "/team/priya-sharma.jpg",
      description: "Social worker with 25+ years of experience in community development",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Rahul Verma",
      role: "Program Director",
      image: "/team/rahul-verma.jpg",
      description: "Expert in sustainable development and project management",
      color: "from-green-500 to-green-600"
    },
    {
      name: "Anita Desai",
      role: "Head of Education",
      image: "/team/anita-desai.jpg",
      description: "Former principal with passion for rural education reform",
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "Kiran Patel",
      role: "Healthcare Coordinator",
      image: "/team/kiran-patel.jpg",
      description: "Medical professional dedicated to rural healthcare access",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/20">
      {/* Hero Section */}
      <div className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg"
            >
              <Heart className="w-4 h-4" fill="currentColor" />
              Making a Difference Since 2005
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Transforming Lives,
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Building Futures
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              For nearly two decades, we've been dedicated to creating sustainable change 
              in underprivileged communities through education, healthcare, and empowerment initiatives.
            </motion.p>
          </div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group hover:scale-105"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-blue-600">Mission</span> &{" "}
                <span className="text-green-600">Vision</span>
              </h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-2xl p-6 border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Our Mission
                  </h3>
                  <p className="text-blue-800 leading-relaxed">
                    To empower underprivileged communities through sustainable education, 
                    healthcare, and skill development programs that break the cycle of poverty 
                    and create lasting positive change.
                  </p>
                </div>
                
                <div className="bg-green-50 rounded-2xl p-6 border-l-4 border-green-500">
                  <h3 className="text-xl font-bold text-green-900 mb-3 flex items-center gap-2">
                    <Globe className="w-5 h-5" />
                    Our Vision
                  </h3>
                  <p className="text-green-800 leading-relaxed">
                    A world where every individual has access to quality education, 
                    healthcare, and opportunities to realize their full potential, 
                    regardless of their socioeconomic background.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Star className="w-6 h-6" fill="currentColor" />
                  Why We Exist
                </h3>
                <p className="text-blue-100 leading-relaxed mb-6">
                  In a country where millions still lack access to basic education and healthcare, 
                  we believe that every child deserves a chance to learn, every family deserves 
                  access to medical care, and every community deserves the tools to build a better future.
                </p>
                <div className="flex items-center gap-2 text-blue-200">
                  <MapPin className="w-4 h-4" />
                  <span>Serving communities across 8 states in India</span>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full shadow-lg"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full shadow-lg"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core <span className="text-blue-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every action we take
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group text-center"
              >
                <div className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 group-hover:scale-105 mb-6`}>
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${value.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to creating nationwide impact
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-600 h-full"></div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 mb-4`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.year}</h3>
                    <h4 className="text-lg font-semibold text-blue-600 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-blue-500 rounded-full shadow-lg z-10"></div>
                
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-blue-600">Leadership</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate professionals dedicated to creating lasting change
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group text-center"
              >
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 group-hover:scale-105 mb-4 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${member.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Profile Image Placeholder */}
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 mx-auto mb-4 flex items-center justify-center">
                    <GraduationCap className="w-10 h-10 text-gray-500" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${member.color} mb-3`}>
                    {member.role}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default AboutUs;