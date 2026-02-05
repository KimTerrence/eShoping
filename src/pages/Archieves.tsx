import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import AuthOverlay from '../components/AuthOverlay'; // Assuming you have this
import { History } from 'lucide-react';

export default function ArchivesPage() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  // Mock data for the archive grid
  const archivalItems = [
    { name: "90s Cargo Paratrooper", price: "$320", era: "1990s", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea" },
    { name: "Japanese Selvedge", price: "$210", era: "2000s", img: "https://images.unsplash.com/photo-1542272604-787c3835535d" },
    { name: "Technical Shell", price: "$450", era: "Modern", img: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3" },
    // ... more items
  ];

  return (
    <div className="min-h-screen bg-[#FDFCF9]">
      {/* 1. Navbar stays outside the grid to span full width */}
      <Navbar onAccountClick={() => setIsAuthOpen(true)} />

      {/* 2. Main Layout Grid */}
      <main className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Sidebar Filters */}
        <aside className="lg:col-span-3 space-y-12">
          <div className="space-y-8 sticky top-32">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-6 text-blue-600">Filter By Era</h4>
              <ul className="space-y-3 text-[11px] font-bold uppercase tracking-widest text-gray-400">
                {['1980s', '1990s', '2000s Archive', 'Modern Re-sale'].map(era => (
                  <li key={era} className="hover:text-black cursor-pointer transition-colors flex items-center gap-3 group">
                    <div className="w-1.5 h-1.5 rounded-full border border-black group-hover:bg-black transition-colors" /> 
                    {era}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-6 text-blue-600">Category Index</h4>
              <ul className="space-y-3 text-[11px] font-bold uppercase tracking-widest text-gray-400">
                {['Heavy Outerwear', 'Archival Denim', 'Utility Objects', 'Footwear'].map(cat => (
                  <li key={cat} className="hover:text-black cursor-pointer transition-colors">
                    {cat}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 border-t border-black/5">
                <p className="text-[9px] text-gray-400 uppercase font-bold leading-relaxed">
                    Showing 42 Archival Pieces <br/> Verified for Volume 01.
                </p>
            </div>
          </div>
        </aside>

        {/* Main Archive Results */}
        <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
          {archivalItems.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] bg-gray-100 rounded-xl overflow-hidden mb-6 relative">
                <img src={item.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={item.name} />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest shadow-sm">
                    {item.era}
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                    <h5 className="text-xs font-black uppercase tracking-tight">{item.name}</h5>
                    <p className="text-[10px] text-gray-400 font-bold mt-1 flex items-center gap-1">
                        <History size={10} /> Authenticated Piece
                    </p>
                </div>
                <span className="text-xs font-serif italic text-gray-500">{item.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* 3. Auth Overlay for the login/signup */}
      <AuthOverlay isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </div>
  );
}