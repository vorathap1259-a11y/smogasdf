import { motion } from 'motion/react';
import { ArrowRight, Play, Heart, MessageCircle, Share2, TrendingUp, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 opacity-40">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-110 blur-[2px]"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-social-media-interface-4468-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* Floating Elements - User Requested */}
      <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
        {/* Top Left - Lifestyle/Success Image */}
        <motion.div
          initial={{ opacity: 0, x: -100, y: -50, rotate: -15 }}
          animate={{ opacity: 1, x: 0, y: 0, rotate: -8 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute top-[8%] left-[2%] md:left-[4%]"
        >
          <motion.div
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-purple-500/20 blur-2xl rounded-full group-hover:bg-purple-500/40 transition-colors" />
            <div className="relative glass-panel-strong p-3 rounded-[2rem] border-white/10 shadow-2xl w-44 md:w-72 overflow-hidden">
              <img 
                src="https://picsum.photos/seed/lifestyle-success/800/1000" 
                alt="Success Lifestyle" 
                className="w-full aspect-[4/5] object-cover rounded-[1.5rem]" 
                referrerPolicy="no-referrer" 
              />
              <div className="absolute top-6 left-6 glass-panel px-3 py-1.5 rounded-full text-[10px] font-bold text-white tracking-widest uppercase backdrop-blur-xl border border-white/20">
                Premium Results
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Top Right - Viral Content Reel */}
        <motion.div
          initial={{ opacity: 0, x: 100, y: -50, rotate: 15 }}
          animate={{ opacity: 1, x: 0, y: 0, rotate: 6 }}
          transition={{ duration: 1.5, delay: 0.7 }}
          className="absolute top-[12%] right-[2%] md:right-[6%]"
        >
          <motion.div
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-pink-500/20 blur-2xl rounded-full group-hover:bg-pink-500/40 transition-colors" />
            <div className="relative glass-panel-strong p-2 rounded-[2rem] border-white/10 shadow-2xl w-48 md:w-80 overflow-hidden">
              <div className="relative aspect-[9/16] rounded-[1.5rem] overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/viral-reel/900/1600" 
                  alt="Viral Reel" 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                      <Play className="w-3 h-3 text-white fill-white ml-0.5" />
                    </div>
                    <div className="text-xs font-bold text-white">Viral Campaign</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <Heart className="w-3.5 h-3.5 text-pink-500 fill-current" />
                      <span className="text-[10px] font-bold text-white">1.2M</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Share2 className="w-3.5 h-3.5 text-blue-400" />
                      <span className="text-[10px] font-bold text-white">45K</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Left - Growth Analytics & ROI */}
        <motion.div
          initial={{ opacity: 0, x: -100, y: 100, rotate: -10 }}
          animate={{ opacity: 1, x: 0, y: 0, rotate: -4 }}
          transition={{ duration: 1.5, delay: 0.9 }}
          className="absolute bottom-[10%] left-[2%] md:left-[5%]"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-emerald-500/20 blur-2xl rounded-full group-hover:bg-emerald-500/40 transition-colors" />
            <div className="relative glass-panel-strong p-6 rounded-[2rem] border-white/10 shadow-2xl w-56 md:w-80">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
                  <TrendingUp className="w-7 h-7 text-emerald-500" />
                </div>
                <div>
                  <div className="text-base font-bold text-white">ROI Analytics</div>
                  <div className="text-[10px] text-emerald-400 font-medium tracking-widest uppercase">Performance Tracking</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-2.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "94%" }}
                    transition={{ duration: 2, delay: 2.5 }}
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-400" 
                  />
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-4xl font-display font-bold text-white">+2,400%</div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Revenue Growth</div>
                  </div>
                  <div className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-md">Verified</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Right - Global Reach / Team Photo */}
        <motion.div
          initial={{ opacity: 0, x: 100, y: 100, rotate: 10 }}
          animate={{ opacity: 1, x: 0, y: 0, rotate: 5 }}
          transition={{ duration: 1.5, delay: 1.1 }}
          className="absolute bottom-[8%] right-[2%] md:right-[5%]"
        >
          <motion.div
            animate={{ y: [0, 25, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-blue-500/20 blur-2xl rounded-full group-hover:bg-blue-500/40 transition-colors" />
            <div className="relative glass-panel-strong p-3 rounded-[2rem] border-white/10 shadow-2xl w-52 md:w-72">
              <img 
                src="https://picsum.photos/seed/team-global/800/800" 
                alt="Global Team" 
                className="w-full aspect-square object-cover rounded-[1.5rem] mb-5" 
                referrerPolicy="no-referrer" 
              />
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-7 h-7 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Global Reach</div>
                  <div className="text-[10px] text-gray-400">Scaling brands across 4 continents</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative z-10 w-full px-6 flex flex-col items-center text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-panel-strong mb-12 shadow-[0_0_30px_rgba(139,92,246,0.15)]"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
          </span>
          <span className="text-xs md:text-sm font-medium tracking-widest uppercase text-gray-300">
            Amsterdam <span className="text-base leading-none mx-1">🇳🇱</span> • Dubai <span className="text-base leading-none mx-1">🇦🇪</span> • Poland <span className="text-base leading-none mx-1">🇵🇱</span> • USA <span className="text-base leading-none mx-1">🇺🇸</span>
          </span>
        </motion.div>

        {/* Floating View Counter */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute top-1/4 right-[10%] hidden lg:flex flex-col items-center p-4 rounded-2xl glass-panel-strong border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.2)]"
        >
          <div className="text-xs font-bold text-purple-400 uppercase tracking-tighter mb-1">Live Views</div>
          <div className="text-3xl font-mono font-bold text-white flex items-center gap-2">
            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-red-500"
            />
            1,248,392
          </div>
        </motion.div>

        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: "100%", rotate: 5 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10vw] md:text-[6vw] font-display font-bold tracking-tighter leading-[0.85] uppercase"
          >
            {t('hero.headline.we')} {t('hero.headline.businesses')} {t('hero.headline.into')}
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-12">
          <motion.h1
            initial={{ y: "100%", rotate: -5 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[14vw] md:text-[9vw] font-display font-bold tracking-tighter leading-[0.85] uppercase"
          >
            <span className="font-serif italic text-gradient-purple normal-case font-normal pr-4">{t('hero.headline.viral')}</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="text-lg md:text-2xl text-gray-400 max-w-2xl mb-16 text-balance leading-relaxed font-light"
        >
          {t('hero.subheadline')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
        >
          <a
            href="#contact"
            className="btn-shine w-full sm:w-auto px-10 py-5 rounded-full bg-white text-black font-semibold text-lg hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group shadow-[0_0_40px_rgba(255,255,255,0.2)]"
          >
            {t('hero.cta.book')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#work"
            className="w-full sm:w-auto px-10 py-5 rounded-full glass-panel-strong text-white font-semibold text-lg hover:bg-white/10 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group"
          >
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <Play className="w-4 h-4 fill-current ml-0.5" />
            </div>
            {t('hero.cta.view')}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-gray-500"
      >
        <span className="text-[10px] font-medium tracking-[0.3em] uppercase">Scroll</span>
        <motion.div 
          animate={{ height: ["0%", "100%", "0%"], y: ["-100%", "0%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent origin-top" 
        />
      </motion.div>
    </section>
  );
}
