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
  Share2
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
      delay: 0.1
    },
    { 
      icon: Target, 
      number: "25+", 
      label: "Communities Served",
      change: "+3",
      trend: "up",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      delay: 0.2
    },
    { 
      icon: Award, 
      number: "15", 
      label: "Years of Service",
      change: "+1",
      trend: "up",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      delay: 0.3
    },
    { 
      icon: TrendingUp, 
      number: "95%", 
      label: "Success Rate",
      change: "+2%",
      trend: "up",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      delay: 0.4
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
      trend: "up"
    },
    {
      title: "Healthcare Impact",
      value: "100,000+",
      subtitle: "Lives Touched",
      icon: Heart,
      progress: 92,
      color: "green",
      trend: "up"
    },
    {
      title: "Women Empowered",
      value: "15,000+",
      subtitle: "Economic Independence",
      icon: TrendingUp,
      progress: 78,
      color: "purple",
      trend: "up"
    },
    {
      title: "Environmental Impact",
      value: "1M+",
      subtitle: "Trees Planted",
      icon: Globe,
      progress: 65,
      color: "emerald",
      trend: "up"
    }
  ];

  const recentActivities = [
    { action: "Education Program", location: "Rural Maharashtra", date: "2 days ago", status: "completed" },
    { action: "Medical Camp", location: "Remote Villages", date: "1 week ago", status: "completed" },
    { action: "Skill Development", location: "Urban Centers", date: "2 weeks ago", status: "in-progress" },
   
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
      {/* Dashboard Header */}
      <div className="bg-white  border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
  <div>
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-3"
    >
      <Sparkles className="w-4 h-4" />
      Since 2009
    </motion.div>
    <motion.h1 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="text-3xl font-bold text-gray-900"
    >
      Shri Shankarcharya
      <span className="block text-blue-600">Swaroopanand Foundation</span>
    </motion.h1>
    <motion.p 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 }}
      className="text-gray-600 mt-2 max-w-2xl leading-relaxed"
    >
      A dynamic non-profit organization dedicated to addressing pressing social, economic, 
      and environmental challenges through sustainable solutions and community empowerment initiatives.
    </motion.p>
  </div>
 
</div>
</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* KPI Grid */}
        <motion.div
          variants={staggerChildren}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {kpiCards.map((kpi, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg bg-${kpi.color}-50`}>
                  <kpi.icon className={`w-6 h-6 text-${kpi.color}-600`} />
                </div>
                <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                  <TrendingUp className="w-4 h-4" />
                  {kpi.trend === "up" ? "+12%" : "-5%"}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{kpi.value}</h3>
              <p className="text-gray-600 text-sm mb-3">{kpi.subtitle}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{kpi.title}</span>
                <span className="text-sm font-medium text-gray-900">{kpi.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div 
                  className={`bg-${kpi.color}-600 h-2 rounded-full transition-all duration-1000`}
                  style={{ width: `${kpi.progress}%` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Organization Overview</h2>
                <div className="flex items-center gap-2 text-blue-600">
                  <Activity className="w-5 h-5" />
                  <span className="text-sm font-medium">Live</span>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Shri Shankarcharya Swaroopanand Foundation is dedicated to creating sustainable change 
                    in underserved communities through innovative programs in education, healthcare, and empowerment.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Since 2009
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      12+ States
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Active Projects</span>
                    <span className="text-lg font-bold text-blue-600">50+</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Team Members</span>
                    <span className="text-lg font-bold text-green-600">500+</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">Success Rate</span>
                    <span className="text-lg font-bold text-purple-600">95%</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Recent Activities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Recent Activities</h2>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View All
                </button>
              </div>
              
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className={`w-3 h-3 rounded-full ${
                        activity.status === 'completed' ? 'bg-green-500' : 'bg-blue-500'
                      }`}></div>
                      <div>
                        <div className="font-medium text-gray-900">{activity.action}</div>
                        <div className="text-sm text-gray-500">{activity.location}</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">{activity.date}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Impact Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-gray-200 p-6"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6">Impact Metrics</h2>
              
              <div className="space-y-4">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}>
                        <stat.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{stat.number}</div>
                        <div className="text-sm text-gray-500">{stat.label}</div>
                      </div>
                    </div>
                    <div className={`flex items-center gap-1 text-sm font-medium ${
                      stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 text-white"
            >
              <h2 className="text-xl font-bold mb-4">Trust & Transparency</h2>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-blue-300" />
                  <span className="text-blue-100">80G Certified Organization</span>
                </div>
                <div className="flex items-center gap-3">
                  <CircleDollarSign className="w-5 h-5 text-green-300" />
                  <span className="text-blue-100">Transparent Financial Reporting</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-yellow-300" />
                  <span className="text-blue-100">National Recognition Awards</span>
                </div>
                <div className="flex items-center gap-3">
                  <Eye className="w-5 h-5 text-red-300" />
                  <span className="text-blue-100">Public Impact Reports</span>
                </div>
              </div>

             
            </motion.div>


           
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;