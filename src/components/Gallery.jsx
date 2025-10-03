import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CommunityImpact = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const headerRef = useRef(null);
  const ctaRef = useRef(null);

  const featuredId = 2; // ID of the featured item for the left 30%

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 80, scale: 0.9 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        });

      // Animate cards (skip featured one)
      cardRefs.current.forEach((card, index) => {
        gsap.fromTo(card,
          { opacity: 0, y: 100, rotationY: 15, scale: 0.8 },
          {
            opacity: 1, y: 0, rotationY: 0, scale: 1,
            duration: 1,
            ease: "power3.out",
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          });
      });

      // CTA animation
      gsap.fromTo(ctaRef.current,
        { opacity: 0, y: 60, scale: 0.8 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        });

      // Hover animations
      cardRefs.current.forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -12,
            rotationY: 8,
            scale: 1.03,
            duration: 0.5,
            ease: "power2.out"
          });

          const image = card.querySelector('img');
          const number = card.querySelector('.card-number');
          const stats = card.querySelector('.impact-stats');

          gsap.to(image, { scale: 1.15, duration: 0.5, ease: "power2.out" });
          gsap.to(number, {
            scale: 1.2,
            backgroundColor: card.dataset.color,
            duration: 0.4
          });

          if (stats) {
            gsap.to(stats, { opacity: 1, y: 0, duration: 0.4, delay: 0.1 });
          }
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            rotationY: 0,
            scale: 1,
            duration: 0.5,
            ease: "power2.out"
          });

          const image = card.querySelector('img');
          const number = card.querySelector('.card-number');
          const stats = card.querySelector('.impact-stats');

          gsap.to(image, { scale: 1, duration: 0.5 });
          gsap.to(number, { scale: 1, duration: 0.4 });

          if (stats) {
            gsap.to(stats, { opacity: 0, y: 20, duration: 0.3 });
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const impactAreas = [
    {
      id: 1,
      title: "Education for All",
      image: "https://shrishankaracharya.org/wp-content/uploads/2024/05/kanha-kids-a-play-school-and-day-care-kolar-road-bhopal-schools-0dggajqcgh-2.jpg",
      color: "#3B82F6",
      description: "Providing quality education to underprivileged children.",
      duration: "Since 2009"
    },
    {
      id: 2,
      title: "Women Empowerment",
      image: "https://shrishankaracharya.org/wp-content/uploads/2024/05/Women-Empowerment.jpeg",
      color: "#8B5CF6",
      description: "Skill development programs for independent women leaders.",
      duration: "5 Years"
    },
    {
      id: 3,
      title: "Healthcare Initiatives",
      image: "https://shrishankaracharya.org/wp-content/uploads/2024/05/Sanitary-pad-distribution-2.jpeg",
      color: "#10B981",
      description: "Medical camps and awareness in underserved communities.",
      duration: "Ongoing"
    },
    {
      id: 4,
      title: "Child Protection",
      image: "https://shrishankaracharya.org/wp-content/uploads/2024/05/children_in_slums.jpg",
      color: "#EF4444",
      description: "Safe environments and rehabilitation for vulnerable children.",
      duration: "7 Years"
    },
    {
      id: 5,
      title: "Disaster Relief",
      image: "https://shrishankaracharya.org/wp-content/uploads/2024/05/India-Covid-19.jpg",
      color: "#F59E0B",
      description: "Emergency response and rehab support during crises.",
      duration: "Emergency Response"
    }
  ];

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-24 px-4 bg-gradient-to-br from-slate-50 via-blue-50/20 to-purple-50/10 font-sans"
    >
      {/* Header */}
      <div ref={headerRef} className="text-center mb-20">
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
          <div className="w-2 h-2 bg-white/80 rounded-full animate-pulse"></div>
          Our Impact Areas
        </div>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent font-serif">
          Community Impact
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Transforming lives through programs that build stronger, more resilient communities.
        </p>
      </div>

      {/* Grid Layout 30% - 70% */}
      <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-6 max-w-7xl mx-auto">
        {/* Left Side: Featured Large Image */}
        <div className="hidden lg:block">
          <div className="relative w-full h-full min-h-[32rem] overflow-hidden rounded-3xl shadow-lg">
            <img
              src={impactAreas.find(a => a.id === featuredId).image}
              alt="Featured Impact"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-6 text-white flex items-end">
              <div>
                <h3 className="text-3xl font-bold mb-2">
                  {impactAreas.find(a => a.id === featuredId).title}
                </h3>
                <p className="text-sm text-white/90">
                  {impactAreas.find(a => a.id === featuredId).description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {impactAreas
            .filter(area => area.id !== featuredId)
            .map((area, index) => (
              <div
                key={area.id}
                ref={addToRefs}
                data-color={area.color}
                className="group relative overflow-hidden rounded-3xl cursor-pointer transform perspective-1000 transition-shadow duration-500 h-80"
              >
                <div className="relative w-full h-full overflow-hidden rounded-3xl">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover transform transition-transform duration-700"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(45deg, ${area.color}30, transparent)` }}
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{ backgroundColor: area.color }}
                  />
                </div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                  <div
                    className="card-number absolute top-6 right-6 w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-lg border-2 border-white/20 transition-all duration-300 shadow-lg"
                    style={{ backgroundColor: `${area.color}CC` }}
                  >
                    0{area.id}
                  </div>
                  <div className="card-content transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold text-white mb-2 font-serif">{area.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      {area.description}
                    </p>
                    <div
                      className="mt-4 inline-block px-4 py-2 rounded-full text-white text-xs font-semibold border border-white/30"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      {area.duration}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* CTA */}
      <div ref={ctaRef} className="text-center mt-16">
        <button className="group inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-500 hover:scale-105 hover:gap-6">
          <span>Join Our Mission</span>
          <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
        <p className="text-gray-600 mt-4 text-sm">
          Become part of our journey to create lasting change in communities.
        </p>
      </div>

      {/* Floating animation keyframes */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default CommunityImpact;
