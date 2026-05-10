import React from 'react';
import { cn } from '../../utils/cn';

const GlassCard = ({ children, className, ...props }) => {
  return (
    <div 
      className={cn("glassmorphism p-6 relative overflow-hidden group", className)}
      {...props}
    >
      {/* Subtle top border glow effect */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Hover background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
    </div>
  );
};

export default GlassCard;
