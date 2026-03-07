import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';

export function Problem() {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32 h-fit"
          >
            <h2 className="text-[10vw] lg:text-[6vw] font-display font-bold leading-[0.85] tracking-tighter uppercase mb-8">
              {t('problem.headline.great')} <br/>
              <span className="font-serif italic text-gradient-purple font-normal normal-case pr-4">{t('problem.headline.business')}</span><br/>
              {t('problem.headline.no')} <br/>
              <span className="text-outline">{t('problem.headline.attention')}</span>
            </h2>
          </motion.div>

          <div className="space-y-12 lg:pt-32">
            <motion.div
              initial={{ opacity: 0, y: 30, x: 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-10 rounded-3xl glass-panel-strong hover:border-white/20 transition-colors duration-500 group"
            >
              <div className="text-6xl font-serif italic text-purple-500 mb-6 opacity-50 group-hover:opacity-100 transition-opacity">01</div>
              <h3 className="text-3xl font-display font-bold mb-4">{t('problem.step1.title')}</h3>
              <p className="text-xl text-gray-400 leading-relaxed font-light">
                {t('problem.step1.desc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, x: 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-10 rounded-3xl glass-panel-strong hover:border-white/20 transition-colors duration-500 group"
            >
              <div className="text-6xl font-serif italic text-purple-500 mb-6 opacity-50 group-hover:opacity-100 transition-opacity">02</div>
              <h3 className="text-3xl font-display font-bold mb-4">{t('problem.step2.title')}</h3>
              <p className="text-xl text-gray-400 leading-relaxed font-light">
                {t('problem.step2.desc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, x: 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-10 rounded-3xl bg-white text-black shadow-[0_0_40px_rgba(255,255,255,0.1)] group"
            >
              <div className="text-6xl font-serif italic text-gray-300 mb-6 group-hover:text-purple-500 transition-colors duration-500">03</div>
              <h3 className="text-3xl font-display font-bold mb-4">{t('problem.step3.title')}</h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                {t('problem.step3.desc')}
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 font-bold uppercase tracking-widest text-sm border-b-2 border-black pb-1 hover:text-purple-600 hover:border-purple-600 transition-colors">
                {t('problem.cta')}
                <svg className="group-hover:translate-x-1 transition-transform" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
