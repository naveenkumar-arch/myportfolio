import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const NeonButton = ({ 
  children, 
  variant = 'primary', // 'primary' | 'secondary' | 'outline'
  className, 
  href, 
  onClick,
  icon: Icon,
  ...props 
}) => {
  const baseClasses = "relative inline-flex items-center justify-center gap-2 px-8 py-3 font-semibold rounded-full overflow-hidden transition-all duration-300 outline-none";
  
  const variants = {
    primary: "bg-neon-purple text-white hover:shadow-neon-purple border border-neon-purple/50",
    secondary: "bg-neon-blue text-background hover:shadow-neon-blue border border-neon-blue/50",
    outline: "bg-transparent text-white border border-white/20 hover:border-neon-purple hover:text-neon-purple hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] glassmorphism"
  };

  const Component = motion[href ? 'a' : 'button'];

  return (
    <Component
      href={href}
      onClick={onClick}
      className={cn(baseClasses, variants[variant], className)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {Icon && <Icon className="w-5 h-5" />}
      </span>
      {/* Glossy overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full" />
    </Component>
  );
};

export default NeonButton;
