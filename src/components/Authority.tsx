import { motion, useScroll, useTransform } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { useRef } from 'react';

export function Authority() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const stats = [
    { label: t('authority.stats.views'), value: '2B+' },
    { label: t('authority.stats.unique'), value: '300M+' },
    { label: t('authority.stats.followers'), value: 'Millions' },
    { label: t('authority.stats.reach'), value: 'Global' },
  ];

  return (
    <section 
      ref={sectionRef}
      id="authority"
      className="py-32 bg-[#08090f] relative overflow-hidden border-t border-white/5"
    >
      {/* World Map Background */}
      <motion.div 
        style={{ scale, opacity: 0.2 }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://lh3.googleusercontent.com/d/1mMxOcNbPv3_rA8mwLZzdU9wPKia4Db8S')`,
          }}
        />
        {/* Vignette Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,rgba(8,9,15,0.6)_65%,rgba(8,9,15,0.95)_100%)]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-8 leading-[1.05]"
            >
              {t('authority.headline.numbers')} <br/>
              <span className="italic text-purple-500">{t('authority.headline.speak')}</span> <br/>
              {t('authority.headline.themselves')}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/45 leading-relaxed mb-10 max-w-sm"
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
              className="inline-flex items-center gap-3 px-8 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-all text-xs font-semibold uppercase tracking-[0.2em] group"
            >
              {t('authority.cta')}
              <svg className="group-hover:translate-x-1 transition-transform" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-8 md:p-10 rounded-2xl backdrop-blur-md border flex flex-col justify-center relative overflow-hidden group transition-all duration-500 ${
                  index === 3 
                    ? 'bg-purple-600/15 border-purple-500/30' 
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2 tracking-tighter relative z-10">
                  {stat.value}
                </div>
                <div className="text-[10px] md:text-xs font-bold text-white/35 uppercase tracking-[0.2em] relative z-10">
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
