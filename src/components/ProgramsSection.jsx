import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Award, Users, Target, BookOpen, Shield, Heart, Home, ChefHat, Briefcase, Trees, Utensils } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Programs = () => {
  const cardsRef = useRef([]);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [activeProgram, setActiveProgram] = useState(null);

  const programs = [
    {
      id: "P01",
      icon: BookOpen,
      title: "Education",
      description: "Providing quality education and learning opportunities for underprivileged children and youth through schools, scholarships, and digital learning initiatives.",
      color: "#3B82F6",
      stats: "50,000+ Students",
      impact: "85% Completion Rate",
      achievements: [
        "Digital learning initiatives implemented",
        "Scholarships for underprivileged students",
        "Quality education programs in rural areas"
      ],
      details: {
        beneficiaries: "50,000+",
        duration: "Ongoing",
        reach: "National"
      }
    },
    {
      id: "P02",
      icon: Shield,
      title: "Child Protection",
      description: "Ensuring safe environments for children through advocacy, counseling, and rehabilitation programs that protect their rights and well-being.",
      color: "#EF4444",
      stats: "25,000+ Children Protected",
      impact: "92% Success Rate",
      achievements: [
        "Child protection advocacy programs",
        "Counseling and rehabilitation services",
        "Safe environment initiatives"
      ],
      details: {
        beneficiaries: "25,000+",
        duration: "5 Years",
        reach: "Multi-state"
      }
    },
    {
      id: "P03",
      icon: Users,
      title: "Women Empowerment",
      description: "Empowering women through skill development, financial literacy, and leadership programs to create independent and confident community leaders.",
      color: "#8B5CF6",
      stats: "15,000+ Women Empowered",
      impact: "78% Employment Rate",
      achievements: [
        "Skill development workshops",
        "Financial literacy programs",
        "Leadership training initiatives"
      ],
      details: {
        beneficiaries: "15,000+",
        duration: "3 Years",
        reach: "Urban & Rural"
      }
    },
    {
      id: "P04",
      icon: Heart,
      title: "Health and Hygiene",
      description: "Promoting health awareness, medical camps, and hygiene practices to improve community health outcomes and prevent diseases.",
      color: "#10B981",
      stats: "100,000+ Lives Impacted",
      impact: "65% Health Improvement",
      achievements: [
        "Medical camps in remote areas",
        "Health awareness campaigns",
        "Hygiene practice implementation"
      ],
      details: {
        beneficiaries: "100,000+",
        duration: "Ongoing",
        reach: "National"
      }
    },
    {
      id: "P05",
      icon: Home,
      title: "Disaster Relief & Rehabilitation",
      description: "Providing immediate relief and long-term rehabilitation support to communities affected by natural disasters and emergencies.",
      color: "#F59E0B",
      stats: "200+ Disaster Responses",
      impact: "500K+ People Helped",
      achievements: [
        "Emergency relief operations",
        "Long-term rehabilitation programs",
        "Community rebuilding initiatives"
      ],
      details: {
        beneficiaries: "500,000+",
        duration: "Emergency + Long-term",
        reach: "Disaster-affected areas"
      }
    },
    {
      id: "P06",
      icon: ChefHat,
      title: "Tribal Culinary Skill Development",
      description: "Preserving tribal culinary heritage while creating sustainable livelihood opportunities through culinary training and enterprise development.",
      color: "#DC2626",
      stats: "2,000+ Tribal Chefs Trained",
      impact: "89% Placement Rate",
      achievements: [
        "Culinary heritage preservation",
        "Skill development training",
        "Enterprise development support"
      ],
      details: {
        beneficiaries: "2,000+",
        duration: "2 Years",
        reach: "Tribal regions"
      }
    },
    {
      id: "P07",
      icon: Briefcase,
      title: "Livelihood Programme",
      description: "Creating sustainable livelihood opportunities through vocational training, micro-enterprise development, and employment support.",
      color: "#059669",
      stats: "10,000+ Livelihoods Created",
      impact: "95% Sustainability",
      achievements: [
        "Vocational training programs",
        "Micro-enterprise development",
        "Employment support services"
      ],
      details: {
        beneficiaries: "10,000+",
        duration: "4 Years",
        reach: "Multi-state"
      }
    },
    {
      id: "P08",
      icon: Trees,
      title: "Environment",
      description: "Promoting environmental conservation, sustainable practices, and climate resilience through community-led initiatives and awareness programs.",
      color: "#065F46",
      stats: "50,000+ Trees Planted",
      impact: "40% Carbon Reduction",
      achievements: [
        "Tree plantation drives",
        "Environmental conservation programs",
        "Climate resilience initiatives"
      ],
      details: {
        beneficiaries: "Communities",
        duration: "Ongoing",
        reach: "Eco-sensitive zones"
      }
    },
    {
      id: "P09",
      icon: Utensils,
      title: "Hospitality Training Programme",
      description: "Providing professional hospitality training and job placement support to youth for careers in the growing service industry.",
      color: "#7C3AED",
      stats: "5,000+ Hospitality Professionals",
      impact: "87% Job Placement",
      achievements: [
        "Professional hospitality training",
        "Job placement support",
        "Career development programs"
      ],
      details: {
        beneficiaries: "5,000+",
        duration: "2 Years",
        reach: "Urban centers"
      }
    }
  ];

  useEffect(() => {
    setActiveProgram(programs[0]);
  }, []);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    if (cards.length === 0) return;
  
    // Set initial state
    gsap.set(cards, {
      y: 0,
      opacity: 1,
      scale: 1,
    });
  
    cards.forEach((card, index) => {
      const prevCard = cards[index - 1];
  
      // Track active program
      if (prevCard) {
        ScrollTrigger.create({
          trigger: prevCard,
          start: "bottom bottom-=100",
          end: "bottom top",
          scrub: 1,
          onEnter: () => setActiveProgram(programs[index]),
          onEnterBack: () => setActiveProgram(programs[index - 1]),
        });
      }
  
      // Animate card coming into view
      gsap.fromTo(
        card,
        { y: 100, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 30%",
            scrub: 1,
            toggleActions: "play none none reverse",
            onEnter: () => {
              // When this card becomes active, dim all previous ones
              cards.slice(0, index).forEach((c) =>
                gsap.to(c, { opacity: 0, duration: 0.5 })
              );
              // Keep this one bright
              gsap.to(card, { opacity: 1, duration: 0.5 });
            },
            onLeaveBack: () => {
              // Restore opacity if scrolling back
              gsap.to(card, { opacity: 0.3, duration: 0.5 });
              if (prevCard) gsap.to(prevCard, { opacity: 1, duration: 0.5 });
            },
          },
        }
      );
  
      // Pin the current card only on desktop
      if (index < cards.length - 1 && window.innerWidth >= 1024) {
        ScrollTrigger.create({
          trigger: card,
          start: "top top+=250",
          end: `+=${card.offsetHeight}`,
          pin: true,
          pinSpacing: false,
        });
      }
    });
  
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  
  return (
    <section
      ref={sectionRef}
      className="py-8 lg:py-16 bg-gradient-to-br from-gray-50 to-blue-50/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 lg:px-6 lg:py-3 rounded-full text-sm font-semibold mb-4 lg:mb-6">
            <div className="w-2 h-2 bg-white/80 rounded-full animate-pulse"></div>
            Our Impact Programs
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent mb-4 lg:mb-6">
            Transforming Communities
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Discover our comprehensive programs designed to create lasting impact and sustainable change.
          </p>
        </div>

        {/* Programs Cards Stack */}
        <div ref={containerRef} className="relative">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <div
                key={program.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className="bg-white rounded-xl lg:rounded-2xl border border-gray-200 mb-6 lg:mb-8 last:mb-0 mx-2 sm:mx-0"
              >
                {/* Color Accent Bar */}
                <div
                  className="w-full h-2 rounded-t-xl lg:rounded-t-2xl"
                  style={{ backgroundColor: program.color }}
                ></div>

                <div className="p-4 sm:p-6 lg:p-8">
                  {/* Header Section */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 lg:mb-6 gap-4">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div 
                        className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl flex items-center justify-center text-white flex-shrink-0"
                        style={{ backgroundColor: program.color }}
                      >
                        <IconComponent size={20} className="sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 lg:mb-2 line-clamp-2">
                          {program.title}
                        </h3>
                        <div 
                          className="inline-flex items-center gap-2 px-3 py-1 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-semibold text-white w-fit"
                          style={{ backgroundColor: program.color }}
                        >
                          <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-white/30 rounded-full animate-pulse flex-shrink-0"></div>
                          <span className="truncate">{program.stats}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Program Number - Hidden on mobile */}
                    <div className="hidden sm:block text-right flex-shrink-0">
                      <div className="text-2xl lg:text-4xl font-bold text-gray-300">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div className="text-xs lg:text-sm text-gray-500 mt-1">
                        of {programs.length}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-4 lg:mb-8">
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg bg-gray-50 p-4 lg:p-6 rounded-lg lg:rounded-xl border border-gray-200">
                      {program.description}
                    </p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 mb-4 lg:mb-8">
                    <div className="text-center p-2 sm:p-3 lg:p-4 rounded-lg lg:rounded-xl bg-gray-50 border border-gray-200">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mx-auto mb-1 lg:mb-2" style={{ color: program.color }} />
                      <div className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 truncate">{program.details.beneficiaries}</div>
                      <div className="text-xs sm:text-sm text-gray-600 truncate">Beneficiaries</div>
                    </div>
                    <div className="text-center p-2 sm:p-3 lg:p-4 rounded-lg lg:rounded-xl bg-gray-50 border border-gray-200">
                      <Target className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mx-auto mb-1 lg:mb-2" style={{ color: program.color }} />
                      <div className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 truncate">{program.impact}</div>
                      <div className="text-xs sm:text-sm text-gray-600 truncate">Success Rate</div>
                    </div>
                    <div className="text-center p-2 sm:p-3 lg:p-4 rounded-lg lg:rounded-xl bg-gray-50 border border-gray-200">
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mx-auto mb-1 lg:mb-2" style={{ color: program.color }} />
                      <div className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 truncate">{program.details.duration}</div>
                      <div className="text-xs sm:text-sm text-gray-600 truncate">Duration</div>
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div className="space-y-3 lg:space-y-4">
                    <h4 className="font-semibold text-gray-900 text-base lg:text-lg flex items-center gap-2 lg:gap-3 mb-3 lg:mb-4">
                      <div
                        className="w-2 h-2 rounded-full animate-pulse flex-shrink-0"
                        style={{ backgroundColor: program.color }}
                      ></div>
                      Program Highlights
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-3">
                      {program.achievements.map((achievement, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 lg:gap-3 p-2 lg:p-4 bg-white rounded-lg lg:rounded-xl border border-gray-200"
                        >
                          <div
                            className="w-6 h-6 lg:w-8 lg:h-8 rounded-full flex items-center justify-center text-white flex-shrink-0"
                            style={{ backgroundColor: program.color }}
                          >
                            <Check size={12} className="lg:w-4 lg:h-4" />
                          </div>
                          <span className="text-gray-700 font-medium text-xs lg:text-sm leading-tight flex-1">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;