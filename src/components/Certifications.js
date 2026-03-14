import React from "react";
import { motion } from "framer-motion";
import { FaCertificate, FaTrophy, FaUsers } from "react-icons/fa";

const Certifications = () => {
  const certifications = [
    {
      id: "01",
      title: "Full Stack Development",
      provider: "Besant Technologies",
      date: "2023 — 2024",
      desc: "MERN Stack / Python / Django Mastery",
      icon: <FaCertificate />,
    },
  ];

  const achievements = [
    { title: "Cyber Security Workshop", event: "National Level", type: "LOG_02", icon: <FaUsers /> },
    { title: "Microsoft Learnathon", event: "Series Events", type: "LOG_03", icon: <FaTrophy /> },
    { title: "National Level Quiz", event: "Competition", type: "LOG_04", icon: <FaTrophy /> },
  ];

  return (
    <section id="certifications" className="py-40 bg-zinc-950 text-white font-sans overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 relative">
        
        {/* Massive Vertical Background Text - No Pattern Needed */}
        <div className="absolute top-0 right-0 h-full flex items-center overflow-hidden pointer-events-none select-none">
          <span className="text-[25vw] font-black text-white/[0.02] uppercase tracking-tighter vertical-text leading-none translate-x-20">
            ACHIEVEMENTS
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start relative z-10">
          
          {/* Left Side: Large Header */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <span className="font-mono text-emerald-500 text-xs tracking-[0.8em] uppercase block">
                // System.Archive
              </span>
              <h2 className="text-7xl md:text-[9rem] font-black uppercase tracking-tighter leading-[0.75]">
                Certs <br /> <span className="text-zinc-800 italic">& Wins.</span>
              </h2>
              <div className="pt-10 flex items-center gap-6">
                 <div className="w-20 h-[2px] bg-emerald-500" />
                 <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest leading-loose">
                   Credential_Registry_v2.0 <br />
                   Integrity: Verified_By_Victor
                 </p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Content Flow */}
          <div className="lg:col-span-7 space-y-32">
            
            {/* Major Certification */}
            {certifications.map((cert, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="group relative"
              >
                <span className="text-9xl font-black text-zinc-900 absolute -top-16 -left-10 group-hover:text-emerald-500/10 transition-colors duration-700">
                  {cert.id}
                </span>
                <div className="relative z-10 border-b border-zinc-900 pb-12">
                  <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter group-hover:italic transition-all duration-500">
                    {cert.title}
                  </h3>
                  <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-2 font-mono text-xs text-emerald-500 uppercase tracking-widest font-bold">
                    <span>{cert.provider}</span>
                    <span className="text-zinc-800 hidden md:block">/</span>
                    <span className="text-zinc-500">{cert.date}</span>
                  </div>
                  <p className="mt-6 text-zinc-600 group-hover:text-zinc-300 transition-colors uppercase text-sm font-bold tracking-tight max-w-lg">
                    {cert.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Achievement Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
              {achievements.map((ach, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col group"
                >
                  <div className="flex justify-between items-end mb-4 border-b border-zinc-900 pb-4">
                    <span className="font-mono text-emerald-500 text-[10px] font-bold">{ach.type}</span>
                    <div className="text-2xl text-zinc-800 group-hover:text-emerald-500 transition-colors">
                      {ach.icon}
                    </div>
                  </div>
                  <h4 className="text-2xl font-black uppercase tracking-tight group-hover:text-zinc-200">
                    {ach.title}
                  </h4>
                  <p className="font-mono text-[9px] text-zinc-700 uppercase tracking-[0.3em] mt-2 group-hover:text-zinc-500">
                    {ach.event}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </section>
  );
};

export default Certifications;