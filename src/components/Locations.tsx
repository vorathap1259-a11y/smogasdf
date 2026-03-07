import { motion } from 'motion/react';

export function Locations() {
  const futureLocations = [
    { name: 'Dubai', flag: '🇦🇪' },
    { name: 'Poland', flag: '🇵🇱' },
    { name: 'United States', flag: '🇺🇸' },
  ];

  return (
    <section className="py-32 bg-transparent relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-[8vw] md:text-[6vw] font-display font-bold tracking-tighter uppercase leading-[0.9]">
            Local Focus.<br/>
            <span className="font-serif italic text-gray-500 font-normal normal-case">Global Ambition.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-12 rounded-[2rem] bg-purple-600 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517736996303-4eec4a66bb17?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-700 mix-blend-overlay" />
            <div className="relative z-10 h-full flex flex-col justify-between min-h-[300px]">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 backdrop-blur-md w-fit text-sm font-medium uppercase tracking-widest text-white">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                HQ
              </div>
              <div>
                <h3 className="text-5xl md:text-7xl font-display font-bold text-white mb-2 flex items-center gap-4">
                  Amsterdam <span className="text-4xl md:text-6xl">🇳🇱</span>
                </h3>
                <p className="text-xl text-purple-200 font-medium">The Netherlands</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-8">
            {futureLocations.map((loc, i) => (
              <motion.div
                key={loc.name}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 md:p-10 rounded-[2rem] glass-panel flex items-center justify-between group hover:bg-white/5 transition-colors"
              >
                <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-400 group-hover:text-white transition-colors flex items-center gap-4">
                  {loc.name} <span>{loc.flag}</span>
                </h3>
                <div className="px-4 py-2 rounded-full border border-white/10 text-xs font-medium uppercase tracking-widest text-gray-500 group-hover:border-purple-500/50 group-hover:text-purple-400 transition-colors">
                  Expanding Soon
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
