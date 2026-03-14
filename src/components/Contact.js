import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:vickyvictor1888@gmail.com?subject=${encodeURIComponent(formData.subject || 'Project Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="relative py-24 bg-[#050505] text-white font-sans overflow-hidden">
      
      {/* Texture Layer: The "Mesh" Pattern */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(#10b981 0.5px, transparent 0.5px)`, 
          backgroundSize: '24px 24px' 
        }} 
      />
      
      {/* Depth Layer: Subtle Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-12">
          <div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
              Let's <span className="text-zinc-800 italic">Connect.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Info */}
          <div className="lg:col-span-5 space-y-12">
            <p className="text-zinc-500 text-lg leading-relaxed font-medium">
              Ready to turn your vision into <span className="text-white font-bold tracking-tight">high-performance code.</span> Let's discuss your next project.
            </p>

            <div className="space-y-10">
              <div className="group">
                <p className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest mb-2">Direct_Channel</p>
                <a href="mailto:vickyvictor1888@gmail.com" className="text-xl md:text-2xl font-bold hover:text-emerald-500 transition-colors border-b border-zinc-900 pb-2 block w-fit">
                  vickyvictor1888@gmail.com
                </a>
              </div>
              
              <div className="group">
                <p className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest mb-4">Neural_Links</p>
                <div className="flex gap-4">
                  {[
                    { icon: <FaGithub />, url: "https://github.com/victorvicky0410", label: "Github" },
                    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/victor-r-9893a32a2/", label: "LinkedIn" }
                  ].map((social, i) => (
                    <a 
                      key={i} 
                      href={social.url} 
                      target="_blank" 
                      className="w-12 h-12 bg-zinc-900/50 border border-white/5 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all rounded-xl"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="lg:col-span-7 bg-[#0a0a0a]/80 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden">
             {/* Subtle Decorative Background Text */}
             <div className="absolute top-[-20px] right-[-10px] text-9xl font-black text-white/[0.02] italic pointer-events-none select-none">
                MSG
             </div>

            <form onSubmit={handleSubmit} className="relative z-10 space-y-10">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="group relative">
                  <input 
                    type="text" name="name" required value={formData.name} onChange={handleChange}
                    className="w-full bg-transparent border-b border-zinc-800 py-3 focus:outline-none focus:border-emerald-500 transition-all peer text-sm uppercase tracking-widest font-bold"
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-3 text-zinc-600 font-mono text-[10px] uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-emerald-500 peer-[:not(:placeholder-shown)]:-top-4">Identity</label>
                </div>

                <div className="group relative">
                  <input 
                    type="email" name="email" required value={formData.email} onChange={handleChange}
                    className="w-full bg-transparent border-b border-zinc-800 py-3 focus:outline-none focus:border-emerald-500 transition-all peer text-sm uppercase tracking-widest font-bold"
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-3 text-zinc-600 font-mono text-[10px] uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-emerald-500 peer-[:not(:placeholder-shown)]:-top-4">Address</label>
                </div>
              </div>

              <div className="group relative pt-4">
                <textarea 
                  name="message" required rows="4" value={formData.message} onChange={handleChange}
                  className="w-full bg-transparent border-b border-zinc-800 py-3 focus:outline-none focus:border-emerald-500 transition-all peer text-sm uppercase tracking-widest font-bold resize-none"
                  placeholder=" "
                />
                <label className="absolute left-0 top-7 text-zinc-600 font-mono text-[10px] uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-emerald-500 peer-[:not(:placeholder-shown)]:-top-4">Message_Payload</label>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-5 bg-emerald-500 text-black font-black uppercase text-[10px] tracking-[0.4em] rounded-2xl hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] transition-all duration-500 flex items-center justify-center gap-4"
              >
                Send_Message <FaPaperPlane />
              </motion.button>
            </form>
          </div>
        </div>

        {/* Footer Link */}
        <div className="mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center opacity-30 font-mono text-[9px] uppercase tracking-[0.5em]">
          <span>© Victor_R //  Software Engineer</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;