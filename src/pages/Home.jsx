import React from 'react';
import Herosection from '../components/Herosection';
import Impactful from '../components/Impactful';
import ProgramsSection from '../components/ProgramsSection';
import NGODashboard from '../components/NGODashboard';
import Faqs from '../components/Faqs';
import About from '../components/About';

const Home = () => {
  return (
    <div>
      <Herosection/>
      <Impactful/>
      <About/>
      <ProgramsSection/>
      <NGODashboard/>
      <Faqs/>
    </div>
  );
}

export default Home;
