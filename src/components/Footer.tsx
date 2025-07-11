
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Shield } from 'lucide-react';
import Logo from './Logo';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative bg-gray-900 dark:bg-slate-950 text-white py-12 transition-colors duration-300 overflow-hidden"
      aria-label="Footer Section"
    >
      {/* Subtle background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-64 h-64 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl -top-32 -left-32"></div>
        <div className="absolute w-64 h-64 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl -bottom-32 -right-32"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10">
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
               <Logo className="w-10 h-10 text-purple-600 dark:text-purple-400" />
              <div className="text-center md:text-left">
                <p className="text-gray-300 flex items-center justify-center md:justify-start gap-1">
                  Built with <Heart size={16} className="text-red-500" />
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  © {new Date().getFullYear()}  Michael Dean Oyewole.
                </p>
              </div>
            </div>

            <motion.button
              onClick={scrollToTop}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-2 rounded-full transition-all transform hover:scale-110 shadow-lg"
              title="Back to top"
              aria-label="Scroll to top of page"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;