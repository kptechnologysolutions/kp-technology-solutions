'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight, TrendingUp, Clock, Shield } from 'lucide-react';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
  projectType: string;
  results?: {
    metric: string;
    value: string;
  }[];
  rating: number;
  image?: string;
  companyLogo?: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "KP Technology transformed our restaurant's online presence completely. We went from getting maybe 2-3 online orders per week to getting 15-20 orders every single day. The website is so easy for our customers to use, and we get compliments on it constantly.",
    author: "Maria Gonzalez",
    title: "Owner",
    company: "56 Kitchen",
    projectType: "Restaurant Website & Online Ordering",
    results: [
      { metric: "Online Orders", value: "+600%" },
      { metric: "Mobile Traffic", value: "+400%" },
      { metric: "Page Load Speed", value: "Under 2s" }
    ],
    rating: 5
  },
  {
    id: '2',
    quote: "We needed a professional website that would showcase our bowling centers across the country. KP Technology delivered exactly what we needed - a fast, beautiful site that helps people find our locations and book events. The search functionality works perfectly.",
    author: "David Chen",
    title: "Digital Marketing Director",
    company: "GoBowling.com",
    projectType: "National Directory Website",
    results: [
      { metric: "Location Searches", value: "+250%" },
      { metric: "Event Bookings", value: "+180%" },
      { metric: "User Engagement", value: "+300%" }
    ],
    rating: 5
  },
  {
    id: '3',
    quote: "The team at KP Technology really understands both the technical side and the business side. They didn't just build us a website - they built us a tool that actually helps our restaurant operate better and serve more customers.",
    author: "Sophie Laurent",
    title: "Restaurant Manager",
    company: "Elle Cle",
    projectType: "Restaurant Website & Branding",
    results: [
      { metric: "Reservations", value: "+220%" },
      { metric: "Brand Recognition", value: "+150%" },
      { metric: "Customer Reviews", value: "4.8/5 avg" }
    ],
    rating: 5
  }
];

const stats = [
  {
    number: "15+",
    label: "Years Experience",
    description: "Building websites that work"
  },
  {
    number: "500+",
    label: "Happy Clients",
    description: "Across the United States"
  },
  {
    number: "98%",
    label: "Client Satisfaction",
    description: "Based on project reviews"
  },
  {
    number: "24hr",
    label: "Response Time",
    description: "Usually much faster"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
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
            What Our Clients Say
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
              Real Results, Real Success
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business owners across the country 
            are saying about working with KP Technology Solutions.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">
                {stat.number}
              </div>
              <div className="text-white font-semibold mb-1">{stat.label}</div>
              <div className="text-gray-400 text-sm">{stat.description}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 lg:p-10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="grid lg:grid-cols-3 gap-8 items-start">
                {/* Quote Section */}
                <div className="lg:col-span-2">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-purple-400 mr-3" />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-lg lg:text-xl text-gray-100 leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.author}</div>
                      <div className="text-gray-400 text-sm">{testimonial.title}, {testimonial.company}</div>
                      <div className="text-purple-400 text-sm">{testimonial.projectType}</div>
                    </div>
                  </div>
                </div>

                {/* Results Section */}
                {testimonial.results && (
                  <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl p-6 border border-purple-500/30">
                    <div className="flex items-center mb-4">
                      <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
                      <h4 className="text-white font-semibold">Project Results</h4>
                    </div>
                    
                    <div className="space-y-3">
                      {testimonial.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex justify-between items-center">
                          <span className="text-gray-300 text-sm">{result.metric}</span>
                          <span className="text-green-400 font-bold">{result.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-3 gap-8 text-center"
        >
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">100% Satisfaction Guarantee</h3>
            <p className="text-gray-400 text-sm">We don't stop until you're completely happy with your website</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Fast Response Time</h3>
            <p className="text-gray-400 text-sm">24-hour response guarantee, usually much faster</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Proven Results</h3>
            <p className="text-gray-400 text-sm">Average 300% increase in online business growth</p>
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
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss your project and create a website that delivers real results for your business.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg rounded-lg shadow-2xl hover:from-purple-700 hover:to-blue-700 transition-all group"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Your Free Consultation
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}