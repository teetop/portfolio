import React, { useState, useEffect } from 'react';
import { Shield, Zap, Globe, Code, Award, Users, Lightbulb, Target, ArrowRight, ExternalLink, ChevronDown, Star, Sparkles, Rocket, Brain } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const tabs = [
    { id: 'journey', label: 'My Journey', icon: <Rocket size={18} /> },
    { id: 'philosophy', label: 'Philosophy', icon: <Brain size={18} /> },
    { id: 'impact', label: 'Impact', icon: <Star size={18} /> }
  ];

  const tabContent = {
    journey: {
      title: "From Curiosity to Mastery",
      content: [
        {
          period: "2016 - The Beginning",
          title: "Introduction to Programming",
          description: "I was first introduced to programming in university through FORTRAN and Python — an experience that piqued my curiosity about what powers the world’s machines and systems. It wasn’t until a few years later that I fully immersed myself in software engineering."
        },
        {
          period: "2022 - Early Days",
          title: "Software Engineering",
          description: "My journey into software engineering wasn’t easy — I started with Java, not the typical beginner-friendly languages. It was a steep learning curve, but I pushed through, built great projects, and collaborated with brilliant minds. Eventually, my drive for more meaningful impact led me to Web3, where I found my true space."
        },
        {
          period: "2023 - Blockchain",
          title: "Smart Contract Engineering",
          description: "My journey into Web3 was rigorous, with a much steeper learning curve than Web2. It required unlearning familiar patterns, embracing entirely new paradigms, and adapting quickly. Given how fast-paced the space is, I had to learn rapidly and stay curious to seize the opportunities it offers."
        },
        {
          period: "2025 - Advance",
          title: "Protocol Engineering",
          description: "I’m constantly expanding my knowledge, knowing there’s always room for growth. I’ve taken courses in Zero-Knowledge Proofs and Protocol Engineering, and I continue to explore new ways to contribute meaningfully to the blockchain space"
        }
      ]
    },
    philosophy: {
      title: "Building Tomorrow's Infrastructure",
      principles: [
        {
          icon: <Shield size={24} />,
          title: "Security by Design",
          description: "Every line of code is written with security as the primary concern. I believe in formal verification, comprehensive testing, and multiple audit layers."
        },
        {
          icon: <Globe size={24} />,
          title: "Decentralization First",
          description: "True decentralization isn't just about removing intermediaries—it's about creating systems that empower individuals and resist censorship."
        },
        {
          icon: <Zap size={24} />,
          title: "Efficiency & Sustainability",
          description: "Building high-performance systems that minimize resource consumption while maximizing throughput and user experience."
        },
        {
          icon: <Users size={24} />,
          title: "Community-Driven Development",
          description: "The best protocols emerge from collaborative efforts. I believe in open-source development and community governance."
        }
      ]
    },
    impact: {
      title: "Measurable Contributions",
      metrics: [
        { value: "100+", label: "Smart Contracts", description: "Deployed with zero security incidents" },
        { value: "50+", label: "Devs", description: "Unboarded into Web3" },
        { value: "95%", label: "Gas Optimization", description: "Average reduction achieved" },
        { value: "10+", label: "Mainnet DApps", description: "Across different protocols" }
      ]
    }
  };

  const highlights = [
    {
      icon: <Shield size={28} />,
      title: 'Security-First Architecture',
      description: 'Designing robust protocols with security, auditability, and decentralization at the foundation of every system',
      gradient: 'from-red-500 via-pink-500 to-rose-500',
      stats: '100% Security Record'
    },
    {
      icon: <Zap size={28} />,
      title: 'High-Performance Systems',
      description: 'Optimizing blockchain protocols for maximum throughput, minimal latency, and efficient resource utilization',
      gradient: 'from-yellow-500 via-orange-500 to-red-500',
      stats: '10K+ TPS Achieved'
    },
    {
      icon: <Globe size={28} />,
      title: 'Web3 Innovation',
      description: 'Building the next generation of decentralized infrastructure that powers the future of digital interactions',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      stats: `${new Date().getFullYear() - 2022}+ Years Experience`
    },
    {
      icon: <Code size={28} />,
      title: 'Smart Contract Mastery',
      description: 'Creating secure, gas-optimized smart contracts and DeFi protocols with comprehensive testing and auditing',
      gradient: 'from-purple-500 via-indigo-500 to-blue-500',
      stats: '95% Gas Savings'
    }
  ];

  const achievements = [
    {
      icon: <Award size={20} />,
      title: 'Protocol Engineering Excellence',
      description: 'Designed and implemented multiple blockchain protocols from consensus to application layer',
      badge: 'Technical Leadership'
    },
    {
      icon: <Users size={20} />,
      title: 'Cross-Functional Team Leadership',
      description: 'Led diverse teams in delivering complex blockchain solutions on time and within budget',
      badge: 'Team Management'
    },
    {
      icon: <Lightbulb size={20} />,
      title: 'Open Source Contributions',
      description: 'Contributed to blockchain standards development (EIPs, SNIPs) and open-source projects',
      badge: 'Innovation'
    },
    {
      icon: <Target size={20} />,
      title: 'Production-Ready Systems',
      description: 'Delivered systems handling millions in transaction volume with 99.99% uptime',
      badge: 'Reliability'
    }
  ];

  const techStack = [
    { name: 'Rust', color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300', level: 'Expert' },
    { name: 'Solidity', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300', level: 'Expert' },
    { name: 'Cairo', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300', level: 'Advanced' },
    { name: 'Java', color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300', level: 'Expert' },
    { name: 'Spring Boot', color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300', level: 'Advanced' },
    { name: 'Hardhat', color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300', level: 'Expert' },
    { name: 'Foundry', color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300', level: 'Expert' },
    { name: 'StarkNet', color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300', level: 'Advanced' }
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Dynamic Background - Same as Hero */}
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
      </div>

      <div className="container mx-auto px-4">
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 px-4 py-2 rounded-full mb-6">
                <Sparkles size={16} className="text-purple-400" />
                <span className="text-purple-300 font-medium">About Me</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Crafting the <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">Future</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Passionate blockchain engineer architecting decentralized systems that reshape how we interact with digital assets, 
                data, and each other in the Web3 ecosystem.
              </p>
            </div>

            {/* Hero Profile Section */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16 lg:mb-24">
              {/* Left side - Enhanced Profile */}
              <div className={`flex flex-col ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                {/* Enhanced Profile Image with Multiple Effects */}
                <div className="relative group mb-6 lg:mb-8">
                  {/* Outer glow effect */}
                  <div className="absolute -inset-8 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-700 animate-pulse"></div>
                  
                  {/* Rotating border animation */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-spin" style={{animationDuration: '8s'}}></div>
                  
                  {/* Main image container */}
                  <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 p-2 shadow-2xl group-hover:shadow-purple-500/25 transition-all duration-500">
                    <div className="w-full h-full rounded-full bg-gray-900/90 backdrop-blur-sm overflow-hidden border-4 border-white/20 group-hover:border-white/40 transition-all duration-500">
                      <img 
                        src="/369556231_6748106998579271_2348261776859574740_n.jpg" 
                        alt="Michael Dean Oyewole - Blockchain Engineer"
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                  
                  {/* Floating elements around the image */}
                  <div className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                  <div className="absolute top-1/3 -left-4 w-4 h-4 bg-gradient-to-r from-green-400 to-teal-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
                  <div className="absolute bottom-8 right-8 w-5 h-5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
                  <div className="absolute bottom-1/3 -left-2 w-3 h-3 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
                </div>
                
                {/* Professional Info Cards */}
                <div className="space-y-3 lg:space-y-4">
                  
                  {/* Name and Title Card */}
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 lg:p-6 text-center lg:text-left group hover:bg-white/15 transition-all duration-300">
                   
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                      Michael Dean Oyewole
                    </h3>
                    
                    <p className="text-base lg:text-lg text-purple-300 mb-3">
                      Blockchain Engineer
                    </p>
                    
                    <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs sm:text-sm">Available for Revolutionary Projects</span>
                    </div>
                  </div>
          
                  
                  {/* Expertise Tags */}
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 lg:p-6">
                    <h4 className="text-white font-semibold mb-3 lg:mb-4 text-center lg:text-left text-sm lg:text-base">Core Expertise</h4>
                    <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                      {['Protocol Engineering', 'ZK Research', 'Smart Contracts', 'DeFi',  'Real World Asset', 'Full Stack Engineering',  'Database Management','Security Audits', 'Gas Optimization'].map((skill, index) => (
                        <span 
                          key={skill}
                          className="px-2 lg:px-3 py-1 bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-purple-200 rounded-full text-xs font-medium border border-purple-400/30 hover:scale-105 transition-transform duration-300"
                          style={{animationDelay: `${index * 0.1}s`}}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Interactive Story Tabs */}
              <div className={`space-y-6 flex flex-col ${isVisible ? 'animate-fade-in-delay' : 'opacity-0'}`}>
                <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-1 bg-white/10 backdrop-blur-sm p-1 rounded-xl">
                  {tabs.map((tab, index) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(index)}
                      className={`flex items-center justify-center sm:justify-start gap-2 px-3 lg:px-4 py-2 lg:py-3 rounded-lg font-medium transition-all duration-300 flex-1 text-sm lg:text-base ${
                        activeTab === index
                          ? 'bg-white/20 backdrop-blur-sm text-purple-400 shadow-md'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {tab.icon}
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-4 lg:p-8 rounded-2xl border border-white/20 min-h-[300px] lg:min-h-[400px]">
                  {activeTab === 0 && (
                    <div className="space-y-6">
                      <h4 className="text-xl lg:text-2xl font-bold text-white mb-4 lg:mb-6">
                        {tabContent.journey.title}
                      </h4>
                      <div className="space-y-4 lg:space-y-6">
                        {tabContent.journey.content.map((item, index) => (
                          <div key={index} className="relative pl-6 lg:pl-8 border-l-2 border-purple-500/50 last:border-l-0">
                            <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                            <div className="text-xs lg:text-sm text-purple-400 font-semibold mb-1">
                              {item.period}
                            </div>
                            <h5 className="font-semibold text-white mb-2 text-sm lg:text-base">
                              {item.title}
                            </h5>
                            <p className="text-gray-300 text-xs lg:text-sm leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 1 && (
                    <div className="space-y-6">
                      <h4 className="text-xl lg:text-2xl font-bold text-white mb-4 lg:mb-6">
                        {tabContent.philosophy.title}
                      </h4>
                      <div className="space-y-3 lg:space-y-4">
                        {tabContent.philosophy.principles.map((principle, index) => (
                          <div key={index} className="flex items-start gap-3 lg:gap-4 p-3 lg:p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                            <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-lg text-white flex-shrink-0">
                              {principle.icon}
                            </div>
                            <div>
                              <h5 className="font-semibold text-white mb-1 text-sm lg:text-base">
                                {principle.title}
                              </h5>
                              <p className="text-gray-300 text-xs lg:text-sm">
                                {principle.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 2 && (
                    <div className="space-y-6">
                      <h4 className="text-xl lg:text-2xl font-bold text-white mb-4 lg:mb-6">
                        {tabContent.impact.title}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                        {tabContent.impact.metrics.map((metric, index) => (
                          <div key={index} className="text-center p-4 lg:p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                            <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                              {metric.value}
                            </div>
                            <div className="font-semibold text-white mb-1 text-sm lg:text-base">
                              {metric.label}
                            </div>
                            <div className="text-xs lg:text-sm text-gray-300">
                              {metric.description}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>


            
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;