
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
      className="relative bg-gray-900 dark:bg-slate-950 text-white py-8 lg:py-12 transition-colors duration-300 overflow-hidden"
      aria-label="Footer Section"
    >
      {/* Subtle background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl -top-24 -left-24 lg:-top-32 lg:-left-32"></div>
        <div className="absolute w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl -bottom-24 -right-24 lg:-bottom-32 lg:-right-32"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10">
          
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            
            <div className="flex items-center space-x-2 lg:space-x-3">
               <Logo className="w-8 h-8 lg:w-10 lg:h-10 text-purple-600 dark:text-purple-400" />
              <div className="text-center sm:text-left">
                <p className="text-gray-300 flex items-center justify-center sm:justify-start gap-1 text-sm lg:text-base">
                  Built with <Heart size={14} className="text-red-500 lg:w-4 lg:h-4" />
                </p>
                <p className="text-gray-400 text-xs lg:text-sm mt-1">
                  © {new Date().getFullYear()}  Michael Dean Oyewole.
                </p>
              </div>
            </div>

            <motion.button
              onClick={scrollToTop}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-2 lg:p-3 rounded-full transition-all transform hover:scale-110 shadow-lg"
              title="Back to top"
              aria-label="Scroll to top of page"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp size={16} className="lg:w-5 lg:h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;