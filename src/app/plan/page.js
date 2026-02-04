"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCheck, FaArrowLeft, FaWhatsapp, FaBolt, FaRocket, FaCrown, FaCity } from 'react-icons/fa6';

export default function PlanPage() {
  const [isYearly, setIsYearly] = useState(false);
  const whatsappNumber = "9131460470";

  const plans = [
    {
      name: "Starter Plan",
      monthly: "1,000",
      yearly: "10,000",
      icon: <FaBolt />,
      features: ["Instagram, FB & Google Setup", "10 Social Media Posts/Mo", "Online Presence Optimization"],
      yearlyBonus: "FREE 10-Page Static Website", 
      recommended: false
    },
    {
      name: "Growth Plan",
      monthly: "2,000",
      yearly: "20,000",
      icon: <FaRocket />,
      features: ["Instagram, FB & Google Setup", "20 Social Media Posts/Mo", "SEO Friendly Marketing"],
      yearlyBonus: "FREE 20-Page SEO Website", 
      recommended: false
    },
    {
      name: "Best Plan",
      monthly: "5,000",
      yearly: "50,000",
      icon: <FaCrown />,
      features: ["Instagram, FB & Google Setup", "Daily Social Media Posts", "Branding & Authority Building"],
      yearlyBonus: "FREE Premium Dynamic Website", 
      recommended: true
    },
    {
      name: "Enterprise Plan",
      monthly: "10,000",
      yearly: "1,00,000",
      icon: <FaCity />,
      features: ["Instagram, FB & Google Setup", "Complete Growth Solution", "Dedicated Account Manager"],
      yearlyBonus: "Custom Web App + Mobile App", 
      recommended: false
    }
  ];

  return (
    <main className="min-h-screen bg-[#050316] text-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Fixed Back Button Layout */}
        <div className="mb-16 flex flex-col items-center text-center">
          <Link 
            href="/" 
            className="relative z-50 inline-flex items-center gap-2 text-zinc-500 hover:text-yellow-400 transition-all mb-10 font-black uppercase text-[10px] tracking-[0.3em] bg-white/5 px-6 py-3 rounded-full border border-white/5 hover:border-yellow-400/50"
          >
            <FaArrowLeft /> Back to Home
          </Link>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-none mb-6">
            UNBEATABLE <br /> <span className="text-yellow-400 font-outline-2">OFFERS.</span>
          </h1>
          <p className="text-zinc-400 font-bold tracking-widest uppercase text-sm">Choose your weapon for digital growth</p>

          {/* Large Toggle Button */}
          <div className="mt-12 flex items-center gap-6 p-3 bg-zinc-900/50 border border-zinc-800 rounded-full scale-110 md:scale-125">
            <span className={`text-xs font-black px-4 transition-colors ${!isYearly ? 'text-yellow-400' : 'text-zinc-500'}`}>MONTHLY</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="w-20 h-10 bg-zinc-800 rounded-full relative p-1 border border-zinc-700"
            >
              <motion.div 
                animate={{ x: isYearly ? 40 : 0 }}
                className="w-8 h-8 bg-yellow-400 rounded-full shadow-[0_0_15px_rgba(250,204,21,0.5)]"
              />
            </button>
            <div className="flex flex-col items-start leading-none">
                <span className={`text-xs font-black px-4 transition-colors ${isYearly ? 'text-yellow-400' : 'text-zinc-500'}`}>YEARLY</span>
                {isYearly && <span className="text-[9px] text-emerald-400 font-black pl-4 animate-pulse">SAVE 15% OFF</span>}
            </div>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-8 rounded-[2rem] border-2 transition-all duration-300 ${
                plan.recommended 
                ? 'bg-gradient-to-b from-yellow-400/10 to-transparent border-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.1)] scale-105 z-10' 
                : 'bg-zinc-900/40 border-zinc-800 hover:border-zinc-600'
              }`}
            >
              <div className="mb-8">
                <div className={`text-3xl mb-4 ${plan.recommended ? 'text-yellow-400' : 'text-zinc-400'}`}>{plan.icon}</div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black tracking-tighter italic">₹{isYearly ? plan.yearly : plan.monthly}</span>
                  <span className="text-zinc-500 text-[10px] font-bold uppercase">/{isYearly ? 'year' : 'mo'}</span>
                </div>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <FaCheck className="text-[10px] text-yellow-400 mt-1" />
                    <span className="text-zinc-400 text-xs font-bold leading-tight">{feature}</span>
                  </div>
                ))}
                
                {isYearly && (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }} 
                    animate={{ opacity: 1, x: 0 }}
                    className="pt-4 border-t border-zinc-800 mt-4"
                  >
                    <div className="flex items-start gap-3">
                      <FaBolt className="text-[10px] text-emerald-400 mt-1" />
                      <span className="text-white text-xs font-black uppercase tracking-tight">{plan.yearlyBonus}</span>
                    </div>
                  </motion.div>
                )}
              </div>

              <a 
                href={`https://wa.me/${whatsappNumber}?text=Hi STONENOX, I want to subscribe to the ${plan.name} (${isYearly ? 'Yearly Plan' : 'Monthly Plan'})`}
                target="_blank"
                className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-[11px] text-center transition-all ${
                  plan.recommended 
                  ? 'bg-yellow-400 text-black hover:bg-yellow-300 shadow-lg shadow-yellow-400/20' 
                  : 'bg-white text-black hover:bg-zinc-200'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        {/* Custom Section */}
        <div className="mt-20 p-10 rounded-[3rem] border border-zinc-800 bg-zinc-900/20 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h4 className="text-2xl font-black uppercase italic text-yellow-400">Custom Mission?</h4>
            <p className="text-zinc-500 text-sm font-bold">Build a plan that fits your specific needs.</p>
          </div>
          <a href={`https://wa.me/${whatsappNumber}`} className="flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:scale-105 transition-transform">
            <FaWhatsapp size={20} /> Let's Discuss
          </a>
        </div>
      </div>
    </main>
  );
}