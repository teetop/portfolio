import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Github, Linkedin, Twitter } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800 transition-colors">
      <div className="container mx-auto px-4 py-3 lg:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 lg:space-x-3">
            <Logo className="w-8 h-8 lg:w-10 lg:h-10 text-purple-600 dark:text-purple-400" />
            <div className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Michael Dean
              </span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm xl:text-base font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-purple-600 dark:text-purple-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Social Links */}
            <div className="flex items-center space-x-2 xl:space-x-3 ml-3 xl:ml-4 pl-3 xl:pl-4 border-l border-gray-200 dark:border-gray-700">
              {[
                { icon: Github, href: "https://github.com/intelliDean", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/michaeldean8ix/", label: "LinkedIn" },
                { icon: Twitter, href: "https://x.com/Dean8IX", label: "Twitter" }
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 xl:p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200"
                    title={social.label}
                  >
                    <Icon size={14} className="xl:w-4 xl:h-4" />
                  </a>
                );
              })}
            </div>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-1.5 xl:p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon size={16} className="xl:w-[18px] xl:h-[18px]" /> : <Sun size={16} className="xl:w-[18px] xl:h-[18px]" />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-1.5 sm:space-x-2">
            {/* Mobile Social Links */}
            <div className="flex items-center space-x-1 sm:space-x-1.5">
              {[
                { icon: Github, href: "https://github.com/intelliDean", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/michaeldean8ix/", label: "LinkedIn" },
                { icon: Twitter, href: "https://x.com/Dean8IX", label: "Twitter" }
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 sm:p-2 rounded-md sm:rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200"
                    title={social.label}
                  >
                    <Icon size={12} className="sm:w-[14px] sm:h-[14px]" />
                  </a>
                );
              })}
            </div>
            
            <button
              onClick={toggleTheme}
              className="p-1.5 sm:p-2 rounded-md sm:rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {theme === 'light' ? <Moon size={16} className="sm:w-[18px] sm:h-[18px]" /> : <Sun size={16} className="sm:w-[18px] sm:h-[18px]" />}
            </button>
            <button
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-3 lg:mt-4 py-3 lg:py-4 border-t border-gray-200 dark:border-gray-800">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-2.5 px-4 text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-purple-600 dark:text-purple-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;