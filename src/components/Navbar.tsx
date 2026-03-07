import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: 'EN', flag: '🇺🇸' },
    { code: 'NL', flag: '🇳🇱' },
    { code: 'PL', flag: '🇵🇱' },
    { code: 'AR', flag: '🇦🇪' },
  ] as const;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.work'), href: '#work' },
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
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black font-display font-bold text-xl group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
            S
          </div>
          <span className="font-display font-bold text-xl tracking-tighter uppercase">SMOG</span>
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
          {/* Language Toggle */}
          <div className="relative">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-base">{languages.find(l => l.code === language)?.flag}</span>
              {language}
            </button>
            <AnimatePresence>
              {isLangMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-4 bg-[#111] border border-white/10 rounded-2xl shadow-2xl overflow-hidden py-2 min-w-[120px] backdrop-blur-xl"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as any);
                        setIsLangMenuOpen(false);
                      }}
                      className={`flex items-center gap-3 w-full text-left px-6 py-3 text-xs font-medium uppercase tracking-widest hover:bg-white/5 transition-colors ${
                        language === lang.code ? 'text-purple-400' : 'text-gray-400'
                      }`}
                    >
                      <span className="text-base">{lang.flag}</span>
                      {lang.code}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

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
            
            <div className="flex items-center gap-6 mb-12">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code as any)}
                  className={`flex items-center gap-2 text-sm font-medium uppercase tracking-widest ${
                    language === lang.code ? 'text-purple-400' : 'text-gray-500'
                  }`}
                >
                  <span className="text-lg">{lang.flag}</span>
                  {lang.code}
                </button>
              ))}
            </div>
            
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
