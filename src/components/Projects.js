import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      id: "01",
      title: "Simple Website",
      category: "Frontend_Architecture",
      description: "A clean and responsive application hub focusing on detailed information presentation and user flow.",
      tech: ["HTML5", "CSS3", "JS"],
      github: "#",
      live: "#",
    },
    {
      id: "02",
      title: "Analog Clock",
      category: "DOM_Manipulation",
      description: "Real-time dynamic clock system featuring smooth hand animations and high-precision synchronization.",
      tech: ["JS", "Animation", "DOM"],
      github: "#",
      live: "#",
    },
    {
      id: "03",
      title: "Portfolio Hub",
      category: "Portfolio_v1",
      description: "Personal digital showcase featuring interactive project modules and professional skill mapping.",
      tech: ["React", "Tailwind", "Framer"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section 
      id="projects" 
      className="relative py-32 text-white overflow-hidden font-sans"
      style={{
        backgroundColor: "#0a0a0a",
        backgroundImage: `linear-gradient(to right, #141414 1px, transparent 1px), linear-gradient(to bottom, #141414 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}
    >
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 text-emerald-500 font-mono text-xs tracking-[0.5em] uppercase mb-4"
            >
              <span className="w-12 h-[2px] bg-emerald-500" />
              Project_Manifest
            </motion.div>
            <h2 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.75]">
              Core <br /> <span className="text-zinc-800/50 italic">Modules.</span>
            </h2>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-[#0f0f0f] border border-zinc-800 p-8 h-[550px] flex flex-col justify-between hover:border-emerald-500/50 transition-all duration-500 shadow-2xl"
            >
              {/* Animated Corner Border */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-zinc-800 group-hover:border-emerald-500 transition-colors" />
              
              <div className="relative">
                <div className="flex justify-between items-start mb-12">
                   <span className="text-6xl font-black text-zinc-900 group-hover:text-emerald-500/10 transition-colors italic leading-none">
                    {project.id}
                  </span>
                  <div className="flex gap-4">
                    <a href={project.github} className="text-zinc-600 hover:text-emerald-500 transition-colors">
                      <FaGithub size={20} />
                    </a>
                    <a href={project.live} className="text-zinc-600 hover:text-emerald-500 transition-colors">
                      <FaExternalLinkAlt size={18} />
                    </a>
                  </div>
                </div>

                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.3em] block mb-2">
                  // {project.category}
                </span>
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 group-hover:italic transition-all">
                  {project.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed border-l border-zinc-800 pl-4">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 pt-8 border-t border-zinc-900">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="font-mono text-[9px] px-2 py-1 bg-zinc-900 text-emerald-500/50 uppercase tracking-widest">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;