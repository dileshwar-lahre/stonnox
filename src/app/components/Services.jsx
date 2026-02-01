import { FaWhatsapp, FaPhoneAlt, FaBullhorn, FaGlobe, FaMobileAlt, FaChartLine, FaUsers, FaGoogle } from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      title: "Social Media Handle",
      price: "₹1,000 / Month",
      icon: <FaUsers className="text-blue-400" />,
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800",
      desc: "Insta, FB, Google Business. Daily Event Posts & Full Optimization. Ek saal ke plan par Web & App FREE!",
    },
    {
      title: "Google Business Fix",
      price: "SEO Boost",
      icon: <FaGoogle className="text-white" />,
      image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=800",
      desc: "Reviews, Photos aur Location rank karwayenge. Local customer seedha aapke pass aayega.",
    },
    {
      title: "E-Commerce / Web",
      price: "₹4,999/-",
      icon: <FaGlobe className="text-blue-300" />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
      desc: "Apna online store chalu karo. Next.js se bani fast E-commerce site sabse kam daam mein.",
    },
    {
      title: "Influencer Marketing",
      price: "Local Power",
      icon: <FaBullhorn className="text-zinc-400" />,
      image: "https://images.unsplash.com/photo-1557835251-cf8c711bbe75?q=80&w=800",
      desc: "Chhattisgarh ke top influencers ke saath tie-up. Brand ko raato-raat hit karo.",
    },
    {
      title: "Facebook & Insta Ads",
      price: "Leads Badhao",
      icon: <FaChartLine className="text-blue-500" />,
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=800",
      desc: "Targeted ads jo real leads layein. Sales badhao aur business ko scale karo.",
    },
    {
      title: "App with React Native",
      price: "Startup Rate",
      icon: <FaMobileAlt className="text-zinc-100" />,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800",
      desc: "Premium Android & iOS apps. Clean UI aur super fast performance ki guarantee.",
    }
  ];

  return (
    <section id="services" className="py-12 bg-[#050505] px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header hata diya hai, ab seedha grid start ho raha hai */}

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((item, i) => (
            <div key={i} className="group relative overflow-hidden rounded-[2.5rem] bg-zinc-900/30 border border-white/5 transition-all duration-500 hover:border-blue-500/50">
              <div className="relative h-56 overflow-hidden">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0" />
                <div className="absolute top-6 right-6 flex gap-3">
                  <a href="https://wa.me/919131460470" className="h-10 w-10 bg-black/60 backdrop-blur-xl rounded-full flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all"><FaWhatsapp size={18} /></a>
                  <a href="tel:+919131460470" className="h-10 w-10 bg-black/60 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-all"><FaPhoneAlt size={16} /></a>
                </div>
                <div className="absolute bottom-6 left-8 text-3xl group-hover:scale-110 transition-transform">{item.icon}</div>
              </div>

              <div className="p-10">
                <span className="text-blue-500 font-black text-[10px] uppercase tracking-widest italic">{item.price}</span>
                <h4 className="text-2xl font-black text-white uppercase italic mt-3 mb-4 leading-tight">{item.title}</h4>
                <p className="text-zinc-500 text-xs leading-relaxed mb-8 font-medium">{item.desc}</p>
                <div className="h-[1px] w-full bg-zinc-800 mb-6 group-hover:bg-blue-500/50 transition-colors"></div>
                <a href="https://wa.me/919131460470" className="text-zinc-400 text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors">Enquire Now —</a>
              </div>
            </div>
          ))}
        </div>

        {/* Game-Changer Models */}
        <div className="grid lg:grid-cols-2 gap-10">
          
          <div className="relative p-12 rounded-[3rem] bg-zinc-100 group overflow-hidden border border-white/10">
            <div className="relative z-10">
              <h4 className="text-5xl font-black text-black uppercase italic leading-[0.9] mb-8">1 YEAR <br /> MEGA PLAN</h4>
              <p className="text-zinc-700 text-xs font-bold uppercase tracking-widest leading-loose mb-12 max-w-sm">
                Social Media bundle lene par <span className="text-blue-600 font-black underline decoration-black underline-offset-4">APP aur WEBSITE FREE</span>. 
                <span className="block mt-4 opacity-40 italic text-[10px]">*Domain & Hosting extra.</span>
              </p>
              <a href="https://wa.me/919131460470" className="inline-block bg-black text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 transition-all">Claim Free Tech</a>
            </div>
            <span className="absolute -bottom-10 -right-5 text-[12rem] font-black text-black/5 uppercase italic pointer-events-none">FREE</span>
          </div>

          <div className="p-12 border border-zinc-800 bg-zinc-900/20 backdrop-blur-md rounded-[3rem] relative overflow-hidden group border-white/5">
            <h4 className="text-5xl font-black text-white uppercase italic leading-[0.9] mb-8">STARTUP <br /> EQUITY <span className="text-blue-500">5%</span></h4>
            <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest leading-loose mb-12 max-w-sm">
              Paise ki chinta chhodo. Hum aapke tech partner banenge 5% equity par. Idea aapka, coding hamari.
            </p>
            <a href="https://wa.me/919131460470" className="inline-block border-2 border-zinc-800 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:border-blue-500 transition-all">Pitch Your Idea</a>
          </div>

        </div>
      </div>
    </section>
  );
}