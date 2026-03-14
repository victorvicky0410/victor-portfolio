import React from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiTerminal,
  FiCpu,
  FiGlobe,
  FiCode,
} from "react-icons/fi";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#050505] text-zinc-100 selection:bg-emerald-500 selection:text-black overflow-hidden flex items-center justify-center p-4"
    >
      {/* Background: Grainy Gradient & Grid */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#10b98115_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="max-w-[1400px] w-full grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10">
        {/* 01. The Identity Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-8 bg-zinc-900/20 border border-white/5 backdrop-blur-3xl rounded-[2rem] p-10 md:p-16 flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-[1px] bg-emerald-500" />
              <span className="text-emerald-500 font-mono text-xs uppercase tracking-[0.5em]">
                Software Engineer
              </span>
            </div>
            <h1 className="text-7xl md:text-[120px] font-black tracking-tighter leading-[0.8] mb-10">
              VIC<span className="text-emerald-500">TOR</span>
              <br />
              <span className="mt-4 text-xs tracking-[0.6em] text-zinc-500">
                BUILDING CLEAN • MODERN • USER-CENTRIC INTERFACES
              </span>
            </h1>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <p className="max-w-md text-zinc-500 text-lg leading-relaxed italic">
              "Turning complex logic into{" "}
              <span className="text-zinc-200">elegant digital experiences</span>
              . Specializing in the MERN ecosystem with an obsession for
              performance."
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white text-black font-black uppercase italic tracking-tighter text-xl rounded-full flex items-center gap-4 hover:bg-emerald-500 transition-colors"
            >
              Start Project <FiArrowRight size={24} />
            </motion.button>
          </div>
        </motion.div>

        {/* 02. The "Live" Status Block */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="md:col-span-4 flex flex-col gap-6"
        >
          {/* Work Experience Card */}
          <div className="bg-emerald-500 p-8 rounded-[2rem] text-black group relative overflow-hidden">
            <FiCpu className="absolute -right-4 -bottom-4 size-32 opacity-10 group-hover:rotate-12 transition-transform duration-700" />

            <p className="font-mono text-[10px] uppercase font-bold tracking-widest mb-4">
              Previous Experience
            </p>

            <h2 className="text-3xl font-black leading-none">
              SOFTYE
              <br />
              TECHNOLOGIES
            </h2>

            <div className="mt-6 flex items-center gap-2 font-bold text-sm">
              <span className="w-2 h-2 bg-black rounded-full" />
              Software Engineer • 1 Year Experience
            </div>
          </div>

          {/* Tech Stack Terminal */}
          <div className="bg-zinc-900 border border-white/5 rounded-[2rem] p-8 flex-grow font-mono overflow-hidden">
            <div className="flex gap-1.5 mb-6">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20" />
            </div>
            <div className="space-y-3 text-xs">
              <p className="text-emerald-500/50 underline tracking-widest uppercase mb-4">
                Mastered_Tools
              </p>
              <div className="flex items-center gap-3 text-zinc-300">
                <FiTerminal className="text-emerald-500" />
                <span>MongoDB_Cluster_V6.0</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-300">
                <FiCode className="text-emerald-500" />
                <span>React_19_Architecture</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-300">
                <FiGlobe className="text-emerald-500" />
                <span>Node_Edge_Runtime</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <div className="text-[10px] text-zinc-600 uppercase mb-2 italic">
                Architecture_Mindset
              </div>
              <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "85%" }}
                  transition={{ duration: 2, delay: 0.5 }}
                  className="h-full bg-emerald-500"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Extreme Floating Decorations */}
      <div className="fixed bottom-10 left-10 hidden lg:block">
        <div className="flex flex-col gap-4 text-zinc-600 font-mono text-[10px] uppercase tracking-[0.3em] [writing-mode:vertical-rl]">
          <span>India // 2026</span>
          <div className="h-20 w-[1px] bg-zinc-800 mx-auto" />
          <span>EST. 2023</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
