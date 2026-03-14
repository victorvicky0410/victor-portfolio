import React from "react";
import { motion } from "framer-motion";
import { FiArrowDownRight, FiTerminal, FiChevronRight } from "react-icons/fi";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-black text-[#e4e4e7] py-32 overflow-hidden selection:bg-emerald-500 selection:text-black"
    >
      {/* Background: Subtle Scanned Line Effect */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%]" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Top Meta-Data Bar */}
        <div className="flex justify-between items-center mb-24 border-b border-white/10 pb-4">
          <div className="flex gap-8 items-center">
            <span className="text-emerald-500 font-mono text-[10px] uppercase tracking-[0.4em]">
              Section_02
            </span>
            <span className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.4em]">
              Year: 2026
            </span>
          </div>
          <div className="hidden md:block">
            <span className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.4em]">
              Available_For_Hire
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Giant Vertical Text */}
          <div className="lg:col-span-4 flex flex-col justify-between py-2">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8]"
            >
              The <br /> <span className="text-emerald-500">Dev.</span>
            </motion.h2>

            <div className="mt-20 space-y-2">
              <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                Stack.Version
              </p>
              <div className="flex gap-3 text-zinc-300 font-bold uppercase text-xs tracking-widest">
                <span>SOFTWARE ENGINEER</span>
                <span className="opacity-40">•</span>
                <span>MERN STACK</span>
              </div>
            </div>
          </div>

          {/* Right: The Content Engine */}
          <div className="lg:col-span-8 space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-10"
            >
              <h3 className="text-3xl md:text-5xl font-light leading-tight tracking-tight">
                Engineering{" "}
                <span className="text-emerald-500 font-bold">high-integrity</span>{" "}
                digital products. I focus on the intersection of architecture
                and performance.
              </h3>

              <div className="h-[2px] w-24 bg-emerald-500" />

              <div className="grid md:grid-cols-2 gap-12 text-zinc-400 text-lg font-light leading-relaxed">
                <p>
                  As a Full Stack Developer with 1 year of industrial experience
                  at <span className="text-white">Softye Technologies</span>,
                  I’ve mastered the art of transforming complex business logic
                  into scalable MERN applications.
                </p>
                <p>
                  My objective is simple: to be an indispensable asset by
                  delivering pixel-perfect UI and rock-solid backend systems. No
                  fluff, just high-quality, maintainable code.
                </p>
              </div>
            </motion.div>

            {/* Feature Bento-Lite Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  label: "Location",
                  value: "Tamil Nadu, IN",
                  icon: <FiArrowDownRight />,
                },
                {
                  label: "Experience",
                  value: "12+ Months",
                  icon: <FiTerminal />,
                },
                {
                  label: "Commitment",
                  value: "Code Excellence",
                  icon: <FiChevronRight />,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 0.98 }}
                  className="bg-zinc-900/40 border border-white/5 p-8 rounded-xl group hover:border-emerald-500/30 transition-all"
                >
                  <div className="text-emerald-500 mb-4">{item.icon}</div>
                  <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm font-bold text-white uppercase">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
