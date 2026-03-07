import { motion } from 'motion/react';

export function CaseStudies() {
  const cases = [
    {
      client: 'Tres Amigos',
      category: 'Restaurant',
      results: '100K+ Views',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop',
    },
    {
      client: 'Beymen BBQ',
      category: 'Restaurant',
      results: '500K+ Views',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop',
    },
    {
      client: 'Bit Hotel',
      category: 'Tech / Gaming',
      results: '300K+ Users',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop',
    },
    {
      client: 'Flex Beach',
      category: 'Hospitality',
      results: '0 to 100',
      image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1000&auto=format&fit=crop',
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
            Proven <br/>
            <span className="font-serif italic text-purple-500 font-normal normal-case">Results.</span>
          </motion.h2>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors uppercase tracking-widest text-sm"
          >
            Start Yours
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
