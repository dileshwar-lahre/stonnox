export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center bg-[#050505] px-6 pt-20 overflow-hidden">
      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left/Main Column: Heading */}
          <div className="lg:col-span-8 text-center lg:text-left">
            <div className="mb-8 inline-block">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-orange-600 border-b border-orange-600/30 pb-2">
                Lahre IT Solutions x Lahre Group
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-black leading-[0.9] tracking-[-0.04em] uppercase text-white">
              CRAFTING <br />
              <span className="text-zinc-800 italic">DIGITAL</span> POWER
            </h1>
          </div>

          {/* Right Column: Description & Action (Desktop Only Layout) */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start gap-10">
            <p className="max-w-xs text-zinc-500 text-[11px] md:text-xs font-bold uppercase tracking-widest leading-relaxed lg:border-l lg:border-zinc-800 lg:pl-8 text-center lg:text-left">
              Disrupting the market with fixed-price IT and transparent infrastructure. Managed by the Lahre leadership.
            </p>

            <div className="flex gap-4">
              <a href="https://wa.me/919131460470" className="h-24 w-24 rounded-full bg-white text-black flex items-center justify-center text-[9px] font-black uppercase tracking-tighter hover:bg-orange-600 hover:text-white transition-all duration-500 shadow-xl shadow-white/5">
                WhatsApp
              </a>
              <a href="tel:+919131460470" className="h-24 w-24 rounded-full border border-zinc-800 text-white flex items-center justify-center text-[9px] font-black uppercase tracking-tighter hover:border-white transition-all duration-500">
                Call Us
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-20 lg:mt-32 flex items-center justify-between border-t border-white/5 pt-8">
           <div className="hidden lg:flex gap-10">
              {['Web Dev', 'App Dev', 'Marketing'].map((item) => (
                <span key={item} className="text-[8px] font-black uppercase tracking-[0.4em] text-zinc-700">{item}</span>
              ))}
           </div>
           <div className="h-[1px] flex-grow mx-10 bg-gradient-to-r from-transparent via-zinc-900 to-transparent hidden lg:block"></div>
           <p className="text-[8px] font-black uppercase tracking-[0.4em] text-zinc-700">Chhattisgarh • 2026</p>
        </div>
      </div>
    </section>
  );
}