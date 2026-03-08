import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';

export function Packages() {
  const { t } = useLanguage();
  const packages = [
    {
      name: t('packages.starter.name'),
      price: '€1,500',
      period: t('packages.period'),
      features: [
        t('packages.feature.videos4'),
        t('packages.feature.filming'),
        t('packages.feature.editing'),
        t('packages.feature.concept')
      ],
    },
    {
      name: t('packages.growth.name'),
      price: '€2,000',
      period: t('packages.period'),
      features: [
        t('packages.feature.videos6'),
        t('packages.feature.filming'),
        t('packages.feature.editing'),
        t('packages.feature.concept'),
        t('packages.feature.distribution')
      ],
      popular: true,
    },
    {
      name: t('packages.authority.name'),
      price: '€4,500',
      period: t('packages.period'),
      features: [
        t('packages.feature.videos14'),
        t('packages.feature.filming'),
        t('packages.feature.editing'),
        t('packages.feature.fullviral'),
        t('packages.feature.priority'),
        t('packages.feature.manager')
      ],
    },
  ];

  return (
    <section id="packages" className="py-32 bg-transparent relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-display font-bold tracking-tighter uppercase leading-[0.9] mb-6"
          >
            {t('packages.headline.growth')} <br/>
            <span className="font-serif italic text-purple-500 font-normal normal-case">{t('packages.headline.packages')}</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative p-10 rounded-[2rem] flex flex-col h-full ${
                pkg.popular 
                  ? 'bg-purple-600 text-white' 
                  : 'glass-panel hover:bg-white/5 transition-colors'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-10 px-4 py-1 rounded-full bg-black text-white text-xs font-bold uppercase tracking-widest border border-white/10">
                  {t('packages.popular')}
                </div>
              )}
              
              <h3 className={`text-2xl font-display font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-gray-400'}`}>
                {pkg.name}
              </h3>
              <div className="mb-10 flex items-baseline gap-1">
                <span className="text-6xl font-display font-bold tracking-tighter">{pkg.price}</span>
                <span className={`font-medium ${pkg.popular ? 'text-purple-200' : 'text-gray-500'}`}>{pkg.period}</span>
              </div>
              
              <div className="flex-grow space-y-5 mb-12">
                {pkg.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-4">
                    <div className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${pkg.popular ? 'bg-white' : 'bg-purple-500'}`} />
                    <span className={`text-lg ${pkg.popular ? 'text-purple-50' : 'text-gray-300'}`}>{feature}</span>
                  </div>
                ))}
              </div>
              
              <a
                href="#contact"
                className={`w-full py-5 rounded-full font-semibold text-center uppercase tracking-widest text-sm transition-all ${
                  pkg.popular
                    ? 'bg-white text-purple-900 hover:bg-gray-100'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {t('packages.cta')}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
