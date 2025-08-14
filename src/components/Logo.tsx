import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true, className = '' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className={`${sizeClasses[size]} relative`}>
        {/* Echte Logo-Datei */}
        <img 
          src="/images/logo.png" 
          alt="Martic Solutions Logo" 
          className="w-full h-full object-contain"
        />
      </div>
      {showText && (
        <div className={`font-bold ${textSizes[size]} leading-none`}>
          <span className="text-white">MARTIC </span>
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">SOLUTIONS</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
