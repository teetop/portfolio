import React, { useState } from 'react';
import { Code, Database, Shield, Zap, Layers, Settings, TestTube, Globe, Server, Wrench, ExternalLink } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code size={24} />,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      borderColor: 'border-purple-200 dark:border-purple-700',
      skills: [
         { 
          name: 'Rust', 
          description: 'Systems programming language focused on safety, speed, and concurrency',
          link: 'https://www.rust-lang.org/learn'
        },
        { 
          name: 'Java', 
          description: 'Object-oriented programming language for enterprise applications and backend systems',
          link: 'https://docs.oracle.com/en/java/'
        },
        { 
          name: 'Solidity', 
          description: 'Smart contract programming language for Ethereum blockchain development',
          link: 'https://docs.soliditylang.org/'
        },
        { 
          name: 'Cairo', 
          description: 'Programming language for writing provable programs on StarkNet',
          link: 'https://www.cairo-lang.org/docs/'
        }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Layers size={24} />,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-200 dark:border-blue-700',
      skills: [
        { 
          name: 'Axum', 
          description: 'Axum is a fast, type-safe Rust web framework for building asynchronous APIs and web applications',
          link: 'https://docs.rs/axum/latest/axum/index.html'
        },
        { 
          name: 'Spring Boot', 
          description: 'Java framework for building production-ready applications with minimal configuration',
          link: 'https://spring.io/projects/spring-boot'
        },
        { 
          name: 'Hardhat', 
          description: 'Ethereum development environment for compiling, deploying, and testing smart contracts',
          link: 'https://hardhat.org/docs'
        },
        { 
          name: 'Foundry', 
          description: 'Fast, portable and modular toolkit for Ethereum application development',
          link: 'https://book.getfoundry.sh/'
        },
        { 
          name: 'Starknet Foundry', 
          description: 'Toolchain for developing and testing Cairo smart contracts on StarkNet',
          link: 'https://foundry-rs.github.io/starknet-foundry/'
        }
      ]
    },
        {
      title: 'Blockchain Technologies',
      icon: <Database size={24} />,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50 dark:bg-pink-900/20',
      borderColor: 'border-pink-200 dark:border-pink-700',
      skills: [
        {
          name: "Protocol Engineering",
          description: "Designing and implementing blockchain protocols for secure, scalable, and decentralized systems"
        },
        {
          name: "Ethereum EIPs",
          description: "Ethereum Improvement Proposals for designing and implementing blockchain standards, enhancing decentralized applications",
          link: "https://eips.ethereum.org/"
        },
        {
          name: "StarkNet SNIPs",
          description: "StarkNet Improvement Proposals for designing and implementing layer-2 blockchain standards, enhancing decentralized applications",
          link: "https://github.com/starknet-io/SNIP"
        },
        { 
          name: 'Oracles', 
          description: 'Services that provide external data to blockchain smart contracts',
          link: 'https://chain.link/education/blockchain-oracles'
        },
        { 
          name: 'Gas Optimization', 
          description: 'Techniques for reducing transaction costs and improving smart contract efficiency'
        }
      ]
    },
   {
      title: 'Software Engineering Concepts',
      icon: <Zap size={24} />,
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
      borderColor: 'border-indigo-200 dark:border-indigo-700',
      skills: [
         { 
          name: 'Zero Knowledge', 
          description: 'Cryptographic methods for proving knowledge without revealing the information itself'
        },
        { 
          name: 'Object-Oriented Programming', 
          description: 'Programming paradigm based on objects containing data and methods'
        },
        { 
          name: 'Functional Programming', 
          description: 'Programming paradigm that treats computation as evaluation of mathematical functions'
        },
        { 
          name: 'S.O.L.I.D. Principles', 
          description: 'Five design principles for writing maintainable and scalable object-oriented code'
        },
        { 
          name: 'Data Structures & Algorithms', 
          description: 'Fundamental concepts for organizing data and solving computational problems efficiently'
        },
        { 
          name: 'Design Patterns', 
          description: 'Reusable solutions to commonly occurring problems in software design'
        }
      ]
    },
    {
      title: 'Software Engineering Practices',
      icon: <Settings size={24} />,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      borderColor: 'border-orange-200 dark:border-orange-700',
      skills: [
        { 
          name: 'Agile', 
          description: 'Iterative development methodology emphasizing collaboration and adaptability',
          link: 'https://agilemanifesto.org/'
        },
        { 
          name: 'Scrum', 
          description: 'Framework for managing product development with sprints and ceremonies',
          link: 'https://scrumguides.org/'
        },
        { 
          name: 'Test-Driven Development', 
          description: 'Development approach where tests are written before the actual code'
        },
        { 
          name: 'Pair Programming', 
          description: 'Collaborative coding practice where two developers work together on the same code'
        },
        { 
          name: 'Software Development Life Cycle', 
          description: 'Systematic process for planning, creating, testing, and deploying software'
        }
      ]
    },
    
    {
      title: 'Security & Authentication',
      icon: <Shield size={24} />,
      color: 'from-violet-500 to-purple-500',
      bgColor: 'bg-violet-50 dark:bg-violet-900/20',
      borderColor: 'border-violet-200 dark:border-violet-700',
      skills: [
        { 
          name: 'Spring Security', 
          description: 'Comprehensive security framework for Java applications with authentication and authorization',
          link: 'https://spring.io/projects/spring-security'
        },
        { 
          name: 'JWT', 
          description: 'JSON Web Tokens for secure information transmission between parties',
          link: 'https://jwt.io/introduction'
        },
        { 
          name: 'OAuth 2.0', 
          description: 'Authorization framework for secure API access and third-party integrations',
          link: 'https://oauth.net/2/'
        },
        { 
          name: 'Keycloak', 
          description: 'Open-source identity and access management solution with SSO capabilities',
          link: 'https://www.keycloak.org/documentation'
        }
      ]
    },
    {
      title: 'Testing Tools & Techniques',
      icon: <TestTube size={24} />,
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50 dark:bg-emerald-900/20',
      borderColor: 'border-emerald-200 dark:border-emerald-700',
      skills: [
        { 
          name: 'JUnit', 
          description: 'Unit testing framework for Java applications with annotations and assertions',
          link: 'https://junit.org/junit5/docs/current/user-guide/'
        },
        { 
          name: 'Mockito', 
          description: 'Mocking framework for creating test doubles in Java unit tests',
          link: 'https://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/Mockito.html'
        },
        { 
          name: 'Mocha', 
          description: 'JavaScript testing framework for Node.js and browser applications',
          link: 'https://mochajs.org/'
        },
        { 
          name: 'Chai', 
          description: 'Assertion library for Node.js and browsers that pairs well with testing frameworks',
          link: 'https://www.chaijs.com/'
        },
        { 
          name: 'Fuzz Testing', 
          description: 'Automated testing technique using random or invalid inputs to find vulnerabilities'
        },
        { 
          name: 'Cheat Codes', 
          description: 'Foundry testing utilities for manipulating blockchain state during tests',
          link: 'https://book.getfoundry.sh/cheatcodes/'
        }
      ]
    },
    {
      title: 'API & Communication Protocols',
      icon: <Globe size={24} />,
      color: 'from-sky-500 to-blue-500',
      bgColor: 'bg-sky-50 dark:bg-sky-900/20',
      borderColor: 'border-sky-200 dark:border-sky-700',
      skills: [
          { 
          name: 'JSON-RPC', 
          description: 'Remote procedure call protocol encoded in JSON for client-server communication',
          link: 'https://www.jsonrpc.org/specification'
        },
        { 
          name: 'REST', 
          description: 'Architectural style for designing networked applications using HTTP methods',
          link: 'https://restfulapi.net/'
        },
        { 
          name: 'GraphQL', 
          description: 'Query language and runtime for APIs that allows clients to request specific data',
          link: 'https://graphql.org/learn/'
        },
        { 
          name: 'JSON', 
          description: 'Lightweight data interchange format that is easy for humans to read and write',
          link: 'https://www.json.org/json-en.html'
        }
      ]
    },
    {
      title: 'Data Access & Backend Technologies',
      icon: <Server size={24} />,
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50 dark:bg-amber-900/20',
      borderColor: 'border-amber-200 dark:border-amber-700',
      skills: [
        { 
          name: 'IPFS', 
          description: 'Distributed file system for storing and sharing data in a decentralized way',
          link: 'https://docs.ipfs.tech/'
        },
        { 
          name: 'MySQL', 
          description: 'Open-source relational database management system',
          link: 'https://dev.mysql.com/doc/'
        },
        { 
          name: 'PostgreSQL', 
          description: 'Advanced open-source relational database with strong standards compliance',
          link: 'https://www.postgresql.org/docs/'
        },
        { 
          name: 'MongoDB', 
          description: 'Document-oriented NoSQL database for flexible and scalable data storage',
          link: 'https://docs.mongodb.com/'
        }      
      ]
    },
     {
      title: 'Build & Development Tools',
      icon: <Wrench size={24} />,
      color: 'from-green-500 to-teal-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-200 dark:border-green-700',
      skills: [
        { 
          name: 'Maven', 
          description: 'Build automation and project management tool for Java projects',
          link: 'https://maven.apache.org/guides/'
        },
        { 
          name: 'Gradle', 
          description: 'Build automation tool with flexible dependency management and multi-language support',
          link: 'https://docs.gradle.org/'
        }
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900"
      aria-labelledby="skills-heading"
    >
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
            <h2 
              id="skills-heading"
              className="text-4xl md:text-5xl font-bold text-white mb-4 text-center"
            >
              My <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise across blockchain development, 
              software engineering, and modern development practices.
            </p>
            
            {/* Category Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {skillCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === index
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                      : 'bg-white/10 backdrop-blur-sm text-gray-300 hover:bg-white/20 border border-white/20'
                  }`}
                  aria-pressed={activeCategory === index}
                >
                  {category.icon}
                  <span className="hidden sm:inline">{category.title}</span>
                </button>
              ))}
            </div>

            {/* Active Category Display */}
            <div className="mb-12">
              <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-8 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${skillCategories[activeCategory].color} text-white`}>
                    {skillCategories[activeCategory].icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {skillCategories[activeCategory].title}
                  </h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {skillCategories[activeCategory].skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-white/20"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold text-white text-lg">
                          {skill.name}
                        </h4>
                        {skill.link && (
                          <a
                            href={skill.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-2 rounded-lg bg-gradient-to-r ${skillCategories[activeCategory].color} text-white hover:shadow-lg transition-all duration-200 transform hover:scale-110`}
                            title={`Learn more about ${skill.name}`}
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                      
                      <p className="text-gray-300 text-sm">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills Overview Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
              {skillCategories.map((category, categoryIndex) => (
                <div 
                  key={categoryIndex}
                  className={`p-4 rounded-xl text-center transition-all duration-300 cursor-pointer ${
                    activeCategory === categoryIndex
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                      : 'bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20'
                  }`}
                  onClick={() => setActiveCategory(categoryIndex)}
                >
                  <div className="mb-2 flex justify-center">
                    {category.icon}
                  </div>
                  <div className="text-xs font-medium">
                    {category.skills.length} Skills
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

export default Skills;