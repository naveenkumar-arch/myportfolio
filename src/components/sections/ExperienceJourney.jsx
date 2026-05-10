import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiActivity, FiCode } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';

const achievements = [
  {
    title: 'Problem Solving & DSA',
    description: 'Solved 150 DSA Top Interview Questions on LeetCode. Solved 100 SQL problems on Udemy and 50 on LeetCode.',
    icon: FiCode, // Wait, I need to import FiCode
    color: 'text-orange-500',
    borderColor: 'border-orange-500/50'
  },
  {
    title: 'Hackathon & Competitions',
    description: 'Secured Second Prize in Trading Emperor at SRM VEC Symposium (2026). Regular participant in competitive coding contests.',
    icon: FiAward,
    color: 'text-blue-400',
    borderColor: 'border-blue-400/50'
  },
  {
    title: 'Leadership & Roles',
    description: 'Executive Committee Member & Event Organizer for White Hations Club. Organized Hackathons at Karpaga Vinayaga College.',
    icon: FiUsers,
    color: 'text-purple-500',
    borderColor: 'border-purple-500/50'
  },
  {
    title: 'Industrial Exposure',
    description: 'Gained industrial exposure through visits to BSNL Company (Chennai), Masco Tea Factory (Kochi), and Kerala Electrica Company (Vagamon).',
    icon: FiActivity,
    color: 'text-green-500',
    borderColor: 'border-green-500/50'
  }
];


const ExperienceJourney = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Achievements & Roles" 
          subtitle="My leadership experience, problem-solving milestones, and industrial exposure."
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
              <GlassCard className={`h-full border-t-2 ${item.borderColor} hover:-translate-y-2 transition-transform duration-300`}>
                <div className={`w-12 h-12 rounded-full bg-background flex items-center justify-center mb-6 border border-white/10 ${item.color}`}>
                  <item.icon size={24} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
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
