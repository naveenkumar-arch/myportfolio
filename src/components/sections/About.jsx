import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiTerminal, FiGithub, FiActivity } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';

const stats = [
  { label: 'DSA Questions Solved', value: '150+', icon: FiCode, color: 'text-neon-purple' },
  { label: 'SQL Problems Solved', value: '150+', icon: FiTerminal, color: 'text-neon-blue' },
  { label: 'GitHub Repositories', value: '10+', icon: FiGithub, color: 'text-white' },
  { label: 'Awards Won', value: '4', icon: FiActivity, color: 'text-green-400' },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="About Me" 
          subtitle="Get to know me and my career objective."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold mb-4 font-poppins">
                Cyber Security Engineering Student & <br />
                <span className="text-gradient">Java Full Stack Developer</span>
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I am a Cyber Security student at SRM Valliammai Engineering College, Chennai, 
                  hailing from Krishnagiri, TN. I am passionate about developing secure and scalable 
                  web applications using Java full stack technologies.
                </p>
                <p>
                  <strong>Career Objective:</strong> To develop secure and scalable web applications 
                  using Java full stack technologies by integrating strong cybersecurity principles 
                  and ensuring safe, efficient, and reliable systems.
                </p>
                <p>
                  My areas of interest include building secure web applications, developing 
                  interactive cloud-based systems, and data management using Data Structures 
                  and Algorithms (DSA).
                </p>
              </div>

              {/* Portfolio Live Link */}
              <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-4">
                <a
                  href="https://github.com/naveenkumar-arch/MY_PORTFOLIO"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-white/5 border border-white/10 text-gray-300 px-5 py-2.5 rounded-xl font-semibold text-sm hover:border-neon-blue hover:text-white hover:-translate-y-0.5 transition-all duration-300"
                >
                  ⭐ GitHub Source
                </a>
              </div>
            </GlassCard>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <GlassCard className="flex flex-col items-center justify-center p-6 text-center h-full">
                  <stat.icon className={`w-8 h-8 mb-4 ${stat.color}`} />
                  <h4 className="text-3xl font-bold mb-2 font-jetbrains">{stat.value}</h4>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
