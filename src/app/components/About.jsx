export default function Services() {
  return (
    <section id="services" className="py-32 bg-[#050505] px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-10 text-zinc-800">
            OUR <br /> SERVICES
          </h2>
          <p className="text-zinc-500 max-w-sm font-medium italic">
            "Hum Chhattisgarh ke har startup ko digital banana chahte hain, bhale hi unka budget kam ho."
          </p>
        </div>

        <div className="space-y-6">
          <div className="p-10 bg-white group hover:bg-orange-600 transition-all duration-700">
            <div className="flex justify-between items-start mb-10 text-black group-hover:text-white">
              <h3 className="text-4xl font-black uppercase italic tracking-tighter leading-none">The ₹1000 <br /> Monthly</h3>
              <span className="text-xs font-black uppercase tracking-widest">Active Plan</span>
            </div>
            <p className="text-zinc-400 group-hover:text-white/80 text-xs font-bold uppercase tracking-widest">Social Media • SMO • Events • Graphics</p>
          </div>

          <div className="p-10 border border-zinc-800 group hover:border-white transition-all duration-700">
            <div className="flex justify-between items-start mb-10">
              <h3 className="text-4xl font-black uppercase italic tracking-tighter leading-none">Startup <br /> Founder Model</h3>
              <span className="text-xs font-black uppercase tracking-widest text-orange-600">Free Tech</span>
            </div>
            <p className="text-zinc-600 group-hover:text-zinc-300 text-xs font-bold uppercase tracking-widest italic">Equity based App/Web development for new founders.</p>
          </div>
        </div>
      </div>
    </section>
  );
}