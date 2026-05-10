import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const SectionHeading = ({ title, subtitle, className }) => {
  return (
    <div className={cn("text-center mb-16", className)}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          {title.split(' ').map((word, i) => (
            <span 
              key={i} 
              className={i % 2 !== 0 ? "text-gradient" : "text-white"}
            >
              {word}{' '}
            </span>
          ))}
        </h2>
        {subtitle && (
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {subtitle}
          </p>
        )}
        <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-blue mx-auto mt-6 rounded-full" />
      </motion.div>
    </div>
  );
};

export default SectionHeading;
