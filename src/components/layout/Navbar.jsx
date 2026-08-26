import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { cn } from '../../utils/cn';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Freelance Projects', href: '#freelance' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10 py-4 shadow-lg shadow-neon-purple/5" : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold font-jetbrains text-white group">
            <span className="text-neon-purple">&lt;</span>
            Naveen
            <span className="text-neon-blue">/&gt;</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors duration-300 relative group text-sm font-medium"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-purple to-neon-blue transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-6 pl-6">
              <a 
                href="#contact" 
                className="bg-neon-purple text-white px-6 py-2 rounded-xl font-semibold hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] hover:-translate-y-0.5 transition-all duration-300"
              >
                Hire Me
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center pt-20"
          >
            <div className="flex flex-col space-y-8 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-semibold text-gray-300 hover:text-white hover:text-neon-purple transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex justify-center space-x-6 pt-8 border-t border-white/20">
                <a href="https://github.com/naveenkumar-arch" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-neon-purple transition-colors">
                  <FiGithub size={28} />
                </a>
                <a href="https://www.linkedin.com/in/naveen-kumar-k-700b802b9/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-neon-blue transition-colors">
                  <FiLinkedin size={28} />
                </a>
                <a href="mailto:nv01110612@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  <FiMail size={28} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
