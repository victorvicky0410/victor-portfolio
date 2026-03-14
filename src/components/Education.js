import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  const education = [
    {
      id: "ED_01",
      title: "Full Stack Development",
      org: "Besant Technologies",
      period: "2023 — 2024",
      tags: ["Python", "Django", "MERN"],
      status: "Certified"
    },
    {
      id: "ED_02",
      title: "BCA Undergraduate",
      org: "Mahendra Arts & Science",
      period: "2020 — 2023",
      tags: ["CS", "Software Eng"],
      status: "Degree"
    },
    {
      id: "ED_03",
      title: "Higher Secondary",
      org: "Mahadeva Vidhyalayam",
      period: "2019 — 2020",
      tags: ["Math", "CS"],
      status: "Archive"
    }
  ];

  return (
    <section id="education" className="py-24 bg-black text-white font-sans selection:bg-emerald-500 selection:text-black">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Compact Header */}
        <div className="flex items-end justify-between mb-16 border-b border-zinc-900 pb-8">
          <div>
            <div className="flex items-center gap-3 text-emerald-500 font-mono text-[10px] tracking-[0.5em] uppercase mb-2">
              <div className="w-2 h-2 bg-emerald-500 animate-pulse" />
              Academic_Registry
            </div>
            <h2 className="text-4xl font-black uppercase tracking-tighter">
              Education <span className="text-zinc-700 italic">History.</span>
            </h2>
          </div>
          <div className="text-right font-mono text-[9px] text-zinc-600 uppercase tracking-widest hidden md:block">
            Verified_Log // 2026 <br />
            Auth: Victor_R
          </div>
        </div>

        {/* The Compact List */}
        <div className="divide-y divide-zinc-900">
          {education.map((edu, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="group py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:bg-zinc-900/10 transition-colors"
            >
              {/* Left Side: ID & Period */}
              <div className="flex items-center gap-8 min-w-[150px]">
                <span className="font-mono text-[10px] text-zinc-800 group-hover:text-emerald-500 transition-colors font-bold">
                  {edu.id}
                </span>
                <span className="font-mono text-xs text-zinc-500 uppercase tracking-tight">
                  {edu.period}
                </span>
              </div>

              {/* Center: Main Info */}
              <div className="flex-1">
                <h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-emerald-500 transition-colors">
                  {edu.title}
                </h3>
                <p className="text-zinc-600 text-sm uppercase tracking-widest mt-1 font-medium">
                  {edu.org}
                </p>
              </div>

              {/* Right Side: Tags & Status */}
              <div className="flex items-center gap-4">
                <div className="hidden lg:flex gap-2">
                  {edu.tags.map((tag, idx) => (
                    <span key={idx} className="text-[9px] font-mono border border-zinc-800 px-2 py-0.5 text-zinc-700 uppercase group-hover:border-emerald-500/30 group-hover:text-emerald-500 transition-all">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="bg-zinc-900 px-4 py-2 rounded-full border border-zinc-800 group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all duration-500">
                  <span className="font-mono text-[9px] text-zinc-500 group-hover:text-black uppercase font-bold tracking-widest">
                    {edu.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;