import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";

const Skills = () => {
  const technicalSkills = [
    { name: "React.js", icon: <FaReact />, level: "90%", category: "Frontend" },
    { name: "Node.js", icon: <FaNodeJs />, level: "85%", category: "Backend" },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      level: "90%",
      category: "Frontend",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      level: "80%",
      category: "Database",
    },

    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
      level: "95%",
    },
    {
      name: "Express.js",
      icon: <SiExpress />,
      level: "85%",
      category: "Backend",
    },
  ];

  const tools = [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "VS Code", icon: <FaCode /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
  ];

  const softSkills = [
    "Analytical Thinking",
    "Teamwork",
    "Adaptability",
    "Leadership",
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-black text-white overflow-hidden font-sans"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 text-emerald-500 font-mono text-xs tracking-[0.5em] uppercase mb-4"
          >
            <span className="w-12 h-[1px] bg-emerald-500" />
           
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8] mb-4">
            Tech <br /> <span className="text-zinc-800 italic">Stack.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Skills Grid - 2x2 Layout */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {technicalSkills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group relative bg-zinc-900/10 border border-white/5 p-8 rounded-3xl hover:border-emerald-500/50 transition-all duration-500 overflow-hidden"
              >
                <div className="flex justify-between items-start relative z-10">
                  <div>
                    <span className="text-4xl text-zinc-700 group-hover:text-emerald-500 transition-colors duration-500">
                      {skill.icon}
                    </span>
                    <h4 className="mt-6 font-black text-xl tracking-tight uppercase leading-none">
                      {skill.name}
                    </h4>
                    <p className="mt-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                      {skill.category}
                    </p>
                  </div>
                  <span className="text-zinc-800 font-mono text-2xl group-hover:text-emerald-500/20 transition-colors">
                    {skill.level}
                  </span>
                </div>

                {/* Visual Progress Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-zinc-900/50">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="h-full bg-emerald-500 shadow-[0_0_10px_#10b981]"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sidebar Bento Cards */}
          <div className="lg:col-span-4 space-y-6">
            {/* Workflow Tools Card */}
            <div className="bg-zinc-900/20 border border-white/5 rounded-[2.5rem] p-10">
              <h3 className="text-emerald-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-10">
                Environments
              </h3>
              <div className="grid grid-cols-2 gap-10">
                {tools.map((tool, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-3 group"
                  >
                    <span className="text-3xl text-zinc-700 group-hover:text-white transition-all duration-300">
                      {tool.icon}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills Card */}
            <div className="bg-emerald-500 rounded-[2.5rem] p-10 text-black relative overflow-hidden h-[300px] flex flex-col justify-between">
              <h3 className="font-black text-3xl uppercase tracking-tighter mb-8 leading-none italic">
                Human <br /> Interface
              </h3>
              <div className="space-y-3 relative z-10">
                {softSkills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 font-bold text-sm uppercase tracking-tighter border-b border-black/10 pb-1"
                  >
                    <div className="w-1.5 h-1.5 bg-black rounded-full" />
                    {skill}
                  </div>
                ))}
              </div>
              <div className="absolute -right-6 -bottom-6 text-black/10 font-black text-8xl italic select-none pointer-events-none">
                SOFT
              </div>
            </div>
          </div>
        </div>

        {/* System Metadata */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-20">
          <div className="text-[10px] font-mono uppercase tracking-[0.5em]">
            Integrity: Verified
          </div>
          <div className="text-[10px] font-mono uppercase tracking-[0.5em]">
            MERN Stack // Python // 2026
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
