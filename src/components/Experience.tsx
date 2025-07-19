import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, ExternalLink, ChevronRight, Award, TrendingUp, Users, Code2, Zap, Shield, Globe, Star, Building, Briefcase } from 'lucide-react';

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(0);
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

    const section = document.getElementById('experience');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      company: 'DeFi Protocol Labs',
      position: 'Senior Blockchain Engineer',
      duration: '2023 - Present',
      location: 'Remote',
      type: 'Full-time',
      companySize: '50-100 employees',
      industry: 'DeFi & Blockchain Infrastructure',
      description: 'Leading the development of next-generation DeFi protocols with focus on yield optimization and cross-chain interoperability. Architected smart contracts handling over $100M TVL with zero security incidents.',
      achievements: [
        {
          icon: <TrendingUp size={16} />,
          text: 'Designed and deployed yield aggregation protocol achieving 40% higher APY than competitors',
          impact: '+40% APY'
        },
        {
          icon: <Zap size={16} />,
          text: 'Reduced gas costs by 60% through advanced contract optimization techniques and assembly code',
          impact: '-60% Gas'
        },
        {
          icon: <Shield size={16} />,
          text: 'Led comprehensive security audits and implemented multi-sig governance systems',
          impact: '100% Security'
        },
        {
          icon: <Users size={16} />,
          text: 'Mentored 5 junior developers and established blockchain development best practices',
          impact: '5 Mentees'
        }
      ],
      technologies: ['Solidity', 'Rust', 'Hardhat', 'Chainlink', 'OpenZeppelin', 'Foundry'],
      responsibilities: [
        'Architect and develop high-performance DeFi protocols',
        'Optimize smart contracts for gas efficiency and security',
        'Lead cross-functional teams in protocol design and implementation',
        'Conduct security reviews and coordinate external audits'
      ],
      website: '#',
      gradient: 'from-purple-500 via-pink-500 to-red-500'
    },
    {
      company: 'Blockchain Infrastructure Co',
      position: 'Protocol Engineer',
      duration: '2021 - 2023',
      location: 'San Francisco, CA',
      type: 'Full-time',
      companySize: '100-500 employees',
      industry: 'Layer 2 Solutions',
      description: 'Developed Layer 2 scaling solutions and consensus mechanisms. Built infrastructure supporting 10,000+ TPS with sub-second finality, revolutionizing blockchain scalability.',
      achievements: [
        {
          icon: <Zap size={16} />,
          text: 'Implemented optimistic rollup solution reducing transaction costs by 95%',
          impact: '-95% Costs'
        },
        {
          icon: <Code2 size={16} />,
          text: 'Built custom consensus algorithm improving network efficiency by 300%',
          impact: '+300% Efficiency'
        },
        {
          icon: <Users size={16} />,
          text: 'Mentored junior developers and established security best practices across teams',
          impact: 'Team Leadership'
        },
        {
          icon: <Globe size={16} />,
          text: 'Designed cross-chain bridge handling $50M+ in daily volume',
          impact: '$50M+ Volume'
        }
      ],
      technologies: ['Go', 'Rust', 'Solidity', 'Docker', 'Kubernetes', 'gRPC'],
      responsibilities: [
        'Design and implement Layer 2 scaling solutions',
        'Develop consensus mechanisms and network protocols',
        'Optimize blockchain infrastructure for high throughput',
        'Collaborate with research teams on protocol improvements'
      ],
      website: '#',
      gradient: 'from-blue-500 via-cyan-500 to-teal-500'
    },
    {
      company: 'Web3 Startup',
      position: 'Smart Contract Developer',
      duration: '2020 - 2021',
      location: 'New York, NY',
      type: 'Full-time',
      companySize: '10-50 employees',
      industry: 'DeFi Applications',
      description: 'Focused on building secure, gas-optimized smart contracts for various DeFi applications including DEXs, lending protocols, and NFT marketplaces. Pioneered several gas optimization techniques.',
      achievements: [
        {
          icon: <Shield size={16} />,
          text: 'Deployed 25+ audited smart contracts with zero security incidents',
          impact: '25+ Contracts'
        },
        {
          icon: <Zap size={16} />,
          text: 'Optimized contract gas usage by average of 35% across all deployments',
          impact: '-35% Gas'
        },
        {
          icon: <Globe size={16} />,
          text: 'Integrated with 15+ major DeFi protocols and price oracles',
          impact: '15+ Integrations'
        },
        {
          icon: <Award size={16} />,
          text: 'Contributed to 3 successful protocol launches with combined $10M+ TVL',
          impact: '$10M+ TVL'
        }
      ],
      technologies: ['Solidity', 'Web3.js', 'Truffle', 'OpenZeppelin', 'IPFS', 'React'],
      responsibilities: [
        'Develop and deploy secure smart contracts',
        'Implement gas optimization strategies',
        'Integrate with external DeFi protocols and oracles',
        'Conduct thorough testing and security reviews'
      ],
      website: '#',
      gradient: 'from-green-500 via-emerald-500 to-teal-500'
    },
    {
      company: 'Fintech Solutions Inc',
      position: 'Backend Developer',
      duration: '2019 - 2020',
      location: 'Austin, TX',
      type: 'Full-time',
      companySize: '500+ employees',
      industry: 'Financial Technology',
      description: 'Developed robust backend systems for financial applications with focus on security, scalability, and regulatory compliance. Transitioned into blockchain development during this role.',
      achievements: [
        {
          icon: <Code2 size={16} />,
          text: 'Built microservices architecture handling 1M+ daily transactions',
          impact: '1M+ Transactions'
        },
        {
          icon: <Shield size={16} />,
          text: 'Implemented security protocols achieving SOC 2 Type II compliance',
          impact: 'SOC 2 Compliant'
        },
        {
          icon: <TrendingUp size={16} />,
          text: 'Optimized database queries reducing response times by 70%',
          impact: '-70% Response Time'
        },
        {
          icon: <Users size={16} />,
          text: 'Led migration of legacy systems to modern cloud infrastructure',
          impact: 'Cloud Migration'
        }
      ],
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'AWS', 'Docker'],
      responsibilities: [
        'Design and implement scalable backend systems',
        'Ensure compliance with financial regulations',
        'Optimize database performance and security',
        'Collaborate with frontend teams on API design'
      ],
      website: '#',
      gradient: 'from-orange-500 via-red-500 to-pink-500'
    }
  ];

  const totalYears = new Date().getFullYear() - 2022;

  return (
    <section id="experience" className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 dark:from-gray-900 dark:via-purple-900 dark:to-gray-900 bg-gray-50 from-gray-50 via-purple-50 to-gray-50">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
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

        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>

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
            <div className="text-center mb-12 lg:mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 lg:mb-6">
                <Briefcase size={16} className="text-orange-400" />
                <span className="text-orange-600 dark:text-orange-300 font-medium text-sm sm:text-base">Professional Journey</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-6">
                Work <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Experience</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                {totalYears}+ years of building revolutionary blockchain solutions, from smart contracts to protocol architecture, 
                with a proven track record of delivering secure, scalable, and innovative systems.
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mt-6 lg:mt-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    {totalYears}+
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">Years Experience</div>
                </div>
                <div className="w-px h-8 sm:h-12 bg-gray-300 dark:bg-gray-600"></div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    {experiences.length}
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">Companies</div>
                </div>
                <div className="w-px h-8 sm:h-12 bg-gray-300 dark:bg-gray-600"></div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    10+
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">Successful Projects</div>
                </div>
              </div>
            </div>

            {/* Experience Timeline Navigation */}
            <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-8 lg:mb-12 px-4 sm:px-0">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveExperience(index)}
                  className={`group flex items-center gap-2 sm:gap-3 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg lg:rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                    activeExperience === index
                      ? `bg-gradient-to-r ${exp.gradient} text-white shadow-lg transform scale-105`
                      : 'bg-white/80 dark:bg-white/10 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-white/20 border border-gray-200 dark:border-white/20 shadow-sm'
                  }`}
                >
                  <Building size={14} className="sm:w-4 sm:h-4" />
                  <div className="text-left">
                    <div className="font-semibold text-xs sm:text-sm">{exp.company}</div>
                    <div className="text-xs opacity-75 hidden sm:block">{exp.duration}</div>
                  </div>
                </button>
              ))}
            </div>

            {/* Active Experience Display */}
            <div className={`mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="bg-white/90 dark:bg-white/10 backdrop-blur-sm border-2 border-gray-200 dark:border-white/20 rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl mx-4 sm:mx-0">
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Company Info Sidebar */}
                  <div className={`bg-gradient-to-br ${experiences[activeExperience].gradient} p-6 sm:p-8 lg:p-12 text-white relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10">
                      <div className="mb-6 lg:mb-8">
                        <div className="flex items-center gap-2 sm:gap-3 mb-3 lg:mb-4">
                          <div className="p-2 sm:p-3 bg-white/20 backdrop-blur-sm rounded-lg lg:rounded-xl">
                            <Building size={20} className="sm:w-6 sm:h-6" />
                          </div>
                          {experiences[activeExperience].website && (
                            <a 
                              href={experiences[activeExperience].website} 
                              className="p-1.5 sm:p-2 bg-white/20 backdrop-blur-sm rounded-md lg:rounded-lg hover:bg-white/30 transition-all duration-300"
                              title="Visit Company Website"
                            >
                              <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                            </a>
                          )}
                        </div>
                        
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
                          {experiences[activeExperience].company}
                        </h3>
                        <p className="text-base sm:text-lg lg:text-xl font-semibold mb-3 lg:mb-4 text-white/90">
                          {experiences[activeExperience].position}
                        </p>
                        
                        <div className="space-y-2 lg:space-y-3 text-white/80 text-sm lg:text-base">
                          <div className="flex items-center gap-2">
                            <Calendar size={14} className="lg:w-4 lg:h-4" />
                            <span>{experiences[activeExperience].duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={14} className="lg:w-4 lg:h-4" />
                            <span>{experiences[activeExperience].location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Briefcase size={14} className="lg:w-4 lg:h-4" />
                            <span>{experiences[activeExperience].type}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3 lg:space-y-4">
                        <div className="p-3 lg:p-4 bg-white/10 backdrop-blur-sm rounded-lg lg:rounded-xl">
                          <div className="text-xs lg:text-sm font-semibold mb-1">Industry</div>
                          <div className="text-white/90 text-sm lg:text-base">{experiences[activeExperience].industry}</div>
                        </div>
                        <div className="p-3 lg:p-4 bg-white/10 backdrop-blur-sm rounded-lg lg:rounded-xl">
                          <div className="text-xs lg:text-sm font-semibold mb-1">Company Size</div>
                          <div className="text-white/90 text-sm lg:text-base">{experiences[activeExperience].companySize}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Experience Details */}
                  <div className="lg:col-span-2 p-6 sm:p-8 lg:p-12">
                    <div className="mb-6 lg:mb-8">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 lg:mb-4">Role Overview</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                        {experiences[activeExperience].description}
                      </p>
                    </div>

                    {/* Key Achievements */}
                    <div className="mb-6 lg:mb-8">
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-6 flex items-center gap-2">
                        <Award size={18} className="text-yellow-400 sm:w-5 sm:h-5" />
                        Key Achievements
                      </h4>
                      <div className="space-y-3 lg:space-y-4">
                        {experiences[activeExperience].achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="group flex items-start gap-3 lg:gap-4 p-3 lg:p-4 bg-gray-50 dark:bg-white/5 backdrop-blur-sm rounded-lg lg:rounded-xl border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300">
                            <div className={`bg-gradient-to-r ${experiences[activeExperience].gradient} p-1.5 lg:p-2 rounded-md lg:rounded-lg text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                              {achievement.icon}
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-2 text-sm lg:text-base">
                                {achievement.text}
                              </p>
                              <div className={`inline-flex items-center gap-1 px-2 lg:px-3 py-1 bg-gradient-to-r ${experiences[activeExperience].gradient} bg-opacity-20 rounded-full`}>
                                <Star size={10} className="text-yellow-400 lg:w-3 lg:h-3" />
                                <span className="text-xs font-semibold text-gray-800 dark:text-white">
                                  {achievement.impact}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6 lg:mb-8">
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 lg:mb-4 flex items-center gap-2">
                        <Code2 size={18} className="text-blue-400 sm:w-5 sm:h-5" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2 lg:gap-3">
                        {experiences[activeExperience].technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className={`bg-gradient-to-r ${experiences[activeExperience].gradient} bg-opacity-20 text-gray-800 dark:text-white px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-md lg:rounded-lg text-xs sm:text-sm border border-gray-300 dark:border-white/20 font-medium hover:scale-105 transition-transform duration-300`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 lg:mb-4 flex items-center gap-2">
                        <Users size={18} className="text-green-400 sm:w-5 sm:h-5" />
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2 lg:space-y-3">
                        {experiences[activeExperience].responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex} className="flex items-start gap-2 lg:gap-3 text-gray-600 dark:text-gray-300 text-sm lg:text-base">
                            <ChevronRight size={14} className="text-purple-400 mt-1 flex-shrink-0 lg:w-4 lg:h-4" />
                            <span className="leading-relaxed">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;