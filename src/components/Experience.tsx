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

  const totalYears = new Date().getFullYear() - 2019;
  const totalProjects = experiences.reduce((sum, exp) => {
    const projectCount = exp.achievements.find(a => a.text.includes('Contracts') || a.text.includes('protocols'))?.impact;
    return sum + (projectCount ? parseInt(projectCount) || 0 : 0);
  }, 0);

  return (
    <section id="experience" className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
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
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 px-4 py-2 rounded-full mb-6">
                <Briefcase size={16} className="text-orange-400" />
                <span className="text-orange-300 font-medium">Professional Journey</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Work <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Experience</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                {totalYears}+ years of building revolutionary blockchain solutions, from smart contracts to protocol architecture, 
                with a proven track record of delivering secure, scalable, and innovative systems.
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-8 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    {totalYears}+
                  </div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
                <div className="w-px h-12 bg-gray-600"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    4
                  </div>
                  <div className="text-gray-400 text-sm">Companies</div>
                </div>
                <div className="w-px h-12 bg-gray-600"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    $100M+
                  </div>
                  <div className="text-gray-400 text-sm">TVL Managed</div>
                </div>
              </div>
            </div>

            {/* Experience Timeline Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveExperience(index)}
                  className={`group flex items-center gap-3 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeExperience === index
                      ? `bg-gradient-to-r ${exp.gradient} text-white shadow-lg transform scale-105`
                      : 'bg-white/10 backdrop-blur-sm text-gray-300 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  <Building size={16} />
                  <div className="text-left">
                    <div className="font-semibold">{exp.company}</div>
                    <div className="text-xs opacity-75">{exp.duration}</div>
                  </div>
                </button>
              ))}
            </div>

            {/* Active Experience Display */}
            <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-3xl overflow-hidden shadow-2xl">
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Company Info Sidebar */}
                  <div className={`bg-gradient-to-br ${experiences[activeExperience].gradient} p-8 lg:p-12 text-white relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10">
                      <div className="mb-8">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                            <Building size={24} />
                          </div>
                          {experiences[activeExperience].website && (
                            <a 
                              href={experiences[activeExperience].website} 
                              className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-300"
                              title="Visit Company Website"
                            >
                              <ExternalLink size={16} />
                            </a>
                          )}
                        </div>
                        
                        <h3 className="text-3xl font-bold mb-2">
                          {experiences[activeExperience].company}
                        </h3>
                        <p className="text-xl font-semibold mb-4 text-white/90">
                          {experiences[activeExperience].position}
                        </p>
                        
                        <div className="space-y-3 text-white/80">
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{experiences[activeExperience].duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>{experiences[activeExperience].location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Briefcase size={16} />
                            <span>{experiences[activeExperience].type}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                          <div className="text-sm font-semibold mb-1">Industry</div>
                          <div className="text-white/90">{experiences[activeExperience].industry}</div>
                        </div>
                        <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                          <div className="text-sm font-semibold mb-1">Company Size</div>
                          <div className="text-white/90">{experiences[activeExperience].companySize}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Experience Details */}
                  <div className="lg:col-span-2 p-8 lg:p-12">
                    <div className="mb-8">
                      <h4 className="text-2xl font-bold text-white mb-4">Role Overview</h4>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {experiences[activeExperience].description}
                      </p>
                    </div>

                    {/* Key Achievements */}
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <Award size={20} className="text-yellow-400" />
                        Key Achievements
                      </h4>
                      <div className="grid gap-4">
                        {experiences[activeExperience].achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="group flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                            <div className={`bg-gradient-to-r ${experiences[activeExperience].gradient} p-2 rounded-lg text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                              {achievement.icon}
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-300 leading-relaxed mb-2">
                                {achievement.text}
                              </p>
                              <div className={`inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r ${experiences[activeExperience].gradient} bg-opacity-20 rounded-full`}>
                                <Star size={12} className="text-yellow-400" />
                                <span className="text-xs font-semibold text-white">
                                  {achievement.impact}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <Code2 size={20} className="text-blue-400" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {experiences[activeExperience].technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className={`bg-gradient-to-r ${experiences[activeExperience].gradient} bg-opacity-20 text-white px-4 py-2 rounded-lg text-sm border border-white/20 font-medium hover:scale-105 transition-transform duration-300`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <Users size={20} className="text-green-400" />
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-3">
                        {experiences[activeExperience].responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex} className="flex items-start gap-3 text-gray-300">
                            <ChevronRight size={16} className="text-purple-400 mt-1 flex-shrink-0" />
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Progression Timeline */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                Career <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Progression</span>
              </h3>
              
              <div className="relative max-w-6xl mx-auto">
                {/* Animated Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 via-red-500 to-pink-500 rounded-full opacity-30"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-orange-500 via-red-500 to-pink-500 rounded-full animate-pulse" 
                     style={{ height: `${((activeExperience + 1) / experiences.length) * 100}%` }}></div>
                
                <div className="space-y-16">
                  {experiences.map((exp, index) => (
                    <div 
                      key={index}
                      className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-12 gap-6`}
                    >
                      {/* Timeline Node with Year Badge */}
                      <div className="flex-1 hidden lg:block"></div>
                      <div 
                        className={`relative z-10 flex flex-col items-center cursor-pointer group ${
                          activeExperience === index ? 'scale-110' : ''
                        }`}
                        onClick={() => setActiveExperience(index)}
                      >
                        {/* Year Badge */}
                        <div className={`mb-4 px-4 py-2 bg-gradient-to-r ${exp.gradient} rounded-full text-white font-bold text-sm shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                          {exp.duration.split(' - ')[0]}
                        </div>
                        
                        {/* Main Node */}
                        <div className={`p-6 bg-gradient-to-r ${exp.gradient} rounded-full shadow-2xl group-hover:scale-110 transition-all duration-300 ${
                          activeExperience === index ? 'ring-4 ring-white/30 animate-pulse' : ''
                        }`}>
                          <Building size={28} className="text-white" />
                        </div>
                        
                        {/* Connecting Lines */}
                        <div className={`absolute top-full mt-2 w-px h-8 bg-gradient-to-b ${exp.gradient} opacity-50`}></div>
                      </div>
                      
                      {/* Enhanced Experience Card */}
                      <div className="flex-1 w-full lg:max-w-md">
                        <div 
                          className={`group p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 cursor-pointer transition-all duration-500 hover:bg-white/15 hover:border-white/30 hover:shadow-2xl ${
                            activeExperience === index ? 'bg-white/20 border-white/40 transform scale-105 shadow-2xl' : ''
                          }`}
                          onClick={() => setActiveExperience(index)}
                        >
                          {/* Card Header */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <h4 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                                {exp.position}
                              </h4>
                              <div className="flex items-center gap-2 text-sm text-gray-400">
                                <Calendar size={14} />
                                <span>{exp.duration}</span>
                              </div>
                            </div>
                            <div className={`p-2 bg-gradient-to-r ${exp.gradient} rounded-lg opacity-80 group-hover:opacity-100 transition-opacity duration-300`}>
                              <Building size={20} className="text-white" />
                            </div>
                          </div>
                          
                          {/* Company Name */}
                          <h5 className={`text-lg font-bold mb-3 bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent`}>
                            {exp.company}
                          </h5>
                          
                          {/* Description */}
                          <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                            {exp.description}
                          </p>
                          
                          {/* Key Metrics */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {exp.achievements.slice(0, 2).map((achievement, achIndex) => (
                              <div key={achIndex} className={`px-3 py-1 bg-gradient-to-r ${exp.gradient} bg-opacity-20 rounded-full text-xs font-medium text-white border border-white/20`}>
                                {achievement.impact}
                              </div>
                            ))}
                          </div>
                          
                          {/* Location and Type */}
                          <div className="flex items-center justify-between text-xs text-gray-400">
                            <div className="flex items-center gap-2">
                              <MapPin size={12} />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Briefcase size={12} />
                              <span>{exp.type}</span>
                            </div>
                          </div>
                          
                          {/* Hover Indicator */}
                          <div className="mt-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                              <span>Click to view details</span>
                              <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Progress Indicators */}
                <div className="flex justify-center mt-12 space-x-4">
                  {experiences.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveExperience(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        activeExperience === index
                          ? `bg-gradient-to-r ${experiences[index].gradient} shadow-lg scale-125`
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                      title={experiences[index].company}
                    />
                  ))}
                </div>
                
                {/* Career Growth Stats */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                    <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-2">
                      Backend → Protocol
                    </div>
                    <div className="text-gray-300 text-sm">
                      Evolution from traditional backend to blockchain protocol engineering
                    </div>
                  </div>
                  
                  <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                      $0 → $100M+
                    </div>
                    <div className="text-gray-300 text-sm">
                      Growth in Total Value Locked across managed protocols
                    </div>
                  </div>
                  
                  <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                      Junior → Senior
                    </div>
                    <div className="text-gray-300 text-sm">
                      Leadership progression from individual contributor to team lead
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Evolution Timeline */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                Skills <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Evolution</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { period: "2019-2020", skills: ["Java", "Spring Boot", "PostgreSQL", "AWS"], color: "from-orange-500 to-red-500" },
                  { period: "2020-2021", skills: ["Solidity", "Web3.js", "Truffle", "IPFS"], color: "from-green-500 to-teal-500" },
                  { period: "2021-2023", skills: ["Go", "Rust", "Docker", "Kubernetes"], color: "from-blue-500 to-cyan-500" },
                  { period: "2023-Present", skills: ["Cairo", "Foundry", "Chainlink", "ZK"], color: "from-purple-500 to-pink-500" }
                ].map((era, index) => (
                  <div key={index} className="group p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300">
                    <div className={`inline-flex px-3 py-1 bg-gradient-to-r ${era.color} rounded-full text-white text-sm font-semibold mb-4`}>
                      {era.period}
                    </div>
                    <div className="space-y-2">
                      {era.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center gap-2 text-gray-300 group-hover:text-white transition-colors duration-300">
                          <div className={`w-2 h-2 bg-gradient-to-r ${era.color} rounded-full`}></div>
                          <span className="text-sm">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Milestones */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                Key <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">Milestones</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { 
                    year: "2019", 
                    title: "Entered Fintech", 
                    description: "Started career in financial technology, building secure backend systems",
                    icon: <Code2 size={24} />,
                    color: "from-orange-500 to-red-500"
                  },
                  { 
                    year: "2020", 
                    title: "Discovered Blockchain", 
                    description: "Transitioned to Web3, deployed first smart contracts",
                    icon: <Globe size={24} />,
                    color: "from-green-500 to-teal-500"
                  },
                  { 
                    year: "2021", 
                    title: "Protocol Engineering", 
                    description: "Advanced to Layer 2 solutions and consensus mechanisms",
                    icon: <Zap size={24} />,
                    color: "from-blue-500 to-cyan-500"
                  },
                  { 
                    year: "2022", 
                    title: "Security Focus", 
                    description: "Achieved zero security incidents across all deployments",
                    icon: <Shield size={24} />,
                    color: "from-purple-500 to-indigo-500"
                  },
                  { 
                    year: "2023", 
                    title: "DeFi Leadership", 
                    description: "Led teams managing $100M+ in protocol TVL",
                    icon: <TrendingUp size={24} />,
                    color: "from-pink-500 to-rose-500"
                  },
                  { 
                    year: "2024", 
                    title: "Innovation Pioneer", 
                    description: "Pioneering next-gen blockchain infrastructure solutions",
                    icon: <Star size={24} />,
                    color: "from-violet-500 to-purple-500"
                  }
                ].map((milestone, index) => (
                  <div key={index} className="group p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 hover:border-white/30 hover:scale-105 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 bg-gradient-to-r ${milestone.color} rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}>
                        {milestone.icon}
                      </div>
                      <div className={`px-3 py-1 bg-gradient-to-r ${milestone.color} bg-opacity-20 rounded-full text-white font-bold text-sm`}>
                        {milestone.year}
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                      {milestone.title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Over Time Chart */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                Impact <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Growth</span>
              </h3>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { metric: "TVL Managed", values: ["$0", "$1M", "$25M", "$100M+"], color: "from-green-400 to-emerald-400" },
                    { metric: "Team Size", values: ["1", "3", "8", "15+"], color: "from-blue-400 to-cyan-400" },
                    { metric: "Contracts Deployed", values: ["0", "5", "15", "25+"], color: "from-purple-400 to-pink-400" },
                    { metric: "Gas Optimization", values: ["0%", "20%", "60%", "95%"], color: "from-orange-400 to-red-400" }
                  ].map((metric, index) => (
                    <div key={index} className="text-center">
                      <h4 className="text-white font-semibold mb-4">{metric.metric}</h4>
                      <div className="space-y-3">
                        {metric.values.map((value, valueIndex) => (
                          <div key={valueIndex} className="relative">
                            <div className={`h-2 bg-gradient-to-r ${metric.color} rounded-full opacity-${(valueIndex + 1) * 25}`}></div>
                            <div className="text-xs text-gray-400 mt-1">{value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technology Mastery Timeline */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                Technology <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Mastery</span>
              </h3>
              
              <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { 
                      category: "Backend & Infrastructure", 
                      technologies: [
                        { name: "Java/Spring Boot", level: 95, years: "5+ years" },
                        { name: "PostgreSQL/MySQL", level: 90, years: "4+ years" },
                        { name: "AWS/Docker", level: 85, years: "3+ years" }
                      ],
                      color: "from-orange-500 to-red-500"
                    },
                    { 
                      category: "Blockchain & Smart Contracts", 
                      technologies: [
                        { name: "Solidity", level: 95, years: "4+ years" },
                        { name: "Rust", level: 90, years: "3+ years" },
                        { name: "Cairo", level: 80, years: "2+ years" }
                      ],
                      color: "from-purple-500 to-pink-500"
                    }
                  ].map((category, index) => (
                    <div key={index} className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                      <h4 className={`text-lg font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                        {category.category}
                      </h4>
                      <div className="space-y-4">
                        {category.technologies.map((tech, techIndex) => (
                          <div key={techIndex} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-white font-medium">{tech.name}</span>
                              <span className="text-gray-400 text-sm">{tech.years}</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div 
                                className={`h-2 bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                                style={{ width: `${tech.level}%` }}
                              ></div>
                            </div>
                            <div className="text-right text-xs text-gray-400">{tech.level}%</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
                            <MapPin size={12} />
                            <span>{exp.location}</span>
                            <span>•</span>
                            <span>{exp.type}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="inline-flex flex-col items-center gap-4">
                <h3 className="text-2xl font-bold text-white">
                  Ready to Build Something <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Revolutionary?</span>
                </h3>
                <p className="text-gray-300 max-w-2xl">
                  Let's discuss how my experience in blockchain development and protocol engineering 
                  can help bring your next project to life.
                </p>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-700 hover:via-red-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  <span>Let's Connect</span>
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;