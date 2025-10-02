'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Code, Zap, DollarSign, Users, ArrowRight, 
  CheckCircle, TrendingUp, Timer, Sparkles,
  Brain, Cpu, Rocket, Star, Building2, Globe, Smartphone
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function KPHero() {
  const [activeService, setActiveService] = useState(0);
  const [codeLines, setCodeLines] = useState(['']);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  const services = [
    { icon: Globe, name: 'Custom Websites', color: 'text-blue-400' },
    { icon: Smartphone, name: 'Mobile Apps', color: 'text-purple-400' },
    { icon: Building2, name: 'Online Stores', color: 'text-green-400' },
    { icon: Rocket, name: 'SEO & Marketing', color: 'text-orange-400' },
  ];

  const sampleCode = [
    '// Modern Web Development with Next.js',
    'const buildWebsite = async (requirements) => {',
    '  const design = createResponsiveLayout(requirements);',
    '  const frontend = buildWithNextJS(design);',
    '  const backend = setupSecureAPI(frontend);',
    '  const testing = runQualityTests(backend);',
    '  return deployToProduction(testing);',
    '};',
    '',
    '// Professional code = Better results',
    'console.log("Your website is live!");'
  ];

  useEffect(() => {
    const serviceInterval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(serviceInterval);
  }, []);

  useEffect(() => {
    if (currentLineIndex < sampleCode.length) {
      const timer = setTimeout(() => {
        setCodeLines(prev => [...prev.slice(0, -1), sampleCode[currentLineIndex], '']);
        setCurrentLineIndex(prev => prev + 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentLineIndex]);

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-black via-blue-950 to-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-600/10 animate-pulse" />
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Professional Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="inline-flex items-center px-6 py-3 mb-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-2xl"
            >
              <Code className="w-5 h-5 mr-2 text-white animate-pulse" />
              <span className="text-white font-bold">PROFESSIONAL WEB DEVELOPMENT</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Custom Websites
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                That Actually Work
              </span>
            </h1>

            <p className="text-xl text-gray-200 mb-6 font-medium">
              We build <span className="text-cyan-400 font-bold">fast, secure websites</span> using the latest technology. 
              Your customers will love using your site, and you'll love the results it brings to your business.
            </p>
            
            <div className="mb-8">
              <h2 className="text-lg font-bold text-white mb-3">What You Get When You Hire Us:</h2>
              <div className="grid grid-cols-1 gap-3 text-gray-300">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">Custom websites built specifically for your business</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">Works perfectly on phones, tablets, and computers</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">Loads fast and ranks high on Google searches</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">Ongoing support when you need updates or help</span>
                </div>
              </div>
            </div>
            
            <div className="mb-8 p-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-lg">
              <div className="flex items-center mb-2">
                <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-white font-bold">Why Choose KP Technology:</span>
              </div>
              <p className="text-gray-200 text-sm">
                15+ years building websites for businesses like yours. We use modern tools like Angular and Next.js to create 
                <span className="text-purple-400 font-bold"> websites that grow your business and make your customers happy.</span>
              </p>
            </div>

            {/* Service Rotation */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 transition-all duration-500 ${
                      activeService === index ? 'border-purple-400 bg-purple-600/20' : ''
                    }`}
                  >
                    <IconComponent className={`w-8 h-8 mb-2 ${service.color}`} />
                    <div className="text-lg font-bold text-white">{service.name}</div>
                    <div className="text-sm text-gray-300">Expert Level</div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="#contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg rounded-lg shadow-2xl hover:from-purple-700 hover:to-blue-700 transition-all group"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    // Track CTA click
                    if (typeof window !== 'undefined' && (window as any).gtag) {
                      (window as any).gtag('event', 'cta_click', {
                        event_category: 'Engagement',
                        event_label: 'Hero CTA - Start Project'
                      });
                    }
                  }}
                >
                  <Rocket className="mr-2 w-6 h-6" />
                  Start Your Project
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="#portfolio"
                  className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold text-lg rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all"
                >
                  <Star className="mr-2 w-6 h-6" />
                  View Our Work
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Visual - Code Editor + AI Assistant */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            {/* Code Editor Mockup */}
            <motion.div
              animate={{ 
                y: [0, -15, 0],
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10 w-full max-w-lg"
            >
              {/* Editor Window */}
              <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 shadow-2xl">
                {/* Editor Header */}
                <div className="bg-gray-800 border-b border-gray-700 px-4 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <Code className="w-4 h-4 text-gray-400 ml-2" />
                    <span className="text-gray-400 text-sm font-mono">ai-enhanced-development.js</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <Brain className="w-4 h-4" />
                    <span className="text-xs font-mono">AI ACTIVE</span>
                    <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></div>
                  </div>
                </div>

                {/* Code Content */}
                <div className="p-4 h-80 bg-gray-900 font-mono text-sm">
                  {codeLines.map((line, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`${
                        line.includes('//') ? 'text-green-400' : 
                        line.includes('const') || line.includes('await') ? 'text-blue-400' :
                        line.includes('console.log') ? 'text-yellow-400' :
                        'text-gray-300'
                      }`}
                    >
                      <span className="text-gray-500 mr-4">{(index + 1).toString().padStart(2, ' ')}</span>
                      {line}
                      {index === codeLines.length - 1 && line === '' && (
                        <motion.span
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="inline-block w-2 h-4 bg-purple-400 ml-1"
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* AI Assistant Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: 'spring', stiffness: 200 }}
                className="absolute -top-4 -right-4 px-4 py-2 bg-purple-500 text-white rounded-full font-bold shadow-lg flex items-center text-sm z-20"
              >
                <Brain className="w-4 h-4 mr-2" />
                AI ENHANCED
              </motion.div>
            </motion.div>

            {/* Floating Stats Dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -right-8 top-1/4 z-20 hidden lg:block"
            >
              <motion.div
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, 1, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="bg-black/80 backdrop-blur-xl border border-purple-500/50 rounded-2xl p-6 shadow-2xl w-72"
              >
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-bold text-sm flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2 text-cyan-400" />
                    Performance Metrics
                  </h3>
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-bold animate-pulse">
                    LIVE
                  </span>
                </div>

                {/* Stats */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                    <div className="flex items-center">
                      <Timer className="w-5 h-5 text-blue-400 mr-2" />
                      <span className="text-gray-300 text-sm">Development Speed</span>
                    </div>
                    <motion.span 
                      className="text-xl font-bold text-blue-400"
                      animate={{ opacity: [1, 0.7, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      10x
                    </motion.span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                      <span className="text-gray-300 text-sm">Code Quality</span>
                    </div>
                    <span className="text-xl font-bold text-green-400">99.9%</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-purple-400 mr-2" />
                      <span className="text-gray-300 text-sm">Happy Clients</span>
                    </div>
                    <span className="text-xl font-bold text-white">500+</span>
                  </div>
                </div>
                
                {/* AI Status */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, -20] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                  className="mt-4 p-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-lg"
                >
                  <div className="flex items-center">
                    <Cpu className="w-4 h-4 text-purple-400 mr-2" />
                    <span className="text-white text-sm font-medium">AI optimizing code...</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Floating Service Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute -bottom-8 left-8 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-sm font-bold shadow-xl"
            >
              <Globe className="inline w-4 h-4 mr-2" />
              Full-Stack Experts
            </motion.div>

            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute top-8 -left-12 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-bold shadow-xl"
            >
              <Brain className="inline w-4 h-4 mr-2" />
              AI-Powered
            </motion.div>
          </motion.div>
        </div>

        {/* Competitive Comparison Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl"
        >
          <h3 className="text-center text-white font-bold mb-6 text-lg">
            Why Choose Professional Development Over DIY AI
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">KP Technology</div>
              <div className="text-cyan-400 font-bold text-xl mb-1">Expert + AI</div>
              <div className="text-gray-400 text-sm">Professional results guaranteed</div>
            </div>
            <div className="text-center opacity-60">
              <div className="text-2xl font-bold text-gray-400 mb-2">DIY AI Tools</div>
              <div className="text-orange-400 font-bold text-xl mb-1">Amateur Code</div>
              <div className="text-gray-500 text-sm">No architecture or support</div>
            </div>
            <div className="text-center opacity-60">
              <div className="text-2xl font-bold text-gray-400 mb-2">Traditional Dev</div>
              <div className="text-red-400 font-bold text-xl mb-1">Slow & Expensive</div>
              <div className="text-gray-500 text-sm">No AI acceleration</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}