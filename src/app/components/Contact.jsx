import { FaWhatsapp, FaPhoneAlt, FaShieldAlt, FaHandshake, FaUserCheck } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#050505] px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Trust & Branding */}
          <div>
            <h2 className="text-orange-600 text-[10px] font-black uppercase tracking-[0.5em] mb-6 underline decoration-orange-600/30 underline-offset-8">
              Start Your Journey
            </h2>
            <h3 className="text-5xl md:text-7xl font-black uppercase italic leading-[0.85] tracking-tighter text-white mb-10">
              TRUST THE <br /> <span className="text-zinc-800">LAHTRE PROCESS</span>
            </h3>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="h-12 w-12 rounded-2xl bg-zinc-900 flex items-center justify-center text-orange-600 flex-shrink-0">
                  <FaShieldAlt size={24} />
                </div>
                <div>
                  <h4 className="text-white font-black uppercase text-sm tracking-widest">100% Transparency</h4>
                  <p className="text-zinc-500 text-xs leading-relaxed mt-1 italic">Humare har deal me zero hidden charges aur direct owner se baat hoti hai.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="h-12 w-12 rounded-2xl bg-zinc-900 flex items-center justify-center text-blue-500 flex-shrink-0">
                  <FaUserCheck size={24} />
                </div>
                <div>
                  <h4 className="text-white font-black uppercase text-sm tracking-widest">Lahre Group Guarantee</h4>
                  <p className="text-zinc-500 text-xs leading-relaxed mt-1 italic">Chhattisgarh ka apna group. Hum tab tak nahi rukte jab tak aapka business digital na ho jaye.</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="h-12 w-12 rounded-2xl bg-zinc-900 flex items-center justify-center text-emerald-500 flex-shrink-0">
                  <FaHandshake size={24} />
                </div>
                <div>
                  <h4 className="text-white font-black uppercase text-sm tracking-widest">Zero Brokerage</h4>
                  <p className="text-zinc-500 text-xs leading-relaxed mt-1 italic">Room, Land, ya PG—hum seedha owner se connect karate hain. Bich me koi brokerage nahi.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Direct Contact Cards */}
          <div className="space-y-6">
            <div className="p-1 text-center bg-zinc-900/20 rounded-[3rem] border border-white/5">
              
              {/* WhatsApp Mega Button */}
              <a 
                href="https://wa.me/919131460470" 
                className="group flex flex-col items-center justify-center p-12 bg-[#25D366] rounded-[2.8rem] transition-all hover:scale-[0.98] active:scale-95"
              >
                <FaWhatsapp className="text-white text-6xl mb-4 group-hover:animate-bounce" />
                <span className="text-white font-black uppercase tracking-[0.2em] text-xl">WhatsApp Chat</span>
                <span className="text-white/80 text-[10px] font-bold uppercase mt-2">Instant Response (Available 24/7)</span>
              </a>

              {/* Call Mega Button */}
              <a 
                href="tel:+919131460470" 
                className="group flex flex-col items-center justify-center p-12 mt-4 bg-white rounded-[2.8rem] transition-all hover:scale-[0.98] active:scale-95"
              >
                <FaPhoneAlt className="text-black text-5xl mb-4 group-hover:rotate-12 transition-transform" />
                <span className="text-black font-black uppercase tracking-[0.2em] text-xl">Call Director</span>
                <span className="text-zinc-500 text-[10px] font-bold uppercase mt-2">9131460470 (Direct Office Line)</span>
              </a>
            </div>

            {/* Location Tag */}
            <div className="text-center">
              <p className="text-zinc-700 text-[9px] font-black uppercase tracking-[0.5em]">
                Operating All Over Chhattisgarh • Raipur • Bhilai • Bilaspur
              </p>
            </div>
          </div>

        </div>

        {/* Final Footer Line */}
        <div className="mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">
             © 2026 Lahre IT Solutions. All Rights Reserved.
           </p>
           <div className="flex gap-8">
              <span className="text-zinc-800 text-[10px] font-black uppercase tracking-widest italic underline decoration-orange-600/50 underline-offset-4">
                Powered by Lahre Group
              </span>
           </div>
        </div>

      </div>
    </section>
  );
}