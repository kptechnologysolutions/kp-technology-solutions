'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink, Code, Smartphone, ShoppingCart, Globe, ArrowRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  category: 'website' | 'mobile' | 'ecommerce' | 'ai';
  technologies: string[];
  url?: string;
  image?: string;
  features: string[];
  industry: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

// Real KP Technology projects
const projects: Project[] = [
  {
    id: '56kitchen',
    title: '56 Kitchen',
    description: 'Modern American restaurant with scratch kitchen philosophy featuring two Ohio locations',
    category: 'website',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Schema.org SEO'],
    url: 'https://56kitchen.com/',
    features: ['Online Reservations', 'Menu Management', 'SEO Optimization', 'Mobile Responsive'],
    industry: 'Restaurant',
    colors: {
      primary: '#2C4A3B',
      secondary: '#B87333', 
      accent: '#FBF8F1'
    }
  },
  {
    id: 'blazebite',
    title: 'BlazeBite Platform',
    description: 'EdTech SaaS platform enabling 15-minute mobile ordering setup for school concessions',
    category: 'website',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'API Development'],
    url: 'https://dev2blazebite.dreamhosters.com/',
    features: ['15-min Setup', 'Mobile Ordering', 'Event Management', 'Analytics Dashboard'],
    industry: 'EdTech',
    colors: {
      primary: '#000000',
      secondary: '#DC2626',
      accent: '#FFFFFF'
    }
  },
  {
    id: '56social',
    title: '56 Social',
    description: 'Multi-service dining establishment with café, bar, and catering in Shaker Heights',
    category: 'website',
    technologies: ['Next.js', 'Toast Integration', 'JSON-LD', 'Google Maps'],
    url: 'https://56social.com/',
    features: ['Online Ordering', 'Reservation System', 'Catering Portal', 'Social Integration'],
    industry: 'Restaurant',
    colors: {
      primary: '#4a7c9e',
      secondary: '#F5F5DC',
      accent: '#2F2F2F'
    }
  },
  {
    id: 'ellecle',
    title: 'Elle Restaurant & Lounge',
    description: 'Upscale Mediterranean restaurant with sophisticated dining experience showcase',
    category: 'website',
    technologies: ['Custom HTML/CSS', 'JavaScript', 'OpenTable API', 'Toast POS'],
    url: 'https://www.ellecle.com/',
    features: ['Reservation System', 'Online Ordering', 'Media Integration', 'Brand Storytelling'],
    industry: 'Fine Dining',
    colors: {
      primary: '#0a0a0a',
      secondary: '#c9a876',
      accent: '#FFFFFF'
    }
  },
  {
    id: 'waterheaterdocs',
    title: 'Water Heater Doctors',
    description: 'Local service business platform for water heater repair and installation in Charleston',
    category: 'website',
    technologies: ['Angular', 'Google Maps API', 'Schema.org', 'CSS Variables'],
    url: 'https://waterheaterdocs.com/',
    features: ['Service Booking', 'Fleet Management', 'Area Mapping', 'Emergency Contact'],
    industry: 'Home Services',
    colors: {
      primary: '#1F4C8A',
      secondary: '#FF7043',
      accent: '#FFE082'
    }
  },
  {
    id: 'pewtransportation',
    title: 'People Express Worldwide',
    description: 'Premium ground transportation service for corporate and luxury travel worldwide',
    category: 'website',
    technologies: ['jQuery', 'Facebook Pixel', 'Google Ads', 'Schema Markup'],
    url: 'https://www.pewtransportation.com/',
    features: ['Online Booking', 'Quote System', 'Corporate Portal', 'Luxury Branding'],
    industry: 'Transportation',
    colors: {
      primary: '#000000',
      secondary: '#FFFFFF',
      accent: '#808080'
    }
  },
  {
    id: 'blazebite-mobile',
    title: 'BlazeBite Mobile Apps',
    description: 'Ohio\'s #1 concession ordering app for sports venues and events with 4.6-star rating',
    category: 'mobile',
    technologies: ['React Native', 'iOS Native', 'Android Native', 'Payment Integration'],
    url: 'https://apps.apple.com/us/app/blazebite/id1350738233',
    features: ['Pre-order System', 'Real-time Notifications', 'Apple Pay Integration', 'GPS Pickup'],
    industry: 'Sports & Events',
    colors: {
      primary: '#DC2626',
      secondary: '#000000',
      accent: '#FFFFFF'
    }
  },
  {
    id: 'cemmansys-mobile',
    title: 'Cemmansys Cemetery App',
    description: 'Cemetery management system serving over 1 million records for Catholic Cemeteries Association',
    category: 'mobile',
    technologies: ['iOS Native', 'Android Native', 'GPS Navigation', 'Database Integration'],
    url: 'https://apps.apple.com/ec/developer/catholic-cemeteries-association-of-the/id1146725534',
    features: ['1M+ Records', 'GPS Navigation', 'Interactive Maps', 'Cross-platform Sync'],
    industry: 'Religious Services',
    colors: {
      primary: '#4A5568',
      secondary: '#2D3748',
      accent: '#E2E8F0'
    }
  },
  {
    id: 'gobowling',
    title: 'GoBowling.com',
    description: 'National bowling center discovery platform serving bowling enthusiasts across America with location finder and exclusive member benefits',
    category: 'website',
    technologies: ['WordPress', 'Elementor', 'Google Analytics', 'Geolocation API'],
    url: 'https://www.gobowling.com/',
    features: ['Location Finder', 'Membership Program', 'Promotional System', 'Educational Content'],
    industry: 'Recreation & Sports',
    colors: {
      primary: '#FF0000',
      secondary: '#FFFFFF',
      accent: '#666666'
    }
  }
];

const categories = [
  { id: 'all', label: 'All Projects', icon: Globe },
  { id: 'website', label: 'Websites', icon: Code },
  { id: 'mobile', label: 'Mobile Apps', icon: Smartphone },
  { id: 'ecommerce', label: 'E-Commerce', icon: ShoppingCart },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'website': return 'from-blue-500 to-cyan-500';
      case 'mobile': return 'from-purple-500 to-pink-500';
      case 'ecommerce': return 'from-green-500 to-teal-500';
      case 'ai': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const generateProjectPreview = (project: Project) => {
    return (
      <div 
        className="w-full h-full relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${project.colors.primary} 0%, ${project.colors.secondary} 50%, ${project.colors.accent} 100%)`
        }}
      >
        {/* Website Preview Mockup */}
        <div className="absolute inset-4 bg-white/90 rounded-lg shadow-lg p-3">
          {/* Browser Bar */}
          <div className="flex items-center gap-1 mb-2 pb-2 border-b border-gray-200">
            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <div className="ml-2 bg-gray-100 rounded text-xs px-2 py-0.5 text-gray-600 truncate">
              {project.url?.replace('https://', '')}
            </div>
          </div>
          
          {/* Content Preview */}
          <div className="space-y-1">
            <div 
              className="h-3 rounded"
              style={{ backgroundColor: project.colors.primary, opacity: 0.8 }}
            ></div>
            <div 
              className="h-2 w-3/4 rounded"
              style={{ backgroundColor: project.colors.secondary, opacity: 0.6 }}
            ></div>
            <div 
              className="h-2 w-1/2 rounded"
              style={{ backgroundColor: project.colors.secondary, opacity: 0.4 }}
            ></div>
            <div className="grid grid-cols-2 gap-1 mt-2">
              <div 
                className="h-8 rounded"
                style={{ backgroundColor: project.colors.accent, opacity: 0.3 }}
              ></div>
              <div 
                className="h-8 rounded"
                style={{ backgroundColor: project.colors.accent, opacity: 0.3 }}
              ></div>
            </div>
          </div>
        </div>
        
        {/* Industry Badge */}
        <div className="absolute top-2 right-2 px-2 py-1 bg-black/70 text-white text-xs rounded-full">
          {project.industry}
        </div>
      </div>
    );
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Our Portfolio
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
              Real Projects, Real Results
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            From AI-powered web applications to mobile apps that scale, 
            see how we've helped businesses transform their digital presence.
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                {category.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-xl overflow-hidden group cursor-pointer"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
                  {generateProjectPreview(project)}
                  
                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    className="absolute inset-0 bg-black/80 flex items-center justify-center"
                  >
                    <div className="text-center">
                      {project.url && (
                        <Link
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur text-white rounded-lg hover:bg-white/30 transition-all"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Live
                        </Link>
                      )}
                    </div>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded-full">
                      {project.industry}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-white/10 text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-white/10 text-gray-400 rounded-full">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-1 mb-4">
                    {project.features.slice(0, 2).map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* View More Button */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0, x: hoveredProject === project.id ? 0 : -20 }}
                    className="flex items-center text-purple-400 text-sm font-medium"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State when no real projects yet */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-gray-400 text-lg mb-4">No projects found in this category</div>
            <button
              onClick={() => setActiveCategory('all')}
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              View all projects
            </button>
          </motion.div>
        )}

        {/* More Projects Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-xl p-6">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full border-2 border-white/20 flex items-center justify-center"
                  >
                    <span className="text-xs text-white font-bold">{i + 6}</span>
                  </div>
                ))}
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-2 border-white/20 flex items-center justify-center">
                  <span className="text-xs text-white font-bold">+</span>
                </div>
              </div>
              <div className="text-lg font-bold text-white">
                50+ More Projects Available
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              These are just our recent highlights. We've built solutions for restaurants, 
              SaaS platforms, service businesses, e-commerce, mobile apps, and enterprise applications.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-xs">
              <span className="px-3 py-1 bg-white/10 rounded-full text-gray-300">Healthcare</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-gray-300">E-commerce</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-gray-300">Real Estate</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-gray-300">Finance</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-gray-300">Manufacturing</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-gray-300">Non-Profit</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-gray-300">Education</span>
            </div>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join 500+ satisfied clients who trust KP Technology Solutions. 
              Our senior developers are ready to transform your business with AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="mailto:kptechnologysolutions@gmail.com"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all group"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="mailto:kptechnologysolutions@gmail.com?subject=Request Full Portfolio"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur text-white font-bold rounded-lg border border-white/20 hover:bg-white/20 transition-all"
              >
                View Full Portfolio
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}