import { motion, AnimatePresence } from 'motion/react';
import { Play, Heart, Eye, MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../LanguageContext';

export function Deliverables() {
  const { t } = useLanguage();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videos = [
    {
      id: 1,
      title: 'Nuclear',
      views: '1.1M',
      likes: '132K',
      comments: '1,200',
      language: t('deliverables.lang.en'),
      driveId: '1HcIo1ImtDzkIGTbspgqvXktevt877bXS',
    },
    {
      id: 2,
      title: 'Barbeque',
      views: '13.1M',
      likes: '857.9K',
      comments: '8,156',
      language: t('deliverables.lang.nl'),
      driveId: '1G-8U_M1b-yhu68qefjzSKRe35C9qNhsA',
    },
    {
      id: 3,
      title: 'Dubai Lifestyle',
      views: '1.3M',
      likes: '76K',
      comments: '1,000',
      language: t('deliverables.lang.ar'),
      driveId: '1tCuvWqcP-d3JnQ79ETxprH2LRquETh3E',
    },
    {
      id: 4,
      title: 'European Expansion',
      views: '14M',
      likes: '525K',
      comments: '6,382',
      language: t('deliverables.lang.pl'),
      driveId: '1EiP0of-FnNuKueagZIEkELLY_kGmTfdw',
    },
  ];

  return (
    <section id="deliverables" className="py-32 bg-transparent relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-display font-bold tracking-tighter uppercase leading-[0.9] mb-6"
          >
            {t('deliverables.headline.viral')} <br/>
            <span className="font-serif italic text-purple-500 font-normal normal-case">{t('deliverables.headline.deliverables')}</span>
          </motion.h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            {t('deliverables.subheadline')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => {
            return (
            <motion.div
              key={video.id}
              onClick={() => setActiveVideo(video.driveId)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden glass-panel aspect-[9/16] border border-white/10 cursor-pointer"
            >
              <iframe 
                src={`https://drive.google.com/file/d/${video.driveId}/preview`}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                allow="autoplay"
                title={video.title}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
              
              <div className="absolute top-4 left-4 pointer-events-none">
                <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs font-medium text-white">
                  {video.language}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 pointer-events-none">
                <div className="flex items-center justify-between text-white mb-3">
                  <div className="flex items-center gap-2">
                    <Eye className="w-5 h-5 text-purple-400" />
                    <span className="font-bold text-lg">{video.views}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-pink-500 fill-pink-500" />
                    <span className="font-bold text-lg">{video.likes}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <MessageCircle className="w-4 h-4" />
                  <span>{video.comments} {t('deliverables.comments')}</span>
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                  <Play className="w-6 h-6 text-white fill-white ml-1" />
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setActiveVideo(null)}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-[400px] aspect-[9/16] rounded-2xl overflow-hidden bg-black shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://drive.google.com/file/d/${activeVideo}/preview`}
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
                title="Video Player"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
