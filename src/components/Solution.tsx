import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';

export function Solution() {
  const { t } = useLanguage();

  const steps = [
    {
      number: '01',
      title: t('solution.step1.title'),
      description: t('solution.step1.desc'),
    },
    {
      number: '02',
      title: t('solution.step2.title'),
      description: t('solution.step2.desc'),
    },
    {
      number: '03',
      title: t('solution.step3.title'),
      description: t('solution.step3.desc'),
    },
    {
      number: '04',
      title: t('solution.step4.title'),
      description: t('solution.step4.desc'),
    },
  ];

  return (
    <section id="services" className="py-32 bg-transparent relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-24 md:mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-display font-bold tracking-tighter uppercase leading-[0.9]"
          >
            {t('solution.headline.our')} <br/>
            <span className="font-serif italic text-gradient-purple font-normal normal-case pr-4">{t('solution.headline.system')}</span>
          </motion.h2>
        </div>

        <div className="space-y-8 md:space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group flex flex-col md:flex-row md:items-center gap-6 md:gap-16 p-8 md:p-12 rounded-3xl glass-panel-strong hover:border-white/20 hover:bg-white/[0.05] transition-all duration-500"
            >
              <div className="text-6xl md:text-8xl font-display font-bold text-outline group-hover:text-white transition-colors duration-500 w-32 shrink-0">
                {step.number}
              </div>
              <div className="flex-1">
                <h3 className="text-3xl md:text-5xl font-display font-bold mb-4 group-hover:text-purple-400 transition-colors duration-500">
                  {step.title}
                </h3>
                <p className="text-xl text-gray-400 leading-relaxed max-w-2xl font-light">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
