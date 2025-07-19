import React from 'react';
import { ExternalLink, Github, Play, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [activeProject, setActiveProject] = React.useState(0);

  const projects = [
    {
      title: 'DeFi Yield Aggregator',
      description: 'A sophisticated yield farming protocol that automatically optimizes returns across multiple DeFi platforms. Features include automated rebalancing, gas optimization, and risk assessment.',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Solidity', 'React', 'Web3.js', 'Chainlink', 'IPFS'],
      github: '#',
      live: '#'
    },
    {
      title: 'Layer 2 Scaling Solution',
      description: 'A custom Layer 2 solution built on Ethereum using optimistic rollups. Reduces transaction costs by 95% while maintaining security and decentralization.',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Rust', 'Go', 'Solidity', 'Node.js', 'Docker'],
      github: '#',
      live: '#'
    },
    {
      title: 'Cross-Chain Bridge Protocol',
      description: 'A secure cross-chain bridge enabling seamless asset transfers between Ethereum, Polygon, and Binance Smart Chain with minimal fees and maximum security.',
      image: 'https://images.pexels.com/photos/159711/network-cable-ethernet-computer-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Solidity', 'TypeScript', 'Hardhat', 'OpenZeppelin', 'Merkle Trees'],
      github: '#',
      live: '#'
    },
    {
      title: 'NFT Marketplace & Launchpad',
      description: 'A comprehensive NFT platform with minting, trading, and staking capabilities. Features include royalty distribution, batch operations, and gas-optimized contracts.',
      image: 'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Solidity', 'Next.js', 'IPFS', 'The Graph', 'MetaMask'],
      github: '#',
      live: '#'
    }
  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 lg:mb-12 text-center">
              Featured <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            
            {/* Active Project Display */}
            <div className="mb-8 lg:mb-12 px-4 sm:px-0">
              <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl lg:rounded-3xl overflow-hidden transition-all duration-500 shadow-2xl">
                <div className="grid lg:grid-cols-2 gap-0 min-h-[400px] lg:min-h-[500px]">
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-64 sm:h-80 lg:h-auto">
                    <img 
                      src={projects[activeProject].image} 
                      alt={projects[activeProject].title}
                      className="w-full h-full object-cover transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                      <div className="flex space-x-3 sm:space-x-4">
                        <a 
                          href={projects[activeProject].github} 
                          className="group bg-gray-800/80 backdrop-blur-sm p-2 sm:p-3 rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
                          title="View Source Code"
                        >
                          <Github size={16} className="text-white group-hover:text-gray-300 sm:w-5 sm:h-5" />
                        </a>
                        <a 
                          href={projects[activeProject].live} 
                          className="group bg-gradient-to-r from-green-500 to-teal-500 p-2 sm:p-3 rounded-full hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-110"
                          title="View Live Demo"
                        >
                          <ExternalLink size={16} className="text-white sm:w-5 sm:h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Details */}
                  <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-4 lg:mb-6">
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 lg:mb-4">
                        {projects[activeProject].title}
                      </h3>
                      <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 lg:mb-6">
                        {projects[activeProject].description}
                      </p>
                    </div>
                    
                    <div className="mb-6 lg:mb-8">
                      <h4 className="text-white font-semibold mb-2 lg:mb-3 text-sm lg:text-base">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2 lg:gap-3">
                        {projects[activeProject].technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-gradient-to-r from-green-500/20 to-teal-500/20 text-green-300 px-2 sm:px-3 py-1 sm:py-2 rounded-md lg:rounded-lg text-xs sm:text-sm border border-green-500/30 font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <a 
                        href={projects[activeProject].github} 
                        className="flex items-center justify-center sm:justify-start gap-2 text-gray-300 hover:text-white transition-colors duration-300 font-medium text-sm lg:text-base"
                      >
                        <Github size={16} className="lg:w-[18px] lg:h-[18px]" />
                        View Code
                      </a>
                      <a 
                        href={projects[activeProject].live} 
                        className="flex items-center justify-center sm:justify-start gap-2 text-green-400 hover:text-green-300 transition-colors duration-300 font-medium text-sm lg:text-base"
                      >
                        <Play size={16} className="lg:w-[18px] lg:h-[18px]" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
              <button
                onClick={prevProject}
                className="group bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-full border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-110"
                title="Previous Project"
              >
                <ChevronLeft size={20} className="text-gray-300 group-hover:text-white transition-colors duration-300 sm:w-6 sm:h-6" />
              </button>
              
              <div className="text-center">
                
              
              </div>
              
              <button
                onClick={nextProject}
                className="group bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-full border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-110"
                title="Next Project"
              >
                <ChevronRight size={20} className="text-gray-300 group-hover:text-white transition-colors duration-300 sm:w-6 sm:h-6" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;