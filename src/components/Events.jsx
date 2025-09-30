import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  Heart, 
  ArrowRight, 
  Filter, 
  Search,
  Star,
  TrendingUp,
  Target,
  Award,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const Events = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filters = [
    { id: 'all', label: 'All Events' },
    { id: 'upcoming', label: 'Upcoming' },
    { id: 'ongoing', label: 'Ongoing' },
    { id: 'past', label: 'Past Events' },
    { id: 'campaigns', label: 'Campaigns' },
  ];

  const events = [
    {
      id: 1,
      title: "Health & Hygiene Awareness Drive",
      type: "campaign",
      status: "ongoing",
      date: "2024-03-15",
      endDate: "2024-04-15",
      time: "9:00 AM - 5:00 PM",
      location: "Rural Communities, Maharashtra",
      attendees: 5000,
      description: "A month-long campaign to promote health and hygiene practices in rural areas, including medical checkups and awareness sessions.",
      image: "https://plus.unsplash.com/premium_photo-1723673018268-3dba348f1694?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "from-blue-500 to-blue-600",
      icon: Heart,
      volunteers: 120,
      impact: "10,000+ people reached"
    },
    {
      id: 2,
      title: "Education for All - School Kit Distribution",
      type: "event",
      status: "upcoming",
      date: "2024-04-05",
      time: "10:00 AM - 2:00 PM",
      location: "Government Schools, Pune",
      attendees: 2000,
      description: "Distribution of school kits including books, uniforms, and stationery to underprivileged children across 25 government schools.",
      image: "https://plus.unsplash.com/premium_photo-1683135012485-412ba9531a3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "from-green-500 to-green-600",
      icon: Target,
      volunteers: 80,
      impact: "2,000 children supported"
    },
    {
      id: 3,
      title: "Women Empowerment Workshop Series",
      type: "campaign",
      status: "ongoing",
      date: "2024-03-01",
      endDate: "2024-06-01",
      time: "2:00 PM - 6:00 PM",
      location: "Community Centers, Multiple Cities",
      attendees: 1500,
      description: "A 3-month workshop series focusing on skill development, financial literacy, and entrepreneurship for women from underprivileged backgrounds.",
      image: "/events/women-empowerment.jpg",
      color: "from-purple-500 to-purple-600",
      icon: TrendingUp,
      volunteers: 60,
      impact: "1,500 women trained"
    },
    {
      id: 4,
      title: "Tree Plantation Drive 2024",
      type: "event",
      status: "upcoming",
      date: "2024-06-05",
      time: "7:00 AM - 12:00 PM",
      location: "Green Belt Areas, Mumbai",
      attendees: 300,
      description: "Join us in planting 5000 saplings to combat climate change and create greener urban spaces. Perfect for corporate volunteering.",
      image: "/events/tree-plantation.jpg",
      color: "from-emerald-500 to-emerald-600",
      icon: Award,
      volunteers: 200,
      impact: "5,000 trees to be planted"
    },
    {
      id: 5,
      title: "Digital Literacy Camp for Seniors",
      type: "campaign",
      status: "ongoing",
      date: "2024-02-01",
      endDate: "2024-05-31",
      time: "3:00 PM - 5:00 PM",
      location: "Senior Citizen Centers, Delhi",
      attendees: 800,
      description: "Teaching digital skills to senior citizens to help them stay connected with family and access online services safely.",
      image: "/events/digital-literacy.jpg",
      color: "from-orange-500 to-orange-600",
      icon: Users,
      volunteers: 45,
      impact: "800 seniors trained"
    },
    {
      id: 6,
      title: "Annual Fundraising Gala 2024",
      type: "event",
      status: "upcoming",
      date: "2024-12-10",
      time: "6:00 PM - 11:00 PM",
      location: "Grand Hyatt, Mumbai",
      attendees: 500,
      description: "An elegant evening of dinner, entertainment, and inspiring stories to raise funds for our education and healthcare initiatives.",
      image: "/events/fundraising-gala.jpg",
      color: "from-red-500 to-red-600",
      icon: Star,
      volunteers: 30,
      impact: "₹50L fundraising target"
    }
  ];

  const filteredEvents = events.filter(event => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'upcoming') return event.status === 'upcoming';
    if (activeFilter === 'ongoing') return event.status === 'ongoing';
    if (activeFilter === 'past') return event.status === 'past';
    if (activeFilter === 'campaigns') return event.type === 'campaign';
    return true;
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <Calendar className="w-4 h-4" />
            Events & Campaigns
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Join Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mission</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover upcoming events, ongoing campaigns, and opportunities to make a difference. 
            Together, we can create lasting impact in communities.
          </p>
        </motion.div>

        {/* Filters and Search */}
       

        {/* Events Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl  transition-all duration-500 border border-gray-100 overflow-hidden cursor-pointer"
              onClick={() => setSelectedEvent(event)}
            >
              {/* Status Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  event.status === 'ongoing' ? 'bg-green-100 text-green-800' :
                  event.status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {event.status === 'ongoing' ? 'Ongoing' : event.status === 'upcoming' ? 'Upcoming' : 'Past'}
                </span>
              </div>

              {/* Type Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  event.type === 'campaign' ? 'bg-purple-100 text-purple-800' : 'bg-orange-100 text-orange-800'
                }`}>
                  {event.type === 'campaign' ? 'Campaign' : 'Event'}
                </span>
              </div>

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <event.icon className="w-16 h-16 text-gray-400" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {event.title}
                </h3>

                {/* Date and Time */}
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(event.date)}</span>
                    {event.endDate && (
                      <span> - {formatDate(event.endDate)}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="line-clamp-1">{event.location}</span>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-2">
                  {event.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{event.attendees.toLocaleString()}+ attendees</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4 text-red-500" />
                    <span>{event.volunteers} volunteers</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full mt-4 flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-2 rounded-xl font-semibold hover:bg-gray-200 transition-colors group/btn">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
       
      </div>

    
     
    </section>
  );
};

export default Events;