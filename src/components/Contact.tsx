import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'motion/react';
import { Loader2 } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export function Contact() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      business: formData.get('business'),
      location: formData.get('location'),
      revenue: formData.get('revenue'),
      goal: formData.get('goal'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-transparent relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter uppercase leading-[0.9] mb-8">
              {t('contact.headline.lets')} <br/>
              <span className="font-serif italic text-purple-500 font-normal normal-case">{t('contact.headline.talk')}</span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed mb-12 max-w-md">
              {t('contact.desc')}
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-2">{t('contact.email')}</h4>
                <a href="mailto:thewiseturtle123@gmail.com" className="text-2xl md:text-3xl font-display font-bold hover:text-purple-400 transition-colors">
                  thewiseturtle123@gmail.com
                </a>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-2">{t('contact.follow')}</h4>
                <a href="https://instagram.com/omersastimm" target="_blank" rel="noopener noreferrer" className="text-2xl md:text-3xl font-display font-bold hover:text-purple-400 transition-colors">
                  @omersastimm
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 md:p-12 rounded-[2rem] glass-panel"
          >
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-xs font-medium text-gray-500 uppercase tracking-widest">{t('contact.form.name')}</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder:text-gray-700 focus:outline-none focus:border-purple-500 transition-colors text-lg rounded-none"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-xs font-medium text-gray-500 uppercase tracking-widest">{t('contact.form.email')}</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder:text-gray-700 focus:outline-none focus:border-purple-500 transition-colors text-lg rounded-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="business" className="text-xs font-medium text-gray-500 uppercase tracking-widest">{t('contact.form.business')}</label>
                  <input 
                    type="text" 
                    id="business" 
                    name="business"
                    required
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder:text-gray-700 focus:outline-none focus:border-purple-500 transition-colors text-lg rounded-none"
                    placeholder="Acme Corp"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="location" className="text-xs font-medium text-gray-500 uppercase tracking-widest">{t('contact.form.location')}</label>
                  <input 
                    type="text" 
                    id="location" 
                    name="location"
                    required
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder:text-gray-700 focus:outline-none focus:border-purple-500 transition-colors text-lg rounded-none"
                    placeholder="Amsterdam, NL"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="revenue" className="text-xs font-medium text-gray-500 uppercase tracking-widest">{t('contact.form.revenue')}</label>
                <select 
                  id="revenue" 
                  name="revenue"
                  className="w-full bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-purple-500 transition-colors text-lg appearance-none rounded-none cursor-pointer"
                >
                  <option value="" className="bg-zinc-900">{t('contact.form.revenue.select')}</option>
                  <option value="0-10k" className="bg-zinc-900">€0 - €10k</option>
                  <option value="10k-50k" className="bg-zinc-900">€10k - €50k</option>
                  <option value="50k-100k" className="bg-zinc-900">€50k - €100k</option>
                  <option value="100k+" className="bg-zinc-900">€100k+</option>
                </select>
              </div>

              <div className="space-y-3">
                <label htmlFor="goal" className="text-xs font-medium text-gray-500 uppercase tracking-widest">{t('contact.form.goal')}</label>
                <textarea 
                  id="goal" 
                  name="goal"
                  required
                  rows={3}
                  className="w-full bg-transparent border-b border-white/20 pb-3 text-white placeholder:text-gray-700 focus:outline-none focus:border-purple-500 transition-colors text-lg resize-none rounded-none"
                  placeholder="..."
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-6 rounded-full bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    ...
                  </>
                ) : (
                  <>
                    {t('contact.form.cta')}
                    <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                      <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-400 text-sm text-center font-medium">
                  Request sent successfully! We'll be in touch soon.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400 text-sm text-center font-medium">
                  Failed to send request. Please try again or email us directly.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
