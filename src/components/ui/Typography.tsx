import { ReactNode } from 'react';

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

// Consistent typography components for the site
export const H1 = ({ children, className = '' }: TypographyProps) => (
  <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${className}`}>
    {children}
  </h1>
);

export const H2 = ({ children, className = '' }: TypographyProps) => (
  <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${className}`}>
    {children}
  </h2>
);

export const H3 = ({ children, className = '' }: TypographyProps) => (
  <h3 className={`text-xl md:text-2xl font-bold leading-relaxed ${className}`}>
    {children}
  </h3>
);

export const H4 = ({ children, className = '' }: TypographyProps) => (
  <h4 className={`text-lg md:text-xl font-semibold leading-relaxed ${className}`}>
    {children}
  </h4>
);

export const BodyLarge = ({ children, className = '' }: TypographyProps) => (
  <p className={`text-lg md:text-xl leading-relaxed ${className}`}>
    {children}
  </p>
);

export const Body = ({ children, className = '' }: TypographyProps) => (
  <p className={`text-base md:text-lg leading-relaxed ${className}`}>
    {children}
  </p>
);

export const BodySmall = ({ children, className = '' }: TypographyProps) => (
  <p className={`text-sm md:text-base leading-relaxed ${className}`}>
    {children}
  </p>
);

export const Caption = ({ children, className = '' }: TypographyProps) => (
  <span className={`text-xs md:text-sm leading-normal ${className}`}>
    {children}
  </span>
);

// Button text sizing
export const ButtonText = ({ children, className = '' }: TypographyProps) => (
  <span className={`text-sm md:text-base font-medium ${className}`}>
    {children}
  </span>
);

export const ButtonTextLarge = ({ children, className = '' }: TypographyProps) => (
  <span className={`text-base md:text-lg font-bold ${className}`}>
    {children}
  </span>
);

// Utility classes for consistent spacing
export const sectionSpacing = 'py-16 md:py-20 lg:py-24';
export const containerSpacing = 'px-4 sm:px-6 lg:px-8';
export const maxWidthContainer = 'max-w-7xl mx-auto';

// Text color utilities
export const textColors = {
  primary: 'text-white',
  secondary: 'text-gray-300',
  muted: 'text-gray-400',
  accent: 'text-purple-400',
  success: 'text-green-400',
  warning: 'text-yellow-400',
  error: 'text-red-400',
};

// Gradient text utility
export const gradientText = 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400';