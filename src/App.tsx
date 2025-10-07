import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Github, Linkedin, Mail, Briefcase, Code, Palette } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-7xl ${
          scrolled
            ? 'bg-[#111111b3] backdrop-blur-xl border border-white/10'
            : 'bg-transparent'
        } rounded-[32px] px-6 py-4`}
      >
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-semibold hover:opacity-80 transition-opacity"
          >
            Huy Phạm
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="text-sm hover:text-white/60 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-sm hover:text-white/60 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-sm hover:text-white/60 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-sm hover:text-white/60 transition-colors">
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 bg-gradient-to-b from-[#0a0a0a] to-white/10 border border-white/10 rounded-full text-sm hover:bg-white/5 transition-all"
            >
              Contact
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-white/5 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10 flex flex-col gap-4">
            <button onClick={() => scrollToSection('about')} className="text-left hover:text-white/60 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-left hover:text-white/60 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-left hover:text-white/60 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-left hover:text-white/60 transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-left hover:text-white/60 transition-colors">
              Contact
            </button>
          </div>
        )}
      </nav>

      <Hero scrollToSection={scrollToSection} />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
