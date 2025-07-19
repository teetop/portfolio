import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Get the name input value
    const name = formData.get('name');
    
    // Create a custom subject
    const subject = `${name} sent a message from website`;
    
    // Append the custom subject to the form data
    formData.append('subject', subject);
    
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    formData.append("access_key", "44694e66-ff15-4f3d-8974-534bf2371885");
    
    setResult("Please wait...");

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
    .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
            setResult(json.message);
        } else {
            console.log(response);
            setResult(json.message);
        }
    })
    .catch(error => {
        console.log(error);
        setResult("Something went wrong!");
    })
    .then(function() {
        form.reset();
        setTimeout(() => {
            setResult("");
        }, 3000);
    });
  };


  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'o.michaeldean@gmail.com',
      link: 'mailto:o.michaeldean@gmail.com'
    },
    {
      icon: <Phone size={20} />,
      label: 'Phone',
      value: '+234 809 572 9090',
      link: 'https://api.whatsapp.com/send/?phone=%2B2348095729090&text&type=phone_number&app_absent=0'
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: 'Global / Remote',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      link: 'https://github.com/intelliDean',
      color: 'from-gray-600 to-gray-800'
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/michaeldean8ix/',
      color: 'from-blue-600 to-blue-800'
    },
    {
      icon: <Twitter size={20} />,
      label: 'Twitter',
      link: 'https://x.com/Dean8IX',
      color: 'from-sky-500 to-blue-600'
    }
  ];

  return (
    <section id="contact" className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
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
        <div className="max-w-6xl mx-auto px-4 sm:px-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 lg:mb-12 text-center">
            Get In <span className="bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 lg:mb-6">Let's Build the Future</h3>
              <p className="text-gray-300 mb-6 lg:mb-8 text-sm sm:text-base leading-relaxed">
                I'm always excited to discuss blockchain projects, protocol design, and Web3 innovations. 
                Whether you're looking to build a DeFi protocol, need smart contract auditing, or want to 
                explore decentralized solutions, let's connect!
              </p>
              
              <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors group text-sm sm:text-base"
                  >
                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-2 rounded-lg group-hover:from-purple-500 group-hover:to-pink-500 group-hover:text-white transition-all flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-400">{info.label}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className={`bg-gradient-to-r ${social.color} p-2.5 sm:p-3 rounded-lg text-white hover:shadow-lg transition-all transform hover:scale-110`}
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={onSubmit} className="space-y-4 lg:space-y-6">
                <input type="hidden" name="access_key" value="44694e66-ff15-4f3d-8974-534bf2371885" />
                <input type="hidden" name="access_key" value="44694e66-ff15-4f3d-8974-534bf2371885" />
                <div className="grid sm:grid-cols-2 gap-3 lg:gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5 lg:mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 py-2.5 lg:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors text-sm sm:text-base"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5 lg:mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2.5 lg:py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors text-sm sm:text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={result === "Please wait..."}
                  className={`w-full font-medium py-3 lg:py-4 px-6 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg text-sm sm:text-base ${
                    result === "Please wait..." 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transform hover:scale-105'
                  }`}
                >
                    result === "Please wait..." 
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Sending...
                    </>
                  {result === "Sending...." ? (
                    <>
                  disabled={result === "Please wait..."}
                      Send Message
                    </>
                  )}
                </button>
                
                {/* Status Messages */}
                {result === "Form Submitted Successfully" && (
                  <div className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 text-center">
                    ✅ Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                {result && result !== "Sending...." && result !== "Form Submitted Successfully" && (
                  <div className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 text-center">
                    ❌ {result}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;