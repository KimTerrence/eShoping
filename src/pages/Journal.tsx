import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import AuthOverlay from '../components/AuthOverlay';

export default function JournalPage() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const articles = [
    {
      date: "February 05, 2026",
      title: "Why 90s Leather is the ultimate investment.",
      excerpt: "A deep dive into the tanning processes of the late 90s and why these pieces outlast modern luxury...",
      img: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d"
    },
    {
      date: "January 28, 2026",
      title: "The Ozone Process: How we clean history.",
      excerpt: "Understanding the eco-friendly technology that sanitizes vintage fibers without damaging the soul of the garment...",
      img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Global Navbar */}
      <Navbar onAccountClick={() => setIsAuthOpen(true)} />

      <main className="pt-20">
        <section className="py-24 px-6 md:px-12 border-t border-black/5">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-20 space-y-4"
          >
            <span className="text-blue-600 font-mono text-[10px] tracking-[0.4em] uppercase">
              E-UKAY Journal
            </span>
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
              The Culture <br/> 
              <span className="italic font-serif font-light lowercase">of second life.</span>
            </h3>
          </motion.div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-[1200px] mx-auto">
            {articles.map((post, i) => (
              <motion.article 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="group cursor-pointer"
              >
                <div className="aspect-video overflow-hidden rounded-xl mb-6 bg-gray-100">
                  <img 
                    src={post.img} 
                    alt={post.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out" 
                  />
                </div>
                
                <div className="space-y-3">
                  <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">
                    {post.date}
                  </span>
                  <h4 className="text-2xl md:text-3xl font-black tracking-tighter uppercase leading-tight group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-sm text-gray-500 leading-relaxed italic opacity-80 group-hover:opacity-100 transition-opacity">
                    {post.excerpt}
                  </p>
                  
                  <div className="pt-4 overflow-hidden">
                    <motion.span 
                      className="inline-block text-[10px] font-black uppercase tracking-widest border-b border-black pb-1 group-hover:text-blue-600 group-hover:border-blue-600 transition-all"
                    >
                      Read Essay
                    </motion.span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </main>

      {/* 2. Auth Overlay */}
      <AuthOverlay isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </div>
  );
}