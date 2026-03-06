'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, X, RefreshCcw } from 'lucide-react';

export default function UpgradePopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 5 seconds par set hai test karne ke liye. (Live me 30000 kardena)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000); 

    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-md"
        >
          {/* Fast & Smooth Spring Animation */}
          <motion.div
            initial={{ scale: 0.8, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0, transition: { duration: 0.2 } }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="relative w-full max-w-md bg-[#09090b] border border-blue-500/20 rounded-[2rem] p-8 shadow-[0_20px_80px_rgba(37,99,235,0.2)] overflow-hidden"
          >
            {/* Background Tech Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] pointer-events-none"></div>

            {/* Header: Icon & Close Button */}
            <div className="flex justify-between items-start mb-6 relative z-10">
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                  <Rocket size={28} strokeWidth={1.5} />
                </div>
                {/* Chota spinning update icon */}
                <div className="absolute -bottom-2 -right-2 bg-[#09090b] p-1 rounded-full">
                   <div className="bg-emerald-500/20 text-emerald-400 p-1 rounded-full animate-[spin_3s_linear_infinite]">
                     <RefreshCcw size={14} strokeWidth={3} />
                   </div>
                </div>
              </div>
              
              <button
                onClick={() => setIsVisible(false)}
                className="p-2 bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white rounded-full transition-colors"
              >
                <X size={20} strokeWidth={2} />
              </button>
            </div>

            {/* Content Area */}
            <div className="relative z-10 mb-8">
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest rounded-full mb-4"
              >
                Maintenance Mode
              </motion.span>
              
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-3 leading-tight">
                Huge Update <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  Is Incoming!
                </span>
              </h3>
              
              <p className="text-zinc-400 text-sm font-medium leading-relaxed">
                We are currently pushing some major upgrades behind the scenes to make <strong className="text-white">Stonenox</strong> even faster and better for you. You might see some minor design changes happening live!
              </p>
            </div>

            {/* Action Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="relative z-10 w-full py-4 bg-white hover:bg-zinc-200 text-black rounded-xl font-black uppercase tracking-widest text-xs transition-colors"
            >
              Got it, Thanks!
            </button>
            
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}