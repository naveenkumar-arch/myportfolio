import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiActivity, FiCode, FiShield } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';

const achievements = [
  {
    title: 'Cybersecurity CTFs (MythX)',
    description: 'Ranked 59 out of 270 in the MythX National Level Cybersecurity CTF. Qualified for the prestigious national offline finals held at KIET Group of Institutions, Delhi, after clearing the nationwide online qualifying round (2026).',
    icon: FiShield,
    color: 'text-red-400',
    borderColor: 'border-red-500/50'
  },
  {
    title: 'Symposium & Hacking Awards',
    description: 'Secured 2nd Prize in Code of Shadows (SRM VEC), 2nd Prize in Payload Paradise (Dhanalakshmi), 3rd Prize in Bug Bash (Dhanalakshmi), and 2nd Prize in Trading Emperor (SRM VEC) during 2026 symposiums.',
    icon: FiAward,
    color: 'text-blue-400',
    borderColor: 'border-blue-400/50'
  },
  {
    title: 'Problem Solving & DSA',
    description: 'Solved 150+ DSA Top Interview Questions on LeetCode and completed the 100 SQL query challenge on Udemy. Active participant in competitive programming challenges.',
    icon: FiCode,
    color: 'text-orange-400',
    borderColor: 'border-orange-500/50'
  },
  {
    title: 'Leadership & Industry Experience',
    description: 'Executive Committee Member & Event Organizer for White Hations Club. Gained industrial exposure through field visits to BSNL Company (Chennai), Masco Tea Factory, and Kerala Electrical Company.',
    icon: FiUsers,
    color: 'text-purple-400',
    borderColor: 'border-purple-500/50'
  }
];


const ExperienceJourney = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Awards Won" 
          subtitle="My national cybersecurity CTF rankings, symposium wins, leadership milestones, and industrial exposure."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className={`h-full border-t-2 ${item.borderColor} hover:-translate-y-2 transition-all duration-300 flex flex-col`}>
                <div className={`w-12 h-12 rounded-full bg-background flex items-center justify-center mb-6 border border-white/10 ${item.color}`}>
                  <item.icon size={24} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                  {item.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceJourney;
