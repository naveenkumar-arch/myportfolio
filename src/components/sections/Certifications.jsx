import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiExternalLink, FiShield, FiDatabase, FiCode, FiCloud } from 'react-icons/fi';
import { MdSecurity } from 'react-icons/md';
import { SiUdemy } from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';

const certifications = [
  {
    title: 'Ethical Hacking: Zero to Hero',
    issuer: 'Udemy',
    date: '2025',
    description: 'Complete Ethical Hacking Course 2025 covering cybersecurity concepts, ethical hacking techniques, and modern threat protection.',
    icon: MdSecurity,
    gradient: 'from-red-600/20 to-red-900/10',
    border: 'border-red-500/30',
    glow: 'hover:shadow-[0_0_25px_rgba(239,68,68,0.3)]',
    iconColor: 'text-red-400',
    badge: '🔐 Security',
    link: 'https://www.linkedin.com/in/naveen-kumar-k-700b802b9/'
  },
  {
    title: 'Cybersecurity Fundamentals',
    issuer: 'Udemy',
    date: '2025',
    description: 'Strengthened understanding of how attackers think and where systems become vulnerable. Mindset, awareness, and responsibility.',
    icon: FiShield,
    gradient: 'from-purple-600/20 to-purple-900/10',
    border: 'border-purple-500/30',
    glow: 'hover:shadow-[0_0_25px_rgba(139,92,246,0.3)]',
    iconColor: 'text-purple-400',
    badge: '🛡️ Security',
    link: 'https://www.linkedin.com/in/naveen-kumar-k-700b802b9/'
  },
  {
    title: 'SQL 100-Day Challenge',
    issuer: 'Self-Paced',
    date: '2025',
    description: 'Solved 100 SQL hands-on coding queries in 100 days. CTF Rank 59/270. Building solid database fundamentals through consistency.',
    icon: FiDatabase,
    gradient: 'from-blue-600/20 to-blue-900/10',
    border: 'border-blue-500/30',
    glow: 'hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]',
    iconColor: 'text-blue-400',
    badge: '🗃️ Database',
    link: 'https://www.linkedin.com/in/naveen-kumar-k-700b802b9/'
  },
  {
    title: 'Java Full Stack Developer',
    issuer: 'Code Builders',
    date: '2026',
    description: 'Full stack Java development covering Spring Boot, Hibernate, JSP, JDBC, REST APIs and modern web technologies.',
    icon: FaJava,
    gradient: 'from-orange-600/20 to-orange-900/10',
    border: 'border-orange-500/30',
    glow: 'hover:shadow-[0_0_25px_rgba(249,115,22,0.3)]',
    iconColor: 'text-orange-400',
    badge: '☕ Java',
    link: '#'
  },
  {
    title: 'Responsive CSS Web App',
    issuer: 'Udemy',
    date: '2026',
    description: 'Mastered CSS layout techniques, flexbox, grid, animations, and responsive design for modern web applications.',
    icon: FiCode,
    gradient: 'from-cyan-600/20 to-cyan-900/10',
    border: 'border-cyan-500/30',
    glow: 'hover:shadow-[0_0_25px_rgba(6,182,212,0.3)]',
    iconColor: 'text-cyan-400',
    badge: '🎨 Frontend',
    link: '#'
  },
  {
    title: 'HTML5 Mastering Concepts',
    issuer: 'Udemy',
    date: '2026',
    description: 'Comprehensive HTML5 course covering semantic elements, accessibility, forms, media, and modern web standards.',
    icon: FiCode,
    gradient: 'from-yellow-600/20 to-yellow-900/10',
    border: 'border-yellow-500/30',
    glow: 'hover:shadow-[0_0_25px_rgba(234,179,8,0.3)]',
    iconColor: 'text-yellow-400',
    badge: '🌐 Web',
    link: '#'
  },
  {
    title: 'AWS Certification',
    issuer: 'SRM VEC',
    date: '2026',
    description: 'AWS cloud services, architecture fundamentals, deployment strategies, and cloud security best practices.',
    icon: FaAws,
    gradient: 'from-amber-600/20 to-amber-900/10',
    border: 'border-amber-500/30',
    glow: 'hover:shadow-[0_0_25px_rgba(245,158,11,0.3)]',
    iconColor: 'text-amber-400',
    badge: '☁️ Cloud',
    link: '#'
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative bg-background">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Certifications" 
          subtitle="Professional achievements, courses, and verified skills."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <div className={`relative h-full rounded-2xl bg-gradient-to-br ${cert.gradient} border ${cert.border} ${cert.glow} backdrop-blur-sm p-6 flex flex-col gap-4 transition-all duration-300 overflow-hidden group`}>
                
                {/* Top glow line */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${cert.gradient.replace('/20', '').replace('/10', '')} opacity-60 group-hover:opacity-100 transition-opacity`}></div>

                {/* Icon + Badge row */}
                <div className="flex items-start justify-between">
                  <div className={`w-14 h-14 rounded-xl bg-background/60 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300 ${cert.iconColor}`}>
                    <cert.icon size={28} />
                  </div>
                  <span className="text-xs font-semibold bg-white/5 border border-white/10 px-2 py-1 rounded-full text-gray-300">
                    {cert.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h4 className="text-base font-bold text-white mb-1 leading-snug">{cert.title}</h4>
                  <p className={`text-xs font-semibold mb-3 ${cert.iconColor}`}>{cert.issuer} · {cert.date}</p>
                  <p className="text-xs text-gray-400 leading-relaxed">{cert.description}</p>
                </div>

                {/* Link */}
                {cert.link !== '#' && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors mt-auto pt-3 border-t border-white/10"
                  >
                    <FiExternalLink size={12} /> View Credential
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
