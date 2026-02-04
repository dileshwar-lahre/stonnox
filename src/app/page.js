import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

// ❌ Navbar aur Footer yahan se hata diye kyunki layout.js mein pehle se hain

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen selection:bg-indigo-600 selection:text-white">
      
      {/* 1. Home Section */}
      <section id="home" className="scroll-mt-20">
        <Hero />
      </section>

      {/* 3. Services Section */}
      <section id="services" className="scroll-mt-20">
        <Services />
      </section> 
      
      {/* 4. About Section */}
      <section id="about" className="scroll-mt-20">
        <About />
      </section>

      {/* 5. Contact Section */}
      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>

    </main>
  );
}