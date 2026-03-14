import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaTerminal, FaCode } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050505] text-white pt-40 pb-12 font-sans overflow-hidden">
      
      {/* 1. Ultra Modern Background Wave & Glow */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[200%] h-[120px] animate-[wave_20s_linear_infinite] opacity-30">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
          className="fill-emerald-500/20"></path>
        </svg>
      </div>

      {/* Floating Particles (CSS Animation) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-1 h-1 bg-emerald-500 rounded-full animate-ping opacity-20" />
        <div className="absolute top-40 right-1/3 w-2 h-2 bg-cyan-500 rounded-full animate-bounce opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* 2. Main Hero Section of Footer */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-24 gap-12">
          <div className="text-center lg:text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black mb-6 tracking-tighter"
            >
              Let’s build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-200 to-cyan-400">
                the future.
              </span>
            </motion.h2>
            <p className="text-zinc-500 text-lg max-w-md mx-auto lg:mx-0">
              Available for freelance opportunities and full-stack collaborations.
            </p>
          </div>

          {/* Social Floating Icons Card */}
          <div className="flex gap-4">
            {[
              { icon: <FaGithub />, link: "https://github.com/victorvicky0410", color: "hover:bg-[#24292e]" },
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/victor-r-9893a32a2/", color: "hover:bg-[#0077b5]" },
              { icon: <FaEnvelope />, link: "mailto:vickyvictor1888@gmail.com", color: "hover:bg-emerald-600" }
            ].map((social, i) => (
              <motion.a 
                key={i}
                whileHover={{ y: -10, scale: 1.1 }}
                href={social.link}
                className={`w-16 h-16 rounded-2xl border border-white/10 flex items-center justify-center text-2xl transition-all duration-300 backdrop-blur-md bg-white/5 ${social.color}`}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* 3. The Detailed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-white/5">
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-bold flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-black">
                <FaCode size={16} />
              </div>
              Victor R<span className="text-emerald-500">.</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Transforming complex problems into elegant, efficient digital solutions using the MERN stack.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-[11px] font-black text-zinc-600 uppercase tracking-widest">Expertise</p>
            <ul className="space-y-2 text-zinc-400 text-sm">
              <li className="flex items-center gap-2 hover:text-emerald-400 cursor-default"><FaTerminal size={12} /> Frontend Mastery</li>
              <li className="flex items-center gap-2 hover:text-emerald-400 cursor-default"><FaTerminal size={12} /> Backend Systems</li>
              <li className="flex items-center gap-2 hover:text-emerald-400 cursor-default"><FaTerminal size={12} /> UI/UX Animation</li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-[11px] font-black text-zinc-600 uppercase tracking-widest">Quick Links</p>
            <ul className="space-y-2 text-zinc-400 text-sm">
              <li><a href="#projects" className="hover:underline decoration-emerald-500 underline-offset-4 transition-all">My Work</a></li>
              <li><a href="#skills" className="hover:underline decoration-emerald-500 underline-offset-4 transition-all">Tech Stack</a></li>
              <li><a href="#contact" className="hover:underline decoration-emerald-500 underline-offset-4 transition-all">Get in Touch</a></li>
            </ul>
          </div>

          <div className="space-y-4 text-right">
             <button 
                onClick={scrollToTop}
                className="inline-flex flex-col items-center group gap-2"
              >
                <div className="w-12 h-12 rounded-full border border-emerald-500/30 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-black transition-all duration-500">
                  <FaArrowUp />
                </div>
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-tighter">Back to Top</span>
             </button>
          </div>
        </div>

        {/* 4. Bottom Legal Footer */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-zinc-600 font-bold uppercase tracking-widest gap-4">
          <p>© {currentYear} Victor R — Namakkal, IN</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;