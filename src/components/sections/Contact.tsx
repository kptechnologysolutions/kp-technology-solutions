'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to take your business online? Get a free consultation and quote for your project. 
            We respond to all inquiries within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              <p className="text-gray-600 text-lg mb-8">
                Based in Cleveland, Ohio and Charleston, South Carolina, we serve clients nationwide. 
                Whether you need a simple website or a complex web application, we're here to help your business succeed online.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                  <a 
                    href="mailto:kptechnologysolutions@gmail.com"
                    className="text-purple-600 hover:text-purple-700 font-medium"
                  >
                    kptechnologysolutions@gmail.com
                  </a>
                  <p className="text-gray-500 text-sm mt-1">We respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">Locations</h4>
                  <p className="text-gray-600">Cleveland, Ohio</p>
                  <p className="text-gray-600">Charleston, South Carolina</p>
                  <p className="text-gray-500 text-sm mt-1">Serving clients nationwide</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">Response Time</h4>
                  <p className="text-gray-600">24 hours or less</p>
                  <p className="text-gray-500 text-sm mt-1">Usually within a few hours</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">Free Consultation</h4>
                  <p className="text-gray-600">30-minute strategy call</p>
                  <p className="text-gray-500 text-sm mt-1">No obligation, just great advice</p>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">We Serve These Areas:</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                <div>• Cleveland, OH</div>
                <div>• Charleston, SC</div>
                <div>• Akron, OH</div>
                <div>• Columbia, SC</div>
                <div>• Columbus, OH</div>
                <div>• Myrtle Beach, SC</div>
                <div>• Cincinnati, OH</div>
                <div>• Nationwide (Remote)</div>
              </div>
            </div>

            {/* Testimonial Preview */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 border border-purple-200">
              <p className="text-gray-700 italic mb-4">
                "KP Technology Solutions built our restaurant website and it's been amazing for our business. 
                We get online orders every day now and customers always compliment how easy it is to use."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  56
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900">56 Kitchen</p>
                  <p className="text-gray-500 text-sm">Restaurant Client</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}