import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      id: "01",
      company: "Softye Technologies",
      position: "Software Engineer",
      duration: "2025 // 2026",
      tasks: [
        "Architecting full-stack systems",
        "Animated interface engineering",
        "Performance & SEO scaling",
        "Database logic optimization"
      ],
      tag: "CORE_DEVELOPER"
    }
  ];

  return (
    <section id="experience" className="py-32 bg-black text-white overflow-hidden font-sans">
      <div className="max-w-[1600px] mx-auto px-6">
        
        {/* Section Header - Industrial Style */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-32 border-b border-zinc-900 pb-10">
          <div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-emerald-500 font-mono text-xs tracking-[0.8em] uppercase mb-6"
            >
               Archive
            </motion.p>
            <h2 className="text-[10vw] font-black uppercase tracking-tighter leading-[0.7] m-0">
              Work <br /> <span className="text-zinc-800 italic">History.</span>
            </h2>
          </div>
        </div>

        {/* The Experience Block */}
        {experiences.map((exp, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="group relative flex flex-col md:flex-row gap-10 md:gap-20 py-20 border-b border-zinc-900 hover:bg-zinc-900/10 transition-all duration-700"
          >
            {/* 1. Large Index + Vertical Label */}
            <div className="flex flex-row md:flex-col justify-between items-start">
              <span className="text-8xl font-black text-zinc-900 group-hover:text-emerald-500/20 transition-colors duration-500 leading-none">
                {exp.id}
              </span>
              <span className="font-mono text-[10px] text-zinc-700 uppercase tracking-[1em] [writing-mode:vertical-lr] hidden md:block group-hover:text-emerald-500 transition-colors">
                {exp.tag}
              </span>
            </div>

            {/* 2. Main Title & Company */}
            <div className="flex-1">
              <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 leading-none">
                {exp.company}
              </h3>
              <p className="text-emerald-500 font-mono text-lg uppercase tracking-widest mb-10">
                {exp.position}
              </p>
              
              {/* Task Grid - Using 2-column layout for "raw" look */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {exp.tasks.map((task, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-zinc-500 group-hover:text-zinc-200 transition-colors">
                    <span className="text-emerald-500 font-bold">/</span>
                    <span className="text-sm uppercase font-bold tracking-tight">{task}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Duration Card (Bento Style Sidebar) */}
            <div className="md:w-64 flex flex-col justify-end">
              <div className="p-6 border border-zinc-900 rounded-3xl group-hover:border-emerald-500/30 transition-all duration-500">
                <p className="font-mono text-[10px] text-zinc-600 uppercase mb-4">Deployment_Period</p>
                <p className="text-3xl font-black italic tracking-tighter text-zinc-400 group-hover:text-white transition-colors">
                  {exp.duration}
                </p>
                <div className="w-full h-[2px] bg-zinc-900 mt-4 group-hover:bg-emerald-500 transition-all duration-700" />
              </div>
            </div>
          </motion.div>
        ))}

        {/* Metadata Footer to match your Skills section */}
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center opacity-20 font-mono text-[10px] uppercase tracking-[0.5em]">
          <span>Integrity: 0x99281-Verified</span>
          <div className="h-[1px] flex-1 mx-8 bg-zinc-900 hidden md:block" />
          <span>India // MERN // 2026</span>
        </div>
      </div>
    </section>
  );
};

export default Experience;