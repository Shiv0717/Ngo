// HeroSection.jsx
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    title: "Creating Positive Change",
    subtitle: "Join our mission to build better communities through sustainable initiatives and collective action.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    buttonText: "Learn More",
    buttonColor: "bg-blue-500 hover:bg-blue-600",
    badge: "Since 1999"
  },
  {
    id: 2,
    title: "Empower Communities",
    subtitle: "Your support helps provide education and opportunities to those who need it most.",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    buttonText: "Get Involved",
    buttonColor: "bg-green-500 hover:bg-green-600",
    badge: "120+ Projects"
  },
  {
    id: 3,
    title: "Make a Difference",
    subtitle: "Together we can create lasting impact and transform lives for generations to come.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    buttonText: "Donate Now",
    buttonColor: "bg-purple-500 hover:bg-purple-600",
    badge: "50K+ Lives"
  },
  {
    id: 4,
    title: "Build Hope Together",
    subtitle: "Join thousands of volunteers making a real difference in communities worldwide.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    buttonText: "Volunteer",
    buttonColor: "bg-orange-500 hover:bg-orange-600",
    badge: "25+ Years"
  }
];

const HeroSection = () => {
  const swiperRef = useRef(null);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 mt-20 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl overflow-hidden shadow-xl bg-white"
      >
        <Swiper
          ref={swiperRef}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          speed={800}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            el: '.custom-pagination',
            bulletClass: 'custom-bullet',
            bulletActiveClass: 'custom-bullet-active',
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="h-[500px] sm:h-[550px] rounded-2xl"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div className="relative h-full w-full group">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
                
                {/* Content */}
                <div className="relative h-full flex items-center">
                  <div className="container mx-auto px-6 lg:px-12">
                    <div className="max-w-md">
                      {/* Badge */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-4"
                      >
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                        <span className="text-white text-xs font-medium">{slide.badge}</span>
                      </motion.div>

                      {/* Title */}
                      <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight"
                      >
                        {slide.title}
                      </motion.h1>

                      {/* Subtitle */}
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-sm sm:text-base text-white/90 mb-6 leading-relaxed max-w-md"
                      >
                        {slide.subtitle}
                      </motion.p>

                      {/* CTA Buttons */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-3"
                      >
                        <button 
                          className={`px-6 py-2.5 ${slide.buttonColor} text-white rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md`}
                        >
                          {slide.buttonText}
                        </button>
                        <button className="px-6 py-2.5 bg-transparent border border-white/40 text-white rounded-lg font-medium text-sm transition-all duration-300 hover:bg-white/10 hover:border-white/60">
                          Our Story
                        </button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
       
      </motion.div>

      {/* Additional Info Cards */}
     
    </div>
  );
};

export default HeroSection;