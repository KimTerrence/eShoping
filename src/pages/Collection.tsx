import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import AuthOverlay from '../components/AuthOverlay';

export default function CollectionsPage() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const collections = [
    { title: "The Brutalist Set", count: "12 Pieces", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2" },
    { title: "Concrete Minimalism", count: "08 Pieces", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae" },
    { title: "Nostalgic Utility", count: "15 Pieces", img: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8" }
  ];

  return (
    <div className="min-h-screen bg-[#FDFCF9]">
      {/* 1. Global Navbar */}
      <Navbar onAccountClick={() => setIsAuthOpen(true)} />

      {/* 2. Collections Content */}
      <main className="pt-20">
        <section className="py-24 border-t border-black/5">
          <div className="px-6 md:px-12 mb-12 flex justify-between items-end">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h3 className="text-4xl font-black tracking-tighter uppercase italic leading-none">
                Curated <br/> 
                <span className="font-serif font-light lowercase">Stories.</span>
              </h3>
            </motion.div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
              Volume 01 — Winter 26
            </span>
          </div>
          
          <div className="flex gap-6 overflow-x-auto px-6 md:px-12 no-scrollbar pb-10 snap-x snap-mandatory">
            {collections.map((col, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                whileHover={{ y: -10 }}
                className="min-w-[350px] md:min-w-[450px] aspect-[3/4] relative overflow-hidden rounded-2xl bg-gray-100 snap-start group cursor-pointer"
              >
                <img 
                  src={col.img} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                  alt={col.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-[9px] font-black uppercase tracking-[0.4em] mb-2 text-blue-400">
                    {col.count}
                  </p>
                  <h4 className="text-3xl font-black tracking-tighter uppercase italic">
                    {col.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* 3. Auth Overlay */}
      <AuthOverlay isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </div>
  );
}