
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  X, 
  ZoomIn, 
  Download, 
  Share, 
  Heart, 
  Calendar,
  MapPin,
  Users,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Photos', count: 28 },
    { id: 'events', name: 'Events', count: 12 },
    { id: 'community', name: 'Community', count: 8 },
    { id: 'education', name: 'Education', count: 6 },
    { id: 'healthcare', name: 'Healthcare', count: 4 },
    { id: 'environment', name: 'Environment', count: 6 },
  ];

  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1541336032412-2048a678540d?w=500&h=400&fit=crop",
      category: "events",
      title: "Health Camp in Rural Village",
      description: "Free medical checkup camp organized for 500+ villagers",
      date: "2024-03-15",
      location: "Rural Maharashtra",
      likes: 45,
      downloads: 23
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&h=400&fit=crop",
      category: "education",
      title: "Digital Learning Initiative",
      description: "Children learning through digital tablets in remote schools",
      date: "2024-02-28",
      location: "Government School, Pune",
      likes: 67,
      downloads: 34
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500&h=400&fit=crop",
      category: "community",
      title: "Women Empowerment Workshop",
      description: "Skill development training for women entrepreneurs",
      date: "2024-03-10",
      location: "Community Center, Mumbai",
      likes: 89,
      downloads: 45
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=500&h=400&fit=crop",
      category: "environment",
      title: "Tree Plantation Drive",
      description: "Volunteers planting 1000+ saplings in urban areas",
      date: "2024-01-22",
      location: "Green Belt, Delhi",
      likes: 112,
      downloads: 67
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=500&h=400&fit=crop",
      category: "healthcare",
      title: "Medical Awareness Session",
      description: "Healthcare professionals educating villagers about hygiene",
      date: "2024-03-08",
      location: "Rural Clinic, Rajasthan",
      likes: 56,
      downloads: 28
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=400&fit=crop",
      category: "education",
      title: "Library Inauguration",
      description: "New community library opening for underprivileged children",
      date: "2024-02-14",
      location: "Slum Area, Kolkata",
      likes: 78,
      downloads: 39
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500&h=400&fit=crop",
      category: "events",
      title: "Annual Cultural Festival",
      description: "Celebrating diversity with traditional performances",
      date: "2024-01-30",
      location: "Community Ground, Chennai",
      likes: 134,
      downloads: 78
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1541336032412-2048a678540d?w=500&h=400&fit=crop",
      category: "community",
      title: "Elderly Care Program",
      description: "Weekly activities and healthcare for senior citizens",
      date: "2024-03-05",
      location: "Senior Home, Bangalore",
      likes: 91,
      downloads: 42
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&h=400&fit=crop",
      category: "environment",
      title: "Clean Water Initiative",
      description: "Installing water purification systems in villages",
      date: "2024-02-20",
      location: "Tribal Village, Odisha",
      likes: 67,
      downloads: 31
    }
  ];

  const filteredImages = images.filter(image => {
    const matchesCategory = activeFilter === 'all' || image.category === activeFilter;
    const matchesSearch = image.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         image.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const nextImage = () => {
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
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
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            Impact Gallery
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Moments of <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Impact</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore the visual journey of our work - from community events to life-changing initiatives. 
            Each photo tells a story of hope, transformation, and collective effort.
          </p>
        </motion.div>


        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <p className="text-gray-600">
            Showing {filteredImages.length} of {images.length} photos
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl  transition-all duration-500 overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white font-bold text-lg mb-2">{image.title}</h3>
                    <p className="text-white/90 text-sm line-clamp-2">{image.description}</p>
                  </div>

                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      <button className="p-2 bg-white/90 rounded-lg hover:bg-white transition-colors">
                        <ZoomIn className="w-4 h-4 text-gray-700" />
                      </button>
                      <button className="p-2 bg-white/90 rounded-lg hover:bg-white transition-colors">
                        <Heart className="w-4 h-4 text-gray-700" />
                      </button>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700">
                      {image.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-900 line-clamp-1">{image.title}</h3>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Heart className="w-4 h-4 text-red-500" />
                      <span>{image.likes}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm line-clamp-2 mb-3">{image.description}</p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(image.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span className="line-clamp-1">{image.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No photos found</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Try adjusting your search or filter criteria to find what you're looking for.
            </p>
          </motion.div>
        )}

        {/* Load More */}
        {filteredImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg">
              Load More Photos
            </button>
          </motion.div>
        )}
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-colors"
              >
                <X className="w-6 h-6 text-gray-700" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                {/* Image */}
                <div className="relative h-96 lg:h-full">
                  <img
                    src={selectedImage.url}
                    alt={selectedImage.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Image Actions */}
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <button className="p-3 bg-white/90 backdrop-blur-sm rounded-xl hover:bg-white transition-colors">
                      <Download className="w-5 h-5 text-gray-700" />
                    </button>
                    <button className="p-3 bg-white/90 backdrop-blur-sm rounded-xl hover:bg-white transition-colors">
                      <Share className="w-5 h-5 text-gray-700" />
                    </button>
                    <button className="p-3 bg-white/90 backdrop-blur-sm rounded-xl hover:bg-white transition-colors">
                      <Heart className="w-5 h-5 text-gray-700" />
                    </button>
                  </div>
                </div>

                {/* Details */}
                <div className="p-8 overflow-y-auto">
                  <div className="mb-6">
                    <span className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
                      {selectedImage.category}
                    </span>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedImage.title}</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">{selectedImage.description}</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-600">Date</p>
                        <p className="font-semibold text-gray-900">
                          {new Date(selectedImage.date).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-600">Location</p>
                        <p className="font-semibold text-gray-900">{selectedImage.location}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-2">
                        <Heart className="w-5 h-5 text-red-500" />
                        <span className="font-semibold text-gray-900">{selectedImage.likes} likes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Download className="w-5 h-5 text-blue-500" />
                        <span className="font-semibold text-gray-900">{selectedImage.downloads} downloads</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;