import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiCheckCircle, FiShield, FiTrendingUp, FiLayers, FiPackage } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';

const clientProjects = [
  {
    title: 'Veerika Rose Garden (VRG Nursery)',
    subtitle: 'Commercial Horticulture E-Commerce & Multi-Stage Logistics Engine',
    type: 'Production Client Deployment',
    liveBadge: 'LIVE IN PRODUCTION',
    url: 'https://www.vrgnursery.in',
    image: 'https://www.vrgnursery.in/products/cat-rose-varieties-banner.jpg',
    description: 'Designed and deployed an end-to-end commercial live sapling e-commerce platform with automated delivery logistics for a farm nursery in Tamil Nadu. Handles full cart-to-doorstep order pipelines with real-time payment verifications, thermal label generation, and automated WhatsApp notifications.',
    highlights: [
      'Processed ₹45,000+ GMV transactional volume across 110+ live verified orders.',
      'Automated Razorpay PG & PhonePe payment gateways with server-side webhook verification.',
      'Built 12-Step Mobile Admin order workflow, thermal A4 shipping label PDF engine, and automated WhatsApp dispatch updates.',
      'Zero-latency Neon PostgreSQL database with Prisma ORM and React 19 fast-loading cache.'
    ],
    techStack: ['React 19', 'Tailwind CSS', 'Node.js', 'Express', 'Neon PostgreSQL', 'Prisma ORM', 'Razorpay API', 'PhonePe PG', 'Vercel'],
    featured: true
  },
  {
    title: 'Krishna Students Print Hub',
    subtitle: 'Online Document Upload, Print-Queue & Student Billing Portal',
    type: 'Commercial Retail Client',
    liveBadge: 'LIVE IN PRODUCTION',
    url: 'https://krishna-students-print-hub.vercel.app',
    image: 'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=1200&q=80',
    description: 'Engineered an online document upload, Xerox/print request queue, and student payment billing web application. Enables students to upload print jobs remotely, pay via UPI QR, and collect their prints with zero wait-time.',
    highlights: [
      'Online file & document upload system with real-time page calculation and printing options.',
      'Instant UPI QR checkout with payment confirmation and order receipt generation.',
      'Digital print queue tracking with real-time store inventory management.'
    ],
    techStack: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'UPI QR Integration', 'Vercel'],
    featured: true
  },
  {
    title: 'Sri Thirumala Foam Wash Portal',
    subtitle: 'Doorstep Pickup, Foam Wash Booking & Live Tracking System',
    type: 'Commercial Business Client',
    liveBadge: 'LIVE IN PRODUCTION',
    url: 'https://sri-thirumala-foam-wash.vercel.app',
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1200&q=80',
    description: 'Developed a doorstep vehicle pickup, foam wash slot reservation, and digital customer management platform. Features pickup scheduling, live vehicle wash progress stages, service history records, and automated invoicing.',
    highlights: [
      'Interactive doorstep vehicle pickup & drop-off booking scheduler.',
      'Live service stage tracker with automated customer status notifications.',
      'Digital GST invoicing, customer vehicle service history logs, and analytics dashboard.'
    ],
    techStack: ['React', 'Tailwind CSS', 'Express.js', 'PostgreSQL', 'RESTful APIs', 'Vercel'],
    featured: true
  }
];

const FreelanceProjects = () => {
  return (
    <section id="freelance" className="py-24 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Freelance & Production Deployments" 
          subtitle="Real-world commercial applications engineered for active businesses with live transactions, real users, and automated workflows."
        />

        <div className="space-y-12 max-w-6xl mx-auto">
          {clientProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <GlassCard className="p-0 overflow-hidden border border-white/10 hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-500 rounded-3xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Left Project Visual Banner */}
                  <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-[360px] overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 lg:hidden" />
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Live Badge */}
                    <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 text-xs font-extrabold px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span>{project.liveBadge}</span>
                    </div>
                  </div>

                  {/* Right Project Details */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                          {project.type}
                        </span>
                        {project.url !== '#' && (
                          <a 
                            href={project.url} 
                            target="_blank" 
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 hover:text-white bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 px-3.5 py-1.5 rounded-full transition-all hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                          >
                            <span>Visit Live Site</span>
                            <FiExternalLink size={13} />
                          </a>
                        )}
                      </div>

                      <h3 className="text-2xl font-extrabold text-white mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium text-emerald-200/80 mb-4">
                        {project.subtitle}
                      </p>

                      <p className="text-gray-300 text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Bullet Highlights */}
                      <div className="space-y-2 mb-6">
                        {project.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2.5 text-xs text-gray-300">
                            <FiCheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIdx) => (
                        <span 
                          key={techIdx} 
                          className="text-xs font-jetbrains font-semibold text-emerald-300 bg-emerald-950/40 px-2.5 py-1 rounded-lg border border-emerald-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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

export default FreelanceProjects;
