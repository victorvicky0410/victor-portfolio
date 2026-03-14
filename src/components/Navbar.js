import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Stack', href: '#skills' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav className="fixed w-full top-0 z-[100] p-6 pointer-events-none">
      <div className="max-w-[1600px] mx-auto flex justify-between items-start">
        
        {/* Minimalist Logo */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="pointer-events-auto"
        >
          <a href="#home" className="text-white flex flex-col group">
            <span className="text-2xl font-black tracking-[0.2em] leading-none uppercase">Victor</span>
            <div className="flex items-center gap-2 overflow-hidden h-4">
              <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest translate-y-0 group-hover:-translate-y-5 transition-transform duration-500">Full-Stack</span>
              <span className="text-[10px] font-mono text-white uppercase tracking-widest translate-y-5 group-hover:-translate-y-0 transition-transform duration-500">Portfolio '26</span>
            </div>
          </a>
        </motion.div>

        {/* Floating "Glass Card" Desktop Menu */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`hidden md:flex items-center gap-2 p-2 rounded-full border border-white/10 backdrop-blur-2xl transition-all duration-500 pointer-events-auto ${
            scrolled ? 'bg-black/60 shadow-2xl scale-100' : 'bg-white/5 scale-105'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-6 py-2 text-[11px] font-bold text-zinc-400 hover:text-white uppercase tracking-[0.15em] transition-all rounded-full hover:bg-white/10"
            >
              {link.name}
            </a>
          ))}
          <div className="w-[1px] h-4 bg-white/20 mx-2" />
          <a 
            href="#contact" 
            className="px-6 py-2 text-[11px] font-bold text-black bg-emerald-400 rounded-full uppercase tracking-[0.15em] hover:bg-white transition-colors"
          >
            Contact
          </a>
        </motion.div>

        {/* Minimal Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden pointer-events-auto flex flex-col gap-1.5 p-4 group"
        >
          <div className={`h-[2px] bg-white transition-all duration-300 ${isOpen ? 'w-8 rotate-45 translate-y-2' : 'w-8'}`} />
          <div className={`h-[2px] bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-5'}`} />
          <div className={`h-[2px] bg-white transition-all duration-300 ${isOpen ? 'w-8 -rotate-45 -translate-y-2' : 'w-8'}`} />
        </button>
      </div>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at 90% 10%)' }}
            animate={{ clipPath: 'circle(150% at 90% 10%)' }}
            exit={{ clipPath: 'circle(0% at 90% 10%)' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-zinc-950 flex flex-col p-12 justify-center md:hidden pointer-events-auto"
          >
            <div className="flex flex-col gap-6">
              <span className="text-zinc-600 font-mono text-xs uppercase tracking-[0.3em] mb-4">Navigation</span>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="text-5xl font-black text-white uppercase tracking-tighter hover:text-emerald-500 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-20 pt-10 border-t border-white/10 flex justify-between items-center"
            >
              <div className="text-zinc-500 font-mono text-[10px] uppercase">Based in India</div>
              <div className="flex gap-4">
                <span className="text-white font-mono text-[10px] uppercase">LI</span>
                <span className="text-white font-mono text-[10px] uppercase">GH</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;