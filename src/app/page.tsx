import Navigation from '@/components/Navigation';
import KPHero from '@/components/hero/KPHero';
import DevTerminal from '@/components/features/DevTerminal';
import Portfolio from '@/components/sections/Portfolio';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <KPHero />
      
      {/* Development Process Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How We Build
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
                Your Website
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Watch our professional development process in action. We use modern technologies like Angular and Next.js 
              to create websites that are fast, secure, and easy to manage.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <DevTerminal />
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-gradient-to-br from-black via-blue-950 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Everything Your Business Needs
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From simple business websites to complex mobile apps, we help Cleveland area businesses 
              grow online with professional web development services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Development */}
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Custom Business Websites</h3>
              <p className="text-gray-300 mb-6">
                Professional websites that look great and help your business grow. Built with the latest technology for speed and security.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• Angular & Next.js development</li>
                <li>• Mobile-friendly design</li>
                <li>• Search engine optimization</li>
                <li>• Fast loading speeds</li>
              </ul>
            </div>

            {/* Mobile Development */}
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Mobile Apps</h3>
              <p className="text-gray-300 mb-6">
                iPhone and Android apps that your customers will love to use. We handle everything from design to app store submission.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• iOS & Android development</li>
                <li>• App store submissions</li>
                <li>• User-friendly design</li>
                <li>• Ongoing maintenance</li>
              </ul>
            </div>

            {/* AI Integration */}
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">E-Commerce & Online Stores</h3>
              <p className="text-gray-300 mb-6">
                Sell your products online with a professional e-commerce website. Secure payments, inventory management, and customer accounts included.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li>• Online store setup</li>
                <li>• Payment processing</li>
                <li>• Inventory management</li>
                <li>• Customer accounts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <Portfolio />

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="text-white">
                <div className="font-bold text-lg">KP Technology Solutions</div>
                <div className="text-sm text-gray-400">AI-Powered Development</div>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Senior full-stack developers using AI to build amazing websites and applications. 
              Ready to transform your business with cutting-edge technology?
            </p>
            
            <div className="flex justify-center">
              <a
                href="mailto:kptechnologysolutions@gmail.com"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all"
              >
                Start Your Project Today
              </a>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-800">
              <p className="text-gray-500 text-sm">
                © 2024 KP Technology Solutions. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
