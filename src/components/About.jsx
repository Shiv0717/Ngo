import React from "react";
import { motion } from "framer-motion";
import { 
  Heart, 
  Users, 
  Target, 
  Award, 
  TrendingUp, 
  ArrowRight, 
  Star, 
  Shield,
  Sparkles,
  Globe,
  Clock,
  Ribbon,
  HandHeart,
  CircleDollarSign,
  MapPin,
  Calendar,
  ThumbsUp,
  BarChart3,
  PieChart,
  Activity,
  Eye,
  Download,
  Share2,
  Play,
  Image as ImageIcon
} from "lucide-react";

const About = () => {
  const stats = [
    { 
      icon: Users, 
      number: "50K+", 
      label: "Lives Impacted",
      change: "+12%",
      trend: "up",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      delay: 0.1,
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    { 
      icon: Target, 
      number: "25+", 
      label: "Communities Served",
      change: "+3",
      trend: "up",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      delay: 0.2,
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    { 
      icon: Award, 
      number: "15", 
      label: "Years of Service",
      change: "+1",
      trend: "up",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      delay: 0.3,
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    
  ];

  const kpiCards = [
    {
      title: "Education Reach",
      value: "50,000+",
      subtitle: "Students Educated",
      icon: Users,
      progress: 85,
      color: "blue",
      trend: "up",
      image: "https://shrishankaracharya.org/wp-content/uploads/2024/05/kanha-kids-a-play-school-and-day-care-kolar-road-bhopal-schools-0dggajqcgh-2.jpg"
    },
    {
      title: "Healthcare Impact",
      value: "100,000+",
      subtitle: "Lives Touched",
      icon: Heart,
      progress: 92,
      color: "green",
      trend: "up",
      image: "https://shrishankaracharya.org/wp-content/uploads/2024/05/Sanitary-pad-distribution-2.jpeg"
    },
    {
      title: "Women Empowered",
      value: "15,000+",
      subtitle: "Economic Independence",
      icon: TrendingUp,
      progress: 78,
      color: "purple",
      trend: "up",
      image: "https://shrishankaracharya.org/wp-content/uploads/2024/05/Women-Empowerment.jpeg"
    },
    {
      title: "Environmental Impact",
      value: "1M+",
      subtitle: "Trees Planted",
      icon: Globe,
      progress: 65,
      color: "emerald",
      trend: "up",
      image: "https://shrishankaracharya.org/wp-content/uploads/2024/05/world-health-day-2019-nmcg-organises-cleanup-yamuna-ghat-delhi-twitter-660x330-1.jpg"
    }
  ];

  const recentActivities = [
    { 
      action: "Education Program", 
      location: "Rural Maharashtra", 
      date: "2 days ago", 
      status: "completed",
      image: "https://shrishankaracharya.org/wp-content/uploads/2024/05/kanha-kids-a-play-school-and-day-care-kolar-road-bhopal-schools-0dggajqcgh-2.jpg"
    },
    { 
      action: "Medical Camp", 
      location: "Remote Villages", 
      date: "1 week ago", 
      status: "completed",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    { 
      action: "Skill Development", 
      location: "Urban Centers", 
      date: "2 weeks ago", 
      status: "in-progress",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
  };

  const staggerChildren = {
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/10 to-purple-50/5">
      {/* Hero Section with Image */}
      <div className="relative bg-white border-b border-gray-200 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Foundation Hero"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
              >
                <Sparkles className="w-4 h-4" />
                Transforming Lives Since 2009
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
              >
                Shri Shankarcharya
                <span className="block text-blue-600 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  Swaroopanand Foundation
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                A dynamic non-profit organization dedicated to addressing pressing social, economic, 
                and environmental challenges through sustainable solutions and community empowerment initiatives.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <Play className="w-5 h-5" />
                  Watch Our Story
                </button>
                
              </motion.div>
            </motion.div>

            {/* Image Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <motion.div 
                  className="rounded-2xl overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="https://shrishankaracharya.org/wp-content/uploads/2024/05/kanha-kids-a-play-school-and-day-care-kolar-road-bhopal-schools-0dggajqcgh-2.jpg"
                    alt="Education Program"
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
                <motion.div 
                  className="rounded-2xl overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <img 
                    src="https://shrishankaracharya.org/wp-content/uploads/2024/05/Tribal-culinary-skills.jpg"
                    alt="Healthcare"
                    className="w-full h-32 object-cover"
                  />
                </motion.div>
              </div>
              <div className="space-y-4 pt-8">
                <motion.div 
                  className="rounded-2xl overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <img 
                    src="https://shrishankaracharya.org/wp-content/uploads/2024/05/Picture22.png"
                    alt="Women Empowerment"
                    className="w-full h-32 object-cover"
                  />
                </motion.div>
                <motion.div 
                  className="rounded-2xl overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <img 
                    src="https://shrishankaracharya.org/wp-content/uploads/2024/05/world-health-day-2019-nmcg-organises-cleanup-yamuna-ghat-delhi-twitter-660x330-1.jpg"
                    alt="Environmental Work"
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* KPI Grid with Images */}
        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {kpiCards.map((kpi, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-500 group"
            >
              {/* Image Section */}
              <div className="relative h-32 overflow-hidden">
                <img 
                  src={kpi.image}
                  alt={kpi.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className={`p-2 rounded-lg bg-white/20 backdrop-blur-sm`}>
                    <kpi.icon className={`w-5 h-5 text-white`} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">{kpi.title}</h3>
                  <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                    <TrendingUp className="w-4 h-4" />
                    {kpi.trend === "up" ? "+12%" : "-5%"}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{kpi.value}</h3>
                <p className="text-gray-600 text-sm">{kpi.subtitle}</p>
                
                
                
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview Card with Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
            >
              <div className="relative h-48">
                <img 
                  src="https://shrishankaracharya.org/wp-content/uploads/2024/05/kanha-kids-a-play-school-and-day-care-kolar-road-bhopal-schools-0dggajqcgh-2.jpg"
                  alt="Our Mission"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
                <div className="absolute bottom-6 left-6">
                  <h2 className="text-2xl font-bold text-white">Our Mission & Vision</h2>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Mission</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Shri Shankarcharya Swaroopanand Foundation is dedicated to creating sustainable change 
                      in underserved communities through innovative programs in education, healthcare, and empowerment.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Since 2009
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        12+ States
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                      <span className="text-sm font-medium text-gray-700">Active Projects</span>
                      <span className="text-lg font-bold text-blue-600">50+</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                      <span className="text-sm font-medium text-gray-700">Team Members</span>
                      <span className="text-lg font-bold text-green-600">500+</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                      <span className="text-sm font-medium text-gray-700">Success Rate</span>
                      <span className="text-lg font-bold text-purple-600">95%</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Recent Activities with Images */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Recent Activities</h2>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-2">
                    View All Gallery
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors group">
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                        <img 
                          src={activity.image}
                          alt={activity.action}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className={`absolute top-1 right-1 w-3 h-3 rounded-full ${
                          activity.status === 'completed' ? 'bg-green-500' : 'bg-blue-500'
                        }`}></div>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{activity.action}</div>
                        <div className="text-sm text-gray-500 flex items-center gap-2">
                          <MapPin className="w-3 h-3" />
                          {activity.location}
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">{activity.date}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Impact Stats with Images */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Impact Metrics</h2>
                
                <div className="space-y-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-xl transition-colors group">
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
                        <img 
                          src={stat.image}
                          alt={stat.label}
                          className="w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-20`}></div>
                        <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center opacity-90`}>
                          <stat.icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{stat.number}</div>
                        <div className="text-sm text-gray-500">{stat.label}</div>
                      </div>
                      <div className={`flex items-center gap-1 text-sm font-medium ${
                        stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {stat.change}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Photo Gallery */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Photo Gallery</h2>
                <div className="grid grid-cols-2 gap-3">
                  {galleryImages.map((image, index) => (
                    <motion.div
                      key={index}
                      className="aspect-square rounded-xl overflow-hidden cursor-pointer group"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src={image}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </motion.div>
                  ))}
                </div>
                <button className="w-full mt-4 text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center justify-center gap-2 py-3">
                  <ImageIcon className="w-4 h-4" />
                  View All Photos
                </button>
              </div>
            </motion.div>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;