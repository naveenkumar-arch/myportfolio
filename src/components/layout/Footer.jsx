import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-neon-purple/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <a href="#home" className="text-3xl font-bold font-jetbrains text-white mb-2 block">
              <span className="text-neon-purple">&lt;</span>
              Naveen
              <span className="text-neon-blue">/&gt;</span>
            </a>
            <p className="text-gray-400 max-w-sm">
              Building secure, scalable, and modern web applications with a passion for Cyber Security.
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="https://github.com/naveenkumar-arch" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glassmorphism flex items-center justify-center text-gray-300 hover:text-white hover:border-neon-purple hover:shadow-neon-purple transition-all duration-300">
              <FiGithub size={22} />
            </a>
            <a href="https://www.linkedin.com/in/naveen-kumar-k-700b802b9/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glassmorphism flex items-center justify-center text-gray-300 hover:text-white hover:border-neon-blue hover:shadow-neon-blue transition-all duration-300">
              <FiLinkedin size={22} />
            </a>
            <a href="mailto:nv01110612@gmail.com" className="w-12 h-12 rounded-full glassmorphism flex items-center justify-center text-gray-300 hover:text-white hover:border-white transition-all duration-300">
              <FiMail size={22} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Naveen Kumar K. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-neon-purple transition-colors text-sm font-medium"
          >
            Back to top <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
