import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaBootstrap, 
  FaGitAlt, FaGithub, FaAws 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiSpringboot, SiMysql, SiHibernate 
} from 'react-icons/si';
import { TbNetwork, TbApi } from 'react-icons/tb';
import { BsDatabaseFillGear } from 'react-icons/bs';
import { MdCode } from 'react-icons/md';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', icon: FaHtml5, level: 90, color: 'text-orange-500' },
      { name: 'CSS3', icon: FaCss3Alt, level: 85, color: 'text-blue-500' },
      { name: 'JavaScript', icon: FaJs, level: 80, color: 'text-yellow-400' },
      { name: 'React.js', icon: FaReact, level: 75, color: 'text-cyan-400' },
      { name: 'Bootstrap', icon: FaBootstrap, level: 80, color: 'text-purple-500' },
    ]
  },
  {
    title: 'Java Backend',
    skills: [
      { name: 'Java', icon: FaJava, level: 85, color: 'text-red-500' },
      { name: 'Spring Boot', icon: SiSpringboot, level: 70, color: 'text-green-500' },
      { name: 'Hibernate', icon: SiHibernate, level: 65, color: 'text-gray-300' },
      { name: 'JDBC & Servlets', icon: BsDatabaseFillGear, level: 75, color: 'text-red-400' },
      { name: 'REST APIs', icon: TbApi, level: 80, color: 'text-blue-300' },
    ]
  },
  {
    title: 'Database & Cloud',
    skills: [
      { name: 'SQL', icon: SiMysql, level: 85, color: 'text-blue-400' },
      { name: 'AWS', icon: FaAws, level: 65, color: 'text-orange-400' },
      { name: 'Git & GitHub', icon: FaGithub, level: 85, color: 'text-white' },
    ]
  },
  {
    title: 'Core Concepts',
    skills: [
      { name: 'Data Structures & Algorithms', icon: MdCode, level: 80, color: 'text-indigo-400' },
      { name: 'Cyber Security Principles', icon: TbNetwork, level: 75, color: 'text-green-400' },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="My Skills" 
          subtitle="Technologies and core concepts I specialize in."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            >
              <GlassCard className="h-full">
                <h3 className="text-xl font-semibold mb-6 text-white border-b border-white/10 pb-2">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-3">
                          <skill.icon className={`w-5 h-5 ${skill.color} transition-transform group-hover:scale-125 duration-300`} />
                          <span className="text-gray-300 font-medium">{skill.name}</span>
                        </div>
                        <span className="text-xs text-neon-blue font-jetbrains">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-background rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + (skillIdx * 0.1) }}
                          className="h-full bg-gradient-to-r from-neon-purple to-neon-blue rounded-full relative"
                        >
                          <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/30 blur-[2px]"></div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
