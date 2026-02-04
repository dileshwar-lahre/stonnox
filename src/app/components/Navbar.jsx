"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['home', 'services', 'about', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -300 && rect.top <= 300) setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const desktopLinks = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" }
  ];

  const mobileLinks = [
    { name: "Home", id: "home", type: "scroll" },
    { name: "Services", id: "services", type: "scroll" },
    { name: "About", id: "about", type: "scroll" },
    { name: "Plan", id: "plan", type: "link", path: "/plan" },
    { name: "Contact", id: "contact", type: "scroll" }
  ];

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
    setIsOpen(false);
  };

  return (
    <>
      <div className="fixed w-full top-0 md:top-6 z-[100] px-0 md:px-8">
        <motion.nav 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "circOut" }}
          className={`mx-auto max-w-7xl flex items-center justify-between px-6 md:px-12 transition-all duration-500 md:rounded-[2.5rem] border-b md:border border-white/10 ${
            scrolled ? 'bg-black/80 backdrop-blur-2xl py-3 shadow-lg' : 'bg-transparent py-6'
          }`}
        >
          {/* LOGO IMAGE */}
          <div className="flex items-center cursor-pointer group" onClick={(e) => handleScrollTo(e, 'home')}>
            <img 
              src="/images/logo.png" 
              alt="StoneNox Logo" 
              className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </div>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden md:flex items-center gap-10">
            {desktopLinks.map((link) => (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                onClick={(e) => handleScrollTo(e, link.id)}
                className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all relative py-2 group ${
                  activeSection === link.id ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
                <motion.span 
                  className="absolute bottom-0 left-0 h-[2px] bg-indigo-500"
                  initial={false}
                  animate={{ width: activeSection === link.id ? '100%' : '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            ))}
          </div>

          {/* RIGHT SIDE ACTIONS */}
          <div className="flex items-center gap-4">
            <button 
              onClick={(e) => handleScrollTo(e, 'contact')}
              className="hidden md:flex group relative px-8 py-3 font-black text-white bg-indigo-600 rounded-full overflow-hidden transition-all shadow-lg text-[10px] uppercase tracking-widest"
            >
              Get Started <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* MOBILE MENU BUTTON */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-3xl z-[150] md:hidden flex flex-col items-center justify-center"
          >
            <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-white">
              <X size={32} />
            </button>

            {/* Logo in Mobile Menu too */}
            <img src="/images/logo.png" alt="Logo" className="h-16 w-auto mb-12 opacity-50" />

            <div className="flex flex-col gap-6 text-center">
              {mobileLinks.map((link, i) => (
                <motion.div key={link.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                  {link.type === "scroll" ? (
                    <button 
                      onClick={(e) => handleScrollTo(e, link.id)}
                      className={`text-4xl font-black uppercase tracking-tighter ${activeSection === link.id ? 'text-indigo-500' : 'text-white'}`}
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link 
                      href={link.path} onClick={() => setIsOpen(false)}
                      className="text-4xl font-black uppercase tracking-tighter text-indigo-400"
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}