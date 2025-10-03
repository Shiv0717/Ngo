import React from 'react';
import { 
  Heart, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  ArrowRight,
  Send,
  Shield,
  Award,
  Users,
  Globe
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Programs', href: '/programs' },
    { name: 'Our Story', href: '/our-story' },
    { name: 'Get Involved', href: '/get-involved' },
    { name: 'Events & Campaigns', href: '/events' },
    { name: 'Gallery', href: '/gallery' },
  ];

  const programs = [
    { name: 'Education Initiative', href: '/programs/education' },
    { name: 'Healthcare Programs', href: '/programs/healthcare' },
    { name: 'Women Empowerment', href: '/programs/women-empowerment' },
    { name: 'Environmental Conservation', href: '/programs/environment' },
    { name: 'Disaster Relief', href: '/programs/disaster-relief' },
    { name: 'Skill Development', href: '/programs/skill-development' },
  ];

  const getInvolved = [
    { name: 'Become a Volunteer', href: '/volunteer' },
    { name: 'Make a Donation', href: '/donate' },
    { name: 'Corporate Partnership', href: '/partnership' },
    { name: 'Organize Event', href: '/organize-event' },
    { name: 'Careers', href: '/careers' },
    { name: 'Internships', href: '/internships' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Youtube, href: '#', name: 'YouTube' },
  ];

  const certifications = [
    { name: '80G Certified', icon: Award },
    { name: 'FCRA Compliant', icon: Shield },
    { name: 'Transparency Award 2024', icon: Users },
    { name: 'ISO 9001:2015', icon: Globe },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" fill="currentColor" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Shri Shankarcharya<br />Swaroopanand Foundation</h3>
                <p className="text-blue-200 text-sm">Transforming Lives Since 2009</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              A dynamic non-profit organization dedicated to addressing pressing social, economic, 
              and environmental challenges through sustainable solutions and community empowerment.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="text-sm">Old Dhamtari road, Sejbahar, Raipur – 492015, Chhattisgarh</span>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-4 h-4 text-green-400" />
                <span className="text-sm">+91 9993561514, +91 8763695269</span>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-sm">info@shrishankaracharya.org</span>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-white">Stay Updated</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 text-sm"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white border-l-4 border-blue-500 pl-3">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 text-blue-400 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white border-l-4 border-green-500 pl-3">
              Our Programs
            </h4>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <a
                    href={program.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 text-green-400 group-hover:translate-x-1 transition-transform" />
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Certifications */}
            <div className="mt-8 pt-6 border-t border-gray-700">
              <h5 className="font-semibold mb-3 text-white">Certifications</h5>
              <div className="space-y-2">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                    <cert.icon className="w-4 h-4 text-green-400" />
                    <span>{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white border-l-4 border-purple-500 pl-3">
              Get Involved
            </h4>
            
            <ul className="space-y-3 mb-6">
              {getInvolved.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 text-purple-400 group-hover:translate-x-1 transition-transform" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Impact Stats */}
            <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
              <h5 className="font-semibold mb-3 text-white text-center">Our Impact</h5>
              <div className="grid grid-cols-2 gap-3 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-400">50K+</div>
                  <div className="text-xs text-gray-400">Students</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">100K+</div>
                  <div className="text-xs text-gray-400">Lives Impacted</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">15+</div>
                  <div className="text-xs text-gray-400">Years</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-400">25+</div>
                  <div className="text-xs text-gray-400">Communities</div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="mt-4 p-3 bg-red-900/20 border border-red-800 rounded-lg">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-red-400" />
                <span className="text-red-300 font-semibold">Emergency Helpline</span>
              </div>
              <div className="text-red-200 text-sm mt-1">Available 24/7 for urgent support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>
                © {currentYear} Shri Shankarcharya Swaroopanand Foundation. All rights reserved. | 
                <span className="text-blue-300"> Registered Non-Profit Organization</span>
              </p>
            </div>

            {/* Legal Links */}
            <div className="text-sm text-gray-400 text-center">
  Designed & Developed by <span className="text-white font-semibold">KSS</span>
</div>


            {/* Made with Love */}
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;