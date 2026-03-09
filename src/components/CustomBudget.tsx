import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { Sparkles, ArrowRight, DollarSign } from 'lucide-react';

export const CustomBudget = () => {
  const { t } = useLanguage();
  const [budget, setBudget] = useState<string>('2300');

  return (
    <section id="custom-budget" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
              {t('customBudget.title', 'Flexible Pricing for Every Budget')}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t('customBudget.subtitle', 'Have a lower or higher budget or inbetween the prices given? No problem, we can always adjust the video amount to your needs.')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl">
            {/* Input Side */}
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-purple-300 uppercase tracking-wider flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  {t('customBudget.label', 'Your Available Budget')}
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-white/50">€</span>
                  <input
                    type="number"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="e.g. 2300"
                    className="w-full bg-black/40 border border-white/10 rounded-2xl py-6 pl-10 pr-6 text-3xl font-bold text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all placeholder:text-white/10"
                  />
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                <p className="text-sm text-purple-200/80 italic">
                  "I have €{budget || '...'} left to spend" — No problem, we'll make it work.
                </p>
              </div>
            </div>

            {/* Result Side */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-black/40 border border-white/10 rounded-2xl p-8 text-center flex flex-col justify-center min-h-[200px]">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group shadow-lg shadow-purple-500/20"
                >
                  {t('customBudget.cta', 'Get This Offer')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-gray-500 text-sm font-medium uppercase tracking-widest"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-500" />
              Custom Strategy
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-500" />
              Flexible Deliverables
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-500" />
              Scalable Production
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
