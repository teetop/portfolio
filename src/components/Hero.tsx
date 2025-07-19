import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Download, ArrowDown, Code, Users, Zap, Calendar, Rocket, Shield, Globe, Star, ChevronRight, Play } from 'lucide-react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const roles = [
    { text: "Blockchain Engineer", color: "from-purple-400 to-pink-400" },
    { text: "Protocol Engineer", color: "from-blue-400 to-cyan-400" },
    { text: "Smart Contract Developer", color: "from-green-400 to-teal-400" },
    { text: "Full Stack Engineer", color: "from-orange-400 to-red-400" },
    { text: "Web3 Innovator", color: "from-indigo-400 to-purple-400" }
  ];

  const achievements = [
     { 
      icon: Calendar, 
      value:  `${new Date().getFullYear() - 2022}+`, 
      label: "Years Experience", 
      description: "In blockchain development",
      color: "from-pink-400 via-rose-400 to-red-500",
      delay: "0.3s"
    },
    { 
      icon: Code, 
      value: "100+", 
      label: "Smart Contracts", 
      description: "Deployed with zero security incidents",
      color: "from-blue-400 via-purple-400 to-pink-500",
      delay: "0.1s"
    },
    { 
      icon: Shield, 
      value: "95%", 
      label: "Gas Optimization", 
      description: "Average reduction achieved",
      color: "from-green-400 via-teal-400 to-cyan-500",
      delay: "0.2s"
    },
     { 
      icon: Zap, 
      value: "10+", 
      label: "Mainnet DApps", 
      description: "Across different protocols",
      color: "from-yellow-400 via-orange-400 to-red-500",
      delay: "0s"
    }
  ];

  const techStack = [
    { name: "Rust", icon: "🦀", color: "from-orange-500 to-red-600", expertise: "Expert" },
    { name: "Java", icon: "☕", color: "from-amber-500 to-orange-600", expertise: "Expert" },
    { name: "Solidity", icon: "⚡", color: "from-blue-500 to-indigo-600", expertise: "Expert" },
    { name: "Cairo", icon: "🔺", color: "from-purple-500 to-pink-600", expertise: "Advanced" },
  ];

  const specialties = [
    { icon: Shield, title: "Security-Obsessed", description: "Zero-vulnerability smart contracts" },
    { icon: Zap, title: "Gas Optimization Junkie", description: "Maximum efficiency, minimum cost" },
    { icon: Globe, title: "Cross-Chain Native", description: "Multi-blockchain expertise" },
    { icon: Rocket, title: "Scalability-Driven", description: "High-performance protocols" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 4000);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 pt-16 lg:pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${20 + Math.sin(Date.now() / 3000) * 10}%`,
            top: `${20 + Math.cos(Date.now() / 4000) * 10}%`,
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            right: `${15 + Math.sin(Date.now() / 3500) * 8}%`,
            top: `${30 + Math.cos(Date.now() / 3200) * 12}%`,
            animationDelay: '1s'
          }}
        ></div>
        <div 
          className="absolute w-72 h-72 bg-gradient-to-r from-green-500/25 to-teal-500/25 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${60 + Math.sin(Date.now() / 2800) * 15}%`,
            bottom: `${20 + Math.cos(Date.now() / 3800) * 8}%`,
            animationDelay: '2s'
          }}
        ></div>

        {/* Interactive Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}

        {/* Mouse-following gradient */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         
        {/* Status Badge */}
        <div className={`flex justify-center mb-6 lg:mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="group relative inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 backdrop-blur-sm hover:from-green-500/20 hover:to-emerald-500/20 transition-all duration-300">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400/20 to-emerald-400/20 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative flex items-center">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-3 shadow-lg shadow-green-400/50"></div>
              <span className="text-green-300 font-semibold text-sm sm:text-base">Available for Revolutionary Projects</span>
              <ChevronRight size={14} className="ml-2 text-green-400 group-hover:translate-x-1 transition-transform duration-300 sm:w-4 sm:h-4" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center space-y-8 lg:space-y-12">
          {/* Name & Title */}
          <div className={`space-y-4 lg:space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none">
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                    Michael Dean
                  </span>
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-3xl -z-10 animate-pulse"></div>
                </span>
              </h1>
              
              {/* Animated Subtitle */}
              <div className="h-12 sm:h-16 lg:h-20 flex items-center justify-center mt-3 lg:mt-4">
                <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
                  <span className={`inline-block bg-gradient-to-r ${roles[currentRole].color} bg-clip-text text-transparent transition-all duration-500 transform`}>
                    {roles[currentRole].text}
                  </span>
                </h2>
              </div>
            </div>
          </div>
          
          {/* Hero Description */}
          <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-300 leading-relaxed mb-4 lg:mb-6 px-4 sm:px-0">
              Architecting the <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold">future of true decentralization and privacy</span> through 
              through innovative protocol design, zero-knowledge-powered solutions, 
              gas-efficient smart contracts and scalable blockchain infrastructure.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-gray-400 px-4 sm:px-0">
              {specialties.map((specialty, index) => {
                const Icon = specialty.icon;
                return (
                  <div key={index} className="group flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                    <Icon size={14} className="text-purple-400 group-hover:scale-110 transition-transform duration-300 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm font-medium group-hover:text-white transition-colors duration-300">{specialty.title}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tech Stack */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 mb-6 lg:mb-8 px-4 sm:px-0">
              {techStack.map((tech, index) => (
                <div
                  key={tech.name}
                  className={`group relative px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl lg:rounded-2xl bg-gradient-to-r ${tech.color} bg-opacity-10 border border-white/10 backdrop-blur-sm hover:scale-110 hover:bg-opacity-20 transition-all duration-500 cursor-pointer`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`absolute inset-0 rounded-xl lg:rounded-2xl bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}></div>
                  <div className="relative flex items-center gap-2 sm:gap-3">
                    <span className="text-lg sm:text-xl lg:text-2xl group-hover:scale-125 transition-transform duration-300">{tech.icon}</span>
                    <div>
                      <div className="text-white font-bold text-sm sm:text-base lg:text-lg">{tech.name}</div>
                      <div className="text-gray-400 text-xs sm:text-sm group-hover:text-gray-300 transition-colors duration-300">{tech.expertise}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievement Metrics */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 lg:mb-12 px-4 sm:px-0">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={achievement.label}
                    className="group relative p-3 sm:p-4 rounded-xl lg:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-105 hover:border-white/20 transition-all duration-500 cursor-pointer"
                    style={{ animationDelay: achievement.delay }}
                  >
                    <div className={`absolute inset-0 rounded-xl lg:rounded-3xl bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500`}></div>
                    <div className="relative text-center">
                      <div className={`inline-flex p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r ${achievement.color} bg-opacity-20 mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                      </div>
                      <div className="text-lg sm:text-xl lg:text-2xl font-black text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                        {achievement.value}
                      </div>
                      <div className="text-sm sm:text-base font-semibold text-gray-300 mb-1">{achievement.label}</div>
                      <div className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">{achievement.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Call to Action */}
          <div className={`space-y-6 lg:space-y-8 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 sm:px-0">
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-xl lg:rounded-2xl font-bold text-white text-sm sm:text-base lg:text-lg hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 to-pink-400 blur-xl opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
                <span className="relative flex items-center justify-center">
                  <Play className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform duration-300" />
                  Explore My Work
                  <ArrowDown className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:translate-y-1 transition-transform duration-300" />
                </span>
              </button>
              
              <a 
                href="https://flowcv.com/resume/gnsu9bqkm4"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl lg:rounded-2xl font-bold text-white text-sm sm:text-base lg:text-lg hover:bg-white/20 hover:border-white/30 transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
              >
                <span className="flex items-center justify-center">
                  <Download className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform duration-300" />
                  Download Resume
                </span>
              </a>
            </div>
            <div className="flex justify-center space-x-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;