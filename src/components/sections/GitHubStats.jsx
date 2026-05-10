import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiStar, FiGitBranch, FiUsers } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';

const StatCounter = ({ icon: Icon, value, label, delay }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value) || 0;
    if (end === 0) return;
    
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center p-6 bg-white/5 rounded-2xl border border-white/10"
    >
      <Icon className="w-8 h-8 text-neon-purple mb-4" />
      <span className="text-4xl font-bold font-jetbrains text-white mb-2">{count}</span>
      <span className="text-sm text-gray-400 uppercase tracking-wider">{label}</span>
    </motion.div>
  );
};

const GitHubStats = () => {
  const username = 'naveenkumar-arch';
  const [stats, setStats] = useState({ repos: 0, followers: 0, following: 0 });

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(data => {
        setStats({
          repos: data.public_repos || 25,
          followers: data.followers || 10,
          following: data.following || 5
        });
      })
      .catch(err => console.error("Error fetching github stats:", err));
  }, [username]);

  return (
    <section id="github" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="GitHub Activity" 
          subtitle="My open source contributions and projects."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <StatCounter icon={FiGitBranch} value={stats.repos} label="Repositories" delay={0.1} />
          <StatCounter icon={FiUsers} value={stats.followers} label="Followers" delay={0.2} />
          <StatCounter icon={FiStar} value={15} label="Stars Earned" delay={0.3} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* GitHub Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="h-full p-6 flex items-center justify-center">
              <img 
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=dracula&hide_border=true&bg_color=090B1A00&title_color=8B5CF6&icon_color=00D9FF&text_color=ffffff`} 
                alt="GitHub Stats" 
                className="w-full max-w-md"
              />
            </GlassCard>
          </motion.div>

          {/* Top Languages Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="h-full p-6 flex items-center justify-center">
              <img 
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=dracula&hide_border=true&bg_color=090B1A00&title_color=8B5CF6&text_color=ffffff`} 
                alt="Top Languages" 
                className="w-full max-w-md"
              />
            </GlassCard>
          </motion.div>
        </div>
        
        {/* Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8"
        >
          <GlassCard className="p-6 overflow-x-auto overflow-y-hidden">
            <div className="min-w-[800px] flex items-center justify-center">
               {/* Using ghchart to render the contribution graph cleanly with our neon purple color */}
               <img 
                 src={`https://ghchart.rshah.org/8B5CF6/${username}`} 
                 alt="GitHub Contribution Graph" 
                 className="w-full filter invert-[0.8] hue-rotate-[180deg] brightness-150 contrast-125 mix-blend-screen"
                 style={{ filter: 'drop-shadow(0px 0px 5px rgba(139, 92, 246, 0.5))' }}
               />
            </div>
          </GlassCard>
        </motion.div>

      </div>
    </section>
  );
};

export default GitHubStats;
