import { motion } from 'motion/react';
import { Instagram, Youtube, TrendingUp, Users, Star } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export function OmerSastim() {
  const { t } = useLanguage();
  return (
    <section id="masteroogway" className="py-32 bg-transparent relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(139,92,246,0.15)] bg-zinc-900">
              <img 
                src="https://lh3.googleusercontent.com/d/1Wd-KeS6AKZAB83gTyt6mo_VbP7nqt9D3" 
                alt="Omer Sastim (Masteroogway)" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
                    <Star className="w-6 h-6 text-white fill-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Masteroogway</h3>
                    <p className="text-purple-300">{t('omer.role')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Stats */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 -right-4 md:top-12 md:-right-8 glass-panel p-4 md:p-6 rounded-2xl border border-white/10 shadow-2xl z-20"
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
                  <Instagram className="w-4 h-4 md:w-6 md:h-6 text-pink-500" />
                </div>
                <div>
                  <p className="text-[10px] md:text-sm text-gray-400">Instagram</p>
                  <p className="text-sm md:text-xl font-bold text-white [text-shadow:_0_2px_10px_rgb(0_0_0_/_80%)]">2M+ Followers</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-48 -left-4 md:bottom-32 md:-left-8 glass-panel p-4 md:p-6 rounded-2xl border border-white/10 shadow-2xl z-20"
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                  <Youtube className="w-4 h-4 md:w-6 md:h-6 text-red-500" />
                </div>
                <div>
                  <p className="text-[10px] md:text-sm text-gray-400">YouTube</p>
                  <p className="text-sm md:text-xl font-bold text-white [text-shadow:_0_2px_10px_rgb(0_0_0_/_80%)]">27M+ Subs</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ x: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 -left-4 md:top-auto md:bottom-12 md:right-12 glass-panel p-4 md:p-6 rounded-2xl border border-white/10 shadow-2xl z-20"
            >
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <svg className="w-4 h-4 md:w-6 md:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] md:text-sm text-gray-400">TikTok</p>
                  <p className="text-sm md:text-xl font-bold text-white [text-shadow:_0_2px_10px_rgb(0_0_0_/_80%)]">2M+ Followers</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter uppercase leading-[0.9] mb-6">
              {t('omer.headline.meet')} <br/>
              <span className="font-serif italic text-purple-500 font-normal normal-case">{t('omer.headline.name')}</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 font-light leading-relaxed">
              {t('omer.desc').split('Masteroogway').map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && <strong className="text-white">Masteroogway</strong>}
                </span>
              ))}
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0 mt-1">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{t('omer.feature1.title')}</h4>
                  <p className="text-gray-400">{t('omer.feature1.desc')}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0 mt-1">
                  <Users className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{t('omer.feature2.title')}</h4>
                  <p className="text-gray-400">{t('omer.feature2.desc')}</p>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="btn-shine inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold text-lg hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
              {t('omer.cta')}
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
