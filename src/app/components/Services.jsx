"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaWhatsapp, FaPhoneAlt, FaBullhorn, FaGlobe, FaMobileAlt, FaChartLine, FaUsers, FaGoogle, FaFire, FaHandshake } from 'react-icons/fa';

export default function Services() {
  const whatsappNumber = "919131460470";

  const services = [
    {
      title: "Social Media Handle",
      price: "₹1,000 / Month",
      icon: <FaUsers />,
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800",
      desc: "Insta, FB, Google Business. Daily Event Posts & Full Optimization.",
      msg: "I am interested in Social Media Handle service."
    },
    {
      title: "Google Business Fix",
      price: "SEO Boost",
      icon: <FaGoogle />,
      image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=800",
      desc: "Reviews, Photos aur Location rank karwayenge. Local customer seedha aapke pass aayega.",
      msg: "I am interested in Google Business Fix service."
    },
    {
      title: "E-Commerce / Web",
      price: "₹4,999/-",
      icon: <FaGlobe />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
      desc: "Apna online store chalu karo. Next.js se bani fast E-commerce site.",
      msg: "I am interested in E-Commerce / Web service."
    },
    {
      title: "Influencer Marketing",
      price: "Local Power",
      icon: <FaBullhorn />,
      image: "https://images.unsplash.com/photo-1557835251-cf8c711bbe75?q=80&w=800",
      desc: "Chhattisgarh ke top influencers ke saath tie-up. Brand ko raato-raat hit karo.",
      msg: "I am interested in Influencer Marketing service."
    },
    {
      title: "Facebook & Insta Ads",
      price: "Leads Badhao",
      icon: <FaChartLine />,
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=800",
      desc: "Targeted ads jo real leads layein. Sales badhao aur business ko scale karo.",
      msg: "I am interested in Facebook & Insta Ads service."
    },
    {
      title: "App with React Native",
      price: "Startup Rate",
      icon: <FaMobileAlt />,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800",
      desc: "Premium Android & iOS apps. Clean UI aur super fast performance.",
      msg: "I am interested in App with React Native service."
    }
  ];

  return (
    <section id="services" className="relative py-20 bg-[#050316] px-6 text-white">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Sleek Heading */}
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase">
                Our <span>Services</span>
            </h2>
            <div className="h-1 w-20 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Regular Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((item, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -8 }}
              className="group bg-white/[0.03] border border-white/10 rounded-[2rem] overflow-hidden flex flex-col backdrop-blur-sm transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                {/* Image is now clearer by default (opacity 0.8) */}
                <img 
                  src={item.image} 
                  className="h-full w-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500" 
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050316] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-6 p-3 bg-indigo-600 rounded-xl text-white shadow-lg">
                  {item.icon}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <span className="text-indigo-400 font-bold text-[10px] uppercase tracking-widest mb-2">{item.price}</span>
                <h4 className="text-2xl font-black text-white uppercase mb-3">{item.title}</h4>
                <p className="text-zinc-400 text-sm mb-8 flex-grow leading-relaxed">{item.desc}</p>
                
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(item.msg)}`}
                  target="_blank"
                  className="w-full py-4 bg-white text-black rounded-xl font-black uppercase text-center text-[11px] hover:bg-indigo-600 hover:text-white transition-all shadow-md active:scale-95"
                >
                  Enquiry Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Models at the Bottom */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* 1 YEAR MEGA PLAN - Highlighted FREE */}
          <div className="p-10 rounded-[2.5rem] border-2 border-indigo-500/30 bg-indigo-500/5 relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-orange-500 mb-4 font-black uppercase tracking-tighter bg-orange-500/10 w-fit px-3 py-1 rounded-lg">
                <FaFire /> <span>Hot Offer</span>
              </div>
              <h4 className="text-4xl font-black text-white uppercase mb-4">
                1 Year <span className="text-indigo-500">Mega Plan</span>
              </h4>
              <p className="text-zinc-300 text-sm mb-8 max-w-sm">
                Get high-end <span className="text-white font-bold bg-indigo-600 px-2 py-0.5 rounded ml-1">FREE</span> Website & App development when you subscribe to our yearly Social Media Bundle.
              </p>
              <Link href="/plan" className="inline-block bg-white text-black px-10 py-4 rounded-xl font-black uppercase text-[11px] hover:bg-indigo-600 hover:text-white transition-all shadow-xl">
                Claim Now
              </Link>
            </div>
            {/* Background "FREE" text for extra highlight */}
            <span className="absolute -bottom-6 -right-4 text-8xl font-black text-white/[0.04] select-none pointer-events-none italic">FREE</span>
          </div>

          {/* STARTUP EQUITY */}
          <div className="p-10 rounded-[2.5rem] border border-white/10 bg-white/[0.02] relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-emerald-500 mb-4 font-black uppercase tracking-tighter bg-emerald-500/10 w-fit px-3 py-1 rounded-lg">
                <FaHandshake /> <span>Partnership</span>
              </div>
              <h4 className="text-4xl font-black text-white uppercase mb-4">Startup Equity 5%</h4>
              <p className="text-zinc-400 text-sm mb-8">Hum aapke tech partner banenge 5% equity par. Idea aapka, coding hamari. for more details click on more talks</p>
              <a 
                href={`https://wa.me/${whatsappNumber}?text=I am interested in Startup Equity 5% partnership.`}
                target="_blank"
                className="inline-block border border-white text-white px-10 py-4 rounded-xl font-black uppercase text-[11px] hover:bg-white hover:text-black transition-all shadow-md"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}