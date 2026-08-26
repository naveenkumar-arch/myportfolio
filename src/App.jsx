import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import CustomCursor from './components/layout/CustomCursor';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import FreelanceProjects from './components/sections/FreelanceProjects';
import Projects from './components/sections/Projects';
import BugBounty from './components/sections/BugBounty';
import Education from './components/sections/Education';
import Certifications from './components/sections/Certifications';
import ExperienceJourney from './components/sections/ExperienceJourney';
import Contact from './components/sections/Contact';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-background min-h-screen text-white font-inter selection:bg-neon-purple/30 selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-purple to-neon-blue origin-left z-[60]"
        style={{ scaleX }}
      />
      
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <FreelanceProjects />
        <Projects />
        <BugBounty />
        <Education />
        <Certifications />
        <ExperienceJourney />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
