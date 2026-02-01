"use client";
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll karne par navbar ka background thoda dark ho jayega
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#About" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-black/95 py-4 backdrop-blur-xl border-b border-orange-600/20' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Operator Info */}
          <div className="flex flex-col">
            <h1 className="text-white text-2xl md:text-3xl font-black italic tracking-tighter uppercase leading-none">
              Lahre<span className="text-orange-600 italic">IT</span>
            </h1>
            <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mt-1">
              Operated by <span className="text-zinc-400">Lahre Group</span>
            </span>
          </div>

          {/* Desktop Menu - Bada Text aur Spacing */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-12">
              {links.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-xs font-black uppercase tracking-[0.4em] text-zinc-400 hover:text-orange-600 transition-all relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-orange-600 transition-all group-hover:w-full"></span>
                </a>
              ))}
              <a href="tel:+919131460470" className="bg-orange-600 text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-orange-700 transition-all shadow-[0_0_20px_rgba(234,88,12,0.3)]">
                Get Started
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none p-2">
              <div className="w-8 h-6 flex flex-col justify-between items-end">
                <span className={`h-[3px] bg-orange-600 transition-all duration-300 ${isOpen ? 'w-8 rotate-45 translate-y-[10px]' : 'w-8'}`}></span>
                <span className={`h-[3px] bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-6'}`}></span>
                <span className={`h-[3px] bg-orange-600 transition-all duration-300 ${isOpen ? 'w-8 -rotate-45 -translate-y-[11px]' : 'w-4'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full-Screen Overlay Menu */}
      <div className={`fixed inset-0 bg-black z-[-1] flex flex-col items-center justify-center transition-all duration-500 md:hidden ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="flex flex-col items-center space-y-8">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              className="text-4xl font-black italic text-zinc-500 hover:text-orange-600 uppercase tracking-tighter"
            >
              {link.name}
            </a>
          ))}
          <div className="mt-10 flex flex-col items-center gap-4">
            <a href="tel:+919131460470" className="text-white font-bold text-lg">9131460470</a>
            <div className="h-1 w-10 bg-orange-600"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}