import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <div className={`${className} relative`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer hexagon ring */}
        <path
          d="M50 5 L80 25 L80 55 L50 75 L20 55 L20 25 Z"
          fill="none"
          stroke="url(#gradient1)"
          strokeWidth="2"
          className="animate-pulse"
        />
        
        {/* Inner hexagon */}
        <path
          d="M50 15 L70 30 L70 50 L50 65 L30 50 L30 30 Z"
          fill="url(#gradient2)"
          className="opacity-20"
        />
        
        {/* Blockchain nodes */}
        <circle cx="35" cy="35" r="3" fill="url(#gradient1)" className="animate-pulse" style={{animationDelay: '0.2s'}} />
        <circle cx="65" cy="35" r="3" fill="url(#gradient1)" className="animate-pulse" style={{animationDelay: '0.4s'}} />
        <circle cx="50" cy="50" r="3" fill="url(#gradient1)" className="animate-pulse" style={{animationDelay: '0.6s'}} />
        <circle cx="35" cy="65" r="3" fill="url(#gradient1)" className="animate-pulse" style={{animationDelay: '0.8s'}} />
        <circle cx="65" cy="65" r="3" fill="url(#gradient1)" className="animate-pulse" style={{animationDelay: '1s'}} />
        
        {/* Connecting lines */}
        <line x1="35" y1="35" x2="50" y2="50" stroke="url(#gradient1)" strokeWidth="1" opacity="0.6" />
        <line x1="65" y1="35" x2="50" y2="50" stroke="url(#gradient1)" strokeWidth="1" opacity="0.6" />
        <line x1="50" y1="50" x2="35" y2="65" stroke="url(#gradient1)" strokeWidth="1" opacity="0.6" />
        <line x1="50" y1="50" x2="65" y2="65" stroke="url(#gradient1)" strokeWidth="1" opacity="0.6" />
        
        {/* Central MD text */}
        <text
          x="50"
          y="55"
          textAnchor="middle"
          className="text-xs font-bold fill-current"
          style={{ fontSize: '14px' }}
        >
          MD
        </text>
        
        {/* Gradients */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="50%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#ec4899" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Logo;