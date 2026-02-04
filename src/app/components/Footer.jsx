"use client";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#050316] border-t border-zinc-800 py-20 px-6 relative overflow-hidden">
      
      {/* Subtle Dark Glow for Depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,rgba(79,70,229,0.05)_0%,transparent_50%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-16 items-start pb-16">
          
          {/* 1. Branding Section - Path fixed based on your folder structure */}
          <div className="space-y-6 text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              {/* Aapke folder structure ke hisaab se path /images/logo.png hai */}
              <img src="/images/logo.png" alt="Stonenox Logo" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-zinc-400 text-base font-semibold max-w-sm mx-auto md:mx-0 leading-relaxed">
              Chhattisgarh ke startups ko modern digital power dene wale <span className="text-white font-bold">Lahre Brothers</span>. Creativity aur Tech ka sahi mix.
            </p>
          </div>

          {/* 2. Contact & Socials */}
          <div className="flex flex-col items-center space-y-8">
            <div className="flex gap-5">
              {[
                { icon: <FaInstagram size={22} />, link: "https://instagram.com/stone_nox" },
                { icon: <FaFacebookF size={22} />, link: "#" },
                { icon: <FaLinkedinIn size={22} />, link: "#" },
                { icon: <FaTwitter size={22} />, link: "#" }
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.link} 
                  className="h-14 w-14 rounded-2xl bg-zinc-900 flex items-center justify-center text-zinc-400 border border-zinc-800 hover:border-indigo-500 hover:text-white hover:bg-indigo-600/20 transition-all duration-300 shadow-xl"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="text-center space-y-2">
              <p className="text-sm font-black text-indigo-400 uppercase tracking-[0.2em]">Contact Us</p>
              <a href="mailto:supportstonenox@gmail.com" className="text-lg font-bold text-white hover:text-indigo-400 transition-colors border-b-2 border-transparent hover:border-indigo-400">
                support@stonenox.com
              </a>
            </div>
          </div>

          {/* 3. Quick Info - Address Update */}
          <div className="text-center md:text-right space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-black text-indigo-400 uppercase tracking-widest">Main Office</p>
              <p className="text-lg font-bold text-white leading-tight">
                Sindhi Colony, Ganesh Chowk <br />
                Bilaspur, CG, India
              </p>
            </div>
            <div className="pt-4">
              <p className="text-xs font-black text-zinc-500 uppercase tracking-widest mb-1">Proudly Operated by</p>
              <p className="text-xl font-[1000] uppercase tracking-widest text-zinc-100">
                Lahre Brothers
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
            © 2026 STONENOX. ALL RIGHTS RESERVED.
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            <a href="#home" className="text-xs font-black text-zinc-300 hover:text-indigo-400 uppercase tracking-widest transition-colors">Home</a>
            <a href="#services" className="text-xs font-black text-zinc-300 hover:text-indigo-400 uppercase tracking-widest transition-colors">Services</a>
            <a href="#contact" className="text-xs font-black text-zinc-300 hover:text-indigo-400 uppercase tracking-widest transition-colors">Contact</a>
            <a href="/terms" className="text-xs font-black text-zinc-300 hover:text-indigo-400 uppercase tracking-widest transition-colors">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
}