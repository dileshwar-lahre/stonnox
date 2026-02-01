export default function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-white/5 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-8xl md:text-[15rem] font-black text-white/5 uppercase select-none pointer-events-none mb-[-4rem] md:mb-[-8rem]">
          LAHRE
        </h2>
        
        <div className="relative z-10">
          <p className="text-xs font-black uppercase tracking-[0.6em] text-orange-600 mb-6">Contact Lahre IT Solutions</p>
          <h3 className="text-3xl md:text-5xl font-black italic text-white mb-10">LET'S BUILD SOMETHING BIG.</h3>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 text-zinc-500 font-bold uppercase tracking-widest text-[10px]">
            <a href="tel:+919131460470" className="hover:text-white transition-all underline decoration-orange-600 underline-offset-8">9131460470</a>
            <a href="mailto:contact@lahreit.com" className="hover:text-white transition-all underline decoration-orange-600 underline-offset-8">director@lahreit.com</a>
            <span>Chhattisgarh, India</span>
          </div>
          
          <div className="mt-20 pt-10 border-t border-white/5">
             <p className="text-[10px] text-zinc-700 font-black uppercase tracking-[0.4em]">
              © 2026 Lahre IT Solutions. Operated by <span className="text-zinc-500">Lahre Group.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}