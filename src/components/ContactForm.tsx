'use client';

import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface ContactFormProps {
  className?: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  currentWebsite: string;
  features: string[];
  projectDetails: string;
}

export default function ContactForm({ className = '' }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    currentWebsite: '',
    features: [],
    projectDetails: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Using Web3Forms - completely free, no signup needed
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'a3e31b42-8b23-4c5c-9e1d-234567890abc', // Replace with actual Web3Forms key
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          company: formData.company || 'Not provided',
          project_type: formData.projectType,
          budget: formData.budget,
          timeline: formData.timeline,
          current_website: formData.currentWebsite || 'None',
          features: formData.features.join(', ') || 'None specified',
          project_details: formData.projectDetails,
          subject: `New ${formData.projectType} Project Inquiry from ${formData.name}`,
          from_name: 'KP Technology Solutions Website',
          to_email: 'kptechnologysolutions@gmail.com',
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          projectType: '',
          budget: '',
          timeline: '',
          currentWebsite: '',
          features: [],
          projectDetails: ''
        });
        
        // Track form submission
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'form_submit', {
            event_category: 'Contact',
            event_label: 'Contact Form Success'
          });
        }
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try emailing us directly at kptechnologysolutions@gmail.com');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleCheckboxChange = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  if (status === 'success') {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-lg p-8 text-center ${className}`}>
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent Successfully!</h3>
        <p className="text-green-600 mb-4">
          Thank you for your inquiry! We've received your project details and will get back to you within 24 hours (usually much sooner).
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-green-700 hover:text-green-800 font-medium"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className={`bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-700 ${className}`}>
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">Get Your Free Quote</h3>
        <p className="text-gray-300">Tell us about your project and we'll get back to you within 24 hours.</p>
      </div>

      {status === 'error' && (
        <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center">
            <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
            <p className="text-red-600 text-sm">{errorMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-600 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 placeholder-gray-400"
              placeholder="John Smith"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-600 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 placeholder-gray-400"
              placeholder="john@company.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-600 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 placeholder-gray-400"
              placeholder="(216) 555-0123"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-white mb-1">
              Business/Organization
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-600 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 placeholder-gray-400"
              placeholder="Your Business Name"
            />
          </div>
        </div>

        {/* Project Type */}
        <div>
          <label htmlFor="projectType" className="block text-sm font-medium text-white mb-1">
            What type of project do you need? *
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            value={formData.projectType}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">Select project type...</option>
            <option value="New Business Website">New Business Website (First Website)</option>
            <option value="Website Redesign">Website Redesign/Rebuild</option>
            <option value="E-commerce Store">Online Store/E-commerce</option>
            <option value="Mobile App (iOS/Android)">Mobile App (iPhone/Android)</option>
            <option value="Web Application">Custom Web Application</option>
            <option value="Website Maintenance">Website Support/Maintenance</option>
            <option value="Other">Other (please explain below)</option>
          </select>
        </div>

        {/* Budget and Timeline */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-white mb-1">
              What's your budget range? *
            </label>
            <select
              id="budget"
              name="budget"
              required
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-600 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 placeholder-gray-400"
            >
              <option value="">Select budget range...</option>
              <option value="Under $2,500">Under $2,500</option>
              <option value="$2,500 - $5,000">$2,500 - $5,000</option>
              <option value="$5,000 - $10,000">$5,000 - $10,000</option>
              <option value="$10,000 - $25,000">$10,000 - $25,000</option>
              <option value="$25,000+">$25,000+</option>
              <option value="Not sure yet">Not sure yet</option>
            </select>
          </div>

          <div>
            <label htmlFor="timeline" className="block text-sm font-medium text-white mb-1">
              When do you need this completed? *
            </label>
            <select
              id="timeline"
              name="timeline"
              required
              value={formData.timeline}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-600 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 placeholder-gray-400"
            >
              <option value="">Select timeline...</option>
              <option value="ASAP (Rush job)">ASAP (Rush job)</option>
              <option value="Within 1 month">Within 1 month</option>
              <option value="1-3 months">1-3 months</option>
              <option value="3-6 months">3-6 months</option>
              <option value="6+ months">6+ months</option>
              <option value="Just exploring options">Just exploring options</option>
            </select>
          </div>
        </div>

        {/* Current Website */}
        <div>
          <label htmlFor="currentWebsite" className="block text-sm font-medium text-white mb-1">
            Current website (if you have one)
          </label>
          <input
            type="url"
            id="currentWebsite"
            name="currentWebsite"
            value={formData.currentWebsite}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-600 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 placeholder-gray-400"
            placeholder="https://yourwebsite.com (leave blank if you need a new website)"
          />
          <p className="text-xs text-gray-400 mt-1">
            Many of our clients come to us for their first website or to rebuild an outdated one
          </p>
        </div>

        {/* Features Needed */}
        <div>
          <label className="block text-sm font-medium text-white mb-3">
            What features do you need? (Check all that apply)
          </label>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              'Contact Forms',
              'Online Booking/Scheduling',
              'Photo Gallery',
              'Customer Reviews/Testimonials',
              'Blog/News Section',
              'Social Media Integration',
              'Online Payments',
              'User Accounts/Login',
              'Search Functionality',
              'Inventory Management',
              'Email Marketing Integration',
              'Analytics/Reporting'
            ].map((feature) => (
              <label key={feature} className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.features.includes(feature)}
                  onChange={() => handleCheckboxChange(feature)}
                  className="mr-2 text-purple-600 focus:ring-purple-500"
                />
                <span className="text-sm text-gray-300">{feature}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Project Details */}
        <div>
          <label htmlFor="projectDetails" className="block text-sm font-medium text-white mb-1">
            Tell us about your project *
          </label>
          <textarea
            id="projectDetails"
            name="projectDetails"
            required
            rows={5}
            value={formData.projectDetails}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-vertical"
            placeholder="Describe your business, what you want your website/app to accomplish, any specific design preferences, competitors you like, or other important details..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-6 rounded-md font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center justify-center text-lg"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Sending Message...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Send Project Details
            </>
          )}
        </button>

        <p className="text-xs text-gray-400 text-center">
          By submitting this form, you agree to our privacy policy. We'll never share your information.
        </p>
      </form>

      <div className="mt-6 pt-6 border-t border-gray-600">
        <p className="text-sm text-gray-300 text-center">
          Prefer to email directly?{' '}
          <a 
            href="mailto:kptechnologysolutions@gmail.com" 
            className="text-purple-400 hover:text-purple-300 font-medium"
          >
            kptechnologysolutions@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}