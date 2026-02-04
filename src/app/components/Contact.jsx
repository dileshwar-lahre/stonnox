"use client";
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhoneAlt, FaInstagram, FaShieldAlt, FaHandshake, FaUserCheck } from 'react-icons/fa';

export default function Contact() {
  const whatsappNumber = "9131460470";
  const secondContact = "7999066421";

  return (
    <section id="contact" className="py-24 bg-[#050316] px-6 relative overflow-hidden border-t border-white/5">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] -z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          
          {/* Left Side: Brand Identity - Flex Grow used for alignment */}
          <div className="flex flex-col h-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-indigo-500 text-[10px] font-black uppercase tracking-[0.5em] mb-4">
                Connect // Protocol
              </h2>
              <h3 className="text-5xl md:text-7xl font-black uppercase  leading-[0.9] tracking-tighter text-white">
                TRUST US <br /> 
              </h3>
            </motion.div>
            
            {/* Features List - Spaced to match button column height */}
            <div className="flex flex-col justify-between flex-grow space-y-4 max-w-md">
              {[
                { icon: <FaShieldAlt />, title: "100% Transparency", desc: "Seedha founders se baat, no hidden charges." },
                { icon: <FaUserCheck />, title: "Direct Accountability", desc: "Sindhi Colony, Bilaspur ka apna bharosa." },
                { icon: <FaHandshake />, title: "Zero Brokerage", desc: "Direct partnership, zero middleman costs." }
              ].map((item, idx) => (
                <div key={idx} className="flex-grow flex gap-5 items-center p-6 rounded-2xl border border-white/5 bg-white/5 transition-all hover:bg-white/10">
                  <div className="text-indigo-500 text-2xl">{item.icon}</div>
                  <div>
                    <h4 className="text-white font-bold uppercase text-[11px] tracking-widest leading-none">{item.title}</h4>
                    <p className="text-zinc-500 text-[11px] mt-2 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Action Buttons - Heights matched to Left Side */}
          <div className="flex flex-col justify-between gap-4">
            
            {/* 1. WhatsApp */}
            <motion.a 
              whileHover={{ y: -3 }}
              href={`https://wa.me/${whatsappNumber}`} 
              target="_blank"
              className="flex-grow flex items-center justify-between p-8 bg-[#25D366] rounded-[2.5rem] transition-all shadow-[0_15px_30px_rgba(37,211,102,0.1)] group"
            >
              <div className="flex items-center gap-6">
                <FaWhatsapp size={45} className="text-white group-hover:rotate-12 transition-transform" />
                <div>
                  <span className="text-white font-black uppercase tracking-tight text-3xl block leading-none italic">WhatsApp</span>
                  <span className="text-white/80 text-[10px] font-black uppercase tracking-[0.2em] mt-2 block">Online Support</span>
                </div>
              </div>
              <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center text-white text-xl">→</div>
            </motion.a>

            {/* 2. Instagram */}
            <motion.a 
              whileHover={{ y: -3 }}
              href="https://instagram.com/cginfrax" 
              target="_blank"
              className="flex-grow flex items-center justify-between p-8 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-[2.5rem] transition-all shadow-[0_15px_30px_rgba(253,29,29,0.1)] group"
            >
              <div className="flex items-center gap-6">
                <FaInstagram size={45} className="text-white group-hover:scale-110 transition-transform" />
                <div>
                  <span className="text-white font-black uppercase tracking-tight text-3xl block leading-none italic">Instagram</span>
                  <span className="text-white/80 text-[10px] font-black uppercase tracking-[0.2em] mt-2 block">Follow Us</span>
                </div>
              </div>
              <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center text-white text-xl">→</div>
            </motion.a>

            {/* 3. Numbers Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href={`tel:+91${whatsappNumber}`} className="flex flex-col justify-center gap-2 p-6 bg-white/5 border border-white/10 rounded-[2.2rem] hover:border-indigo-500/50 hover:bg-white/[0.08] transition-all group min-h-[120px]">
                <FaPhoneAlt size={18} className="text-indigo-500 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="text-white font-black text-xl block tracking-tighter italic">91314 60470</span>
                  <span className="text-zinc-600 text-[9px] font-black uppercase tracking-widest mt-1 block italic">Primary Call</span>
                </div>
              </a>
              
              <a href={`tel:+91${secondContact}`} className="flex flex-col justify-center gap-2 p-6 bg-white/5 border border-white/10 rounded-[2.2rem] hover:border-indigo-500/50 hover:bg-white/[0.08] transition-all group min-h-[120px]">
                <FaPhoneAlt size={18} className="text-indigo-500 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="text-white font-black text-xl block tracking-tighter italic">79990 66421</span>
                  <span className="text-zinc-600 text-[9px] font-black uppercase tracking-widest mt-1 block italic">Support Line</span>
                </div>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}