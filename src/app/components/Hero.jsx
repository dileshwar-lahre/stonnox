"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "/images/hero1.png",
    text1: "CREATIVE",
    text2: "AGENCY",
  },
  {
    id: 2,
    image: "/images/hero2.png",
    text1: "DIGITAL",
    text2: "STUDIO",
  },
  {
    id: 3,
    image: "/images/hero3.png",
    text1: "MODERN",
    text2: "DESIGN",
  },
  {
    id: 4,
    image: "/images/hero4.png",
    text1: "BRAND",
    text2: "IDENTITY",
  },
  {
    id: 5,
    image: "/images/hero5.png",
    text1: "FUTURE",
    text2: "VISION",
  },
];

// Osty Style Curtain Animation
const slideVariants = {
  initial: { clipPath: "inset(100% 0 0 0)", scale: 1.1 },
  animate: { 
    clipPath: "inset(0% 0 0 0)", 
    scale: 1,
    transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } 
  },
  exit: { 
    clipPath: "inset(0 0 100% 0)", 
    scale: 0.95,
    transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } 
  }
};

const textVariants = {
  initial: { y: "120%", opacity: 0, rotate: 5 },
  animate: { 
    y: 0, 
    opacity: 1, 
    rotate: 0,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } 
  },
  exit: { 
    y: "-120%", 
    opacity: 0, 
    rotate: -5,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
  }
};

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play (optional, remove if you only want manual clicks like original Osty)
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section 
      className="relative w-full h-screen bg-[#0f0f0f] overflow-hidden flex items-center justify-center font-sans"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. Background Images (Curtain Reveal) */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0 w-full h-full z-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].text1}
            className="w-full h-full object-cover opacity-80"
          />
          {/* Subtle vignette/dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* 2. Massive Centered Typography (The Osty Signature) */}
      <div className="relative z-10 flex flex-col items-center justify-center pointer-events-none w-full px-4 text-center">
        {/* Top Word - Solid & Mix Blend */}
        <div className="overflow-hidden mix-blend-difference text-white">
          <AnimatePresence mode="wait">
            <motion.h1
              key={`text1-${current}`}
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-[12vw] md:text-[8vw] lg:text-[10vw] font-black uppercase leading-[0.8] tracking-tighter"
            >
              {slides[current].text1}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Bottom Word - Outlined (Stroke) Text */}
        <div className="overflow-hidden mt-2">
          <AnimatePresence mode="wait">
            <motion.h2
              key={`text2-${current}`}
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-[12vw] md:text-[8vw] lg:text-[10vw] font-black uppercase leading-[0.8] tracking-tighter text-transparent"
              style={{ WebkitTextStroke: "2px rgba(255, 255, 255, 0.9)" }}
            >
              {slides[current].text2}
            </motion.h2>
          </AnimatePresence>
        </div>
      </div>

      {/* 3. Invisible Click Zones (Left half = Prev, Right half = Next) */}
      <div className="absolute inset-0 z-20 flex cursor-none">
        <div 
          onClick={prevSlide} 
          className="w-1/2 h-full cursor-[url('/cursor-prev.svg'),_pointer]" 
          title="Previous Slide"
        />
        <div 
          onClick={nextSlide} 
          className="w-1/2 h-full cursor-[url('/cursor-next.svg'),_pointer]" 
          title="Next Slide"
        />
      </div>

      {/* 4. Osty Minimalist Side Elements */}
      
      {/* Left Social Links (Rotated) */}
      <div className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 -rotate-90 origin-center z-30 hidden md:flex items-center gap-8 text-[11px] font-bold tracking-[0.3em] uppercase text-white">
        <a href="#" className="hover:text-emerald-400 transition-colors">Instagram</a>
        <a href="#" className="hover:text-emerald-400 transition-colors">Twitter</a>
        <a href="#" className="hover:text-emerald-400 transition-colors">Behance</a>
      </div>

      {/* Right Pagination (Rotated) */}
      <div className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 rotate-90 origin-center z-30 hidden md:flex items-center gap-4 text-[11px] font-bold tracking-[0.3em] text-white">
        <AnimatePresence mode="wait">
          <motion.span
            key={current}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            0{current + 1}
          </motion.span>
        </AnimatePresence>
        <div className="w-12 h-[1px] bg-white/40" />
        <span className="text-white/40">0{slides.length}</span>
      </div>

      {/* 5. Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 overflow-hidden relative">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
            animate={{ top: ["-50%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* Mobile Pagination (Visible only on small screens) */}
      <div className="absolute bottom-8 right-6 z-30 md:hidden flex items-center gap-2 text-xs font-bold text-white tracking-widest">
        <span>0{current + 1}</span> / <span className="text-white/50">0{slides.length}</span>
      </div>

    </section>
  );
}