import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Youtube, Calendar, MapPin, Users, Clock, ArrowRight, ExternalLink } from 'lucide-react';

const VideoSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(0);

  const events = [
    {
      id: 1,
      title: "Annual Education Summit 2024",
      description: "Witness the transformative power of education as we celebrate another year of empowering underprivileged children through quality education initiatives.",
      youtubeId: "e9B7opGyFEE", // Replace with actual YouTube ID
      thumbnail: "https://www.youtube.com/shorts/QKppXzDVVjI",
      date: "March 15, 2024",
      location: "New Delhi, India",
      attendees: "500+",
      duration: "2:30:00",
      category: "Education"
    },
    {
      id: 2,
      title: "Women Empowerment Conference",
      description: "Celebrating the achievements of women entrepreneurs and leaders who have transformed their communities through skill development programs.",
      youtubeId: "QKppXzDVVjI", // Replace with actual YouTube ID
      thumbnail: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "February 28, 2024",
      location: "Mumbai, India",
      attendees: "300+",
      duration: "1:45:00",
      category: "Empowerment"
    },
    {
      id: 3,
      title: "Healthcare Awareness Camp",
      description: "Join us in our mission to provide healthcare access to remote communities through medical camps and awareness programs.",
      youtubeId: "e9B7opGyFEE", // Replace with actual YouTube ID
      thumbnail: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "January 20, 2024",
      location: "Rural Maharashtra",
      attendees: "1000+",
      duration: "3:15:00",
      category: "Healthcare"
    },
    {
      id: 4,
      title: "Environmental Sustainability Workshop",
      description: "Learn about our initiatives in environmental conservation and how we're working towards a greener, more sustainable future.",
      youtubeId: "QKppXzDVVjI", // Replace with actual YouTube ID
      thumbnail: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "December 10, 2023",
      location: "Bangalore, India",
      attendees: "200+",
      duration: "2:00:00",
      category: "Environment"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-700 text-white px-6 py-3 rounded-2xl text-sm font-semibold mb-6 shadow-lg shadow-orange-500/25"
          >
            <Youtube className="w-4 h-4" />
            Events & Highlights
            <div className="w-2 h-2 bg-white/80 rounded-full animate-pulse"></div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Watch Our
            <span className="block bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
              Impact Stories
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the transformative journey of our community initiatives through 
            recorded events, success stories, and impact highlights.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Video Player */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl  overflow-hidden border border-gray-200"
            >
              {/* YouTube Player */}
              <div className="relative pt-[56.25%] bg-black rounded-t-3xl overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${events[selectedVideo].youtubeId}?autoplay=0&rel=0&modestbranding=1`}
                  title={events[selectedVideo].title}
                  className="absolute top-0 left-0 w-full h-full rounded-t-3xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                   
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {events[selectedVideo].title}
                    </h3>
                  </div>
                  <button className="flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">Open in YouTube</span>
                  </button>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {events[selectedVideo].description}
                </p>

                {/* Event Details */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4 text-orange-600" />
                    <span className="text-sm font-medium">{events[selectedVideo].date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4 text-orange-600" />
                    <span className="text-sm font-medium">{events[selectedVideo].location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-4 h-4 text-orange-600" />
                    <span className="text-sm font-medium">{events[selectedVideo].attendees}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4 text-orange-600" />
                    <span className="text-sm font-medium">{events[selectedVideo].duration}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Video Playlist */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4">More Events</h3>
            
            {events.map((event, index) => (
              <motion.button
                key={event.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedVideo(index)}
                className={`w-full text-left bg-white rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-lg group ${
                  selectedVideo === index 
                    ? 'border-orange-500 shadow-lg scale-[1.02]' 
                    : 'border-gray-200 hover:border-orange-300'
                }`}
              >
                <div className="flex gap-4">
                  {/* Thumbnail */}
                  {/* <div className="relative flex-shrink-0 w-24 h-16 rounded-xl overflow-hidden">
                    <img
                      src={event.thumbnail}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="w-6 h-6 text-white fill-current" />
                    </div>
                    <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">
                      {event.duration}
                    </div>
                  </div> */}

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="font-semibold text-gray-900 text-sm leading-tight line-clamp-2">
                        {event.title}
                      </h4>
                      {selectedVideo === index && (
                        <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0 mt-1 ml-2"></div>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {event.attendees}
                      </span>
                    </div>
                    
                    <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                      {event.category}
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;