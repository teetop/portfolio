import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'DeFi Protocol Labs',
      position: 'Senior Blockchain Engineer',
      duration: '2023 - Present',
      location: 'Remote',
      description: 'Leading the development of next-generation DeFi protocols with focus on yield optimization and cross-chain interoperability. Architected smart contracts handling over $100M TVL.',
      achievements: [
        'Designed and deployed yield aggregation protocol with 40% higher APY',
        'Reduced gas costs by 60% through contract optimization techniques',
        'Led security audits and implemented multi-sig governance systems'
      ],
      technologies: ['Solidity', 'Rust', 'Hardhat', 'Chainlink', 'OpenZeppelin'],
      website: '#'
    },
    {
      company: 'Blockchain Infrastructure Co',
      position: 'Protocol Engineer',
      duration: '2021 - 2023',
      location: 'San Francisco, CA',
      description: 'Developed Layer 2 scaling solutions and consensus mechanisms. Built infrastructure supporting 10,000+ TPS with sub-second finality.',
      achievements: [
        'Implemented optimistic rollup solution reducing costs by 95%',
        'Built custom consensus algorithm improving network efficiency',
        'Mentored junior developers and established security best practices'
      ],
      technologies: ['Go', 'Rust', 'Solidity', 'Docker', 'Kubernetes'],
      website: '#'
    },
    {
      company: 'Web3 Startup',
      position: 'Smart Contract Developer',
      duration: '2020 - 2021',
      location: 'New York, NY',
      description: 'Focused on building secure, gas-optimized smart contracts for various DeFi applications including DEXs, lending protocols, and NFT marketplaces.',
      achievements: [
        'Deployed 25+ audited smart contracts with zero security incidents',
        'Optimized contract gas usage by average of 35%',
        'Integrated with major DeFi protocols and oracles'
      ],
      technologies: ['Solidity', 'Web3.js', 'Truffle', 'OpenZeppelin', 'IPFS'],
      website: '#'
    }
  ];

  return (
    <section id="experience" className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Work <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:border-purple-400 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-white">{exp.position}</h3>
                      {exp.website && (
                        <a href={exp.website} className="text-purple-400 hover:text-purple-300 transition-colors">
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                    <h4 className="text-lg font-medium mb-2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        {exp.company}
                      </span>
                    </h4>
                  </div>
                  <div className="text-gray-400 text-sm space-y-1">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{exp.description}</p>
                
                <div className="mb-4">
                  <h5 className="text-white font-medium mb-2">Key Achievements:</h5>
                  <ul className="text-gray-300 space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 px-2 py-1 rounded text-sm border border-blue-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;