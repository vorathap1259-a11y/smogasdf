import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 opacity-40">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-110 blur-[2px]"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-social-media-interface-4468-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 w-full px-6 flex flex-col items-center text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-panel-strong mb-12 shadow-[0_0_30px_rgba(139,92,246,0.15)]"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
          </span>
          <span className="text-xs md:text-sm font-medium tracking-widest uppercase text-gray-300">
            Amsterdam <span className="text-base leading-none mx-1">🇳🇱</span> • Dubai <span className="text-base leading-none mx-1">🇦🇪</span> • Poland <span className="text-base leading-none mx-1">🇵🇱</span> • USA <span className="text-base leading-none mx-1">🇺🇸</span>
          </span>
        </motion.div>

        {/* Floating View Counter */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute top-1/4 right-[10%] hidden lg:flex flex-col items-center p-4 rounded-2xl glass-panel-strong border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.2)]"
        >
          <div className="text-xs font-bold text-purple-400 uppercase tracking-tighter mb-1">Live Views</div>
          <div className="text-3xl font-mono font-bold text-white flex items-center gap-2">
            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-red-500"
            />
            1,248,392
          </div>
        </motion.div>

        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: "100%", rotate: 5 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10vw] md:text-[6vw] font-display font-bold tracking-tighter leading-[0.85] uppercase"
          >
            {t('hero.headline.we')} {t('hero.headline.businesses')} {t('hero.headline.into')}
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-12">
          <motion.h1
            initial={{ y: "100%", rotate: -5 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[14vw] md:text-[9vw] font-display font-bold tracking-tighter leading-[0.85] uppercase"
          >
            <span className="font-serif italic text-gradient-purple normal-case font-normal pr-4">{t('hero.headline.viral')}</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="text-lg md:text-2xl text-gray-400 max-w-2xl mb-16 text-balance leading-relaxed font-light"
        >
          {t('hero.subheadline')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
        >
          <a
            href="#contact"
            className="btn-shine w-full sm:w-auto px-10 py-5 rounded-full bg-white text-black font-semibold text-lg hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group shadow-[0_0_40px_rgba(255,255,255,0.2)]"
          >
            {t('hero.cta.book')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#work"
            className="w-full sm:w-auto px-10 py-5 rounded-full glass-panel-strong text-white font-semibold text-lg hover:bg-white/10 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group"
          >
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <Play className="w-4 h-4 fill-current ml-0.5" />
            </div>
            {t('hero.cta.view')}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-gray-500"
      >
        <span className="text-[10px] font-medium tracking-[0.3em] uppercase">Scroll</span>
        <motion.div 
          animate={{ height: ["0%", "100%", "0%"], y: ["-100%", "0%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent origin-top" 
        />
      </motion.div>
    </section>
  );
}
