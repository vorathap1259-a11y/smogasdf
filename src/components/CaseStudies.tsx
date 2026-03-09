import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';

export function CaseStudies() {
  const { t } = useLanguage();
  const cases = [
    {
      client: 'Tres Amigos',
      category: t('case.category.restaurant'),
      results: `5M+ ${t('case.results.views')}`,
      image: 'https://drive.google.com/thumbnail?id=1Zu-Imy4g177GU9PYjfVUFL4dX2JXK5CL&sz=w1000',
    },
    {
      client: 'Beymen BBQ',
      category: t('case.category.restaurant'),
      results: `1M+ ${t('case.results.views')} ${t('case.results.for1video')}`,
      image: 'https://drive.google.com/thumbnail?id=1H24kImzQ1QojqdmupBpRog7T4fwgvtri&sz=w1000',
    },
    {
      client: 'Bit Hotel',
      category: t('case.category.tech'),
      results: `300K+ ${t('case.results.users')}`,
      image: 'https://drive.google.com/thumbnail?id=1c_jvMa7lsmpY4crUDAw87qhNFWjv4of6&sz=w1000',
    },
    {
      client: 'Flex Beach',
      category: t('case.category.hospitality'),
      results: '0 to 100',
      image: 'https://drive.google.com/thumbnail?id=1mMQix6x4jj6mJoBSSswcfT0AJMvbqg-H&sz=w1000',
    },
  ];

  return (
    <section id="work" className="py-32 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-display font-bold tracking-tighter uppercase leading-[0.9]"
          >
            {t('case.headline.proven')} <br/>
            <span className="font-serif italic text-purple-500 font-normal normal-case">{t('case.headline.results')}</span>
          </motion.h2>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors uppercase tracking-widest text-sm"
          >
            {t('case.cta')}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {cases.map((item, index) => (
            <motion.div
              key={item.client}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`group relative ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-6">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={item.image} 
                  alt={item.client} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-6 right-6 z-20 px-4 py-2 rounded-full glass-panel text-white font-medium text-sm backdrop-blur-md">
                  {item.results}
                </div>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-3xl font-display font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {item.client}
                  </h3>
                  <p className="text-gray-400 uppercase tracking-widest text-sm font-medium">
                    {item.category}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 transform group-hover:-rotate-45">
                  <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
