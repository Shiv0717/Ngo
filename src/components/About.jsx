import React from "react";

const About = () => {
  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
        
        {/* Left Side - Image */}
        <div>
          <img
            src="/ngo-about.jpg" // replace with your image path
            alt="About NGO"
            className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Side - Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            About Our NGO
          </h2>
          <p className="text-lg text-gray-600 mb-4 leading-relaxed">
            We are a non-profit organization dedicated to bringing positive 
            change to society. Our mission is to empower communities through 
            education, healthcare, and sustainable development programs.
          </p>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            With the support of volunteers, donors, and partners, we have 
            impacted thousands of lives and continue to work tirelessly to 
            build a brighter future.
          </p>
          <button className="px-6 py-3 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
