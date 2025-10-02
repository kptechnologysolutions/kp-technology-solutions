'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Users, Award, MapPin, Clock, Zap, 
  Brain, Rocket, CheckCircle, Globe, Building2 
} from 'lucide-react';

export default function About() {
  const stats = [
    { number: "15+", label: "Years in Business", icon: Clock },
    { number: "500+", label: "Websites Built", icon: Code2 },
    { number: "50+", label: "Mobile Apps", icon: Rocket },
    { number: "98%", label: "Client Satisfaction", icon: Award }
  ];

  const values = [
    {
      icon: Brain,
      title: "Expert + AI = Better Results",
      description: "We combine 15+ years of development expertise with modern AI tools to build websites faster and better than traditional methods."
    },
    {
      icon: Users,
      title: "Small Business Focused",
      description: "We specialize in helping small to medium businesses compete online. No corporate complexity - just websites that work for real businesses."
    },
    {
      icon: Zap,
      title: "Fast & Reliable",
      description: "24-hour response times, projects delivered on schedule, and ongoing support when you need it. We're here for the long term."
    },
    {
      icon: Globe,
      title: "Modern Technology",
      description: "Angular, Next.js, and the latest web technologies. Your website will be fast, secure, and ready for the future."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About KP Technology Solutions
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
              Your Web Development Partner
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're senior full-stack developers who help businesses succeed online. 
            Based in Cleveland, Ohio and Charleston, South Carolina, serving clients nationwide.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Our Story & Mission
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <strong className="text-white">Founded in 2009</strong>, KP Technology Solutions started with a simple mission: 
                help small businesses compete online with professional websites that actually work.
              </p>
              <p>
                After building hundreds of websites and mobile apps, we've learned what works and what doesn't. 
                We've seen businesses transform their success with the right online presence.
              </p>
              <p>
                <strong className="text-white">Today, we combine our 15+ years of experience</strong> with modern AI tools 
                to deliver better results faster. We're not just developers - we're your business partners in digital success.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                <span className="text-gray-300">Senior developers with proven expertise</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                <span className="text-gray-300">Serving clients in 20+ states nationwide</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                <span className="text-gray-300">Specializing in Angular, Next.js, and modern web tech</span>
              </div>
            </div>
          </motion.div>

          {/* Locations */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <MapPin className="w-8 h-8 text-purple-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Our Locations</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Cleveland, Ohio</h4>
                  <p className="text-gray-300 text-sm mb-3">
                    Serving Greater Cleveland, Akron, Columbus, Cincinnati, and all of Ohio
                  </p>
                  <div className="flex items-center text-sm text-gray-400">
                    <Building2 className="w-4 h-4 mr-2" />
                    <span>Primary operations & client meetings</span>
                  </div>
                </div>

                <div className="border-t border-gray-700 pt-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Charleston, South Carolina</h4>
                  <p className="text-gray-300 text-sm mb-3">
                    Serving Charleston, Columbia, Greenville, Myrtle Beach, and the Carolinas
                  </p>
                  <div className="flex items-center text-sm text-gray-400">
                    <Building2 className="w-4 h-4 mr-2" />
                    <span>Satellite office & regional support</span>
                  </div>
                </div>

                <div className="border-t border-gray-700 pt-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Nationwide Service</h4>
                  <p className="text-gray-300 text-sm">
                    Remote collaboration with clients across the United States. 
                    Video calls, screen sharing, and modern project management tools 
                    make distance irrelevant.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-white text-center mb-12">
            Why Choose KP Technology Solutions
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">{value.title}</h4>
                      <p className="text-gray-300 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss your project and see how we can help your business succeed online. 
              Free consultation, no pressure, just honest advice about what will work best for you.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg rounded-lg shadow-2xl hover:from-purple-700 hover:to-blue-700 transition-all group"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Users className="mr-2 w-6 h-6" />
              Let's Talk About Your Project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}