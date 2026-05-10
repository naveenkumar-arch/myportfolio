import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';

const projects = [
  {
    title: 'E-commerce Web Application',
    description: 'A comprehensive full-stack e-commerce platform built to handle product management, secure authentication, and seamless transactions.',
    techStack: ['Java', 'Spring Boot', 'React', 'SQL'],
    github: 'https://github.com/naveenkumar-arch',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    title: 'School Management System',
    description: 'A robust management system for educational institutions featuring privilege-based access control for admins, teachers, and students.',
    techStack: ['Java', 'JDBC', 'JSP', 'SQL'],
    github: 'https://github.com/naveenkumar-arch',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    title: 'Cyber Net Lab',
    description: 'Interactive platform for learning networking and cybersecurity fundamentals. Includes visual labs for IPv4, IPv6, TCP/UDP, DNS, and HTTP/HTTPS.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/naveenkumar-arch/-CYBER-NET-LAB',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'API Securing Using Proxy',
    description: 'API integration and securing mechanism utilizing a proxy architecture to protect endpoints from direct exposure and attacks.',
    techStack: ['JavaScript', 'Node.js', 'API'],
    github: 'https://github.com/naveenkumar-arch/API-SECURING-USING-PROXY',
    demo: 'https://api-securing-using-proxy.vercel.app',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'PokeWeather',
    description: 'A dynamic web app integrating a Weather API and Pokémon API to suggest Pokémon based on current weather conditions.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'REST APIs'],
    github: 'https://github.com/naveenkumar-arch/POKE_WEATHER',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'CodSoft Internship Projects',
    description: 'Completed 3 web projects (Calculator, Landing Page, Portfolio) gaining hands-on experience in layout design and DOM manipulation.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/naveenkumar-arch/CODSOFT',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="A selection of my best work and open-source contributions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <GlassCard className="p-0 flex flex-col h-full group hover:shadow-neon-purple transition-shadow duration-500">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  <div className="absolute inset-0 bg-neon-purple/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-20 bg-neon-purple text-white text-xs font-bold px-3 py-1 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.8)]">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-neon-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, techIdx) => (
                      <span 
                        key={techIdx} 
                        className="text-xs font-jetbrains text-neon-purple bg-neon-purple/10 px-2 py-1 rounded-md border border-neon-purple/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4 border-t border-white/10 mt-auto">
                    <a 
                      href={project.github} 
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                      target="_blank" rel="noreferrer"
                    >
                      <FiGithub size={18} /> Code
                    </a>
                    {project.demo !== '#' && (
                      <a 
                        href={project.demo} 
                        className="flex items-center gap-2 text-sm text-gray-300 hover:text-neon-blue transition-colors ml-auto"
                        target="_blank" rel="noreferrer"
                      >
                        <FiExternalLink size={18} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
