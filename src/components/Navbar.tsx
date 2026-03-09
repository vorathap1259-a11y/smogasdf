import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.work'), href: '#deliverables' },
    { name: t('nav.packages'), href: '#packages' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-xl border-b border-white/5 transition-opacity duration-500" style={{ opacity: isScrolled ? 1 : 0 }} />
      
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative z-10">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img 
            src="https://lh3.googleusercontent.com/d/1s9d7WlHDnHbIyS8spySqSnfZFc_oAIjb" 
            alt="SMOG Agency" 
            className="h-12 w-12 rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <span className="text-2xl font-display font-bold tracking-tighter text-white">
            SMOG<span className="text-purple-500">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-purple-500 hover:text-white transition-all duration-300"
          >
            {t('nav.letstalk')}
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 top-0 bg-[#030303] z-40 flex flex-col justify-center px-6"
          >
            <div className="absolute top-6 right-6">
              <button
                className="text-white p-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            <nav className="flex flex-col gap-8 mb-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-5xl font-display font-bold uppercase tracking-tighter text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center px-8 py-5 rounded-full bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-purple-500 hover:text-white transition-colors"
            >
              {t('nav.letstalk')}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
