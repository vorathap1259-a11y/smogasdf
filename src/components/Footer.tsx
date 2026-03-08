import { useLanguage } from '../LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-transparent pt-20 pb-10 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
          <div className="text-3xl font-display font-bold tracking-tighter">
            SMOG<span className="text-purple-500">.</span>
          </div>
          
          <div className="flex gap-8">
            <a href="https://instagram.com/omersastimm" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-400 hover:text-white uppercase tracking-widest transition-colors">
              Instagram
            </a>
            <a href="mailto:thewiseturtle123@gmail.com" className="text-sm font-medium text-gray-400 hover:text-white uppercase tracking-widest transition-colors">
              Email
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10 text-sm text-gray-600 font-medium">
          <p>&copy; {new Date().getFullYear()} SMOG Agency. {t('footer.rights')}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-gray-300 transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
