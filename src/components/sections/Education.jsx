import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiAward } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';

const Education = () => {
  return (
    <section id="education" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Education" 
          subtitle="My academic background."
        />

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-purple via-neon-blue to-transparent transform md:-translate-x-1/2"></div>

          {/* College */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex flex-col md:flex-row items-center mb-12"
          >
            <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-background border-2 border-neon-purple transform -translate-x-1/2 flex items-center justify-center z-10 shadow-[0_0_10px_rgba(139,92,246,0.8)]">
              <FiBookOpen className="text-neon-purple w-4 h-4" />
            </div>

            <div className="hidden md:block w-1/2 pr-12 text-right">
              <h4 className="text-xl font-bold text-white font-poppins">B.E Cyber Security</h4>
              <p className="text-neon-blue font-medium mt-1">2023 &ndash; 2027</p>
            </div>

            <div className="w-full md:w-1/2 pl-16 md:pl-12 mt-8 md:mt-0">
              <GlassCard className="p-6 relative group hover:border-neon-purple transition-colors duration-300">
                <div className="md:hidden mb-4">
                  <h4 className="text-xl font-bold text-white font-poppins">B.E Cyber Security</h4>
                  <p className="text-neon-blue font-medium mt-1">2023 &ndash; 2027</p>
                </div>
                <h5 className="text-lg font-semibold text-gray-200">SRM Valliammai Engineering College</h5>
                <p className="text-neon-purple font-semibold mt-2">CGPA: 9.1</p>
              </GlassCard>
            </div>
          </motion.div>
          
          {/* HSC */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex flex-col md:flex-row-reverse items-center mb-12"
          >
            <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-background border-2 border-neon-blue transform -translate-x-1/2 flex items-center justify-center z-10 shadow-[0_0_10px_rgba(0,217,255,0.8)]">
              <FiAward className="text-neon-blue w-4 h-4" />
            </div>

            <div className="hidden md:block w-1/2 pl-12 text-left">
              <h4 className="text-xl font-bold text-white font-poppins">HSC (12th Grade)</h4>
              <p className="text-neon-blue font-medium mt-1">Completed in 2023</p>
            </div>

            <div className="w-full md:w-1/2 pl-16 md:pr-12 md:pl-0 mt-8 md:mt-0">
              <GlassCard className="p-6 relative group hover:border-neon-blue transition-colors duration-300 md:text-right">
                <div className="md:hidden mb-4">
                  <h4 className="text-xl font-bold text-white font-poppins">HSC (12th Grade)</h4>
                  <p className="text-neon-blue font-medium mt-1">Completed in 2023</p>
                </div>
                <h5 className="text-lg font-semibold text-gray-200">Holy Cross Matric Hr. Sec. School</h5>
                <p className="text-neon-blue font-semibold mt-2">Percentage: 91.5%</p>
              </GlassCard>
            </div>
          </motion.div>

          {/* SSLC */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative flex flex-col md:flex-row items-center"
          >
            <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-background border-2 border-gray-400 transform -translate-x-1/2 flex items-center justify-center z-10">
              <FiAward className="text-gray-400 w-4 h-4" />
            </div>

            <div className="hidden md:block w-1/2 pr-12 text-right">
              <h4 className="text-xl font-bold text-white font-poppins">SSLC (10th Grade)</h4>
              <p className="text-gray-400 font-medium mt-1">Completed in 2021</p>
            </div>

            <div className="w-full md:w-1/2 pl-16 md:pl-12 mt-8 md:mt-0">
              <GlassCard className="p-6 relative group hover:border-gray-400 transition-colors duration-300">
                <div className="md:hidden mb-4">
                  <h4 className="text-xl font-bold text-white font-poppins">SSLC (10th Grade)</h4>
                  <p className="text-gray-400 font-medium mt-1">Completed in 2021</p>
                </div>
                <h5 className="text-lg font-semibold text-gray-200">Holy Cross Matric Hr. Sec. School</h5>
                <p className="text-gray-400 text-sm mt-1">All Pass</p>
              </GlassCard>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Education;
