"use client";
import { motion } from 'framer-motion';
import { FaCheckCircle, FaBolt, FaRocket, FaCrown, FaGem } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Link from 'next/link';

// Swiper CSS
import 'swiper/css';
import 'swiper/css/pagination';

const plans = [
  {
    name: "Starter",
    price: "10,000",
    monthly: "1,000",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500&auto=format&fit=crop",
    features: ["10 Custom Posts / Month", "FB, IG & GMB Management", "Static Website (10 Pages)", "Basic SMO & SEO", "Comments & Inquiry Reply", "WhatsApp Lead System", "Google Maps Optimization"],
    icon: <FaBolt />,
    btn: "Start Basic"
  },
  {
    name: "Growth",
    price: "20,000",
    monthly: "2,000",
    image: "https://images.unsplash.com/photo-1551288049-bbbda5366392?q=80&w=500&auto=format&fit=crop",
    features: ["20 Custom Posts / Month", "Dynamic Website (20 Pages)", "Full Social Media Handling", "Advanced SMO & SEO", "Engagement Management", "Meta Ads Management", "Monthly Analytics Report"],
    icon: <FaRocket />,
    btn: "Scale Now"
  },
  {
    name: "Business",
    price: "50,000",
    monthly: "5,000",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=500&auto=format&fit=crop",
    features: ["30 Custom Posts / Month", "Dynamic Web + Admin Panel", "Premium SEO & SMO Strategy", "Lead Generation Focus", "Full Account Management", "Content Writing Service", "Competitor Analysis"],
    icon: <FaCrown />,
    btn: "Get Professional"
  },
  {
    name: "Enterprise",
    price: "1,00,000",
    monthly: "10,000",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=500&auto=format&fit=crop",
    features: ["Everything in Business Plan", "Custom Android/iOS App", "Full Website Development", "1 Year Free Maintenance", "Total Digital Branding", "PR & Influencer Collab", "Weekly Strategy Calls"],
    icon: <FaGem />,
    btn: "Dominate Market"
  }
];

export default function Hero() {
  return (
    // Navbar fix: lg:pt-44 for Desktop, pt-28 for Mobile
    <section id="home" className="relative min-h-screen flex flex-col items-center bg-[#050316] pt-28 lg:pt-44 pb-20 px-6 overflow-hidden">
      
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center">
        
        {/* --- PART 1: MAIN HERO CONTENT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full mb-24 lg:mb-40">
          
          {/* IMAGE - Desktop Right */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center items-center order-1 lg:order-2"
          >
            <img 
                src="/images/brain.png" 
                alt="Digital Marketing Intelligence" 
                className="relative w-full max-w-[450px] md:max-w-[500px] lg:max-w-[650px] h-auto z-10 object-contain"
              />
          </motion.div>

          {/* TEXT CONTENT - Desktop Left */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-[1000] tracking-tighter text-white leading-[0.9] mb-6 uppercase">
              DIGITAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-indigo-500/50">
                MARKETING
              </span>
            </h1>

            <p className="text-zinc-400 text-base md:text-lg font-medium leading-relaxed max-w-md">
              Elevate your brand with <span className="text-white font-bold">Data-Driven SEO</span>. We turn your <span className="text-indigo-400 font-bold">Digital Presence</span> into a growth engine.
            </p>
          </motion.div>
        </div>

        {/* --- PART 2: PLAN CARDS (Grid on Desktop, Swipe on Mobile) --- */}
        <div className="w-full relative z-20">
          {/* Mobile Swiper (1.1 cards visible) */}
          <div className="lg:hidden">
            <Swiper modules={[Pagination]} spaceBetween={20} slidesPerView={1.1} centeredSlides={true} pagination={{ clickable: true }} className="pb-16 !overflow-visible">
              {plans.map((plan, i) => (
                <SwiperSlide key={i}><PlanCard plan={plan} /></SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Desktop Static Grid (No Swipe) */}
          <div className="hidden lg:grid grid-cols-4 gap-6">
            {plans.map((plan, i) => (
              <PlanCard key={i} plan={plan} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PlanCard({ plan }) {
  return (
    <motion.div whileHover={{ y: -12 }} className="relative rounded-[2rem] bg-white/[0.03] border border-white/10 overflow-hidden h-full flex flex-col backdrop-blur-md">
      {/* 50% Image Section */}
      <div className="h-52 w-full relative">
        <img src={plan.image} className="w-full h-full object-cover opacity-60" alt={plan.name} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050316] via-transparent to-transparent" />
        {/* Monthly Badge */}
        <div className="absolute top-4 right-4 bg-indigo-600/30 backdrop-blur-md border border-indigo-500/30 px-3 py-1 rounded-full text-[10px] font-black text-white">
          ₹{plan.monthly}/MO
        </div>
      </div>

      <div className="p-6 pt-4 flex flex-col flex-grow">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-indigo-600 rounded-lg text-white text-lg">{plan.icon}</div>
          <h3 className="text-[13px] font-black uppercase tracking-widest text-white">{plan.name}</h3>
        </div>

        <div className="flex items-baseline gap-1 mb-6">
          <span className="text-4xl font-[1000] text-white tracking-tighter">₹{plan.price}</span>
          <span className="text-zinc-500 font-bold text-[10px] uppercase">/Yearly</span>
        </div>

        {/* Details List */}
        <div className="space-y-3 mb-8 flex-grow">
          {plan.features.slice(0, 4).map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <FaCheckCircle className="text-[11px] mt-1 text-indigo-500 shrink-0" />
              <span className="text-[12px] font-medium text-zinc-400 leading-tight">{feature}</span>
            </div>
          ))}
          <Link href="/plan" className="inline-block text-[11px] font-bold text-indigo-400 hover:text-white transition-colors">
             + See all features
          </Link>
        </div>

        <div className="mt-auto flex flex-col gap-3">
          <Link href="/plan" className="w-full">
            <button className="w-full py-4 rounded-xl font-black uppercase tracking-widest text-[11px] bg-white text-black hover:bg-indigo-600 hover:text-white transition-all shadow-xl">
              {plan.btn}
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}