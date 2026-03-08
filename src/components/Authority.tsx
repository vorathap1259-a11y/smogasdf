import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';

export function Authority() {
  const { t } = useLanguage();

  const stats = [
    { label: t('authority.stats.views'), value: '2B+' },
    { label: t('authority.stats.unique'), value: '300M+' },
    { label: t('authority.stats.followers'), value: 'Millions' },
    { label: t('authority.stats.reach'), value: 'Global' },
  ];

  return (
    <section className="py-32 bg-transparent relative overflow-hidden border-t border-white/5">
      {/* Background Video Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <div className="grid grid-cols-4 md:grid-cols-6 gap-4 h-full">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="aspect-[9/16] bg-white/10 rounded-lg overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-social-media-icons-on-a-blue-background-4467-large.mp4" type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-8 leading-[1.1]"
            >
              {t('authority.headline.numbers')} <br/>
              <span className="font-serif italic text-gradient-purple font-normal pr-4">{t('authority.headline.speak')}</span> <br/>
              {t('authority.headline.themselves')}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400 leading-relaxed mb-10 font-light"
            >
              {t('authority.desc')}
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              href="https://instagram.com/omersastimm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass-panel-strong hover:bg-white/10 transition-colors text-sm font-medium uppercase tracking-widest group"
            >
              {t('authority.cta')}
              <svg className="group-hover:translate-x-1 transition-transform" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
                className="p-8 md:p-10 rounded-3xl glass-panel-strong flex flex-col justify-center relative overflow-hidden group hover:border-purple-500/30 transition-colors duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-4xl md:text-6xl font-display font-bold text-white mb-4 tracking-tighter relative z-10 group-hover:scale-105 transition-transform duration-500 origin-left">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base font-medium text-gray-400 uppercase tracking-widest relative z-10">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-32 w-full overflow-hidden flex border-y border-white/5 py-8 bg-white/[0.01] backdrop-blur-sm">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap items-center gap-16 px-8"
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-16">
              <span className="text-5xl font-display font-bold text-outline uppercase tracking-wider hover:text-white transition-colors duration-300">{t('authority.marquee.restaurants')}</span>
              <span className="text-3xl text-purple-500">✦</span>
              <span className="text-5xl font-display font-bold text-outline uppercase tracking-wider hover:text-white transition-colors duration-300">{t('authority.marquee.clinics')}</span>
              <span className="text-3xl text-purple-500">✦</span>
              <span className="text-5xl font-display font-bold text-outline uppercase tracking-wider hover:text-white transition-colors duration-300">{t('authority.marquee.realestate')}</span>
              <span className="text-3xl text-purple-500">✦</span>
              <span className="text-5xl font-display font-bold text-outline uppercase tracking-wider hover:text-white transition-colors duration-300">{t('authority.marquee.gyms')}</span>
              <span className="text-3xl text-purple-500">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
