import { motion } from 'motion/react';
import { Instagram, Youtube, TrendingUp, Users, Star } from 'lucide-react';

export function OmerSastim() {
  return (
    <section id="masteroogway" className="py-32 bg-transparent relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(139,92,246,0.15)]">
              <img 
                src="https://lh3.googleusercontent.com/d/1BDWZwKhVOt9Gn-yPwmeYp76DBaAgfhLH" 
                alt="Omer Sastim (Masteroogway)" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
                    <Star className="w-6 h-6 text-white fill-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Masteroogway</h3>
                    <p className="text-purple-300">Chief Viral Officer</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Stats */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 top-12 glass-panel p-6 rounded-2xl border border-white/10 shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Instagram</p>
                  <p className="text-xl font-bold text-white">1M+ Followers</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-8 bottom-32 glass-panel p-6 rounded-2xl border border-white/10 shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                  <Youtube className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">YouTube</p>
                  <p className="text-xl font-bold text-white">5M+ Subs</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter uppercase leading-[0.9] mb-6">
              Meet <br/>
              <span className="font-serif italic text-purple-500 font-normal normal-case">Omer Sastim.</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 font-light leading-relaxed">
              Known globally as <strong className="text-white">Masteroogway</strong>, Omer is the mastermind behind some of the internet's most viral moments. With billions of views under his belt, he knows exactly what makes content explode.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0 mt-1">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">The Viral Formula</h4>
                  <p className="text-gray-400">Omer applies his proven psychological triggers and retention hacks to your business, ensuring every video has the potential to reach millions.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0 mt-1">
                  <Users className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Massive Audience</h4>
                  <p className="text-gray-400">He doesn't just create content; he knows how to distribute it. Leveraging his network and expertise to put your brand in front of the right eyeballs.</p>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="btn-shine inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold text-lg hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
              Work With Omer
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
