import { motion } from 'framer-motion';


export default function CollectionsPage() {
  return (
  <section className="py-24 border-t border-black/5">
    <div className="px-6 md:px-12 mb-12 flex justify-between items-end">
      <h3 className="text-4xl font-black tracking-tighter uppercase italic">Curated <br/> <span className="font-serif font-light lowercase">Stories.</span></h3>
      <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Volume 01 — Winter 26</span>
    </div>
    
    <div className="flex gap-6 overflow-x-auto px-6 md:px-12 no-scrollbar pb-10">
      {[
        { title: "The Brutalist Set", count: "12 Pieces", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2" },
        { title: "Concrete Minimalism", count: "08 Pieces", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae" },
        { title: "Nostalgic Utility", count: "15 Pieces", img: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8" }
      ].map((col, i) => (
        <motion.div 
          key={i}
          whileHover={{ y: -10 }}
          className="min-w-[350px] md:min-w-[450px] aspect-[3/4] relative overflow-hidden rounded-2xl bg-gray-100"
        >
          <img src={col.img} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <p className="text-[9px] font-black uppercase tracking-[0.4em] mb-2 text-blue-400">{col.count}</p>
            <h4 className="text-3xl font-black tracking-tighter uppercase italic">{col.title}</h4>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
)};