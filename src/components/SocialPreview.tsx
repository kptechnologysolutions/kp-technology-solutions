import React from 'react';

// Component to generate social media preview images
// This would be used to create static preview images for social sharing

interface SocialPreviewProps {
  title: string;
  description: string;
  type?: 'website' | 'portfolio' | 'service';
}

export default function SocialPreview({ 
  title, 
  description, 
  type = 'website' 
}: SocialPreviewProps) {
  return (
    <div className="w-[1200px] h-[630px] bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-16 text-center">
        {/* Logo/Brand */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
              <span className="text-2xl font-bold text-purple-600">KP</span>
            </div>
            <div className="text-left">
              <div className="text-white text-2xl font-bold">KP Technology Solutions</div>
              <div className="text-blue-100 text-lg">Web Development Cleveland</div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          {title}
        </h1>
        
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
        
        {/* Feature Highlights */}
        <div className="flex justify-center gap-8 text-white">
          <div className="text-center">
            <div className="text-3xl font-bold">15+</div>
            <div className="text-blue-100 text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">500+</div>
            <div className="text-blue-100 text-sm">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">50+</div>
            <div className="text-blue-100 text-sm">Projects Delivered</div>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-8 text-blue-100 text-lg">
          kptechnologysolutions@gmail.com
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-8 right-8 text-white/20">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 10 L70 30 L50 50 L30 30 Z M50 50 L70 70 L50 90 L30 70 Z" />
        </svg>
      </div>
    </div>
  );
}

// Static preview image generator (for use in build process)
export const generateSocialPreview = (title: string, description: string) => {
  return {
    width: 1200,
    height: 630,
    title,
    description,
    backgroundColor: 'linear-gradient(135deg, #7C3AED 0%, #3B82F6 50%, #06B6D4 100%)',
    logo: '/favicon.svg',
    brandName: 'KP Technology Solutions',
    subtitle: 'Web Development Cleveland'
  };
};