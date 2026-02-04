"use client";
import { motion } from 'framer-motion';
import { FaCode, FaBullhorn, FaMobileAlt, FaRocket } from 'react-icons/fa';

export default function About() {
  const skills = [
    { icon: <FaCode />, title: "Web Development", desc: "Next.js aur React se bani fast aur SEO friendly websites." },
    { icon: <FaBullhorn />, title: "Digital Marketing", desc: "Startups ke liye result-oriented ads aur social strategy." },
    { icon: <FaMobileAlt />, title: "App Solutions", desc: "Android aur iOS platforms ke liye high-performance apps." }
  ];

  return (
    <section id="about" className="relative py-24 bg-[#050316] px-6 overflow-hidden text-white border-t border-white/5">
      
      {/* Background Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] -z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* LEFT SIDE: Core Branding & Identity */}
          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-400">Hamari Mission</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[1.1] mb-8">
                OPERATED BY <br />
                <span>LAHRE BROTHERS</span>
              </h2>

              <p className="text-zinc-400 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                Chhattisgarh ke startups ko high-end tech aur design se empower karna hi hamara maqsad hai. Hum sirf service nahi, growth partners hain.
              </p>
            </motion.div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
                <h4 className="text-3xl font-black text-white leading-none">100%</h4>
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-2">Transparency</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
                <h4 className="text-3xl font-black text-white leading-none">Local</h4>
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-2">Bilaspur Roots</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Services Breakdown (Systematic Grid) */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-4">
              {skills.map((skill, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex gap-6 p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-indigo-500/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 text-2xl shrink-0 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="text-white font-black uppercase text-xs tracking-widest mb-2">{skill.title}</h4>
                    <p className="text-zinc-500 text-sm leading-snug">{skill.desc}</p>
                  </div>
                </motion.div>
              ))}
              
              {/* Final CTA Strip */}
              <div className="p-6 rounded-[2rem] bg-gradient-to-r from-indigo-600/20 to-transparent border border-indigo-500/20 mt-8">
                <div className="flex items-center gap-4">
                  <FaRocket className="text-indigo-400" />
                  <span className="text-zinc-200 text-xs font-bold uppercase tracking-widest">Bridging the digital gap since 2026</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}